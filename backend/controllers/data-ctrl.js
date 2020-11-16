const db = require('../db')

createData = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a game',
        })
    }

    var gameName = req.params.gameName;
    var characterName = req.params.characterName;

    console.log("Creating new character in collection -> " + gameName + " <- at the time of " + Date().toString());

    db.db.collection(gameName).insertOne(
        {
            Name:characterName
        }
    )

    return res.status(200).json({
        success: true,
        data: req.params,
    })

}

updateData = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a game to update',
        })
    }

    var gameName = req.params.gameName;
    var characterName = req.params.characterName;
//    var newName = req.params.characterNewName;

    console.log(gameName);
    console.log(characterName);

    console.log(req.body);
    //    db.db.renameCollection(oldName, newName);

    var update =  req.body;

    console.log(update);
    //var options = {upsert:false};
    db.db.collection(gameName).updateOne({Name:characterName}, { $set: update} );

    return res.status(200).json({
        success: true,
        data: 'Game -> ' + gameName + '<- updated the character  -> '+ characterName + ' <- at the time of ' + Date().toString() ,
    })
    /*
    */
}

deleteData = async (req, res) => {

    var gameName = req.params.gameName;
    var characterName = req.params.characterName;

    if(gameName == ''){
        return res.status(404).json({
            error,
            message: 'No game informed to delete!',
        })
    }

    db.db.collection(gameName).deleteOne({name:characterName}, function(err,result){

        console.log("Removed the character document with the name of -> " + characterName + " <- at the time of " + Date().toString() )
    })

    return res.status(200).json({
        success: true,
        data: "The character -> " +  characterName +  " <- was deleted from collection " + gameName,
    })
    
}

getDataByName = async (req, res) => {

    var gameName = req.params.gameName;
    var characterName = req.params.characterName;

    console.log(gameName + typeof(gameName));
    console.log(characterName + typeof(characterName));

    db.db.collection(gameName).find({name:characterName}).toArray(function(err, docs){
    
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        console.log("Found the following records at " + Date().toString() );
        console.log(docs);

        return res.status(200).json({success:true, data:docs});
    })

}


getData = async (req, res) => {
    
    db.db.collection(req.params.gameName).find({}).toArray(function(err, docs){
    
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!docs.length) {
            return res.status(404).json({ success: false, error: `No data to get` })
        }

        console.log("Found the following records");
        console.log(docs);

        return res.status(200).json({ success: true, data: docs }) 

    })
 
}
 
module.exports = {
    createData,
    updateData,
    deleteData,
    getData,
    getDataByName,
}