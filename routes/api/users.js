const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const User = require('../../models/User')
const keys = require('../../config/keys')

router.get('/test', (req, res) => res.json({msg: "working"}))




router.post('/register', (req, res) => {
  console.log("here");
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    wallet: req.body.wallet,
    company: req.body.company
  })
  console.log(newUser);

  bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })
      })
})

router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const errors = {}
  // find user by email
  User.findOne({ email }).then(user => {
    // check for user
    if (!user) {
      errors.email = "User not found"
      return res.status(404).json(errors)
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = user

        // sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 86400 },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ` + token
            })
          }
        )
      } else {
        errors.password = 'Password incorrect'
        return res.status(400).json(errors)
      }
    })
  })
})


module.exports = router
