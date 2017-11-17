CREATE DATABASE  IF NOT EXISTS `series1` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `series1`;
-- MySQL dump 10.13  Distrib 5.5.52, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: series1
-- ------------------------------------------------------
-- Server version	5.5.52-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `series` (
  `titulo` varchar(100) NOT NULL,
  `tituloa` varchar(100) DEFAULT NULL,
  `tipo` varchar(100) DEFAULT NULL,
  `director` varchar(100) DEFAULT NULL,
  `date_reception` varchar(45) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `generop` varchar(100) DEFAULT NULL,
  `generos` varchar(100) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`titulo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES ('Game of Thrones','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testa','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('tests','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testd','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testf','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testg','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testh','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testj','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testk','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testl','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testq','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testw','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('teste','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testr','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testt','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testy','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testu','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testi','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testo','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testp','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testz','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testx','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testc','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testv','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testb','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testn','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testm','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testaa','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testss','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testdd','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testff','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');
INSERT INTO `series` VALUES ('testgg','Juego de Tronos','Serie','Tim Van Patten','28/10/2009','EU','default_province','default_city','Accion','Misterio','media/default-avatar.png');

/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-10-13 17:28:30
