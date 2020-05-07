import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { inputStyles } from '../../styles';
import { FormContext } from '../Form';

import uniqid from 'uniqid';

const StyledTextarea = styled.textarea`
  ${inputStyles}
  resize: ${props => props.resize};
`;

export const Textarea = ({
  name,
  value: userValue = '',
  label = '',
  options: fieldOptions
}) => {
  const [id] = useState(`${name}-${uniqid()}`);
  const { formState, updateFormState } = useContext(FormContext);
  const options = {
    ...fieldOptions,
    resize: fieldOptions.resize || 'vertical'
  };
  const { resize } = options;

  useEffect(() => {
    updateFormState({ target: { name, value: userValue } });
  }, []);

  return (
    <div className={`label_${options.labelStyle}`}>
      {label !== '' && <label htmlFor={id}>{label}</label>}
      <StyledTextarea
        id={id}
        name={name}
        value={formState[name] || ''}
        onChange={updateFormState}
        resize={resize}
      />
    </div>
  );
};
