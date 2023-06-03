import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const ErrorPage = () => {
  const navigate = useNavigate()

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f8f8',
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#333',
  };

  const messageStyle = {
    fontSize: '20px',
    marginBottom: '32px',
    color: '#555',
  };



  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <div style={containerStyle}>
      <iframe src="https://gifer.com/embed/7iJI" width='480' height='270.000' frameBorder="0" allowFullScreen></iframe>
      <h2 style={titleStyle}>¡Ups! Algo salió mal.</h2>
      <p style={messageStyle}>Hubo un error al cargar el editor de código.</p>
      <Button size='large' variant='contained' onClick={handleGoBack}>
        Volver atrás
      </Button>
    </div >
  );
};

export default ErrorPage;
