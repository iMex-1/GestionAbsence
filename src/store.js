import { configureStore, createSlice } from '@reduxjs/toolkit';

// Helper to get distinct groups from stagiaires
const distinctGroups = (stagiaires) => {
    return Array.from(new Set(stagiaires.map(s => s.groupe))).sort();
};

// Initial data for stagiaires
const initialStagiaires = [
    { cef: 'CEF001', nom: 'Dupont', prenom: 'Alice', groupe: 'G1', noteDiscipline: 20 },
    { cef: 'CEF002', nom: 'Martin', prenom: 'Bob', groupe: 'G1', noteDiscipline: 20 },
    { cef: 'CEF003', nom: 'Nguyen', prenom: 'Clara', groupe: 'G2', noteDiscipline: 20 },
    { cef: 'CEF004', nom: 'Khan', prenom: 'David', groupe: 'G2', noteDiscipline: 20 },
    { cef: 'CEF005', nom: 'Smith', prenom: 'Eva', groupe: 'G3', noteDiscipline: 20 }
];

// =================== stagiaireSlice ===================
const stagiaireSlice = createSlice({
    name: 'stagiaires',
    initialState: {
        list: initialStagiaires,
        filterGroupe: 'ALL'
    },
    reducers: {
        setFilterGroupe(state, action) {
            state.filterGroupe = action.payload;
        },
        decrementNoteDiscipline(state, action) {
            const { cef, amount = 1 } = action.payload;
            const st = state.list.find(s => s.cef === cef);
            if (st) {
                st.noteDiscipline = Math.max(0, st.noteDiscipline - amount);
            }
        }
    }
});

// =================== absenceSlice ===================
const absenceSlice = createSlice({
    name: 'absences',
    initialState: {
        list: [
            { id: 'A1', cef: 'CEF002', groupe: 'G1', date: '2025-11-15' }
        ],
        filterGroupe: 'ALL'
    },
    reducers: {
        addAbsence(state, action) {
            const { cef, groupe, date } = action.payload;
            const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
            state.list.push({ id, cef, groupe, date });
        },
        setFilterGroupeAbs(state, action) {
            state.filterGroupe = action.payload;
        }
    }
});

const store = configureStore({
    reducer: {
        stagiaires: stagiaireSlice.reducer,
        absences: absenceSlice.reducer
    }
});

export default store;
export const { setFilterGroupe, decrementNoteDiscipline } = stagiaireSlice.actions;
export const { addAbsence, setFilterGroupeAbs } = absenceSlice.actions;
export { distinctGroups };
