import React, { ButtonHTMLAttributes } from 'react';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className='pink'>{props.children}</button>;
}

export default Button;