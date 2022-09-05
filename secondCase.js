function evenOrOdd(number) {
    number = ""+parseInt(number)
    let sum = 0
    for (var i=0; i < number.length; i++) {
      sum+=parseInt(number[i])
    }
    return sum % 2 ? "Even" : "Odd"
    }
  
    console.log(evenOrOdd("4323asd"))