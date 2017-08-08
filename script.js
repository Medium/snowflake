var jsonData = {};
var colorScheme = ["#02A9C0", "#7E88C1", "#F478C1", "#F67C87"];

var config = {
  w: 400,
  h: 400,
  paddingX: 270,
  paddingY: 100,
  translateX: 120,
  translateY: 50,
  levels: 5,
  maxValue: 5,
  polygonPointSize: 5,
  polygonAreaOpacity: 0.6,
  quadrantOpacity: 0.8,
  quadrantColors: colorScheme,
  baseColor: "#ddd",
  labelScale: 0.9,
  onChange: onRadarChange,
  // lots more config options in radar.js
};

$(document).ready(function() {
  $.get('emma.csv', function(data) {
    jsonData = csv2json(data);
    render(jsonData);
  }, 'text');
});


function render() {
  // draw the radar chart
  RadarChart.draw('#radar', jsonData, config);

  // draw the points table
  $('#axes').empty();
  $('#points').empty();
  for (var i = 0; i < jsonData[0].axes.length; i++) {
    var axis = jsonData[0].axes[i];

    $("<td></td>", {
      text: axis.axis,
    }).appendTo("#axes");

    $("<td></td>", {
      class: jsonData[0].axes[i].selected ? 'selected' : '',
      css: {
        backgroundColor: colorScheme[Math.floor(i / 4)],
      },
      text: axis.value,
      'data-name': axis.axis,
    }).appendTo("#points");
  };

  // attach listeners
  $('#points td').click(function(el) {
    selectAxisAndRender($(this).data('name'));
  });
}


function onRadarChange(name, newValue) {
  jsonData[0].axes.forEach(function(axis) {
    if (axis.axis == name) { axis.value = newValue; }
  });
  selectAxisAndRender(name);
}

function selectAxisAndRender(name) {
  jsonData[0].axes.forEach(function(axis) {
    axis.selected = axis.axis == name;
  });
  render();
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
