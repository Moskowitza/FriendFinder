// You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

var friendArray = [
    {
        "name": "Ahmed",
        "photo": "https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/79fa32c32cd047679823f9451c8313d4_Original.png",
        "scores": [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ],
    },
    {
        "name": "Dr. Teeth",
        "photo": "https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/79fa32c32cd047679823f9451c8313d4_Original.png",
        "scores": [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        "name": "Sandman",
        "photo": "https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/79fa32c32cd047679823f9451c8313d4_Original.png",
        "scores": [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
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
var friendScores = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// friendArray.forEach(function (friend){
//  friendScores.push(friendArray.scores.reduce(reducer));
// });
for (i = 0; i < friendArray.length; i++) {
    var numbers = friendArray[i].scores;
    //push them into a new array
    friendScores.push(parseInt(numbers.reduce(reducer)))
}
console.log("Array of Friend Scores " + friendScores)
// calculate USER'S Score
var userScoreRawArr = newFriend.scores
console.log(userScoreRawArr)
// var userScoreNumArr = userScoreRawArr.split(",").map(function (item) {
//     return parseInt(item)
// });
// console.log(userScoreNumbArr);


var newFriendScore = newFriend.scores.reduce(reducer);

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

console.log(closest(newFriendScore, friendScores));
matchVal = closest(newFriendScore, friendScores);
//use index of to get the position of the friend match
index = friendScores.indexOf(matchVal);
matchedName = friendArray[index].name;
console.log(matchedName);
