import { races } from './Race.js';
import { classes } from './Class.js';
import { attributes, pointsPool, increaseAttribute, decreaseAttribute } from './Attributes.js';
import { validateCharacter } from './Validation.js';

console.log(classes);

export const character = {
    race: null,
    class: null,
    attributes: { ...attributes }, // Kopie der Attribute
};

// Dropdown-Elemente finden
const raceDropdown = document.getElementById("race");
const classDropdown = document.getElementById("class");

// Funktion zur Rassenauswahl
export function selectRace(raceId) {
    const selectedRace = races.find(r => r.id === raceId);
    if (!selectedRace) throw new Error("Ungültige Rasse ausgewählt.");
    character.race = selectedRace;
    console.log(`Rasse ausgewählt: ${selectedRace.displayName}`);
}

// Rassen-Dropdown befüllen
if (raceDropdown) {
    races.forEach(cls => {
        const option = document.createElement("option");
        option.value = cls.id;
        option.textContent = cls.displayName;
        raceDropdown.appendChild(option);
    });
    document.body.innerHTML += "<p>Rassen-Dropdown gefüllt!</p>";
} else {
    document.body.innerHTML += "<p>Fehler: Rassen-Dropdown nicht gefunden.</p>";
}

// Funktion zur Klassenauswahl
export function selectClass(classId) {
    const selectedClass = classes.find(c => c.id === classId);
    if (!selectedClass) throw new Error("Ungültige Klasse ausgewählt.");
    character.class = selectedClass;
    console.log(`Klasse ausgewählt: ${selectedClass.displayName}`);
}

// Klassen-Dropdown befüllen
if (classDropdown) {
    classes.forEach(cls => {
        const option = document.createElement("option");
        option.value = cls.id;
        option.textContent = cls.displayName;
        classDropdown.appendChild(option);
    });
    document.body.innerHTML += "<p>Klassen-Dropdown gefüllt!</p>";
} else {
    document.body.innerHTML += "<p>Fehler: Klassen-Dropdown nicht gefunden.</p>";
}

// Initialisierung der Dropdowns
populateRaceDropdown();
populateClassDropdown();

// Event Listener für die Dropdowns hinzufügen
raceDropdown.addEventListener('change', () => {
    selectRace(raceDropdown.value);
});

classDropdown.addEventListener('change', () => {
    selectClass(classDropdown.value);
});

// Attributpunkte vergeben
export function modifyAttribute(attributeName, increase = true) {
    if (increase) {
        increaseAttribute(attributeName);
    } else {
        decreaseAttribute(attributeName);
    }
    console.log(`Aktuelle Attribute:`, character.attributes, `Verbleibende Punkte: ${pointsPool}`);
}

// Charakter finalisieren
export function finalizeCharacter() {
    const errorMessage = validateCharacter(character);
    if (errorMessage) {
        document.body.innerHTML += `<p style="color: red;">${errorMessage}</p>`;
        return;
    }
    document.body.innerHTML += `<p style="color: green;">Charakter erfolgreich erstellt!</p>`;
    console.log(character); // Weiterverarbeitung
}
