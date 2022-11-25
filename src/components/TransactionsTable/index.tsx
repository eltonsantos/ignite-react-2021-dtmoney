import * as S from './styles';

export function TransactionsTable() {
  return (
    <S.Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/12/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de sistemas</td>
            <td className='deposit'>R$ 22.000</td>
            <td>Desenvolvimento</td>
            <td>08/12/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$ 1.000</td>
            <td>Casa</td>
            <td>12/12/2022</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  )
}