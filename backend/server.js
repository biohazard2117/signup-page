const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/route')
const cors = require('cors');

dotenv.config();

app.use(express.json());
app.use(cors());
app.use('/app',routesUrls);

mongoose.connect(process.env.DATABASE_ACCESS)
.then(result => {
    console.log('Database connected');
    app.listen(4000, ()=> {
        console.log('server is up and running');
    })
})
.catch(err => {
    console.log(err);
});


