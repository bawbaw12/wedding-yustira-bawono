<?php
$txt = "user id date";
$myfile = file_put_contents('data.txt', $txt . PHP_EOL, FILE_APPEND | LOCK_EX);
?>