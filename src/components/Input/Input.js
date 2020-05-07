import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { inputStyles } from '../../styles';
import { FormContext } from '../Form';

import uniqid from 'uniqid';

export const uncontrolledFields = ['submit', 'reset', 'button', 'file'];

const StyledInput = styled.input`
  ${inputStyles}
`;

export const Input = ({
  name,
  value: userValue = '',
  type = 'text',
  label = '',
  options
}) => {
  const [id] = useState(`${name}-${uniqid()}`);
  const { formState, updateFormState } = useContext(FormContext);
  const controlled = !uncontrolledFields.includes(type);

  useEffect(() => {
    if (controlled) updateFormState({ target: { name, value: userValue } });
  }, []);

  return (
    <div className={`label_${options.labelStyle}`}>
      {label !== '' && <label htmlFor={id}>{label}</label>}
      <StyledInput
        id={id}
        type={type}
        name={name}
        value={controlled ? formState[name] || '' : userValue}
        onChange={controlled ? updateFormState : null}
      />
    </div>
  );
};
