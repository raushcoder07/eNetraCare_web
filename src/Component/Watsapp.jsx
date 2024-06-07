import React from 'react';
import { Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

const WhatsApp = () => {
  const whatsappNumber = '+91 9508382743'; // Replace with your WhatsApp number
  const message = 'Hello, I have a question.';

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      type="primary"
      shape="circle"
      size="large"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ transition: 'transform 0.3s' }}
      className="whatsapp-button"
    >
      <WhatsAppOutlined />
    </Button>
  );
};

export default WhatsApp;
