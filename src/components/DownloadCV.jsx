import { useState } from 'react';

function DownloadCV() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/CV_MD_Showaib_Rahman_Tanveer.pdf';
    link.download = 'CV_MD_Showaib_Rahman_Tanveer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset button state after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <div className="download-cv-container">
      <button 
        className="download-cv-btn"
        onClick={handleDownload}
        disabled={isDownloading}
      >
        <ion-icon name={isDownloading ? "checkmark-circle-outline" : "download-outline"}></ion-icon>
        <span>{isDownloading ? "Downloaded!" : "Download CV (PDF)"}</span>
      </button>
    </div>
  );
}

export default DownloadCV;
