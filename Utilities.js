// Utilities.js

// Würfelfunktion
export function rollDice(dice) {
    const [count, sides] = dice.split("d").map(Number); // Würfelanzahl und Seitenzahl extrahieren
    let total = 0;

    for (let i = 0; i < count; i++) {
        total += Math.floor(Math.random() * sides) + 1; // Zufallszahl zwischen 1 und Seitenzahl
    }

    return total;
}
