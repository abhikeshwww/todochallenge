import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-center p-4'>
      <a
        className="btn--remix "
        target="_top"
        href="https://glitch.com/edit/#!/remix/glitch-hello-react">
        <img
          src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140"
          alt=""
        />
        Remix on Glitch
      </a>
    </div>
  );
};

export default Footer;
