export default{
  async getPets() {
    const response = await fetch('http://localhost:8080/pets');

    const { payload } = await response.json();

    const list = payload.pets.map((pet) => {
      const {
        name: title,
        breed: subtitle,
        photo: img,
        isAdopted: adopt,
        _id: id,
      } = pet;

      return {
        title,
        subtitle,
        img,
        adopt,
        id,
      };
    });
 return list
  },
  async deletePet(id) {
    const response = await fetch(`http://localhost:8080/pets/${id}`, {
      method: 'DELETE',
    });

    const { succes } = await response.json();
    console.log(succes)
    return succes
  },
  async adoptPet(id) {
    const response = await fetch(`http://localhost:8080/pets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isAdopted: true }),
    });

    const { succes } = await response.json();
    console.log(succes)
    return succes

  },
  async newPet(petInfo) {
    const response = await fetch('http://localhost:8080/pets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: petInfo.name,
        breed: petInfo.breed,
        photo: petInfo.img,
        ageInMonths: 1,
        size: 'medium',
        species: 'dog',
        owner: 'me',
        userId: 0,
      }),
    });

    const { succes } = await response.json();

    return succes
  },
  async getPet (petId){
    const response = await fetch(`http://localhost:8080/pets/${petId}`);

    const { payload } = await response.json();

    const { pet } = payload;

    return pet
  },
  async updatePet(petId, body) {
    const response = await fetch(`http://localhost:8080/pets/${petId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const { succes } = await response.json();
    return succes
  }

}
