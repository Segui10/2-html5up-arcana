<?php
session_start();
//include  with absolute route
include ($_SERVER['DOCUMENT_ROOT'] . "/1_php_mvc_oo/1_Backend/0_template/1 templates_web_examples/2 html5up-arcana/modules/series/utils/functions_user.inc.php");
include ($_SERVER['DOCUMENT_ROOT'] . "/1_php_mvc_oo/1_Backend/0_template/1 templates_web_examples/2 html5up-arcana/utils/upload.php");
include ($_SERVER['DOCUMENT_ROOT'] . "/1_php_mvc_oo/1_Backend/0_template/1 templates_web_examples/2 html5up-arcana/utils/common.inc.php");
$path = $_SERVER['DOCUMENT_ROOT'] . '/1_php_mvc_oo/1_Backend/0_template/1 templates_web_examples/2 html5up-arcana/';
define('SITE_ROOT', $path);

listAll();

if (isset($_GET["load"]) && $_GET["load"] == true) {
    echo json_encode($_SESSION['all']);
    exit;
 }

if (isset($_GET["load1"]) && $_GET["load1"] == true) {
    details();
}

if (isset($_GET["load2"]) && $_GET["load2"] == true) {
    echo json_encode($_SESSION['user']);
    exit;
}

function listAll(){
    $path_model = SITE_ROOT . '/modules/listseries/model/model/';
    $arrValue = loadModel($path_model, "user_model", "list_products");
    $_SESSION['all'] = $arrValue;
}

function details() { 
    $jsondata = array();
    $usersJSON = json_decode($_GET["alta_users_json"], true);
    $id = $usersJSON["titulo"];
    $path_model = SITE_ROOT . '/modules/listseries/model/model/';
    $arrValue = loadModel($path_model, "user_model", "details_products",$id);
    $_SESSION['user'] = $arrValue;
    $callback = "index.php?module=listseries&view=details";
    $jsondata["success"] = true;
    $jsondata["redirect"] = $callback;
    echo json_encode($jsondata);
    exit;
}