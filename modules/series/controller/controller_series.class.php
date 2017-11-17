<?php
class controller_series {
    function __construct() {
        include(FUNCTIONS_series . "functions_series.inc.php");
        include(UTILS . "upload.php");
        $_SESSION['module'] = "series";
    }

    function form_series() {
        require_once(VIEW_PATH_INC . "header.php");
        require_once(VIEW_PATH_INC . "menu.php");

        echo '<br><br><br><br><br><br><br>';
        loadView('modules/series/view/', 'create_series.php');

        require_once(VIEW_PATH_INC . "footer.html");
    }

    function results_series() {
        require_once(VIEW_PATH_INC . "header.php");
        require_once(VIEW_PATH_INC . "menu.php");

        echo '<br><br><br><br><br><br><br>';
        loadView('modules/series/view/', 'results_series.php');

        require_once(VIEW_PATH_INC . "footer.html");
    }

    function upload_series() {
    //////////////////////////////////////////////////////////////// upload
    if ((isset($_GET["upload"])) && ($_GET["upload"] == true)) {
        $result_avatar = upload_files();
        $_SESSION['result_avatar'] = $result_avatar;
        //echo debug($_SESSION['result_avatar']); //se mostraría en alert(response); de dropzone.js
    }
    }



    function alta_series() {
        $jsondata = array();
        $seriesJSON = json_decode($_POST["alta_series_json"], true);
        $result = validate_series($seriesJSON);
        //print_r($result);
        if (empty($_SESSION['result_avatar'])) {
            $_SESSION['result_avatar'] = array('resultado' => true, 'error' => "", 'datos' => 'media/default-avatar.png');
        }
        $result_avatar = $_SESSION['result_avatar'];

        if (($result['resultado']) && ($result_avatar['resultado'])) {
            $arrArgument = array(
                'titulo' => ucfirst($result['datos']['titulo']),
                'tipo' => ucfirst($result['datos']['tipo']),
                'generop' => $result['datos']['generop'],
                'generos' => $result['datos']['generos'],
                'tituloa' => ucfirst($result['datos']['tituloa']),
                'director' => ucfirst($result['datos']['director']),
                'date_reception' => $result['datos']['date_reception'],
                'country' => $result['datos']['country'],
                'province' => $result['datos']['province'],
                'city' => $result['datos']['city'],
                'avatar' => $result_avatar['datos']
            );

            /////////////////insert into BD////////////////////////
            $arrValue = false;
            try {
                $arrValue = loadModel(MODEL_series, "series_model", "create_series", $arrArgument);
            } catch (Exception $e) {
                showErrorPage(2, "ERROR - 503 BD", 'HTTP/1.0 503 Service Unavailable', 503);
            }

            if ($arrValue)
                $mensaje = "Su registro se ha efectuado correctamente, para finalizar compruebe que ha recibido un correo de validacion y siga sus instrucciones";
            else
                $mensaje = "No se ha podido realizar su alta. Intentelo mas tarde";

            $_SESSION['user'] = $arrArgument;
            $_SESSION['msje'] = $mensaje;
            $callback = "../../series/results_user/";//"index.php?module=series&function=results_user";

            $jsondata["success"] = true;
            $jsondata["redirect"] = $callback;
            echo json_encode($jsondata);
            exit;
        } else {
            //$error = $result['error'];
            //$error_avatar = $result_avatar['error'];
            $jsondata["success"] = false;
            $jsondata["error"] = $result['error'];
            $jsondata["error_avatar"] = $result_avatar['error'];

            $jsondata["success1"] = false;
            if ($result_avatar['resultado']) {
                $jsondata["success1"] = true;
                $jsondata["img_avatar"] = $result_avatar['datos'];
            }
            header('HTTP/1.0 400 Bad error');
            echo json_encode($jsondata);
            //exit;
        }
    }

    function delete_series() {
        if (isset($_POST["delete"]) && $_POST["delete"] == true) {
            $_SESSION['result_avatar'] = array();
            $result = remove_files();
            if ($result === true) {
                echo json_encode(array("res" => true));
            } else {
                echo json_encode(array("res" => false));
            }
        }
    }

    function load_series() {
        if (isset($_POST["load"]) && $_POST["load"] == true) {
            $jsondata = array();
            if (isset($_SESSION['user'])) {
                //echo debug($_SESSION['user']);
                $jsondata["user"] = $_SESSION['user'];
            }
            if (isset($_SESSION['msje'])) {
                //echo $_SESSION['msje'];
                $jsondata["msje"] = $_SESSION['msje'];
            }
            close_session();
            echo json_encode($jsondata);
            exit;
        }
    }

    function load_data_series() {
        if ((isset($_POST["load_data"])) && ($_POST["load_data"] == true)) {
            $jsondata = array();

            if (isset($_SESSION['user'])) {
                $jsondata["user"] = $_SESSION['user'];
                echo json_encode($jsondata);
                exit;
            } else {
                $jsondata["user"] = "";
                echo json_encode($jsondata);
                exit;
            }
        }
    }

    function load_countries_series() {
        if ((isset($_POST["load_country"])) && ($_POST["load_country"] == true)) {
            $json = array();
            $url = 'http://www.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfCountryNamesByName/JSON';

            try {
                //throw new Exception();
                $json = loadModel(MODEL_series, "series_model", "obtain_countries", $url);
            } catch (Exception $e) {
                $json = array();
            }

            if ($json) {
                echo $json;
                exit;
            } else {
                $json = "error";
                echo $json;
                exit;
            }
        }
    }

    function load_provinces_series() {
        if ((isset($_POST["load_provinces"])) && ($_POST["load_provinces"] == true)) {
            $jsondata = array();
            $json = array();

            try {
                $json = loadModel(MODEL_series, "series_model", "obtain_provinces");
            } catch (Exception $e) {
                $json = array();
            }

            if ($json) {
                $jsondata["provinces"] = $json;
                echo json_encode($jsondata);
                exit;
            } else {
                $jsondata["provinces"] = "error";
                echo json_encode($jsondata);
                exit;
            }
        }
    }

    function load_towns_series() {
        if (isset($_POST['idPoblac'])) {
            $jsondata = array();
            $json = array();

            try {
                $json = loadModel(MODEL_series, "series_model", "obtain_towns", $_POST['idPoblac']);
            } catch (Exception $e) {
                showErrorPage(2, "ERROR - 503 BD", 'HTTP/1.0 503 Service Unavailable', 503);
            }

            if ($json) {
                $jsondata["towns"] = $json;
                echo json_encode($jsondata);
                exit;
            } else {
                $jsondata["towns"] = "error";
                echo json_encode($jsondata);
                exit;
            }
        }
    }
}
