menuGame = {
	create:function(){
 	bg = game.add.image(0,0,"tuo2")

 	//
 	//playText = game.add.text(game.width/2-50,game.height/2,"Play",{"fill":"pink"});
	
        button = game.add.button(340,350,'play',this.parallax);
        about = game.add.button(410,460,"about",this.abawt);
		about.anchor.set(0.5);

    },
	update:function(){
		if(keyboard.up.isDown){

			game.state.start('play');
		}

	},
	parallax:function(){
			game.state.start('play');
		
	}
}