Vue.component('carrito', {
    props: {
        cantidad: String
    },
    template: `<div class="card">
                    <h2><i class="fa-solid fa-cart-shopping"></i> Carrito</h2>
                    <h3>Elementos {{ cantidad }}</h3>
                    <ul>
                        <li> Napo x 2 </li>
                        <li> muzza x 1</li>
                    </ul>
                </div>`
})