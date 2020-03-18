var ex1 = 3,
    ex2 = 'DHG18',
    ex3 = '5',
    ex4 = false,
    ex5 = [
      'vår',
      'sommar',
      'höst',
      'vinter'
    ];

/*** UPPGIFT 1 ***/
console.log(typeof ex1)
console.log(typeof ex2)
console.log(typeof ex3)
console.log(typeof ex4)
console.log(ex1 + ex3) //den visar 35 för att ex3 är en string och inte ett nummer
var parseex3 = parseInt(ex3)
console.log(ex1 + parseex3)
var ex2Length = ex2.length
console.log(ex2Length)

/*** UPPGIFT 2 ***/
console.log(typeof ex5) //den visar object men borde vara array
console.log(ex5.length)
console.log("nu är det " + ex5[0])
var i = 0;
while (i<4){
  console.log(ex5[i])
  i++
}
/*** UPPGIFT 3 - TA BORT DENNA KOMMENTAR DÅ DU BÖRJAR ****/

document.getElementById('aniBtn').addEventListener('click', function() {

  const box = document.querySelector('#box_1');
  if(box.classList.contains('animateWidth')) {
    box.classList.remove('animateWidth');
  } else {
    box.classList.add('animateWidth');
  }
});

 /**** END UPPGIFT 3 -  TA BORT****/
