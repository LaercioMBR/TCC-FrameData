const db = require('../db')
const Game = require('../models/game-models')

createGame = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a game',
        })
    }

    var gameName = req.params.name;
    console.log("Creating new game in db framedata -> " + gameName + " <- at the time of " + Date().toString());

    db.db.createCollection(gameName,function(err){
        if(err){
            console.log(err)
            return res.status(200).json({
                success: false,
                error: 'There already exists a game with that Name || Error-Code: ' + err.codeName,
            })

        }
        else{
            return res.status(200).json({
                success: true,
                message: 'Game ' + gameName + ' successfully added to the database',
            })

        }

    }); 

}

updateGame = async (req, res) => {
    console.log("Eu recebi um put as : " + Date().toString() );
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a game to update',
        })
    }

    var oldName = req.params.name;
    var newName = req.params.newname;

    console.log(oldName);
    console.log(newName);
    console.log("Game -> " + oldName + "<- updated to -> "+newName+ " <- at the time of " + Date().toString() );
    db.db.renameCollection(oldName, newName);


    return res.status(200).json({
        success: true,
        data: 'Game -> ' + oldName + '<- updated to -> '+newName+ ' <- at the time of ' + Date().toString() ,
    })
    /*
    */
}

deleteGame = async (req, res) => {

    var gameNameDelete = req.params.name;

    if(gameNameDelete == ''){
        return res.status(404).json({
            error,
            message: 'No game informed to delete!',
        })
    }

    db.db.dropCollection(gameNameDelete);

    return res.status(200).json({
        success: true,
        data: "The Game -> " +  req.params.name +  " <- was deleted",
    })
    
}

getGamesByName = async (req, res) => {

    db.db.listCollections().toArray(function(err, collections){

        //res.status(200).json(collections.length);
        var listGames = [];
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!collections.length) {
            return res
                .status(404)
                .json({ success: false, error: `No games to get` })
        }

        //itera pela collections em procura dos jogos que batem com o parametro name.
        for (var i = 0; i < collections.length; i++) {

            var name = collections[i].name.toUpperCase();
            var query = req.params.name.toUpperCase();

            if(name.includes( query ) )
                listGames.push(collections[i].name)
        }
        console.log("eu recebi um get com parametro as : " + Date().toString());
        
        //se lista estiver vazia, não achou um game com o parametro dado.
        if(listGames.length == 0)
            return res.status(200).json({ success: true, data: "No games matched the query" })
        else
            return res.status(200).json({ success: true, data: listGames }) 
    })
}

getGames = async (req, res) => {

    //https://docs.mongodb.com/manual/reference/command/listCollections/#dbcmd.listCollections
    db.db.listCollections(filter= {}, options = {nameOnly:true}) .toArray(function(err, collections){

        //res.status(200).json(collections.length);

        var listGames = [];
        if (err) {
            console.log("I received an get and had an error : " + Date().toString());
            return res.status(400).json({ success: false, error: err })
        }

        if (!collections.length) {
            console.log("I received an get and had an error : " + Date().toString());
            return res.status(404).json({ success: false, error: `No games to get` })
        }
        
        for (var i = 0; i < collections.length; i++) {

            listGames.push(collections[i].name)
            //Do something
        }
        console.log("I received an get at : " + Date().toString());
        
        //data can be 'listGames' for only the names of the collections or 'collections' for everything 'listCollections()' gives back.
        return res.status(200).json({ success: true, data: collections });
    })
    //.catch(err => console.log(err))
    //this catch is sending some deprecation warnings so I commented it.
}

module.exports = {
    createGame,
    updateGame,
    deleteGame,
    getGames,
    getGamesByName,
}