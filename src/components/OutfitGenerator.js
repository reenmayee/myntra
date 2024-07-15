import React, { useState } from 'react';
import axios from 'axios';

const OutfitGenerator = () => {
  const [outfitData, setOutfitData] = useState([]);
  const [generatedImage, setGeneratedImage] = useState('');

  const handleGenerateImage = async () => {
    try {
      const response = await axios.post('http://localhost:3000/generate-image', outfitData);
      setGeneratedImage(response.data.image);
    } catch (error) {
      console.error('Error generating image', error);
    }
  };

  return (
    <div>
      <button onClick={handleGenerateImage}>Generate Outfit Image</button>
      {generatedImage && <img src={generatedImage} alt="Generated Outfit" />}
    </div>
  );
};

export default OutfitGenerator;
