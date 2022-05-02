import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import path  from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import routes from './routes/dogAppRoutes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = process.env.PORT
const uri = process.env.URI

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
app.use('/game', routes)

app.use(express.static(path.join('__dirname', '../frontend/build')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
})


mongoose.connect(uri).catch(err => `mongoose connection error: ${err}`)

mongoose.connection.on('error', err => {
    console.log(`mongoose connection on error: ${err}`)
}) 

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})
