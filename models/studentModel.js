const { client } = require("../db/index");

class StudentModel {
  static async getAllStudents() {
    const result = await client.query("SELECT * FROM students");
    return result.rows;
  }

  static async getStudentById(id) {
    const result = await client.query("SELECT * FROM students WHERE id = $1", [
      id,
    ]);
    return result.rows[0];
  }

  static async createStudent(name, age, grade) {
    const result = await client.query(
      "INSERT INTO students (name, age, grade) VALUES ($1, $2, $3) RETURNING *",
      [name, age, grade]
    );
    return result.rows[0];
  }

  static async updateStudent(id, name, age, grade) {
    const result = await client.query(
      "UPDATE students SET name=$1, age=$2, grade=$3 WHERE id=$4 RETURNING *",
      [name, age, grade, id]
    );
    return result.rows[0];
  }

  static async deleteStudent(id) {
    await client.query("DELETE FROM students WHERE id = $1", [id]);
    return { message: "Student deleted successfully" };
  }
}

module.exports = StudentModel;
