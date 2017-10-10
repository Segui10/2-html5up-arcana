<?php
function validate_user() {
    $error = array();
    $valido = true;
    $filtro = array(
        'titulo' => array(
            'filter' => FILTER_VALIDATE_REGEXP,
            'options' => array('regexp' => '/^\D{2,30}$/')
        ),
        'tituloa' => array(
            'filter' => FILTER_VALIDATE_REGEXP,
            'options' => array('regexp' => '/^\D{2,30}$/')
        ),
        'director' => array(
            'filter' => FILTER_VALIDATE_REGEXP,
            'options' => array('regexp' => '/^\D{2,30}$/')
        ),
        'date_reception' => array(
            'filter' => FILTER_VALIDATE_REGEXP,
            'options' => array('regexp' => '/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/')
        ),
    );


    $resultado = filter_input_array(INPUT_POST, $filtro);

    //no filter

    if ($resultado != null && $resultado) {


        if (!$resultado['titulo']) {
            $error['titulo'] = 'El titulo tiene que tener entre 2 y 20 letras';
            $valido = false;
        }

        if (!$resultado['tituloa']) {
            $error['tituloa'] = 'El titulo alternativo tiene que tener entre 2 y 20 letras';
            $valido = false;
        }

        if (!$resultado['director']) {
            $error['director'] = 'El nombre tiene que tener entre 2 y 20 letras';
            $valido = false;
        }
        if (!$resultado['date_reception']) {
            if($_POST['date_reception'] == ""){
                $error['date_reception'] = "this camp can't empty";
                $valido = false;
            }else{
            $error['date_reception'] = 'error format date (mm/dd/yyyy)';
            $valido = false;
            }
          }
    } else {
        $valido = false;
    };
    return $return = array('resultado' => $valido, 'error' => $error, 'datos' => $resultado);
}

function valida_dates($start_days, $dayslight) {

    $start_day = date("m/d/Y", strtotime($start_days));
    $daylight = date("m/d/Y", strtotime($dayslight));

    list($mes_one, $dia_one, $anio_one) = split('/', $start_day);
    list($mes_two, $dia_two, $anio_two) = split('/', $daylight);

    $dateOne = new DateTime($anio_one . "-" . $mes_one . "-" . $dia_one);
    $dateTwo = new DateTime($anio_two . "-" . $mes_two . "-" . $dia_two);

    if ($dateOne <= $dateTwo) {
        return true;
    }
    return false;
}


// validate birthday
function validateAge($birthday, $age = 16) {
    // $birthday can be UNIX_TIMESTAMP or just a string-date.
    if (is_string($birthday)) {
        $birthday = strtotime($birthday);
    }

    // check
    // 31536000 is the number of seconds in a 365 days year.
    if (time() - $birthday < $age * 31536000) {
        return false;
    }

    return true;
}

//validate email
function valida_email($email) {
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        if (filter_var($email, FILTER_VALIDATE_REGEXP, array('options' => array('regexp' => '/^.{5,50}$/')))) {
            return $email;
        }
    }
    return false;
}
