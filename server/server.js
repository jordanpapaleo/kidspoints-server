import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import http from 'http'
import morgan from 'morgan'
import {getLocal} from './services/localDbUtils'

const app = express()
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
// app.use((req, res, next) => {
//
// })

const server = http.createServer(app)
module.exports = server

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.use(morgan('dev'))

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })

app.get('/test', (req, res, next) => {
  res
    .status(200)
    .send('Success Connection')
})

app.get('/kids', async (req, res, next) => {
  try {
    const data = await getLocal()
    console.log(data)
    res
      .send(data.kids)
  } catch (err) {
    res
      .status(500)
      .send(err)
  }
})

app.get('/transactions', async (req, res, next) => {
  try {
    const data = await getLocal()
    console.log(data)
    res
      .send(data.transactions)
  } catch (err) {
    res
      .status(500)
      .send(err)
  }
})

app.get('*', (req, res) => {
  res
    .status(404)
    .send('Not a endpoint')
})
