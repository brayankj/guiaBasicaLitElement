import { LitElement, html, css, customElement } from 'lit-element'

export class PropUno extends LitElement{

    static get properties(){
        return {
            greeting: { type: String },
            data: { attribute: false },
            items: { type: Array },
        }
    }

    static get styles(){
        return css`
        `;
    }

    constructor(){
        super();
        this.greeting = 'Hello';
        this.data = [
            { name: 'Carina' }
        ];
        this.items = [1,2,3];
    }

    render(){
        return html`
            <p>Priedades</p>
            <p> ${this.greeting} ${this.data[0].name } </p>
            <p> num items ${this.items.length} </p>
        `;
    }

}

customElements.define( 'propuno-component', PropUno );