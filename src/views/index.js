import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../lib/api'
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

function Index () {
  const [state, setState]=useState([])

  async function onDelete(petId){
    const deleteResponse = await api.deletePet(petId)
    if(deleteResponse){
      const pets = await api.getPets()
      setState(pets)
    }
  }

  async function onAdopt(petId){
    const adoptResponse = await api.adoptPet(petId)
    if(adoptResponse){
      const pets = await api.getPets()
      setState(pets)
    }
  }

  useEffect(()=>{
    async function getData(){
       const pets= await api.getPets()
    setState(pets)
    }
   getData()

  },[])
    const cards = state.map((petInfo) => (
      <div
        className="col-md-4"
        key={petInfo.id}
      >
        <Card {...petInfo}>
          <CustomButton
            onClick={()=> onDelete(petInfo.id)}
            text="Borrar"
            className="is-danger"
          />

          <Link
            className="btn btn-primary"
            to={`/pet/${petInfo.id}`}
          >
            Detalle
          </Link>

          { !petInfo.adopt
              ?
                <CustomButton
                  onClick={() => onAdopt (petInfo.id)}
                  text="Adoptar"
                  className="is-success"
                />
              :
                'Ya esta adoptado'
          }
        </Card>
      </div>
    ));

    return (
      <div className="container">
        <div className="row">
          { cards }
        </div>
      </div>
    )
  }


export default Index;
