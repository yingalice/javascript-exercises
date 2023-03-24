const findTheOldest = function(persons) {
  const currentYear = (new Date()).getFullYear();
  return persons.reduce((oldest, current) => {
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    const currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;
    return (oldestAge > currentAge) ? oldest : current;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
