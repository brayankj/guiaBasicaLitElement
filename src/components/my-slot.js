import { html, LitElement } from 'lit-element';


//creo que sirve para renderizar del html al componente 
export class MySlot extends LitElement {

    static get properties(){
        return {

        };
    }

    constructor(){
        super();
    }

    render(){
        return html`
            <slot></slot>
            <p>My Slot prueba</p>
        `;
    }


}

customElements.define( 'my-slot', MySlot );