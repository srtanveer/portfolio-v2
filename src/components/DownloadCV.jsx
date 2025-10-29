function DownloadCV() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV_MD_Showaib_Rahman_Tanveer.pdf';
    link.download = 'CV_MD_Showaib_Rahman_Tanveer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="download-cv-container">
      <button 
        className="download-cv-btn"
        onClick={handleDownload}
      >
        <ion-icon name="download-outline"></ion-icon>
        <span>Download CV (PDF)</span>
      </button>
    </div>
  );
}

export default DownloadCV;
