const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


const env = process.env.NODE_ENV;
if (env === undefined) {
  console.log(`NODE_ENV is ${env}`);
  console.log('SET NODE_EV!!! development or test or production');
  process.exit(1);
}

const model = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.r = (result) => {
    res.json({
      isSuccess: true,
      status: 200,
      description: '성공',
      message: 'success',
      result,
    });
  };
  next();
});

// CORS ALL ACCESS
app.use(cors());



require('./routes')(app);

const PORT = 3000;

app.listen(PORT, () => {
  // model.sequelize.sync();
  console.info(`[ApiServer] Listening on Port ${PORT} / at ${env} Env`);
});

module.exports = app;