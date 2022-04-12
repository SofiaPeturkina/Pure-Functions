export default function healthIndicator(player) {
    if (player.health > 50) {
        return "healthy";
    }
    if (player.health < 15) {
        return "critical";
    }
    return "wounded";
}

console.log("app worked");