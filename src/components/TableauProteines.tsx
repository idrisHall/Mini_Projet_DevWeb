import {
    OBJECTIFS,
    genererPoids,
    calculerPlageProteines,
} from "../data/donneesProteines";

interface TableauProteinesProps {
    selectedObjectiveIds: string[];
    minWeight: number;
    maxWeight: number;
    rowCount: number;
}

function TableauProteines({
    selectedObjectiveIds,
    minWeight,
    maxWeight,
    rowCount,
}: TableauProteinesProps) {
    const objectifsSelectionnes = OBJECTIFS.filter((obj) =>
        selectedObjectiveIds.includes(obj.id)
    );

    const poids = genererPoids(minWeight, maxWeight, rowCount);

    if (objectifsSelectionnes.length === 0) {
        return (
            <div className="table-placeholder">
                <p>Sélectionnez au moins un objectif pour afficher le tableau.</p>
            </div>
        );
    }

    return (
        <div className="protein-table-container">
            <h2>Tableau des besoins en protéines</h2>
            <div className="table-wrapper">
                <table className="protein-table">
                    <thead>
                        <tr>
                            <th>Poids (kg)</th>
                            {objectifsSelectionnes.map((obj) => (
                                <th key={obj.id}>{obj.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {poids.map((p, index) => (
                            <tr key={index}>
                                <td className="weight-cell">{p} kg</td>
                                {objectifsSelectionnes.map((obj) => {
                                    const plage = calculerPlageProteines(p, obj);
                                    return (
                                        <td key={obj.id} className="protein-cell">
                                            {plage.min} – {plage.max} g/jour
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableauProteines;
