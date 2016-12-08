$(document).ready(get_data());

var latlong = {};
var vis_info = {};

var colors = ["#FF4040", "#FDDABD", "#FDDABD", "#FF4040","#FF4040", "#FDDABD","#FF4040", "#FDDABD","#FDDABD", "#FF4040","#d8854f", "#267861"];

var mapData=[
  // {"code":"kiev" , "name":"Kiev", "value":15, "color":"#d8854f"},
  // {"code":"kharkiv" , "name":"Kharkiv", "value":30, "color":"#267861"}
];

latlong["kiev"] = {"lat":50.4501, "lng":30.5234};
latlong["kharkiv"] = {"lat":49.9935, "lng":36.2304};
latlong["lviv"] = {"lat":49.839683, "lng":24.029717};
latlong["odesa"] = {"lat":46.482526, "lng":30.7233095};
latlong["Дніпро"] = {"lat":48.464717, "lng":35.046183};
latlong["Луцьк"] = {"lat":50.74723299999999, "lng":25.325383};
latlong["Слов'янськ"] = {"lat":48.8532, "lng":37.6053};
latlong["Суми"] = {"lat":50.9077, "lng":34.7981};
latlong["Ірпінь"] = {"lat":50.51875, "lng":30.239783};
latlong["Рівне"] = {"lat":50.6199, "lng":26.251617};

//  "location":{
//     "lat" : 49.9935,
//     "lng" : 36.230383
// };


function get_data(){
  $.ajax({
    url: "/filter",
    type: "GET",
    datatype: "json"
  }).done(function(json){
    var number = 0;
    json.forEach(function(bribe) {
      var amount = bribe.amount;

      if ( bribe.city !== "other" && bribe.city !== "-1" && bribe.city !== "" && bribe.city !== undefined){
        if (Object.keys(vis_info).indexOf(bribe.city)!= -1){
          var info = vis_info[bribe.city];
          info[0]++;
          if (!(isNaN(parseInt(amount))))
            info[1]+= parseInt(amount);
        }
        else{
          if (isNaN(parseInt(amount))){
            var info = [1,0];
          }
          else {
            var info = [1,parseInt(amount)];
          }
          // console.log(bribe.city);
          vis_info[bribe.city] = info;
        }
      }
      if (bribe.customCity !== "other" && bribe.customCity !== undefined){

        if (Object.keys(vis_info).indexOf(bribe.customCity)!= -1){
          var info = vis_info[bribe.customCity];
          info[0]++;
          if (!(isNaN(parseInt(amount))))
            info[1]+= parseInt(amount);
        }
        else{
          if (isNaN(parseInt(amount))){
            var info = [1,0];
          }
          else {
            var info = [1,parseInt(amount)];
          }
          vis_info[bribe.customCity] = info;
        }
      }
    })
    // console.log(vis_info);
    getLatlong();

  }).fail(function(xhr, status, error){
    console.log('not cool');
  });
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getLatlong(){
  var cities = Object.keys(vis_info);
  i=0;
  cities.forEach(function(city){

    if (latlong[city]!==undefined){

      // console.log("LATLONG",latlong[city]);
      var obj={};
      obj["code"]=city;
      var city_name = capitalizeFirstLetter(city);
      var val = vis_info[city][0];
      var average =  Math.floor(vis_info[city][1]/vis_info[city][0]);
      var name = city_name+"\nBribes reported:"+val+"\nAverage bribe:"+average;
      obj["name"]= name;
      // console.log(name);
      // console.log(vis_info[city][0]);
      obj["value"]=val;
      obj["color"]=colors[i];
      i++;
      mapData.push(obj);
    }
    else{
      $.ajax({
        url: "/latlong",
        type: "GET",
        data: city,
        datatype: "json"
      }).done(function(json){

        var obj={};
        obj["code"]=city;
        latlong[city] = json;
        var city_name = capitalizeFirstLetter(city);
        var val = vis_info[city][0];
        var average =  Math.floor(vis_info[city][1]/vis_info[city][0]);
        var name = city_name+"\nBribes reported:"+val+"\nAverage bribe:"+average;
        obj["name"]= name;
        // console.log(name);
        // console.log(vis_info[city][0]);
        obj["value"]=val;
        obj["color"]=colors[i];
        i++;
        mapData.push(obj);

      }).fail(function(xhr, status, error){
        console.log('not cool');
      })}
  });
  visualize();
};

function visualize(){
  // get min and max values
  var minBulletSize = 15;
  var maxBulletSize = 70;
  var min = Infinity;
  var max = -Infinity;
  for ( var i = 0; i < mapData.length; i++ ) {
    var value = mapData[ i ].value;
    if ( value < min ) {
      min = value;
    }
    if ( value > max ) {
      max = value;
    }
  }

  // it's better to use circle square to show difference between values, not a radius
  var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
  var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

  // create circle for each country
  var images = [];
  for ( var i = 0; i < mapData.length; i++ ) {
    var dataItem = mapData[ i ];
    var value = dataItem.value;
    // calculate size of a bubble
    var square = ( value - min ) / ( max - min ) * ( maxSquare - minSquare ) + minSquare;
    if ( square < minSquare ) {
      square = minSquare;
    }
    var size = Math.sqrt( square / ( Math.PI * 2 ) );
    var id = dataItem.code;
    dataItem["size"] = size;
    // console.log(mapData);

    images.push( {
      "type": "circle",
      "theme": "light",

      "width": size,
      "height": size,
      "color": dataItem.color,
      "longitude": latlong[ id ].lng,
      "latitude": latlong[ id ].lat,
      "title": dataItem.name,
      "value": value
    } );
  }


  var map = AmCharts.makeChart( "chartdiv", {
    "type": "map",
    "theme": "black",
    "titles": [ {
      "text": "Bribes reported",
      "size": 20,
      "color": "#260126",
      "bold": false
    }],

    "dataProvider": {
      "map": "ukraineHigh",
      "images": images,
      "getAreasFromMap": true,
      // "areas": [ {
      //   "id": "Kharkiv",
      //   "value": 4447100
      // }]
    },

    "projection": "miller",
    "areasSettings": {
      "autoZoom": false,
      // "selectedColor": "#CC0000",
      "selectable": true,
      "bringForwardOnHover": true

    },
    "developerMode": true,
    "listeners": [{
    "event": "clickMapObject",
    "event": "click",
    "method": function(event) {
      console.log(event)

      for ( var i = 0; i < mapData.length; i++ ) {
        var dataItem = mapData[ i ];
        var id = dataItem.code;
        // console.log( latlong[id]);
        var coordinates = map.coordinatesToStageXY(latlong[ id ].lat,latlong[ id ].lng);
        console.log(coordinates, dataItem.size);
        if (event.x <= (coordinates[0]+dataItem.size) && event.y <= (coordinates[1]+dataItem.size )){
          console.log(true);
        }
      }
      // $("#city").val("event.mapObject.title");

      // localStorage.setItem("prefill", event.mapObject.title);

      // window.location.href="searchbribe.html";
    }

  }]
    // "export": {
    //   "enabled": true
    // }

  } );

}
