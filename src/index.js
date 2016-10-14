var stringify = require('node-stringify');
var _ = require('lodash');
import Router from './router';

var router = new Router();
var testRought = router.findRoutes(33, 238);
//var testRought = router.findRoutes(1, 3);


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
    convertSubRouteRedable = function(value2, from, to) {
        var subRoute = {};
        subRoute.buses = _.map(value2.routes, convertToBus);
        subRoute.subDistances = convertToKm(value2.distance);
        subRoute.from = convertToPlace(from);
        subRoute.to = convertToPlace(to);
        return subRoute;
    },
    convertToReadabelJson = function(value) {
        var returnArray = {};
        var currentSubRoute = 0;
        var changePointWithStartEnd = [];


        returnArray.from = convertToPlace(value.from);
        returnArray.to = convertToPlace(value.to);
        returnArray.totalDistance = convertToKm(value.distance);

        returnArray.changePoints = _.map(value.changes, convertToPlace);

        changePointWithStartEnd = _.concat(value.from, value.changes, value.to);
        //console.log(_.map(changePointWithStartEnd, convertToPlace)); // for debug

        returnArray.subRouts = [];
        _.forEach(value.routes, function(data) {
            //add start point and end point to every subpath
            returnArray.subRouts.push(convertSubRouteRedable(data, changePointWithStartEnd[currentSubRoute], changePointWithStartEnd[currentSubRoute + 1]));
            currentSubRoute += 1;
        });

        //returnArray.subRouts = _.map(value.routes, convertSubRouteRedable);

        return returnArray;
    };


var temp2 = _.map(testRought, convertToReadabelJson);

console.log(router.getAllStpos());


//console.log(stringify(temp2));;
