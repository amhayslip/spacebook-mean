var express = require('express');
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var router = express.Router();

// TODO: Use these routes instead of the one's inside app.js

// router.get('/posts', function(req, res, next) {
//   Post.find(function(err, posts){
//     if(err){ return next(err); }

//     res.json(posts);
//   });
// });

// router.post('/posts', function(req, res, next) {
//   var post = new Post(req.body);

//   post.save(function(err, post){
//     if(err){ return next(err); }

//     res.json(post);
//   });
// });

// router.delete('/posts/:post', function (req, res) {
//   req.post.remove(function(err, post) {
//     if (err) { return next(err); }

//     res.json(post);
//   });
// });