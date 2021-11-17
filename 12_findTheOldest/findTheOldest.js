const findTheOldest = function(people) {
    const oldest = people.reduce((oldest, person) => {
        if (!oldest) {
            return person; 
        } 

        const currentYear = (new Date).getFullYear();
        const oldestAge = `yearOfDeath` in oldest ? (oldest.yearOfDeath - oldest.yearOfBirth) : (currentYear - oldest.yearOfBirth);
        const personAge = `yearOfDeath` in person ? (person.yearOfDeath - person.yearOfBirth) : (currentYear - person.yearOfBirth); 
        
        return oldestAge > personAge ? oldest : person; 
    }, {});
    
    return oldest; 
};

// Do not edit below this line
module.exports = findTheOldest;
