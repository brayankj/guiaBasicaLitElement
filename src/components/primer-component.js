import { html, LitElement, css } from 'lit-element';

//color global
const mainColor = css`green`;

export class MyComponente extends LitElement {

    static get properties(){
        return {
            message : { type: String },
            myBool: { type: Boolean },
            myArray: { type: Array },
        };
    }

    static get styles(){
        return css`
            p{
                font-family: Roboto;
                font-size: 16px;
                font-weight: 500;
            }
            .red {
                color: red;
            }
            .blue {
                color: blue;
            }
            div{ color: ${mainColor} }
        `;
    }

    constructor(){
        super();
        this.message = 'Hello word! From primer component';
        this.myBool = true;
        this.myArray = ['an','array','of','test','data'];
    }

    render(){
        return html`
            <div> Color global</div>
            <p>${ this.message }</p>
            <ul> ${ this.myArray.map( item => html`<li>${item}</li>` ) } </ul>
            ${ this.myBool ? 
                html`<p>Render HTML if is true</p>` :
                html`<p>Render HTML if is false</p>`
            }
            <p class="${ this.myBool ? 'blue' : 'red' }">styled paragraph</p>
            <button @click=${this.clickHandler} >Click</button>
        `;
    }

    clickHandler(e){
        console.log(e);
        this.myBool = !this.myBool;
    }

}

customElements.define( 'primer-component', MyComponente );