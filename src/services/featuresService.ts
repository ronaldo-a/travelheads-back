import { features } from "@prisma/client";
import { createFeature, findFeaturesByCityId, findFeaturesByTravelId } from "../repositories/featureRepository.js";
import { NewAddressType } from "../schemas/addressSchema.js";

async function insertFeature( featureData: Omit<features, "id">, addressData: NewAddressType, travelId: number) {
    
    try {
        const feature = await createFeature(featureData, addressData, travelId);
        return feature;
    } catch (error) {
        throw error;
    } 
}

async function searchFeaturesByCityId(cityId: number) {
    try {
        const features = await findFeaturesByCityId(cityId);
        return features;
    } catch (error) {
        throw error
    }
}

async function searchFeaturesByTravelId(travelId: number) {
    try {
        const features = await findFeaturesByTravelId(travelId);
        return features;
    } catch (error) {
        throw error
    }
}

export { insertFeature, searchFeaturesByCityId, searchFeaturesByTravelId };