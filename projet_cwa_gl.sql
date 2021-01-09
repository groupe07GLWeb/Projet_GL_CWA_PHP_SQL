-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : sam. 09 jan. 2021 à 12:53
-- Version du serveur :  8.0.22-0ubuntu0.20.04.3
-- Version de PHP : 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
  `id` int NOT NULL,
  `date_intervention` date NOT NULL,
  `descriptif_anomalie` varchar(100) NOT NULL,
  `resolu` tinyint(1) NOT NULL,
  `operation_effectue` varchar(100) NOT NULL,
  `date_anomalie` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cereale`
--

CREATE TABLE `cereale` (
  `id` int NOT NULL,
  `type` varchar(100) NOT NULL,
  `poids` int NOT NULL,
  `date_arrivage` date NOT NULL,
  `date_expedition` date NOT NULL,
  `num_cellule` int NOT NULL,
  `qualite` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `cereale`
--

INSERT INTO `cereale` (`id`, `type`, `poids`, `date_arrivage`, `date_expedition`, `num_cellule`, `qualite`) VALUES
(1, 'Ble', 500, '2021-01-26', '2021-01-30', 2, 'Bonne');

-- --------------------------------------------------------

--
-- Structure de la table `equipement`
--

CREATE TABLE `equipement` (
  `id` int NOT NULL,
  `nom_equipement` varchar(100) NOT NULL,
  `operation` varchar(100) NOT NULL,
  `etat` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `equipement`
--

INSERT INTO `equipement` (`id`, `nom_equipement`, `operation`, `etat`) VALUES
(1, 'Nettoyeur_Separateur', 'none', 1),
(2, 'Silo', 'none', 1),
(3, 'Boisseaux', 'none', 0),
(4, 'Grille_Roulage', 'none', 1),
(5, 'Tremie', 'none', 0),
(6, 'Elevateur', 'none', 1);

-- --------------------------------------------------------

--
-- Structure de la table `operation`
--

CREATE TABLE `operation` (
  `id` int NOT NULL,
  `nettoyage` varchar(100) NOT NULL,
  `ventilation` varchar(100) NOT NULL,
  `injectionPesticide` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  `id` int NOT NULL,
  `temperature` double NOT NULL,
  `humidite` double NOT NULL,
  `poussiere` double NOT NULL,
  `insecticide` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `cereale`
--
ALTER TABLE `cereale`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `equipement`
--
ALTER TABLE `equipement`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `operation`
--
ALTER TABLE `operation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `variable`
--
ALTER TABLE `variable`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
