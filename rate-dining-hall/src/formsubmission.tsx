import React from 'react';
function FormSubmission(props:any){
    return(
        <div>
             <div>{props.contents}</div>
            {/* <div>{JSON.stringify(props.contents)}</div> */}
        </div>
       
    )
}
export default FormSubmission;