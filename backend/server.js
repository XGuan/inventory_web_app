import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import userRoutes from './routes/userRoutes.js'

const __dirname = path.resolve()

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: __dirname + '/env/mongo.env',
  })
}

// connectDB()

const app = express()

app.use('/api/users', userRoutes)
// app.use(express.json())

app.get('/ping', (req, res) => res.send('ok'))

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
