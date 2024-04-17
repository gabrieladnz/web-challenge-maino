<template>
    <div>
        <nav>
            <router-link to="/">{{ $t('navbar.item1') }}</router-link> |
            <router-link to="/sobre">{{ $t('navbar.item2') }}</router-link>
        </nav>
        <div>
            <span @click="alterarIdioma('pt_br')">PT</span>
            <span @click="alterarIdioma('en')">EN</span>
            <span @click="alterarIdioma('es')">ES</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        /**
         * Método para alterar o idioma manulamente no aplicativo.
         */
        alterarIdioma(local) {
            this.$i18n.locale = local;
        }
    }
}
</script>