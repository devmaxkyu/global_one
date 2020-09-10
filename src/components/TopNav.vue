<template>
    <div id="nav">
        <div class="logo">
            <router-link to="/">KCC TRANSPORT SYSTEM, INC (LOGO)</router-link>
        </div>
        <div class="top-menu">
            <div class="profile">
                <router-link to="/">CFS.KCCUSA / KCC TRANSPORT SYSTEMS, INC - KCCLU-US / USD [STAFF]</router-link> | 
                <router-link to="/">logout</router-link>
            </div>
            <div>
                <kendo-button class="k-outline" icon="home"></kendo-button>
                <kendo-button class="k-outline" icon="letter"></kendo-button>
                <kendo-button class="k-outline" icon="help"></kendo-button>
                <kendo-button class="k-outline" icon="email"></kendo-button>
                <kendo-button class="k-outline" icon="favorite"></kendo-button>
                <kendo-button class="k-outline" icon="globe"></kendo-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav .top-menu {
  font-size: 0.8rem;
  display:flex;
  align-items: center;
}

#nav .top-menu .profile {
    padding-right: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>