const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("get on /");
  res.send('Hello Danny!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})