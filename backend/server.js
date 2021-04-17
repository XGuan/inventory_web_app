import express from 'express'
import colors from 'colors'

const app = express()

app.get('/ping', (req, res) => res.send('ok'))
// app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
