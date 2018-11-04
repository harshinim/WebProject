import * as express from 'express';

import ImageCtrl from './controllers/image';

export default function setRoutes(app) {

  const router = express.Router();

  const imageCtrl = new ImageCtrl();

  // Flickr Images
  router.route('/images').get(imageCtrl.search);


  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
