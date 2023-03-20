<template>
    <div class="main">
 
        <div class="logo-container mt-3 ms-3 mb-2">
            <router-link to="/" exact>
                <img src="../assets/nav-logo.png" alt="Site logo">
            </router-link>
            
            <div class="logo-description">
                <router-link to="/" exact>
                    <span>Sports & Injury Massage</span><br>
                    <span>of Delaware</span>
                </router-link>
                
            </div>
        </div>
        
        <nav class="mt-3 mb-2 me-5">
            <ul>
                <li>
                    <router-link to="/" exact>Home</router-link>
                </li>
                <li>
                    <router-link to="/conditions" exact>Conditions</router-link>
                </li>
                <li>
                    <router-link to="/testimonials" exact>Testimonials</router-link>
                </li>
                <li>
                    <router-link to="/about" exact>About</router-link>
                </li>
                <li>
                    <router-link to="/program" exact>Program</router-link>
                </li>
                <li>
                    <router-link to="/contact" exact>Contact</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'MassageWebsiteHeader',
};
</script>

<style lang="scss" scoped>
.main {
    position: absolute;
    left: 0;
    right: 0;
    background: rgb(198 198 198 / 30%);
    display: flex;
    justify-content: space-between;
    z-index: 1;
    font-family: 'Roboto', sans-serif;

}

.logo-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
        width: 96px;
        height: 80px;
        object-fit: contain;
        object-position: center center;
    }

    .logo-description {
        width: 273px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        
        span {
            font-weight: bold;
            font-size: 22px;
            color: #00d700;
        }
    }
}

ul {
    list-style-type: none;
    text-align: center;
    margin: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
    line-height: 30px;
    font-size: 19px;
}

a {
    color: black;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}

nav {
    
    padding: 14px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}       

.router-link-active {
    color: #00d700;
}
</style>