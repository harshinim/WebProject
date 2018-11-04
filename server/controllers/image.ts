var request = require('request');
var jsonpClient = require('jsonp-client');

export default class ImageCtrl {
  search = (req,res) => {
    console.log(req.query)
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsonCallback=callback&format=json&tags="+req.query.term
    jsonpClient(flickrAPI,(error, response, body) => {
      if (error) { return console.error(error); }
      console.log(response.items)
      res.status(200).json(response.items)
    });
  }

}
