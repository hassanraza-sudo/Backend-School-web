const { client } = require("../db/index");
exports.submitApplication = async (req, res) => {
  const { studentName, dob, grade, parentName, contact, address } = req.body;

  // Check if 'studentName' is provided
  if (!studentName || !dob || !grade || !parentName || !contact || !address) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log(studentName, grade, parentName, contact, address);

  try {
    const newApplication = await client.query(
      `INSERT INTO users (student_name, parent_name, dob, grade, address, contact) 
       VALUES ($1, $2, $3, $4, $5, $6) 
       RETURNING *`,
      [studentName, parentName, dob, grade, address, contact] // Corrected variable names
    );

    res.status(201).json({
      message: "Application submitted successfully",
      application: newApplication.rows[0],
    });
  } catch (error) {
    console.error("Error inserting application:", error);
    res.status(500).json({ error: error.message });
  }
};
