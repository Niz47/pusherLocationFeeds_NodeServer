var pusher = require("pusher")
    var express = require("express")
    var Pusher = require("pusher")
    var bodyParser = require("body-parser")
    var pusher = new Pusher({
        appId: "622365",
        key: "73a7cb69f9e895315ce3",
        secret: "ac27d21d86b9e1e21101",
        cluster: "ap1"
      });
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.post('/location', (req, res,next)=>{
        
        var longitude = req.body.longitude;
        var latitude = req.body.latitude;
        var username = req.body.username;
      
        pusher.trigger('feed', 'location', {longitude, 
latitude,username});
        res.json({success: 200});
    });
    app.listen(4040, function () {
        console.log('Listening on 4040')
      })
