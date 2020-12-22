-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2020 at 02:40 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyek_spk`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_alternatif`
--

CREATE TABLE `data_alternatif` (
  `id_alternatif` int(11) NOT NULL,
  `nama_id_alternatif` varchar(10) NOT NULL,
  `nik` bigint(20) NOT NULL,
  `nama_alternatif` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_alternatif`
--

INSERT INTO `data_alternatif` (`id_alternatif`, `nama_id_alternatif`, `nik`, `nama_alternatif`) VALUES
(4, 'A1', 3505161507910003, 'Imam Mahdi'),
(5, 'A2', 3505166005380001, 'Sumini'),
(7, 'A3', 3505161011830002, 'Meseno'),
(8, 'A4', 3505165601890002, 'Dewi Setiani'),
(9, 'A5', 3505160404520003, 'Gunawan'),
(10, 'A6', 3505165010770006, 'Mutomimah'),
(11, 'A7', 3505166105870002, 'Ismiati'),
(12, 'A8', 3505160711670004, 'Tari'),
(13, 'A9', 3505166208450001, 'Warini'),
(14, 'A10', 3505164107360064, 'Boniye M Sibo'),
(15, 'A11', 3505165007500001, 'Djuminah'),
(16, 'A12', 3505165610450002, 'Tugiyem'),
(17, 'A13', 3505164910450002, 'Klumpuk'),
(18, 'A14', 3505165611710001, 'Siju');

-- --------------------------------------------------------

--
-- Table structure for table `data_awal`
--

CREATE TABLE `data_awal` (
  `id_data_awal` int(11) NOT NULL,
  `nama_id_alternatif` varchar(10) NOT NULL,
  `pendidikan` int(11) NOT NULL,
  `pekerjaan` int(11) NOT NULL,
  `penghasilan` int(11) NOT NULL,
  `anggota_keluarga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_awal`
--

INSERT INTO `data_awal` (`id_data_awal`, `nama_id_alternatif`, `pendidikan`, `pekerjaan`, `penghasilan`, `anggota_keluarga`) VALUES
(4, 'A1', 2, 4, 3, 1),
(7, 'A2', 3, 5, 1, 2),
(8, 'A3', 5, 3, 4, 1),
(9, 'A4', 3, 5, 4, 2),
(10, 'A5', 3, 5, 1, 1),
(11, 'A6', 4, 5, 4, 3),
(12, 'A7', 4, 5, 3, 3),
(13, 'A8', 4, 5, 4, 2),
(14, 'A9', 4, 5, 5, 1),
(15, 'A10', 3, 5, 1, 1),
(16, 'A11', 4, 4, 3, 1),
(17, 'A12', 3, 5, 4, 1),
(18, 'A13', 3, 3, 3, 1),
(19, 'A14', 3, 3, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `data_kriteria`
--

CREATE TABLE `data_kriteria` (
  `id_kriteria` int(11) NOT NULL,
  `nama_kriteria` varchar(50) NOT NULL,
  `bobot` float NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_kriteria`
--

INSERT INTO `data_kriteria` (`id_kriteria`, `nama_kriteria`, `bobot`, `status`) VALUES
(13, 'Pendidikan', 0.15, 'Benefit'),
(14, 'Pekerjaan', 0.23, 'Benefit'),
(15, 'Penghasilan', 0.35, 'Benefit'),
(16, 'Anggota Keluarga', 0.27, 'Benefit');

-- --------------------------------------------------------

--
-- Table structure for table `data_sub_kriteria`
--

CREATE TABLE `data_sub_kriteria` (
  `id_sub_kriteria` int(11) NOT NULL,
  `nama_kriteria` varchar(50) NOT NULL,
  `nama_sub_kriteria` varchar(50) NOT NULL,
  `nilai_sub_kriteria` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_sub_kriteria`
--

INSERT INTO `data_sub_kriteria` (`id_sub_kriteria`, `nama_kriteria`, `nama_sub_kriteria`, `nilai_sub_kriteria`) VALUES
(1, 'Pendidikan', 'DV/Setara S1', 1),
(6, 'pendidikan', 'SLTA / Sederajat', 2),
(7, 'pendidikan', 'SLTP / Sederajat', 3),
(8, 'pendidikan', 'Tamat SD', 4),
(9, 'pendidikan', 'Tidak Tamat SD', 5),
(10, 'pekerjaan', 'PNS', 1),
(11, 'pekerjaan', 'Pedagang', 2),
(12, 'pekerjaan', 'Karyawan Swasta', 3),
(13, 'pekerjaan', 'Wiraswasta', 4),
(14, 'pekerjaan', 'Petani / Pekebun', 5),
(15, 'penghasilan', '> 2.000.000', 1),
(16, 'penghasilan', '1.500.000-2.000.000', 2),
(17, 'penghasilan', '1.000.000-1.500.000', 3),
(18, 'penghasilan', '500.000-1.000.000', 4),
(19, 'penghasilan', '0-500.000', 5),
(20, 'anggota keluarga', '1-2', 1),
(21, 'anggota keluarga', '3-4', 2),
(22, 'anggota keluarga', '5-6', 3),
(23, 'anggota keluarga', '7-8', 4),
(24, 'anggota keluarga', '9-10', 5),
(25, 'penghasilan', 'SMA', 3);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id_login` bigint(20) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id_login`, `username`, `password`) VALUES
(1, 'tes', 'tes'),
(2, 'admin', '$2b$12$wYq9CtD.wAzZaQ21QV0fsOWb3aS23ZA3EFIhJTWQFylXQXEvcDKTO');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_alternatif`
--
ALTER TABLE `data_alternatif`
  ADD PRIMARY KEY (`id_alternatif`);

--
-- Indexes for table `data_awal`
--
ALTER TABLE `data_awal`
  ADD PRIMARY KEY (`id_data_awal`);

--
-- Indexes for table `data_kriteria`
--
ALTER TABLE `data_kriteria`
  ADD PRIMARY KEY (`id_kriteria`);

--
-- Indexes for table `data_sub_kriteria`
--
ALTER TABLE `data_sub_kriteria`
  ADD PRIMARY KEY (`id_sub_kriteria`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id_login`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_alternatif`
--
ALTER TABLE `data_alternatif`
  MODIFY `id_alternatif` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `data_awal`
--
ALTER TABLE `data_awal`
  MODIFY `id_data_awal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `data_kriteria`
--
ALTER TABLE `data_kriteria`
  MODIFY `id_kriteria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `data_sub_kriteria`
--
ALTER TABLE `data_sub_kriteria`
  MODIFY `id_sub_kriteria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
