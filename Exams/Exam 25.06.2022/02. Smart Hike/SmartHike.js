class SmartHike {
    constructor(user) {
        this.username = user;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals[peak]) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.resources === 0) {
            throw new Error('You don\'t have enough resources to start the hike');
        }
        if ((this.resources - (time * 10)) <= 0) {
            return 'You don\'t have enough resources to complete the hike';
        }

        this.resources -= (time * 10);

        const conqueredPeaks = { peak, time, difficultyLevel };

        this.listOfHikes.push(conqueredPeaks);

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10
                }% resources`;
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria === "hard" || criteria === "easy") {
            let allHikes = this.listOfHikes.filter(
                (hike) => hike.difficultyLevel === criteria
            );
            let sortedHikes = allHikes.sort((a, b) => a.time - b.time);
            let bestHike = sortedHikes[0];

            if (bestHike === undefined) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
        } else if (criteria === "all") {
            let result = ["All hiking records:"];
            this.listOfHikes.forEach((hike) => {
                result.push(
                    `${this.username} hiked ${hike.peak} for ${hike.time} hours`
                );
            });

            return result.join("\n");
        }
    }
}

const user = new SmartHike('Vili');
console.log(user.showRecord('all'));

console.log(user.addGoal('Musala', 2925));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.rest(10));
console.log(user.showRecord('alabala'));
console.log(user.addGoal('Vihren', 2914));
console.log(user.hike('Vihren', 2, 'hard'));
console.log(user.showRecord('hard'));
console.log(user.rest(10));

console.log(user.addGoal('Rui', 1706));
console.log(user.rest(10));

console.log(user.hike('Rui', 3, 'easy'));
console.log(user.rest(10));

console.log(user.addGoal('Botev', 1706));
console.log(user.hike('Botev', 3, 'easy'));
console.log(user.showRecord('easy'));

console.log(user.showRecord('all'));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));
