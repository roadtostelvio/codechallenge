using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Crm.Sdk.Messages;


using NavVis.CRM.ObjectModel;

using NavVis.CRM.Generic.Dataverse.Extension;

namespace NavVis.CRM.BusinessLogic
{
    public class navvis_deliveryproductFactory
    {
        private CrmServiceContext Service { get; set; }

        public navvis_deliveryproductFactory(CrmServiceContext service)
        {
            Service = service;
        }

        public void HandleDelivery(navvis_deliveryproduct currentDeliveryProduct, Guid InitiatingUserId)
        {

            var deliveryProduct = Service.OrganizationService.Retrieve(navvis_deliveryproduct.EntityLogicalName, currentDeliveryProduct.Id, new ColumnSet(true));

            var deliveryProductState = deliveryProduct.GetAttributeValue<OptionSetValue>(navvis_deliveryproduct.Fields.statecode);
            var deliveryProductStatus = deliveryProduct.GetAttributeValue<OptionSetValue>(navvis_deliveryproduct.Fields.statuscode);
            var deliveryRef = deliveryProduct.GetAttributeValue<EntityReference>(navvis_deliveryproduct.Fields.navvis_deliveryid);


            // retrieve the delivery record
            var delivery = Service.OrganizationService.Retrieve(navvis_delivery.EntityLogicalName, deliveryRef.Id, new ColumnSet(true));

            Service.TracingService?.Trace($"navvis_delivery id: {delivery.Id.ToString()}");

            // when a Delivery Line Status Reason is set to Sent, Update the Delivery Status Reason to In Delivery.
            if (deliveryProductState.Value == (int)navvis_deliveryproductState.Active && deliveryProductStatus.Value == (int)navvis_deliveryproduct_StatusCode.Sent)
            {
                // check the delivery status: if not In Delivery set to
                var deliveryStatus = delivery.GetAttributeValue<OptionSetValue>(navvis_delivery.Fields.statuscode);
                if (deliveryStatus.Value != (int)navvis_delivery_StatusCode.InDelivery)
                {
                    UpdateDeliveryStatus(delivery, navvis_delivery_StatusCode.InDelivery);
                }
            }
            else if (deliveryProductState.Value == (int)navvis_deliveryproductState.Active && deliveryProductStatus.Value == (int)navvis_deliveryproduct_StatusCode.Delivered)
            {
                //when a Delivery Line Status Reason is set to Delivered, fill the Delivered By field with the User doing the update

                // Fill the Delivered By field by the user doing the updata

                Service.TracingService?.Trace($"UpdateDeliveredBy");

                UpdateDeliveredBy(currentDeliveryProduct, InitiatingUserId);

                // If the Status Reason value of all the Delivery Lines related to the same Delivery are set to Delivered
                // then Update the Delivery Status Reason as Delivered, if not all then Update the Delivery Status Reason to Partially Delivered.

                //Get the number of delivery products with status Delivered

                Service.TracingService?.Trace($"Get the number of delivery products with status Delivered");

                QueryExpression queryDeliveredProducts = new QueryExpression(navvis_deliveryproduct.EntityLogicalName);
                queryDeliveredProducts.ColumnSet = new ColumnSet(true);
                queryDeliveredProducts.Criteria.AddCondition(navvis_deliveryproduct.Fields.navvis_deliveryid, ConditionOperator.Equal, delivery.Id);
                queryDeliveredProducts.Criteria.AddCondition(navvis_deliveryproduct.Fields.statecode, ConditionOperator.Equal, 0);
                queryDeliveredProducts.Criteria.AddCondition(navvis_deliveryproduct.Fields.statuscode, ConditionOperator.Equal, 576350002);

                var deliveredDeliveryProduct = Service.OrganizationService.RetrieveMultiple(queryDeliveredProducts);

                Service.TracingService?.Trace($"Number of Delivered Products: {deliveredDeliveryProduct.Entities.Count.ToString()}");

                //Get the number of all delivery products

                Service.TracingService?.Trace($"Get the number of all delivery products");

                QueryExpression queryTotalNumberofDeliveryProducts = new QueryExpression(navvis_deliveryproduct.EntityLogicalName);
                queryTotalNumberofDeliveryProducts.ColumnSet = new ColumnSet(true);
                queryTotalNumberofDeliveryProducts.Criteria.AddCondition(navvis_deliveryproduct.Fields.navvis_deliveryid, ConditionOperator.Equal, delivery.Id);
                queryTotalNumberofDeliveryProducts.Criteria.AddCondition(navvis_deliveryproduct.Fields.statecode, ConditionOperator.Equal, 0);

                var totalDeliveryProduct = Service.OrganizationService.RetrieveMultiple(queryTotalNumberofDeliveryProducts);

                Service.TracingService?.Trace($"Number of Total Delivered Products: {totalDeliveryProduct.Entities.Count.ToString()}");

                if (deliveredDeliveryProduct.Entities.Count == totalDeliveryProduct.Entities.Count)
                {
                    // Update Delivery record status to Delivered

                    UpdateDeliveryStatus(delivery, navvis_delivery_StatusCode.Delivered);
                }
                else
                {
                    // Update Delivery record status to Partially Delivered

                    UpdateDeliveryStatus(delivery, navvis_delivery_StatusCode.PartiallyDelivered);

                }




            }
        }



        private void UpdateDeliveryStatus(Entity delivery, navvis_delivery_StatusCode status)
        {
            navvis_delivery updatedelivery = new navvis_delivery();
            updatedelivery.Id = delivery.Id;
            updatedelivery.statuscode = status;
            Service.OrganizationService.Update(updatedelivery);
        }

        private void UpdateDeliveredBy(navvis_deliveryproduct deliveryproduct, Guid deliveredby)
        {
            navvis_deliveryproduct updateDeliveryProduct = new navvis_deliveryproduct();
            updateDeliveryProduct.Id = deliveryproduct.Id;
            updateDeliveryProduct.navvis_deliveredby = new EntityReference(SystemUser.EntityLogicalName, deliveredby);
            Service.OrganizationService.Update(updateDeliveryProduct);
        }


    }
}
