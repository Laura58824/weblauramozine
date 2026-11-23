import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState(false)
  const navigate = useNavigate()

  function entrar(evento) {
    evento.preventDefault()

    if (email.trim() !== '' && senha.trim() !== '') {
      navigate('/admin')
    } else {
      setErro(true)
    }
  }

  return (
    <form onSubmit={entrar}>
      <div className="input-box">
        <label htmlFor="email" className="form-label visually-hidden">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <i className="bx bx-envelope" aria-hidden="true"></i>
      </div>

      <div className="input-box">
        <label htmlFor="senha" className="form-label visually-hidden">Senha</label>
        <input type="password" className="form-control" id="senha" placeholder="Senha"
          value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <i className="bx bx-lock-alt" aria-hidden="true"></i>
      </div>

      <div className="remember-forgot">
        <label><input type="checkbox" />Lembrar senha</label>
        <a href="#">Esqueci minha senha</a>
      </div>

      {/* só aparece se tentar entrar com campo vazio */}
      {erro && <p className="erro-login">Preencha email e senha para continuar.</p>}

      <button type="submit" className="btn login-button">Login</button>

      <div className="register-link">
        <p>Ainda não tem uma conta? <a href="#">Cadastre-se</a></p>
      </div>
    </form>
  )
}

export default LoginForm
