var stringify = require('node-stringify');
import Router from './router';

var router = new Router();



var places = router.getAllPlaces(); //OK

var nearestPlace = router.getNearestPlace(6.849178, 79.862280); //OK
//({'name':'Dehiwala Junction','lat':6.85082,'lon':79.866,'id':'207','distance':449})


//console.log(stringify(temp));
//console.log(stringify(places));
// console.log(temp);

console.log(stringify(nearestPlace));
