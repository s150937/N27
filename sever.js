// Das ist ein einzeiliger Kommentar
/* Das ist ein Mehrzeiliger kommentar */

// Das Express-Framework wird eingebunden.
// Ein Framework soll die Programierung erleichtern.
// Das Framework muss mit npm installiert werden:
// im Terminal: npm install express --save

// Wird zusammen mit Node js. verwendet
const express = require('express')

// Das app-Objekt wird initialisiert
// Das app-Objekt repräsentiert den Sever
// Auf das app-Objekt werden im Folgenden Methoden aufgerufen  
// Das = bedeutet zuweisen
// repräsentiert den sever mit all den Einstellungen und Funktionen
// Bindeglied zwischen dem Node Webserver und dem Client Browser
const app = express()

// Mit der ejs.view-Engine werden Werte
// von der Sever.js zur index-Datei gegeben

app.set('view engine', 'ejs')

// aufgrund von Funktionen, parameter, schlüsselwertpaar, Daten werden an das Hmtl formular übergeben undz.b. tabellarisch erstellt

app.use(express.static('public'))

// sucht Statische Inhalte (Statische Inhalte: bleiben wie sie sind, lassen sich nicht durch die Programmier Sprache verändern)

const bodyParser = require('body-parser')

// Bereitet die Daten aus dem html formular für die Übergabe an die Sever js. vor

app.use(bodyParser.urlencoded({extended: true}))
// Der Bodyparser wird so in die App eingebunden

// jeder sever hat einen eigenen Port 
// In die () kann man Parameter eingeben
// Sever starten: node .\server.js 
// Sever stoppen mit: strg + c
const server = app.listen(process.env.PORT || 3000, () => {       
     console.log('Server lauscht auf Port %s', server.address().port)  
      })

app.get('/',(req, res, next) => {
    res.render('index.ejs', {

    })
})