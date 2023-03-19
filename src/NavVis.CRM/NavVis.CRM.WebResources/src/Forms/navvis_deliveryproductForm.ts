import { navvis_deliveryproductAttributes }  from "../dataverse-gen/entities/navvis_deliveryproduct";



export class navvis_deliveryproductForm {
    static async onload(context: Xrm.Events.EventContext): Promise<void> {
        const optionSetValue = this.getOptionSetValue(context, "statuscode");
        context.getFormContext().getAttribute("statuscode").addOnChange(navvis_deliveryproductForm.onStatusChanged);
        await this.hidedisplayOptionSetValue(context, optionSetValue);
        
    }

    static async hidedisplayOptionSetValue(executionContext: Xrm.Events.EventContext, optionSetValue: number): Promise<void> {
    try {
         // Get the form context from executionContext
         const formContext = executionContext.getFormContext();

         // Get the option set control using the schema name
         const optionSetControl = formContext.getControl<Xrm.Controls.OptionSetControl>("header_statuscode");
         
             if (optionSetControl) {
             
             switch ( optionSetValue ) {
                 case 1:
                     // Remove the option set value with the target value to remove
                     optionSetControl.removeOption(576350002);
                     break;
                 case 2:
                     // Remove the option set value with the target value to remove
                     optionSetControl.removeOption(576350002);
                     break;
                 default: 
                     break;
              }
              formContext.data.refresh(false); 
             
            
         }
        
    } catch (error) {
        console.log(error);
    }
       
          

    }
    static getOptionSetValue(executionContext: Xrm.Events.EventContext, attributeName: string): number {
        
        let optionSetValue: number = 0
        try {
            // Get the form context from executionContext
            const formContext = executionContext.getFormContext();
        
            // Get the option set attribute using the schema name
            const optionSetAttribute = formContext.getAttribute<Xrm.Attributes.OptionSetAttribute>(attributeName);
        
            if (optionSetAttribute) {
                // Get the selected option
                const selectedOption = optionSetAttribute.getSelectedOption();
        
                // Get the option set value
                optionSetValue = selectedOption.value;
                    }
        
    } catch (error) {
        console.log(error);
    }
    return optionSetValue;
    }

    static onStatusChanged(executionContext: Xrm.Events.EventContext): void 
    {
        const formContext = executionContext.getFormContext();
        formContext.data.refresh(true);
    }
    
  }