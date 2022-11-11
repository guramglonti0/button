var counter = 0;
function plus() { 
    if (counter<10){
        counter += 1;
    }
  document.getElementById("counter").innerHTML = counter;
}
function minus() {
  if(counter >0  && counter<=10){
    counter -= 1; 
  } 
  document.getElementById("counter").innerHTML = counter;
}