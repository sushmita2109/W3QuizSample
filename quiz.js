document.getElementById("btn").onclick = function () {
  let radios = document.getElementsByClassName("radio");
  let result = document.getElementById("result");
  let questionBox = document.getElementById("question");
  let selectedValue = null;

  // find selected radio
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedValue = radios[i].value;
      break;
    }
  }

  if (!selectedValue) {
    result.textContent = "Please select an option.";
    result.style.color = "orange";
    return;
  }

  if (selectedValue === "background-image") {
    document.querySelector(".quiz").style.display = "none";
    questionBox.style.backgroundColor = "green";
    result.textContent = "Correct!";
    result.style.color = "white";

    let nextBtn = document.createElement("button");
    nextBtn.textContent = "Next Question >>";
    nextBtn.style.marginTop = "10px";
    nextBtn.onclick = function () {
      document.querySelector(".quiz").style.display = "block";
      questionBox.style.backgroundColor = "transparent";
      result.textContent = "";
    };
    result.appendChild(document.createElement("br"));
    result.appendChild(nextBtn);
  } else {
    document.querySelector(".quiz").style.display = "none";
    result.textContent = " Incorrect, try again.";
    result.style.color = "white";
    questionBox.style.backgroundColor = "red";

    let prevQues = document.createElement("button");
    prevQues.textContent = "Same Question >>";
    prevQues.style.marginTop = "10px";
    prevQues.onclick = function () {
      document.querySelector(".quiz").style.display = "block";
      questionBox.style.backgroundColor = "transparent";
      result.textContent = "";
    };
    result.appendChild(document.createElement("br"));
    result.appendChild(prevQues);
  }
};
document.getElementById("close-btn").onclick = function () {
  window.close();
};
