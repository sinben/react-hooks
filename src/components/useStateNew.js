import { useState } from "react";
import React from "react";


const StatefulComponent = props => {
    const initialState = '';
    const [input, setInput] = useState(initialState);

    return (
        <input
            value={input}
            onChange={e => setInput(e.target.value)}
        />
    );
};


