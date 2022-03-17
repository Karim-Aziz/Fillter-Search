import { Navigate, Route, Routes } from "react-router-dom";
import JobsList from "./Components/JobsList";
import JobsDetails from "./Components/JobsDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/jobs/:position" element={<JobsDetails />} />
      </Routes>
    </>
  );
};

export default App;
