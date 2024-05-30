import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
    </footer>
  );
}

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
};

export default Footer;
