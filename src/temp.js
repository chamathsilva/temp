var convertToRedable = function(value) {
    //console.log(value);
    console.log("\n");
    console.log("From");
    convertToPlace(value.from);
    console.log("To ");
    convertToPlace(value.to);
    // console.log("Changes  \n" + value.changes);
    console.log("Change from");
    _.map(value.changes,convertToPlace);


    //console.log("Routess " + value.routes);
    _.forEach(value.routes, function(value2) {
        _.map(value2.routes, convertToBus);
        console.log("Distance");
        convertToKm(value2.distance);
        console.log("----");
    });

    console.log("Total Distance");
    convertToKm(value.distance);
}
