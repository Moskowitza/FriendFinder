// 4. Your `apiRoutes.js` file should contain two routes:
// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../app/data/friends");

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
      
      //// PUT THE LOGIC HERE
      var matchedFriend=friendMatcher();
      res.json(matchedFriend);
  });
};
function friendMatcher(){  // Function to add scores for each array

  var friendScores = []; //array of score values
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  for(i=0;i<friendData.length;i++){
     numbers= friendData[i].scores.map(x=>parseInt(x))
     friendScores.push(numbers.reduce(reducer))
  }
  console.log("Array of Friend Scores " + friendScores)
  // calculate USER'S Score
  // if the NewFriend is pushed into the exisiting friendArray
  newFriend=friendData[friendData.length-1] 
  
  var userScoreRawArr = newFriend.scores.map(x=>parseInt(x)); //parse
  console.log("userScoreRawArr "+userScoreRawArr)
  userScore=userScoreRawArr.reduce(reducer)
  console.log("userScore "+ userScore)
  
  //now let's compare userScore to the FriendScores
  
  //here is a function that can help
  // console.log(closest(userScore, friendScores));
  matchVal = closest(userScore, friendScores);
  //use index of to get the position of the friend match
  index = friendScores.indexOf(matchVal);
  matchedName = friendData[index].name;
  console.log (matchedName) //BROKEN
  return friendData[index];
  };

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