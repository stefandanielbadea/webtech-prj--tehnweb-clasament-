var models  = require('../models');
var express = require('express');
var router  = express.Router();


var Campionat = models.Campionat;

//create a Championship

router.post('/Campionat', function (req,res) {
    // body...
    Campionat.create(req.body).then(function (campionat) {
        // body...
        Campionat.findById(campionat.NumeCampionat).then(function(campionat){
            res.status(201).send(campionat);
    });
});
});

//returns championships
router.get('/Campionat', function(req,res){
    Campionat.findAll().then(function(campionat){
        res.status(200).send(campionat);
    });
});

//return a championship by name

router.get('campionat/:NumeCampionat', function(req, res) {
    Campionat.findById(req.params.NumeCampionat).then(function(campionat){
        if(campionat){
            res.status(200).send(campionat);
        }
        else {
            res.status(404).send(console.log("Championship UNKNOWN"));
        }
    });
});

//delete championship by it's name

router.delete('/campionat/:NumeCampionat', function(req, res) {
    Campionat
    .findById(req.params.NumeCampionat).then(function(campionat){
        if(campionat)
        {
            campionat
            .destroy()
            .then(function(){
                res.status(204).send(console.log("The championship is deleted due the fact that it has no buget"));
                
})
.catch(function(error){
    console.warn(error);
    res.status(400).send(console.log("The championship cannot be deleted"));
    });
}
else{
    res.status(404).send(console.log("UNKNOWN"));
            }
        });
    });


module.exports = router;