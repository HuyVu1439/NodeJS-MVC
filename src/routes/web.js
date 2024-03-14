const express = require('express'); //phai co cai nay moi dung duoc object express
const routes = express.Router();

//khai bao routes
routes.get('/', (req, res) => {
    res.render('sample.ejs')
});

routes.get('/abc', (req, res) => {
    res.send('abc');
});

module.exports = routes;
