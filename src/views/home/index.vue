<template>
    <div class="home">
        <Head/>
        <div class="container">
            <keep-alive>
                <component :is="curView"></component>
            </keep-alive>

        </div>
    </div>
</template>

<script>


    import Head from '../../common/head'
    import Foot from '../../common/tabbar'
    import Recommand from '../../components/recommand'
    import OldToNew from '../../components/oldToNew'
    import Repair from '../../components/repair'
    import Headlines from '../../components/headlines'



    export default {
        created() {
           /* this.getActionBanner()*/

            this.Observer.$on("handleTo", (data) => {
                switch (data) {
                    case 1: {
                        this.curView = "Recommand";
                        break;
                    }
                    case 2: {
                        this.curView = "OldToNew";
                        break;
                    }
                    case 3: {
                        this.curView = 'Repair';
                        break;
                    }
                    case 4: {
                        this.curView = 'Headlines';
                        break;
                    }
                }
            })

        },

        data() {
            return {
                curView: "Recommand",
            }
        },
        components: {
            Head,
            Foot,
            Recommand,
            OldToNew,
            Repair,
            Headlines
        },


    }
</script>
<style>
    .home {
        margin-top: 1.88rem;
        height: 100%;
        width: 100%;

    }
</style>