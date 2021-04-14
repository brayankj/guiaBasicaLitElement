import { html, LitElement } from 'lit-element';

class RepeadTemplates extends LitElement {

    static get properties(){
        return {
            books: { type: Array },
        };
    }

    constructor(){
        super();
        this.books = [ 
            { author : 'G.R.R Martin', title: 'A Game of thrones' },
            { author: 'Tolkien', title: 'Lord of the Righs' },
        ];
    }

    render(){
        //primer ul sin usar la funcion que renderiza, forma mas larga
        //segundo ul usar una funcion que arma el template del render
        return html`

            <ul>
                ${ this.books.map( ({author,title}) => html`
                    <li>${author}, ${title}</li>` 
                )}
            </ul>

            <ul>
                ${ this.books.map( this._bookTemplate ) }
            </ul>
        `;
    }

    //crear una funcion que se encarge del template para renderizar y llamarlo mediante un map a la funcion
    _bookTemplate( book ){
        const { author, title } = book;
        return html` <li> author : ${author}, title: ${title}</li> `;
    }

}

customElements.define( 'repeated-templates', RepeadTemplates );