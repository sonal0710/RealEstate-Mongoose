const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * ContactUs schema
*/

const ContactUsSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  service_concern: { type: String, required: true },
  query: { type: String, default: '' },
});

const ContactUs = mongoose.model('ContactUs', ContactUsSchema);

module.exports = ContactUs;