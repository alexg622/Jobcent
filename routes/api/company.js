// const express = require('express')
// const router = express.Router()
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const passport = require('passport')
// const Company = require('../../models/Company')
// const keys = require('../../config/keys')
//
// router.get('/test', (req, res) => res.json({msg: "working"}))
//
// company
//
//
// router.post('/register', (req, res) => {
//   console.log("here");
//   const newCompany = new Company({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     wallet: req.body.wallet
//   })
//   console.log(newUser);
//
//   bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newCompany.password, salt, (err, hash) => {
//           if (err) throw err
//           newCompany.password = hash
//           newUser
//             .save()
//             .then(company => res.json(company))
//             .catch(err => console.log(err))
//         })
//       })
// })
//
// router.post('/login', (req, res) => {
//   const email = req.body.email
//   const password = req.body.password
//   const errors = {}
//   // find company by email
//   User.findOne({ email }).then(company => {
//     // check for company
//     if (!company) {
//       errors.email = "User not found"
//       return res.status(404).json(errors)
//     }
//
//     // Check password
//     bcrypt.compare(password, company.password).then(isMatch => {
//       if (isMatch) {
//         const payload = company
//
//         // sign token
//         jwt.sign(
//           payload,
//           keys.secretOrKey,
//           { expiresIn: 86400 },
//           (err, token) => {
//             res.json({
//               success: true,
//               token: `Bearer ` + token
//             })
//           }
//         )
//       } else {
//         errors.password = 'Password incorrect'
//         return res.status(400).json(errors)
//       }
//     })
//   })
// })
//
//
// module.exports = router
