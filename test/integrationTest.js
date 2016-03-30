var request = require('supertest');
var assert = require('assert');
var express = require('express');
var app = require('../server/server.js');
var expect = require('chai').expect;

    describe('GET', function () {
      it('responds with a 200 (OK)', function (done) {
        request(app)
          .get('/fetch')
          .expect(200,done)
          // .end(done)
      });
    });

  it('respond with json', function(done){
    request(app)
      .get('/fetch')
      // .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        console.log("I am here");
        if (err) {
          console.log(err)
        } 
        done()
      });
  });


describe('GET /fetch', function(){
  it('res.body should have array of videos', function(done){
    request(app)
      .get('/fetch')
      .set('Accept', 'application/json')
      .expect(function(res) {
        console.log("es.bodyis", res.body)
       
      })
      .expect(200, {0:{id: 'some fixed id'}}, done);
      
  });
});