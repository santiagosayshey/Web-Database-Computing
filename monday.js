function isItTuesday() {
  const TUESDAY = 2;
    var now = new Date();
  if (now.getDay() == TUESDAY) {
    alert("It's Tuesday!")
  } else {
    alert("It's not Tuesday!")
  }
}

isItTuesday();