// 1. Three different car manufacturers (Chevy, Ford, Mercedes)
// 2. Two to four car types per manufacturer
// 3. Track mileage for each car
// 4. Set a car availability status.  Make some available some not available 
// 5. The daily car rental rate for each car.
// 6. The names of the person renting (if the car is not available)
// 7. The number of days the car is being rented ( if the car is not available)
// 8. Create a summary report for each car that is rented (not currently available).
// 9. Instead of writing your code all in the Global scope.  Use more than one function.  split various jobs into different functions.  
//    Have the main function call each of the other functions.

const carManufacturers = ['Chevy', 'Ford', 'Mercesdes']
const carModels = [ ['Malibu', 'Camaro', 'Tahoe'], ['Focus', 'Mustang', 'Explorer'], ['S-Class', 'GLS-Class']]
const carMiles = [ [41200, 11500, 35000], [62500, 24500, 37000], [12000, 5000] ]
const carAvailbility = [ [true, false, false], [true, false, true], [true, true] ]
const carRate = [ [30, 45, 60], [30, 45, 60], [50, 80]]

allCars = function() {
    for (i = 0; i < carManufacturers.length; i++) {
        for (j = 0; j < carModels[i].length; j++) {
            console.log(carManufacturers[i], carModels[i][j],'Milage:', carMiles[i][j], 'Availiablity:', carAvailbility[i][j],'Daily Rate: $',carRate[i][j]);
        }
    }
}

notAvailiable = function() {
    for (i = 0; i < carManufacturers.length; i++) {
        for (j = 0; j < carModels[i].length; j++) {
            const personRenting = [ ['NA', 'Arnell', 'Ben'], ['NA', 'Hannah', 'NA'], ['NA', 'NA'] ]
            if (carAvailbility[i][j] === false)
            console.log('The',carManufacturers[i], carModels[i][j],'is not availiable.', personRenting[i][j], 'is currently renting it.');
        }
    }
}

daysUnavailiable = function() {
    for (i = 0; i < carManufacturers.length; i++) {
        for (j = 0; j < carModels[i].length; j++) {
            var daysRented = [ ['NA', '4', '2'], ['NA', '7', 'NA'], ['NA', 'NA'] ]
            if (carAvailbility[i][j] === false)
            console.log('The',carManufacturers[i], carModels[i][j],'is unavailiable for', daysRented[i][j], 'more days');
        }
    }
}

summaryReport = function() {
notAvailiable(), daysUnavailiable()
}

summaryReport()
