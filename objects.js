const player = {
    name: "Alex",
    health: 100,
    jump() {
        console.log("Jumped!");
    }
};

console.log(player.name);
console.log(player["health"])
player.jump();