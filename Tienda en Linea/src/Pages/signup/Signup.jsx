
import useForm from "../../Components/hooks/useForm.jsx"
import { registerUserService } from "../../services/userServices"

export default function Signup() {
// Paso 1. Crear un objeto con los valires uniciales
const datosPorDefecto ={
  first_name: '',
  last_name: '',
  gener: '',
  email: '',
  password: '',
  roles: '',
  color: '#00000'
}

//Paso 2, crear una funcion que se va a ejecutar cuando haga click en boton "Registrate"
const enviarDatos = (datos) => {
  registerUserService(datos)
    .then((respuesta)=> console.log(respuesta.data))
    .catch((error)=> console.error(error.message))
}

// Paso 3. Usar mi custom
const {formData, handleInputChange, handleSubmit } = useForm
  (datosPorDefecto, enviarDatos)

  return (
    <div>
      <div className="form-container">
        <h1 className="form-container__title">Sign Up.</h1>
        <form onSubmit={()=>{}} className="form">
          <div className="form__form-group">
            <label htmlFor='first_name' className="form__form-group__label">Nombre</label>
            <input
              type='text'
              name='first_name'
              placeholder='Tu nombre'
              id='first_name'
              value={formData.first_name}
              onChange={(handleInputChange)=>{}}
              className="form__form-group__input"
            />
          </div>
          <div className="form__form-group">
            <label htmlFor='last_name' className="form__form-group__label">Apellido</label>
            <input
              type='text'
              name='last_name'
              placeholder='Tu apellido'
              id='last_name'
              value={formData.last_name}
              onChange={()=>{}}
              className="form__form-group__input"
            />
          </div>
          <div className="form__form-group">
            <label htmlFor='email' className="form__form-group__label">Email</label>
            <input
              type='text'
              name='email'
              placeholder='correo@mail.com'
              id='email'
              value={formData.email}
              onChange={(handleInputChange)=>{}}
              className="form__form-group__input"
            />
          </div>
          <div className="form__form-group">
            <label htmlFor='password' className="form__form-group__label">Password</label>
            <input
              type='password'
              name='password'
              id='password'
              value={formData.password}
              onChange={()=>{}}
              className="form__form-group__input"
            />
          </div>
          <div className="form__form-group">
            <label htmlFor='role' className="form__form-group__label">Role</label>
            <select name='role' id='role' value={formData.roles} onChange={(handleInputChange)=>{}}>
              <option value=''>Elige un tipo de usuario</option>
              <option value='CUSTOMER'>Cliente</option>
              <option value='ADMIN'>Administrador</option>
            </select>
          </div>
          <div className="form__form-group">
            <button type='submit' className="form__form-group__button">
              Regístrate
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}