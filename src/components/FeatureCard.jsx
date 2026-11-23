// card com ícone da seção "Por que usar o Levaê?"
function FeatureCard({ icone, titulo, texto }) {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body p-4">
          <span className="icone-card mb-3"><i className={'bx ' + icone} aria-hidden="true"></i></span>
          <h3 className="h5">{titulo}</h3>
          <p className="card-text text-secondary mb-0">{texto}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
