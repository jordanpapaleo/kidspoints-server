import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import http from 'http'
import morgan from 'morgan'
import {getLocal} from './services/localDbUtils'
import generateMockData from './data/mock-data'

const app = express()
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

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

app.get('/mock-data', async (req, res, next) => {
  const mockData = await generateMockData()
  res
      .status(200)
      .json(mockData)
})

app.get('/test', (req, res, next) => {
  res
    .status(200)
    .send('Success Connection')
})

app.get('*', (req, res) => {
  res
    .status(404)
    .send('Not a endpoint')
})
