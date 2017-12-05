// messages-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const messages = new Schema({
    title: { type: String, required: true },
     body: { type: String, required: true}
  }, {
    timestamps: true
  });

  return mongooseClient.model('messages', messages);
};
