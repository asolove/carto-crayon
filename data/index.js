var fs = require("fs");
var togeojson = require("togeojson");
var csv = require("fast-csv");

var states = JSON.parse(fs.readFileSync("./us_states.geojson", "utf-8"));

var findState = function(name){
    var state = states.features.filter(function(state){
        return state.properties.NAME == name;
    });
    if(state.length !== 1) console.warn("Can't find state", state);
    return state[0];
};

csv("state_farms.csv")
    .on("data", function(data){
        // name, _, farms_97, farms_02, farms_07, region, id, kml, _, area
        var state = findState(data[0]);
        state.id = data[6];
        delete state.properties.GEO_ID;
        delete state.properties.LSAD;
        delete state.properties.STATE;
        delete state.properties.CENSUSAREA;
        state.properties.farms_97 = parseFloat(data[2], 10);
        state.properties.farms_02 = parseFloat(data[3], 10);
        state.properties.farms_07 = parseFloat(data[4], 10);
        state.properties.area = parseFloat(data[9], 10);
        state.properties.farm_ratio_07 = data[4] * 1000 / data[9];
    })
    .on("end", function(){
        console.log(JSON.stringify(states));
    })
    .parse();
