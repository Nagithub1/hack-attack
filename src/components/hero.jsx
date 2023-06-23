import React from 'react';

function downloadFiles() {
  const fileUrls = [
    '/brute_force.txt',
    '/wireshark.pcapng'
  ];

  fileUrls.forEach((url) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const Hero = () => {
  return (
    <div className="herobg">
      <h1>CYBER SECURITY ASSOCIATION</h1>
      <h4>Presents You</h4>
      <h2>HACK-ATTACK Hackathon</h2>
      <div className="heroBtnDiv">
        <a href="/login" className="button-85">CRACK NOW</a>
        <button onClick={downloadFiles} className="button-58">BRUTE FORCE</button>
      </div>
    </div>
  );
}

export default Hero;
