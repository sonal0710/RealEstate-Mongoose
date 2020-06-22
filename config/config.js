const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');
const { join } = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

//env variable schema
const envVarsSchema = Joi.object()
  .keys({
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description('Mongo DB URL'),
    JWT_SECRET: Joi.string().required().description('JWT Secret Key'),
    DEFAULT_LANGUAGE: Joi.string().required().default('en'),
    LANGUAGES: Joi.string().required().description('Languages used by app')
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret: envVars.JWT_SECRET
  },
  default_lan: envVars.DEFAULT_LANGUAGE,
  languages: envVars.LANGUAGES
};