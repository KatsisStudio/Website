<?php

require_once "vendor/autoload.php";

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

$loader = new FilesystemLoader(["templates"]);
$twig = new Environment($loader);

echo $twig->render("index.html.twig", [
    "projects" => json_decode(file_get_contents("data/projects.json"), true),
    "members" => json_decode(file_get_contents("data/members.json"), true)
]);