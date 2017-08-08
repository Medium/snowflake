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
  onChange: updateAndRender,
  // lots more config options in radar.js
};

$(document).ready(function() {
  $.get('emma.csv', function(data) {
    jsonData = csv2json(data);
    $('#name').text(jsonData[0].group);

    render();
  }, 'text');

  attachArrowKeyListeners();
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

  // attach click listeners
  $('#points td').click(function(el) {
    updateAndRender($(this).data('name'));
  });
}

function updateAndRender(axisName, opt_newValue) {
  jsonData[0].axes.forEach(function(axis) {
    if ((opt_newValue || opt_newValue === 0) && axis.axis == axisName) {
      axis.value = opt_newValue;
    }
    axis.selected = axis.axis == axisName;
  });
  render();
}

function attachArrowKeyListeners() {
  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
        var selection = $('.selected');
        if (selection.prev().length) {
          selection.prev().addClass('selected');
          selection.removeClass('selected');
        }
        break;

      case 38: // up
        updateAndRender(
          $('.selected').data('name'),
          Math.min(parseInt($('.selected').text()) + 1, 5));
        break;

      case 39: // right
        var selection = $('.selected');
        if (selection.next().length) {
          selection.next().addClass('selected');
          selection.removeClass('selected');
        }
        break;

      case 40: // down
        updateAndRender(
          $('.selected').data('name'),
          Math.max(parseInt($('.selected').text()) - 1, 0));
        break;

      default: return; // exit this handler for other keys
    }
    e.preventDefault();
  });
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
