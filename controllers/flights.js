import { Flight } from "../models/flight.js"
import { Destination } from "../models/destination.js"


export{
    newFlight as new,
    create,
    index,
    show,
    createTicket,
    addDestination,
    deleteFlight as delete
}

function addDestination(req, res){
    Flight.findById(req.params.id, function(err, flight){
        console.log(flight)
        flight.destinations.push(req.body.destinationId)
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function createTicket(req, res){
    Flight.findById(req.params.id, function(err, flight){
      flight.tickets.push(req.body)
      console.log(req.body)
      flight.save(function(err){
          console.log(err)
        res.redirect(`/flights/${flight._id}`)
      })
    })
  }
  

function show(req, res){
    Flight.findById(req.params.id)
    .populate("destinations")
    .exec(function (error, flight){
        Destination.find({}, (err, destinations) => {
                    res.render("flights/show", {
                        title: "Flight Details",
                        flight: flight,
                        destinations: destinations,
                        err: err,
                })
                 })
    })
}
function newFlight(req, res){
res.render("flights/new", {
    title: "Add Flight",
})
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
            title: "ALL FLIGHTS"
        })
    })
}

function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err, flight) {
        console.log(err)
        res.redirect('/flights')
    })
}