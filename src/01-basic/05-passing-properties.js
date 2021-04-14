import { html, LitElement } from 'lit-element';

class PassingProperties extends LitElement {

    static get properties(){
        return{
            author: { type: Object },
            books: { type: Array },
        };
    }

    constructor(){
        super();
        this.author = { name: 'G.R.R. Martin', age: 70 };
        this.books = [
            { title: 'Game of Thones', pages: 697 },
            { title: 'The Ice Dragon', pages: 521  },
        ];
    }

    render(){
        //coloca (set) propiedades y atributos pasar valores a un clase que los itera
        return html`
            <author-profile
                .author=${this.author}
                .books=${this.books}
            ></author-profile>
        `;
    }

}
customElements.define( 'passing-preperties', PassingProperties );

class AuthorProfile extends LitElement{
    static get properties(){
        return{
            author: { type: Object },
            books: { type: Array },
        };
    }
    render(){
        return html`
            <div>${ this.author.name }</div>
            <div>${this.books.map( book => html`<li>${book.title}</li>`)}</div>
        `;
    }
}
customElements.define( 'author-profile', AuthorProfile );