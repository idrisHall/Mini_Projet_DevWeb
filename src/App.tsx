import { useState } from "react";
import SelecteurObjectifs from "./components/SelecteurObjectifs";
import ChampsPoids from "./components/ChampsPoids";
import TableauProteines from "./components/TableauProteines";
import "./App.css";

function App() {
  const [selectedObjectiveIds, setSelectedObjectiveIds] = useState<string[]>([]);
  const [minWeight, setMinWeight] = useState<number>(50);
  const [maxWeight, setMaxWeight] = useState<number>(100);
  const [rowCount, setRowCount] = useState<number>(6);

  const isValid =
    minWeight > 0 && maxWeight > 0 && minWeight < maxWeight && rowCount >= 2;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Calculateur de Protéines</h1>
        <p>
          faire spawn un tableaux dynamiquement
        </p>
      </header>

      <SelecteurObjectifs
        selectedIds={selectedObjectiveIds}
        onChange={setSelectedObjectiveIds}
      />

      <ChampsPoids
        minWeight={minWeight}
        maxWeight={maxWeight}
        rowCount={rowCount}
        onMinWeightChange={setMinWeight}
        onMaxWeightChange={setMaxWeight}
        onRowCountChange={setRowCount}
      />

      {isValid ? (
        <TableauProteines
          selectedObjectiveIds={selectedObjectiveIds}
          minWeight={minWeight}
          maxWeight={maxWeight}
          rowCount={rowCount}
        />
      ) : (
        <div className="table-placeholder">
          <p>
            Veuillez saisir des paramètres valides pour générer le tableau.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
