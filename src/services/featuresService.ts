import { features } from "@prisma/client";
import { createFeature } from "../repositories/featureRepository.js";
import { NewAddressType } from "../schemas/addressSchema.js";

async function insertFeature( featureData: Omit<features, "id">, addressData: NewAddressType) {
    
    try {
        const feature = await createFeature(featureData, addressData);
        return feature;
    } catch (error) {
        throw error;
    } 
}

export { insertFeature };