let seatsLeft = 10;

let passengersStillToBoard = 8;


let passengersBoarded = 0;


while (seatsLeft > 0 && passengersStillToBoard > 0) {

    passengersBoarded++; 
    passengersStillToBoard--; // so there is one fewer still to board

    seatsLeft--; // and one fewer seat

}


console.log(passengersBoarded);