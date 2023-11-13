import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const LanguageSelector = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDialogOpen(false);
    // You can perform any other actions related to language change here
  };

  return (
    <div className="language-selector-container">
      <a
        href="#"
        onClick={() => setIsDialogOpen(!isDialogOpen)}
        className="nav-header-items"
      >
        <span className="selected-language">
          {selectedLanguage} <AiFillCaretDown />
        </span>
      </a>

      {isDialogOpen && (
        <div className="language-options">
          <p onClick={() => handleLanguageChange('english')}>English</p>
          <p onClick={() => handleLanguageChange('spanish')}>Spanish</p>
          <p onClick={() => handleLanguageChange('french')}>French</p>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
