import React, { useEffect } from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    width: '100vw',
            background: "url(/login_bg.jpg) center center/cover no-repeat",
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    flexDirection: 'column',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.7)',
    zIndex: 1,
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#fff',
    textShadow: '0 0 4px #000',
  },
};

function Logout({ onLogout }) {
  useEffect(() => {
    localStorage.removeItem('token');
    if (onLogout) onLogout();
  }, [onLogout]);

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.message}>You have been logged out.</div>
    </div>
  );
}

export default Logout; 
