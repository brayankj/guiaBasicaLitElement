import { css, html, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

//el slot conrtrola lo que se renderiza mediante un name este es declarado en el html,  es controlado segun un componente lo necesite
export class Animation extends LitElement{

    static get properties(){
        return {
            clases: { type: Object },
            efecto: { type: Object },
            status: { type: Boolean }
        }
    }

    static get styles(){
        return css`
            div{
                display: inline-block;
                width: 100%;
                height: 100;
                animation-duration: 3s;
                animation-iteration-count: initial;
                animation-direction: alternate;
            }
            .vistaEntrada{ animation-name: entrada; }
            .vistaArriba { animation-name: arriba; }
            ::slotted([slot=circle-element]){
                padding: 5px;
            }
            ::slotted([slot=square-element]){
                padding: 5px;
            }
            @keyframes entrada {
                from{
                    margin-left: 100%;
                    width: 300%;
                }
                to{
                    margin-left: 0%;
                    width: 100%;
                }
            }
            @keyframes arriba {
                from{
                    margin-top: 100%;
                    width: 300%;
                }
                to{
                    margin-top: 0%;
                    width: 100%;
                }
            }
        `;
    }

    constructor(){ 
        super(); 
        this.status = true;
        this.clases = { vistaEntrada: true, vistaArriba: false };
        this.efecto = { vistaEntrada: false, vistaArriba: true }
    }


    //forma de usar slot con un nombre establecido en el html 
    render(){
        return html`
            <p>Animation</p>
            <div class="${ classMap(this.clases) }" style="${ styleMap(this.efecto) }">
                <slot name="circle-element" ></slot>
                <slot name="square-element" ></slot>
                <br>
                <button @click="${this._cambio}" >
                    Cambio ${ this.status ? 'Arriba' : 'Entrada' }
                </button>
            </div>
        `;
    }

    _cambio(){
        if( this.status ){
            this.clases.vistaArriba = true;
            this.clases.vistaEntrada = false;
            this.status = false;
        }else{
            this.clases.vistaArriba = false;
            this.clases.vistaEntrada = true;
            this.status = true;
        }
    }
}

customElements.define( 'animation-element', Animation );