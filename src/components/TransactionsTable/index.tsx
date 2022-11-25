import { useEffect } from 'react';
import { api } from '../../services/api';
import * as S from './styles';

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])
  
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>£ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/12/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de sistemas</td>
            <td className='deposit'>£ 22.000</td>
            <td>Desenvolvimento</td>
            <td>08/12/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- £ 1.000</td>
            <td>Casa</td>
            <td>12/12/2022</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  )
}