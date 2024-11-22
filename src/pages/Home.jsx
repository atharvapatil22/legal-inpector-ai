import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [inputText, setInputText] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      alert(`File uploaded: ${file.name}`);
    }
  };

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    if (inputText || uploadedFile) {
      alert("Processing your input...");
      // Add your submission logic here
    } else {
      alert("Please provide some input.");
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to Legal Inspector</h1>
      <p>
        Legal Inspector is a powerful tool to help you understand your legal
        contracts and agreements. You can either upload one or more legal
        documents or paste the text directly. Our tool will analyze the content
        and highlight the most important clauses or points you should be aware
        of.
      </p>

      <div className="input-section">
        <textarea
          className="input-box"
          placeholder="Type or paste your text here..."
          value={inputText}
          onChange={handleTextChange}
        />
        <p>OR</p>
        <input
          type="file"
          accept=".txt,.pdf,.doc,.docx"
          onChange={handleFileUpload}
          className="file-input"
        />
        <button className="submit-btn" onClick={handleSubmit}>
          Analyze
        </button>
      </div>
    </div>
  );
}

export default Home;
