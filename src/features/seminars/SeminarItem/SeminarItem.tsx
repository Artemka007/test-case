import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Seminar } from "../core/models";
import { Button, Divider, IconButton, Stack } from "@mui/material";

export interface SeminarItemOwnProps {
    seminar: Seminar;
    handleEdit: () => void;
    handleDelete: () => void;
}

export const SeminarItem: React.FC<SeminarItemOwnProps> = ({ 
    seminar,
    handleEdit,
    handleDelete
}) => {
    return (
        <>
            <ListItem 
                alignItems="center"
                disablePadding>
                <ListItemAvatar>
                    <Avatar alt={seminar.title} src={seminar.photo} />
                </ListItemAvatar>
                <ListItemText
                    primary={seminar.title}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                {seminar.description  + ' - '}
                            </Typography>
                            {seminar.time + ' ' + seminar.date}
                        </React.Fragment>
                    }
                />
                <Stack direction="row" spacing={1}>
                    <Button color="success" onClick={handleEdit}>Изменить</Button>
                    <Button color="error" onClick={handleDelete}>Удалить</Button>
                </Stack>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
};