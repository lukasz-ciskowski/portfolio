import Joi from "joi"

export const contactSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    message: Joi.string().required().min(5).max(250),
}).required()
