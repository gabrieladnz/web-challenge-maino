<template>
    <div class="sobre">
        <!-- Navbar  -->
        <div>
            <Navbar></Navbar>
        </div>
        <section class="sobre__section">
            <h1 class="sobre__section__titulo">{{ $t("sobre.titulo") }}</h1>
            <div class="sobre__section__texto">
                <p>
                    {{ $t("sobre.texto1") }} </p>
                <p>
                    {{ $t("sobre.texto2") }} </p>
                <p>
                    {{ $t("sobre.texto3") }} </p>
            </div>
            <h5 class="sobre__section__subtitulo">{{ $t("sobre.subtitulo") }}</h5>
            <div class="sobre__section__links">
                <a href="https://www.linkedin.com/in/gabrieladnz" target="_blank">
                    <img src="../assets/icons/icon-linkedin.svg" alt="LinkedIn">
                </a>
                <a href="https://github.com/gabrieladnz" target="_blank">
                    <img src="../assets/icons/icon-github.svg" alt="GitHub">
                </a>
                <a href="https://dev.to/gabrieladnz" target="_blank">
                    <img src="../assets/icons/icon-devto.svg" alt="Dev.to">
                </a>
            </div>
        </section>
    </div>
</template>
<script src="../utils/sobre.ts"></script>
<style lang="scss" src="../styles/sobre.scss"></style>
