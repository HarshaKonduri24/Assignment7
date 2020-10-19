//STEP 1
var movies = ["Avengers", "Batman", "Superman", "Thor", "Shazam"];
window.console.log(movies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Avengers";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "Thor";
movies[4] = "Shazam";
window.console.log(movies[0]);

//STEP 3
var movies = new Array(5);
movies[0] = "Avengers";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "Thor";
movies[4] = "Shazam";
movies.splice(2, 0, "Avengers");
window.console.log(movies.length);

//STEP 4
var movies = [];
movies[0] = "Avengers";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "Thor";
movies[4] = "Shazam";
movies.splice(0, 1);
window.console.log(movies);

//STEP 5
movies = [];
movies[0] = "Avengers";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "Thor";
movies[4] = "Shazam";
movies[5] = "Black Panther";
movies[6] = "Iron Man";
var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

//STEP 6

movies = [];
movies[0] = "Avengers";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "Thor";
movies[4] = "Shazam";
movies[5] = "Black Panther";
movies[6] = "Iron Man";
var i;
for (i in movies) {
    window.console.log(movies[i]);
}

//STEP 7
movies = [];
movies[0] = "Avengers";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "Thor";
movies[4] = "Shazam";
movies[5] = "Black Panther";
movies[6] = "Iron Man";
movies.sort();
for (var i in movies) {
    window.console.log(movies[i]);
}

//STEP 8
movies = [];
movies[0] = "Avengers";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "Thor";
movies[4] = "Shazam";
movies[5] = "Black Panther";
movies[6] = "Iron Man";
leastFavMovies = [];
leastFavMovies[0] = "Saw 1";
leastFavMovies[1] = "Saw 2";
leastFavMovies[2] = "Saw 3"
window.console.log("\n");
window.console.log("Movies I like:");
window.console.log("\n");
for (movie in movies) {
    window.console.log(movies[movie]);
}
window.console.log("\n");
window.console.log("Movies I regret watching:");
window.console.log("\n");
for (movie in leastFavMovies) {
    window.console.log(leastFavMovies[movie]);
}
window.console.log("\n");


//STEP 9

movies = [];
movies[0] = "Avengers";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "Thor";
movies[4] = "Shazam";
movies[5] = "Black Panther";
movies[6] = "Iron Man";
leastFavMovies = [];
leastFavMovies[0] = "Saw 1";
leastFavMovies[1] = "Saw 2";
leastFavMovies[2] = "Saw 3"
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
for (index in movies) {
    window.console.log(movies[index]);
}

//STEP 10

movies = [];
movies[0] = "Avengers";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "Thor";
movies[4] = "Shazam";
movies[5] = "Black Panther";
movies[6] = "Iron Man";
leastFavMovies = [];
leastFavMovies[0] = "Saw 1";
leastFavMovies[1] = "Saw 2";
leastFavMovies[2] = "Saw 3"
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
window.console.log(movies.pop());