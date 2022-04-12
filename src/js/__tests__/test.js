import healthIndicator from '../app';

test.each([
    [{ name: "Маг", health: 90 }, "healthy"],
    [{ name: "Лучник", health: 45 }, "wounded"],
    [{ name: "Мечник", health: 10 }, "critical"],
])(("should indicate player's health"), (player, expected) => {
    const result = healthIndicator(player);

    expect(result).toBe(expected);
})