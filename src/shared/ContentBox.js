import React from 'react';
import Box from '@material-ui/core/Box';

function ContentBox(props) {
    return (
        <Box border={1} boxShadow={20} borderRadius={16} borderColor="grey.600" style={{ padding: '20px' }}>
            {props.children}
        </Box>
    )
}

export default ContentBox;