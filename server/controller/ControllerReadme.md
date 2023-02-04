### // example of retrieve a message/document into the mongo database/cluster


const SchemaMessage = require("../model/homeModel.js");
module.exports = {
    post: async(req,res) =>{
        try{
            const schemaMessage = await ShemaMessage.find();
            res.status(200).json(schemaMessage);

        } catch(error){
            res.status(404).json({message : error.message})
        }
    }
};

### // example of inserting a message/document into the mongo database/cluster

const SchemaMessage = require("../model/homeModel.js");

module.exports = {
    post: async(req,res) =>{
        const message = req.body;
        const newSchemaMessage = new SchemaMessage(message);

        try{
            const newschemaMessage.save();
            res.status(200).json(newschemaMessage);

        } catch(error){
            res.status(409).json({message : error.message})
        }
    }
};
