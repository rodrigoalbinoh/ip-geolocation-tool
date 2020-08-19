import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #f2f2f2;
    
    > span {
      color: #02aaff;
    }
  }

  form {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;

    input {
      padding: 10px;
      border: none;
      margin-right: 15px;
      width: 70%;
    }

    button {
      background: #02aaff;
      color: #FFF;
      padding: 10px;
      border: none;
    }
  }

`;

export const ResultContainer = styled.div`
  width: 80%;
  background: #171717;
  border-radius: 20px;
  margin-top: 25px;
  padding: 15px;
  text-align: center;
  
  > span {
    color: #f2f2f2;
    font-size: 32px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;


    div {
      width: 50%;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      span, strong {
        color: #f2f2f2;
        text-align: center;
      }
    }

  }
`;
