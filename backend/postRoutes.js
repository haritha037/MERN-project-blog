const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;

let postRoutes = express.Router();

// CRUD
// #1 - Get all
// http://localhost:3000/posts
postRoutes.route("/").get((request, response) => {
  response.json("hello");
});

postRoutes.route("/posts").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("posts").find({}).toArray();

  if (data.length > 0) {
    return response.json(data);
  } else {
    throw new Error("Data was not found :(");
  }
});

// #2 - Get by id
// http://localhost:3000/posts/23e4
postRoutes.route("/posts/:id").get(async (request, response) => {
  let db = database.getDb();

  const postId = ObjectId.createFromHexString(request.params.id);

  let data = await db.collection("posts").findOne({
    _id: postId,
  });

  // check whether the object is empty
  if (Object.keys(data).length > 0) {
    return response.json(data);
  }

  throw new Error("Data was not found :(");
});

// #3 - Create
// http://localhost:3000/posts
postRoutes.route("/posts").post(async (request, response) => {
  let db = database.getDb();

  console.log(request.body);

  // let mongoObj = {
  //   title: request.body.title,
  //   description: request.body.description,
  //   content: request.body.content,
  //   author: request.body.author,
  //   dateCreated: request.body.dateCreated,
  // };
  let mongoObj = request.body;

  let data = await db.collection("posts").insertOne(mongoObj);

  return response.json(data);
});

// #4 - Update by id
// http://localhost:3000/posts
postRoutes.route("/posts/:id").put(async (request, response) => {
  const postId = ObjectId.createFromHexString(request.params.id);

  let db = database.getDb();

  let mongoObj = {
    $set: request.body,
  };

  let data = await db.collection("posts").updateOne({ _id: postId }, mongoObj);

  return response.json(data);
});

// #5 - Delete by id
// http://localhost:3000/posts/23e4
postRoutes.route("/posts/:id").delete(async (request, response) => {
  let db = database.getDb();

  const postId = ObjectId.createFromHexString(request.params.id);

  let data = await db.collection("posts").deleteOne({
    _id: postId,
  });

  response.json(data);
});

module.exports = postRoutes;
