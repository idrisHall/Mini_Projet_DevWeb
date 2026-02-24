export interface Objectif {
    id: string;
    name: string;
    min: number;
    max: number;
}

export const OBJECTIFS: Objectif[] = [
    { id: "sedentaire", name: "Sédentaire", min: 0.8, max: 1.0 },
    { id: "endurance", name: "Endurance", min: 1.2, max: 1.6 },
    { id: "conservation", name: "Conservation de la masse musculaire", min: 1.6, max: 1.8 },
    { id: "prise-masse", name: "Prise de masse musculaire", min: 1.8, max: 2.2 },
];

export interface PlageProteines {
    min: number;
    max: number;
}

export function calculerPlageProteines(
    poidsKg: number,
    objectif: Objectif
): PlageProteines {
    return {
        min: Math.round(poidsKg * objectif.min),
        max: Math.round(poidsKg * objectif.max),
    };
}

export function genererPoids(
    poidsMin: number,
    poidsMax: number,
    nombreLignes: number
): number[] {
    if (nombreLignes <= 1) return [poidsMin];

    const pas = (poidsMax - poidsMin) / (nombreLignes - 1);
    const poids: number[] = [];

    for (let i = 0; i < nombreLignes; i++) {
        poids.push(Math.round(poidsMin + pas * i));
    }

    return poids;
}
