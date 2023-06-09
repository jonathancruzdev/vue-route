

/* Componentes Local */
const Titulo = {
    props: {
        texto: String
    },
    template: `<h2>{{texto}}</h2>`,
}
// Vistas
const Inicio = {
    template: `<div class="card bg-success">  <h2> Inicio </h2> </div>`
}

const Pizzas = {
    template: `<div class="card bg-info">
                    <h2>Catalogo Pizzas {{ $route.params.id }}  </h2> 
                </div>`
}



const router = new VueRouter({
    routes: [
        { path: '/', component: Inicio },
        { path: '/pizzas/:id', component: Pizzas },
        { path: '/contactos', component: Contactos }
    ]
})



const app = new Vue({
    el: '#app',
    router,
    data:{ 
        pizzas: [
            {
                nombre: 'Napolitana',
                foto: 'images/napo.jpg',
                precio: 2500
            },
            {
                nombre: 'Calabraza',
                foto: 'images/calabresa.jpg',
                precio: 2800
            },
            {
                nombre: 'Muzzarella',
                foto: 'images/muzza.jpg',
                precio: 3300
            },
        ]
    },
    components:{
        Titulo, Pizza
    },
    methods:{
        agregarAlCarrito(index){
            console.log('Evento recibido ', index)
        }
    }
})