const db = require('../db')

getDataSchema = async (req,res) =>{
    console.log("Dentro de getDataSchema");
    db.db.collection(req.params.gameName).find({name:'Data-Schema'}).toArray(function(err, docs){
        return res.status(200).json({ success: true, data: docs }) 
    });
}

putDataSchema = async (req,res) =>{
    console.log("Dentro de putDataSchema");
    db.db.collection(req.params.gameName).updateOne({name:'Data-Schema'}).toArray(function(err, docs){
        return res.status(200).json({ success: true, data: docs }) 
    });
}

deleteDataSchema = async (req,res) =>{
    console.log("Dentro de deleteDataSchema");
    db.db.collection(req.params.gameName).find({name:'Data-Schema'}).toArray(function(err, docs){
        return res.status(200).json({ success: true, data: docs }) 
    });
}

module.exports = {
    getDataSchema,
    putDataSchema,
    deleteDataSchema,

}
