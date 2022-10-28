class Card extends HTMLElement {
    constructor(){
        super(); //estoy instanciando a mi padre HTMLElemnt(super es para llamar al padre)
        this.class="card p-3"
        
    }
    static get observedAttributes(){
        return ["class", "classname","shadow"];
    }


    attributeChangedCallback(prop, oldvalue, newvalue){
        this[prop] = newvalue ///para modificar y sea variable
        if (prop == "shadow") {
            this.classList.remove("shadow-sm", "shadow", "shadow-lg");
            if (newvalue == "true") this.classList.add("shadow");
  
        }
    }
// cuando este elementp estea apunto de renderizarse se ejecuta connectedCallback()
    connectedCallback(){ //es la funcion cada vez que se agrega al DOM

        if (this.class) { // evalua si tiene valor 
            const classlist = this.class.split(" ")
            classlist.forEach((xclass) => {
                this.classList.add(xclass)
            });
        }

        if (this.classname) {
            const classlist = this.classname.split(" ")
            classlist.forEach((xclass) => {
                this.classList.add(xclass)
            });
        }

    }
//cuando el elemento sea quitando se ejecuta esta funcion isconnetedCAllback()
    disconnetedCAllback(){

    }

}
customElements.define("my-card", Card)