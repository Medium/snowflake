<?php

create_points();
create_jobs();
#create_examples();

/**
 * Converts the job list and writes the file.
 *
 * @param boolean $debug
 *   Outputs the JSON to the command line.
 */
function create_jobs($debug = FALSE) {
  $jsonresult = process_csv("./job-titles.csv", 'json');
  if ($debug) {
    echo $jsonresult;
  }
  file_put_contents('job-titles.json', $jsonresult);
}

/**
 * Converts the points list and writes the file.
 *
 * @param boolean $debug
 *   Outputs the JSON to the command line.
 */
function create_points($debug = FALSE) {
  $result = process_csv("./points.csv", 'php');
  $output = '';

  foreach($result as $item) {
    $output .= "'" . $item['points'] . "': '" . $item['level'] . "',\n";
  }

  if ($debug) {
    var_dump($output);
  }
  file_put_contents('points.json', $output);
}

/**
 * Converts the examples list and writes the file.
 *
 * @param boolean $debug
 *   Outputs the JSON to the command line.
 */
function create_examples($debug = FALSE) {
  $milestones = process_csv("./milestones.csv", 'php');
  if ($debug) {
    #var_dump($milestones);
  }
  $levels = process_csv("./levels.csv", 'php');
  if ($debug) {
  #  var_dump($levels);
  }
  $examples = process_csv("./examples.csv", 'php');
  if ($debug) {
  #  var_dump($examples);
  }


  $output = '';
  $data = [];
  foreach ($milestones as $milestone) {
    $temp = $milestone;
    $summary = '';
    foreach ($levels as $level) {
      $signals = [];
      if ($level['milestone'] == $temp['milestone'] && $level['cohort'] == $temp['cohort']) {
        $summary = $level['summary'];
        foreach ($examples as $example) {
          if (!empty($example['example']) && $example['milestone'] == $temp['milestone'] && $example['cohort'] == $temp['cohort'] && intval($example['level']) == intval($level['level'])) {
            $signals[] = $example['example'];
          }
        }
        $temp['milestones'][] = [
          'summary' => $summary,
          'signals' => $signals,
          'examples' => [],
        ];
      }
    }
    if ($milestone['cohort'] == 'DEFAULT') {
      $output .= '"' . $milestone['milestone'] . '":';
      $output .= json_encode($temp, JSON_PRETTY_PRINT) . ',';
      file_put_contents('milestones.json', $output);
    }
    else {
      $cohort = $milestone['cohort'];
      foreach ($temp as $key => $item) {
        if ($key == 'cohort' && $item == $cohort) {
          $data[$cohort][] = $temp;
        }
      }
    }
  }
  foreach ($data as $cohort => $info) {
    $track_output = '';
    foreach ($info as $element) {
      $track_output .= 'trackList["' . $element['milestone'] . '"] = ';
      $track_output .= json_encode($element, JSON_PRETTY_PRINT) . "\n";
    }
    file_put_contents(strtolower($cohort) . '.json', $track_output);

  }
}

/**
 * Basic converter for CSV to JSON.
 *
 * @param string $file
 *   The file name and path.
 * @param string $format
 *   The format for the return data (JSON or PHP array).
 * @param string $delimiter
 *   The CSV delimiter.
 * @param string $enclosure
 *   The CSV enclosing character.
 *
 * @return JSON-formatted or PHP array.
 */
function process_csv($file, $format = 'json', $delimiter = ",", $enclosure = '"') {
  if (($handle = fopen($file, "r")) === false) {
    die("can't open the file.");
  }
  $csv_headers = fgetcsv($handle, 4000, $delimiter, $enclosure);
  $csv_json = [];

  while ($row = fgetcsv($handle, 4000, $delimiter, $enclosure)) {
    $csv_json[] = array_combine($csv_headers, $row);
  }

  fclose($handle);

  return ($format == 'json') ? json_encode($csv_json, JSON_PRETTY_PRINT) : $csv_json;
}
