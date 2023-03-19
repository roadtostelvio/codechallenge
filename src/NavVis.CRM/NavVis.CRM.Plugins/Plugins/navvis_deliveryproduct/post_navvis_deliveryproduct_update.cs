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
    public  class post_navvis_deliveryproduct_update : PluginBase
    {
        

        public override void HandlePostUpdateMessage(PluginExecutionContext context)
        {
            context.Trace("--- HandlePostPostMessage START ---");

            var currentEntity = context.TargetEntity;
            var currentdeliveryproduct = currentEntity.ToEntity<navvis_deliveryproduct>();

            context.Trace("Creating factory");
            navvis_deliveryproductFactory factory = new navvis_deliveryproductFactory(context.AdminService);


            
            var InitiatingUserId = context.PluginContext.InitiatingUserId;

            factory.HandleDelivery(currentdeliveryproduct, InitiatingUserId);

            context.Trace("--- HandlePostPostMessage STOP ---");
        }
    }
}
