const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');

const adminAcessToken = config.get('adminAcessToken');
const User = require('../models/User');


router.post('/', [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            errors: errors.array()
        });
    }

    let { username, password } = req.body;

    // * acessing Database
    let fetchData = await User.findOne({
        username: username,
        password: password
    });

    if (fetchData) {
        return res.json({
            foundData: true,
            token: adminAcessToken
        });
    }

    return res.json({
        foundData: false,
    });

});

module.exports = router;