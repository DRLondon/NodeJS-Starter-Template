var express = require('express')
var app = express()
var http = require('http').Server(app).listen(process.env.PORT || 5000)
var PORT = process.env.PORT || 5000
// var path = require('path')


// Standard from JOMA
/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  // .use(express.static(__dirname))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  .get('/', (req, res) => res.render('index'))


  .use('/css', express.static(__dirname + '/public/css'))


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/

app.use(express.static(__dirname))
app.use("/css", express.static(__dirname + "./public/css"))
app.use("/js", express.static(__dirname + "/public/js"))
app.use("/img", express.static(__dirname + "/public/img"))
app.use("/html", express.static(__dirname + "/public/html"))
app.use("/json", express.static(__dirname + "/public/json"))

console.log(`Running on port ${PORT}`)

app.get("/", function(req, res){
    res.sendFile(__dirname + '/views/index.html')
})