import { css, html, LitElement } from 'lit-element';

class RenderStyle extends LitElement{

    static get properties(){
        return{ };
    }

    static get styles(){
        return css`
            :host{
                display: block;
            }
            .message {
                color: blue;
            }
        `;
    }

    constructor(){
        super();
    }

    render(){
        return html`
            <div class="message">
                hello word!!
            </div>
        `;
    }

}

customElements.define( 'render-styles', RenderStyle );