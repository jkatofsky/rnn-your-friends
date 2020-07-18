import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function LabelledLoadingCircle(props) {
    return <div>
        <CircularProgress size={80} color="rgb(222, 222, 222)" />
        {props.label && <h3>{props.label}</h3>}
    </div >
}

export default LabelledLoadingCircle;