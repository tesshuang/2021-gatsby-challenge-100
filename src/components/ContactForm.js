import React from 'react';
import { FormiumForm, defaultComponents } from '@formium/react';
import {
  Input,
  Textarea as TextareaUI,
  FormControl as FormControlUI,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { formium } from '../lib/formium';

const TextInput = React.memo(function TextInput({ type, ...props }) {
  return <Input {...props} />;
});

const Textarea = React.memo(function Textarea(props) {
  return <TextareaUI {...props} size="md" />;
});

const FormControl = React.memo(function FormControl({
  children,
  description,
  error,
  label,
  labelFor,
}) {
  return (
    <FormControlUI isInvalid={error}>
      {label && <FormLabel htmlFor={labelFor}>{label}</FormLabel>}
      {description && <FormHelperText>{description}</FormHelperText>}
      {children}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControlUI>
  );
});

const components = {
  ...defaultComponents,
  TextInput,
  Textarea,
  FormControl,
};

export default function ContactForm({ data }) {
  const { formiumForm } = data;
  return (
    <FormiumForm
      data={formiumForm}
      components={components}
      onSubmit={async (values) => {
        await formium.submitForm('contact', values);
        alert('Success');
      }}
    />
  );
}
