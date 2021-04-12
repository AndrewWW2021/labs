let chk = true;
let checkMassiv1 = 1;
let checkMassiv2 = 1;
let checkMassiv3 = 1;
let checkMassiv4 = 1;
function calc() {

    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;

    let N = first;
    let str1 = second.split(" ");



    let Arr = listToMatrix(str1, N);

    let strArr = "";
    let strN = '\n';


    let y = 0;

    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        y+=1;
      }
    }



    if (y != N*N) {
      alert("Введите N^2 кол-во чисел");
      chk = false;
    }

    if (chk == true) {
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        if (Arr[i][j] != Arr[j][i]) {
          checkMassiv1 = 0;
        }
      }
    }

    }

    let c1 = 'да';
    if (checkMassiv1 == 0){
      c1 = 'нет';
    }


    document.getElementById("one").innerHTML ='симметричность: ' + c1;



    if (chk == true) {
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        if (Arr[i][j] != Arr[j][i]) {
          checkMassiv2 = 0;

        }

      }
    }

    }

    let c2 = 'нет';
    if (checkMassiv2 == 0){
      c2 = 'да';
    }


    document.getElementById("two").innerHTML ='кососимметричность: ' + c2;


    if (chk == true) {
      let i = 0;
      for (var j = 0; j < N; j++) {
        if (Arr[i][j] != 1){
          checkMassiv3 = 0;
        }
        i++;
      }

    }

    let c3 = 'да';
    if (checkMassiv3 == 0){
      c3 = 'нет';
    }

    document.getElementById("three").innerHTML ='рефлексивность: ' + c3;

    if (chk == true) {
      let k = 0;
      for (var i = 0; i < N; i++){
        for (var j = 0; j < N; j++){
          if (Arr[i][k]*Arr[k][j] != Arr[i][j]) {
            checkMassiv4 = 0;
          }


        }
        k++;
      }
    }
    let c4 = 'да';
    if (checkMassiv4 == 0){
      c4 = 'нет';
    }

    document.getElementById("four").innerHTML ='транзитивность: ' + c4;

    let chk_forma = document.getElementById("name").value;
    alert(chk_forma);
    document.getElementById("five").innerHTML ='проверка текст ареа: ' + chk_forma;



    if (chk == true) {
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        strArr = strArr + Arr[i][j] + " " ;
      }
      strArr = strArr + strN;

    }
    alert("Ваш массив:\n\n" + strArr);

}
}

function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}
