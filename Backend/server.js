import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import path  from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import routes from './routes/dogAppRoutes.js'
// import res from 'express/lib/response';

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

mongoose.connect(uri).catch(err => `mongoose connection error: ${err}`)

mongoose.connection.on('error', err => {
    console.log(`mongoose connection on error: ${err}`)
}) 

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join('__dirname', '../frontend/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'frontend', 'build', 'index.html'))
  })
} else { 
  app.get('*', (req, res) => res.send("Please change to production"))
}

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})
