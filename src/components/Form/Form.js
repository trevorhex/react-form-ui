import React, { createContext, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Field } from '../components';
import { FloatClear } from '../StyledElements';
import { setObjState, getCssMediaObject, SCREEN_SIZES } from '../../helpers';

export const FormContext = createContext();
export const OptionsContext = createContext();

const StyledForm = styled.form`
  width: 100%;
  box-sizing: border-box;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const INIT_STATE = {
  media: getCssMediaObject(SCREEN_SIZES),
  labelStyle: 'above'
};

const Form = ({
  className,
  style: userStyles = {},
  onSubmit,
  labelStyle = 'above',
  media = {},
  children
}) => {
  const [optionsState, setOptionsState] = useState(INIT_STATE);
  const [formState, setFormState] = useState({});
  const memoizedMedia = useMemo(() => media, []);

  useEffect(() => {
    setObjState(setOptionsState, {
      media: getCssMediaObject(media),
      labelStyle
    });
  }, [memoizedMedia, labelStyle]);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit && onSubmit(formState);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setObjState(setFormState, { [name]: value });
  };

  const memoizedFormState = useMemo(
    () => ({ formState, updateFormState: handleInputChange }),
    [formState]
  );
  return (
    <OptionsContext.Provider value={optionsState}>
      <FormContext.Provider value={memoizedFormState}>
        <StyledForm
          className={className}
          style={userStyles}
          onSubmit={handleSubmit}
        >
          {children}
        </StyledForm>
      </FormContext.Provider>
    </OptionsContext.Provider>
  );
};

const Row = ({ children }) => <FloatClear>{children}</FloatClear>;

Form.Field = Field;
Form.Row = Row;

export { Form, Row };
