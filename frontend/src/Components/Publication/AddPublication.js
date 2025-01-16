import React, { useState } from 'react';
import axios from 'axios';

const AddPublication = () => {
  const [publication, setPublication] = useState({ title: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      const response = await axios.post(
        'http://localhost:3001/publications/create',
        { title: publication.title },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );
      console.log(response.data);
      alert(`Publication ${response.data.title} créé avec succès`);
      setPublication({ title: "" });
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la création de la publication');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Titre'
          value={publication.title}
          onChange={(e) => setPublication({ ...publication, title: e.target.value })}
        />
        <button type='submit'>Ajouter</button>
      </form>
    </div>
  );
};

export default AddPublication;