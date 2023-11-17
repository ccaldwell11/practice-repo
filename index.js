// Data
const pets = [
    {
      name: 'Noodles',
      age: 6,
      species: 'cat',
      location: 'New Orleans, LA',
      treatments: [
        {
          name: 'Gabepentin',
          type: 'Liquid',
          dosage: '5 ml',
          frequency: 'Daily',
          notes: 'Can increase dosage to 7 ml.'
        },
        {
          name: 'Laxitone',
          type: 'Paste',
          dosage: 'Dab',
          frequency: 'Daily',
          notes: 'Apply with food.'
        }
      ]
    },
    {
      name: 'Dezi',
      age: 14,
      species: 'cat',
      location: 'New Orleans, LA',
      treatments: [
        {
          name: 'Methimazole',
          type: 'Liquid',
          dosage: '5 ml',
          frequency: 'Daily',
          notes: 'Prescribed for kidney functioning.'
        },
        {
          name: 'Gabepentin',
          type: 'Liquid',
          dosage: '7 ml',
          frequency: 'As needed',
          notes: 'Give at least one hour before vet vists.'
        }
      ]
    },
    {
      name: 'Bart',
      age: 2,
      species: 'dog',
      location: 'Baton Rouge, LA',
      treatments: [
        {
          name: 'Diphenhydramine',
          type: 'capsule',
          dosage: '50 mg',
          frequency: 'As needed',
          notes: 'Give as needed during allergy season.'
        }
      ]
    },
    {
      name: 'Bernie',
      age: 5,
      species: 'dog',
      location: 'Baltimore, Maryland',
      treatments: [
        {
          name: 'Meloxicam',
          type: 'capsule',
          dosage: '15 mg',
          frequency: 'Daily',
          notes: 'Re-evaluate symptoms after 1 month of using medication.'
        },
        {
          name: 'Diphenhydramine',
          type: 'capsule',
          dosage: '50 mg',
          frequency: 'As needed',
          notes: 'Give as needed during allergy season'
        }
      ]
    }
  ];

// Problem #1 //

//since you can't hear or see my thought process, i decided to add more detail in my pseudocode than usual
function filterByMedication(array, medication){
  const justNames = []; //empty array used to store names since filter will return the entire object by default
  pets.filter(function(pet){ //accessing each pet
    for(let treatment of pet.treatments){ //accessing each treatment key of each pet (contains an array which holds objects of pet medications)
      if(treatment.name === medication){ // if one of the names found within treatments is the same as the med. name, then return the object of the pets name
        justNames.push(pet.name); //pushed the names of the pet using the inquired medication to an empty array
      }
    }
  })
  return justNames; //returns the array with the newly pushed names of animals using the searched for medication
}

console.log(filterByMedication(pets, 'Gabepentin'));

//I realized I was assigning the result of using the methods to a variable when it was unecessary. I kept the first problem to show what I was doing.
// Problem #2 //
//In the instructions for this you asked for an array of the pet objects. I am clarifying because the example shown, only displayed the names
function speciesAndNumberOfMedications(array, species){
  return pets.filter(function(pet){ //accessing each pet
    for(let treatment of pet.treatments){ //iterates through array to assist with next line
      if(treatment && pet.species === species){ //if treatment exists and the species is the searched species
        return pet.name; //returns truthy value
      }
    }
  })
}

console.log(speciesAndNumberOfMedications(pets, 'cat'));


// Problem #3 //
function getDailyFrequency(array){
  let dailyMeds = pets.reduce(function(acc, pet){ //goes through every pet but also houses a accumulator value that references the seed at its starting point
    for(let treatment of pet.treatments){ //iterates through treatments of each pet
      if(treatment.frequency === 'Daily'){ //if taken daily 
        acc++ //increment by one on the accumulator
        break; //stops looking for another treatment that is taken daily and goes to the next pet
      }
    }
    return acc; //function returns final array of accumulator
  }, 0) //seed set to 0. starting point of number which will later be returned
  return dailyMeds; 
}

console.log(createStrings(pets));


// Problem #4 // ** M.A.P. **
//This part tripped me up. I ultimately had to change my approach, but then I was chaining these specific methods wrong (couldn't loop in the way that i desired)
//I figured it out after paying EXTREMELY close attention to grouping symbol count and simplifying as I went
function createStrings(array){
  return pets.map(function (pet) {
    let treatments = pet.treatments.map(function (treatment) { // goes through pets' treatments just to have easier access to it for the desired return
      return pet; //returns truthy value
    });
    return `name: ${pet.name} - age: ${pet.age} - species: ${pet.species} - location: ${pet.location} - treatments: ${treatments.length}`; //string literal syntax to use the desired format from example. this is what will really be returned
  });
}

console.log(createStrings(pets));


// Problem #5 //
function reduceSpecies(array, species){
  return pets.reduce(function(acc, pet){
    if(pet.species === species){ 
      acc.push({name: pet.name, species: pet.species, age: pet.age}); //pushes objects of each animal that matches the species name and formats it in this syntax
    }
    return acc;
  }, []);
}

console.log(reduceSpecies(pets, 'cats'));


// Problem #6 //
//very similar to number 4
function namesAndMedications(array){
  return pets.map(function(pet) {
    let treatments = pet.treatments.map(function (treatment) {
      return treatment.name; //accesses pets' treatments
    });
    return `${pet.name} - ${treatments.join(',')}`;
  });
}

console.log(namesAndMedications(pets));


// Problem #7 //
function filterByDailyFrequency(array){
  return pets.filter(function(pet){ 
    for(let treatment of pet.treatments){ 
      if(treatment.frequency === 'Daily'){ 
        return pets; //similar comments to number 2
      }
    }
  })
  .map(function(pet){ //i knew how to properly chain this method but if i didn't get reminded of this by problem 4, then I would've spend more time debugging
    return pet.name 
  })
}

console.log(filterByDailyFrequency(pets));


// Problem #8 // 
function createEntriesByLocation(array, location){
  
}


