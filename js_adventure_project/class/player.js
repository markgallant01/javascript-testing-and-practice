class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        let foundItem;
        this.currentRoom.items.forEach((item, index) => {
            if (item.name === itemName) {
                foundItem = this.currentRoom.items.splice(index, 1)[0];
            }
        });

        if (foundItem) {
            this.items.push(foundItem);
        }
    }

    dropItem(itemName) {
        let foundItem;
        this.items.forEach((item, index) => {
            if (item.name === itemName) {
                foundItem = this.items.splice(index, 1)[0];
            }
        });

        if (foundItem) {
            this.currentRoom.items.push(foundItem);
        }
    }

    eatItem(itemName) {
        // check if player has item
        let foundItem;
        let foundItemIndex;

        this.items.forEach((item, index) => {
            if (item.name === itemName) {
                foundItem = item;
                foundItemIndex = index;
            }
        });

        // check if it's food
        if (foundItem.isFood) {
            // 'eat' the item, removing it from player's inventory
            this.items.splice(foundItemIndex, 1);
        }
    }

    getItemByName(name) {
        let foundItem;
        this.items.forEach(item => {
            if (item.name === name) {
                foundItem = item;
            }
        });

        return foundItem;
    }
}

module.exports = {
  Player,
};
