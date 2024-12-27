const connect = require("./connect");
// This will set the connect variable to the module.exports object in the connect.js file
// Then, the connect variable can be used to access the exported functions
// require statements fully runs the file

// Import the installed packages
const express = require("express");
const cors = require("cors");

// Create the express application
const app = express();

// Setup and run the server
const PORT = 3000;
// app.use - mount middleware
app.use(cors()); // how to handle resources across differne domains
app.use(express.json()); // tells express to parse requests in json format, so that we do not have to call json.parse every single time that we get a request

app.listen(PORT, () => {
  // hook up to mongoDB
  connect.connectToServer();
  console.log(`Server is running on port ${PORT}`);
});
// The callback function is run once when the server is established
