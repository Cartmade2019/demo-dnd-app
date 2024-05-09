import React, { useState } from "react";
import "./Input.css";
import {Text} from '@shopify/polaris';

export const Input = ({ onSubmit }) => {

    const [input,setInput] = useState("Stock");
    const [inputmeta,setInputmeta] = useState("stock");
    const handleSubmit = (event) => {
        if(!input) return;
        onSubmit(input,inputmeta);
        const element = event.target;
        element.disabled = true;
    };
    const [input1,setInput1] = useState("Color");
    const [inputmeta1,setInputmeta1] = useState("color");
    const handleSubmit1 = (event) => {
        if(!input1) return;
        onSubmit(input1,inputmeta1);
        const element = event.target;
        element.disabled = true;
    };
    const [input2,setInput2] = useState("Availability");
    const [inputmeta2,setInputmeta2] = useState("availability");
    const handleSubmit2 = (event) => {
        if(!input2) return;
        onSubmit(input2,inputmeta2);
        const element = event.target;
        element.disabled = true;
    };
    return (
        <div className="filters-list">
            <Text variant="headingXl" as="h4">
                 Available Filters
            </Text>
            <Text variant="headingXs" as="h6">
                Select the options to show as filter.
            </Text>
            
        <div className="options-container">
           <div className="option">
                <input type="text" readOnly className="input" value="{input}" onChange={e=>setInput(e.target.value)} />
                <button onClick={handleSubmit} data-name={input}  className="button">{input}</button>
           </div>
           <div className="option">
                <input type="text" readOnly className="input" value="{input1}" onChange={e=>setInput1(e.target.value)} />
                <button onClick={handleSubmit1} data-name={input1}  className="button">{input1}</button>
           </div>
           <div className="option">
                <input type="text" readOnly className="input" value="{input2}" onChange={e=>setInput2(e.target.value)} />
                <button onClick={handleSubmit2} data-name={input2}  className="button">{input2}</button>
           </div>
        </div>
    </div>
    )
};