import { useState } from 'react';
import { setObjState } from '../helpers';

export const useFormState = onSubmit => {
  const [formState, setFormState] = useState({});

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit && onSubmit(formState);
  };

  const updateFormState = e => {
    const { name, value } = e.target;
    setObjState(setFormState, { [name]: value });
  };

  return {
    formState,
    updateFormState,
    handleFormSubmit
  };
};
