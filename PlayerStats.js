// PlayerStats.js
import { getClassById } from './Class.js';
import { calculateModifier } from './Attributes.js';
import { rollDice } from './Utilities.js';

// Spielerstatus-Objekt
export const playerStats = {
    maxHP: 0,
    currentHP: 0,
    attack: 0,
    defense: 0,
    initiative: 0,
};

// Lebenspunkte berechnen
export function calculateHP(characterClass, constitution) {
    const selectedClass = getClassById(characterClass);
    if (!selectedClass) throw new Error(`Klasse ${characterClass} nicht gefunden.`);

    const hitDice = selectedClass.hitDice;
    const baseHP = rollDice(hitDice);
    const conModifier = calculateModifier(constitution);

    return Math.max(baseHP + conModifier, 1); // HP dürfen nicht unter 1 fallen
}

// Spielerstatus initialisieren
export function initializePlayerStats(characterClass, attributes) {
    const { constitution, dexterity, strength } = attributes;

    playerStats.maxHP = calculateHP(characterClass, constitution);
    playerStats.currentHP = playerStats.maxHP;
    playerStats.attack = calculateModifier(strength); // Nahkampfangriff basierend auf Stärke
    playerStats.defense = calculateModifier(constitution); // Verteidigung basierend auf Konstitution
    playerStats.initiative = calculateModifier(dexterity); // Initiative basierend auf Geschicklichkeit
}

// Lebenspunkte manipulieren
export function takeDamage(amount) {
    playerStats.currentHP = Math.max(playerStats.currentHP - amount, 0);
    console.log(`Schaden genommen: ${amount}. Aktuelle HP: ${playerStats.currentHP}`);
}

export function heal(amount) {
    playerStats.currentHP = Math.min(playerStats.currentHP + amount, playerStats.maxHP);
    console.log(`Geheilt um: ${amount}. Aktuelle HP: ${playerStats.currentHP}`);
}

// Buffs und Debuffs anwenden
export function applyBuff(stat, amount) {
    if (playerStats[stat] !== undefined) {
        playerStats[stat] += amount;
    }
}

export function removeBuff(stat, amount) {
    if (playerStats[stat] !== undefined) {
        playerStats[stat] -= amount;
    }
}
