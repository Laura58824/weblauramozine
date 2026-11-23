// escolhe a cor do badge de acordo com o status
function StatusBadge({ status }) {
  let cor = 'text-bg-secondary'
  if (status === 'Ativo') cor = 'text-bg-success'
  else if (status === 'Pendente') cor = 'text-bg-warning'

  return <span className={'badge ' + cor}>{status}</span>
}

export default StatusBadge
