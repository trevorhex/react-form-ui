import React, { createContext } from 'react';
import styled from 'styled-components';
import { Field } from '../components';
import { FloatClear } from '../StyledElements';
import { useFormState } from '../../hooks';
import { getCssMediaObject, SCREEN_SIZES } from '../../helpers';

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

const Form = ({
  className,
  style: userStyles = {},
  onSubmit,
  options: userOptions = {},
  children
}) => {
  const { formState, updateFormState, handleFormSubmit } = useFormState(
    onSubmit
  );

  const options = {
    labelStyle: 'above',
    ...userOptions,
    media: getCssMediaObject(userOptions.media || SCREEN_SIZES)
  };

  return (
    <OptionsContext.Provider value={options}>
      <FormContext.Provider value={{ formState, updateFormState }}>
        <StyledForm
          className={className}
          style={userStyles}
          onSubmit={handleFormSubmit}
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
