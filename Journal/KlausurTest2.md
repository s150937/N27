# Klausur / Test 2 am 14.1.2020 um 9:10 Uhr

1. fehler finden und auf Papier dokumentieren
2. Alles, was in T1 / K1 relevant war
3. Selbst etwas ausprogrammieren (GUI oder in der Server.js)
4. SQL (eventuell einen unbekannten SQL-Befehl anhand einer gegebenen Dokumentation selbst erstellen.)
5. if und else (auch verschachtelt)
6. Symmetrische und asymmetrische verschlüsselung erklären/ gegeneinander abgrenzen. Den Sinn jewals erklären. Die Implementation am Rechner kurz beschreiben.


# Beispiel: if und else
```Javascript

// Wenn ein Schüler / eine Schülerin nicht volljährig ist, wird eintritt verweigert.

var darfHinein = ""
var alter = 18;

if(alter >= 18){
    darfhinein = "Ja"
}
console.Log("Der Schüler / die Schülerin darf hinein: " + darfHinein )

```

```Javascript
// Wenn ein Schüler / eine Schülerin nicht volljährig ist, wird eintritt verweigert.

var darfHinein = ""
var alter = 18;

if(alter >= 18){
    darfhinein = "Ja"
}else{
    darfHinein = "nein"
}

console.Log("Der Schüler / die Schülerin darf hinein: " + darfHinein )

```

// Gullien: volljährig oder nicht, Führerschein Ja oder Nein ist also etwas wo es nur 2 antwortsmöglichkeiten gibt

```Javascript
// Wenn ein Schüler / eine Schülerin nicht volljährig ist, wird eintritt verweigert.

var darfHinein = true
var istVolljaehrig = true,

if(istVolljaerig{
    darfhinein = true
console.Log("Der Schüler / die Schülerin darf hinein: " )
}else{
    darfHinein = false
    console.Log("Der Schüler / die Schülerin darf nicht hinein: " )
}
```

```Javascript
// Wenn ein Schüler / eine Schülerin nicht volljearig ist, wird "eintritt verweigert. 
// Schülerinnen zahlen 3 Euro
// Schüler zahlen 4 Euro.
var darfHinein = true
var istVolljaehrig = true,
var geschlecht = "w"


if(istVolljaerig{

    darfhinein = true
if(geschlecht === "w"){
    console.Log("Die Schülerin darf hinein. Preis: 2 Euro")
}

}else{
    darfHinein = false
    console.Log("Der Schüler darf hinein. Preis 4 Euro" )
}
```