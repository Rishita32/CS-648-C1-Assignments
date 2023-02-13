//RedId: 827654627
//Name: Rishita Mote

window.console.log("\n");
window.console.log("***Task 1***");

var movies=["Avengers","Love Story","Spiderman","Batman","Ironman"];
window.console.log(movies[1]);

//Task 2

window.console.log("\n");
window.console.log("***Task 2***");
var movies1 = new Array(5);
movies1[0]="Avengers";
movies1[1]="Love Story";
movies1[2]="Spiderman";
movies1[3]="Batman";
movies1[4]="Ironman";
window.console.log(movies[0]);

//Task 3

window.console.log("\n");
window.console.log("***Task 3***");
movies1.splice(2, 0, "Megan");
window.console.log(movies.length);

//Task 4

window.console.log("\n");
window.console.log("***Task 4***");
var movies2 = [];
movies2[0]="Avengers";
movies2[1]="Love Story";
movies2[2]="Spiderman";
movies2[3]="Batman";
movies2[4]="Ironman";
delete movies2[0];
window.console.log(movies2);

//Task 5

window.console.log("\n");
window.console.log("***Task 5***");
var movies3 = [];
movies3[0]="Avengers";
movies3[1]="Love Story";
movies3[2]="Spiderman";
movies3[3]="Batman";
movies3[4]="Ironman";
movies3[5]="the menu"
movies3[6]="Plane"
for (var i in movies3) {
  window.console.log(movies3[i]);
}

//Task 6
window.console.log("\n");
window.console.log("*** Task 6 ***");

for(var i of movies3) {
  window.console.log(i);
}

//Task 7 

window.console.log("\n");
window.console.log("*** Task 7 ***");
movies3.sort();
for(var i of movies3) {
  window.console.log(i);
}

//Task 8 

window.console.log("\n");
window.console.log("*** Task 8 ***");
var movies3 = ["Avengers","Love Story","Spiderman","Batman","Ironman","the menu","Plane"];
var leastFavMovies = ["Divergent","Fury ","The Help"];
window.console.log("Movies I like:");
window.console.log("\n");
for(var i of movies3) {
  window.console.log(i);
}
window.console.log("\n");
window.console.log("Movies I regret watching:");
window.console.log("\n");
for(var i of leastFavMovies) {
  window.console.log(i);
}

//Task 9

window.console.log("\n");
window.console.log("*** Task 9 ***");
var allMovies = movies3.concat(leastFavMovies);
allMovies.sort().reverse();
for(var i of allMovies) {
  window.console.log(i);
}

//Task 10

window.console.log("\n");
window.console.log("*** Task 10 ***");
var last_movie = allMovies.slice(-1)[0];
window.console.log(last_movie);

//Task 11

window.console.log("\n");
window.console.log("*** Task 11 ***");
window.console.log(allMovies.shift());

//Task 12

window.console.log("\n");
window.console.log("*** Task 12 ***");

var movies3 = ["Avengers","Love Story","Spiderman","Batman","Ironman","the menu","Plane"];
var leastFavMovies = ["Divergent","Fury ","The Help"];
var allMovies = movies3.concat(leastFavMovies);
allMovies.sort().reverse();
var leastFavMoviesindices = [];

allMovies.forEach((movie, index) => {
  if (leastFavMovies.includes(movie)) {
    leastFavMoviesindices.push(index); }
});

var good_movies = ["Top gun","Casino Royale","Lion King"]

leastFavMoviesindices.forEach((index) => {
    allMovies[index] = good_movies.shift();
});

for (var index = 0; index < allMovies.length; index++) {
    "use strict";
    window.console.log(allMovies[index] );
}
window.console.log("\n");


//Task 13

window.console.log("\n");
window.console.log("*** Task 13 ***");
var movies3 = [["Avengers", 1], ["Love Story", 2], ["Spiderman", 3], ["Ironman", 4], ["Batman", 5]];

var movieFilter = movies3.filter(function(movie) {
  return typeof movie[0] === "string";
});

window.console.log(movieFilter.map(movie => movie[0]));


//Task 14

window.console.log("\n");
window.console.log("*** Task 14 ***");
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
var showEmployee = function(employees) {
  window.console.log("Employees: ");
  window.console.log("\n"); 
  employees.forEach(function(employee) {
    window.console.log(employee);
  });
};
showEmployee(employees);

//Task 15
window.console.log("\n");
window.console.log("*** Task 15 ***");
var values = [58, '', 'abcd', true, null, false, 0];
var filterValues = function(values){
    return values.filter(function(val) {
  return val !== false && val !== null && val !== 0  && val !== "";
});
};
window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//Task 16

window.console.log("\n");
window.console.log("*** Task 16 ***");
var RandomNumber = function(val) {
  return val[Math.floor(Math.random() * val.length)];
};
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
window.console.log(RandomNumber(arr));

//Task 17
window.console.log("\n");
window.console.log("*** Task 17 ***");
var LargestNumber = function(val){
    return Math.max(...val);
}
var arr = [100 , 987, 20 , 13 , 10101 ,76 , 86 ];
window.console.log(LargestNumber(arr));
