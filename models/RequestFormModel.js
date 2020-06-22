const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Request Form schema
*/

const RequestFormSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, default: '' },
});

const RequestForm = mongoose.model('RequestForm', RequestFormSchema);

module.exports = RequestForm;