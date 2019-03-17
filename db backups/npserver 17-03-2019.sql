-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2019 at 10:55 AM
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
  `total_posts` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `apply_online` varchar(500) NOT NULL,
  `official_website` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `new_jobs`
--

INSERT INTO `new_jobs` (`id`, `name`, `start_date`, `last_date`, `apply_link`, `notification_link`, `official_site`, `short_info`, `selection_board`, `post_group`, `advertise_no`, `important_dates`, `application_fee`, `useful_links`, `post_details`, `created_at`, `updated_at`, `total_posts`, `path`, `apply_online`, `official_website`) VALUES
('i65fg7bsjt539ewr', 'MP High Court Group D Recruitment Result 2018', '30/11/2018', '31/12/2018', 'xcvcx', 'vxcv', 'xcvxc', 'Madhya Pradesh High Court Are Invited to Online Application Form for the Group D Mali, Chowkidar, Watchman and Other Post Recruitment 2017 Those Candidates Are Interested and Completed the All Eligibility Criteria in PCSJ Vacancy Can Read the Full Notification and Apply Online', 'Madhya Pradesh High Court, Jabalpur', 'cxvcxv', 'Grade 4 Various Post Recruitment 2017', 'Application Start_key!value_31/11/2018_row!_Apply Last Date_key!value_31/12/2018_row!_Exam Fees Last Date_key!value_31/12/2018_row!_Correction Last Date_key!value_03/01/2018_row!_Pre Exam Date_key!value_28/01/2018_row!_Main Exam Date_key!value_Notified Soon_row!_Group D Screening Exam Date_key!value_November 2018_row!_Group D Screening Result Date_key!value_07/01/2019', 'General / Other State_key!value_200/-_row!_OBC / SC / SC_key!value_100/-', 'Download Result for Group D Screening Exam _key!value_https://mphc.gov.in/PDF/web_pdf/RC/Result%20with%20notificaton%20and%20form.pdf_row!_Download Admit Card for Group D Screening Exam_key!value_https://mphc.mponline.gov.in/Portal/Services/MPHC/2018/FourthGrade/AdmitCard.aspx?NotificationId=NjY_row!_Download Final Result_key!value_https://mphc.gov.in/result-2017-class-4th_row!_Download Result_key!value_https://www.mphc.gov.in/screening-result-2017_row!_Download Notification_key!value_http://www.mphc.gov.in/PDF/web_pdf/RE/GRADE%204%20DEATILE%20full.pdf_row!_District Wise Vacancy List_key!value_sdsdd_row!_Offical Website_key!value_https://mphc.mponline.gov.in/portal/Services/MPHC/index.aspx?loginType=K', ' <table className=\"post-details-table\">\n                    <tr className=\"t-row t-head\">\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">Post Name</span>\n                        </td>\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">Gen</span>\n                        </td>\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">OBC</span>\n                        </td>\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">SC</span>\n                        </td>\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">ST</span>\n                        </td>\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">Total</span>\n                        </td>\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">Eligibility</span>\n                        </td>\n                        <td className=\"t-data t-head tl-data\">\n                            <span className=\"td-txt\">Age</span>\n                        </td>\n                    </tr>\n                    <tr className=\"t-row\">\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Driver</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">26</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">04</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">04</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">06</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">40</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Class 8 Exam With Valid LMV Driving License</span>\n                        </td>\n                        <td className=\"t-data tl-data\">\n                            <span className=\"td-txt\">Min: 18, Max: 40</span>\n                        </td>\n                    </tr>\n                    <tr className=\"t-row\">\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Group D Watchman & Other Post</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">324</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">75</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">61</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">98</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">558</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Class 8 Exam Passed Any Recognized Board in India</span>\n                        </td>\n                        <td className=\"t-data tl-data\">\n                            <span className=\"td-txt\">Min: 18, Max: 40</span>\n                        </td>\n                    </tr>\n                    <tr className=\"t-row\">\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Mali</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">14</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">10</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">1</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">06</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">31</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Class 8 Exam Passed Any Recognized Board in India</span>\n                        </td>\n                        <td className=\"t-data tl-data\">\n                            <span className=\"td-txt\">Min: 18, Max: 40</span>\n                        </td>\n                    </tr>\n                    <tr className=\"t-row\">\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Sweeper</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">23</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">04</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">66</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">17</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">110</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Class 8 Exam Passed Any Recognized Board in India</span>\n                        </td>\n                        <td className=\"t-data tl-data\">\n                            <span className=\"td-txt\">Min: 18, Max: 40</span>\n                        </td>\n                    </tr>\n            </table>', '2019-03-16', '2019-03-16', 22, 'xvc', 'sads', 'dsdsadas'),
('i65fg93wjsrpa75x', 'updated first', 'xzczc', 'zx', 'zxcx', 'zxc', 'zxc', 'zxcx', 'zxcx', 'zxc', 'xzcx', 'zxcxz_key!value_zxc', 'xzcxzc_key!value_xzcx', 'zxcxz_key!value_zxcxz', 'zxcxzcx', '2019-03-15', '2019-03-15', 0, 'test2', 'dasd', 'sadsad'),
('i65fg9g8jsowbv0i', 'updated again', 'xzczc', 'zx', 'zxcx', 'zxc', 'zxc', 'zxcx', 'zxcx', 'zxc', 'xzcx', 'zxcxz_key!value_zxc_row!_xc_key!value_xcxcc', 'xzcxzc_key!value_xzcx', 'zxcxz_key!value_zxcxz', 'zxcxzcx', '2019-03-15', '2019-03-15', 0, 'test3', 'sadsad', 'sadsad'),
('i65fgbkkjt52bnlw', 'test update', 'xzczccxv', 'zxcxvc', 'zxcxcvc', 'zxccvc', 'zxccvc', 'zxcx', 'zxcxxcvc', 'zxccvcv', 'xzcxxcvcxvc', 'zxcxz_key!value_zxc', 'xzcxzc_key!value_xzcx_row!_x_key!value_cc', 'zxcxz_key!value_zxcxz', 'zxcxzcx', '2019-03-15', '2019-03-15', 0, 'test5', 'sds', 'dsdsa');

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
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
  `total_posts` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `apply_online` varchar(500) NOT NULL,
  `official_website` varchar(500) NOT NULL,
  `result_link` varchar(500) NOT NULL,
  `result_date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`id`, `name`, `start_date`, `last_date`, `apply_link`, `notification_link`, `official_site`, `short_info`, `selection_board`, `post_group`, `advertise_no`, `important_dates`, `application_fee`, `useful_links`, `post_details`, `created_at`, `updated_at`, `total_posts`, `path`, `apply_online`, `official_website`, `result_link`, `result_date`) VALUES
('i65fg7bsjt539ewr', 'MP High Court Group D Recruitment Result 2018', '31/11/2018', '31/12/2018', 'xcvcx', 'vxcv', 'xcvxc', 'Madhya Pradesh High Court Are Invited to Online Application Form for the Group D Mali, Chowkidar, Watchman and Other Post Recruitment 2017 Those Candidates Are Interested and Completed the All Eligibility Criteria in PCSJ Vacancy Can Read the Full Notification and Apply Online', 'Madhya Pradesh High Court, Jabalpur', 'cxvcxv', 'Grade 4 Various Post Recruitment 2017', 'Application Start_key!value_31/11/2018_row!_Apply Last Date_key!value_31/12/2018_row!_Exam Fees Last Date_key!value_31/12/2018_row!_Correction Last Date_key!value_03/01/2018_row!_Pre Exam Date_key!value_28/01/2018_row!_Main Exam Date_key!value_Notified Soon_row!_Group D Screening Exam Date_key!value_November 2018_row!_Group D Screening Result Date_key!value_07/01/2019', 'General / Other State_key!value_200/-_row!_OBC / SC / SC_key!value_100/-', 'Download Result for Group D Screening Exam _key!value_https://mphc.gov.in/PDF/web_pdf/RC/Result%20with%20notificaton%20and%20form.pdf_row!_Download Admit Card for Group D Screening Exam_key!value_https://mphc.mponline.gov.in/Portal/Services/MPHC/2018/FourthGrade/AdmitCard.aspx?NotificationId=NjY_row!_Download Final Result_key!value_https://mphc.gov.in/result-2017-class-4th_row!_Download Result_key!value_https://www.mphc.gov.in/screening-result-2017_row!_Download Notification_key!value_http://www.mphc.gov.in/PDF/web_pdf/RE/GRADE%204%20DEATILE%20full.pdf_row!_District Wise Vacancy List_key!value_sdsdd_row!_Offical Website_key!value_https://mphc.mponline.gov.in/portal/Services/MPHC/index.aspx?loginType=K', ' <table className=\"post-details-table\">\n                    <tr className=\"t-row t-head\">\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">Post Name</span>\n                        </td>\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">Gen</span>\n                        </td>\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">OBC</span>\n                        </td>\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">SC</span>\n                        </td>\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">ST</span>\n                        </td>\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">Total</span>\n                        </td>\n                        <td className=\"t-data t-head\">\n                            <span className=\"td-txt\">Eligibility</span>\n                        </td>\n                        <td className=\"t-data t-head tl-data\">\n                            <span className=\"td-txt\">Age</span>\n                        </td>\n                    </tr>\n                    <tr className=\"t-row\">\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Driver</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">26</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">04</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">04</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">06</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">40</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Class 8 Exam With Valid LMV Driving License</span>\n                        </td>\n                        <td className=\"t-data tl-data\">\n                            <span className=\"td-txt\">Min: 18, Max: 40</span>\n                        </td>\n                    </tr>\n                    <tr className=\"t-row\">\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Group D Watchman & Other Post</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">324</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">75</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">61</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">98</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">558</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Class 8 Exam Passed Any Recognized Board in India</span>\n                        </td>\n                        <td className=\"t-data tl-data\">\n                            <span className=\"td-txt\">Min: 18, Max: 40</span>\n                        </td>\n                    </tr>\n                    <tr className=\"t-row\">\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Mali</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">14</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">10</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">1</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">06</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">31</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Class 8 Exam Passed Any Recognized Board in India</span>\n                        </td>\n                        <td className=\"t-data tl-data\">\n                            <span className=\"td-txt\">Min: 18, Max: 40</span>\n                        </td>\n                    </tr>\n                    <tr className=\"t-row\">\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Sweeper</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">23</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">04</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">66</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">17</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">110</span>\n                        </td>\n                        <td className=\"t-data\">\n                            <span className=\"td-txt\">Class 8 Exam Passed Any Recognized Board in India</span>\n                        </td>\n                        <td className=\"t-data tl-data\">\n                            <span className=\"td-txt\">Min: 18, Max: 40</span>\n                        </td>\n                    </tr>\n            </table>', '2019-03-17', '2019-03-17', 22, 'xvc', 'sads', 'dsdsadas', 'http://localhost/phpmyadmin/sql.php?server=1&db=npserver&table=results&pos=0&token=b992bd9f8c31bc2d43f3ad3b1e0c3a62#', '2019-03-15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `new_jobs`
--
ALTER TABLE `new_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `path` (`path`);

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `path` (`path`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
