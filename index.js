const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.send('fff')
})




app.listen(port, () => {
    console.log(`your are listening on ${port}`)
})