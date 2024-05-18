<?php

require_once "vendor/autoload.php";

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

$loader = new FilesystemLoader(["templates"]);
$twig = new Environment($loader);

$json = isset($_GET["json"]) && $_GET["json"] === "1";
if ($json) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        "projects" => json_decode(file_get_contents("data/projects.json"), true),
        "members" => json_decode(file_get_contents("data/members.json"), true)
    ]);
} else {
    echo $twig->render("index.html.twig", [
        "projects" => json_decode(file_get_contents("data/projects.json"), true),
        "members" => json_decode(file_get_contents("data/members.json"), true),
        "characters" => json_decode(file_get_contents("data/characters.json"), true)
    ]);
}