const path = require('path');
const express = require('express')
const app = express()
console.log(path.join(__dirname, '../express'));
const sttcPthl = path.join(__dirname, '../paths');
app.use(express.static(sttcPthl))
app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})

