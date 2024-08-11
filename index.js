/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
let person = {
  name: "hala saleh",
  age: 21,
  city: "kuwait",
};

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = "h8ala2018@icloud.com";

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
function hasKey(object, key) {
  if (object[key]) {
    return true;
  } else {
    return false;
  }
}

console.log(person);
console.log(hasKey(person, "City1"));

/****************************************************************** */
const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
/******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to print the titles of all the movies.
  ********************************/
let printMovieTitels = (movies) => {
  let titleName = movies.map((movie) => {
    return movie.title;
  });
  return titleName;
};

console.log(printMovieTitels(movies));

/******************************
	Q5) Create a function that accepts an array of objects called 'movies' 
and iterates through it to count how many movies were released in the year 1994.
********************************/
let numberOfMoives = (movies) => {
  let moviescount = 0;
  let moviesInYEar1994 = movies.filter((movie) => {
    if (movie.year == 1994) {
      moviescount++;
      return true;
    } else {
      return false;
    }
  });

  return moviescount;
};
console.log(numberOfMoives(movies));

/******************************
	Q6) Write a function that updates the genre of the movie "The Dark Knight"
 to "Action/Drama" and returns the modified array of movies.
********************************/

// different than question but this way is more fun
let updatesTheGenreOfTheMovie = (moviesArray, movieName, NewGener) => {
  return moviesArray.filter((movie) => {
    if (movie.title == movieName) {
      movie.genre = NewGener;
      return true;
    } else {
      return false;
    }
  });
};

console.log(
  updatesTheGenreOfTheMovie(movies, "The Dark Knight", "Action/Drama")
);

/******************************
	Q7) (Challenge)
	Write a function groupMoviesByGenre that accepts an array of movie objects. 
	The function should return an object where the keys are movie genres 
	and the values are arrays of movie titles that belong to those genres. 
********************************/

//1st way to solve this method
let groupMoviesByGenre = (movies) => {
  let moviesGroup = {};
  movies.forEach((movie) => {
    if (!moviesGroup[movie.genre]) {
      moviesGroup[movie.genre] = []; //if the gener not fount , creat array for new genera movies
    }
    moviesGroup[movie.genre].push(movie.title);
  });
  return moviesGroup;
};

console.log(groupMoviesByGenre(movies));
