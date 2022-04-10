const express = require('express');
const router = express.Router();

//Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.


router.get('/movies', function(req, res){
    let movies = ["James-bond", "Dil", "Dhoom", "Sin-city", "Black-Friday"]
    res.send(movies)
})
//Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api




router.get('/movies/:number', function(req, res){
    let movies = ["James-bond", "Dil", "Dhoom", "Sin-city", "Black-Friday"];
    let index = req.params.number
    if(index >= movies.length || index < 0 ){
        res.send("Invalid input")
    }else{
    res.send(movies[index])
    }
})

//Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 



router.get('/films', function(req, res){
    let films = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Demo"
       }];
       res.send(films)
       
})

//Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. 
router.get ('/films/:filmId', function(req, res){
    let movieId  = req.params.filmId
    let films =[ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Demo"
       }];
       let flag = false;
        for(let i=0; i<films.length; i++){
            let movieName = films[i]
            if (movieName.id != movieId){
                flag = false
            }else {
                 res.send(films[i])
                 break;
            }
          
        }
        if(flag == false){
            res.send("no such movie exist")
        }
       
       
});


module.exports = router;