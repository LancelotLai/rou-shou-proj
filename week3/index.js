function cleartext() {
  document.getElementById("Textarea").value = "";
}

function submitAlert() {
  alert("submitted");
}

function avoidJump () {
  return false ;
}

function vaildate1(event) {
  var c1 = document.getElementById("habit1");
  var c2 = document.getElementById("habit2");
  var c3 = document.getElementById("habit3");
  // if (c1.checked === true){
  //   console.log(c1.value);
  // }
  // if (c2.checked === true){
  //   console.log(c2.value);
  // } else {
  //   return null;
  // }
  // if (c3.checked === true){
  //   console.log(c3.value);
  // } else {
  //   return null;
  // }
  

  switch (true){
    case (c1.checked === true):
      console.log(c1.value);
       break;
    case (c2.checked === true):
      break;
      console.log(c2.value);
    case (c3.checked === true):
      console.log(c3.value);
      break;
      default:
        break;
  }

}


function getsubmitdata (event) {
  console.log(event.target.elements.textarea1.value);
  console.log(event.target.elements.sex.value);
  vaildate1();
  return false;
}

function changeSrc(event) {
  try {
  event.preventDefault();
  document.getElementById("image1").src="https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png" ;
  getsubmitdata(event);
  // submitAlert();
  } catch(err) {
    throw err;
  }
}

function demo1 (){
  document.getElementById("male").innerHTML = p
}

//https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png
//"https://ppt.cc/fzRhax@.png"