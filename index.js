// Code your solution here


// function  findMatching(){
//     const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// const match= drivers.filter(function(driver){

//     return driver==='Bobby';
// })


// console.log(match);

// }

// findMatching();

function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
      return driver.toLowerCase() === name.toLowerCase();
    });
  }

  

  function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
      return driver.startsWith(letters);
    });
  }

  
  function matchName(drivers, name) {
    return drivers.filter(function(driver) {
      return driver.name === name;
    });
  }
  





