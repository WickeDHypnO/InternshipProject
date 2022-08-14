import React from "react";
import {ToDo} from "../defines";

class ToDoList extends React.PureComponent {
    private todos: Array<ToDo> = [];
    private mounted = false;
    constructor(props: any) {
        super(props);
        this.updateList();
    }

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
       this.mounted = false;
    }

    updateList() {
        fetch(window.location.origin + ':8080/api/ToDoItems')
            .then(response => response.json())
            .then((data: Array<ToDo>) => {
                this.todos = data;
                if(this.mounted)
                this.forceUpdate();
            })
    }

    changeToDo(id: number, name: string, completed: boolean) {
        console.log("changed " + id + " with value " + completed);
        const send: ToDo = {id: id, isComplete: completed, name: name};
        fetch(window.location.origin + ':8080/api/ToDoItems/' + id, {
            method: 'PUT',
            body: JSON.stringify(send),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => this.updateList());
    }

    deleteToDo(id: number) {
        fetch(window.location.origin + ':8080/api/ToDoItems/' + id, {
            method: 'DELETE'
        }).then(() => this.updateList());
    }


    render() {
        return (<div>
            {
                this.todos.map(todo => {
                return (<li key={todo.id}>
                    {todo.name}
                    <input type="checkbox" defaultChecked={todo.isComplete} onChange={(e) => this.changeToDo(todo.id, todo.name, e.target.checked)}/>
                    <button onClick={(e) => this.deleteToDo(todo.id)}>X</button>
                </li>);
             })
            }
        </div>)
    }

}

export default ToDoList;