import styled from "styled-components";


export const WrapperTodo = styled.div`
  display: block;
`;

export const Title = styled.h3`
  font-size: 40px;
  font-family: "Orbitron", sans-serif;
  justify-content: center;
  font-weight: 700;
  color: var(--color-white);
  margin-top: 25rem;
  text-align: center;
`;

export const InputTitle = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 8rem;
  margin-bottom: 5rem;
  font-size: 20px;

  &::placeholder {
    font-size: 15px;
    font-family: "Orbitron", sans-serif;
    font-weight: 700;
    text-align: center;
  }
`;

export const Filter = styled.div`
  display: flex;
  margin: 5rem auto;
  margin-right: 370px;
  width: 100px;
  justify-content: center;
  margin-top: 40rem;
`;

export const Item = styled.label`
  width: 400px;
  height: 40px;
  font-size: 15px;
  margin-right: 5rem;
  background: var(--color-gray-light);
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  margin-right: 8rem;
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 500px;
  padding: 5px;
  background-color: var(--color-gray-light);
  border-radius: 10px;
  box-shadow: 6px 5px 10px 0px var(--color-black-dark);
  
  @media (max-width: 613px) {
    width: 400px;
  }
`;

export const ButtonAdd = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 8rem;
  background-color: var(--color-yellow);
  border-radius: 18rem;
  font-size: 13px;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonDelete = styled.button`
  width: 50px;
  height: 40px;
  margin-left: 8rem;
  background-color: var(--color-yellow);
  border-radius: 18rem;
  font-size: 13px;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const WrapperCase = styled.div`
  //width: 50%;
  justify-content: center;
  margin: 5rem 5rem;

  @media (max-width: 816px) {
    ${ButtonAdd}, ${ButtonDelete}{
      width: 50px;
    }
  }

  @media (max-width: 613px) {
    ${ButtonAdd}, ${ButtonDelete}{
      width: 40px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 40rem;
  justify-content: center;

  @media (max-width: 613px) {
    display: block;
    margin-left: 10rem;
    margin-right: 10rem;
    ${WrapperCase} {
      width: 100%;
      ${ButtonAdd}, ${ButtonDelete}, ${InputTitle}{
        margin-right: 10px;
        margin-left: 10px;
      }
    }
  }
`;

export const WrapperListed = styled.div`
  display: block;
  width: 50%;

  @media (max-width: 816px) {
    ${Title} {
      width: 300px;
    }
  }

  @media (max-width: 613px) {
    ${Title} {
      width: 250px;
    }
  }
`;

export const WrapperItem = styled.div`
  display: flex;
  width: 450px;
  margin-top: 20rem;
  height: 50rem;
  padding: 5px;
  background-color: var(--color-gray-light);
  border-radius: 10px;
  box-shadow: 6px 5px 10px 0px var(--color-black-dark);

  @media (max-width: 613px) {
    width: 400px; 
  }
  
`;
