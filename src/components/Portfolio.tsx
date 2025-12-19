import React from "react";
import PortfolioTimeline from "./PortfolioTimeline";
const Portfolio: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 items-center">
      <PortfolioTimeline />
    </div>
  );
};

export default Portfolio;
