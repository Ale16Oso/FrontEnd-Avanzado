import { useState } from "react"

export default function Login() {
    //Paso 2: Crear estados para guardar los valores del formulario
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mostrarPassword, setMostrarPassword] = useState(false)

    // Paso 4: Crear una funcion que se ejecutará cuando se envie el formulario
    const handleSubmit = (event) => {
        event.preventDefault()
        const datosEnviados = {
            email,
            password
        }
        console.log(datosEnviados)
        setEmail('')
        setPassword('')
    }

    //Paso 1: Crear formulario base
      return (
        <div>
          <div>
            <h1>Inicia tu sesión</h1>
            <form onSubmit={() => {}}>
                {/*Paso 3: Guardar cada cambio de cada input en su estado correspondiente */}
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="correo@mail.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input 
                    type={mostrarPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(evento) => setPassword(evento.target.value)}
                />
                <button type="button" onClick={() => setMostrarPassword(!mostrarPassword)}>
                    {mostrarPassword ? 'ocultar' : 'mostrar'}
                </button>
            </div>
                <div>
                    <button type="submit">
                        Iniciar Sesión
                    </button>
                </div>
            </form>
          </div>
        </div>
      )
    }