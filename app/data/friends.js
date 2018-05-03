// You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

var friendArray = [
    {
        "name": "Ahmed",
        "photo": "https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/79fa32c32cd047679823f9451c8313d4_Original.png",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ],
    },
    {
        "name": "Dr. Teeth",
        "photo": "https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/79fa32c32cd047679823f9451c8313d4_Original.png",
        "scores": [
            3,
            4,
            5,
            7,
            8,
            1,
            3,
            4,
            5,
            8
        ]
    },
];
var newFriend = {
    "name": "SpongeBob",
    "photo": "https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/79fa32c32cd047679823f9451c8313d4_Original.png",
    "scores": [
        3,
        4,
        5,
        7,
        8,
        9,
        3,
        4,
        2,
        8
    ]
}

module.exports = friendArray;

// Function to add scores for each array
var friendScores = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
for (i = 0; i < friendArray.length; i++) {
    var numbers = friendArray[i].scores;
    console.log(numbers.reduce(reducer))
    //push them into a new array
    friendScores.push(numbers.reduce(reducer))
}
console.log(friendScores)
// calculate NewFriend Score
var newFriendScore = newFriend.scores.reduce(reducer);
console.log(newFriendScore);

var differences = [];
for (i = 0; i < friendScores.length; i++) {
    // get absolute value
    var dif=Math.abs(friendScores[i] - newFriendScore)
    differences.push(dif);
}
console.log(differences)

// 6. Determine the user's most compatible friend using the following as a guide:
//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match. 