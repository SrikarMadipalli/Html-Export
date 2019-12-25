import React from 'react';
import { ReactComponent as LoadingIcon } from '../../assets/Gear.svg';
import './styles.scss';
export default function Loader() {
  const loaderStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#1a3e50',
    flexDirection: 'column',
    zIndex: 1000
  };
  return (
    <div className="app-loader" style={loaderStyle}>
      <LoadingIcon />
      <span className="loading-text">Loading...</span>
    </div>
  );
}
