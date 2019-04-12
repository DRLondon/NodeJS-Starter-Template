var express = require('express')
var join = require('path').join()
const PORT = process.env.PORT || 5000

express()
  .use(static(join(__dirname, 'public')))
  
  .set('views', join(__dirname, 'views'))
  .set('view engine', 'ejs')
  
  .get('/', (req, res) => res.render('index'))
  // .get('/', (req, res) => res.render('views'))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))