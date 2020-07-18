import React from 'react';

import { FiFileText } from 'react-icons/fi';
import formatValue from '../../utils/formatValue';

import {
  Container,
  ContractsTableList,
  ContractsWidget,
  ContractsContent,
  HeaderWidget,
} from './styles';

interface Client {
  id: string;
  company: string;
  accountable_name: string;
  phone: string;
  email: string;
}

interface Contract {
  id: string;
  value: number;
  available: boolean;
  expires_in_days: number;
  expires_on: Date;
  created_at: Date;
  client: Client;
}

interface Props {
  contracts: Contract[];
}

const Contracts: React.FC<Props> = ({ contracts }: Props) => {
  return (
    <Container>
      <ContractsWidget>
        <HeaderWidget>
          <div id="head-infos">
            <h2>Contratos expirando</h2>
            <p>
              <FiFileText color="#999591" />
              12 contratos
            </p>
          </div>
          <div id="head-actions">
            <button type="button">ver contratos</button>
          </div>
        </HeaderWidget>
        <ContractsContent>
          <ContractsTableList>
            <thead>
              <tr className="header">
                <th className="column01 head">Responsável</th>
                <th className="column02 head">Valor</th>
                <th className="column03 head">Início</th>
                <th className="column04 head">Termina</th>
                <th className="column05 head">Expira</th>
              </tr>
            </thead>
            <tbody>
              {contracts &&
                contracts.map((contract: Contract) => (
                  <tr key={contract.id} className="row">
                    <td className="column01">
                      <strong>{contract.client.accountable_name}</strong>
                      <span>{contract.client.company}</span>
                    </td>
                    <td className="column02 div">
                      {formatValue(contract.value)}
                    </td>
                    <td className="column03 div">{contract.created_at}</td>
                    <td className="column04 div">
                      {contract.expires_in_days} dias
                    </td>
                    <td className="column05 div">{contract.expires_on}</td>
                  </tr>
                ))}
            </tbody>
          </ContractsTableList>
        </ContractsContent>
      </ContractsWidget>
    </Container>
  );
};

export default Contracts;
