import { Destination } from "../models/destination.js"

export{
    newDestination as new,
    create
}


function newDestination(req, res){
    Destination.find({}, function (err, destinations) {
        res.render("destinations/new", {
            err,
            destinations,
            title: "Add Destination",
        })
    })
}

function create(req, res){
    
    Destination.create(req.body, function (err, destination) {
        if (err){
            return res.render("destinations/new", {
                err,
                title: "Add Destination", 
            })
        }
        res.redirect('/destinations/new')
    })
}

