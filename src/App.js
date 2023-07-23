import { useEffect, useState } from "react";
import "./App.css";
import StudentList from "./components/StudentList/StudentList";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import Container from "./components/Container/Container";

// TODO: Get this value from .env
const API_URL = "http://localhost:8888";

function App() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("<App /> useEffect() fired");
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const response = await fetch(`${API_URL}/students`);
        const json = await response.json();
        console.log("<App /> useEffect() fetched data", json);
        const { data, error } = json;
        if (response.ok) {
          setStudentData(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        console.log(`<App /> useEffect error : ${err.message}`);
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <StudentList studentData={studentData} />;
    }
  };

  console.log(`<App /> rendered! num students = ${studentData.length}`);
  return (
    <div className="App">
      <Container center={Boolean(error || loading)}>
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;
