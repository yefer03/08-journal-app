
import { Link as RouterLink } from 'react-router-dom'

import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
    email: '',
    password: '',
    displayName: ''
};

const formValidations = {
    email: [ ( value ) => value.includes('@') , 'El correo debe tener una @' ],
    password: [ ( value ) => value.length >= 6 , 'La contraseña deberia tener 6 o mas caracteres' ],
    displayName: [ ( value ) => value.length >= 1 , 'El nombre es obligatorio' ],
};


export const RegisterPage = () => {

    const dispatch = useDispatch();

    const [ formSubmitted, setFormSubmitted ] = useState( false );

    const { status, errorMessage } = useSelector( state => state.auth );
    
    const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ] );


    const { 
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid

    } = useForm( formData, formValidations );


    const onSubmit = ( event ) => {
        
        event.preventDefault();
        setFormSubmitted(true);
        if ( !isFormValid ) return;

        dispatch( startCreatingUserWithEmailPassword( formState ) );

    };


    return (

        <AuthLayout tittle='Crear cuenta'>

            <h1>FormValid { isFormValid ? 'Valido' : 'Incorrecto' } </h1>

            <form 
                onSubmit={ onSubmit }
                className="animate__animated animate__fadeIn animate__faster"
            >

                <Grid container>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label='Nombre Completo'
                            type='text'
                            placeholder="Jonh Doe"
                            fullWidth
                            name='displayName'
                            value={ displayName }
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ displayNameValid }

                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label='Correo'
                            type='email'
                            placeholder="Correo@google.com"
                            fullWidth
                            name='email'
                            value={ email }
                            onChange={ onInputChange }
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid }
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
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid }
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

                        <Grid item xs={ 12 }>
                            <Button 
                                disabled={ isCheckingAuthentication } 
                                type='submit'
                                variant='contained' 
                                fullWidth
                            >
                                Crear cueta
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                    <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
                        <Link component={ RouterLink } color='inherit' to='/auth/login'>
                            Ingresar
                        </Link>
                    </Grid>

                </Grid>

            </form>
        </AuthLayout>
        
                
    );
};
