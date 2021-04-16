import { html, LitElement } from 'lit-element';

class FireEventParent extends LitElement{

    static get properties(){
        return { };
    }

    constructor(){
        super();
    }

    //ciclo de vida
    someCallback( event ){
        console.log(event.detail)
    }

    //renderizar el componente hijo que contiene el evento que llamara a la funcion que contiene un texto el cual sera renderizado una vez que escuche el evento emitido, es llamado por el nombre con el cual se le asigno al evento
    render() {
        return html`
            <firing-event-child @event-fired=${this.someCallback}>
            </firing-event-child>
        `;
    }

}

class FireEventChild extends LitElement{

    //funcion que dispara un click con el evento
    handleClick(){
        this.dispatchEvent( new CustomEvent( 'event-fired', { detail: 'text event' } ));
    }

    //crear funcion que renderiza el boton que llama a la funcion que emite un click
    render(){
        return html`
            <button @click=${this.handleClick}>Dispara Evento</button>
        `
    }

}

customElements.define( 'firing-event', FireEventParent );
customElements.define( 'firing-event-child', FireEventChild )