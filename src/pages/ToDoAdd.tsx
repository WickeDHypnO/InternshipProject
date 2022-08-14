import React from "react";
import {ToDo} from "../defines";

class ToDoAdd extends React.Component {

    todoName: string = "";

    addToDo() {
        const send: ToDo = {id: 0, isComplete: false, name: this.todoName};
        fetch(window.location.origin + ':8080/api/ToDoItems', {
            method: 'POST',
            body: JSON.stringify(send),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    render () {
        return <>
            Name: <input onChange={evt => this.todoName = evt.target.value} type="text"/>
            <button onClick={(e)=> this.addToDo()} >Add</button>
        </>
    }
}

export default ToDoAdd;