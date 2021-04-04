import { LitElement, html, css } from 'lit-element';

export class PropConvertidor extends LitElement{

    //si no sabes que contiene el atributo usar reflec
    static get properties(){
        return{
            pString: { type: String, reflect: true },
            pNumber: { type: Number, reflect: true },
            pBool: { type: Boolean, reflect: true },
            pArray: { type: Array, reflect: true },
            pObject: { type: Object, reflect: true }
        };
    }

    static get styles(){
        return css` `;
    }

    constructor(){
        super();
        this.pString = '';
        this.pNumber = 0;
        this.pBool = false;
        this.pArray = [];
        this.pObject = {};
    }

    //Ciclo de vida attributeChangedCallback Se invoca cuando cambia el atributo del componente, cuando cambian los valores del constructor
    attributeChangedCallback( name, oldVal, newVal ){
        console.log( 'tributos cambiados: ',{ name, oldVal, newVal } );
        // como requestUpdate cambio y sucedio yn changed esta funcion detecta los valores nuevos y renderiza los cambios, sin esta funcion no se verian los cambios
        super.attributeChangedCallback( name, oldVal, newVal );
    }

    render(){
        return html`
            <h1>Reflect</h1>
            <p>Reflect de atributos predeterminados </p>

            <p>Atributo: String ${ this.pString } </p>
            <p>Atributo: Number ${ this.pNumber } </p>
            <p>Atributo: Boolean ${ this.pBool } </p>

            <p>Atributo: Array ${ this.pArray.map( (item,index) => 
                html` <span> | Posición: [ ${index} ], valor : ${ item } </span> `
            ) } </p>

            <p>Atributo: Objeto ${ Object.keys(this.pObject).map(item =>
                html` <span> | key: ${ item } value: ${ this.pObject[item] } </span>`
            )}</p>

            <button @click="${this.changeProperties}">Cambio properties</button>
            <button @click="${this.changeAttributes}">Cambio attributes</button>
            <button @click="${this.reset}">Reset</button>
        `;
    }

    changeProperties(){
        //genera numero random de 0 a 10
        let randy = Math.floor( Math.random()*10 );
        let myBool = this.pBool;

        this.pString = randy.toString();
        this.pNumber = randy;
        this.pBool = !myBool;

        //crear un array insertando los numeros anteriores en el array
        //acumula todos los numeros random cada que se ejecuta la funcion
        this.pArray = [ ...this.pArray, randy ];

        //construye un objeto asignando el objecto anterio con key : value
        //si los números de repiten los omite y los ordena de menor a mayor
        this.pObject = Object.assign( {}, this.pObject, {[randy] : randy} );
    }

    changeAttributes(){
        //genera numero random de 0 a 10
        let randy = Math.floor(Math.random()*10);
        //esto devuelve un null
        let myBool = this.getAttribute('pBool');
        
        //obtener valores del atributo
        this.setAttribute('pString', randy.toString() );
        this.setAttribute('pNumber', randy.toString() );
        this.setAttribute('pBool', myBool ? '' : null );

        this.setAttribute('pArray', JSON.stringify([...this.pArray, randy]) );

        this.setAttribute('pObject', JSON.stringify( Object.assign( {}, this.pObject, {[randy]: randy } )));

        //funcion del ciclo de vida como los atributos cambiaron requestUpdate() se dispara y actualiza los datos renderizandolos
        this.requestUpdate();
    }

    // updated(changedProperties){
    //     changedProperties.forEach( (oldValue, propName) => {
    //         console.log(`${propName} changed. oldValue: ${oldValue}`)
    //     });
    //     //recorre las propiedades y hace clg 
    // }//funcion del ciclo de vida se auto-ejecuta

    reset(){
        this.pString = '';
        this.pNumber = 0;
        this.pBool = true;
        this.pArray = [];
        this.pObject = {};
    }

}

customElements.define( 'propconvertidorreflect-element', PropConvertidor );