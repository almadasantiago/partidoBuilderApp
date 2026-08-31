import './LoginPage.css'

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon-user"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="login-field">
            <input
              type="text"
              placeholder="Usuario"
              className="login-input"
            />
          </div>

          <div className="login-field">
            <input
              type="password"
              placeholder="Contraseña"
              className="login-input"
            />
          </div>

          <button type="submit" className="login-btn login-btn-primary">
            INICIAR SESIÓN
          </button>

          <button type="button" className="login-btn login-btn-secondary">
            REGISTRARSE
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage