import { Destination } from "../models/destination.js"

export{
    newDestination as new,
}


function newDestination(req, res){
    Destination.find({}, function (err, destinations) {
        res.render("destinations", 
        {err,
        destinations
            })
    })
}

