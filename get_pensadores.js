const pensador = require('pensador-api');
fs = require('fs');



const frases = async function(pessoa) {
    const result = await pensador({ term: pessoa});
    let str_json = JSON.stringify(result)
    let file_name = "frases_jsons/" + pessoa + ".json"
    fs.writeFileSync(file_name, str_json)
  }

//let valores = frases("Clarice Lispector");
//let pessoas = ["Elon Musk", "Clarice Lispector", "Dalai Lama", "Cora Coralina", "Madonna"];
//for (index = 0; index < pessoas.length; index++) { 
//  frases(pessoas[index]);
//} 

frases("Pitty");
