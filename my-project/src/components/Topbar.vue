<template>
    <div>
        <section>
            <div>
                <ul>
                    <li>Top</li>
                    <li>Trending</li>
                    <li>Show</li>
                </ul>
                <span>Built with Vue.js</span>
            </div>
            
            <h1>{{ title }}</h1>
        </section>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                title:'Hello rick and morty'
            }
        }
    }
</script>

<style lang="scss">
*{
    margin:0;
    padding: 0;
}
    section{
        border: 1px black solid;
        >div{
            position: relative;
            background-color: rgb(255,107,0);
            height: 60px;
            color: white; 
            display: flex;
            align-items:center;
            >ul{
                margin-left: 300px;
                >li{
                list-style: none;
                float: left;
                margin-right: 20px;
                }
            }
            span{
                position:relative;
                margin-left:500px;
            }
        }
    }
</style>