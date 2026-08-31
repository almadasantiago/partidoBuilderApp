import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="footer-logo">PartidoBuilder</h3>
        </div>
        <div className="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><Link to="/login">Iniciar sesión</Link></li>
            <li><Link to="/login">Registrarse</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 PartidoBuilder. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer