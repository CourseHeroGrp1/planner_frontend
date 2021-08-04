import "./DeleteSubtab.css"

import { Button, Modal } from "react-bootstrap";
import React, { useContext } from "react";
import AuthContext from "context/auth";
import GlobalContext from "context/global";
import apiClient from "services/apiClient";

export default function DeleteSubtab(props) {

    const { setErrors, setIsLoading} = useContext(AuthContext);
    const { subtabs, setSubtabs } = useContext(GlobalContext);

    const subtab = props.subtab;
    const subtab_id = parseInt(subtab.id);


    //deletes a task from list of tasks
    const deleteSubtab = (deleteSubtab) => {
        setSubtabs(subtabs.filter(filteredSubtab => filteredSubtab.id !== deleteSubtab.id));
        props.updateDirectory("delete", deleteSubtab)
    }
    

    const handleOnDelete = async (event) => {

        event.preventDefault();
        setIsLoading(true);
        setErrors((e) => ({ ...e, form: null }));

        const { data, error } = await apiClient.deleteSubtab(subtab_id);

        if (error) {
            setErrors((e) => ({ ...e, form: error }));
        } else {
            setErrors((e) => ({ ...e, form: null }));
            deleteSubtab(subtab);
        }

        setIsLoading(false);
    }


    return (
        <Modal
            {...props}
            centered
            backdrop="static"
            keyboard={false}
            className="delete-modal"
        >
            <div className="modal-area">
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the subtab: {subtab.name}?

                    <div className="modal-button">
                        <Button onClick={props.onHide} className="del-button">
                            Cancel
                        </Button>
                        <Button type="submit" onClick={handleOnDelete} className="button">
                            Delete {subtab.name}
                        </Button>
                    </div>
                </Modal.Body>
            </div>
        </Modal>
    );

}

