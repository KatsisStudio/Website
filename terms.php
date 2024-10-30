<?php

require_once "vendor/autoload.php";

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

$loader = new FilesystemLoader(["templates", "common/templates"]);
$twig = new Environment($loader);

echo $twig->render("terms.html.twig");