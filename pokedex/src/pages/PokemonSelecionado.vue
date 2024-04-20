<template>
  <div class="pokemon-selecionado">
    <!-- Navbar  -->
    <div>
      <Navbar></Navbar>
    </div>
    <section>
      <!-- Imagem  -->
      <div>
        <img v-bind:src="pokemon.foto" alt="Imagem do Pokemon" />
      </div>
      <div>
        <ol>
          <li v-for="(type, index) in pokemon.types" :key="index"
            :style="{ backgroundColor: getBackgroundColor(type) }">{{ type }}</li>
        </ol>
      </div>
      <!-- Sprites  -->
      <div>
        <h1>{{ pokemon.name }}</h1>
        <div v-if="pokemon.sprites">
          <h2>Sprites</h2>
          <img v-for="(sprite, key) in pokemon.sprites" :key="key" :src="sprite" :alt="key" />
        </div>
        <!-- Evoluções  -->
        <div v-if="pokemon.evolutions">
          <h2>Evoluções</h2>
          <ul>
            <li v-for="evolution in pokemon.evolutions" :key="evolution">
              {{ evolution }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <!-- Ataque  -->
      <div v-if="pokemon.moves">
        <h2>Movimentos de Ataque</h2>
        <ul>
          <li v-for="move in pokemon.moves" :key="move.move.name">
            {{ move.move.name }}
          </li>
        </ul>
      </div>
      <!-- Games  -->
      <div v-if="pokemon.game_indices">
        <h2>Games</h2>
        <ul>
          <li v-for="gameIndex in pokemon.game_indices" :key="gameIndex.version.name">
            {{ gameIndex.version.name }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script src="../utils/pokemonselecionado.ts"></script>
<style lang="scss" src="../styles/pokemonselecionado.scss"></style>
