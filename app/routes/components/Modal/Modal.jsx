import React, { useState } from "react";
import {TextField} from '@shopify/polaris';
import "./Modal.css";


export const Modal = ({id,title,metakey}) => {
    const [newtitle, setNewtitle] = useState(title);
    const modalid = "my_modal_"+metakey;

    const handletitleChange = (event) => {
        setNewtitle(event.target.value)
    }
    const handleClosemodal = () =>{
        document.getElementById(modalid).hide();
    }
    return (
    <div className="modal">
        <ui-modal id={modalid} variant="large" >
            <div className="modal-form">

                <TextField label="Field name" value={metakey} disabled autoComplete="off" />
                <TextField
                    label="Display name"
                    value={title}
                    onChange={handletitleChange}
                    helpText="The filter name that will be displayed in the filter panel."
                    autoComplete="off"
                    />
            </div>
            {/* <p>id:{id} title:{title} meta:{metakey}</p> */}
            <ui-title-bar title="Filter Settings">
                <button variant="primary" onClick={handleClosemodal}>Cancel</button>
                <button >Submit</button>
            </ui-title-bar>
        </ui-modal>
    </div>
    )
};