import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import userRoutes from './routes/userRoutes.js'
import storageRoutes from './routes/storageRoutes.js'

const __dirname = path.resolve()

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: __dirname + '/env/mongo.env',
  })
}

connectDB()

const app = express()
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/storage', storageRoutes)

app.get('/ping', (req, res) => res.send('ok'))

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
