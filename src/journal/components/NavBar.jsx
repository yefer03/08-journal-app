

import { AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth';


export const NavBar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout   () );
    };


    return (
        <AppBar 
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${ drawerWidth }px)` },
                ml: { sm: `${ drawerWidth }px` }
            }}
        >

            <Toolbar>
                <IconButton
                    color='inherit'
                    adge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }} 
                >

                    <MenuOutlined />

                </IconButton>

                <Grid container direction='row' justifyContent='space-between'>

                    <Typography 
                        variant='h6' 
                        noWrap 
                        component='div'
                        alignItems='center'
                    >
                        Journal App
                    </Typography>

                    <IconButton 
                        color='error'
                        onClick={ onLogout }
                    >

                        <LogoutOutlined />

                    </IconButton>


                </Grid>

            </Toolbar>

        </AppBar>
    )
}
