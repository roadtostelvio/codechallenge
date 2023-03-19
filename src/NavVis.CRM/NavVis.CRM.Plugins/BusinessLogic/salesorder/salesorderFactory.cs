using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

using NavVis.CRM.ObjectModel;


namespace NavVis.CRM.BusinessLogic
{
    public class salesorderFactory
    {
        private CrmServiceContext Service { get; set; }

        public salesorderFactory(CrmServiceContext service)
        {
            Service = service;
        }

        public void CreateDeliveryRecord(SalesOrder currentSalesOrder)
        {
            var salesorder = Service.OrganizationService.Retrieve(SalesOrder.EntityLogicalName, currentSalesOrder.Id, new ColumnSet(true));

            var salesOrderCustomer = salesorder.GetAttributeValue<EntityReference>(SalesOrder.Fields.customerid);
            var salesOrderNumber = salesorder.GetAttributeValue<string>(SalesOrder.Fields.ordernumber);
            var salesOrderState = salesorder.GetAttributeValue<OptionSetValue>(SalesOrder.Fields.statecode);
            var salesOrderStatus = salesorder.GetAttributeValue<OptionSetValue>(SalesOrder.Fields.statuscode);

            // Check if the SalesOrder has Status Active (0) and Status Reason Pending (2)
            if (salesOrderState.Value == (int)SalesOrderState.Active && salesOrderStatus.Value == (int)SalesOrder_StatusCode.Pending)
            {
                // Create a new Delivery record

                Service.TracingService?.Trace($"creating new navvis_delivery");

                var newDeliveryId = Service.OrganizationService.Create(new navvis_delivery()
                {
                    navvis_orderid = new EntityReference(currentSalesOrder.LogicalName, currentSalesOrder.Id),
                    navvis_customerid = salesOrderCustomer,
                    navvis_ordernumber = salesOrderNumber,
                    navvis_deliverydate = DateTime.Now
                }); 
                Service.TracingService?.Trace($"new navvis_delivery id: {newDeliveryId}");


                CreateDeliveryLines(currentSalesOrder, newDeliveryId);

            }
        }

        public void CreateDeliveryLines(SalesOrder currentSalesOrder, Guid deliveryId)
        {
            Service.TracingService?.Trace($"creating new navvis_deliveryproducts");

            QueryExpression query = new QueryExpression(SalesOrderDetail.EntityLogicalName);
            query.ColumnSet = new ColumnSet(SalesOrderDetail.Fields.salesorderdetailid, SalesOrderDetail.Fields.salesorderdetailname, SalesOrderDetail.Fields.productid, SalesOrderDetail.Fields.quantity, SalesOrderDetail.Fields.uomid);
            query.Criteria.AddCondition(SalesOrderDetail.Fields.salesorderid, ConditionOperator.Equal, currentSalesOrder.Id);

            var orderlines = Service.OrganizationService.RetrieveMultiple(query);

            foreach (Entity orderLine in orderlines.Entities)
            {
                var newDeliveryProductId = Service.OrganizationService.Create(new navvis_deliveryproduct()
                {
                    //navvis_salesdeliverydetailname = orderLine.GetAttributeValue<string>(SalesOrderDetail.Fields.salesorderdetailname),
                    navvis_deliveryid = new EntityReference(navvis_delivery.EntityLogicalName, deliveryId),
                    navvis_productid = new EntityReference(Product.EntityLogicalName, orderLine.GetAttributeValue<EntityReference>(SalesOrderDetail.Fields.productid).Id),
                    navvis_uomid = new EntityReference(UoM.EntityLogicalName, orderLine.GetAttributeValue<EntityReference>(SalesOrderDetail.Fields.uomid).Id),
                    navvis_quantity = orderLine.GetAttributeValue<decimal>(SalesOrderDetail.Fields.quantity)
                }); 
            }
        }
        //
        
    }
}
