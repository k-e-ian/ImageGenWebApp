import React, { useState } from 'react';
import request from 'superagent';
import { BounceLoader } from 'react-spinners';

function App() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateImage = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await request
        .post('http://localhost:3000/generate')
        .send({ prompt: prompt })
        .timeout({
          response: 15000,  // Wait for the server to start sending
          deadline: 20000,  // Entire operation must finish within 15 seconds
        });

      const imageData = response.body.data[0];
      setGeneratedImage(imageData.url);
      setImageId(response.body.created); // Use 'created' as the image ID
    } catch (error) {
      console.error('Error generating image:', error);
      setError('Error generating image. Please try again.'); // Provide a user-friendly error message
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGenerateImage();
    }
  };


  return (
    <div>
      <div className='img-gen-div'>
        <h1>Image Generator</h1>
        <div className='img-gen-input'>
          <input
            type="text"
            placeholder="Enter prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="button" onClick={handleGenerateImage}>
            Generate
          </button>
        </div>
      </div>

      {loading && (
        <div className="loading-spinner">
          <BounceLoader loading={loading} size={50} />
        </div>
      )}
      {error && (
        <div className="loading-spinner">
          <p className="error">{error}</p>
        </div>
      )}

      {generatedImage && (
        <div className='image-div'>
          <div className='image-name'>
            <code>Generated image with id: <span className='image-id'>{imageId}</span></code>
          </div>
          <div className='image'>
            <img
              src={generatedImage}
              alt={`Generated ${imageId}`}
            />
          </div>
          <div className='image-url'>
          <code>
            Generated image URL:{' '}
            <a
              href={generatedImage}
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <span>
                {generatedImage.length > 40 ? generatedImage.slice(0, 40) + '...' : generatedImage}
              </span>
            </a>
          </code>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
