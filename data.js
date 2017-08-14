// TODO(emma): replace this with firebase

function csv2json(csv) {
  csv = csv.replace(/, /g, ',');
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
