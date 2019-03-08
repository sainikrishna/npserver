-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 02, 2019 at 06:21 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `npserver`
--

-- --------------------------------------------------------

--
-- Table structure for table `new_jobs`
--

CREATE TABLE `new_jobs` (
  `id` varchar(20) NOT NULL,
  `name` text NOT NULL,
  `start_date` varchar(50) NOT NULL,
  `last_date` varchar(50) NOT NULL,
  `apply_link` varchar(255) NOT NULL,
  `notification_link` varchar(255) NOT NULL,
  `official_site` varchar(255) NOT NULL,
  `short_info` text NOT NULL,
  `selection_board` varchar(255) NOT NULL,
  `post_group` varchar(255) NOT NULL,
  `advertise_no` varchar(255) NOT NULL,
  `important_dates` text NOT NULL,
  `application_fee` text NOT NULL,
  `useful_links` text NOT NULL,
  `post_details` text NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `total_posts` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `new_jobs`
--

INSERT INTO `new_jobs` (`id`, `name`, `start_date`, `last_date`, `apply_link`, `notification_link`, `official_site`, `short_info`, `selection_board`, `post_group`, `advertise_no`, `important_dates`, `application_fee`, `useful_links`, `post_details`, `created_at`, `updated_at`, `total_posts`) VALUES
('i65fg93wjsrpa75x', 'updated first', 'xzczc', 'zx', 'zxcx', 'zxc', 'zxc', 'zxcx', 'zxcx', 'zxc', 'xzcx', 'zxcxz_key!value_zxc', 'xzcxzc_key!value_xzcx', 'zxcxz_key!value_zxcxz', 'zxcxzcx', '2019-03-02', '2019-03-02', 0),
('i65fg9g8jsowbv0i', 'updated again', 'xzczc', 'zx', 'zxcx', 'zxc', 'zxc', 'zxcx', 'zxcx', 'zxc', 'xzcx', 'zxcxz_key!value_zxc_row!_xc_key!value_xcxcc', 'xzcxzc_key!value_xzcx', 'zxcxz_key!value_zxcxz', 'zxcxzcx', '2019-03-02', '2019-03-02', 0),
('i65fg9ksjsqbdsmv', 'xxzccxvc', 'xzczccxv', 'zxcxvc', 'zxcxcvc', 'zxccvc', 'zxccvc', 'zxcx', 'zxcxxcvc', 'zxccvcv', 'xzcxxcvcxvc', 'zxcxz_key!value_zxc', 'xzcxzc_key!value_xzcx', 'zxcxz_key!value_zxcxz', 'zxcxzcx', '2019-03-01', '2019-03-01', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `new_jobs`
--
ALTER TABLE `new_jobs`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
