import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterGroupe, setFilterGroupeAbs, distinctGroups } from '../store';

function Absences() {
    const absences = useSelector(state => state.absences.list);
    const filter = useSelector(state => state.absences.filterGroupe);
    const stagiaires = useSelector(state => state.stagiaires.list);
    const dispatch = useDispatch();

    const groupes = distinctGroups(stagiaires);

    const onSelectGroup = (e) => {
        dispatch(setFilterGroupeAbs(e.target.value));
        dispatch(setFilterGroupe(e.target.value));
    };

    const list = filter === 'ALL' ? absences : absences.filter(a => a.groupe === filter);
    const filtered = list.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="container">
            <h2>Attendance Ledger</h2>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Filter by Faculty</label>
                <div className="col-sm-4">
                    <select className="form-select" value={filter} onChange={onSelectGroup}>
                        <option value="ALL">All Faculties</option>
                        {groupes.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Matricula</th>
                        <th>Scholar</th>
                        <th>Faculty</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map(a => {
                        const st = stagiaires.find(s => s.cef === a.cef) || {};
                        return (
                            <tr key={a.id}>
                                <td>{a.date}</td>
                                <td>{a.cef}</td>
                                <td>{st.nom ? `${st.nom} ${st.prenom}` : '—'}</td>
                                <td>{a.groupe}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Absences;
