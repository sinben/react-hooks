import React, {useEffect, useState} from "react";

const  EffectfulComponentNew = props => {
    const initialState = '';
    const [input, setInput] = useState(initialState);

    useEffect(() => {
        document.title = input;
    },[input])


    return (
        <input
            value={input}
            onChange={e => setInput(e.target.value)}
        />
    );
};


export default EffectfulComponentNew;
