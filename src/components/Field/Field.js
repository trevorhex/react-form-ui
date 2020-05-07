import React, { useContext } from 'react';
import { Input, Textarea } from '../components';
import { StyledField } from './StyledField';
import { OptionsContext } from '../Form';
import { getCombinedOptions } from '../../helpers';

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
  options: userOptions = {},
  width = 'full',
  ...rest
}) => {
  const { ...globalOptions } = useContext(OptionsContext);
  const options = getCombinedOptions(globalOptions, userOptions);
  const { media } = options;

  return (
    <StyledField
      className={[className, width].join(' ').trim()}
      style={userStyles}
      media={media}
    >
      <FormField options={options} {...rest} />
    </StyledField>
  );
};
