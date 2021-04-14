import { html, LitElement } from 'lit-element';

const getMessage = (message, showMessage) => {
    if (!showMessage) {
        return '';
    }
    return `Mensaje de la funcion: ${message}`;
}

class ConditionMessage extends LitElement {

    static get properties(){
        return {
            showMessage: { type: String },
            message: { type: String },
            disable: { type: Boolean },
        };
    }

    constructor(){
        super();
        //this.disable =  true;
    }

    render(){
        //manejas el html template con un if
        if(this.disable){
            return html`No hay nada aqui`;
        }

        //al hacer click se muestra el mensaje el texto viene del html, este cambia de hide a show y viseversa
        return html`
            <div>
                <button @click=${ () => this.showMessage = !this.showMessage }>
                    Click en ${this.showMessage ? 'hide' : 'show' } message
                </button>
                <div>
                    ${ this.showMessage ? html`El mensaje es: ${this.message}` : '' }
                </div>
                <div>
                    ${ getMessage(this.message, this.showMessage) }
                </div>
            </div>
        `;
    }

}

customElements.define( 'conditional-rendering', ConditionMessage );