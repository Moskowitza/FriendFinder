function friendMatcher(friendArray) {  // Function to add scores for each array
    userPosition = friendArray.length - 1;
    userArray = friendArray[userPosition].scores;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    var absArray = []; //an array of comparative low values/ NEED lowest value position
    for (i = 0; i < friendArray.length - 1; i++) { //Do not include last item in the array
        matchArray = friendArray[i].scores;
        evaluatorArray = []; //a holder array of the 10 Absolute differences
        for (j = 0; j < matchArray.length; j++) {
            //compare each element in userArray[j] to matchArray[j]
            var a = matchArray[j]
            var b = userArray[j]
            var c = Math.abs(a - b) //the absolute difference
            evaluatorArray.push(c); //
        }
        console.log("evaluatorArray" + evaluatorArray)
        absScore = evaluatorArray.reduce(reducer)
        absArray.push(absScore)
    }
    console.log("absArray " + absArray)
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
    lowestMatchVal = closest(0, absArray);
    indexPos = absArray.indexOf(lowestMatchVal);
    console.log(indexPos);
    //you're matching friend is
    matchedFriend = friendArray[indexPos];
    console.log("matchedFriend" + matchedFriend)
    name = matchedFriend.name;
    photo = matchedFriend.photo;
    console.log("name " + name, "photo link " + photo)
}
module.exports = friendMatcher