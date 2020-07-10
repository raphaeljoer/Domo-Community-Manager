import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  border-radius: 10px;
  border: none;

  font-weight: 500;

  padding: 16px;
  margin-top: 16px;

  height: 56px;
  width: 100%;
  color: #312e38;
  background: #ff9000;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
