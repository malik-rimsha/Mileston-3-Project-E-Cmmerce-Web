"use client";
import React, { useState, useEffect } from 'react';

const TopBar = () => {
  const messages = [
    { urdu: "نئے سال کی خاص آفر! 50% تک رعایت حاصل کریں۔", english: "New Year Special Offer! Get up to 50% off." },
    { urdu: "صرف آج: تمام آرڈرز پر مفت ڈلیوری، 5000 روپے سے زائد خریداری پر!", english: "Today Only: Free delivery on all orders above Rs. 5000!" },
    { urdu: "بنڈلز ڈیلز ابھی دستیاب ہیں، اپنی پسندیدہ آئٹمز حاصل کریں۔", english: "Bundles are available now, grab your favorites!" },
  
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showUrdu, setShowUrdu] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowUrdu((prev) => !prev); // Toggle between Urdu and English
      if (!showUrdu) {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [showUrdu, messages.length]);

  return (
    <div style={{
      backgroundColor: '#2b3749',
      color: '#fbf7ef',
      textAlign: 'center',
      padding: '10px 0',
      fontSize: '16px',
      fontWeight: 'bold',
      position: 'sticky',
      top: '0',
      zIndex: '1000', // Ensure it stays on top of other elements
    }}>
      {showUrdu ? messages[currentMessageIndex].urdu : messages[currentMessageIndex].english}
    </div>
  );
};

export default TopBar;

