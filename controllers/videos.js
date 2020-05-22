const express = require('express');
const Video = require('../models/videos.js');
const videosController = express.Router();
const show = console.log;
// const isAuthenticated = (req, res, next)=>{
//     if (req.session.currentUser){
//         return next()
//     } else {
//         res.redirect('sessions/new')
//     }
// }


// Routes



// Index
videosController.get('/', (req, res)=>{
    Video.find({}, (error, allVideos)=>{
        if (error){
            show(error);
        } else {
            res.render('Index', {videos: allVideos});
        };
    });
});

//  New



//  Edit




//  Show





//  Delete




//  Update





//  Create




module.exports = videosController;