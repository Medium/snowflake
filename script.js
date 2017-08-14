var jsonData = {};
var colorScheme = ['#02A9C0', '#7E88C1', '#F478C1', '#F67C87'];

var config = {
  w: 300,
  h: 300,
  paddingX: 220,
  paddingY: 100,
  translateX: 100,
  translateY: 50,
  levels: 5,
  maxValue: 5,
  polygonPointSize: 5,
  polygonAreaOpacity: 0.6,
  quadrantOpacity: 0.8,
  quadrantColors: colorScheme,
  baseColor: '#ddd',
  labelScale: 0.9,
  onChange: updateAndRender,
  // lots more config options in radar.js
};


$(document).ready(function() {
  $.get('emma.csv', function(data) {
    jsonData = csv2json(data);
    $('#name').text(jsonData[0].group);

    updateAndRender('Mobile');
  }, 'text');

  attachArrowKeyListeners();
});


function render() {
  // draw the radar chart
  RadarChart.draw('#radar', jsonData, config);

  // draw the horizontal points summary
  $('#axes').empty();
  $('#points').empty();
  for (var i = 0; i < jsonData[0].axes.length; i++) {
    var axis = jsonData[0].axes[i];

    $('<td></td>', {
      text: axis.axis,
    }).appendTo('#axes');

    $('<td></td>', {
      class: jsonData[0].axes[i].selected ? 'selected' : '',
      css: {
        backgroundColor: colorScheme[Math.floor(i / 4)],
      },
      text: axis.value,
      'data-name': axis.axis,
    }).appendTo('#points');
  };

  // draw the vertical points table with level descriptions
  var strings = levelStrings[getSelectedAxisName()];

  $('#axis-description h3').text(strings.description)
  $('#axis-description').toggleClass('active', getSelectedAxisValue() == 0);

  $('#level-descriptions').empty();
  for (var i = 0; i < strings.levels.length; i++) {
    var isActive = i + 1 == getSelectedAxisValue()
    var activeClass = isActive ? 'active' : '';
    var row = $('<tr></tr>')

    $('<td></td>', {
      text: i + 1,
      class: activeClass + ' level-number',
    }).appendTo(row);

    $('<td></td>', {
      text: strings.levels[i].summary,
      class: activeClass,
    }).appendTo(row);

    row.appendTo('#level-descriptions');

    // list examples
    if (isActive) {
      $('#examples').empty();
      strings.levels[i].examples.forEach(function(example) {
        $('<li></li>', {
          text: example,
        }).appendTo('#examples');
      })
    }
  }

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


function getSelectedAxisName() {
  return $('.selected').data('name');
}

function getSelectedAxisValue() {
  return parseInt($('.selected').text());
}


function attachArrowKeyListeners() {
  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
        var selection = $('.selected');
        if (selection.prev().length) {
          selection.prev().addClass('selected');
          selection.removeClass('selected');
          updateAndRender(getSelectedAxisName());
        }
        break;

      case 38: // up
        updateAndRender(
          getSelectedAxisName(),
          Math.max(getSelectedAxisValue() - 1, 0));
        break;

      case 39: // right
        var selection = $('.selected');
        if (selection.next().length) {
          selection.next().addClass('selected');
          selection.removeClass('selected');
          updateAndRender(getSelectedAxisName());
        }
        break;

      case 40: // down
        updateAndRender(
          getSelectedAxisName(),
          Math.min(getSelectedAxisValue() + 1, 5));
        break;

      default: return;
    }
    e.preventDefault();
  });
}

