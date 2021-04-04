import { PadreElement } from './padre-element';

export class HijoElement extends PadreElement {

    //restringe el acceso a al atributo del padre mediante get y set cambian los valores de la clase 

    // -> noAccessor: false = publico
    // -> noAccessor: true = private
    static get properties(){
        return {
            prop: { reflect: true, noAccessor: true }
        }
    }

}

customElements.define( 'hijo-element', HijoElement );