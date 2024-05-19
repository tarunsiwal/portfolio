import React from 'react';

const SocialMedia = () => {
  const socialMediaLinks = [
    { name: 'whatsapp', url: "https://wa.me/+919999889504?text=Hello%21%20I%20have%20a%20question.", image: require("../../assets/images/logos/WhatsApp.svg").default },
    { name: 'gitHubLogo', url: 'https://github.com/tarunsiwal', image: require("../../assets/images/logos/GitHub-Logo.svg").default },
    { name: 'linkedIn', url: 'https://www.linkedin.com/in/%E0%A4%A4%E0%A4%B0%E0%A5%81%E0%A4%A3-tarun-panchal-a4a01a184/', image: require("../../assets/images/logos/LinkedIn.svg").default },
  ];
  function sendMessage() {
    
    var phoneNumber = '+91 9999889504';
    var message = 'Hello! I have a question.';
    var encodedMessage = encodeURIComponent(message);
    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL);
  }
  return (
    <div className='container social-media'>
      {socialMediaLinks.map(({ name, url, image }) => (
        <a key={name} href={url} className='icon-link' target="_blank">
          <img src={image} alt={name} className='icon' />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
