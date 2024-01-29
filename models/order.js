const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const orderSchema = new Schema(
  {
    contents: {
      type: Array,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

orderSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  contents: Joi.array().required(),
});

const Order = model("orderer", orderSchema);

const schemas = {
  addSchema,
};

module.exports = {
  Order,
  schemas,
};
