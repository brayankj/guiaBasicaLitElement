import { LitElement, html, css } from 'lit-element';

import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

//estilos dinamicos puedes definirlos como objetos y mediante acciones cambiar los estilos

export class StyleDinamic extends LitElement{

    static get properties(){
        return {
            clases: { type: Object },
            view: { type: Object },
            status: { type: Boolean }
        };
    }

    static get styles(){
        return css`
            div{ transition: all ease-in 1.5s; }   
            .mydiv{ background-color: black; }
            .someclass { background-color: white; }
            .someclass p { color: black; }
        `;
    }

    constructor(){
        super();
        this.status = true;
        this.clases = { mydiv: true, someclass: false, };
        this.view = { color: 'white', fontFamily: 'Roboto' };
    }

    render(){
        return html`
            <p>estilos dinamicos</p>
            <div class=${classMap(this.clases)} style=${styleMap(this.view)}  > 
                <p>contenido del div</p>
            </div>

            <button @click="${this.vista}">
                ${ this.status ? "Light" : "Dark" }
            </button>
        `;
    }

    vista(){
        if( this.status ){
            this.clases.mydiv = false;
            this.clases.someclass = true;
            this.status = false
        }else{
            this.clases.mydiv = true;
            this.clases.someclass = false;
            this.status = true
        }
        
    }

}

customElements.define( 'styledinamic-component', StyleDinamic );