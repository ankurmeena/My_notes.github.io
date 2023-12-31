import React from 'react'
import { Box, Typography } from '@mui/material'
import { NoteObject } from '../models/note'
import Note from './Note'
interface INotesProps {
    notes: NoteObject[],
    deleteNote: (id: number) => void
}
const Notes: React.FC<INotesProps> = ({ notes, deleteNote }) => {
    return (
        <Box>
            <Typography variant="h4" style={{ fontStyle: 'oblique', textDecorationLine: "underline" }}>Notes</Typography>
            <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    notes.map(note => (
                        <Note note={note} deleteNote={deleteNote} />
                    ))
                }
            </Box>
        </Box>
    )
}
export default Notes