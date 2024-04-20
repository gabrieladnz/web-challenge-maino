<template>
    <div class="card-pokemon card" @click="navegarPokemonSelecionado">
        <!-- Número  -->
        <span class="card-pokemon__numero slideInDown">#{{ id }}</span>
        <!-- Nome  -->
        <h2 class="card-pokemon__nome slideInDown">{{ name.charAt(0).toUpperCase() + name.slice(1) }} </h2>
        <!-- Conteúdo card  -->
        <div class="card-pokemon__conteudo-card">
            <ol class="card-pokemon__conteudo-card__tipos slideInLeft">
                <li v-for="(typeData, index) in types" :key="index" :style="{ backgroundColor: getBackgroundColor(typeData.type.name) }">{{ typeData.type.name }}</li>
            </ol>
            <img v-bind:src="photo" alt="Imagem do Pokemon" class="card-pokemon__conteudo-card__imagem slideInLeft">
        </div>
    </div>
</template>

<style lang="scss" src="../styles/pokemoncard.scss"></style>
<script src="../utils/pokemoncard.ts"></script>