var jsonData = {};
var colorScheme = ['#02A9C0', '#7E88C1', '#F478C1', '#F67C87'];
// var colorScheme = ['#6D9EEB', '#F6B26B', '#93C47D', '#E06666']

var pointConversion = [0, 1, 3, 6, 12, 20];
var pointsToLevels = {
  0: '1.1',
  5: '1.2',
  11: '1.3',
  17: '2.1',
  23: '2.2',
  29: '2.3',
  36: '3.1',
  43: '3.2',
  50: '3.3',
  58: '4.1',
  66: '4.2',
  74: '4.3',
  90: '5.1',
  110: '5.2',
  135: '5.3',
}

var barConfig = {
  colors: colorScheme,
  baseColor: '#ddd',
  opacity: 0.8,
  pointsToLevels: pointsToLevels,
}

var radarConfig = {
  w: 300,
  h: 300,
  paddingX: 220,
  paddingY: 100,
  translateX: 100,
  translateY: 50,
  levels: 5,
  axisColor: '#ccc',
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
  $.get('data/cersei.csv', function(data) {
    jsonData = csv2json(data);
    $('#name').text(jsonData[0].group);

    updateAndRender('Mobile');
  }, 'text');

  attachArrowKeyListeners();
});

function updateAndRender(axisName, opt_newValue) {
  // update axis with new value
  jsonData[0].axes.forEach(function(axis) {
    if ((opt_newValue || opt_newValue === 0) && axis.axis == axisName) {
      axis.value = opt_newValue;
    }
    axis.selected = axis.axis == axisName;
  });

  render();
}

function render() {
  renderSummaryNumbers();
  renderBarChart();
  renderRadarChart();
  renderPointsSummaryTable();
  renderLevelDescriptions();
  attachClickListeners();
}

function sumPoints(axes) {
  var sum = 0;
  axes.forEach(function(axis) {
    sum += pointConversion[axis.value]
  });
  return sum;
}

// draw the three giant numbers
function renderSummaryNumbers() {
  var totalPoints = sumPoints(jsonData[0].axes);
  $('#current-points').text(totalPoints);

  var p = totalPoints
  while (p >= 0) {
    if (pointsToLevels[p]) {
      $('#current-level').text(pointsToLevels[p]);
      break;
    }
    p--;
  }

  var actualPoints = Object.keys(pointsToLevels)
  var maxPoints = actualPoints[actualPoints.length - 1];
  var pointsNeeded;
  p = totalPoints + 1;
  while (p <= maxPoints) {
    if (pointsToLevels[p]) {
      pointsNeeded = p - totalPoints;
      break;
    }
    p++;
  }
  $('#points-to-next-level').text(pointsNeeded || 'n/a');
}

// draw the bar chart
function renderBarChart() {
  $('#bar').empty()

  var barData = [
    sumPoints(jsonData[0].axes.slice(0, 4)),
    sumPoints(jsonData[0].axes.slice(4, 8)),
    sumPoints(jsonData[0].axes.slice(8, 12)),
    sumPoints(jsonData[0].axes.slice(12, 16)),
  ]
  BarChart.draw('#bar', barData, barConfig);
}

// draw the radar chart
function renderRadarChart() {
  RadarChart.draw('#radar', jsonData, radarConfig);
}

// draw the points summary table
function renderPointsSummaryTable() {
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
}

// draw the points table with level descriptions
function renderLevelDescriptions() {
  var axisName = getSelectedAxisName();
  var strings = levelStrings[axisName];

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
      'data-name': axisName,
      'data-value': i + 1,
    }).appendTo(row);

    $('<td></td>', {
      text: strings.levels[i].summary,
      class: activeClass,
      'data-name': axisName,
      'data-value': i + 1,
    }).appendTo(row);

    row.appendTo('#level-descriptions');

    // list signals and examples
    if (isActive) {
      $('#signals').empty();
      $('#examples').empty();

      strings.levels[i].signals.forEach(function(signal) {
        $('<li></li>', {
          text: signal,
        }).appendTo('#signals');
      })

      strings.levels[i].examples.forEach(function(example) {
        $('<li></li>', {
          text: example,
        }).appendTo('#examples');
      });
    }
  }
}

function attachClickListeners() {
  $('#points td').click(function(el) {
    updateAndRender($(this).data('name'));
  });

  $('#level-descriptions td').click(function(el) {
    updateAndRender($(this).data('name'), $(this).data('value'));
  });

  $('#axis-description').click(function() {
    updateAndRender(getSelectedAxisName(), 0);
  });
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

