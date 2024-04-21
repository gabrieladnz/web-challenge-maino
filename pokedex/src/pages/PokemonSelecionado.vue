<template>
  <div class="pokemon-selecionado">
    <!-- Navbar  -->
    <div>
      <Navbar></Navbar>
    </div>
    <!-- Loading  -->
    <div v-if="carregando" class="loading-icon">
      <div class="custom-loader"></div>
    </div>
    <section class="pokemon-selecionado__painel-principal" v-else>
      <!-- Loading  -->
      <div class="pokemon-selecionado__painel-principal__secao-1">
        <!-- Imagem  -->
        <div class="pokemon-selecionado__painel-principal__secao-1__imagem slideInLeft">
          <img v-bind:src="pokemon.foto" alt="Imagem do Pokemon" />
        </div>
        <div class="pokemon-selecionado__painel-principal__secao-1__poderes">
          <ol class="pokemon-selecionado__painel-principal__secao-1__poderes__tipos">
            <li v-for="(type, index) in pokemon.types" :key="index"
              :style="{ backgroundColor: getBackgroundColor(type) }">{{ type }}</li>
          </ol>
        </div>
      </div>
      <div class="pokemon-selecionado__painel-principal__secao-2">
        <h1>{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</h1>
        <!-- Sprites  -->
        <div v-if="pokemon.sprites" class="pokemon-selecionado__painel-principal__secao-2__sprites">
          <h4>{{ $t('card.sprites') }}</h4>
          <img v-for="(sprite, key) in pokemon.sprites" :key="key" :src="sprite" :alt="key" />
        </div>
        <!-- Evoluções  -->
        <div v-if="pokemon.evolutions" class="pokemon-selecionado__painel-principal__secao-2__evolucoes">
          <h4>{{ $t('card.evolucoes') }}</h4>
          <ul>
            <li v-for="evolution in pokemon.evolutions" :key="evolution">
              {{ evolution }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="pokemon-selecionado__painel-secundario">
      <!-- Ataque  -->
      <div v-if="pokemon.moves" style="width: 40%;" class="tabela">
        <h4>{{ $t('card.ataque') }}</h4>
        <div class="list-group">
          <a href="#" class="list-group-item" v-for="move in pokemon.moves" :key="move.move.name">
            {{ move.move.name }}
          </a>
        </div>
      </div>
      <!-- Games  -->
      <div v-if="pokemon.game_indices" style="width: 40%;" class="tabela">
        <h4>{{ $t('card.game') }}</h4>
        <div class="list-group">
          <a href="#" class="list-group-item" v-for="gameIndex in pokemon.game_indices" :key="gameIndex.version.name">
            {{ gameIndex.version.name }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="../utils/pokemonselecionado.ts"></script>
<style lang="scss" src="../styles/pokemonselecionado.scss"></style>
