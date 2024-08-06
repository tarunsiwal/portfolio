import React, { useState } from 'react';

const AchievementCard = ({ img, heading, para }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="row flex-row achievementCardHolder">
      <div className="col-sm-4">
        <img className="card-img-left" src={img} alt="Achievement" />
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {heading}
            </h5>
            <p className={`card-text ${isExpanded ? '' : 'truncated'}`}>
              {para}
            </p><span className="expand-button" onClick={toggleExpansion}>
              {isExpanded ? 'See Less' : 'See More'}
            </span>
            <div className='card-btn'>
                <a href="https://www.credly.com/badges/238a1581-e848-4758-890a-a6246eee26d9/public_url" className="btn btn-primary">
                See Online Credential
                </a>
                <a href="https://drive.google.com/file/d/1vdeA4VI71hNRCOcKH9CUXAIom-Qf4cCq/view?usp=drive_link" className="btn btn-outline-dark">
                See Certificate
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
