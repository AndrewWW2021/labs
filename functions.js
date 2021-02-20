function check() {
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;

  let str1= first.split(" ");
  let str2= second.split(" ");

  str1.forEach((item, i) => {
    if (item.length != 4 || item.length != 4) {
      alert('введи 4 цифры');
    }
    if (item % 2 != 0 || item % 2 != 0) {
      alert('введи четное');
    }
  });

  str2.forEach((item, i) => {
    if (item.length != 4 || item.length != 4) {
      alert('введи 4 цифры');
    }
    if (item % 2 != 0 || item % 2 != 0) {
      alert('введи четное');
    }
  });

}

function calc() {
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;

  let res1 = first + ' ' + second;

  let Text1 = document.getElementById("one").innerHTML;

  document.getElementById("one").innerHTML = Text1 + ' ' + res1;


}

function intersection() {
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;

  let str1= first.split(" ");
  let str2= second.split(" ");

  let res2 = str1.filter(x => str2.includes(x));


  let Text2 = document.getElementById("two").innerHTML;

  document.getElementById("two").innerHTML = Text2 + ' ' + res2;


}

function difference() {
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;

  let str1= first.split(" ");
  let str2= second.split(" ");

  let res3 = str1.filter(x => !str2.includes(x));


  let Text3 = document.getElementById("three").innerHTML;

  document.getElementById("three").innerHTML = Text3 + ' ' + res3;
}

function sim_difference() {
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;

  let str1= first.split(" ");
  let str2= second.split(" ");

  let res4 = str1.filter(x => !str2.includes(x)).concat(str2.filter(x => !str1.includes(x)));


  let Text4 = document.getElementById("four").innerHTML;

  document.getElementById("four").innerHTML = Text4 + ' ' + res4;
}
