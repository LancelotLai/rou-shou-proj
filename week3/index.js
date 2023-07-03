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
        alert("Female can't fap, diuhi and callFBI.")
        break;
      case (c3.checked):
        alert("Female can't callFBI.")
        break;
    }

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

function changeAudio(){
  document.getElementById()
}

//https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png
//"https://ppt.cc/fzRhax@.png"