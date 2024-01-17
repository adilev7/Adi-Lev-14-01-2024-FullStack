-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for osx10.10 (x86_64)
--
-- Host: localhost    Database: weather_app
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cities_weather`
--

DROP TABLE IF EXISTS `cities_weather`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cities_weather` (
  `city_key` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `temperature` float NOT NULL,
  `weather_text` varchar(255) NOT NULL,
  PRIMARY KEY (`city_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities_weather`
--

LOCK TABLES `cities_weather` WRITE;
/*!40000 ALTER TABLE `cities_weather` DISABLE KEYS */;
INSERT INTO `cities_weather` VALUES ('316938','Ankara',4.9,'Mostly cloudy'),('56912','Anqing',5.9,'Overcast'),('59083','Anyang',0.2,'Overcast');
/*!40000 ALTER TABLE `cities_weather` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite_cities`
--

DROP TABLE IF EXISTS `favorite_cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favorite_cities` (
  `user_id` varchar(255) NOT NULL,
  `city_key` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`,`city_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite_cities`
--

LOCK TABLES `favorite_cities` WRITE;
/*!40000 ALTER TABLE `favorite_cities` DISABLE KEYS */;
INSERT INTO `favorite_cities` VALUES ('711mzuijjlrgltiop','316938'),('711mzuijjlrgltiop','56912'),('711mzuijjlrgltiop','59083');
/*!40000 ALTER TABLE `favorite_cities` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-17  7:39:42
