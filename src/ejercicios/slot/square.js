import { css, html, LitElement } from 'lit-element';

export class Square extends LitElement {

    static get properties(){
        return {  }
    }

    static get styles(){
        return css`
            .square{
                width: 120px;
                height: 120px;
                background: gainsboro;
                border-radius: 50%;
            }
        `;
    }

    constructor(){ super(); }

    render(){
        return html`
            <div class="square"></div>
        `
    }

}

customElements.define( 'square-element', Square );