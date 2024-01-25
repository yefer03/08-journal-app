import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/journal/thunks';
import { useDispatch, useSelector } from 'react-redux';

export const JournalPage = () => {

    const { isSaving, active, notes } = useSelector( state => state.journal );

    const dispatch = useDispatch()

    const onClicNewNote = () => {
        dispatch( startNewNote() );

    };

    return (
        <JournalLayout>


            {
                ( !!active )
                ? <NoteView /> 
                : <NothingSelectedView />

            }



            <IconButton
                onClick={ onClicNewNote }
                disabled={ isSaving }
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>

        </JournalLayout>    
    )
}