import React from 'react';
import { useGlobalStates } from './utils/global.context'


const Footer = () => {
	const { theme } = useGlobalStates();
  return (
    <footer className={theme}>
      <div>
        <p>Powered by</p>
        <p>Mercedes Bakker - CAMADA 4 all rights reserved</p>
        <img src="./images/DH.png" alt='DH-logo' width="100%"/>
      </div>
    </footer>
  )
}

export default Footer;
