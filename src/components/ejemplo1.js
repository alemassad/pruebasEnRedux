import React, { Fragment, useState } from 'react'
import { useForm } from "react-hook-form";
import './formHook.css';

const Ejemplouno = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [Entradas, setEntradas] = useState([]);

    const onSubmit = (data, event) => {
        console.log(data)
        setEntradas([
            ...Entradas,
            data
        ])
        event.target.reset();
    }

    return ( <Fragment>
        <h2>Ejemplo Uno Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                name= "titulo"
                placeholder='ingrese titulo'
                className='form-control'
                {...register('titulo', {
                    required: { value: true, message: 'El titulo es requerido' },
                    minLength: { value: 2, message: 'El titulo tiene que ser mas largo' },
                    maxLength: { value: 6, message: 'El titulo tiene que ser mas corto' }
                })}
            >
            </input>
            {   errors.titulo &&
                <span>
                {errors.titulo.message}
                </span>
            }
            <input
                name= 'descripcion'
                placeholder='ingrese descripcion'
                className='form-control'
                {...register('descripcion', {
                    required: { value: true, message: 'La descripción es requerido' },
                    minLength: { value: 2, message: 'La descripción tiene que ser mas largo' },
                    
                })}
            >
            </input>
            {   errors.descripcion &&
                <span>
                {errors.descripcion.message}
                </span>
            }
            <button className='btn-primary'>Agregar</button>
        </form>
        <ul>
            {
                Entradas.map(item =>
                        <li>{item.titulo} - {item.descripcion}</li>
                    )
            }
        </ul>
    </Fragment> );
}
 
export default Ejemplouno;