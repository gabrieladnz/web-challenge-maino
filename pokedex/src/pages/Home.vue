<!-- Template  -->
<template>
  <div class="home">
    <!-- Navbar  -->
    <div>
      <Navbar></Navbar>
    </div>
    <div>
      <!-- Título  -->
      <div class="home__titulo desce">
        <h1>Pokédex</h1>
        <img src="../assets/logo.png" alt="Logo">
      </div>
      <section class="home__section">
        <!-- Barra de pesquisa  -->
        <div class="home__section__barra-pesquisa">
          <input type="text" v-model="termoProcurado" @input="filtrarPokemon" :placeholder="$t('filtro.placeholder')">
          <img src="../assets/icons/lupa.svg" alt="Ícone de busca" @click="filtrarPokemon()">
        </div>
        <!-- Conteúdo principal  -->
        <div class="home__section__conteudo-principal">
          <!-- Menu lateral  -->
          <aside class="home__section__menu-lateral">
            <div>
              <label>{{ $t("filtro.tipo") }}</label>
              <select v-model="tipoSelecionado">
                <option value="todos">Todos</option>
                <template v-for="pokemon in DetalhesPokemon">
                  <template v-if="pokemon.types">
                    <option v-for="(typeData, typeIndex) in pokemon.types" :key="`${pokemon.id}_${typeIndex}`"
                      :value="typeData.type.name">
                      {{ typeData.type.name }}
                    </option>
                  </template>
                </template>
              </select>
            </div>
            <div>
              <label>{{ $t("filtro.especie") }}</label>
              <select v-model="especieSelecionada">
                <option v-for="pokemon in DetalhesPokemon" :key="pokemon.id" :value="pokemon.name">{{ pokemon.name }}
                </option>
              </select>
            </div>
            <div style="display: flex; justify-content: center;">
              <button @click="pesquisar()">{{
                $t("filtro.pesquisa") }}</button>
            </div>
          </aside>
          <!-- Cards  -->
          <main class="home__section__cards">
            <div v-for="(pokemon, index) in PokemonsFiltrados.length > 0 ? PokemonsFiltrados : DetalhesPokemon"
              :key="index">
              <PokemonCard :name="pokemon.name" :url="pokemon.forms[0].url" :id="pokemon.id" :types="pokemon.types"
                :photo="pokemon.sprites.other['official-artwork'].front_default"></PokemonCard>
            </div>
          </main>
        </div>
      </section>
      <!-- Loading  -->
      <div v-if="carregando" class="loading-icon">
        <div class="custom-loader"></div>
    </div>
    </div>
  </div>
</template>


<!-- Script  -->
<script src="../utils/home.ts"></script>
<!-- SCSS  -->
<style lang="scss" src="../styles/home.scss"></style>
