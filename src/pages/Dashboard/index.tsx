import React, { useEffect, useState } from 'react';

// import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import Header from '../../components/Header';
import Contracts from '../../components/Contracts';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  // const { signOut, user } = useAuth();
  interface User {
    name: string;
    avatar: string;
    email: string;
  }
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

  const [contracts, setContracts] = useState<Contract[]>([]);
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    async function loadUser(): Promise<void> {
      const { data } = await api.get('/users/e4567-e89b-12d3-a456');
      setUser(data);
    }
    loadUser();
  }, []);

  useEffect(() => {
    async function loadContracts(): Promise<void> {
      const { data } = await api.get('/contracts');
      setContracts(data);
    }
    loadContracts();
  }, []);

  return (
    <Container>
      <Header user={user} />
      <Content>
        <Contracts contracts={contracts} />
      </Content>
    </Container>
  );
};

export default Dashboard;

// landim.arthur@gmail.com
// 13qe!#QE
