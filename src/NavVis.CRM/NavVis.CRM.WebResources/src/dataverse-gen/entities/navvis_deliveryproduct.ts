/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity navvis_deliveryproduct
export const navvis_deliveryproductMetadata = {
  typeName: "mscrm.navvis_deliveryproduct",
  logicalName: "navvis_deliveryproduct",
  collectionName: "navvis_deliveryproducts",
  primaryIdAttribute: "navvis_deliveryproductid",
  attributeTypes: {
    // Numeric Types
    importsequencenumber: "Integer",
    navvis_quantity: "Decimal",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    navvis_uomid: ["mscrm.uom"],
    navvis_productid: ["mscrm.product"],
    navvis_deliveryid: ["mscrm.navvis_delivery"],
    navvis_deliveredby: ["mscrm.systemuser"],
    navvis_SalesOrderDetail: ["mscrm.salesorderdetail"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
  },
};

// Attribute constants
export const enum navvis_deliveryproductAttributes {
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  ImportSequenceNumber = "importsequencenumber",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  navvis_deliveredby = "navvis_deliveredby",
  navvis_deliveredbyName = "navvis_deliveredbyname",
  navvis_deliveredbyYomiName = "navvis_deliveredbyyominame",
  navvis_deliveryid = "navvis_deliveryid",
  navvis_deliveryidName = "navvis_deliveryidname",
  navvis_deliveryproductId = "navvis_deliveryproductid",
  navvis_productid = "navvis_productid",
  navvis_productidName = "navvis_productidname",
  navvis_quantity = "navvis_quantity",
  navvis_salesdeliverydetailname = "navvis_salesdeliverydetailname",
  navvis_SalesOrderDetail = "navvis_salesorderdetail",
  navvis_SalesOrderDetailName = "navvis_salesorderdetailname",
  navvis_uomid = "navvis_uomid",
  navvis_uomidName = "navvis_uomidname",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  statecode = "statecode",
  statuscode = "statuscode",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface navvis_deliveryproduct extends IEntity {
  // Created By LookupType Unique identifier of the user who created the record.
  createdby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  createdonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Modified By LookupType Unique identifier of the user who modified the record.
  modifiedby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  modifiedonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // DeliveredBy LookupType
  navvis_deliveredby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  navvis_deliveredbyname?: string | null;
  //  StringType
  navvis_deliveredbyyominame?: string | null;
  // Delivery LookupType
  navvis_deliveryid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  navvis_deliveryidname?: string | null;
  // Delivery Product UniqueidentifierType Unique identifier for entity instances
  navvis_deliveryproductid?: import("dataverse-ify").Guid | null;
  // Product LookupType
  navvis_productid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  navvis_productidname?: string | null;
  // Quantity DecimalType
  navvis_quantity?: number | null;
  // Name [Required] StringType
  navvis_salesdeliverydetailname?: string;
  // Order Product LookupType
  navvis_salesorderdetail?: import("dataverse-ify").EntityReference | null;
  //  StringType
  navvis_salesorderdetailname?: string | null;
  // Unit LookupType
  navvis_uomid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  navvis_uomidname?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Owner Id
  ownerid?: import("dataverse-ify").EntityReference | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("dataverse-ify").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("dataverse-ify").EntityReference | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("dataverse-ify").EntityReference | null;
  // Status navvis_deliveryproduct_navvis_deliveryproduct_statecode Status of the Delivery Product
  statecode?: import("../enums/navvis_deliveryproduct_navvis_deliveryproduct_statecode").navvis_deliveryproduct_navvis_deliveryproduct_statecode | null;
  // Status Reason navvis_deliveryproduct_navvis_deliveryproduct_statuscode Reason for the status of the Delivery Product
  statuscode?: import("../enums/navvis_deliveryproduct_navvis_deliveryproduct_statuscode").navvis_deliveryproduct_navvis_deliveryproduct_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}
