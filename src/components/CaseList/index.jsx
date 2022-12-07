import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonAdd,
  ButtonDelete,
  Checkbox,
  Container,
  ContainerButton,
  InputTitle,
  Item,
  Title,
  WrapperCase,
  WrapperItem,
  WrapperTodo,
} from "./styles";

function addItemAction(title, id) {
  return { type: "ADD_ITEM", title, id};
}

function deleteItemAction(title, id) {
  return { type: "DELETE_ITEM", title, id };
}

function CaseList() {
  
  //const ids = useSelector((state) => state.ids);
  const titles = useSelector(state => state.titles);

  const dispatch = useDispatch();
  
  var i = 1;
  const [itemTitle, setItemTitle] = useState('');
  const [itemId, setItemId] = useState(0);

  const handleTitleChange = (e) => {
    setItemTitle(e.target.value);
    setItemId(i++);
  };

  function addItem() {
    dispatch(addItemAction(itemTitle, itemId));
  }

  function deleteItem(title, id) {
    dispatch(deleteItemAction(title, id));
  }
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
      <Container>
        <WrapperCase>
          <ContainerButton>
            <InputTitle
              type="text"
              placeholder="Write your item"
              value={itemTitle}
              onChange={handleTitleChange}
              required
            ></InputTitle>

            <ButtonAdd type="button" alt="Add Todo" onClick={addItem}>
              <i className='bx bx-plus'></i> Item
            </ButtonAdd>
          </ContainerButton>

          {titles.map((title, index) => (
            <WrapperItem key={index}>
              <Checkbox type='checkbox' id={title} name={title}/>
              
              <Item key={index}> {title} </Item>
              <ButtonDelete type="button" alt="Add Todo" onClick={deleteItem(title, index)}>
                <i className='bx bxs-trash-alt'></i>
              </ButtonDelete>
            
            </WrapperItem>
          ))}
        </WrapperCase>
      </Container>
    </WrapperTodo>
  );
}

export default CaseList;


