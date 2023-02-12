import React from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { TodoList } from "./TodoList";

export class App extends React.Component {
  render() {
    return (
      <Container title="My App">
        <div>
          <Welcome name="Elga" />
          <TodoList
            render={( items, handleRemoveItem ) => (
              <div>
                {" "}
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>
                      {item}{" "}
                      <button onClick={() => handleRemoveItem(index)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          ></TodoList>
        </div>
      </Container>
    );
  }
}