const express = require('express');
const path = require('path');
const logger = require('winston');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('./models');
const i18n = require('./middlewares/LocalizationMiddleware');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// CORS ALL ACCESS
app.use(cors());
app.use(i18n.init);

require('dotenv').config();
require('./routes')(app);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.info(`[ApiServer] Listening on Port ${PORT}`);
});

module.exports = app;