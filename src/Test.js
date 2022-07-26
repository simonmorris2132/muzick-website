import React, {useState} from 'react';
import Button from '../common/Button'

const Test = () => {

    const [counter, setCounter] = useState[0]

    const increaseCount = () => {
        setCounter(counter+1)
    }

    return (
        <div>
            <h1>Test Component</h1>
            <p>{counter}</p>
        </div>
        
    )
}

export default Test