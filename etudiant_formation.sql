-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 25 oct. 2018 à 19:28
-- Version du serveur :  5.7.17
-- Version de PHP :  5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `etudiant_formation`
--

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE `etudiant` (
  `id` bigint(20) NOT NULL,
  `date_naissance` datetime DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `id_fr` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `etudiant`
--

INSERT INTO `etudiant` (`id`, `date_naissance`, `nom`, `prenom`, `id_fr`) VALUES
(1, '1999-05-05 01:00:00', 'Mohamed', 'Ahmed', 1),
(2, '1999-05-05 01:00:00', 'babe', 'Ahmed', 2),
(5, '2018-10-22 21:51:43', 'babe', 'Ahmed', 5),
(6, '2018-10-22 21:51:43', 'brahim', 'Ahmed', 6),
(9, '1992-12-12 01:00:00', 'themine', 'daha', 2),
(10, '1992-12-12 01:00:00', 'Sidi', 'Mohamed', 2),
(11, '1992-12-12 01:00:00', 'Abidine', 'Valili', 3),
(12, '1992-12-12 01:00:00', 'Totah', 'moctar', 1),
(13, '1992-12-12 01:00:00', 'Oussama', 'Ahmedou', 1),
(14, '1992-12-12 01:00:00', 'Mariem', 'Hamada', 1),
(15, '1992-12-12 01:00:00', 'Vatimetou', 'Ahmed', 1),
(16, '1992-12-12 01:00:00', 'Totah', 'Moctar', 3),
(17, '1992-12-12 01:00:00', 'Totah', 'Ahmed', 3),
(18, '1992-12-12 01:00:00', 'Mohameden', 'Lemane', 3),
(19, '1992-12-12 01:00:00', 'Sidi Mohamed', 'Maalome', 3),
(21, '1992-12-12 01:00:00', 'Eyoube', 'Mohamed ILa', 3),
(27, '1992-12-12 01:00:00', 'Najem', 'Mohamed Salem', 8),
(34, '1992-12-12 01:00:00', 'vava', 'Mohamed Salem', 8),
(37, '1998-01-01 01:00:00', 'themine', 'Daha', 8),
(46, '2018-10-02 01:00:00', 'abidine', 'valili', 8),
(51, '2018-10-23 23:29:30', 'themine', 'Daha', 2),
(57, '2000-01-03 01:00:00', 'themine', 'Daha', 1),
(58, '2018-10-24 01:24:31', 'abidine', 'vadel', 2),
(59, '1990-07-11 01:00:00', 'babe', 'bedah', 4),
(61, '2018-10-24 01:33:01', 'mariem', 'hamade', 4),
(65, '1991-12-31 01:00:00', 'vave', 'Ahmed', 4),
(66, '2018-10-01 01:00:00', 'mohameden', 'lemane', 2),
(68, '1995-01-02 01:00:00', 'themine', 'prenom', 2);

-- --------------------------------------------------------

--
-- Structure de la table `formation`
--

CREATE TABLE `formation` (
  `id` bigint(20) NOT NULL,
  `duree` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `formation`
--

INSERT INTO `formation` (`id`, `duree`, `nom`) VALUES
(1, 30, 'JAVA'),
(2, 30, 'PHP'),
(3, 30, 'JEE'),
(4, 30, 'ORACLE'),
(8, 50, 'Python');

-- --------------------------------------------------------

--
-- Structure de la table `formation_etudiants`
--

CREATE TABLE `formation_etudiants` (
  `formation_id` bigint(20) NOT NULL,
  `etudiants_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKg7hlb58se45k80m9hbiqs82jg` (`id_fr`);

--
-- Index pour la table `formation`
--
ALTER TABLE `formation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `formation_etudiants`
--
ALTER TABLE `formation_etudiants`
  ADD UNIQUE KEY `UK_1nvpbrf2aigwrbvv8ria8txdv` (`etudiants_id`),
  ADD KEY `FK4ify7u6vwxqknc5ynni4nxwr4` (`formation_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `etudiant`
--
ALTER TABLE `etudiant`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
--
-- AUTO_INCREMENT pour la table `formation`
--
ALTER TABLE `formation`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
