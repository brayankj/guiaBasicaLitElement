import { html, LitElement, css } from 'lit-element';

export class MyElement extends LitElement{

    static get properties(){
        return{
            name: { type : String },
            alert: { type: String },
            count: { type: Number },
            myBool: { type: Boolean },
        }
    }

    static get styles(){
        return css`
            .on{
                display: none;
            }
            .off{
                display: inline-block;
            }
        `;
    }

    constructor(){
        super();
        this.name = 'Holita';
        this.count = 0;
        this.myBool = false;
        this.alert = '';
    }

    render(){
        return html`
            ${ this.name }
            <p>Contador: ${this.count} </p>
            <button @click="${this.clickHandlerAdd}" >Sumar</button>
            <button class="${ !this.myBool ? 'on' : 'off' }" @click="${this.clickHandlerSubtract}" >Restar</button>

            <p>
            ${this.alert}
            </p>

            <button ?disabled="${!this.myBool}" >Otro boton</button>
        `;
    }

    clickHandlerAdd(){
        this.count++;
        this.myBool = true;
        this.count < 14 ? this.alert = '' : this.alert = 'valor maximo';
        console.log(this.alert)
    }

    clickHandlerSubtract(){
        if( this.count == 0 ) { this.myBool = false; this.alert = 'valor minimo'; return; }
        this.count--;
        this.count < 14 ? this.alert = '' : this.alert = 'valor maximo';
    }

}

customElements.define( 'segundo-component', MyElement );