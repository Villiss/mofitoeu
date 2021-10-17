import React from 'react'
import thumbnail from '../assets/thumbnail-1.jpg'

const Home = () => {
    return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            height: '100vh'
          }}
        >
          <h1>THE HOME OF SSP GOLF ENERGY BARS</h1>
          <h2>Echoing an increasing demand from PGA Tour professionals for performance nutrition, SSP Golf brings Tour Quality Performance Nutrition direct TO YOU.</h2>
          <img src={thumbnail} alt='thumbnail'/>
        </div>
      );
    };

export default Home
