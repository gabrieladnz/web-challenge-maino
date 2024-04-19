<!-- Template  -->
<template>
    <div class="home">
        <!-- Navbar  -->
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <!-- Título  -->
        <div class="home__titulo">
          <h1>Pokédex</h1>
          <img src="../assets/logo.png" alt="Logo">
        </div>
        <section class="home__section">
          <!-- Barra de pesquisa  -->
          <div class="home__section__barra-pesquisa">
            <input type="text">
            <img src="../assets/icons/lupa.svg" alt="Ícone de busca">
          </div>
          <!-- Conteúdo principal  -->
          <div class="home__section__conteudo-principal">
            <aside class="home__section-menu-lateral">
              <div>
                <button>{{ $t("filtro.tipo") }}</button>
              </div>
              <div>
                <button>{{ $t("filtro.especie") }}</button>
              </div>
            </aside>
            <!-- Cards  -->
            <main class="home__section__cards" v-infinite-scroll="loadMore">
              <div v-for="(pokemon, index) in DetalhesPokemon" :key="index">
                <PokemonCard :name="pokemon.name" :url="pokemon.forms[0].url" :id="pokemon.id" :types="pokemon.types" :photo="pokemon.sprites.other['official-artwork'].front_default"></PokemonCard>
              </div>
            </main>
          </div>
        </section>
        <!-- Footer  -->
        <Footer></Footer>
      </div>
    </div>
  </template>


<!-- Script  -->
<script src="../utils/home.ts"></script>
<!-- SCSS  -->
<style lang="scss" src="../styles/home.scss"></style>
