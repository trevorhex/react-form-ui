import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { inputStyles } from '../../styles';
import { /* OptionsContext, */ FormContext } from '../Form';

const StyledInput = styled.input`
  ${inputStyles}
`;

export const Input = ({ name, value: userValue, type = 'text' }) => {
  // const { labelStyle } = useContext(OptionsContext);
  const { formState, updateFormState } = useContext(FormContext);

  useEffect(() => {
    if (userValue !== '')
      updateFormState({ target: { name, value: userValue } });
  }, []);

  return (
    <StyledInput
      type={type}
      name={name}
      value={formState[name]}
      onChange={updateFormState}
    />
  );
};
