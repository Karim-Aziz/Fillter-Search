import { useParams } from "react-router-dom";
import jobs from "../Data/data";

const JobsDetails = () => {
  const { position } = useParams();

  const job = jobs.find((job) => job.position === position);

  return (
    <div className="container">
      <div className="all-data shadow my-5 p-4">
        <h4 className="text-primary">{job.position}</h4>
        <p className="text-black-50">{job.company}</p>
        <p className="lead">{job.desc}</p>
        <span className="text-danger">{job.location}</span>
      </div>
    </div>
  );
};

export default JobsDetails;
