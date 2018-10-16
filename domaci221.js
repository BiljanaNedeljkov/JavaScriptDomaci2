var zaposleni = [
    ["pera", "jova", "marko"],
    [28,      31,     19]
  ];
  
  
  // Zadatak 4
  // Za zadate zaposlene ispisati svakog zaposlenog i koliko svaki zaposleni ima godina
  
  // Zadatak 5
  // U spisku zaposlenih naci koliko jova ima godina
  var zaposleni = [
    ["pera", "jova", "marko"],
    [28,      31,     19]
  ];
  for(var i in zaposleni){
      if(zaposleni[0][i] == "jova"){
          console.log("Zaposleni Jova ima " + zaposleni[1][i] + " godina.");
      }
  }

  // Zadatak 6
  // Naci srednju vrednost godina zaposlenih
  var zaposleni = [
    ["pera", "jova", "marko"],
    [28,      31,     19]
  ];
  var zbir = 0;
  for( var i = 0; i < zaposleni[0].length; i++){
      zbir += zaposleni[1][i];
  }
  console.log("Prosek godina svih zaoslenih je  " + zbir/zaposleni[1].length);
  
  
  // Zadatak 7
  // Dat je spisak zaposlenih u sledecem obliku
    // Za zadate zaposlene izracunati i podesiti plate ostalih 
  // zaposlenih tako da:
  // tehnicar ima 70% plate inzenjera
  // doktor ima platu tehnicara + pola plate inzenjera
  // nakon toga proci kroz spisak zaposlenih i ispisati
  // njihova imena, njihove radne pozicije i njihove plate
  // Napomena: Sve izmene vrsiti nad postojecom strukturom

  var zaposleni = [
    ["pera",      "jova",     "marko"],
    [28,          31,         39],
    ["inzenjer",  "tehnicar", "doktor"],
    [700,         0,        0]
  ];
 


  for(var i = 0; i < zaposleni.length; i++){
      for(var j = 0; j < zaposleni[i].length; j++){
          if(zaposleni[i][j] == "inzenjer"){
               var plataInz = zaposleni[i+1][j];
               console.log("Zaposleni " + zaposleni[0][j]  + " je " + zaposleni[i][j] + " i ima platu "
               + plataInz);
          }
          else if(zaposleni[i][j] == "tehnicar"){
              var plataTeh = zaposleni[i+1][j];
              plataTeh = plataInz * 0.7;
              console.log("Zaposleni " + zaposleni[0][j]  + " je " + zaposleni[i][j] + " i ima platu "
               + plataTeh);
            
          } else if(zaposleni[i][j] == "doktor"){
              var plataDr = zaposleni[i+1][j];
              plataDr = plataInz / 2 + plataTeh;
              console.log("Zaposleni " + zaposleni[0][j]  + " je " + zaposleni[i][j] + " i ima platu "
               + plataDr);
          }
        }
       
      }

    //   Drugi nacin
    var zaposleni = [
        ["pera",      "jova",     "marko"],
        [28,          31,         39],
        ["inzenjer",  "tehnicar", "doktor"],
        [700,         0,        0]
      ];
     
    
    
      for(var i = 0; i < zaposleni.length; i++){
          for(var j = 0; j < zaposleni[i].length; j++){
              switch (zaposleni[i][j]) {
                  case "inzenjer":
                      plataInz = zaposleni[i+1][j];
                      console.log("Zaposleni " + zaposleni[0][j]  + " je " + zaposleni[i][j] + " i ima platu "
                      + plataInz);
                      break;
                      case "tehnicar":
                      plataTeh = plataInz * 0.7;
                      console.log("Zaposleni " + zaposleni[0][j]  + " je " + zaposleni[i][j] + " i ima platu "
               + plataTeh);
                      break;
                      case "doktor":
                      plataDr = plataInz / 2 + plataTeh;
                      console.log("Zaposleni " + zaposleni[0][j]  + " je " + zaposleni[i][j] + " i ima platu "
               + plataDr);
                      break;
              
                  default:
                      break;
              }
            }
        }
  
  
  // Zadatak 8
  // Za zadatu listu zaposlenih izracunati godinu rodjenja na osnovu trenutnih godina
  // Izracunati godinu rodjenja za svakog zaposlenog i dobijene rezultate smestiti u niz
  // koji je potrebno ubaciti u var zaposleni.
  // Napomena: Za dobijanje trenutne godine mozete iskoristiti sledeci kod
  // var d = new Date();
  // var godina = d.getFullYear();
  var zaposleni = [
    ["pera",      "jova",     "marko"],
    [28,          31,         39],
    ["inzenjer",  "tehnicar", "doktor"],
    [700,         0,        0]
  ];
  var d = new Date();
  var godina = d.getFullYear();
  var godinaRodjenja = [];
  for(var i = 0; i < zaposleni[i].length; i++){
      
        godinaRodjenja.push(godina-zaposleni[1][i]);
      }
  zaposleni.push(godinaRodjenja);
  console.log(zaposleni);

  
  