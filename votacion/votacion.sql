-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-09-2022 a las 05:45:22
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `votacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `local_votacion`
--

CREATE TABLE `local_votacion` (
  `id_loca` int(11) NOT NULL,
  `nombre_local` longtext DEFAULT NULL,
  `distrito` varchar(100) DEFAULT NULL,
  `grupo_votacion` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `local_votacion`
--

INSERT INTO `local_votacion` (`id_loca`, `nombre_local`, `distrito`, `grupo_votacion`, `created_at`, `updated_at`) VALUES
(6, 'prueba', 'COISHCO', NULL, '2022-09-28 01:40:31', '2022-09-28 01:40:31'),
(7, 'prueba reyes', 'MACATE', NULL, '2022-09-28 01:56:06', '2022-09-28 01:56:06'),
(8, 'colegio nopor', 'MORO', NULL, '2022-09-28 02:05:53', '2022-09-28 02:05:53'),
(9, 'colegio nopor', 'MORO', '578987435', '2022-09-28 02:07:07', '2022-09-28 02:07:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `votos`
--

CREATE TABLE `votos` (
  `id_votos` int(11) NOT NULL,
  `voto_nulos` int(11) DEFAULT NULL,
  `voto_visiados` int(11) DEFAULT NULL,
  `voto_validos` int(11) DEFAULT NULL,
  `total_votos` int(11) DEFAULT NULL,
  `id_local_votacion` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `votos`
--

INSERT INTO `votos` (`id_votos`, `voto_nulos`, `voto_visiados`, `voto_validos`, `total_votos`, `id_local_votacion`, `created_at`, `updated_at`) VALUES
(1, 4, 23, 243, 270, 2, NULL, NULL),
(2, 4, 23, 243, 270, 3, NULL, NULL),
(3, 4, 23, 243, 270, 4, NULL, NULL),
(4, 4, 23, 243, 270, 5, NULL, NULL),
(5, 1, 1, 1, 3, 6, NULL, NULL),
(6, 3, 3, 3, 9, 7, NULL, NULL),
(7, 34, 2, 24, 60, 8, NULL, NULL),
(8, 34, 2, 24, 60, 9, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `local_votacion`
--
ALTER TABLE `local_votacion`
  ADD PRIMARY KEY (`id_loca`);

--
-- Indices de la tabla `votos`
--
ALTER TABLE `votos`
  ADD PRIMARY KEY (`id_votos`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `local_votacion`
--
ALTER TABLE `local_votacion`
  MODIFY `id_loca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `votos`
--
ALTER TABLE `votos`
  MODIFY `id_votos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
