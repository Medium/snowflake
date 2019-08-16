<?php

#create_jobs();
create_examples(TRUE);

/**
 * Converts the job list and writes the file.
 *
 * @param boolean $debug
 *   Outputs the JSON to the command line.
 */
function create_jobs($debug = FALSE) {
  $jsonresult = csvtojson("./job-titles.csv");
  if ($debug) {
    echo $jsonresult;
  }
  file_put_contents('job-titles.json', $jsonresult);
}

/**
 * Converts the examples list and writes the file.
 *
 * @param boolean $debug
 *   Outputs the JSON to the command line.

   "PLANNING": {
    "displayName": "Planning & Coordination",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously.",
    "milestones": [{
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "signals": [
        "Adds NodeJS endpoints using layers architecture",
        "Adds golang endpoints using Gotham architecture",
        "Makes minor server changes to support client needs",
      ],
      "examples": [
        "Added IFTTT trigger for new bookmark to medium2",
        "Added delete audio route to Buggle",
        "Queried a Dynamo LSI appropriately",
      ],
    },
 */
function create_examples($debug = FALSE) {
  $milestones = process_csv("./milestones.csv", 'php');
  if ($debug) {
    var_dump($milestones);
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
  foreach ($milestones as $milestone) {
    $data = [];
    $output .= $milestone['milestone'] . ':';
    $data = json_encode($milestone);
    $output .= $data . ',';
  }
  if ($debug) {
    var_dump($output);
  }
 # file_put_contents('milestones.json', $jsonresult);
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

  return ($json) ? json_encode($csv_json) : $csv_json;
}
