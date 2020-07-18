import React from 'react';
import Box from '@material-ui/core/Box';

function ContentBox(props) {
    return (
        <Box border={1} boxShadow={20} borderRadius={16} borderColor="grey.600">
            {props.title && <h3 style={{
                fontWeight: 'bold',
                marginBlockStart: '0.5em',
                marginBlockEnd: '0.5em'
            }}><u>{props.title}</u></h3>}
            {props.children}
        </Box>
    )
}

export default ContentBox;