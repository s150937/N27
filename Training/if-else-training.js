/**
 * Hier Können sie IF und ELSE trainieren.
 * Am besten dazu den nodemon starten:
 * 
 *          .\node_modules\.bin\nodemon Training\if-else-training.js
 * 
 * Dann die ausgabe im Terminal beobachten.
 */

// Deklaration und initialisierung 
// Lies: "der Wert 0 wir zugewiesen an
//        eine Variable namens x"
 let x = 0
 let y = 1

 if("Gw11A".endsWith("A")||"GW11A".endsWith("B")||"GW11A".startsWith("GT")) {
     console.log("Die Prüfung ist WAHR. Es werden die Anweisungen im Rumpf von IF ausgeführt.")
 }else{
    console.log("Die Prüfung ist FALSCH. Es werden die Anweisungen im Rumpf von Else ausgeführt.")
}

//FÄLLE:

// 23. if("Gw11A".endsWith("A")||"GW11A".endsWith("B")||"GW11A".startsWith("GT"))

// 22. if("Gw11A".endsWith("A")||"GW11A".endsWith("B"))

// 21. if("Gw11A".endsWith("A"))    Der Ausdruck ist wahr. Die Funktion prüft, ob eine Zeichenkette
//                                  mit einer anderen endet.

// 20. if("Gw11A".includes("11"))   Der Ausdruck ist wahr. Die Funktion prüft,
//                                  ob eine Zeichenkette eine andere Zeichenkette enthält.

// 19. if("GW11A".startsWith("G")) Der Ausdruck ist wahr. Die Funktion prüft,
//                                 ob eine Zeichenkette mit einer anderen Zeichenkette beginnt                                  

// 18. if("GW11A".length === 5) Der Ausdruck ist wahr. Die Eigenschaft lenght gibt die Anzahl der Zeichen einer Zeichenkette zurück

// 17. if(undefined)       Der Ausdruck ist falsch. Ein Objekt ist undefined wenn es nicht existiert.

// 16. if(1 > 2 || 1 == 1) Der Ausdruck ist wahr, weil eine der beiden prüfungen wahr ist.

// 15. if(1 > 2 && 1 == 1) Der Ausdruck ist falsch, weil die erste prüfung falsch ist
//                         Alle mit && verketteten Prüfung müssen wahr sein , damit die Prüfung insgesamt wahr sind.

// 14. if(false)        Der Ausdruck ist falsch.       

// 13. if(true)         Der Ausdruck ist wahr.

// 12. if(0)            Die Zahl 0 ist falsch.

// 11. if(-123)         Zahlen sind wahr bis auf 0.

// 10. if("")           leere zeichenketten in javascript sind falsch.

// 9. if("Ah")          nicht leere Zeichenketten in javascript sind wahr.

// 8. if(1 != 0)        Vergleichsoperator: "ungleich"       Der ausdruck ist wahr.

// 7. if(1 <= 1)        Vergleichsoperator: "kleiner gleich" Der Ausdruck ist wahr.

// 6. if(1 >= 1)        Vergleichsoperator: "größer gleich" Der Ausdruck ist wahr.

// 5. if(1 === "1")     Vergleichsoperator: "gleich"        Der Ausdruck ist falsch.
//                      Das dreifache "===" prüft auf Gleichheit des Typs.
//                      "1": String / Zeichenkette
//                       1 : zahl


// 4. if(1 == "1")      Vergleichsoperator: "gleich"       Der Ausdruck ist wahr
//                      das doppelte "==" prüft auf gleichheit des wertes,
//                      aber nicht auf die gleichheit des Typs.

// 3. if(0 == 1)        Vergleichsoperator: "gleich"       Der Ausdruck ist faslsch

// 2. if(0 > 1)         vergleichsoperator: "größer als"   Der Ausdruck ist falsch.

// 1. if(0 < 1)         Vergleichsoperator: "kleiner als"  Der Ausdruck ist wahr.