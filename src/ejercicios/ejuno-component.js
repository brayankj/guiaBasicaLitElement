import { css, html, LitElement } from 'lit-element';

export class EjeUno extends LitElement{

    static get properties(){
        return {
            texto: { type: String }
        }
    }

    static get styles(){ return css``; }

    constructor(){ 
        super(); 
    }

    render(){
        return html`
            <p>Que estoy haciendo?</p>
            <p> ${ this.texto } </p>
        `;
    }

    // miRender(){
    //  forma de llamarlo en el render  ${this.miRender()}
    //     return html`<p>Hola Mundo!!</p>`; 
    // }

}

customElements.define( 'ejeuno-component', EjeUno );