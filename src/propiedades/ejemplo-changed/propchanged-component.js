import { css, html, LitElement } from 'lit-element';

export class PropChanged extends LitElement{
    
    //si el numero random es mayor que el anterior verificar si se hace el cambio para el render
    static get properties(){
        return {
            myProp : {
                type: Number,
                hasChanged(newVal, oldVal) {
                    if (newVal > oldVal) {
                      console.log(`${newVal} > ${oldVal}. hasChanged: true.`);
                      return true;
                    }
                    else {
                      console.log(`${newVal} <= ${oldVal}. hasChanged: false.`);
                      return false;
                    }
                }
            }
        }
    }

    static get styles(){ return css``; }

    constructor(){
        super();
        this.myProp = 1;
    }

    render(){
        return html`
            <h2>Ejemplo de Cambio de propiedades</h2>
            <p>${ this.myProp }</p>
            <button @click="${this.getNewValue}" >
                nuevo valor
            </button>
        `;
    }

    updated(){
        console.log('Actualizando...');
    }

    getNewValue(){
        let newVal = Math.floor( Math.random()*10 );
        this.myProp = newVal;
    }
    
}

customElements.define( 'propchanged-component', PropChanged );