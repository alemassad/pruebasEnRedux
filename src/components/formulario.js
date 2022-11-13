import React, {Fragment, useState} from 'react'
import {useForm} from 'react-hook-form';

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido : ''
    })

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido)
    }
    

    return (
        <Fragment>
            <h1>Formularios</h1>
            <form className='row' onSubmit={enviarDatos}>
                <div>
                    <div>
                        <label>Nombre</label>
                        <input 
                        name='nombre'
                        placeholder='Ingrese nombre'
                        type='text'
                        onChange={handleInputChange}>
                        </input>
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input 
                        name='apellido'
                        placeholder='Ingrese apellido'
                        type='text'
                        onChange={handleInputChange}>
                        </input>
                    </div>
                    <div>
                        <button type='submit'>Enviar</button>
                    </div>
                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido} </h3>
        </Fragment>
    );
}

export default Formulario;