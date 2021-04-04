import { LitElement, html, css } from 'lit-element';


// ha este no le entendi nada
export class PropConverter extends LitElement{

    static get properties(){
        return {
            myProp: {
                Reflect: true,
                converter: {
                    toAttribute(value){
                        console.log('myProp toAttribute.');
                        console.log('Procesando: ', value, typeof(value) );
                        let retVal = String(value);
                        console.log('Retornando:', retVal, typeof(retVal) );
                        return retVal;
                    },
                    fromAttribute(value) {
                        console.log('myProp fromAttribute.');
                        console.log('Procesando:', value, typeof(value));
                        let retVal = Number(value);
                        console.log('Retornando:', retVal, typeof(retVal));
                        return retVal;
                      }
                }
            },
            theProp: {
                reflect: true,
                converter(value) {
                  console.log('theProps converter.');
                  console.log('Precesando:', value, typeof(value));
          
                  let retVal = Number(value);
                  console.log('Retornando:', retVal, typeof(retVal));
                  return retVal;
                }
            },
        }
    }

    static get styles(){
        return css`
        
        `;
    }

    constructor(){
        super();
        this.myProp = 'myProp';
    }

    attributeChangedCallback(name, oldval, newval) {
        console.log('attribute change: ', name, newval);
        super.attributeChangedCallback(name, oldval, newval);
      }

    render(){
        return html`
            <h1>Converter</h1>
            <p>myProp ${this.myProp}</p>
            <p>myProp ${this.theProp}</p>

            <button @click="${this.changeProperties}">Cambio Propiedades</button>
            <button @click="${this.changeAttributes}">Cambio Atributos</button>
        `;
    }

    changeProperties(){
        console.log('Cambio Propiedades');
        let randomString = Math.floor(Math.random()*100).toString();
        this.myProp='myProp ' + randomString;
        this.theProp='theProp ' + randomString;
    }

    changeAttributes(){
        let randomString = Math.floor(Math.random()*100).toString();
        this.setAttribute('myprop', 'myprop ' + randomString);
        this.setAttribute('theprop', 'theprop ' + randomString);

        this.requestUpdate();
    }

}

customElements.define( 'propconverter-component', PropConverter );