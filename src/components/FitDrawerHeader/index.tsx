import React from 'react'
import {styled} from '@mui/material/styles';

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const FitDrawerHeader = () => {
    const localStorageToken = JSON.parse(localStorage.getItem("autenticado"));

    if (!localStorageToken) {
        return <></>
    }

    return (
        <DrawerHeader/>
    )
}

export default FitDrawerHeader