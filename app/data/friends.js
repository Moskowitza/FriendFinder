// You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

var friendArray = [
    {
        "name": "Ahmed",
        "photo": "https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/79fa32c32cd047679823f9451c8313d4_Original.png",
        "scores": [
            "1",
            "1",
            "2",
            "2",
            "3",
            "3",
            "4",
            "4",
            "5",
            "5"
        ],
    },
    {
        "name": "Dr. Teeth",
        "photo": "https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/79fa32c32cd047679823f9451c8313d4_Original.png",
        "scores": [
            "2",
            "2",
            "3",
            "4",
            "4",
            "5",
            "5",
            "5",
            "5",
            "5"
        ]
    },
    {
        "name": "Sandman",
        "photo": "https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/79fa32c32cd047679823f9451c8313d4_Original.png",
        "scores": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
];
var newFriend = {
    "name": "SpongeBob",
    "photo": "https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/79fa32c32cd047679823f9451c8313d4_Original.png",
    "scores": [
        "4",
        "4",
        "2",
        "3",
        "2",
        "2",
        "3",
        "2",
        "4",
        "5"
    ]
}

module.exports = friendArray;

// Function to add scores for each array
var friendScores = []; //array of score values
const reducer = (accumulator, currentValue) => accumulator + currentValue;

for(i=0;i<friendArray.length;i++){
   numbers= friendArray[i].scores.map(x=>parseInt(x))
//    console.log(numbers);
   friendScores.push(numbers.reduce(reducer))
}
console.log("Array of Friend Scores " + friendScores)
// calculate USER'S Score
// if the NewFriend is pushed into the exisiting friendArray
// newFriend=friendArray[friendArray.length-1] 

var userScoreRawArr = newFriend.scores.map(x=>parseInt(x)); //parse
console.log("userScoreRawArr "+userScoreRawArr)
userScore=userScoreRawArr.reduce(reducer)
console.log("userScore "+ userScore)

//now let's compare userScore to the FriendScores

//here is a function that can help
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

console.log(closest(userScore, friendScores));
matchVal = closest(userScore, friendScores);
//use index of to get the position of the friend match
index = friendScores.indexOf(matchVal);
matchedName = friendArray[index].name;
console.log(matchedName);
