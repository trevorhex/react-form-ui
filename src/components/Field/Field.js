import React, { useContext } from 'react';
import { Input, Textarea } from '../components';
import { StyledField } from './StyledField';
import { OptionsContext } from '../Form';

const FormField = ({ input = 'input', ...rest }) => {
  switch (input) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    default:
      return null;
  }
};

export const Field = ({
  className,
  style: userStyles = {},
  width = 'full',
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
