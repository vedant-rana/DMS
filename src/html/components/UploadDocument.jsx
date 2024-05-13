import React, { useState } from 'react'
import { useEffect } from 'react';
import { uploadDoc } from '../../Actions/docAction'

const UploadDocument = ({ parent_id, uploadFile, setUploadFile }) => {
    const handleUpload = (e) => {
        const files = e.target.files;
        const formData = new FormData();

        formData.append('parent_id', parent_id ? parent_id : null);

        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        setTimeout(() => {
            setUploadFile(!uploadFile);
        }, 1000)
        uploadDoc(formData);
    }

    // useEffect(() => {
    //     if (!parent_id) {
    //         parent_id = null;
    //     }
    // }, [parent_id]);


    // const [selectedFiles, setSelectedFiles] = useState([]);

    // const handleUpload = async (e) => {
    //     setSelectedFiles([...e.target.files]);
    //     await 
    //     if (selectedFiles) {
    //         const formData = new FormData();

    //         selectedFiles.forEach((file, index) => {
    //             formData.append(`file${index}`, file);
    //         });

    //         setTimeout(() => {
    //             uploadDoc(formData);
    //         }, 5000);
    //     }
    // }
    return (
        <>
            <input type="file" multiple id="Documents" name="document" style={{ display: "none" }} onChange={handleUpload} accept='.jpg, .jpeg, .png, .pdf, .docx, .pptx' />
            <label htmlFor="Documents">
                <div className="file">
                    <span className="plus">+</span>
                    <span>upload file</span>
                </div>
            </label>
        </>
    )
}

export default UploadDocument