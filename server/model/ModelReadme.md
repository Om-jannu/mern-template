### ADD all your Schemas over here in ./model/
// example of schema
const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        title:String,
        message:String,
    }
);

const schemaMessage = mongoose.model('schemaMessage', schema);

module.exports = schemaMessage;