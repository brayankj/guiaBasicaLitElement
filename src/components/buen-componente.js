import { LitElement, html } from 'lit-element';

export class BuenComponent extends LitElement{

    static get properties(){
        return{
            message: { type: String }
        };
    }

    constructor(){
        super();
        this.message = 'Loading';
        this.addEventListener( 'stuff-loaded', (e) => { this.message = e.detail } );
        this.loadStuff();
    }

    render(){
        return html`
            <h1>Buen Componente</h1>
            ${this.message}
        `;
    }

    loadStuff(){
        setTimeout( () => {
            let loaded = new CustomEvent('stuff-loaded', {
                detail: 'Loading complete.'
              });
              this.dispatchEvent(loaded);
              console.log(loaded);
        }, 3000 );
    }

}

customElements.define( 'buen-componte', BuenComponent  );