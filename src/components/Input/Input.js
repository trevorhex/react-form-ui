import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { inputStyles } from '../../styles';
import { /* OptionsContext, */ FormContext } from '../Form';

export const uncontrolledFields = ['submit', 'reset', 'button', 'file'];

const StyledInput = styled.input`
  ${inputStyles}
`;

export const Input = ({ name, value: userValue = '', type = 'text' }) => {
  // const { labelStyle } = useContext(OptionsContext);
  const { formState, updateFormState } = useContext(FormContext);
  const controlled = !uncontrolledFields.includes(type);

  useEffect(() => {
    if (controlled && userValue !== '')
      updateFormState({ target: { name, value: userValue } });
  }, []);

  return (
    <StyledInput
      type={type}
      name={name}
      value={controlled ? formState[name] || '' : userValue}
      onChange={controlled ? updateFormState : null}
    />
  );
};
