import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  // controla se o menu está aberto no celular (antes era o JS do bootstrap)
  const [aberto, setAberto] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Levaê</Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="menuPrincipal"
          aria-expanded={aberto}
          aria-label="Abrir menu"
          onClick={() => setAberto(!aberto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={aberto ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="menuPrincipal">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/" end>Início</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
