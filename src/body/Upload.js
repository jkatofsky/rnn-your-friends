import React from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import initSqlJs from "sql.js";

class Upload extends React.Component {

    componentDidMount() {
        // ERRORS TODO: add .catch() here
        initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.3.0/dist/${file}` }).then(SQL => { this.SQL = SQL; });
    }

    processDB = () => {
        const iMessageDBFile = document.getElementById('upload-db').files[0];
        // ERRORS TODO: verify  that the file has the right name and metadata
        var reader = new FileReader();
        reader.onload = () => {
            var UintArray = new Uint8Array(reader.result);
            const iMessageDB = new this.SQL.Database(UintArray);
            // ERRORS TODO: verify that the database has the right tables + stuff
            this.props.oniMessageDBUpload(iMessageDB);
        }
        reader.readAsArrayBuffer(iMessageDBFile);
    }

    render() {
        return <>
            <p>
                First, you have to upload your Mac's local iMessage database.
                It is found at <b>User &gt; Library &gt; Messages &gt; chat.db</b>.
                Messages that are being stored on iCloud can't be accessed.
            </p>
            <input
                accept=".db"
                style={{ display: 'none' }}
                id="upload-db"
                type="file"
                onChange={this.processDB}
            />
            <label htmlFor="upload-db">
                <Button variant="contained" component="span"
                    startIcon={<CloudUploadIcon />}>Upload iMessage DB</Button>
            </label>
            <p>
                RNN Your Friends doesn't send any sensetive metadata to the server
                and deletes your messages when done training a model.
            </p>
        </>;
    }
}


export default Upload;