import { useForm } from "react-hook-form";
import { edadValidator } from "./validators";
import "./styles.css";

const Formulario = () => {
    const { register, formState: { errors }, watch, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const incluirTelefono = watch('incluirTelefono');

    return (
        <div className="form-container">
            <div className="form">
                <h2>Formulario</h2>
                <p>Nombre: {watch('nombre')}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Nombre: </label>
                        <input type="text" {...register('nombre', {
                            required: true,
                            maxLength: 20,
                        })} />
                        {errors.nombre?.type === 'required' && <p>Este campo es requerido</p>}
                        {errors.nombre?.type === 'maxLength' && <p>Maximo 20 caracteres</p>}
                    </div>
                    <div>
                        <label>Apellido: </label>
                        <input type="text" {...register('apellido', {
                            required: true,
                            maxLength: 20,
                        })} />
                        {errors.nombre?.type === 'required' && <p>Este campo es requerido</p>}
                        {errors.nombre?.type === 'maxLength' && <p>Maximo 20 caracteres</p>}
                    </div>
                    <div>
                        <label>Direccion: </label>
                        <input type="text" {...register('direccion', {
                            required: true,
                        })} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" {...register('email', {
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        })} />
                        { errors.email?.type === 'pattern' && <p>Email incorrecto</p>}
                    </div>
                    <div>
                        <label>Edad: </label>
                        <input type="number" {...register('edad', {
                            validate: edadValidator,
                        })} />
                        { errors.edad && <p>Debe de estar entre 18 y 65</p>}
                    </div>
                    <div>
                        <label>Pais: </label>
                        <select {...register('pais')}>
                            <option value="es">España</option>
                            <option value="it">Italia</option>
                            <option value="fr">Francia</option>
                        </select>
                    </div>
                    <div>
                        <label>¿Incluir numero telefonico?</label>
                        <input type="checkbox" {...register('incluirTelefono')}/>
                    </div>
                    {incluirTelefono && (
                        <div>
                            <label>Telefono: </label>
                            <input type="text" {...register('telefono')}/>
                        </div>
                    )}
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
};

export default Formulario;

/* si le agregamos:
    {
        defaultValues: {
            nombre: 'Luis',
            direccion: 'Calle 3 # 2-32',
        }
    }
a las () de useForm. lo que hace es poner luis en nombre,
la direccion en la direccion y ya es de que los usuarios lo editen.
no me gusta la verdad. */