/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

INSERT INTO `department` (`id`, `name`) VALUES
(1, 'Art');
INSERT INTO `department` (`id`, `name`) VALUES
(2, 'Writing');
INSERT INTO `department` (`id`, `name`) VALUES
(3, 'Code');
INSERT INTO `department` (`id`, `name`) VALUES
(4, 'Sound');

INSERT INTO `employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`, `is_manager`) VALUES
(1, 'Edward', 'Huang', 21, NULL, 1);
INSERT INTO `employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`, `is_manager`) VALUES
(2, 'Artsy', 'Interny', 33, 1, 0);
INSERT INTO `employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`, `is_manager`) VALUES
(3, 'Drawing', 'Internim', 33, 1, 0);

INSERT INTO `role` (`id`, `title`, `salary`, `department_id`) VALUES
(21, 'Art Manager', 100.00, 1);
INSERT INTO `role` (`id`, `title`, `salary`, `department_id`) VALUES
(22, 'Writing Manager', 100.00, 2);
INSERT INTO `role` (`id`, `title`, `salary`, `department_id`) VALUES
(23, 'Coding Manager', 100.00, 3);
INSERT INTO `role` (`id`, `title`, `salary`, `department_id`) VALUES
(24, 'Story Writer', 75.00, 2),
(25, 'Controls Scriptor', 50.00, 3),
(27, 'Concept Artist', 50.00, 1),
(28, 'Side Quest Writer', 50.00, 2),
(29, 'AI Programmer', 75.00, 3),
(30, 'Sound Manager', 100.00, 4),
(32, 'Music Composer', 75.00, 4),
(33, 'Art Intern', 25.00, 1),
(35, 'Sound Intern', 25.00, 4),
(36, 'Writing Intern', 25.00, 2);


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;