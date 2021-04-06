import { css, html, LitElement } from 'lit-element';

export class Circle extends LitElement {

    static get properties(){
        return {}
    }

    static get styles(){
        return css`
            .circle{
                width: 120px;
                height: 120px;
                background: aqua;
            }
        `;
    }

    constructor(){ super(); }

    render(){
        return html`
            <div class="circle"></div>
        `;
    }

}

customElements.define( 'circle-element', Circle );