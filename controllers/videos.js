const express = require('express');
const Video = require('../models/videos.js');
const videosController = express.Router();
const show = console.log;
const isAuthenticated = (req, res, next)=>{
    if (req.session.currentUser){
        return next()
    } else {
        res.redirect('sessions/new')
    }
}


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
videosController.get('/', isAuthenticated, (req, res)=>{
    Video.find({}, (error, allVideos)=>{
        if (error){
            show(error);
        } else {
            res.render('Index', {videos: allVideos, currentUser: req.session.currentUser});
        };
    });
});

//  New
videosController.get('/new', (req, res)=>{
    res.render('New', {currentUser: req.session.currentUser});
});


//  Edit
videosController.get('/:id/edit', (req, res)=>{
    Video.findById(req.params.id, (error, foundVideo)=>{
        if(error){
            show(error);
        } else {
            res.render('Edit', {
                video: foundVideo,
                currentUser: req.session.currentUser
            })
        }
    })
})



// SHOW
videosController.get('/:id', (req, res)=>{
    Video.findById(req.params.id, (error, foundVideo)=>{
        if (error){
            show(error)
        } else {
            res.render('Show', {
                video: foundVideo,
                currentUser: req.session.currentUser
            })
        }
    })
})




//  Delete
videosController.delete('/:id', (req, res)=>{
    Video.findByIdAndRemove(req.params.id, (error, log)=>{
        res.redirect('/videos');
    })
})



//  Update
videosController.put('/:id', (req, res)=>{
    req.body.dvd === "on" ? req.body.dvd = true: req.body.dvd = false;
    req.body.googlePlay === "on" ? req.body.googlePlay = true: req.body.googlePlay = false;
    req.body.amazonPrime === "on" ? req.body.amazonPrime = true: req.body.amazonPrime = false;
    req.body.starring = req.body.starring.split(',');
    Video.findByIdAndUpdate(req.params.id, req.body, (error, foundVideo)=>{
        if(error){
            show(error);
        } else {
            res.redirect('/videos');
        }
    });
});




//  Create
videosController.post('/', (req, res)=>{
    req.body.dvd === "on" ? req.body.dvd = true: req.body.dvd = false;
    req.body.googlePlay === "on" ? req.body.googlePlay = true: req.body.googlePlay = false;
    req.body.amazonPrime === "on" ? req.body.amazonPrime = true: req.body.amazonPrime = false;
    req.body.starring = req.body.starring.split(',');
    Video.create(req.body, (error, createdVideo)=>{
        if(error) {
            show(error);
        } else{
            res.redirect('/videos');
        }
    });
});



module.exports = videosController;