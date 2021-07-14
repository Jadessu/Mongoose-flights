import mongoose from "mongoose"

export{
    Flight
}

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/,     
    },
    price: {
        type: Number,
        min: 0
    }
}, {
    timestamps: true,
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", "Southwest", "United"],
        default: "n/a"
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: "DEN"
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true,
        default: "n/a"
    },
    departs: {
        type: Date,
        default: 
        function (){
            let yearFromNow = new Date()
            yearFromNow.setDate(yearFromNow.getFullYear() + 1)
            return yearFromNow
    }
},
    tickets: [ticketSchema],
}, { 
    timestamps: true,
 })

const Flight = mongoose.model("Flight", flightSchema)