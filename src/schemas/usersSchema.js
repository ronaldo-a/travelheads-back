import Joi from "joi";

const newUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    name: Joi.string().empty(" ").required(),
    img: Joi.string().uri()
});

export { newUserSchema };