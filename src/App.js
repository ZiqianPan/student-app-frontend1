import { useEffect, useState } from "react";
import "./App.css";
import StudentList from "./components/StudentList/StudentList";

const API_URL = "http://localhost:8888";

function App() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${API_URL}/students`);
      const json = await response.json();
      console.log("<App/> useEffect() fetcged data", json);
      const { data } = json;
      setStudentData(data);
    }
    fetchData();
  }, []);

  console.log(`<App/> rendered num students = ${studentData.length}`);
  return (
    <div className="App">
      <StudentList studentData={studentData} />
    </div>
  );
}

export default App;
