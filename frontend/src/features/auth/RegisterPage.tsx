import { useNavigate } from 'react-router-dom'
import Input from '../../shared/components/Input'
import Button from '../../shared/components/Button'
import './RegisterPage.css'

function RegisterPage() {
  const navigate = useNavigate()

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon-user"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        <form className="register-form" onSubmit={(e) => e.preventDefault()}>
          <Input type="text" placeholder="Nombre completo" />
          <Input type="email" placeholder="Email" />
          <Input type="tel" placeholder="Teléfono" />
          <Input type="password" placeholder="Contraseña" />

          <Button type="submit" variant="primary">
            REGISTRARSE
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate('/login')}
          >
            ¿YA TENÉS CUENTA? INICIAR SESIÓN
          </Button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage