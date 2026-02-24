import { OBJECTIFS } from "../data/donneesProteines";

interface SelecteurObjectifsProps {
    selectedIds: string[];
    onChange: (ids: string[]) => void;
}

function SelecteurObjectifs({ selectedIds, onChange }: SelecteurObjectifsProps) {
    const handleToggle = (id: string) => {
        if (selectedIds.includes(id)) {
            onChange(selectedIds.filter((selectedId) => selectedId !== id));
        } else {
            onChange([...selectedIds, id]);
        }
    };

    return (
        <div className="objective-selector">
            <h2>Objectifs</h2>
            <p className="section-description">
                Sélectionnez un ou plusieurs objectifs sportifs
            </p>
            <div className="objectives-grid">
                {OBJECTIFS.map((objectif) => {
                    const isSelected = selectedIds.includes(objectif.id);
                    return (
                        <label
                            key={objectif.id}
                            className={`objective-card ${isSelected ? "selected" : ""}`}
                            htmlFor={`objective-${objectif.id}`}
                        >
                            <input
                                type="checkbox"
                                id={`objective-${objectif.id}`}
                                checked={isSelected}
                                onChange={() => handleToggle(objectif.id)}
                            />
                            <span className="objective-name">{objectif.name}</span>
                            <span className="objective-range">
                                {objectif.min} – {objectif.max} g/kg/jour
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

export default SelecteurObjectifs;
