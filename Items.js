// Globale Verwendungen (usages) mit spezifischen Werten
const usages = {
    healing: (item) => `Stellt ${item.healAmount} Lebenspunkte wieder her.`,
    damage: (item) => `Fügt ${item.damageAmount} Schaden zu.`,
    buff: (item) => `Gewährt einen Buff: ${item.buffType}.`,
    debuff: (item) => `Verringert ${item.debuffType} um ${item.debuffAmount}.`,
};

// Definition der Items
export const items = [
    {
        id: "potion_health",
        displayName: "Heiltrank",
        usage: usages.healing,
        healAmount: 50, // Spezifischer Wert für healing
    },
    {
        id: "scroll_fireball",
        displayName: "Feuerball-Schriftrolle",
        usage: usages.damage,
        damageAmount: 30, // Spezifischer Wert für damage
    },
    {
        id: "elixir_strength",
        displayName: "Elixier der Stärke",
        usage: usages.buff,
        buffType: "Stärke", // Spezifischer Buff
    },
    {
        id: "poison_weakness",
        displayName: "Gift der Schwäche",
        usage: usages.debuff,
        debuffType: "Verteidigung", // Debuff-Typ
        debuffAmount: 15, // Spezifischer Wert für debuff
    },
];

// Funktion, um ein Item basierend auf der ID zu finden
export function getItemById(itemId) {
    return items.find(item => item.id === itemId) || null;
}

// Funktion, um die Beschreibung eines Items zu generieren
export function getItemDescription(item) {
    if (!item) return "Unbekanntes Item.";
    return item.usage(item);
}
