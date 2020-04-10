import { useState } from 'react';

export const useBooleanState = ({
    initialState = false,
    useStateDep = useState,
} = {}) => {
    if(typeof initialState !== "boolean")
        throw new Error("'initilState' was set as a non-boolean value");

    const [booleanState, setBooleanState] = useStateDep(initialState);

    const toggle = () => setBooleanState(!booleanState);
    const setTrue = () => setBooleanState(true);
    const setFalse = () => setBooleanState(false);

    return {
        value: booleanState,
        toggle,
        setTrue,
        setFalse,
    };
};