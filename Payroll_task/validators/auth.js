 const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email cannot be empty",
      "string.email": "Provide a valid email",
      "any.required": "Email is required",
    }),
  password: Joi.string().required().messages({
    "string.empty": "Password cannot be empty",
    "any.required": "Password is required",
  }),
});

 const forgotPas = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email cannot be empty",
      "string.email": "Provide a valid email",
      "any.required": "Email is required",
    }),
})

module.exports={loginSchema,forgotPas}