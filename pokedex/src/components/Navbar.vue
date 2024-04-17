<template>
    <nav>
        <router-link to="/">{{ $t('navbar.item1') }}</router-link> |
        <router-link to="/sobre">{{ $t('navbar.item2') }}</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>