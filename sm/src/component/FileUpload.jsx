import React, { useRef } from 'react';
import styles from './FileUpload.module.css';

const FileUpload = () => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="main-file-content">
      <div className={styles.Navbar}>
        <h2>File System</h2>
      </div>

      <div className={styles.mainItem}>
        <div className={styles.searchContainer}>
          <input type="text" className={styles.searchInput} placeholder="Search" />
          {/* <select className={styles.dropdown}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <div className="upload-file">
            <input
              type="file"
              id="fileInput"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={(e) => {
                // Handle file selection if needed
                console.log('Selected file:', e.target.files[0]);
              }}
            />
            <button className={styles.uploadBtn} onClick={handleUploadClick}>
              Upload
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;