import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons'; // Import the required icon

const Downloadresume = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // Replace the file ID in the URL with "uc"
    const fileID = "1ppu6kMiFkuxlr11e0gBsmrJrRdu-QUFl";
    const downloadURL = `https://drive.google.com/uc?id=${fileID}`;

    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = downloadURL;
    anchor.target = "_blank"; // Open in a new tab
    anchor.rel = "noopener noreferrer"; // Security best practice

    // Trigger click event to start download
    anchor.click();
  };

  return (
    <button onClick={onButtonClick} type="button" className="btn btn-outline-dark">
      Download Resume <FontAwesomeIcon className="ms-2" icon={faCircleDown} /> {/* Use the imported icon */}
    </button>
  );
};

export default Downloadresume;
