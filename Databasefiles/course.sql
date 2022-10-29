SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'course name',
  `capacity` int NOT NULL COMMENT 'course capacity',
  `year` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'course year',
  `semester` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'course semester',
  `courseId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'course number',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `name` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of courses
-- ----------------------------
BEGIN;
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (1, 'Formal Language Theory', 34, '2022', 'fall', '501');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (2, 'Logic in Computer Science', 0, '2021', 'spring', '513');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (3, 'Combinatorics', 38, '2022', 'fall', '514');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (4, 'Algorithms for Data Science', 1, '2022', 'spring', '518');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (5, 'Combinatorics and Graph Theory', 40, '2022', 'spring', '575');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (6, 'Quantum Information Systems', 40, '2022', 'spring', '590');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (7, 'Algorithmic Fairness and Strategic Behavior', 0, '2023', 'spring');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (8, 'Computation theory', 40, '2022', 'fall', '601');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (9, 'Advanced Algorithms', 40, '2022', 'spring', '611');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (10, 'Logic', 40, '2022', 'spring', '613');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (11, 'Computational Geometry', 1, '2023', 'spring', '617');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (12, 'Optimization for Computer Science', 40, '2022', 'spring', '651');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (13, 'Approximation Algorithms', 40, '2022', 'spring', '690');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (14, 'Foundations Applied Cryptography', 5, '2022', 'spring', '691');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (15, 'Advanced Cryptography', 20, '2023', 'spring', '692');
INSERT INTO `courses` (`id`, `name`, `capacity`, `year`, `semester`, `courseId`) VALUES (16, 'Machine Learning Theory', 40, '2022', 'spring', '693');
COMMIT;

-- ----------------------------
-- Table structure for select_courses
-- ----------------------------
DROP TABLE IF EXISTS `select_courses`;
CREATE TABLE `select_courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `courseId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `studentId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `comment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of select_courses
-- ----------------------------
BEGIN;
INSERT INTO `select_courses` (`id`, `courseId`, `studentId`, `comment`) VALUES (1, '1', '1', '');
INSERT INTO `select_courses` (`id`, `courseId`, `studentId`, `comment`) VALUES (2, '1', '2', '');
INSERT INTO `select_courses` (`id`, `courseId`, `studentId`, `comment`) VALUES (3, '1', '3', '');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户名, 唯一',
  `name` char(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `email` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `email`, `name`) VALUES (1, 'aaa@qq.com', 'aaa');
INSERT INTO `users` (`id`, `email`, `name`) VALUES (2, 'bbb@qq.com', 'bbb');
INSERT INTO `users` (`id`, `email`, `name`) VALUES (3, 'bbbb@qq.com', 'bbb');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
