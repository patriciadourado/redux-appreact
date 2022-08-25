import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../actions/index";
import {
  ButtonAdd,
  ButtonDelete,
  Checkbox,
  Container,
  ContainerButton,
  Filter,
  InputTitle,
  Item,
  Title,
  WrapperCase,
  WrapperItem,
  WrapperTodo,
} from "./styles";

function CaseList() {
  
  const [inputData, setInputData] = useState('');
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <WrapperTodo>
      <Title >To do List</Title>
      <Title>{!data ? "Loading..." : data}</Title>
      <Filter>
        <select name="isComplete">
          <option value="all">all</option>
          <option value="incomplete">incomplete</option>
          <option value="complete">complete</option>
        </select>
      </Filter>
      <Container>
        <WrapperCase>
          <ContainerButton>
            <InputTitle
              type="text"
              placeholder="Write your item"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
              required
            ></InputTitle>

            <ButtonAdd type="button" alt="Add Todo" onClick={() => dispatch(addTodo(inputData),
                                                            setInputData(''))}>
              <i className='bx bx-plus'></i> Item
            </ButtonAdd>
          </ContainerButton>

            {
              list.map((elem) => {
                return(
                  <WrapperItem>
                    <Checkbox type="checkbox"/>
                    <Item key={elem.id}> {elem.data} </Item>
                    <ButtonDelete type="button" alt="delete Todo" onClick={() => dispatch(deleteTodo(elem.id),
                      setInputData(''))}>
                      <i className='bx bxs-trash-alt'></i>
                    </ButtonDelete>
                  </WrapperItem>
                )
              })
            }
          
        </WrapperCase>
      </Container>
    </WrapperTodo>
  );
}

export default CaseList;


