let answer = 0
function number() {
  answer = document.getElementById("enter").value;
  answer = parseInt(answer)
  if (answer>0) {
alert("positive")
  } else {
    alert("negative")
  }
}