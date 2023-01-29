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
//     maxAge: 1000 * 60 * 15, // would expire after 15 minutes
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
//     maxAge: 1000 * 60 * 15, // would expire after 15 minutes
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
    "multiValueHeaders": {
      "X-Test-Header": ["baking experiment"],
      "Set-Cookie": [
        "Token1=1234; Max-Age=900; Domain=.ideepakthapa.com; Path=/; Expires=Fri, 27 Jan 2023 19:33:08 GMT; HttpOnly; Secure; SameSite=Lax",
        "Token2=1234; Max-Age=900; Domain=.ideepakthapa.com; Path=/; Expires=Fri, 27 Jan 2023 19:33:08 GMT; HttpOnly; Secure; SameSite=Lax",
      ],
      "Content-Type": ["text/plain"]
    }
  };

  callback(null, response);
}
module.exports.handler = handler