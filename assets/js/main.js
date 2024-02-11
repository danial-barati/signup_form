let inp = document.querySelectorAll("input");
let label = document.querySelectorAll("label");
let bar = document.getElementById("labelbar");

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  label.forEach((value) => {
    value.style.opacity = "0";
  });
  let inpNval = inp[0].value;

  if (inpNval == null || inpNval == "") {
    label[0].style.opacity = "1";
    e.preventDefault();
  } else {
    if (inpNval.search(/[^a-z]/) >= 0) {
      label[0].style.opacity = "1";
      e.preventDefault();
    }
  }

  //   ** end of firstname **

  let inpLval = inp[1].value;

  if (inpLval == null || inpLval == "") {
    label[1].style.opacity = "1";
    e.preventDefault();
  } else {
    if (inpLval.search(/[^a-z]/) >= 0) {
      label[1].style.opacity = "1";
      e.preventDefault();
    }
  }

  //   ** end of lastname **

  let _email = inp[2].value;
  let _at = _email.lastIndexOf("@");

  if (
    _email != null &&
    _email != "" &&
    _email.search(/<script/) == -1 &&
    _email.search(/\s/) == -1 &&
    _email.search(/[ا-ی]/) == -1
  ) {
    if (
      _email.search(/[@]/) <= 3 ||
      _email.lastIndexOf(".") > _email.length - 3 ||
      _email.lastIndexOf(".") < _at
    ) {
      label[2].style.opacity = "1";
      e.preventDefault();
    }
  } else {
    label[2].style.opacity = "1";
    e.preventDefault();
  }

  if (chance != 4) {
    label[3].style.opacity = "1";
    e.preventDefault();
  }

  //   repeat checker **

  if (inp[3].value != inp[4].value) {
    label[4].style.opacity = "1";
    e.preventDefault();
  }
});

// ** start of password **

let _status = document.getElementById("status");
let chance = 0;

inp[3].addEventListener("keyup", () => {
  chance = 0;
  mypass = inp[3].value;

  if (mypass.search(/[a-zA-Z]/) >= 0) {
    chance++;
  }
  if (mypass.search(/[0-9]/) >= 0) {
    chance++;
  }
  if (mypass.search(/[!@#$%^&*()]/) >= 0) {
    chance++;
  }
  if (mypass.length > 8) {
    chance++;
  }

  let _width = 0;
  let _color = "";
  let statuschecker = "";
  console.log(chance);
  switch (chance) {
    case 0:
      (_width = 0), (_color = ""), (statuschecker = "");
      break;
    case 1:
      (_width = 40), (_color = "red"), (statuschecker = "weak!");
      break;
    case 2:
      (_width = 60), (_color = "orange"), (statuschecker = "not bad!");
      break;
    case 3:
      (_width = 80), (_color = "yellow"), (statuschecker = "medium");
      break;
    case 4:
      (_width = 100), (_color = "green"), (statuschecker = "good!");
      break;
  }

  bar.style.background = _color;
  bar.style.width = _width + "px";
  _status.innerHTML = statuschecker;
});

// ** start of hide or show pass **
const _icon = ['<i class="bi bi-eye"></i>', '<i class="bi bi-eye-slash"></i>'];
let _span = document.querySelectorAll("span");
let _flag1 = 1;
let _flag2 = 1;

_span.forEach((val, i) => {
  val.innerHTML = _icon[1];

  val.addEventListener("click", () => {
    if (i == 0) {
      if (_flag1 % 2) {
        _span[i].innerHTML = _icon[0];
        inp[3].setAttribute("type", "text");
      } else {
        _span[i].innerHTML = _icon[1];
        inp[3].setAttribute("type", "password");
      }
      _flag1++;
    } else if (i == 1) {
      if (_flag2 % 2) {
        _span[i].innerHTML = _icon[0];
        inp[4].setAttribute("type", "text");
      } else {
        _span[i].innerHTML = _icon[1];
        inp[4].setAttribute("type", "password");
      }
      _flag2++;
    }
  });
});
