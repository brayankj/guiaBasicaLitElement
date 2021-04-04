import { css, html, LitElement } from 'lit-element';

export class PropAttribute extends LitElement{

    static get properties(){
        return{
            myProp: { attribute: true },
            //si se define como false el atributo no cambiara
            theProp: { attribute: false },
            otherProp: { attribute: 'otro-prop' },
        };
    }

    static get styles(){
        return css`
        `;
    }

    constructor(){
        super();
        this.myProp = 'valor mi prop';
        this.theProp = 'el prop';
        this.otherProp = 'valor default';
    }

    //funcion del ciclo de vida que se ejecuta OnChanged cuando el valor de los atributos cambia
    attributeChangedCallback( name, oldVal, newVal ){
        console.log( `Àtributo cambiado: ${name} : antiguo ${oldVal} : nuevo: ${newVal} ` );
        super.attributeChangedCallback( name, oldVal, newVal );
    }

    render(){
        return html`
            <h1>Attributes</h1>


            <p>Mi prop: ${ this.myProp }</p>
            <p>El prop: ${ this.theProp }</p>
            <p>otro prop: ${ this.otherProp }</p>

            <button @click="${this.changeAttribute}">
                Cambio de atributo
            </button>
        `;
    }

    changeAttribute(){
        let randomString = Math.floor( Math.random()*100 ).toString();

        this.setAttribute('myProp', 'cambio ' + randomString );
        //como este esta en false no cambia
        this.setAttribute('theProp', 'cambio ' + randomString );
        //acceder por el atribute del dato
        this.setAttribute('otro-prop', 'cambio ' + randomString);

        this.requestUpdate();
    }

    //
    // updated(changedProperties) {
    //     changedProperties.forEach((oldValue, propName) => {
    //       console.log(`${propName} changed. oldValue: ${oldValue}`);
    //     });
    // }

}

customElements.define( 'propattribute-component', PropAttribute );