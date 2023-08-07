import React from "react";
import { FaSistrix } from "react-icons/fa";

const MainBody = () => {
  return (
    <div className="mainbody">
      <div className="mainbody_content">
        <h1>Find a Recipe</h1>

        <div className="search_section">
          <button>
            <FaSistrix size={15} />
          </button>
          <input />
        </div>
        <p className="main_body_text">
          Unleash Your Inner Chef! Discover a world of mouthwatering recipes .
        </p>
      </div>
    </div>
  );
};

export default MainBody;
