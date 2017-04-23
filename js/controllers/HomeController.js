app.controller('HomeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
  { 
      title:	'The Fifth Element', 
      iscore:	7.7,
      rating:	'R',
      runtime:	126,
      released:	new Date('1997', '05', '9'),
      country:	'USA',
      posters:	['img/fifth_element1.jpg','img/fifth_element2.jpg','img/fifth_element3.jpg','img/fifth_element4.jpg'],
      imdb:		'http://www.imdb.com/title/tt0119116/',
      website:	'https://www.facebook.com/TheFifthElementMovie',
      likes:	750,
      dislikes:	100,
      posterindex: 0
	},
  { 
      title:	'Indiana Jones and the Last Crusade', 
      iscore:	8.3,
      rating:	'R',
      runtime:	127,
      released:	new Date('1989', '05', '24'),
      country:	'USA',
      posters:	['img/indianajones1.jpg','img/indianajones2.jpg','img/indianajones3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0097576',
      website:	'http://lucasfilm.com/indiana-jones-and-the-last-crusade',
      likes:	1500,
      dislikes:	200,
      posterindex: 0
	},
  { 
      title:	'Taken', 
      iscore:	7.8,
      rating:	'R',
      runtime:	153,
      released:	new Date('2009', '01', '30'),
      country:	'USA',
      posters:	['img/taken1.jpg','img/taken2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0936501/',
      website:	'http://www.takenmovie.com/',
      likes:	912,
      dislikes:	121,
      posterindex: 0
	}
	
	
  ];
	
	

	
	/* ADD VARIABLES FOR STEP 3 HERE */
	
	$scope.title="IMDB + Jean Paul's  Top 8 Movies";
  $scope.owner="Jean Paul Gomez Galdos";
  $scope.github="https://github.com/jean2040/s219s17GomezGaldos-P3"
	
	
	
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
		
	$scope.like = function(index){
    
    $scope.movies[index].likes += 1 ;
  }

  $scope.dislike = function(index){
    $scope.movies[index].dislikes += 1 ;
  }

  $scope.posterClick = function(index){
    var totalLength = $scope.movies[index].posters.length ;
    var currentIndex = $scope.movies[index].posterindex
    if ( currentIndex == totalLength - 1){
      $scope.movies[index].posterindex = 0;
      //console.log(currentIndex);
    }else{
    $scope.movies[index].posterindex += 1;
     //console.log(currentIndex);
    }
    
  }
  $scope.timeText = function(minutes){
    var hour = minutes / 60 ;
    var minutes = minutes % 60 ;

    $scope.stringTime = parseInt(hour) + "h" + " " + minutes + "min";


  }
	
	
	
	
	
	
	
}]);
