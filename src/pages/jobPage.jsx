import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const jobPage = () => {
  const [job, setJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSingleJob();
  }, []);

  return isLoading ? <Spinner /> : <h1>{job.title}</h1>;
};

export default jobPage;
