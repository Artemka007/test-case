import React, { useEffect, useState } from "react";
import { Seminar } from "./core/models";
import { deleteSeminar, getSeminars, updateSeminar } from "./core/api";
import { SeminarsPagePresentation } from "./SeminarsPagePresentation";

export const SeminarsPage: React.FC = () => {
    const [seminars, setSeminars] = useState<Seminar[]>([]);

    const [seminarThatNeedToDelete, setSeminarThatNeedToDelete] = useState<Seminar | null>();
    const [seminarThatNeedToEdit, setSeminarThatNeedToEdit] = useState<Seminar | null>();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getSeminars().then(({ data: seminars }) => {
            setSeminars(seminars);
        }).catch(err => {
            alert('Упс, что-то пошло не так...');
        }).finally(() => {
            setIsLoading(false);
        });
    }, [])

    const handleEdit = ({ seminar }: { seminar: Seminar }) => {
        setIsLoading(true);
        updateSeminar({ seminar }).then(({data}) => {
            setSeminars(
                seminars.map((i) => {
                    if (i.id === data.id) {
                        return data;
                    }
                    return i;
                })
            );
            setSeminarThatNeedToEdit(null);
        }).catch(err => {
            setSeminarThatNeedToEdit(null);
            alert('Упс, что-то пошло не так...');
        }).finally(() => {
            setIsLoading(false);
        });
    };

    const handleDelete = ({ seminarId }: { seminarId: number }) => {
        setIsLoading(true);
        deleteSeminar({ seminarId }).then(() => {
            setSeminars(seminars.filter(({ id }) => id !== seminarId));
            setSeminarThatNeedToDelete(null);
        }).catch(err => {
            setSeminarThatNeedToDelete(null);
            alert('Упс, что-то пошло не так...');
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return <SeminarsPagePresentation
        seminars={seminars}
        isLoading={isLoading}
        seminarThatNeedToEdit={seminarThatNeedToEdit}
        seminarThatNeedToDelete={seminarThatNeedToDelete}
        setSeminarThatNeedToDelete={setSeminarThatNeedToDelete}
        setSeminarThatNeedToEdit={setSeminarThatNeedToEdit}
        handleDelete={handleDelete}
        handleEdit={handleEdit} 
    />;
};