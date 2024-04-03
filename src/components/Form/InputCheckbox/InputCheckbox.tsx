import React, { ChangeEvent } from 'react';
import Styles from './InputCheckbox.module.scss'; 
import { FaCheck } from 'react-icons/fa';

interface Props {
    children: React.ReactNode
    onChange: (checked: boolean) => void;
}

const InputCheckbox = ({children, onChange}: Props) => {
  const { container, containerTerms } = Styles

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className={container}>
      <input type="checkbox" name="check" onChange={handleCheckboxChange} />
      <span className={containerTerms}>
        <small><FaCheck /></small>
        <p>
        {children}
        </p>
      </span>
    </label>
  );
};

export default InputCheckbox;
