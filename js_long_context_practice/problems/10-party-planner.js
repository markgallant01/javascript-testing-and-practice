// Your code here
class PartyPlanner {
	constructor() {
		this.guestList = [];
	}

	addToGuestList(name) {
		this.guestList.push(name);
	}

	throwParty() {
		if (this.guestList.length === 0) {
			return 'Gotta add people to the guest list';
		}
		else {
			let returnString = "Welcome to the party " + this.guestList[0];
			for (let i = 1; i < this.guestList.length; i++) {
				returnString += " and " + this.guestList[i];
			}

			return returnString;
		}
	}

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
