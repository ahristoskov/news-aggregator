var fs = require('fs');

fs.readFile('favourites.json', 'utf-8', function(err, data){
    let persistentStorage = JSON.parse(data);
    console.log(persistentStorage.Favourites.news);      
})
