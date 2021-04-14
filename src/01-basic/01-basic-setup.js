//litElement y html son importaciones basicas requeridas
import { html, LitElement } from 'lit-element';

//crear un clase definida para su componente y que extienda de litElement  como clase base
class BasicSetup extends LitElement {

    //el render es un callback que renderiza sus elementos del template, es una funcion que retotorna las propiedades  y manipula el template 
    //o usa first-update si necesita manipular los efectos 
    render(){

        //retorna el template usando el html del tag del template, crea los elementos en el dom
        return html`
            <div>Hello Word!!</div>
        `;
    }

}

//Registe el elemento con custom elements y definalo utilizando el nombre siempre con un guion medio y el nombre de la clase
customElements.define( 'basic-setup', BasicSetup );