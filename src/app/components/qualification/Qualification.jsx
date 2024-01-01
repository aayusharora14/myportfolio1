"use client";
import React, { useState } from 'react';
import './qualification.css'

const Qualification = () => {
  const [activeTab, setActiveTab] = useState(null);

  const experienceData = [
    { company: 'Web Developer Internship', position: 'Teachnook', dates: 'June 2023 - Aug 2023' },
    { company: 'Web Designer Internship', position: 'Internship Studio', dates: 'May 2023 - June 2023' },
  ];

  const qualificationsData = [
    { institute: 'Bachelor of Science in Computer Science', degree: 'Manipal University Jaipur', dates: '2021 - 2025' },
    { institute: '10th | 12th', degree: 'Swami Vivekanand Public School', dates: '2010 - 2021' },
  ];

  const renderTimeline = (data, isExperience) => {
    return (
      <div>
        <table className={`timeline-table ${isExperience ? 'experience' : 'qualifications'}`}>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <button onClick={() => setActiveTab(item.company || item.institute)} className={activeTab === (item.company || item.institute) ? 'active' : ''}>
                    <strong>{item.company || item.institute}</strong>
                  </button>
                </td>
                <td>
                  <div className="timeline-item">
                    <p className="position"><strong>{isExperience ? item.position : item.degree}</strong></p>

                  </div>
                </td>

                <td>
                  <div className="timeline-item">

                    <p className="dates">{item.dates}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {activeTab && (
          <p className="close-text" onClick={() => setActiveTab(null)}>
            Tap on this to close it
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="portfolio-container">
      <div className="tabs">
        <button onClick={() => setActiveTab('experience')} className={activeTab === 'experience' ? 'active' : ''}>
          Experience
        </button>
        <button onClick={() => setActiveTab('qualifications')} className={activeTab === 'qualifications' ? 'active' : ''}>
          Qualifications
        </button>
      </div>

      <div className="content">
        {activeTab === 'experience' && (
          <div>
            <h2>Experience</h2>
            {renderTimeline(experienceData, true)}
          </div>
        )}

        {activeTab === 'qualifications' && (
          <div>
            <h2>Qualifications</h2>
            {renderTimeline(qualificationsData, false)}
          </div>
        )}
      </div>


    </div>
  );
};

export default Qualification;
