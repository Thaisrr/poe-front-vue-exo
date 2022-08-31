<template>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'home'}">Accueil</router-link>
        </li>
        <li>
          <router-link :to="{name: 'counter-name'}">Compteur</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
    export default {
      name: 'NavigationComponent'
    }
</script>