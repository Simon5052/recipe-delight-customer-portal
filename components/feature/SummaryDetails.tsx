import React from "react";

function SummaryDetails() {
  return (
    <div className="summaryDetails">
      <div>
        <div>
          <h2 className="totals">60+</h2>
          <p className="totals_info">Registered Members</p>
        </div>
      </div>
      <div>
        <h2 className="totals">100+</h2>
        <p className="totals_info">Recipes</p>
      </div>
      <div>
        <h2 className="totals">20+</h2>
        <p className="totals_info">Professional Chefs</p>
      </div>
    </div>
  );
}

export default SummaryDetails;
