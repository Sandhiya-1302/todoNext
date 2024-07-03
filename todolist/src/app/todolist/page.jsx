"use client";
import React, { useState } from "react";
import './styles/todo.css';
import ListGroup from 'react-bootstrap/ListGroup';

export default function TodoList() {
    const [list, setList] = useState(false);
    const [inputValue, setInputValue] = useState('');


    const [items, setItems] = useState([]);

   
    const handleAddClick = () => {
        if (inputValue.trim() !== '') {  
            setItems([...items, inputValue]);  
            setInputValue('');  
            setList(true);  
        }
    }

    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }


    const handleDeleteItem = (index) => {
        let updatedItems = [...items];
        // updatedItems.splice(index, 1);
        // setItems(updatedItems);

        updatedItems = updatedItems.filter((item, i) => i !== index);
        setItems(updatedItems);

    }

    return (
        <div className="container">
            <div className="todo-list">
                <h1 style={{textAlign: 'center'}}>Todo List</h1>
                <div className="input">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="inputBox"
                    />
                    <button className="addBtn" onClick={handleAddClick}>Add</button>
                </div>
            </div>

            <div className="list-items">
                <div className="li-container">
                {list ? (
                    <ListGroup variant="flush" >
                        {items.map((value, index) => (
                            <ListGroup.Item key={index} as="li" style={{backgroundColor: 'rgba(227, 223, 237, 0.646)'}}>
                                {value} 
                                <div className="icon">
                                <span style={{cursor: 'pointer'}} onClick={() => handleDeleteItem(index)}>
                                    <i className="bi bi-x"></i>
                                </span>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                ) : (
                    "Hello"
                )}
            </div>
            </div>
        </div>
    );
}
