import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const CurrencySelector = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleCurrencyChange = (Currency) => {
    setSelectedCurrency(Currency);
    setIsDialogOpen(false);
    // You can perform any other actions related to Currency change here
  };

  return (
    <div className="currency-selector-container">
      <a
        href="#"
        onClick={() => setIsDialogOpen(!isDialogOpen)}
        className="nav-header-items"
      >
        <span className="selected-currency">
          {selectedCurrency} <AiFillCaretDown />
        </span>
      </a>

      {isDialogOpen && (
        <div className="currency-options">
          <p onClick={() => handleCurrencyChange('USD')}>USD</p>
          <p onClick={() => handleCurrencyChange('PKR')}>PKR</p>
          <p onClick={() => handleCurrencyChange('EUR')}>EUR</p>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
