import React, { useState } from "react";
import "./App.css"

import Form from "./components/Form";
import List from "./components/List";
import  Section  from "./components/Section";

const appTitle = "To Do List";

const list = [
  { title: "test #1", completed: false, id: 1 },
  { title: "test #2", id: 2 },
  { title: "test #3", id: 3 },
  // { title: "test #4", id: 4 },
  // { title: "test #5", id: 5 },
  // { title: "test #6", id: 6 },
];
function App() {
  const [todoList, setTodoList] = useState(list);

  const addTodo = (item) => {
    setTodoList((oldlist) => [...oldlist, item]);
  };

  const removeTodo = (id) => {
    setTodoList((oldlist) =>
      oldlist.filter((item) => {
        return item.id !== id;
      })
    );
  };
  return (
    <div className="ui container center aligned fluid">
    
      <Section>
          <h1 className="title">
            {appTitle}
          </h1>
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>
      
      <Section>
        <List list={todoList} removeTodoListProp={removeTodo} />
      </Section>
    </div>
  );
}

export default App;