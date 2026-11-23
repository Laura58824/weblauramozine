import { useState } from 'react'
import StatusBadge from './StatusBadge'

function UserTable({ usuariosIniciais }) {
  const [usuarios, setUsuarios] = useState(usuariosIniciais)

  function excluir(id) {
    setUsuarios(usuarios.filter((u) => u.id !== id))
  }

  return (
    <section className="painel">
      <h2>Usuários cadastrados</h2>

      {usuarios.length === 0 ? (
        <p className="text-secondary mb-0">Nenhum usuário cadastrado.</p>
      ) : (
        <div className="table-responsive tabela-wrapper">
          <table className="table table-striped table-hover tabela-usuarios">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.nome}</td>
                  <td>{u.email}</td>
                  <td><StatusBadge status={u.status} /></td>
                  <td className="acoes">
                    <button className="btn btn-editar" type="button">Editar</button>
                    <button className="btn btn-excluir" type="button" onClick={() => excluir(u.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default UserTable
