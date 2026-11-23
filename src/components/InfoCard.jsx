// card de texto da página inicial ("Sobre o Levaê", "Como funciona")
function InfoCard({ titulo, children }) {
  return (
    <div className="col-12 col-lg-6">
      <div className="card h-100">
        <div className="card-body p-4">
          <h2 className="h4 card-title mb-3">{titulo}</h2>
          {children}
        </div>
      </div>
    </div>
  )
}

export default InfoCard
