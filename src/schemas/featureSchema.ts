import Joi from "joi";

const newFeatureSchema = Joi.object({
    name: Joi.string().empty(" ").required(),
    type: Joi.string().valid("hotel", "attraction", "restaurant").required(),
    img: Joi.string().required(),
    price: Joi.number().integer()
});

export {newFeatureSchema};