import React, { Fragment } from 'react';
import './formHook.css';
import {useForm} from 'react-hook-form';


const FormHook = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        name='titulo'
                        className='form-control my-2'
                        placeholder='ingresa tu nombre'
                        {...register('titulo', {
                            required: { value: true, message: 'El nombre es requerido' },
                            minLength: { value: 2, message: 'El nombre tiene que ser mas largo' },
                            maxLength: { value: 6, message: 'El nombre tiene que ser mas corto' }
                        })}
                    />
                    <span className='text-danger text-small d-block mb-2'>
                        <div>
                            {errors?.titulo?.message}
                                
                        </div>
                    </span>
                </div>
                <button>Enviar</button>
            </form>
        </Fragment>
    );
    
}
export default FormHook;