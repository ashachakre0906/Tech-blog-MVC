const router = require('express').Router();
const {Post , User}= require('../models');
const withAuth = require('../util/auth');

//Get All Posts

router.get('/' ,withAuth, async (req ,res) => {
    try {
        const getPost = await Post.findAll(
            {
        where:{ 'userId'

    })
    }



})




module.exports = router