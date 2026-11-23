import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InfoCard from '../components/InfoCard'
import FeatureCard from '../components/FeatureCard'
import Cidades from '../components/Cidades'

const vantagens = [
  { icone: 'bx-map-pin', titulo: 'Práticas', texto: 'Simplifique a busca por viagens e destinos na região.' },
  { icone: 'bx-wallet', titulo: 'Acessíveis', texto: 'Torne os deslocamentos entre cidades mais econômicos.' },
  { icone: 'bx-group', titulo: 'Colaborativas', texto: 'Compartilhe o caminho com quem vai para o mesmo destino.' },
]

const cidades = ['Irecê', 'Presidente Dutra', 'São Gabriel', 'Canarana', 'América Dourada', 'Barra do Mendes', 'Morro do Chapéu']

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header titulo="Levaê" subtitulo="Conectando pessoas e facilitando caminhos.">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/login" className="btn btn-primary btn-lg px-4">Encontrar caronas</Link>
          <Link to="/login" className="btn btn-outline-light btn-lg px-4">Quero oferecer carona</Link>
        </div>
      </Header>

      <main className="container my-5 flex-grow-1">
        <div className="row g-4 mb-5">
          <InfoCard titulo="Sobre o Levaê">
            <p className="card-text">
              O Levaê é uma plataforma web que conecta passageiros e motoristas, facilitando o
              compartilhamento de caronas entre Irecê e cidades da região.
            </p>
            <p className="card-text mb-0">
              A proposta é tornar os deslocamentos mais práticos, acessíveis e colaborativos,
              aproximando quem precisa viajar de quem já está indo para o mesmo destino.
            </p>
          </InfoCard>
          <InfoCard titulo="Como funciona">
            <p className="card-text mb-0">
              Motoristas cadastram suas rotas e passageiros encontram caronas disponíveis para os
              trajetos que precisam fazer.
            </p>
          </InfoCard>
        </div>

        <h2 className="h4 mb-3">Por que usar o Levaê?</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {vantagens.map((v) => (
            <FeatureCard key={v.titulo} icone={v.icone} titulo={v.titulo} texto={v.texto} />
          ))}
        </div>

        <Cidades lista={cidades} />
      </main>

      <Footer />
    </div>
  )
}

export default Home
