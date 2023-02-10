import React from 'react'
import { useState } from "react";

export const Form = ({ addTodo }) => {

    const [inputValue, setInputValue] = useState("");
    const [id, setID] = useState() 
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setID (Math.floor(Math.random() * 99))
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === "") return;

        addTodo({ title: inputValue, completed: false,id });
        setInputValue("");
    };
    return (
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column nine wide">
                        <input
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Enter something to do..."
                        />
                    </div>
                    <div className="column one wide">
                        <button type="submit" className="ui button rectangle icon black"><i className="white plus icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default Form;