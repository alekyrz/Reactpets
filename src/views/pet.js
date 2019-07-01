import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PetForm from '../components/PetForm';
import PetInfo from '../components/PetInfo';

class Pet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ageInMonths: 0,
      breed: '',
      isAdopted: false,
      name: '',
      owner: '',
      img: '',
      size: '',
      species: '',
      userId: '',
      description: '',
      edit: false,
    };
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    const { id } = this.props.match.params;

    const response = await fetch(`http://localhost:8080/pets/${id}`);

    const { payload } = await response.json();

    const { pet } = payload;

    this.setState({ img: pet.photo, ...pet });
  }

  componentDidUpdate() {
    const { search } = this.props.location;

    if (search) {
      const str = search.replace('?', '');

      const [key, value] = str.split('=');

      const query = { [key]: JSON.parse(value) };

      if (this.state.edit !== query.edit) this.setState(query);
    } else {
      if (this.state.edit === true) this.setState({ edit: false });
    }
  }

  async onSubmit(formData) {
    const { id } = this.props.match.params;

    const response = await fetch(`http://localhost:8080/pets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        breed: formData.breed,
        photo: formData.img,
      }),
    });

    const { success } = await response.json();

    if (success) {
      this.fetchData();
      this.props.history.push(this.props.location.pathname)
    }
  }

  onChange(event) {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  }

  render() {
    const child = this.state.edit
      ? <PetForm
        {...this.state}
        onSubmit={this.onSubmit.bind(this)}
      />
      : <PetInfo {...this.state} />

    return (
      <div className="container">
        <Link
          className={`btn btn-${this.state.edit ? 'danger' : 'info'}`}
          to={`${this.props.location.pathname}${this.state.edit ? '' : '?edit=true'}`}
        >
          { this.state.edit ? 'Cancel edit' : 'Edit' }
        </Link>

        { child }
      </div>
    );
  }
}

export default Pet;
