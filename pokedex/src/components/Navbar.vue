<template>
  <div id="navbar">
    <nav id="itens">
      <router-link id="routerlink" to="/">{{ $t("navbar.item1") }}</router-link>
      <router-link id="routerlink" to="/sobre">{{ $t("navbar.item2") }}</router-link>
    </nav>
    <div id="idiomas">
      <img src="../assets/icons/icon-br.png" alt="PT" @click="alterarIdioma('pt_br')">
      <img src="../assets/icons/icon-usa.png" alt="EN" @click="alterarIdioma('en')">
      <img src="../assets/icons/icon-span.png" alt="ES" @click="alterarIdioma('es')">
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    /**
     * Método para alterar o idioma manulamente no aplicativo.
     */
    alterarIdioma(local) {
      this.$i18n.locale = local;
    },
  },
};
</script>

<style lang="scss">
* {
  font-family: "Nunito, Arial, Helvetica, sans-serif";
  font-size: 19px;
  font-weight: 500;
}

#navbar {
  display: flex;
  justify-content: space-around;
  padding: 0.5em;
}

#itens {}

#routerlink {
  text-decoration: none;
  margin-right: 30px;
  color: black;
}

#idiomas {
  img {
    width: 30px;
    cursor: pointer;
  }
}

#navbar a.router-link-exact-active {
  outline: none;
}

#idiomas {

  img {
    transition: transform 0.3s ease;
    border: none !important;

    &:hover {
        transform: translateY(-5px);
    }
  }
}
</style>
