const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors({origin: "*"}))

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(port)
})