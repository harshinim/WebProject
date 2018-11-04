import * as chai from 'chai';
import { describe, it } from 'mocha';

process.env.NODE_ENV = 'test';
import { app } from '../app';

chai.use(require('chai-http')).should();

describe('Images', () => {



  describe('Backend tests for flickr images', () => {

    it('should get 20 flickr images by default', done => {
      chai.request(app)
        .get('/api/images')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(20);
          done();
        });
    });

    it('should get 20 flickr images for a specific search', done => {
      chai.request(app)
        .get('/api/images?term=Babies')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(20);
          done();
        });
    });

  });

});


