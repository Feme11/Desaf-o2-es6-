export default function resultTwo(){
    let json = {       
        name: "Molecule Man",
        age: 29,
        secretIdentity: "Dan Jukes",
        powers: "Radiation resistance"
    }

    try{
        let superhero = JSON.stringify(json);
        return superhero
    }
    catch(err){
        return alert(err.message)
    }
}