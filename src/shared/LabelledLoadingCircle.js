import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function LabelledLoadingCircle(props) {
    return <div>
        {!props.progress ?
            <CircularProgress size={80} color="rgb(222, 222, 222)" />
            :
            <div style={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="static" size={80} value={props.progress} color="rgb(222, 222, 222)" />
                <div style={{
                    top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <span>
                        {`${Math.round(props.progress,)}%`}
                    </span>
                </div>
            </div>
        }
        {props.label && <h3>{props.label}</h3>}
    </div >

}

export default LabelledLoadingCircle;