interface ChampPoidsProps {
    minWeight: number;
    maxWeight: number;
    rowCount: number;
    onMinWeightChange: (value: number) => void;
    onMaxWeightChange: (value: number) => void;
    onRowCountChange: (value: number) => void;
}

function ChampsPoids({
    minWeight,
    maxWeight,
    rowCount,
    onMinWeightChange,
    onMaxWeightChange,
    onRowCountChange,
}: ChampPoidsProps) {
    const errors: string[] = [];
    if (minWeight <= 0) errors.push("Le poids minimum doit être supérieur à 0.");
    if (maxWeight <= 0) errors.push("Le poids maximum doit être supérieur à 0.");
    if (minWeight >= maxWeight)
        errors.push("Le poids minimum doit être inférieur au poids maximum.");
    if (rowCount < 2) errors.push("Le nombre de lignes doit être au moins 2.");

    return (
        <div className="weight-inputs">
            <h2>Paramètres de poids</h2>
            <p className="section-description">
                Définissez la plage de poids et le nombre de lignes
            </p>

            <div className="inputs-row">
                <div className="input-group">
                    <label htmlFor="min-weight">Poids minimum (kg)</label>
                    <input
                        type="number"
                        id="min-weight"
                        min={1}
                        value={minWeight}
                        onChange={(e) => onMinWeightChange(Number(e.target.value))}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="max-weight">Poids maximum (kg)</label>
                    <input
                        type="number"
                        id="max-weight"
                        min={1}
                        value={maxWeight}
                        onChange={(e) => onMaxWeightChange(Number(e.target.value))}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="row-count">Nombre de lignes</label>
                    <input
                        type="number"
                        id="row-count"
                        min={2}
                        value={rowCount}
                        onChange={(e) => onRowCountChange(Number(e.target.value))}
                    />
                </div>
            </div>

            {errors.length > 0 && (
                <div className="validation-errors">
                    {errors.map((error, index) => (
                        <p key={index} className="error-message">
                            {error}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ChampsPoids;
