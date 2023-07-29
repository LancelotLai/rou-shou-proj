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
  var s1 = document.getElementById("male");
  var s2 = document.getElementById("female");
  var s3 = document.getElementById("cfu");
  var c1 = document.getElementById("habit1");
  var c2 = document.getElementById("habit2");
  var c3 = document.getElementById("habit3");

if (s2.checked){
  if(c1.checked){
    switch(true){
      case (c2.checked && c3.checked):
        alert("Female can't fap, diuhi and callFBI.");
        break;
      case(c2.checked):
      alert("Female can't fap and diuhi.");
      break;
      case (c3.checked):
        alert("Female can't fap and callFBI.");
        break;
        default:
          alert("Female can't fap");
    } 
  } 
  if (c2.checked){
    switch(true){
      case (c3.checked):
        alert("Female can't diuhi and callFBI.");
        break;
        default:
          alert("Female can't diuhi");
  } 
} 
else {
  alert("Female can't calFBI");
}
} else{
  alert("You can do what you want.");
  return disNone();
}

}


    switch (true){
      // case ( c1.checked && c2.checked && c3.checked === true ):
      //   alert("Female can't fap, diuhi and callFBI.")
      //   break;
      // case (c1.checked && c2.checked === true ):
      //   alert("Female can't fap and diuhi.")
      //   break;
      // case ( c1.checked && c3.checked === true ):
      //   alert("Female can't fap and callFBI.")
      //   break;
      // case ( c2.checked && c3.checked === true ):
      //     alert("Female can't diuhi and callFBI.")
      //     break;
      // case ( c1.checked === true ):
      //   alert("Female can't fap.")
      //    break;
      // case ( c2.checked === true ):
      //   alert("Female can't diuhi.")
      //   break;
      // case ( c3.checked === true ):
      //   alert("Female can't callFBI.")
      //   break;
        default:
          break;
    }

function disNone() {
  event.preventDefault();
console.log(123);
  try{
      document.getElementById("image1").style.display = "none";
      document.getElementById("fig1").innerHTML = "Failed";
  }
  catch(err){
    throw err;
  }
}

function getsubmitdata (event) {
  console.log(event.target.elements.textarea1.value);
  console.log(event.target.elements.sex.value);
  vaildate1();
  return false;
}

function changeSrc() {
  try {
  event.preventDefault();
  document.getElementById("image1").src = "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png" ;
  getsubmitdata(event);
  // submitAlert();
  } catch(err) {
    throw err;
  }
}

function demo1 (){
  document.getElementById("male").innerHTML = p
}


// function cAudio() {
//   document.getElementById("audio").innerHTML =  
//   "<audio id = "song1"
//   src="04 Floor Killer .mp3?autoplay=1"
//   type="audio/mpeg"
//   allow="autoplay; mute">"
// }


function cAudio2() {
  event.preventDefault();
  document.getElementById("audio1").innerHTML = ('<audio id="audio-player" controls="controls" src="04 Floor Killer .mp3" type="audio/mpeg" allow="autoplay; mute">');

}

//https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png
//"https://ppt.cc/fzRhax@.png"