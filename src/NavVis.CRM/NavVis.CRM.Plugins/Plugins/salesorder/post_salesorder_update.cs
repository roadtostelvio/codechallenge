using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.Xrm.Sdk;

using NavVis.CRM.ObjectModel;
using NavVis.CRM.Generic.Dataverse;
using NavVis.CRM.BusinessLogic;




namespace NavVis.CRM.Plugins
{
    public class post_salesorder_update : PluginBase
    {
        public override void HandlePostUpdateMessage(PluginExecutionContext context) 
        {
            context.Trace("--- HandlePostUpdateMessage START ---");

            var currentSalesOrder = context.TargetEntity.ToEntity<SalesOrder>();

            salesorderFactory factory = new salesorderFactory(context.AdminService);

            factory.CreateDeliveryRecord(currentSalesOrder);


        }
    }
}
