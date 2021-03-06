import React from 'react';
import './TodoListTemplate.css';
import './Palette.css';

const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
            Member list
            </div>
            <div className="palette">
                <div className="color active">#343a40</div>
                <div className="color">#f03e3e</div>
                <div className="color">#12b886</div>
                <div className="color">#228ae6</div>
            </div>
            <section className="form-wrapper">
                { form }
            </section>
            <section className="todos-wrapper">
                { children }
            </section>
        </main>
    )
}

export default TodoListTemplate;