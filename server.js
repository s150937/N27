class Konto{
    constructor(){
        this.Kontonummer
        this.kontoart
        this.Iban
    }
}

// Klassendefinition

class Kunde{
    constructor(){
        this.Vorname
        this.Nachname
        this.Geschlecht
        this.IdKunde
        this.Geburtsdatum
        this.Adresse
        this.Kennwort
    }
}

// Deklaration und Instanziierung

let kunde = new Kunde()

// Initialisierung

kunde.IdKunde = 4711
kunde.Kennwort = "123"
kunde.Vorname = "Hildegard"
kunde.Nachname = "Schmidt"
kunde.Geschlecht = "w"
kunde.Geburtsdatum = "1999-12-31"
kunde.Adresse = "Berlin"


// Die Zahl 272727 wird zugewiesen an einer variablen namens Bankleitzahl 
//vom Typ const (so liest man const bankleitzahö = 272727)
const bankleitzahl = 27272727
const leandererkennung = "DE"

// Das modul namens modul wird eingebunden und zugewiesen an eine variable namens express vom typ const
const express = require('express')
const iban = require('iban')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

// Ein server der lauscht auf veränderungen 
const server = app.listen(process.env.PORT || 3000, () => {
   
   // Ausgabe von 'Server lauscht auf...' im Terminal
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Die App.get('/'...) wird abgearbeitet wenn die Startseite 
//im Browser aufgerufen wird.
app.get('/',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('index.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

// Wenn die Seite localhost:3000/impressum aufgerufen wird, ...

app.get('/impressum',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        
        // ... dann wird impressum.ejs gerendert. 
        res.render('impressum.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})



app.get('/login',(req, res, next) => {         
    res.cookie('istAngemeldetAls', '')       
    res.render('login.ejs', {                    
    })
})

app.post('/',(req, res, next) => {   
    
    // Der Wert des Inputs mit dem name = "idKunde" wird über...
    // ...den request zugewiesen an die konstanteidKunde
    const idKunde = req.body.idKunde
    const kennwort = req.body.kennwort
    
    console.log(idKunde + " == " + kunde.IdKunde + "&&" + kennwort + " == " + kunde.Kennwort)

    // Wenn der Wert von idkunde dem wert der Eigenschaft kunde.IdKunde
    // entspricht UND der Wert von Kennwort der Eigenschaft kunde.Kennwort
    // entspricht dann, werden die Anweisungen im Rumpf der if-Kontrollstruktur 
    // abgearbeitet.
    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){            
        console.log("Der Cookie wird gesetzt:")
        res.cookie('istAngemeldetAls', idKunde)
        res.render('index.ejs', {  
            kunde : idKunde          
        })
    }else{            
        console.log("Der Cookie wird gelöscht")
        res.cookie('istAngemeldetAls','')
        res.render('login.ejs', {                    
        })
    }
})

// Wenn die Seite localhost:3000/kontoAnlegen angesurft wird, ...

app.get('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)

        let konto = new Konto()
        konto.Kontonummer = req.body.kontonummer
        konto.kontoart = req.body.kontoart
        
        // ... dann wird kontoAnlegen.ejs gerendert.
        
        res.render('kontoAnlegen.ejs', {
             meldung : ""                             
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

// Wenn der Button auf der kontoanlegen-Seite gedrückt wird, ...

app.post('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
         
        // ...wird kontoAnlegen.ejs gerendert.

        res.render('kontoAnlegen.ejs', {   
            meldung : ""                            
        })
    }else{

        // Die login.ejs wird gerendert 
        // und als Response
        // an den Browser übergeben.
        res.render('login.ejs', {                    
        })    
    }
})


//Stammdaten
app.get('/stammdatenPflegen',(req, res, next) => {   

  let idKunde = req.cookies['istAngemeldetAls']
  
  if(idKunde){
      console.log("Die Stammdaten von " + idKunde + " wurden erfolgreich verändert")

      let konto = new Konto()
      konto.Kontonummer = req.body.kontonummer
      konto.kontoart = req.body.kontoart
      
      res.render('stammdatenPflegen.ejs', {
           meldung : "Die Stammdaten wurden erfolgreich verändert"                             
      })
  }else{
      res.render('login.ejs', {                    
      })    
  }
})

app.post('/stammdatenPflegen',(req, res, next) => {   

  let idKunde = req.cookies['istAngemeldetAls']
  
  if(idKunde){
      console.log("Die Stammdaten von" + idKunde + " wurden erfolgreich verändert")
      
      kunde.Kennwort=req.body.kennwort
      kunde.nachname=req.body.nachname
    
      res.render('stammdatenPflegen.ejs', {   
          meldung : "Die Stammdaten wurden erfolgreich verändert."                           
      })
  }else{

      res.render('login.ejs', {                    
      })    
  }
})
