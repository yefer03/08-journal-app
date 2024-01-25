
import { useDispatch, useSelector } from "react-redux";

import { Link as RouterLink } from 'react-router-dom'

import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { starLogintWithEmailPassword, startGoogleSignIn } from '../../store/auth';
import { useMemo } from "react";


const formData = {
    email: '',
    password: '',
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm( formData );

    const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

    const onSubmit = ( event ) => {
        event.preventDefault();
        dispatch( starLogintWithEmailPassword({ email, password }) );
    };


    const onGoogleSignIn = () => {
        dispatch( startGoogleSignIn() )
    };


    return (

        <AuthLayout tittle='login'>
            <form 
                onSubmit={ onSubmit }
                className="animate__animated animate__fadeIn animate__faster"
            >

                <Grid container>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label='Correo'
                            type='email'
                            placeholder="Correo@google.com"
                            fullWidth
                            name='email'
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label='Contraseña'
                            type='Password'
                            placeholder="Contraseña"
                            fullWidth
                            name='password'
                            value={ password }
                            onChange={ onInputChange }
                        />
                    </Grid>


                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2 }}>


                        <Grid 
                            item 
                            xs={ 12 }
                            display={ !!errorMessage ? '' : 'none' }
                        >
                            <Alert severity='error'>
                                { errorMessage }
                            </Alert>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                disabled={ isAuthenticating }
                                type='submit' 
                                variant='contained' 
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                disabled={ isAuthenticating }
                                variant='contained' 
                                fullWidth 
                                onClick={ onGoogleSignIn }
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link component={ RouterLink } color='inherit' to='/auth/register'>
                            Crear una cuenta
                        </Link>
                    </Grid>

                </Grid>

            </form>
        </AuthLayout>
        
                
    );
};
