const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignupModels')

router.post('/signup', (req,res) => {
    const signUpUser = new signUpTemplateCopy({
        fullName: req.body.fullName,
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password
    })

    signUpUser.save()
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.log(err);
    });
});

module.exports = router ;