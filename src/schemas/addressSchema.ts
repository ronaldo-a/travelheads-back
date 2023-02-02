import Joi from "joi";

const newAddressSchema = Joi.object({
    street: Joi.string().empty(" ").required(),
    number: Joi.string().empty(" ").required(),
    neighborhood: Joi.string().empty(" ").required(),
    cityName: Joi.string().empty(" ").required(),
    countryName: Joi.string().empty(" ").required()
});

type NewAddressType = {
    street: string,
    number: string,
    neighborhood: string,
    cityName: string,
    countryName: string
}

export {newAddressSchema, NewAddressType};