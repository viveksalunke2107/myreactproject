
import React from 'react'

const MyMemoComp = (props) => {
    console.log("this is memo componewnt");
    return (
        <div>
            <h2>This is memo  Component</h2>
                <div>Name : <strong>{props.name}</strong></div>
        </div>
    )
}

export default React.memo(MyMemoComp);

