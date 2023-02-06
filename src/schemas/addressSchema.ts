import Joi from "joi";

const newAddressSchema = Joi.object({
    street: Joi.string().empty(" ").required(),
    number: Joi.string().empty(" ").required(),
    neighborhood: Joi.string().empty(" ").required()
});

type NewAddressType = {
    street: string,
    number: string,
    neighborhood: string
}

export {newAddressSchema, NewAddressType};