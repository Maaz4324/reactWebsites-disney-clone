import MovieCarousel from "../components/MovieCarousel";
import React from "react";
import FranchiseCard from "../components/FranchiseCard";

function Home() {
  return (
    <div className="w-full min-h-screen bg-midnight text-white">
      <MovieCarousel />
      <FranchiseCard />
    </div>
  );
}

export default Home;
