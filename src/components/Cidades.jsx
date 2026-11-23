function Cidades({ lista }) {
  return (
    <>
      <h2 className="h4 mb-3">Cidades atendidas</h2>
      <div className="d-flex flex-wrap gap-2">
        {lista.map((cidade, i) => (
          // a primeira cidade (Irecê) fica destacada
          <span
            key={cidade}
            className={i === 0
              ? 'badge rounded-pill text-bg-primary fs-6 fw-medium'
              : 'badge rounded-pill text-bg-light border fs-6 fw-medium'}
          >
            {cidade}
          </span>
        ))}
      </div>
    </>
  )
}

export default Cidades
