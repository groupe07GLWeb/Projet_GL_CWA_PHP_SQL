-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : Dim 03 jan. 2021 à 16:36
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projet_cwa_gl`
--

-- --------------------------------------------------------

--
-- Structure de la table `anomalie`
--

CREATE TABLE `anomalie` (
  `id` int(11) NOT NULL,
  `date_intervention` date NOT NULL,
  `descriptif_anomalie` varchar(100) NOT NULL,
  `resolu` tinyint(1) NOT NULL,
  `operation_effectue` varchar(100) NOT NULL,
  `date_anomalie` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `cereale`
--

CREATE TABLE `cereale` (
  `id` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `poids` int(11) NOT NULL,
  `date_arrivage` date NOT NULL,
  `date_expedition` date NOT NULL,
  `num_cellule` int(11) NOT NULL,
  `qualité` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `equipement`
--

CREATE TABLE `equipement` (
  `id` int(11) NOT NULL,
  `nom_equipement` varchar(100) NOT NULL,
  `operation` varchar(100) NOT NULL,
  `etat` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `operation`
--

CREATE TABLE `operation` (
  `id` int(11) NOT NULL,
  `nettoyage` varchar(100) NOT NULL,
  `ventilation` varchar(100) NOT NULL,
  `injectionPesticide` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `nom`, `prenom`, `password`, `email`, `role`) VALUES
(1, 'Dupont', 'Jean', 'admin', 'jean.dupont@gmail.com', 'Administrateur-Système');

-- --------------------------------------------------------

--
-- Structure de la table `variable`
--

CREATE TABLE `variable` (
  `id` int(11) NOT NULL,
  `temperature` double NOT NULL,
  `humidite` double NOT NULL,
  `poussiere` double NOT NULL,
  `insecticide` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `variable`
--

INSERT INTO `variable` (`id`, `temperature`, `humidite`, `poussiere`, `insecticide`) VALUES
(1, 15, 0.01, 33, 0.5),
(2, 13, 0.04, 60, 0.9);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `anomalie`
--
ALTER TABLE `anomalie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cereale`
--
ALTER TABLE `cereale`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `equipement`
--
ALTER TABLE `equipement`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `operation`
--
ALTER TABLE `operation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `variable`
--
ALTER TABLE `variable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `anomalie`
--
ALTER TABLE `anomalie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `cereale`
--
ALTER TABLE `cereale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `equipement`
--
ALTER TABLE `equipement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `operation`
--
ALTER TABLE `operation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `variable`
--
ALTER TABLE `variable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
