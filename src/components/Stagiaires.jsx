import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterGroupe, decrementNoteDiscipline, addAbsence, setFilterGroupeAbs, distinctGroups } from '../store';

function Stagiaires() {
    const dispatch = useDispatch();
    const stagiaires = useSelector(state => state.stagiaires.list);
    const filter = useSelector(state => state.stagiaires.filterGroupe);
    const absences = useSelector(state => state.absences.list);

    const [checked, setChecked] = React.useState({});

    const groupes = distinctGroups(stagiaires);

    const onSelectGroup = (e) => {
        dispatch(setFilterGroupe(e.target.value));
        dispatch(setFilterGroupeAbs(e.target.value));
    };

    const filtered = filter === 'ALL' ? stagiaires : stagiaires.filter(s => s.groupe === filter);

    const toggle = (cef) => {
        setChecked(prev => ({ ...prev, [cef]: !prev[cef] }));
    };

    const handleSaveAbsence = (s) => {
        if (!checked[s.cef]) return;
        const today = new Date().toISOString().slice(0, 10);
        dispatch(addAbsence({ cef: s.cef, groupe: s.groupe, date: today }));
        dispatch(decrementNoteDiscipline({ cef: s.cef, amount: 1 }));
        setChecked(prev => ({ ...prev, [s.cef]: false }));
    };

    return (
        <div className="container">
            <h2>Matriculation Registry</h2>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Filter by Faculty</label>
                <div className="col-sm-4">
                    <select className="form-select" value={filter} onChange={onSelectGroup}>
                        <option value="ALL">All Faculties</option>
                        {groupes.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                </div>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Matricul</th>
                        <th>nom</th>
                        <th>Prenom</th>
                        <th>Faculty</th>
                        <th>Discipline</th>
                        <th>Absent?</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map(s => (
                        <tr key={s.cef}>
                            <td>{s.cef}</td>
                            <td>{s.nom}</td>
                            <td>{s.prenom}</td>
                            <td>{s.groupe}</td>
                            <td>{s.noteDiscipline}</td>
                            <td>
                                <input type="checkbox" checked={!!checked[s.cef]} onChange={() => toggle(s.cef)} />
                            </td>
                            <td>
                                <button className="btn btn-sm btn-success" onClick={() => handleSaveAbsence(s)}>Record</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-3">
                <h5>Recent Absences (All Faculties)</h5>
                <ul>
                    {absences.slice().reverse().slice(0, 5).map(a => (
                        <li key={a.id}>{a.date} — {a.cef} ({a.groupe})</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Stagiaires;
