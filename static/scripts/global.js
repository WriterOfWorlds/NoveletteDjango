function fillContent(content, loc) {
  try {
    if (typeof (content) + typeof (loc) != "stringstring") {
      console.log("Can't help you more than that, check your code.");
      throw "Value was not a string somewhere."
    }
    var parsedContent = "";
    for (var i = 0; i < content.length; i++) {
      switch (content.charAt(i)) {
        case "~":
          parsedContent += "<br>";
          break;
        case "[":
          //This is where my code spaghettifies. Thank god I don't have to touch this after I'm finished with this script.
          if (content.slice(i, i+6) == "[!red!") {
            parsedContent += "<span class='red'>";
            i = i + 5;
          } else if (content.slice(i, i+7) == "[!blue!") {
            parsedContent += "<span class='blue'>";
            i = i + 6;
          } else if (content.slice(i, i+9) == "[!yellow!") {
            parsedContent += "<span class='yellow'>";
            i = i + 8;
          } else {
            parsedContent += "<span>";
          }
          break;
        case "]":
          parsedContent += "</span>";
          break;
        default:
          parsedContent += content.charAt(i);
      }
    }
    // parsedContent += "</p>";
  }
  catch (err) {
    alert("Error: " + err)
  }
  document.getElementById(loc).innerHTML = parsedContent;
}

function fillImage(path, loc, title) {
  try {
    if (typeof (path) + typeof (loc) != "stringstring") {
      console.log("Can't help you more than that, check your code.");
      throw "Value was not a string somewhere."
    }
    document.getElementById(loc).src = path;
    if (title != null) {
      document.getElementById(loc).title = title;
    }
  }
  catch (err) {
    alert("Error: " + err)
  }
}

function setTitle(title, loc) {
  try {
    if (typeof (title) + typeof (loc) != "stringstring") {
      console.log("Can't help you more than that, check your code.");
      throw "Value was not a string somewhere."
    }
    document.getElementById(loc).title = title;
  }
  catch (err) {
    alert("Error: " + err)
  }
}

function fillTemplate(parameter, loc) {
  try {
    if (typeof (content) + typeof (loc) != "stringstring") {
      console.log("Can't help you more than that, check your code.");
      throw "Value was not a string somewhere."
    }
  }
  catch (err) {
    alert("Error: " + err)
  }
}

function background(bg) {
  try {
    if (typeof (bg) != "string") {
      console.log("Can't help you more than that, check your code.");
      throw "Value was not a string somewhere."
    }
    document.body.style.background = bg;
  }
  catch (err) {
    alert("Error: " + err)
  }
}

function setState(state, loc, funct) {
  try {
    if (typeof (state) + typeof (loc) != "stringstring") {
      console.log("Can't help you more than that, check your code.");
      throw "Value was not a string somewhere."
    }
    switch (state) {
      case "interactable":
        document.getElementById(loc).className = "interactDiv";
        break;
      case "defaultImage":
        document.getElementById(loc).className = "imageDiv";
        break;
      case "hide":
        // document.getElementById(loc).style.display = "none";
        document.getElementById(loc).style.animation = "hide 1s forwards";
        break;
      case "show":
        document.getElementById(loc).style.animation = "show 1s forwards";
    }
    if (funct != null) {
      document.getElementById(loc).onclick = funct;
    }
  }
  catch (err) {
    alert("Error: " + err)
  }
}

function audio(path) {
  try {
    if (typeof (path) != "string") {
      console.log("Can't help you more than that, check your code.");
      throw "Value was not a string somewhere."
    }
    document.getElementById("body").innerHTML += "<audio src='" + path + "' autoplay loop>";
  }
  catch (err) {
    alert("Error: " + err)
  }
}

// What the fuck? If you put something right before audio the thing doesn't do it's job and it instead just plays the audio and continues.