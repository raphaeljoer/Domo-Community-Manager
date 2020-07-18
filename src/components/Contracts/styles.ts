import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100%;
  margin: 0 15px; */
`;

export const ContractsWidget = styled.div`
  width: 100%;
  margin: 0 15px;
`;

export const HeaderWidget = styled.div`
  display: flex;

  div#head-infos {
    h2 {
      font-size: 36px;
    }

    p {
      display: flex;
      align-items: center;
      margin-top: 16px;

      svg {
        margin-right: 8px;
      }
    }
  }

  div#head-actions {
    margin-left: auto;

    button {
      color: #e5e5e5;
      width: 140px;
      height: 50px;
      background: #3e3b47;
      border-radius: 8px;
    }
  }
`;

export const ContractsContent = styled.div`
  margin-top: 40px;
`;

export const ContractsTableList = styled.table`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #999591;

  width: 100%;

  .header {
    display: flex;
    margin-bottom: 16px;

    th {
      font-size: 16px;
      font-weight: 400;
    }

    .column01 {
      text-align: left;
    }
  }

  .row {
    display: flex;
    margin-bottom: 16px;
    height: 102px;
    background: #3e3b47;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
      content: '';
      background: #e2f434;
      border-radius: 50%;
      position: absolute;
      height: 80%;
      width: 2px;
      left: 0;
      top: 10%;

      &:hover {
        background: #fff;
      }
    }
  }

  .column01 {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 40px;

    strong {
      font-size: 24px;
      color: #f4ede8;
      font-weight: 700;
      text-transform: uppercase;
    }

    span {
      margin-top: 5px;
      font-size: 16px;
      color: #828282;
    }
  }

  .column02 {
    width: 170px;
  }

  .column03 {
    width: 170px;
  }

  .column04 {
    width: 137px;
  }

  .column05 {
    width: 160px;
  }

  .div {
    display: flex;
    align-items: center;
    text-align: center;
  }

  .div::before {
    content: '';
    width: 1px;
    height: 90px;
    background: #312e38;
    margin-right: 40px;
    border-right: 1px solid #494554;
    border-radius: 50%;
  }
`;
