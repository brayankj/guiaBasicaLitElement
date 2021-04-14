import { html, LitElement } from 'lit-element';

class PropertyChanges extends LitElement {

    //cualquier cambio definido en las propiedades del componente desencadenara un re-renderizado en el html
    static get properties(){
        return {
            count: { type: Number },
        };
    }

    constructor(){
        super();
        this.count = 0;
        //actualizara el contador cada 2 segundos en un ciclo de 0 a 10
        setInterval( () => {
            this.count = this.count < 10 ? this.count+1 : 0;
        }, 2000 );
    }

    //el render llamara al callback cada vez que el valor de la propiedad cambie
    render(){
        //lit-html esta optimizado para menejar actualizaciones frecuentes y actualizando el dom de manera eficiente
        return html`
            <div>
                Contador de 0 a 10: [ ${this.count} ]
            </div>
        `;
    }

}

customElements.define( 'property-changes', PropertyChanges );