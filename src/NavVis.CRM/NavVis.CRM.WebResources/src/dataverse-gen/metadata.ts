/* eslint-disable*/
import { navvis_deliveryMetadata } from "./entities/navvis_delivery";
import { navvis_deliveryproductMetadata } from "./entities/navvis_deliveryproduct";

export const Entities = {
  navvis_delivery: "navvis_delivery",
  navvis_deliveryproduct: "navvis_deliveryproduct",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    navvis_delivery: navvis_deliveryMetadata,
    navvis_deliveryproduct: navvis_deliveryproductMetadata,
  },
  actions: {
  }
};