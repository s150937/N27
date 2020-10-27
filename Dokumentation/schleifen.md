# Schleifen

eine Schleife ist ein Anweisungsblock, dessen Anweisung mehrfach wiederholt werden,
bis die Bedingungen erfüllt 

## Beispiel:

Ein Programm versucht immer wieder eine Verbindung zum Internet herzustellen. Wenn die Verbindung steht, beendet sich die Schleife

Es sollen eine bestimmte Anzahl von Schritten zuerst in die eine Richtung 
und dann in eine andere Richtung gegangen werden.

Errechnung von Zins und Zinseszins bei Kreditverträgen

## Arten von Schleifen

* for-Schleife
* While-Schleife

## Aufgabe 

Erstelle eine Schleife in der server.js. Es soll von 1 - 10 hochgezählt werden

Schleifen in der Server.js einfügen... hier soll diese schleife bis 10 zählen

for (var i = 0; i <= 10; i++) {
    console.log(i)
}

Was passiert im Kopf der For-Schleife?

1. Zunächst wird eine variable namens i deklariert und mit initialisiert
2. Der Wert i wird verglichen mit dem Wert 10. Solange i kleier oder 
gleich 10 ist wird der Rumpf der Schleife erneut ausgeführt.
3. bei "i++": der Wer von i wird mit jedem Schleifen durchlauf um 1 erhöht.

for (var i = 10; i >= 0; i--) {
    console.log(i)
}

hier wird dann runtergezählt also: 10, 9, 8, 7,.....


for (var i = 0; i <= 10; i++) {
    console.log(i)
}
for (var i = 10; i >= 0; i--) {
    console.log(i)
}

das macht man um rauf und danach wieder runter zählen zu lassen
also 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8,......




for(var z = 0; z < 1; z++){
    for (var i = 0; i <= 10; i++) {
        console.log(i);
    }
    for (var i = 10; i >= 0; i--) {
        console.log(i);
    }
}

hier wird rauf und runter gezählt wie oben aber, da wo die 1 steht... diese bestimmmt wie oft durchgezählz wird