import Navbar from './Navbar'

// cabeçalho reutilizável: muda o título/subtítulo e o que vem dentro (children)
function Header({ titulo, subtitulo, children }) {
  return (
    <header className="bg-azul-escuro hero">
      <Navbar />
      <div className="container text-center text-white py-5">
        <h1 className="display-4 fw-bolder">{titulo}</h1>
        <p className="lead text-white-50 mb-4">{subtitulo}</p>
        {children}
      </div>
    </header>
  )
}

export default Header
