import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Stack } from "@mui/material";

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

export interface SeminarDeleteModalOwnProps {
    open: boolean;
    seminarId: number;
    seminarTitle: string;
    isLoading: boolean;
    handleClose: () => void;
    handleDelete: ({ seminarId }: { seminarId: number }) => void;
}

export const SeminarDeleteModal: React.FC<SeminarDeleteModalOwnProps> = ({ 
    open, 
    seminarId,
    seminarTitle,
    isLoading,
    handleClose, 
    handleDelete 
}) => {
    return (
        <React.Fragment>
            <Modal
                open={open}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title">Удаление семинара</h2>
                    <p id="child-modal-description">
                        Вы точно хотите удалить семинар {seminarTitle}?
                    </p>
                    <Stack direction="row" spacing={1}>
                        <Button 
                            color="error" 
                            disabled={isLoading}
                            onClick={() => handleDelete({ seminarId })}
                        >
                            {isLoading ? 'Loading...' : 'Удалить'}
                        </Button>
                        <Button onClick={handleClose}>Отмена</Button>
                    </Stack>
                </Box>
            </Modal>
        </React.Fragment>
    );
};