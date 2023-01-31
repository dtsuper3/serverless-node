// const serverless = require("serverless-http");
// const express = require("express");
// const cookieParser = require('cookie-parser');

// const app = express();

// app.use(cookieParser())

// app.get("/", (req, res, next) => {
//   return res.status(200).json({
//     message: "Hello from root!",
//   });
// });

// app.get("/hello", (req, res, next) => {

//   let options = {
//     maxAge: 1000 * 60 * 60 * 24 * 30, // would expire after 15 minutes
//     httpOnly: true, // The cookie only accessible by the web server    
//     secure: true,
//     sameSite: "lax",
//     domain: ".ideepakthapa.com"
//   }

//   // Set cookie
//   res.cookie('Token', '1234', options) // options is optional
//   return res.status(200).json({
//     message: "Hello from path!",
//   });
// });

// app.get("/hello1", (req, res, next) => {

//   let options = {
//     maxAge: 5 * 1000 * 60 * 15, // would expire after 15 minutes
//     httpOnly: true, // The cookie only accessible by the web server    
//     secure: true,
//     sameSite: "lax",
//     domain: ".ideepakthapa.com"
//   }

//   // Set cookie
//   res.cookie('Token', '1234', options) // options is optional
//   return res.status(200).json({
//     message: "Hello from path!",
//   });
// });

// app.use((req, res, next) => {
//   return res.status(404).json({
//     error: "Not Found",
//   });
// });

// module.exports.handler = serverless(app);

const handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
    }),
    "cookies": [
      "Token1=1234; Max-Age=2592000; Domain=.ideepakthapa.com; Path=/; Expires=Thu, 02 Mar 2023 19:51:50 GMT; HttpOnly; Secure; SameSite=Lax",
      "Token2=1234; Max-Age=2592000; Domain=.ideepakthapa.com; Path=/; Expires=Thu, 02 Mar 2023 19:51:50 GMT; HttpOnly; Secure; SameSite=Lax"
    ],
  };

  callback(null, response);
}
module.exports.handler = handler