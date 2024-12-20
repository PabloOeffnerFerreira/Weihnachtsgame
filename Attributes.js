// Grundattribute und Punktebudget
export const attributes = {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
};

export const pointsPool = 27; // Gesamtpunkte für das Kaufsystem

// Kostenberechnung für Attributssteigerung
function calculateCost(currentValue) {
    if (currentValue >= 8 && currentValue < 13) {
        return 1; // Werte 9–13 kosten 1 Punkt
    } else if (currentValue === 13 || currentValue === 14) {
        return 2; // Werte 14–15 kosten 2 Punkte
    } else {
        return Infinity; // Werte über 15 nicht erlaubt
    }
}

// Attribut erhöhen
export function increaseAttribute(attributeName) {
    if (!(attributeName in attributes)) {
        throw new Error(`Attribut ${attributeName} existiert nicht.`);
    }

    const currentValue = attributes[attributeName];
    const cost = calculateCost(currentValue);

    if (pointsPool < cost) {
        throw new Error("Nicht genug Punkte im Pool.");
    }
    if (currentValue >= 15) {
        throw new Error("Attribut darf nicht über 15 steigen.");
    }

    attributes[attributeName]++;
    pointsPool -= cost;

    console.log(`${attributeName} erhöht auf ${attributes[attributeName]}. Verbleibende Punkte: ${pointsPool}`);
}

// Attribut senken (um Punkte zurückzubekommen)
export function decreaseAttribute(attributeName) {
    if (!(attributeName in attributes)) {
        throw new Error(`Attribut ${attributeName} existiert nicht.`);
    }

    const currentValue = attributes[attributeName];
    if (currentValue <= 8) {
        throw new Error("Attribut darf nicht unter 8 fallen.");
    }

    const refund = calculateCost(currentValue - 1); // Rückerstattung basierend auf neuem Wert
    attributes[attributeName]--;
    pointsPool += refund;

    console.log(`${attributeName} gesenkt auf ${attributes[attributeName]}. Verbleibende Punkte: ${pointsPool}`);
}

console.log(attributes, `Verbleibende Punkte: ${pointsPool}`);

