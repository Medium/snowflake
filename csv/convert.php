  <?php

function csvtojson($file, $delimiter, $enclosure)
{
    if (($handle = fopen($file, "r")) === false)
    {
            die("can't open the file.");
    }

    $csv_headers = fgetcsv($handle, 4000, $delimiter, $enclosure);
    $csv_json = array();

    while ($row = fgetcsv($handle, 4000, $delimiter, $enclosure))
    {
            $csv_json[] = array_combine($csv_headers, $row);
    }

    fclose($handle);
    return json_encode($csv_json);
}

$jsonresult = csvtojson("./job-titles.csv", ",", "'");

echo $jsonresult;

file_put_contents('job-titles.json', $jsonresult);
