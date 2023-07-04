const express = require('express');
const app = express();
const port = process.env.PORT || 4600
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/datadb', {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log(`[DATABASE] Connected to MongoDB`))
.catch(err => console.error(`Failed to connect to MongoDB`, err))



app.use(express.urlencoded({extended:false}))
app.get('/', (req, res) =>{
  res.send("COUCOU")
})

app.use('/api', require('./routes/basicRoute'))

app.listen(port, () => console.log(`[SERVER] is running on port ${port}`))