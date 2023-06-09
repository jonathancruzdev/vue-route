const Pizza = {
    props: {
        nombre: String,
        foto: String,
        precio: Number
    },
    template: // html
      `<div class="card">
            <img v-bind:src="foto" v-bind:alt="nombre">
            <h4> {{ nombre }}</h4>
            <h2>$ {{ precio }}  </h2>
            <button v-on:click="$emit('add')" type="button"> 
                <i class="fa-solid fa-cart-shopping"></i> ver Detalles
            </button>
        </div>`,
    methods: {

    }
}
