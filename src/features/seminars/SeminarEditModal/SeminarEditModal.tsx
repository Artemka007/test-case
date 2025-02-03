import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Seminar } from "../core/models";
import { Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

interface EditSeminarData {
    title: string;
    description: string;
}

export interface SeminarEditModalOwnProps {
    open: boolean;
    seminar: Seminar;
    isLoading: boolean;
    handleClose: () => void;
    handleEdit: ({ seminar }: { seminar: Seminar }) => void;
}

export const SeminarEditModal: React.FC<SeminarEditModalOwnProps> = ({ 
    open, 
    seminar,
    isLoading,
    handleClose, 
    handleEdit
}) => {
    const { register, setValue, handleSubmit } = useForm<EditSeminarData>();

    const onSubmit = ({ title, description }: EditSeminarData) => {
        handleEdit({
            seminar: {
                ...seminar,
                title,
                description
            }
        });
    };

    useEffect(() => {
        setValue('title', seminar.title);
        setValue('description', seminar.description);
    }, [seminar]);

    return (
        <React.Fragment>
            <Modal
                open={open}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title">Редактирование семинара</h2>
                    <TextField fullWidth label="Заголовок" id="title" {...register('title')} />
                    <TextField margin="normal" fullWidth label="Описание" id="description" {...register('description')} />
                    <Stack direction="row" spacing={1}>
                        <Button onClick={handleSubmit(onSubmit)} disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Изменить'}
                        </Button>
                        <Button color="error" onClick={handleClose} disabled={isLoading}>Отмена</Button>
                    </Stack>
                </Box>
            </Modal>
        </React.Fragment>
    );
};