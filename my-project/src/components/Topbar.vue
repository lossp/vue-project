<template>
    <div>
        <section>
            <div id="navigator">
                <ul>
                    <li>Top</li>
                    <li>Trending</li>
                    <li>Show</li>
                    <li id="right">Built with Vue.js</li>
                </ul>
            </div>
            <div id="pages">
                <ul>
                    <li>&lt pre</li>
                    <li>pages</li>
                    <li>more &gt</li>
                </ul>
            </div>
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
        >#navigator{
            background-color: rgb(255,107,0);
            height: 60px;
            color: white; 
            display: flex;
            align-items:center;
            justify-content:center;
            >ul{
                display: flex;
                >li{
                list-style: none;
                margin-right: 20px;
                }
                >#right{
                    margin-left: 500px;
                }
            }
        }
        >#pages{
            >ul{
                position: relative;
                height: 50px;
                display: flex;
                align-items:center;
                justify-content:center;
                >li{
                    list-style: none;
                    padding-right: 10px;
                    margin-left: 25px;
                }
            }
        }
    }
</style>