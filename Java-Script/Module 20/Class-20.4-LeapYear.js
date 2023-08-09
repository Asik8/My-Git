function leapYear(year){
    if(year%4==0 || year%100==0){
    return 'leap year';
    }
    return 'not leap year';
}

var year=leapYear(1965);
console.log('This year is',year);