/*var beersJson = 'https://raw.githubusercontent.com/pablz/logourl/master/beers.json',
assetsJson = 'https://raw.githubusercontent.com/pablz/logourl/master/assets.json'
assetsArr = [],
beersArr = [];
intro = document.querySelector('#intro'),
introBg = document.querySelector('.intro-img');

(()=>{
    getBeers()
})();

(()=>{
    getAssets()
})();

function getBeers(){
    //consumir un json de modo asíncrono con fetch api
    fetch(beersJson)
    .then(response =>{
            return response.json();//el método json() extrae el cuerpo del recurso solicitado
    })
    .then(data => {//data son los datos del response
        beersArr.push(data);
    })
    .catch(error => {//captura si hubo un error en la petición
        console.log(error);
    })
    .finally(()=>{//fynally nos permite hacer algo si todo salió bien
        console.log('Llegó la birra!'); 
        printBeerList();
    })
}



function getAssets(){
    //consumir un json de modo asíncrono con fetch api
    fetch(assetsJson)
    .then(response =>{
            return response.json();//el método json() extrae el cuerpo del recurso solicitado
    })
    .then(data => {//data son los datos del response
        assetsArr.push(data);
        console.log(data)
    })
    .catch(error => {//captura si hubo un error en la petición
        console.log(error);
    })
    .finally(()=>{//fynally nos permite hacer algo si todo salió bien
        console.log('Llegaron los Assests!'); 
        setBg();
    })
}


function printBeerList(){
    console.log(beersArr[0].beers[0].nombre)
}

function setBg(){
    for(let item of assetsArr){
       introBg.src=item.bgs[2].img;
    }
}
*/

Vue.component('header-comp', {
    template: `
        <header>
            <div class="content-wrap">
                    {{title}}
                    <ul>
                        <li v-for="item in beers">
                                {{item.nombre}}
                        </li>
                    </ul>
            </div>
        </header>
    `,
    data: () => {
        return {
            title: 'soy el header',
            beers: [
                {
                    nombre:'ambar',
                    precio:'120'
                },

                {
                    nombre:'blacky',
                    precio:'140'
                },
            ]
        }
    },
});



var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })







