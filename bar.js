/**
 * RadarChart
 * Largely stolen from https://gist.github.com/thesteady/f2dcea6ce52c745bb20b
 **/

var BarChart = {
  draw: function(id, data, options) {
    var config = {
      w: 550,
      h: 100,
      barHeight: 60,
      colors: ['red', 'yellow', 'green', 'blue'],
      margins: {
        top: 20,
        left: 10,
        right: 10,
        bottom: 20,
      },
      xMax: 150,
      baseColor: 'white',
      labelScale: 1.0,
      pointsToLevels: {0: '1', 100: '2'},
      opacity: 1,
    }

    applyUserConfig();

    var svg;
    var innerWidth = config.w - config.margins.left - config.margins.right;
    var innerHeight = config.h - config.margins.top - config.margins.bottom;
    var actualPoints = Object.keys(config.pointsToLevels)
    var maxPoints = actualPoints[actualPoints.length - 1];

    var pointScale = d3.scale.linear()
      .domain([0, maxPoints])
      .range([0, innerWidth]);

    parseData();
    buildBaseSvg();
    buildBars();
    buildLevelsAxis();
    buildPointsAxis();


    function applyUserConfig() {
      // feed user configuration options
      if ('undefined' !== typeof options) {
        for (var i in options) {
          if ('undefined' !== typeof options[i]) {
            config[i] = options[i];
          }
        }
      }
    }

    function buildBaseSvg() {
      svg = d3.select('#bar')
        .append('svg')
        .attr('width', config.w)
        .attr('height', config.h)
        .append('g')
        .attr('transform', 'translate(' + config.margins.left + ',' + config.margins.top + ')');
    }

    function buildBars() {
      var groups = svg.selectAll('g')
        .data(data)
        .enter()
        .append('g')
        .style('fill', function (d, i) {
          return config.colors[i];
        });

      var rects = groups.selectAll('rect')
        .data(function (d) {
          return d;
        })
        .enter()
        .append('rect')
        .attr('x', function (d) {
          return pointScale(d.x0);
        })
        .attr('height', config.barHeight)
        .attr('width', function (d) {
          return pointScale(d.x);
        })
        .attr("fill-opacity", config.opacity);
    }

    function buildLevelsAxis() {
      var axis = d3.svg.axis()
        .scale(pointScale)
        .tickValues(actualPoints)
        .orient('top');

      svg.append('g')
        .attr('class', 'axis convert-to-levels')
        .attr('font-family', 'sans-serif')
        .attr('fill', config.baseColor)
        .attr('font-size', 11 * config.labelScale + 'px')
        .call(axis);

      // NOTE(emma): I don't know how to make non-linear and also
      // non-numeric axis ticks, so here we are.
      $('.convert-to-levels').children().each(function() {
        var label = $(this).find('text');
        label.html(config.pointsToLevels[label.html()]);
      });
    }

    function buildPointsAxis() {
      var axis = d3.svg.axis()
        .scale(pointScale)
        .tickValues(actualPoints)
        .orient('bottom');

      svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + innerHeight + ')')
        .attr('font-family', 'sans-serif')
        .attr('fill', config.baseColor)
        .attr('font-size', 11 * config.labelScale + 'px')
        .call(axis);
    }

    function parseData() {
      var parsedData = [];
      var previous = 0;

      data.forEach(function(d) {
        parsedData.push([{
          x: d,
          x0: previous,
        }]);
        previous = previous + d;
      });

      data = parsedData;
    }
  }
};

