/**
 * RadarChart
 * Largely stolen from http://bl.ocks.org/chrisrzhou/raw/2421ac6541b68c1680f8/
 **/


var RadarChart = {
  draw: function(id, data, options) {

    // default config
    var w = 300;
    var h = 300;
    var config = {
      w: w,
      h: h,
      levels: 5,
      levelScale: 1.0,
      labelScale: 1.0,
      maxValue: 0,
      radians: 2 * Math.PI,
      polygonAreaOpacity: 0.3,
      polygonStrokeOpacity: 1,
      polygonPointSize: 4,
      legendBoxSize: 10,
      translateX: w / 4,
      translateY: h / 4,
      paddingX: w,
      paddingY: h,
      colors: d3.scale.category10(),
      showLevels: true,
      showLevelsLabels: true,
      showAxesLabels: true,
      showAxes: true,
      showLegend: true,
      showVertices: true,
      showPolygons: true,
      onChange: function() {},
    };

    // initiate main vis component
    var vis = {
      svg: null,
      levels: null,
      axis: null,
      vertices: null,
      legend: null,
      allAxis: null,
      total: null,
      radius: null
    };

    // feed user configuration options
    if ("undefined" !== typeof options) {
      for (var i in options) {
        if ("undefined" !== typeof options[i]) {
          config[i] = options[i];
        }
      }
    }

    // render the visualization
    render(data);

    /** helper functions
     *
     * @function: render
     * @function: updateConfig
     * @function: buildVis: call remaining helper functions
     * @function: buildVisComponents: build main vis components
     * @function: buildLevels: build "spiderweb" levels
     * @function: buildLevelLabels: build level labels
     * @function: buildAxes: build axes
     * @function: buildAxesLabels: build axes labels
     * @function: buildPolygonCoordinates: build [x, y] coordinates of polygon vertices
     * @function: buildPolygons: build polygon areas
     * @function: buildPolygonVertices: build polygon vertices
     * @function: buildLegend:  build legend
     * @function: buildLevelVertices: build clickable vertices at each level,
     *            which update the data and redraw the chart
     **/

    function render(data) {
      // remove existing svg if exists
      d3.select(id).selectAll("svg").remove();
      updateConfig();
      buildVis(data); // build svg
    }

    function updateConfig() {
      config.maxValue = Math.max(config.maxValue, d3.max(data, function(d) {
        return d3.max(d.axes, function(o) { return o.value; });
      }));
      config.w *= config.levelScale;
      config.h *= config.levelScale;
      config.paddingX = config.w * config.levelScale;
      config.paddingY = config.h * config.levelScale;
    }

    function buildVis(data) {
      buildVisComponents();
      buildPolygonCoordinates(data);
      if (config.showLevels) buildLevels();
      if (config.showLevelsLabels) buildLevelLabels();
      if (config.showAxes) buildAxes();
      if (config.showAxesLabels) buildAxesLabels();
      if (config.showLegend) buildLegend(data);
      if (config.showVertices) buildPolygonVertices(data);
      if (config.showPolygons) buildPolygons(data);
      if (data.length === 1) buildLevelVertices();
    }

    function buildVisComponents() {
      // update vis parameters
      vis.allAxis = data[0].axes.map(function(i, j) { return i.axis; });
      vis.totalAxes = vis.allAxis.length;
      vis.radius = Math.min(config.w / 2, config.h / 2);

      // create main vis svg
      vis.svg = d3.select(id)
        .append("svg").classed("svg-vis", true)
        .attr("width", config.w + config.paddingX)
        .attr("height", config.h + config.paddingY)
        .append("svg:g")
        .attr("transform", "translate(" + config.translateX + "," + config.translateY + ")");

      // create levels
      vis.levels = vis.svg.selectAll(".levels")
        .append("svg:g").classed("levels", true);

      // create axes
      vis.axes = vis.svg.selectAll(".axes")
        .append("svg:g").classed("axes", true);

      // create vertices
      vis.vertices = vis.svg.selectAll(".vertices");

      // initiate legend
      vis.legend = vis.svg.append("svg:g").classed("legend", true)
        .attr("height", config.h / 2)
        .attr("width", config.w / 2)
        .attr("transform", "translate(" + 0 + ", " + 1.1 * config.h + ")");
    }

    function buildLevels() {
      for (var level = 0; level < config.levels; level++) {
        var levelFactor = vis.radius * ((level + 1) / config.levels);

        // build level lines
        vis.levels
          .data(vis.allAxis).enter()
          .append("svg:line").classed("level-lines", true)
          .attr("x1", function(d, i) { return levelFactor * (1 - Math.sin(i * config.radians / vis.totalAxes)); })
          .attr("y1", function(d, i) { return levelFactor * (1 - Math.cos(i * config.radians / vis.totalAxes)); })
          .attr("x2", function(d, i) { return levelFactor * (1 - Math.sin((i + 1) * config.radians / vis.totalAxes)); })
          .attr("y2", function(d, i) { return levelFactor * (1 - Math.cos((i + 1) * config.radians / vis.totalAxes)); })
          .attr("transform", "translate(" + (config.w / 2 - levelFactor) + ", " + (config.h / 2 - levelFactor) + ")")
          .attr("stroke", "gray")
          .attr("stroke-width", "0.5px");
      }
    }

    function buildLevelLabels() {
      for (var level = 0; level < config.levels; level++) {
        var levelFactor = vis.radius * ((level + 1) / config.levels);

        vis.levels
          .data([1]).enter()
          .append("svg:text").classed("level-labels", true)
          .text((config.maxValue * (level + 1) / config.levels).toFixed(2))
          .attr("x", function(d) { return levelFactor * (1 - Math.sin(0)); })
          .attr("y", function(d) { return levelFactor * (1 - Math.cos(0)); })
          .attr("transform", "translate(" + (config.w / 2 - levelFactor + 5) + ", " + (config.h / 2 - levelFactor) + ")")
          .attr("fill", "gray")
          .attr("font-family", "sans-serif")
          .attr("font-size", 10 * config.labelScale + "px");
      }
    }

    function buildAxes() {
      vis.axes
        .data(vis.allAxis).enter()
        .append("svg:line").classed("axis-lines", true)
        .attr("x1", config.w / 2)
        .attr("y1", config.h / 2)
        .attr("x2", function(d, i) { return config.w / 2 * (1 - Math.sin(i * config.radians / vis.totalAxes)); })
        .attr("y2", function(d, i) { return config.h / 2 * (1 - Math.cos(i * config.radians / vis.totalAxes)); })
        .attr("stroke", "grey")
        .attr("stroke-width", "1px");
    }

    function buildAxesLabels() {
      vis.axes
        .data(vis.allAxis).enter()
        .append("svg:text").classed("axis-labels", true)
        .text(function(d) { return d; })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) { return config.w / 2 * (1 - 1.3 * Math.sin(i * config.radians / vis.totalAxes)); })
        .attr("y", function(d, i) { return config.h / 2 * (1 - 1.1 * Math.cos(i * config.radians / vis.totalAxes)); })
        .attr("font-family", "sans-serif")
        .attr("font-size", 11 * config.labelScale + "px");
    }

    function buildPolygonCoordinates(data) {
      data.forEach(function(group) {
        group.axes.forEach(function(d, i) {
          d.coordinates = { // [x, y] coordinates
            x: config.w / 2 * (1 - (parseFloat(Math.max(d.value, 0)) / config.maxValue) * Math.sin(i * config.radians / vis.totalAxes)),
            y: config.h / 2 * (1 - (parseFloat(Math.max(d.value, 0)) / config.maxValue) * Math.cos(i * config.radians / vis.totalAxes))
          };
        });
      });
    }

    function buildPolygonVertices(data) {
      data.forEach(function(group, g) {
        vis.vertices
          .data(group.axes).enter()
          .append("svg:circle").classed("polygon-vertices", true)
          .attr("r", config.polygonPointSize)
          .attr("cx", function(d, i) { return d.coordinates.x; })
          .attr("cy", function(d, i) { return d.coordinates.y; })
          .attr("fill", config.colors(g))
      });
    }

    function buildPolygons(data) {
      vis.vertices
        .data(data).enter()
        .append("svg:polygon").classed("polygon-areas", true)
        .attr("points", function(group) { // build verticesString for each group
          var verticesString = "";
          group.axes.forEach(function(d) { verticesString += d.coordinates.x + "," + d.coordinates.y + " "; });
          return verticesString;
        })
        .attr("stroke-width", "2px")
        .attr("stroke", function(d, i) { return config.colors(i); })
        .attr("fill", function(d, i) { return config.colors(i); })
        .attr("fill-opacity", config.polygonAreaOpacity)
        .attr("stroke-opacity", config.polygonStrokeOpacity)
    }

    function buildLegend(data) {
      // create legend squares
      vis.legend.selectAll(".legend-tiles")
        .data(data).enter()
        .append("svg:rect").classed("legend-tiles", true)
        .attr("x", config.w - config.paddingX / 2)
        .attr("y", function(d, i) { return i * 2 * config.legendBoxSize; })
        .attr("width", config.legendBoxSize)
        .attr("height", config.legendBoxSize)
        .attr("fill", function(d, g) { return config.colors(g); });

      // create text next to squares
      vis.legend.selectAll(".legend-labels")
        .data(data).enter()
        .append("svg:text").classed("legend-labels", true)
        .attr("x", config.w - config.paddingX / 2 + (1.5 * config.legendBoxSize))
        .attr("y", function(d, i) { return i * 2 * config.legendBoxSize; })
        .attr("dy", 0.07 * config.legendBoxSize + "em")
        .attr("font-size", 11 * config.labelScale + "px")
        .attr("fill", "gray")
        .text(function(d) {
          return d.group;
        });
    }

    function buildLevelVertices() {
      for (var level = 0; level < config.levels; level++) {
        var levelFactor = vis.radius * ((level + 1) / config.levels);

        vis.levels
          .data(vis.allAxis).enter()
          .append("svg:circle").classed("level-vertices", true)
          .attr("r", config.polygonPointSize)
          .attr("cx", function(d, i) { return levelFactor * (1 - Math.sin(i * config.radians / vis.totalAxes)); })
          .attr("cy", function(d, i) { return levelFactor * (1 - Math.cos(i * config.radians / vis.totalAxes)); })
          .attr("transform", "translate(" + (config.w / 2 - levelFactor) + ", " + (config.h / 2 - levelFactor) + ")")
          .attr("fill", config.colors(0))
          .attr("fill-opacity", 0.2)
          .attr("stroke", "transparent") // make hover + click targets bigger
          .attr("stroke-width", "20px")
          .attr("level", level + 1)

          .on("mouseover", function(d) {
            d3.select(this)
              .attr("fill-opacity", 0.7);
          })
          .on("mouseout", function(d) {
            d3.select(this)
              .transition(250)
                .attr("fill-opacity", 0.2);
          })
          .on('click', function(d) {
            var newLevel = d3.select(this).attr("level")

            // find the right axis + update to new value
            data[0].axes.forEach(function(axis) {
              if (axis.axis == d && axis.value != newLevel) {
                axis.value = newLevel;

                // rerender
                render(data);

                // callback
                config.onChange(d, newLevel);
              }
            });
          });
      }
    }
  }
};