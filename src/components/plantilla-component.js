import { LitElement, html, css } from 'lit-element';

export class MyPlantilla extends LitElement{

    static get properties(){
        return {
            prop1: { type: String },
            prop2: { type: String },
            prop3: { type: Boolean },
            prop4: { type: String },
        };
    }

    static get styles(){
        return css`
        
        `;
    }

    constructor(){
        super();
        this.prop1 = 'texto vinculante';
        this.prop2 = 'mydiv';
        this.prop3 = true;
        this.prop4 = 'pie';
    }

    render(){
        return html`
            <p>My Plantilla</p>

            <div>${ this.prop1 }</div>

            <div id="${this.prop2}" >vinular por id</div>

            <div>
                boolean atributo
                <input type="text" ?disabled="${this.prop3}" />
            </div>

            <div>
                evento boton
                <button @click="${this.clickHandler}">click</button>
            </div>
        `;
    }

    clickHandler(e){
        console.log(e.target);
        this.prop3 = false;
    }

}

customElements.define( 'plantilla-component', MyPlantilla );