import React, {Fragment} from 'react';
import './App.css';
import Jsx from './components/jsx';
import Lista from './components/listas';
import  Formulario  from './components/formulario';
import FormHook from './components/formHook';
import Ejemplouno from './components/ejemplo1';


function App() {
  const saludo = 'Hola mundo';
  const temperatura = 21;

  return (
    <Fragment>
      <Ejemplouno/>
     <h1>
        Tìtulo de saludo con Redux {saludo}
     </h1>
     <FormHook/>
     <h4>
      {temperatura > 22 ? 'Calor' : 'Frio'}
      </h4>
    <Jsx />
    <Lista />
    <Formulario/> 
    </Fragment>
  );
}

export default App;
