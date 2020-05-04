import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { inputStyles } from '../../styles';
import { /* OptionsContext, */ FormContext } from '../Form';

const StyledTextarea = styled.textarea`
  ${inputStyles}
  resize: ${props => props.resize}
`;

export const Textarea = ({ name, value: userValue, resize = 'vertical' }) => {
  const { formState, updateFormState } = useContext(FormContext);

  useEffect(() => {
    if (userValue !== '')
      updateFormState({ target: { name, value: userValue } });
  }, []);

  return (
    <StyledTextarea
      name={name}
      value={formState[name]}
      onChange={updateFormState}
      resize={resize}
    />
  );
};
