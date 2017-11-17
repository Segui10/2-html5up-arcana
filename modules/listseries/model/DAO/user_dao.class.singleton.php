<?php
class userDAO {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function create_user_DAO($db, $arrArgument) {
        $titulo = $arrArgument['titulo'];
        $tituloa = $arrArgument['tituloa'];
        $director = $arrArgument['director'];
        $tipo = $arrArgument['tipo'];
        $generop = $arrArgument['generop'];
        $country = $arrArgument['country'];
        $province = $arrArgument['province'];
        $city = $arrArgument['city'];
        $generos = "null";
        $date_reception = $arrArgument['date_reception'];
        //$interests = $arrArgument['interests'];
        $avatar = $arrArgument['avatar'];

      /*  $history = 0;
        $music = 0;
        $computing = 0;
        $magic = 0;

        foreach ($interests as $indice) {
            if ($indice === 'History')
                $history = 1;
            if ($indice === 'Music')
                $music = 1;
            if ($indice === 'Computing')
                $computing = 1;
            if ($indice === 'Magic')
                $magic = 1;
        }*/

        $sql = "INSERT INTO series (titulo, tituloa, tipo, director, date_reception, country, province, city, generop, generos, img"
                . " ) VALUES ('$titulo', '$tituloa', '$tipo', '$director', '$date_reception','$country', '$province', '$city','$generop', '$generos', '$avatar')";

        //print_r($sql);
        return $db->ejecutar($sql);
    }

    public function obtain_countries_DAO($url){
          $ch = curl_init();
          curl_setopt ($ch, CURLOPT_URL, $url);
          curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
          curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 5);
          $file_contents = curl_exec($ch);

          $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
          curl_close($ch);
          $accepted_response = array(200, 301, 302);
          if(!in_array($httpcode, $accepted_response)){
            return FALSE;
          }else{
            return ($file_contents) ? $file_contents : FALSE;
          }
    }

    public function obtain_provinces_DAO(){
          $json = array();
          $tmp = array();

          $provincias = simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/1_php_mvc_oo/1_Backend/0_template/1 templates_web_examples/2 html5up-arcana/resources/provinciasypoblaciones.xml');
          $result = $provincias->xpath("/lista/provincia/nombre | /lista/provincia/@id");
          for ($i=0; $i<count($result); $i+=2) {
            $e=$i+1;
            $provincia=$result[$e];

            $tmp = array(
              'id' => (string) $result[$i], 'nombre' => (string) $provincia
            );
            array_push($json, $tmp);
          }
              return $json;

    }

    public function obtain_cities_DAO($arrArgument){
          $json = array();
          $tmp = array();

          $filter = (string)$arrArgument;
          $xml = simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/1_php_mvc_oo/1_Backend/0_template/1 templates_web_examples/2 html5up-arcana/resources/provinciasypoblaciones.xml');
          $result = $xml->xpath("/lista/provincia[@id='$filter']/localidades");

          for ($i=0; $i<count($result[0]); $i++) {
              $tmp = array(
                'poblacion' => (string) $result[0]->localidad[$i]
              );
              array_push($json, $tmp);
          }
          return $json;
    }

    public function list_products_DAO($db) {
        $sql = "SELECT * FROM series";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        
    }
    
    public function details_products_DAO($db,$id) {
        $sql = "SELECT * FROM series WHERE titulo='$id'";
        //echo json_encode($sql);
        //die();
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        
    }
    
}
