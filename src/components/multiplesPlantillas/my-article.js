import { LitElement, html } from 'lit-element';

export class MyArticle extends LitElement {

    constructor(){
        super();
    }

    render(){
        return html`
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, doloribus pariatur natus, illo neque consequuntur quaerat eveniet ullam labore similique quas numquam. Quis quidem magnam quibusdam modi minus reiciendis et.
                Assumenda, at rerum? Quasi tenetur eum, at qui dignissimos totam iusto nobis cumque error culpa illum perspiciatis cupiditate magnam aliquid! Consequatur ex excepturi accusamus voluptatem fugit. Quibusdam quam soluta asperiores?
                </p>
            </div>
        `;
    }

}

customElements.define( 'my-article', MyArticle );