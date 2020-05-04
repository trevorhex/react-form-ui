import React, { useContext } from 'react';
import { Input, Textarea } from '../components';
import { StyledField } from './StyledField';
import { OptionsContext } from '../Form';

const FormField = ({
  input = 'input',
  name = '',
  value = '',
  type,
  resize
}) => {
  switch (input) {
    case 'input':
      return <Input type={type} name={name} value={value} />;
    case 'textarea':
      return <Textarea name={name} value={value} resize={resize} />;
    default:
      return null;
  }
};

export const Field = ({
  className,
  style: userStyles = {},
  width = '',
  ...rest
}) => {
  const { media } = useContext(OptionsContext);

  return (
    <StyledField
      className={[className, width].join(' ').trim()}
      style={userStyles}
      media={media}
    >
      <FormField {...rest} />
    </StyledField>
  );
};
