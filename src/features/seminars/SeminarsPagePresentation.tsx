import { List } from "@mui/material";
import { SeminarDeleteModal } from "./SeminarDeleteModal/SeminarDeleteModal";
import { SeminarEditModal } from "./SeminarEditModal/SeminarEditModal";
import { SeminarItem } from "./SeminarItem/SeminarItem";
import { Seminar } from "./core/models";

export interface SeminarsPagePresentationOwnProps {
    seminars: Seminar[];
    isLoading: boolean;
    seminarThatNeedToEdit?: Seminar | null;
    seminarThatNeedToDelete?: Seminar | null;
    setSeminarThatNeedToEdit: (seminar: Seminar | null) => void;
    setSeminarThatNeedToDelete: (seminar: Seminar | null) => void;
    handleEdit: ({ seminar }: { seminar: Seminar }) => void;
    handleDelete: ({ seminarId }: { seminarId: number }) => void;
};

export const SeminarsPagePresentation: React.FC<SeminarsPagePresentationOwnProps> = ({
    seminars,
    isLoading,
    seminarThatNeedToEdit,
    seminarThatNeedToDelete,
    setSeminarThatNeedToDelete,
    setSeminarThatNeedToEdit,
    handleDelete,
    handleEdit
}) => {
    if (isLoading) {
        return <>Loading...</>;
    }

    const seminarsItems = seminars.map(i => {
        return <SeminarItem 
            key={i.id}
            seminar={i}
            handleEdit={() => setSeminarThatNeedToEdit(i)}
            handleDelete={() => setSeminarThatNeedToDelete(i)} />
    });

    return (
        <>
            <div className="seminars">
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {seminarsItems}
                </List>
            </div>
            {seminarThatNeedToDelete && <SeminarDeleteModal 
                open={!!seminarThatNeedToDelete} 
                seminarId={seminarThatNeedToDelete.id}
                seminarTitle={seminarThatNeedToDelete.title}
                isLoading={isLoading}
                handleClose={() => setSeminarThatNeedToDelete(null)}
                handleDelete={handleDelete} />}
            {seminarThatNeedToEdit && <SeminarEditModal 
                open={!!seminarThatNeedToEdit} 
                seminar={seminarThatNeedToEdit}
                isLoading={isLoading}
                handleClose={() => setSeminarThatNeedToEdit(null)}
                handleEdit={handleEdit} />}
        </>
    );
};