import React from 'react';
import {Link} from 'react-router-dom';
function Roberts(){
    return(
        <div>
            {/*Link handles routing only in the browser*/}
            <Link to="/form">Form</Link>
        </div>
    );
}

export default Roberts;