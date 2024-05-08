let p1currentscore = 0;   // Player One Score
let p2currentscore = 0;   // Player Two Score
let toss = 0;   

// Toss

document.getElementById("toss1").addEventListener("click", function () {
  if (toss > 0) {
    alert("Already Tossed!");
  } 
  
  else {
    toss = Math.random();
    toss = toss * 2 + 1;   
    toss = Math.trunc(toss);  // will generate only two values 1 and 2.
    // console.log(toss);
  }


  if (toss == 1) {
    document.getElementById("turn").innerHTML = "Player 1";
  }
  
  else {
    document.getElementById("turn").innerHTML = "Player 2";
  }
});


//Roll Dice

document.getElementById("btn").addEventListener("click", function () {
  if (toss == 0) {
    alert("Toss Please!");
  } else {
    let x = Math.random();
    x = x * 6 + 1;
    x = Math.trunc(x);   // will generate value from 1 to 6.
    // console.log(x);
    let dic; // to store the link(string).


    if (toss == 1) {
      for (let i = 1; i <= 6; i++) {
        if (x == i) {
          dic = "dice-" + [i] + ".png";
          document.getElementById("pic").src = dic;
          document.getElementById("p1value").innerHTML = x;
          p1currentscore = p1currentscore + x;
          document.getElementById("currentp1value").innerHTML = p1currentscore;
          document.getElementById("turn").innerHTML = "Player 2";
          if (p1currentscore >= 100) {
            alert("Player One Win The Game!");
          }
        }
      }
      toss++;
    } 
    
    else {
      for (let i = 1; i <= 6; i++) {
        if (x == i) {
          dic = "dice-" + [i] + ".png";
          document.getElementById("pic").src = dic;
          document.getElementById("p2value").innerHTML = x;
          p2currentscore = p2currentscore + x;
          document.getElementById("currentp2value").innerHTML = p2currentscore;
          document.getElementById("turn").innerHTML = "Player 1";
          if (p2currentscore >= 100) {
            alert("Player Two Win The Game!");
          }
        }
      }
      toss--;
    }
  }
});



// Restart


document.getElementById("reset").addEventListener("click", function () {
  if (toss > 0) {
    p1currentscore = 0;
    p2currentscore = 0;
    toss = 0;
    let z = 0;
    document.getElementById("turn").innerHTML = "Turn";
    document.getElementById("pic").src = "dice-1.png";
    document.getElementById("p1value").innerHTML = z;
    document.getElementById("p2value").innerHTML = z;
    document.getElementById("currentp1value").innerHTML = p1currentscore;
    document.getElementById("currentp2value").innerHTML = p2currentscore;
  } 
  
  else {
    alert("First Start The Game Please");
  }
});
