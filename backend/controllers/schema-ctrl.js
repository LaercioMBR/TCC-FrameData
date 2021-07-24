const db = require('../db')

getDataSchema = async (req,res) =>{
    console.log("Dentro de getDataSchema");
    db.db.collection(req.params.gameName).find({name:'Data-Schema'}).toArray(function(err, docs){
        return res.status(200).json({ success: true, data: docs }) 
    });
}

putDataSchema = async (req,res) =>{
    console.log("Dentro de putDataSchema");
    let path = req.body.path;
    let value = req.body.value;

    let update = { $set: { [path]:value } };

    console.log(update);
    db.db.collection(req.params.gameName).updateOne({name:'Data-Schema'},update).then( () => {
        return res.status(200).json({ success: true, message: "Data succesfully sent" + body }) 
    }).catch( (error) => {
        return res.status(400).json({ success: false,   error: error       });
    });
}

deleteDataSchema = async (req,res) =>{
    console.log("Dentro de deleteDataSchema");
    
    //console.log(update.toString() + typeof(update));
    
    //I'm so sorry
    //Actually it didn't turn out as bad as I thought it would... BUT
    // EXAMPLE OF REQUEST BODY =>> { "path":"datalist.attackDataList.Stun" }
    let path = req.body.path;
    
    const body = { [path] : '' } ;//req.body;//req.body;
    
    console.log(JSON.stringify(body).toString());

    let update = { $unset :  body };
    
    db.db.collection(req.params.gameName).updateOne({name:'Data-Schema'},update).then(  () => {

        return res.status(200).json({ success: true, message: "Data delete" + body }) 
        
    }).catch( (error) => {
        return res.status(400).json({ success: true,   error: error       });
    });

}

module.exports = {
    getDataSchema,
    putDataSchema,
    deleteDataSchema,
}
