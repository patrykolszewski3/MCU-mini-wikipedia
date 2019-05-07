
//  Zainicjowanie zmiennej
var myVar;

// Funkcja uruchamiająca się po wciśnięciu przycisku 
// Po 3 sekundach uruchamia kolejną funkcję, a po wciśnięciu przycisku zmienia jego kolor i napis w nim
function myFunction() {
  myVar = setTimeout(alertFunc, 3000);
  document.getElementById("snapButton").innerHTML ='<button type = "button" class = "btn btn-warning" > Zaczekaj! ';
}

// Wyświetla alert, który wyświetla losowo jeden z dwóch tekstów
function alertFunc() {
  // alert("Uff... Co za ulga. Nawet nie wiesz jak bardzo tego potrzebowałem!");
  var message = ["Twoje ciało powoli zmieniło się w pył. Mam nadzieję, że Cię dobrze zapamiętają!", "Zostałeś oszczędzony, by móc żyć w perfekcyjnie zbalansowanym wszechświecie. Miłej zabawy!"];

  var a = Math.floor(Math.random() * message.length);

  window.alert(message[a]);
}