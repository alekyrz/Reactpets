import React from 'react';

import PetForm from '../components/PetForm';
import api from '../lib/api';

function NewPet (props) {
  async function onSubmit(petInfo) {
    const newPetResponse = await api.newPet(petInfo)
    if(newPetResponse) props.history.push('/')
  }

    return (
      <div className="container">
        <PetForm onSubmit={onSubmit} />
      </div>
    )

}

export default NewPet;
