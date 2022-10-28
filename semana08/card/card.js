// es un aclase especial porque va a extender a HTMLElement 
//ES UNA CLASE NATIVA DE JS
class Card extends HTMLElement{

    constructor(){
        // usando super() dentro del contructor vamos a crear atributos propios
        
        super();
        this.title = "";
        this.img = "";
        this.message = "";
    }

    // Para poder recibir parametro desde HTML necesitamos 2 funciones
  static get observedAttributes() {
    // En esta funcion vamos a definir que paremtros acepta nuestro componente
    // para poder saber quienes son vamos
    // a defirnolos dentro un array
    return ["title", "message", "img"];
  }

  // como podemos guardar el valor que estamos
  // recibiendo
  attributeChangedCallback(name, _, newvalue) {
    // * name => nombre del atributo
    // * oldvalue => es el valor actual
    // * es el nuevo valor que estamos recibiendo
    switch (name) {
      case "title":
        this.title = newvalue;
        break;
      case "img":
        this.img = newvalue;
        break;
      case "message":
        this.message = newvalue;
        break;
      default:
        break;
    }
  }


 //connectedCallback() es una funcion nativa
    connectedCallback(){
        this.classList.add("col-12", "col-sm-4", "col-md-3") ///asigna una clase a la etiqueta mi card
        this.innerHTML =`
        <div class="card mt-5">
        <img width="100%" class="card-img-top" src="${this.img}" /> 
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">${this.message}</p>
          <button class="btn btn-link">Leer mas</button>
        </div>
      </div>
        `
        ///esta funcion se ejecuta con la etiqueta my-card
    }
}

//customElements.define propio de javvaScrip
customElements.define("my-card", Card)//se crea la etiqueta my-card