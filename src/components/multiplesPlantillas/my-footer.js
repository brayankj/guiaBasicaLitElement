import { LitElement, html } from 'lit-element';

export class MyFooter extends LitElement{

    constructor(){
        super();
    }

    render(){
        return html`
            <div>
                <h1> Este es mi footer </h1>
            </div>
        `;
    }

}

customElements.define( 'my-footer', MyFooter );