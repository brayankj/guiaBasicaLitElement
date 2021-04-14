import { html, LitElement } from 'lit-element';


class ManegeProperties extends LitElement{

    //las propiedades se definen mediante un operador estatico 
    //los atributos se puedes utilizar mediante js
    //tipos permitodos string, number, boolean, array objects
    static get properties(){
        return {
            message: { type: String },
            count: { type: Number },
        }
    }

    constructor(){
        super();
        // por default el valor en contructor a 0
        this.count = 0;
    }

    render(){
        return html`
            <div>
                El Mensaje es: ${this.message}, count es: ${this.count}
                <p>El mensaje invertido es: ${this.reverseMessage(this.message)}</p>
            </div>
        `;
    }

    reverseMessage(message){
        return message.split('').reverse().join('');
    }

}

customElements.define( 'manage-propierties', ManegeProperties );