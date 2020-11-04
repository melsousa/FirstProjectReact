import React, { Component } from 'react';
import api from "../../services/api";

import { Link } from "react-router-dom";
import './styles.css';

export default class Main extends Component{
    //metodos de clico de vida

    //variavel de estado que consegue armazenar os valores 
    //state é sempre uma vairavevel, que nela conseguimos armazenar objetos
    state = {
        products : [], //pode ser qualquer nome
        productInfo : {}, //conter o resto das informações
        page: 1, //default é 1
    }

    componentDidMount(){ //metodo executado assim que o componente é exibido em tela
       this.loadProducts();     
    }

    loadProducts = async (page = 1) => { //arrow functions
        const response = await api.get(`/products?page=${page}`);
                        //pegando todos os valores
        const { docs, ...productInfo} = response.data;
        //preenchendo o objeto products
        this.setState({ products: docs, productInfo,page }); //armazenar page com o valor atualizado

        
        // console.log(response.data.docs); //aqui estão os valores
    };

    prevPage = () => {
        const {page} = this.state;
        if(page === 1) return; //verificando se está na pagina 1

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const {page, productInfo} = this.state;

        if(page === productInfo.pages) return; //verificando se já é a ultima pagina

        //senão
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }
    //esse metodo é que vai mostrar os valores na tela
    //sempre que variavel state altera, esse metodo vai ouvir as alterações e modificar
    render(){
        //desestruturação do code
        const { products,page, productInfo} = this.state;

        return (
            <div className="product-list">
                {products.map(product =>(
                    //quando usar o metodo map, precisa-se colocar uma key(id) 
                    <article key={product._id}>
                        <strong>{product.title}</strong> 
                        <p>{product.description}</p>   
                        
                        {/* buscando pelo id */}
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    
                    </article>
                ))}
                <div className="actions">
                     {/* onCLick com c maiusculo  */}
                     {/* page anterior */}
                     {/* desabilitando o botão quando a page == 1 */}
                    <button  disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    {/* page seguinte */}
                    <button  disabled={page === productInfo.pages} onClick={this.nextPage}>Proxímo</button>
                </div>
            </div>
        );

    }
}
