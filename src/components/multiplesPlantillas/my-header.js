import { LitElement, html } from 'lit-element';

export class MyHeader extends LitElement {

    constructor(){
        super();
    }

    render(){
        return html`
            <div>
                <h1>Header</h1>
            </div>
        `;  
    }

}

customElements.define( 'my-header', MyHeader );