import React from 'react';

import userHoc from  '../hoc/userHoc';

const User = (props) => {
    console.log(props)
    return (
        <div>
            User 1
        </div>
    )
}

const User2 = (props) => {
    console.log(props)
    return (
        <div>
            User 2
        </div>
    )
}

// not exporting these comps but INSTEAD export userHOC and pass these comps as args
export default userHoc(User,User2,'Hello'); // this is what other compos get when import this one with any name (since i'ts drfault)//