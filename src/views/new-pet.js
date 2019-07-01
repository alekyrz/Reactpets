import React, { Component } from 'react';

import PetForm from '../components/PetForm';

class NewPet extends Component {
  async onSubmit(formData) {
    const response = await fetch('http://localhost:8080/pets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        breed: formData.breed,
        photo: formData.img,
        ageInMonths: 1,
        size: 'medium',
        species: 'dog',
        owner: 'me',
        userId: 0,
      }),
    });

    const { success } = await response.json();

    if (success) this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <PetForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default NewPet;
