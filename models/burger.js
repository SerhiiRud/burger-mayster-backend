const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const burgerSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Set name for item"],
    },

    ingredients: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

burgerSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  category: Joi.string().required(),
  name: Joi.string().required(),
  ingredients: Joi.array().required(),
  price: Joi.number().required(),
});

const Burger = model("burger", burgerSchema);

const schemas = {
  addSchema,
};

module.exports = {
  Burger,
  schemas,
};
