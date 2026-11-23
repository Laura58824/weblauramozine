import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import '../assets/css/login.css'

function Login() {
  return (
    <div className="pagina-login">
      <main className="caixa-login">
        <div className="icone-usuario">
          <i className="bx bxs-user-circle" aria-hidden="true"></i>
        </div>

        <LoginForm />

        <Link to="/" className="voltar">Voltar ao início</Link>
      </main>
    </div>
  )
}

export default Login
