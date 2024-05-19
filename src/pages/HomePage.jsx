import React from "react";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCards";
import JobList from "../components/JobList";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobList />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
