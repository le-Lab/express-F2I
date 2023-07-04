const datas = require('./datas')
const Data = require('../models/dataModel')
const getDatas = (req, res) => {
  res.send(datas)
}
const addDatas = (req,res) => {
const newData = new Data(req.body)
// const newData = new Data({
//   name: req.body.name,
//   description: req.body.description
// })
newData.save()
.then((saveData) => {
  res.send({msg:'Data added', data:saveData});
})
}
const updateData = (req, res) => {
  const id = parseInt(req.params.id)
  const index = datas.findIndex(data => data.id === id)
  if (index !== -1) {
    const updatedData = {
      id,
      name: req.body.name,
      description: req.body.description
    }
    datas[index] = updatedData
    res.send({msg: 'Data updated',datas})
  }else {
    res.status(404).send({error: 'Data not found'})
  }
}

const deleteData = (req, res) => {
  const id = parseInt(req.params.id)
  const index = datas.findIndex(data => data.id === id)
  if (index !== -1) { 
    datas.splice(index, 1)
    res.send({msg: 'Data deleted',datas})
  }else {
    res.status(404).send({error: 'Data not found'})
  }
}
module.exports = { getDatas, addDatas, deleteData,updateData}