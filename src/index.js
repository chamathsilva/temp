var stringify = require('node-stringify');
var _ = require('lodash');
import Router from './router';

var router = new Router();
var testRought = router.findRoutes(33, 238);



var test = function(data) {
        console.log("log from function" + data);
    },
    convertToPlace = function(pid) {
        return router.getPlaceDetails(pid).name;
    },
    convertToBus = function(bid) {
        var temp = router.getRouteDetails(bid);
        return temp.routeno + " (" + temp.from + "-" + temp.to + ")";
    },
    convertToKm = function(distance) {
        return (distance / 1000).toFixed(2) + "Km";
    },
    convertSubRouteRedable = function(value2) {
        var subRoute = {};
        subRoute.buses = _.map(value2.routes, convertToBus);
        subRoute.subDistances = convertToKm(value2.distance);
        return subRoute;
    },
    convertToReadabelJson = function(value) {
        var returnArray = {};
        returnArray.from = convertToPlace(value.from);
        returnArray.to = convertToPlace(value.to);
        returnArray.totalDistance = convertToKm(value.distance);
        returnArray.changePoints = _.map(value.changes, convertToPlace);
        returnArray.subRouts = _.map(value.routes, convertSubRouteRedable);
        return returnArray;
    };


var temp2 = _.map(testRought, convertToReadabelJson);
console.log(stringify(temp2));
