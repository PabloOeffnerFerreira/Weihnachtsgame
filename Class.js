export const classes = [
    {
        id: "fighter",
        displayName: "Kämpfer",
        hitDice: "1d10",
        description: "Ein vielseitiger Kämpfer, der sich auf Waffen und Verteidigung spezialisiert."
    },
    {
        id: "mage",
        displayName: "Magier",
        hitDice: "1d6",
        description: "Ein Meister der Magie, der mächtige Zauber wirken kann, aber wenig Lebenspunkte hat."
    },
    {
        id: "rogue",
        displayName: "Schurke",
        hitDice: "1d8",
        description: "Ein geschickter Kämpfer, der auf Heimlichkeit und Präzision setzt."
    },
    {
        id: "barbarian",
        displayName: "Barbar",
        hitDice: "1d12",
        description: "Ein wilder Kämpfer mit beeindruckender Ausdauer und hohen Lebenspunkten."
    }
];

// Funktion, um Klasse basierend auf der ID zu finden
export function getClassById(classId) {
    return classes.find(cls => cls.id === classId) || null;
}