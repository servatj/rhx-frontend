import React, { useState } from 'react';

const CoverLetterForm = () => {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStage = () => setStage(stage + 1);
  const prevStage = () => setStage(stage - 1);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Multi-Stage Form</h1>
      
      {stage === 1 && (
        <div>
          <label className="block mb-2">Field 1</label>
          <input 
            type="text" 
            name="field1" 
            value={formData.field1} 
            onChange={handleInputChange} 
            className="p-2 border rounded mb-4 w-full"
          />
          <label className="block mb-2">Field 1</label>
          <input 
            type="text" 
            name="field2" 
            value={formData.field1} 
            onChange={handleInputChange} 
            className="p-2 border rounded mb-4 w-full"
          />
          <button onClick={nextStage} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
        </div>
      )}

      {stage === 2 && (
        <div>
          <label className="block mb-2">Field 2</label>
          <input 
            type="text" 
            name="field3" 
            value={formData.field2} 
            onChange={handleInputChange} 
            className="p-2 border rounded mb-4 w-full"
          />
          <button onClick={prevStage} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Back</button>
          <button onClick={nextStage} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
        </div>
      )}

      {stage === 3 && (
        <div>
          <label className="block mb-2">Field 1</label>
          <input 
            type="text" 
            name="field4" 
            value={formData.field1} 
            onChange={handleInputChange} 
            className="p-2 border rounded mb-4 w-full"
          />
          <button onClick={nextStage} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
        </div>
      )}  

      {stage === 4 && (
        <div>
          {/* Review and submit form data */}
          <button onClick={() => console.log(formData)} className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      )}
    </div>
  );
};

export default CoverLetterForm;
