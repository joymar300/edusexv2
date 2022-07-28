Vue.component('barra', {
    template: //html 
    `
   
        <v-app-bar app color="deep-orange lighten-4" >
            <v-img src="img/icono.png"
            max-height="60"
            max-width="75"
            
            ></v-img>
            
            <v-toolbar-title class="white--text" >
                <v-btn color="white" text href="index.html">EduSex</v-btn> 
            </v-toolbar-title>
            
            <v-spacer></v-spacer>
            
            <v-btn text>
                <v-toolbar-title class="white--text " ></v-toolbar-title>
            </v-btn>
            <v-btn text>
                <v-toolbar-title class="white--text" >Registarte</v-toolbar-title>
            </v-btn>
            <v-btn text>
                <v-toolbar-title class="white--text" >Loguin</v-toolbar-title>
            </v-btn>
  
        </v-app-bar>  
  
    `
}); 