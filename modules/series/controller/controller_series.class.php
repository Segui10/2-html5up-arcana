<?php
	echo "<br>";echo "<br>";
	echo "<br>";echo "<br>";
	echo "<br>";echo "<br>";
	echo "<br>";echo "<br>";

	include 'modules/series/utils/functions_user.inc.php';
	if (isset($_POST['SubmitSeries'])) {
	    $result = validate_user();

	    if ($result['resultado']) {
	        $arrArgument = array(
	            'titulo' => ucfirst($result['datos']['titulo']),
	            'tituloa' => ucfirst($result['datos']['tituloa']),
	            'director' => $result['datos']['director'],
	            'date_reception' => $result['datos']['date_reception'],
	            /*'address' => $result['datos']['address'],
	            'user' => $result['datos']['user'],
	            'pass' => $result['datos']['pass'],
	            'email' => $result['datos']['email'],
	            'en_lvl' => strtoupper($result['datos']['en_lvl']),
	            'interests' => $result['datos']['interests'],*/
	        );

	        $mensaje = "Film has been successfully registered";

	        $_SESSION['user'] = $arrArgument;
	        $_SESSION['msje'] = $mensaje;

	        $callback="index.php?module=series&view=results_products";
	        redirect($callback);
	    } else {
	        $error = $result['error'];
	    }
	}

	include 'modules/series/view/create_products.php';
