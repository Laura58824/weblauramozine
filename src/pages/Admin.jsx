import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserTable from '../components/UserTable'
import '../assets/css/admin.css'

const usuarios = [
  { id: 1, nome: 'Laura Pereira Mozine', email: 'laura.mozine@email.com', status: 'Ativo' },
  { id: 2, nome: 'Bruna Mendes Lima', email: 'bruna.mendes@email.com', status: 'Ativo' },
  { id: 3, nome: 'Fernanda Lima Oliveira', email: 'fernanda.oliveira@email.com', status: 'Pendente' },
  { id: 4, nome: 'Ricardo Almeida Souza', email: 'ricardo.souza@email.com', status: 'Inativo' },
  { id: 5, nome: 'Juliana Costa Ferreira', email: 'juliana.ferreira@email.com', status: 'Ativo' },
]

function Admin() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header titulo="Painel Administrativo" subtitulo="Levaê · admin" />

      <main className="conteudo flex-grow-1">
        <UserTable usuariosIniciais={usuarios} />
        <Link to="/" className="voltar">&larr; Voltar ao início</Link>
      </main>

      <Footer />
    </div>
  )
}

export default Admin
