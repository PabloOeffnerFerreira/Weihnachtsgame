// Funktion zur Validierung der Charakterdaten
export function validateCharacter(character) {
    if (!character.name || character.name.trim() === "") {
        return "Bitte einen Namen eingeben.";
    }

    if (!character.gender || (character.gender !== "male" && character.gender !== "female")) {
        return "Bitte ein gültiges Geschlecht auswählen.";
    }

    if (!character.race) {
        return "Bitte eine Rasse auswählen.";
    }

    if (!character.class) {
        return "Bitte eine Klasse auswählen.";
    }

    // Falls alle Prüfungen bestanden sind
    return null; // Keine Fehler
}
