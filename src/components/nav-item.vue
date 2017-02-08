<template>
    <nav class="top-bar" data-topbar>
        <ul class="title-area">
            <li class="name">
                <h1><a href="#">WebSiteName</a></h1>
            </li>
            <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>
        <section class="top-bar-section">
            <ul class="right">
                <li class="active"><a href="#">Home</a></li>
                <li class="has-dropdown">
                    <a href="#">Dropdown</a>
                    <ul class="dropdown">
                        <li><a href="#">First link in dropdown</a></li>
                        <li><a href="#">Second link in dropdown</a></li>
                        <li class="active"><a href="#">Active link in dropdown</a></li>
                    </ul>
                </li>
            </ul>
        </section>
    </nav>
</template>
<script>
    export default {
      name: 'navItem'
    }
</script>