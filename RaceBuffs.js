// RaceBuffs.js

// Globale Traits, die verschiedenen Rassen zugewiesen werden können
const traits = {
    darkvision: "Dunkelsicht: Kann im Dunkeln bis zu 60 Fuß sehen.",
    keenSenses: "Scharfe Sinne: Vorteil auf Wahrnehmungswürfe.",
    resilience: "Widerstandsfähigkeit: Vorteil auf Rettungswürfe gegen Gift.",
    savageAttacks: "Wilde Angriffe: Verdoppelt den Schaden bei kritischen Treffern.",
    lucky: "Glücklich: Kann bei einer gewürfelten 1 den Wurf wiederholen.",
    brave: "Tapfer: Vorteil auf Rettungswürfe gegen Angst.",
    hellishResistance: "Höllenresistenz: Widerstand gegen Feuerschaden.",
    versatility: "Vielseitigkeit: Kann zwei zusätzliche Attributspunkte verteilen.",
    gnomeCunning: "Gnomenschläue: Vorteil auf Rettungswürfe gegen Magie.",
    highVersatility: "Hochvielseitigkeit: Kann vier zusätzliche Attributspunkte zuweisen.",
};

// Einzigartige Merkmale und Modifikatoren für jede Rasse
export const raceBuffs = {
    human: {
        attributes: { strength: 1, intelligence: 1 },
        traits: [traits.highVersatility],
    },
    elf: {
        attributes: { dexterity: 2 },
        traits: [traits.darkvision, traits.keenSenses],
    },
    dwarf: {
        attributes: { constitution: 2 },
        traits: [traits.darkvision, traits.resilience],
    },
    orc: {
        attributes: { strength: 2, constitution: 1 },
        traits: [traits.savageAttacks],
    },
    halfling: {
        attributes: { dexterity: 2 },
        traits: [traits.lucky, traits.brave],
    },
    tiefling: {
        attributes: { charisma: 2, intelligence: 1 },
        traits: [traits.darkvision, traits.hellishResistance],
    },
    halfElf: {
        attributes: { charisma: 2 },
        traits: [traits.versatility, traits.darkvision],
    },
    gnome: {
        attributes: { intelligence: 2 },
        traits: [traits.darkvision, traits.gnomeCunning],
    },
};

// Funktion, um Buffs basierend auf der Rassen-ID zu holen
export function getRaceBuffs(raceId) {
    return raceBuffs[raceId] || null;
}
