Vue.component('barra', {
    template: //html 
    `
    <div id="barra">
        <v-app-bar  app color="pink darken-1" elevate-on-scroll >
        
            <v-app-bar-nav-icon @click="drawer = true" color="white"  class="d-flex d-sm-none"></v-app-bar-nav-icon>
            <v-img src="img/icono.png" max-height="60" max-width="75"></v-img>

            <v-toolbar-title class="white--text"  >
                <v-btn color="white" text href="index.html"  >EduSex</v-btn> 
            </v-toolbar-title>
            
            <v-spacer></v-spacer>
            <v-btn text>
                <v-toolbar-title class="white--text d-none d-sm-flex">Registarse</v-toolbar-title>
            </v-btn>
            <v-btn text>
                <v-toolbar-title class="white--text d-none d-sm-flex" >Login</v-toolbar-title>
            </v-btn>

        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>login</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>registrase</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer> 
    </div>   

 
    `
});
        new Vue({
            el: '#barra',
    
            data:{

                    drawer: false,
                    group: null,

            },
        });
       