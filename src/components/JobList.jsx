import React, { useEffect, useState } from "react";
import jobs from "../jobs.json";
import JobCard from "./JobCard";
import Spinner from "./Spinner";

const JobList = ({ isHome = false }) => {
  // const jobListing = isHome ? jobs.slice(0, 3) : jobs;

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>

          {isLoading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard job={job} key={job.id} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobList;
