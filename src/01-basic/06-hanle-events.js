import { html, LitElement } from 'lit-element';

class hanleEvent extends LitElement {

    static get properties(){
        return {
            count: { type: Number },
        };
    }

    constructor(){
        super();
        this.count = 0;
    }

    //eventos -> eventos con arrow function o con funciones
    render(){
        return html`
            <div> Contador [${this.count}] 
                <button @click=${ () => this.count+= 1 } >+1</button>
                <button @click=${this._onDEcrement} >-1</button>
            </div>
        `;
    }

    _onDEcrement(){
        this.count -=1;
    }

}

customElements.define( 'hanle-events', hanleEvent );