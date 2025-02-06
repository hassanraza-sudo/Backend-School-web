const StudentService = require("../services/studentService");

class StudentController {
  static async getAllStudents(req, res) {
    try {
      const students = await StudentService.getAllStudents();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getStudentById(req, res) {
    try {
      const student = await StudentService.getStudentById(req.params.id);
      if (!student)
        return res.status(404).json({ message: "Student not found" });
      res.json(student);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createStudent(req, res) {
    try {
      const student = await StudentService.createStudent(req.body);
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateStudent(req, res) {
    try {
      const student = await StudentService.updateStudent(
        req.params.id,
        req.body
      );
      res.json(student);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteStudent(req, res) {
    try {
      await StudentService.deleteStudent(req.params.id);
      res.json({ message: "Student deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = StudentController;
