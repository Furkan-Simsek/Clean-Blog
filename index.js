const express = require('express');
const ejs = require('ejs');
const app = express();

const myLoger = (req, res, next) => {
  console.log('Middleware is Working...');
  next();
};

//MIDDLEWARE
app.use(express.static('public'));
app.use(myLoger);


app.get('/', (req, res) => {

    const photo = {
        id: 1,
        name: "Photo Name",
        description: "Photo description"
    }
    res.send(photo)
})

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı..`);
});