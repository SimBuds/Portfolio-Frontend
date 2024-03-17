import React from 'react';
import '../assets/Capstone.css'

function Capstone() {
  return (
    <div className="container capstone">
      <h1 className="text-center my-4">Capstone Project</h1>
      <div className="row">
        <div className="col-lg-4">
          <section id="summary">
            <h2>Project Summary</h2>
            <p>Here, you will describe the main goals, technologies, and achievements of your capstone project.</p>
          </section>
        </div>
        <div className="col-lg-4">
          <section id="vision">
            <h2>Project Vision</h2>
            {/* Content will go here */}
          </section>
        </div>
        <div className="col-lg-4">
          <section id="requirements">
            <h2>Project/Business Requirements</h2>
            {/* Content will go here */}
          </section>
        </div>
      </div>
      {/* Add more sections following the same pattern */}
    </div>
  );
}

export default Capstone;