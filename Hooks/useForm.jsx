import React from 'react';

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'CEP inválido',
  },
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/,
    message: 'Email inválido',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function onBlur({ target }) {
    validate(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur,
    validate: () => validate(value),
  };
};

export default useForm;
