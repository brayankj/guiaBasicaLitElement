import { css, html, LitElement } from 'lit-element'

//el _ en las variables indica que es una variable o atributo de tipo privado
export class PadreElement extends LitElement{

    static get properties(){
        return {
            prop: { type: Number }
        }
    }

    static get styles(){ return css``; }

    //si el accesso es restringido con la clase hija ya que esta esta siendo usada en el html mediante get y set se obtiene y retorna un valor diferente en este caso usa math.floor para muneros redondeados. SI NO ES RESTRINGIDO el valor que vinene del html con decimales de deja igual y genera un random en ambos caso
    set prop( value ){
        console.log({value});
        let oldValue = this._prop;
        console.log({oldValue});
        this._prop = Math.floor(value);
        console.log('this: ', this._prop );

        // this.requestUpdate('prop', oldValue);
        this.requestUpdate();
    }

    get prop() { return this._prop; }

    constructor(){
        super();
        this._prop = 0;
    }

    render(){
        return html`
            <p>Clase Padre Accessos</p>
            <p> valor prop: ${ this.prop } </p>
            <button @click="${ () => { this.prop = Math.random()*10 } }" >
                Cambiar Valor
            </button>
        `;
    }

}

customElements.define( 'padre-element', PadreElement );