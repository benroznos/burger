const express = require('express')
const app = express()
const expbs = require('express-handlebars')
const router = require('./controllers/burgers_controller')
const path = require('path')

app.use('/api', router)
app.use(express.static(path.join(__dirname,'/public')))

app.engine('handlebars',expbs())
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{
  res.render('index.handlebars')
})
app.listen(process.env.PORT,()=> console.log('http://localhost:3000'))