import React from 'react';
import Input from '../components/Input';
import useForm from '../Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate()) {
      console.log('Enviou');
    } else {
      console.log('Não Enviou');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input label="Email" id="email" type="text" {...email} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
