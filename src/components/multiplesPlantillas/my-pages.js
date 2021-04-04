import { LitElement, html } from 'lit-element';
import './my-header';
import './my-article';
import './my-footer';

export class MyPage extends LitElement {

    constructor(){
        super();
    }

    render(){
        return html`
            <div>My Pagina Principal</div>
            <my-header></my-header>
            <my-article></my-article>
            ${this.headerTemplate}
        `;
    }

    get headerTemplate(){
        return html`<my-footer> <p>Otra forma</p> </my-footer>`
    }

}

customElements.define( 'my-page', MyPage );