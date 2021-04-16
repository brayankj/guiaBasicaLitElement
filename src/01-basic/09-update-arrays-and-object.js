import { html, LitElement } from 'lit-element';

class UpdateArrayAndObject extends LitElement{

    static get properties(){
        return {
            myArray: { type: Array },
            myObject: { type : Object },
        };
    }

    constructor(){
        super();
        this.myArray = [ { id: 1 }, { id: 2 } ];
        this.myObject = { id: 1, text: 'foo' };
    }

    render(){
        return html`
            <h3>Array Items</h3>
            <div>
                <ul>
                    ${ this.myArray.map( item => html` <li>${ item.id }</li> `)}
                </ul>
                <button @click=${this._addArrayItem}>Add Array Item</button>
            </div>
            <h3>Object</h3>
            <div>
                <strong>
                id: ${ this.myObject.id }</strong> text: ${ this.myObject.text }
                <button @click=${this._updateObjectId}>Add object id</button>
            </div>
        `;
    }

    //crear un nuevo id para insertar un objeto al array y con spreed operator recuperar los valores anteriores y pasarlos al array
    _addArrayItem(){
        const newId = Math.round( Math.random() *10 );
        const newItem = { id: newId };
        this.myArray = [
            ...this.myArray,
            newItem,
        ];
    }

    //genera un id ramdom y medinate spreed operator recupera los valores y sustituir el valor del id
    _updateObjectId(){
        const newId = Math.round( Math.random() * 100 );
        this.myObject = {
            ...this.myObject,
            id: newId,
        };
    }

}

customElements.define( 'updates-arrays-object', UpdateArrayAndObject );