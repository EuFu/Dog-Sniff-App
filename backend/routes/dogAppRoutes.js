import express from 'express'
// import { getHome } from './controller.js'
const router = express.Router()
import axios from 'axios'
import 'dotenv/config'

const key = process.env.API_KEY

router.route('/')
.get((req, res) => {
    axios.get('https://api.thedogapi.com/v1/breeds', {'x-api-key': key}).then((data) => {
        res.json(data.data)
    }).catch((err) => {
        console.log(err)
    })
    // res.send("Got Login Homepage")
})
// .post((req, res) => {
// res.send("")
// })

// router.route('/game')
// .get((req, res) => {

// })
// .post((req, res) => {

// })
// .put((req, res) => {

// })
// .delete((req, res) => {

// })

export default router