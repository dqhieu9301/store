const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 8000

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src\\resources\\views'));
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})