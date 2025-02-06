const StudentModel = require("../models/studentModel");

class StudentService {
  static async getAllStudents() {
    return await StudentModel.getAllStudents();
  }

  static async getStudentById(id) {
    return await StudentModel.getStudentById(id);
  }

  static async createStudent(data) {
    const { name, age, grade } = data;
    if (!name || !age || !grade) {
      throw new Error("All fields are required!");
    }
    return await StudentModel.createStudent(name, age, grade);
  }

  static async updateStudent(id, data) {
    const { name, age, grade } = data;
    return await StudentModel.updateStudent(id, name, age, grade);
  }

  static async deleteStudent(id) {
    return await StudentModel.deleteStudent(id);
  }
}

module.exports = StudentService;
