import React from 'react';
import { Icon } from '@iconify/react';

const WhatsAppCom = () => (
  <a
    href="https://api.whatsapp.com/send/?phone=9694501023&text&type=phone_number&app_absent=0"
    target="__blank"
  >
    <div
      style={{
        position: 'fixed',
        width: '65px',
        height: '65px',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#0C9',
        color: '#FFF',
        borderRadius: '50px',
        textAlign: 'center',
        boxShadow: '2px 2px 3px #999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
      }}
    >
      <Icon icon="ri:whatsapp-fill" width={45} />
    </div>
  </a>
);

export default WhatsAppCom;
