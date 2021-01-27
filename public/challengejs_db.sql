-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-01-2021 a las 05:10:13
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `challengejs_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `balance` float DEFAULT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `account`
--

INSERT INTO `account` (`id`, `balance`, `idUser`) VALUES
(1, 19650, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorys`
--

CREATE TABLE `categorys` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categorys`
--

INSERT INTO `categorys` (`id`, `name`) VALUES
(1, 'Food'),
(2, 'Rental'),
(3, 'Job'),
(4, 'Debt');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operations`
--

CREATE TABLE `operations` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `concept` varchar(100) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `idType` int(11) NOT NULL,
  `idCategorys` int(11) NOT NULL,
  `idAccount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `operations`
--

INSERT INTO `operations` (`id`, `date`, `concept`, `amount`, `idType`, `idCategorys`, `idAccount`) VALUES
(1, '2021-01-04', 'Collect salary', 15000, 1, 3, 1),
(2, '2021-01-12', 'Delivery Rappi', 350, 2, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `type`
--

INSERT INTO `type` (`id`, `name`) VALUES
(1, ' Deposit'),
(2, 'Withdraw');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(150) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`) VALUES
(1, 'admin', 'admin@admin.com', '$2b$10$8XeVmEQWn1rvRV3oPm5oqO9T4eGbCF3u9.LzudD2IjG1U2cXCoOhy');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `fk_account_user1_idx` (`idUser`);

--
-- Indices de la tabla `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `operations`
--
ALTER TABLE `operations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_operations_categorys1_idx` (`idCategorys`),
  ADD KEY `fk_operations_type1_idx` (`idType`),
  ADD KEY `fk_operations_account1_idx` (`idAccount`);

--
-- Indices de la tabla `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `operations`
--
ALTER TABLE `operations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `fk_account_user1` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `operations`
--
ALTER TABLE `operations`
  ADD CONSTRAINT `fk_operations_account1` FOREIGN KEY (`idAccount`) REFERENCES `account` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_operations_categorys1` FOREIGN KEY (`idCategorys`) REFERENCES `categorys` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_operations_type1` FOREIGN KEY (`idType`) REFERENCES `type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
