const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const {userRoutes} = require('./routes')

const App = express();
App.use(cors())
App.options('*', cors())
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended: false}))
App.use(express.static(path.join(__dirname, 'files')))
App.use(express.static(path.join(__dirname, 'public')))

mongoose.connect('mongodb://127.0.0.1:27017/Aptech').then(()=> console.log('db connected')).catch(err => console.log(err))

App.get('/Api/v1/', (req, res, next)=>{
  try{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  }catch(err){

  }
})

App.use('/Api/v1',userRoutes)


module.exports = App