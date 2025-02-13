const express = require("express");
const StudentController = require("../controllers/studentController");
const router = express.Router();

router.get("/", StudentController.getAllStudents);
router.get("/:id", StudentController.getStudentById);
router.post("/", StudentController.createStudent);
router.put("/:id", StudentController.updateStudent);
router.delete("/:id", StudentController.deleteStudent);

module.exports = router;
