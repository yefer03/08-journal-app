
import { TurnedInNot } from "@mui/icons-material";

import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    Grid,
    ListItemText
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";



export const SideBarItem = ({ title = '', body, id, imageUrls = [], date }) => {

    const dispatch = useDispatch();


    const onClicNote = () => {
        dispatch( setActiveNote({ title, body, id, imageUrls, date }) );
    };


    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    }, [ title ]);
    

    return (
        <ListItem 
            disablePadding
            onClick={ onClicNote }
        >
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot>   

                    </TurnedInNot>
                </ListItemIcon>

                <Grid container>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body  } />
                </Grid>

            </ListItemButton>

        </ListItem>
    )
}
