function friendMatcher(){
    // Function to add scores for each array
    var friendScores = []; //array of score values
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    for(i=0;i<friendData.length;i++){
       numbers= friendData[i].scores.map(x=>parseInt(x))
    //    console.log(numbers);
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
  module.exports=friendMatcher