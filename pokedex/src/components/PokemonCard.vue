<template>
    <div class="card-pokemon">
        <!-- Número  -->
        <span class="card-pokemon__numero">{{ id }}</span>
        <!-- Nome  -->
        <h2 class="card-pokemon__nome">{{ name }} </h2>
        <!-- Conteúdo card  -->
        <div class="card-pokemon__conteudo-card">
            <ol class="card-pokemon__conteudo-card__tipos">{{ types }}
            </ol>
            <img v-bind:src="photo" alt="Imagem do Pokemon" class="card-pokemon__conteudo-card__imagem">
        </div>
    </div>
</template>

<style lang="scss" src="../styles/pokemoncard.scss"></style>
<script src="../utils/pokemoncard.ts"></script>