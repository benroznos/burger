const burger = require('../models/burger')
const express = require('express')

const router = express.Router()

router.use(express.urlencoded(extended = true))
router.use(express.json())

// Burger Routes

// GET all burgers
router.get('/burger', (req, res) => {
  burger.getAll((results) => {
    res.json(results)
  })
})

router.post('/burger', (req, res) => {
  burger.create(req.body.name)
  res.sendStatus(200)
})

router.put('/burger', (req, res) => {
  burger.devour(req.body.id)
  res.sendStatus(200)
})

// DELETE
// router.delete('/burgers/:id', (req, res) => {
//   orm.deleteOne('burgers', { id: req.params.id }, info => {
//     res.json(info)
//   })
// })



module.exports = router