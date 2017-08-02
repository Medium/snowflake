var config = {
  w: 500,
  h: 500,
  levels: 5,
  maxValue: 5,
  showLevelsLabels: false,
  translateX: 150,
  polygonPointSize: 6,
  onChange: dummyCallback,
  // lots more config options in radar.js
};


$(document).ready(function(){
  // $.get('gameOfThrones.csv', function(data) {
  //   RadarChart.draw('#gameOfThrones', csv2json(data), config);
  // }, 'text');

  $.get('hamilton.csv', function(data) {
    RadarChart.draw('#hamilton', csv2json(data), config);
  }, 'text');

  // $.get('emmalyra.csv', function(data) {
  //   RadarChart.draw('#emmalyra', csv2json(data), config);
  // }, 'text');
})


function dummyCallback(axis, newValue) {
  console.log(`${axis} changed to ${newValue}`);
}


function csv2json(csv) {
  csv = csv.replace(/, /g, ",");
  var json = d3.csv.parse(csv);
  var data = {};

  json.forEach(function(record) {
    var group = record.group;

    if (!data[group]) {
      data[group] = {
        group: group,
        axes: [],
      }
    }

    data[group].axes.push({
      axis: record.axis,
      value: parseInt(record.value),
    });
  })

  return Object.values(data);
}
