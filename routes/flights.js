import { Router } from 'express'
const router = Router()
import * as flightsCtrl from "../controllers/flights.js"

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource')
// })
router.delete("/:id", flightsCtrl.delete)

router.get("/", flightsCtrl.index)

router.get("/new", flightsCtrl.new)

router.get("/:id", flightsCtrl.show)



router.post("/", flightsCtrl.create)

router.post("/:id/tickets", flightsCtrl.createTicket)

router.post("/:id/destinations", flightsCtrl.addDestination)


export {
  router
}
