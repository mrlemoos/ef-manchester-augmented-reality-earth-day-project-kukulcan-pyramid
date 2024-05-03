/**
 * @returns {number}
 */
export function estimateWorldwideRubbish() {
  // Step 1: Define the average rubbish generated per person per day (in kg)
  const averageRubbishPerPerson = 1.2; // This is a made-up number, replace with actual data

  // Step 2: Get the current world population
  const worldPopulation = 7.8e9; // This is an approximation, replace with actual data

  // Step 3: Calculate total rubbish generated per day
  const totalRubbishPerDay = averageRubbishPerPerson * worldPopulation;

  // Step 4: Calculate rubbish generated per second
  const rubbishPerSecond = totalRubbishPerDay / 86400;

  // Step 5: Calculate rubbish generated at any given time
  const now = new Date();
  const secondsSinceMidnight = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
  const rubbishGenerated = rubbishPerSecond * secondsSinceMidnight;

  return rubbishGenerated;
}

export function convertKilogramsToTons(kg) {
  return kg / 1000;
}