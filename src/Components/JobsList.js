import { useState } from "react";
import Search from "./Search";
import jobs from "../Data/data";
import { Link } from "react-router-dom";

const JobsList = () => {
  const [jobsData, setJobsData] = useState(jobs);
  const [searchItem, setSearchItem] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  const searchTermValue = searchItem.toLowerCase();

  // Start Fillter
  const fillterJobData = (e) => {
    const fillterValue = e.target.value;
    if (fillterValue === "full-time") {
      const fillterData = jobs.filter((job) => job.contract === "Full Time");
      setJobsData(fillterData);
    } else if (fillterValue === "part-time") {
      const fillterData = jobs.filter((job) => job.contract === "Part Time");
      setJobsData(fillterData);
    } else if (fillterValue === "freelance") {
      const fillterData = jobs.filter((job) => job.contract === "Freelance");
      setJobsData(fillterData);
    } else if (fillterValue === "contract") {
      const fillterData = jobs.filter((job) => job.contract === "Contract");
      setJobsData(fillterData);
    } else {
      setJobsData(jobs);
    }
  };

  // Search By Location
  const locationSearchHandler = () => {
    const fillterData = jobs.filter((job) =>
      job.location.toLowerCase().includes(searchByLocation.toLowerCase())
    );
    setJobsData(fillterData);
  };

  return (
    <>
      <Search
        fillterJobData={fillterJobData}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        searchByLocation={searchByLocation}
        setSearchByLocation={setSearchByLocation}
        locationSearchHandler={locationSearchHandler}
      />

      <div className="container">
        <div className="row">
          {jobsData
            ?.filter((job) => {
              if (searchItem === "") {
                return job;
              }
              if (
                job.position.toLowerCase().includes(searchTermValue) ||
                job.company.toLowerCase().includes(searchTermValue)
              )
                return job;
            })
            .map((job) => (
              <div className="col-lg-4 col-md-6 mb-3" key={job.id}>
                <div className="card">
                  <div className="card-body">
                    <img className="img-fluid mb-3" src={job.logo} />

                    <h6 className="card-subtitle mb-2 text-muted">
                      <Link to={`/jobs/${job.position}`}>
                        {job.postedAt} - {job.contract}
                      </Link>
                    </h6>

                    <h5 className="card-title">{job.position}</h5>

                    <p className="card-text">{job.company}</p>
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default JobsList;
