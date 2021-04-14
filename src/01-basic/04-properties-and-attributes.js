import { html, LitElement } from 'lit-element';

const messagePrefix = 'El MENSAJE es: ';

class PropertiesAndAttributes extends LitElement{

    static get properties(){
        return{
            href: { type: String },
            label: { type: String },
            message: { type: String },
            check: { type: Boolean },
            items: { type: Array },
        };
    }

    constructor(){
        super();
        this.href = 'https://www.google.com.mx/';
        this.label = 'open Google';
        this.check = true;
        //el mensaje se establece como atributo en el componente
        //<properties-and-attributes message="Hola Mundo" ></properties-and-attributes>
    }

    render(){
        return html`
            <div>
                
                <div>
                    <a href=${this.href}> ${this.label} </a>
                    <input type="checkbox" ?checked=${this.check} >
                </div>

                <div>
                    <fancy-message
                        messagePrefix=${messagePrefix}
                        message=${this.message}
                    >
                    ${messagePrefix}
                    </fancy-message>
                </div>

                <div>
                    <fancy-message
                        messagePrefix="este texto es: "
                        .message=${this.message}
                    >
                    </fancy-message>
                </div>

            </div>
        `;
    }

}

customElements.define( 'properties-and-attributes', PropertiesAndAttributes );


class FancyMessage extends LitElement {

    static get properties(){
        return {
            message: { type: String },
            messagePrefix: { type: String },
            colors: { type: Array },
        };
    }

    constructor(){
        super();
        this.colors = ['Rojo','Verde','Amarillo','Azul'];
    }

    render(){
        return html`
            <div>
                ${this.messagePrefix}, ${this.message}
            </div>
        `;
    }

}
customElements.define( 'fancy-message', FancyMessage );