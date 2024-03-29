const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Dev!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
