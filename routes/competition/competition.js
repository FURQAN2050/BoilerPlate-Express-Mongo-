const router = require('express').Router();
const Competition = require('../../models/competition')
const mongoose = require('mongoose')

router.get('/competition', (req, res, next) => {
    //console.log("get competetion");
    Competition.find({}, function(err, results) {
      //  console.log(results)
        res.status(200).json(results)
      });
})
router.get('/competition/:competionId', (req, res, next)=>{
    const id = req.params.competionId;
    console.log(id);
    Competition.findById(id, (err, results)=>{
        res.status(200).json(results);
    } );
})

router.post('/competition', (req, res, next) =>{
    console.log(req.body);
    const {
        name,
        place,
        users,
        fee,
        priceMoney,
        startDate,
        endDate,
        noofdays,
        pigeons,
    } = req.body;
    const _id = new mongoose.Types.ObjectId();
    const competition = new Competition({
        _id,
        name,
        place,
        users,
        fee,
        priceMoney,
        startDate,
        endDate,
        noofdays,
        pigeons,
    });
    competition.save().then( result =>{
            res.status(200).json(result);
        })
        .catch( err =>{
            res.status(500).json({
                error: err
            })
        })
})



router.put('/competition', (req, res, next) =>{
   console.log("enter in function perfectly");
  console.log(req.body);
//  res.end();
// Competition.findById(req.body._id)
    Competition.findByIdAndUpdate(req.body.id,{
 name:req.body.name,
place:req.body.place,
users:req.body.user,
fee:req.body.fee,
priceMoney:req.body.pricemoney,
startDate:req.body.startdate,
endDate:req.body.enddate,
leaderBoard:req.body.leaderboard,
pigeons:req.body.pigeons,
     },function(err,results){
    if(err)
        {
            res.send(err)
        }
        else{
            console.log(results);
        }

     })
    
 })



module.exports = router;