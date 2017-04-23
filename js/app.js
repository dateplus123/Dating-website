var app = angular.module('IS219Gallery', []);

app.filter('textTime', function(){
    return function (minutes){
        var hour = minutes / 60 ;
        var minutes = minutes % 60 ;

    return parseInt(hour) + "h" + " " + minutes + "min";
         
    }
});