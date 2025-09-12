const httpStatus = require("http-status");

const validate = (schema) => async (req, res, next) => {
  try {
    const dataToValidate = { ...req.body, ...req.params, ...req.query };
    await schema.validateAsync(dataToValidate, { abortEarly: false });
    next();
  } catch (error) {
    const errors = error.details ? error.details.map((d) => d.message) : error.message;
    return res.status(400).json({
        status:"fail",
        statusCode:400,
      message: errors
      
    });
  }
};

module.exports={validate}
