import { Flight } from "../models/flight.js"

export{
    newFlight as new,
    create,
    index,
    show,
    createTicket,
}

function createTicket(req, res){
    Flight.findById(req.params.id, function(err, flight){
      flight.tickets.push(req.body)
      console.log(req.body)
      flight.save(function(err){
        res.redirect(`/flights/${flight._id}`)
      })
    })
  }
  

function show(req, res){
    Flight.findById(req.params.id, function(err, flight){
        res.render("flights/show", {
            title: "Flight Details",
            flight: flight,
            err: err,
        })
    })
}

function newFlight(req, res){
res.render("flights/new")
}

function create(req, res){
    const flight = new Flight(req.body)
    flight.save(function(err){
        if (err){ 
        console.log(err, "err")
        res.redirect("/flights/new")
        
        } else {
            console.log("it works")
        res.redirect("/flights")
        }
    })
}

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render("flights/index", {
            flights: flights,
            err: err,
            title: "Moongose flights"
        })
    })
}