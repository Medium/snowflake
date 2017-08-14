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
      levelVertexOpacity: 0.3,
      levelVertexOpacityOnHover: 0.8,
      labelScale: 1.0,
      maxValue: 0,
      radians: -2 * Math.PI,
      quadrantOpacity: 0.5,
      quadrantColors: ["red", "yellow", "green", "blue"],
      polygonAreaOpacity: 0.3,
      polygonStrokeOpacity: 1,
      polygonPointSize: 4,
      legendBoxSize: 10,
      translateX: w / 4,
      translateY: h / 4,
      paddingX: w,
      paddingY: h,
      colors: d3.scale.category10(),
      baseColor: "white",
      showLevels: true,
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
      radius: null,
      quadrants: null,
      transQuadrants: null,
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
     * @function: buildQuadrants: build colored backgrounds for each quadrant
     * @function: buildLevels: build "spiderweb" levels
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
      config.paddingX = config.paddingX * config.levelScale;
      config.paddingY = config.paddingY * config.levelScale;
    }

    function buildVis(data) {
      buildVisComponents();
      buildPolygonCoordinates(data);
      if (vis.totalAxes === 16 && data.length === 1) buildQuadrants();
      if (config.showLevels) buildLevels();
      if (config.showAxes) buildAxes();
      if (config.showAxesLabels) buildAxesLabels();
      if (data.length > 1) buildLegend(data);
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

      // create quadrants
      vis.quadrants = vis.svg.selectAll(".quadrants")
        .append("svg:g").classed("quadrants", true)

      // create quadrant transitions
      vis.transQuadrants = vis.svg.selectAll(".quadrant-transitions")
        .append("svg:g").classed(".quadrant-transitions", true)

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

    function buildQuadrants() {
      // TODO(emma): this is hacky af and only works with exactly 16 axes 😭
      function getCoordinates(i) {
        return {
          x: config.w / 2 * (1 - Math.sin((i + .5) * config.radians / vis.totalAxes)),
          y: config.h / 2 * (1 - Math.cos((i + .5) * config.radians / vis.totalAxes)),
        }
      }

      function getCenterCoordinates() {
        return {x: config.w / 2, y: config.h / 2}
      }

      function buildVerticesString(data) {
        var verticesString = "";
        data.coordinates.forEach(function(v) {
          verticesString += v.x + "," + v.y + " ";
        });
        return verticesString;
      }

      function buildGradient(id, color1, color2, isVertical) {
        var svg = d3.select("body").append("svg")
            .attr("width", 1)
            .attr("height", 1);

        var gradient = svg.append("defs")
          .append("linearGradient")
            .attr("id", id)
            .attr("x1", "0%")
            .attr("x2", isVertical ? "0%" : "100%")
            .attr("y1", "0%")
            .attr("y2", isVertical ? "100%" : "0%")
            .attr("spreadMethod", "pad");

        gradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", color1)
            .attr("stop-opacity", config.quadrantOpacity);

        gradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", color2)
            .attr("stop-opacity", config.quadrantOpacity);
      }

      var quadrants = []
      var transQuadrants = []

      for (var q = 0; q < 4; q++) {
        var coordinates = [getCenterCoordinates()]
        for (var i = 0; i < 4; i++) {
          coordinates.push(getCoordinates(4 * q + i))
        }

        quadrants.push({
          coordinates: coordinates,
          color: config.quadrantColors[q],
        })

        var transCoordinates = [
          getCenterCoordinates(),
          getCoordinates(4 * q - 1),
          getCoordinates(4 * q),
        ]

        var gradientId = "gradient" + q;
        var color1 = q == 0 ? config.quadrantColors[3] : config.quadrantColors[q - 1];
        var color2 = config.quadrantColors[q];
        if (q > 1) { color2 = [color1, color1 = color2][0]; }

        buildGradient(gradientId, color1, color2, q % 2 != 0)
        transQuadrants.push({
          coordinates: transCoordinates,
          gradientId: gradientId,
        })
      }

      vis.quadrants
        .data(quadrants).enter()
        .append("svg:polygon").classed("quadrants", true)
        .attr("points", function(q) { return buildVerticesString(q); })
        .attr("fill", function(q) { return q.color; })
        .attr("fill-opacity", config.quadrantOpacity);

      vis.transQuadrants
        .data(transQuadrants).enter()
        .append("svg:polygon").classed("quadrant-transitions", true)
        .attr("points", function(q) { return buildVerticesString(q); })
        .style("fill", function(q) { return "url(#" + q.gradientId + ")"; });
    }

    function buildLevels() {
      for (var level = 0; level < config.levels; level++) {
        var levelFactor = vis.radius * ((level + 1) / config.levels);

        // build level lines
        vis.levels
          .data(vis.allAxis).enter()
          .append("svg:line").classed("level-lines", true)
          .attr("x1", function(d, i) { return levelFactor * (1 - Math.sin((i + .5) * config.radians / vis.totalAxes)); })
          .attr("y1", function(d, i) { return levelFactor * (1 - Math.cos((i + .5) * config.radians / vis.totalAxes)); })
          .attr("x2", function(d, i) { return levelFactor * (1 - Math.sin((i + 1.5) * config.radians / vis.totalAxes)); })
          .attr("y2", function(d, i) { return levelFactor * (1 - Math.cos((i + 1.5) * config.radians / vis.totalAxes)); })
          .attr("transform", "translate(" + (config.w / 2 - levelFactor) + ", " + (config.h / 2 - levelFactor) + ")")
          .attr("stroke", config.baseColor)
          .attr("stroke-width", "1px");
      }
    }

    function buildAxes() {
      vis.axes
        .data(vis.allAxis).enter()
        .append("svg:line").classed("axis-lines", true)
        .attr("x1", config.w / 2)
        .attr("y1", config.h / 2)
        .attr("x2", function(d, i) { return config.w / 2 * (1 - Math.sin((i + .5) * config.radians / vis.totalAxes)); })
        .attr("y2", function(d, i) { return config.h / 2 * (1 - Math.cos((i + .5) * config.radians / vis.totalAxes)); })
        .attr("stroke", config.baseColor)
        .attr("stroke-width", "1px");
    }

    function buildAxesLabels() {
      vis.axes
        .data(vis.allAxis).enter()
        .append("svg:text").classed("axis-labels", true)
        .text(function(d) { return d; })
        .attr("dominant-baseline", "central")
        .attr("text-anchor", function(d, i) {
          var circlePercent = (i + .5) / vis.totalAxes
          if (circlePercent > .0625 && circlePercent < .4375) {
            return "start";
          } else if (circlePercent > .5625 && circlePercent < .9375) {
            return "end";
          } else {
            return "middle";
          }
        })
        .attr("x", function(d, i) { return config.w / 2 * (1 - 1.1 * Math.sin((i + .5) * config.radians / vis.totalAxes)); })
        .attr("y", function(d, i) { return config.h / 2 * (1 - 1.13 * Math.cos((i + .5) * config.radians / vis.totalAxes)); })
        .attr("font-family", "sans-serif")
        .attr("font-size", 11 * config.labelScale + "px")
        .attr("fill", config.baseColor);
    }

    function buildPolygonCoordinates(data) {
      data.forEach(function(group) {
        group.axes.forEach(function(d, i) {
          d.coordinates = { // [x, y] coordinates
            x: config.w / 2 * (1 - (parseFloat(Math.max(d.value, 0)) / config.maxValue) * Math.sin((i + .5) * config.radians / vis.totalAxes)),
            y: config.h / 2 * (1 - (parseFloat(Math.max(d.value, 0)) / config.maxValue) * Math.cos((i + .5) * config.radians / vis.totalAxes))
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
          .attr("fill", data.length > 1 ? config.colors(g) : "white")
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
        .attr("stroke-width", "3px")
        .attr("stroke", function(d, i) { return data.length > 1 ? config.colors(i) : "white"; })
        .attr("fill", function(d, i) { return data.length > 1 ? config.colors(i) : "white"; })
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
        .attr("fill", config.baseColor)
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
          .attr("cx", function(d, i) { return levelFactor * (1 - Math.sin((i + .5) * config.radians / vis.totalAxes)); })
          .attr("cy", function(d, i) { return levelFactor * (1 - Math.cos((i + .5) * config.radians / vis.totalAxes)); })
          .attr("transform", "translate(" + (config.w / 2 - levelFactor) + ", " + (config.h / 2 - levelFactor) + ")")
          .attr("fill", "white")
          .attr("fill-opacity", config.levelVertexOpacity)
          .attr("stroke", "transparent") // make hover + click targets bigger
          .attr("stroke-width", 3 * config.polygonPointSize + "px")
          .attr("level", level + 1)

          // add interaction functions
          .on("mouseover", function(d) {
            d3.select(this)
              .attr("fill-opacity", config.levelVertexOpacityOnHover);
          })
          .on("mouseout", function(d) {
            d3.select(this)
              .transition(250)
                .attr("fill-opacity", config.levelVertexOpacity);
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
