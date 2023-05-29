/*
TODO: VALIDACION DE FORMULARIO.
*/
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()
/*
TODO: PRIMERA PARTE DEL EJERCICIO SECCION PERSONAJE
 */
class Personaje{
    #nombre
    #fuerza
    constructor({nombre,fuerza}){
        this.#nombre=nombre;
        this.#fuerza=parseInt(fuerza);
    }
    Presentarse(){
        return `El Personaje ${this.#nombre} tiene un nivel de fuerza de ${this.#fuerza}.`;
    }
    getNombre(){
        return this.#nombre;
    }
    getFuerza(){
        return this.#fuerza;
    }
    setFuerza(nuevaFuerza) {
        this.#fuerza = nuevaFuerza;
    }
}
  
/*
TODO: SEGUNDA PARTE DEL EJERCICIO SECCION JEDI bueno
*/
class Jedi extends Personaje{
    constructor({nombre,fuerza}){
        super({nombre,fuerza});
    }
    usarFuerza(){
      return `El Jedi esta utilizando un total de fuerza ${this.getFuerza()} para proteger la galaxia`;
    }
    entrenar(){
        return `El Jedi aumento la fuerza del personaje ${this.getNombre()} con una fuerza de ${this.getFuerza() +10}`;
    }
}
/*
TODO: TERCERA PARTE DEL EJERCICIO SECCION SITH malo
*/
class Sith extends Personaje{
    constructor({nombre,fuerza}){
        super({nombre,fuerza});
    }
    usarFuerza(){
      return `Sith esta utilizando un total de fuerza ${this.getFuerza()} para conquistar la galaxia`;
    }
    corromper(){
        return `Sith corrompe al personaje ${this.getNombre()} con una disminucion de fuerza de ${this.getFuerza() - 5}`;
    }
}
let darthVader=new Sith({nombre:"Darth Vader",fuerza:1000})
document.querySelector('.res6').innerHTML = darthVader.Presentarse() + '<br>' + darthVader.usarFuerza() + '<br>' + darthVader.corromper();
/*
TODO: CUARTA PARTE DEL EJERCICIO SECCION MAESTRO JEDI
*/
class MaestroJedi extends Jedi{
    constructor({nombre,fuerza}){
        super({nombre,fuerza});
    }
    enseñar(){
        return `El Maestro Jedi aumento la fuerza del personaje ${this.getNombre()} con una fuerza de ${this.getFuerza() + 20}`;
    }
}
let yoda=new MaestroJedi({nombre:"YODA",fuerza:500})
document.querySelector('.res5').innerHTML = yoda.Presentarse() + '<br>' + yoda.usarFuerza() + '<br>' + yoda.enseñar();

/*
TODO:  FORMULARIO
*/


const formulario=document.getElementById("formPersonaje");
  formulario.addEventListener("submit",function(e){
    e.preventDefault();
    let data=Object.fromEntries(new FormData(e.target));
    const personaje=new Personaje(data)
    personaje.Presentarse();
    document.querySelector('.resto').innerHTML = personaje.Presentarse();
    const jedi = new Jedi(data);
    document.querySelector('.res1').innerHTML = jedi.usarFuerza();
    document.querySelector('.res2').innerHTML = jedi.entrenar();
    const sith = new Sith(data);
    document.querySelector('.res3').innerHTML = sith.usarFuerza();
    document.querySelector('.res4').innerHTML = sith.corromper();
})

function batalla(personaje1, personaje2) {
    let mensaje = "";
    
    // Simulación de la batalla
    while (personaje1.getFuerza() > 0 && personaje2.getFuerza() > 0) {
      // Personaje 1 ataca a Personaje 2
      const fuerzaAtaque1 = Math.floor(Math.random() * personaje1.getFuerza()) + 1;
      mensaje += `${personaje1.getNombre()} ataca a ${personaje2.getNombre()} con una fuerza de ${fuerzaAtaque1}. `;
      personaje2.setFuerza(personaje2.getFuerza() - fuerzaAtaque1);
      if (personaje2.getFuerza() <= 0) {
        mensaje += `${personaje2.getNombre()} ha sido derrotado. `;
        break;
      }
      
      // Personaje 2 ataca a Personaje 1
      const fuerzaAtaque2 = Math.floor(Math.random() * personaje2.getFuerza()) + 1;
      mensaje += `${personaje2.getNombre()} ataca a ${personaje1.getNombre()} con una fuerza de ${fuerzaAtaque2}. `;
      personaje1.setFuerza(personaje1.getFuerza() - fuerzaAtaque2);
      if (personaje1.getFuerza() <= 0) {
        mensaje += `${personaje1.getNombre()} ha sido derrotado. `;
        break;
      }
    }
    
    // Mostrar mensaje en el HTML
    document.querySelector('.res7').innerHTML = mensaje;
  }