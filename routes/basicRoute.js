const { getDatas, addDatas, deleteData, updateData } = require('../controllers/basicController');

const router = require('express').Router();

router.get('/greetings/:name', (req, res) =>{
  res.send(`Bonjour ${req.params.name}`)
  })
  router.get('/datas', getDatas)
  router.post('/add', addDatas)
  router.delete('/:id', deleteData)
  router.put('/:id', updateData)


  module.exports = router