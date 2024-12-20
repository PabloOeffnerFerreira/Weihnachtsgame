// Race.js

// Definition der verfügbaren Rassen
export const races = [
    {
        id: "human",
        displayName: "Mensch",
        description: "Eine vielseitige und anpassungsfähige Rasse.",
    },
    {
        id: "elf",
        displayName: "Elf",
        description: "Eine elegante Rasse mit einer natürlichen Begabung für Magie und Geschicklichkeit.",
    },
    {
        id: "dwarf",
        displayName: "Zwerg",
        description: "Robuste Kämpfer mit einer Vorliebe für Bergbau und Schmiedekunst.",
    },
    {
        id: "orc",
        displayName: "Ork",
        description: "Wilde Krieger mit einer beeindruckenden Stärke und Ausdauer.",
    },
    {
        id: "halfling",
        displayName: "Halbling",
        description: "Eine kleine Rasse mit einem lebendigen Geschick und einem Gefühl für Musik.",
    },
    {
        id: "gnome",
        displayName: "Gnom",
        description: "Eine kleine Rasse mit guten Fähigkeiten zum Basteln und Bauen.",
    },
    {
        id: "half-elf",
        displayName: "Halbelf",
        description: "Eine Rasse mit einer mixierten Ausdauer und Magie.",
    },
    {
        id: "tiefling",
        displayName: "Tiefling",
        description: "Eine Rasse aus dem Untergrund, die eine Vorliebe für Magie hat und gut Einschüchtern kann.",
    }
];

// Funktion, um eine Rasse basierend auf der ID zu finden
export function getRaceById(raceId) {
    return races.find(race => race.id === raceId) || null;
}
