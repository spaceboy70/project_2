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

//  Seed 
videosController.get('/seed', (req, res)=>{
    Video.create([
        {
            title: 'The Great Escape',
            starring: ['Steve McQueen','James Garner', 'Richard Attenborough'],
            director: 'John Sturges',
            img: 'https://m.media-amazon.com/images/M/MV5BNzA2NmYxMWUtNzBlMC00MWM2LTkwNmQtYTFlZjQwODNhOWE0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg',
            description: 'In 1943, the Germans opened Stalag Luft III, a maximum security prisoner-of-war camp designed to hold even the craftiest escape artists. In doing so, however, the Nazis unwittingly assembledthe finest escape team in military history - brilliantly portrayed here by Steve McQueen, James Garner, Charles Bronson and James Coburn - who worked on what became the largest prison breakout ever attempted.',
            dvd: true
        },
        {
            title: 'Spirited Away',
            starring: ['Daveigh Chase', 'Suzanne Pleshette', 'Miyu Irino'],
            director: 'Hayao Miyazaki',
            img: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
            description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.' ,
            dvd: true
        },
        {
            title: 'The Iron Giant',
            starring: ['Eli Marienthal', ' Harry Connick Jr.', ' Jennifer Aniston'],
            director: 'Brad Bird',
            img: 'https://m.media-amazon.com/images/M/MV5BMjIxNDU2Njk0OV5BMl5BanBnXkFtZTgwODc3Njc3NjE@._V1_UY268_CR0,0,182,268_AL_.jpg',
            description: 'A young boy befriends a giant robot from outer space that a paranoid government agent wants to destroy.' ,
            dvd: true   
        }
    ], (error, data)=>{
        if (error){
            show(error);
        } else{
            res.redirect('/videos');
        }
    });
});

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