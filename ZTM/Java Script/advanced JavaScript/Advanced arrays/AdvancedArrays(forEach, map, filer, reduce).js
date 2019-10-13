// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

let newArray = [];

  array.forEach(i_Object => newArray.push(`${i_Object.username}!`));


//Create an array using map that has all the usernames with a "? to each of the usernames

let mapArray = array.map( i_Object => `${i_Object.username}?`);

//Filter the array to only include users who are on team: red

 let FilterArray = array.filter(i_Object => i_Object.team === "red");

//Find out the total score of all users using reduce

let TotalScore = array.reduce( (i_Accumelator, i_Object) => {
  return i_Object.score + i_Accumelator;
  }, 0);

// (1), what is the value of i? answear : the index of the current element on arrayNum
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray2 = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})


const pureNewArray = arrayNum.map( (i_num, i_CurrentIndex) => i_num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const informationList = array.map( i_Object => { 
   
   let {username, team, score} = i_Object;
   let items = i_Object.items.map( i_Item => `${i_Item}!`);

   return {username, team, score, items};
   });