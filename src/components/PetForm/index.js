import React, { Component } from 'react';

import CustomButton from '../CustomButton';

import styles from './index.module.css';
class PetForm extends Component {
  constructor(props) {
    super(props)

    const {
      name = '',
      breed = '',
      img = ''
    } = props;

    this.state = {
      name,
      breed,
      img,
    };
  }

  onChange(event) {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        {
          this.state.img && (
            <img
              className={styles.img}
              src={this.state.img}
              alt="pet"
            />
          )
        }

        <div className="form-group">
          <label htmlFor="img">
            Image Link
          </label>
          <input
            id="img"
            className="form-control"
            aria-describedby="pet-img"
            placeholder="Enter the img link of the pet"
            value={this.state.img}
            onChange={this.onChange.bind(this)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="form-control"
            aria-describedby="pet-name"
            placeholder="Enter the name of the pet"
            value={this.state.name}
            onChange={this.onChange.bind(this)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="breed">
            Breed
          </label>
          <input
            id="breed"
            className="form-control"
            aria-describedby="pet-breed"
            placeholder="Enter the breed of the pet"
            value={this.state.breed}
            onChange={this.onChange.bind(this)}
          />
        </div>

        <CustomButton
          className="is-info"
          text="Aceptar"
        />
      </form>
    )
  }
}

export default PetForm;
