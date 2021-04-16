import { html, LitElement } from 'lit-element';

class FetchindData extends LitElement{

    static get properties(){
        return { 
            response: { type: Array }
        };
    }

    constructor(){
        super();
        this.response = [];
    }

    //ciclo de vida que carga despues del render
    firstUpdated(){
        fetch('https://rickandmortyapi.com/api/character')
            .then( r => r.json() )
            .then( resp => this.response = resp.results );
    }

    //renderizar la repuesta de la api results con this.response o destructurando response mediante el this
    render(){
        const { response } = this;
        return html`
            <ul>
                ${response.map( item => html`<li>${item.name}</li>` )}
            </ul>
        `;
    }

}

customElements.define( 'feching-data', FetchindData );