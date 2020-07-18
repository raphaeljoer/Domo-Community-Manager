import React from 'react';
import { FiPower } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Header, HeaderContent, Profile } from './styles';

interface User {
  name: string;
  avatar: string;
  email: string;
}

interface Props {
  user: User;
}

const Contracts: React.FC<Props> = ({ user }: Props) => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Domo by Elephant" />
          <Profile>
            <img src={user.avatar} alt={user.name} />
            <div>
              <span>Bem vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Contracts;
