import { html, LitElement } from 'lit-element';

class BindElement extends LitElement{
    static get properties(){
        return {
            color: { type: Array }
        };
    }
    constructor(){
        super();
        this.color = ['Verde','Azul','Amarillo','Naranja'];
    }

    render(){
        return html`
            <list-element .items=${this.color} ></list-element>
        `;
    }
}
customElements.define( 'bind-component', BindElement );

class ListElement extends LitElement{

    static get properties(){
        return {
            items: { type: Array },
        };
    }

    constructor(){
        super();
    }

    render(){
        return html`
            <ul>
                ${this.items.map( item => html`<li>${item}</li>` )}
            </ul>
        `;
    }

} 
customElements.define( 'list-element', ListElement );