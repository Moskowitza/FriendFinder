// 4. Your `apiRoutes.js` file should contain two routes:
// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../app/data/friends");
// var friendMatcher= require("../app/data/matcher");
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
      
      friendData.push(req.body);
      
      //move the response to the front
      var matchedFriend=friendMatcher(friendData);
      res.json(matchedFriend);
  });
};
function friendMatcher(friendArray){  // Function to add scores for each array
  userPosition=friendArray.length-1;
  userArray=friendArray[userPosition].scores;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

 var absArray=[]; //an array of comparative low values/ NEED lowest value position
 for(i=0;i<friendArray.length-1;i++){ //Do not include last item in the array
      matchArray = friendArray[i].scores;
      evaluatorArray=[]; //a holder array of the 10 Absolute differences
      for (j=0;j<matchArray.length;j++){
          //compare each element in userArray[j] to matchArray[j]
          var a = matchArray[j]
          var b = userArray[j]
          var c = Math.abs(a-b) //the absolute difference
          evaluatorArray.push(c); //
      } 
      console.log("evaluatorArray"+evaluatorArray)
      absScore=evaluatorArray.reduce(reducer)
      absArray.push(absScore)
  }
  console.log("absArray "+absArray)
  //use the closest function to get value closest to Zero
  function closest(num, arr) {
      var curr = arr[0];
      var diff = Math.abs(num - curr);
      for (var val = 0; val < arr.length; val++) {
          var newdiff = Math.abs(num - arr[val]);
          if (newdiff < diff) {
              diff = newdiff;
              curr = arr[val];
          }
      }
      return curr;
  }
      lowestMatchVal=closest(0,absArray);
      indexPos=absArray.indexOf(lowestMatchVal);
      console.log(indexPos);
      //you're matching friend is
      matchedFriend=friendArray[indexPos];
      console.log("matchedFriend"+matchedFriend)
      name=matchedFriend.name;
      photo=matchedFriend.photo;
      console.log("name "+name,"photo link "+photo)
      return matchedFriend;
}