import StudentCard from "../StudentCard/StudentCard";
import "./StudentList.css"

export default function StudentList({ studentData }) {
  console.log("<StudentList> rendered!");
  return (
    <div className="StudentList">
      {studentData.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
