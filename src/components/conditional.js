import React from 'react';

// functional component
const Conditional = () => {

    //const value = false;

    const returnValue = () => {
        /////
        return true
    }

    const showIt = () => {
        // using rounded braces to return jsx
        return ( returnValue() ?
            <div>
                Hello, it's true
            </div> 
            :
            <div>
                Hello, it's false
            </div>
        )
    }

    return (
        // rounded to return js and curly to use js expression
        <div>
            { showIt()}
        </div>
    )
}

export default Conditional;