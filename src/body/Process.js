import React from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import initSqlJs from "sql.js";

/**
 * sucessful onProcess returns objects like this:
 * { ID (int) : {
 *      name (str),
 *      modelID (str - default null),
 *      messages (str array)
 *      }
 * }
 */
class Process extends React.Component {

    componentDidMount() {
        //.catch() error here when implementing error codee
        initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.3.0/dist/${file}` }).then(SQL => { this.SQL = SQL; });
    }

    processDB = () => {
        const dbFile = document.getElementById('upload-db').files[0];
        var reader = new FileReader();
        reader.onload = () => {
            var UintArray = new Uint8Array(reader.result);
            const db = new this.SQL.Database(UintArray);

            const correspondents = {};
            // TOOD: implement the actual processing of the database

            this.props.onProcess(correspondents);

        }
        reader.readAsArrayBuffer(dbFile);
    }

    render() {
        return <>
            <p>First, you have to upload your Mac's local iMessage database. Starting from your Finder home directory, the database can be found at <b>Library &gt; Messages &gt; chat.db</b></p>
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
            <p>The only data sent over the internet is the text of a random subset of messages - with no metadata at all. And your messages are soon deleted from the server when you're done with the site.</p>
        </>;
    }
}


export default Process;