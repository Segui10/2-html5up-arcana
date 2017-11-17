<?php

$path = $_SERVER['DOCUMENT_ROOT'] . '/1_php_mvc_oo/1_Backend/0_template/1 templates_web_examples/2 html5up-arcana/';
//define('SITE_ROOT', $path);
require(SITE_ROOT . "modules/listseries/model/BLL/user_bll.class.singleton.php");

class user_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = user_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function create_user($arrArgument) {
        return $this->bll->create_user_BLL($arrArgument);
    }

    public function obtain_countries($url){
        return $this->bll->obtain_countries_BLL($url);
    }

    public function obtain_provinces(){
        return $this->bll->obtain_provinces_BLL();
    }

    public function obtain_cities($arrArgument){
        return $this->bll->obtain_cities_BLL($arrArgument);
    }

    public function list_products() {
        return $this->bll->list_products_BLL();
    }
    
    public function details_products($id) {
        return $this->bll->details_products_BLL($id);
    }
}
