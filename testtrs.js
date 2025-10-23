/**
 *------
 * BGA framework: Gregory Isabelli & Emmanuel Colin & BoardGameArena
 * TESTTRS implementation : © <Your name here> <Your email address here>
 *
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * testtrs.js
 *
 * TESTTRS user interface script
 * 
 * In this file, you are describing the logic of your user interface, in Javascript language.
 *
 */

define([
    "dojo","dojo/_base/declare",
    "ebg/core/gamegui",
    "ebg/counter"
],
function (dojo, declare, gamegui, counter) {
    return declare("bgagame.testtrs", ebg.core.gamegui, {
        constructor: function(){
            console.log('testtrs constructor');
              
            // Here, you can init the global variables of your user interface
            // Example:
            // this.myGlobalValue = 0;

        },
        
        /*
            setup:
            
            This method must set up the game user interface according to current game situation specified
            in parameters.
            
            The method is called each time the game interface is displayed to a player, ie:
            _ when the game starts
            _ when a player refreshes the game page (F5)
            
            "gamedatas" argument contains all datas retrieved by your "getAllDatas" PHP method.
        */
        
        setup: function( gamedatas )
        {
            console.log( "Starting game setup" );
            console.log("test super test")

            // Example to add a div on the game area
            this.getGameAreaElement().insertAdjacentHTML('beforeend', `
                <div id="player-tables"></div>
            `);

            this.getGameAreaElement().insertAdjacentHTML('beforeend', `
            <div class="allPlayers">
                <div class="gameField">
                    <h3>Игровое поле</h3>
                </div>
                <div class="cards-container">
                    <div class="cards">
                        <div class="card">
                            <p>Событие 1</p>
                        </div>
                        <div class="card ml-5">
                            <p>Событие 2</p>
                        </div>
                    </div>
                    <div class="paiay"></div>
                </div>
                <div class="menu">
                    <div class="menu-info">
                        <img src="https://studio.boardgamearena.com:8084/data/themereleases/current/games/testtrs/999999-9999/img/logo2.png">
                        <h2>1 раунд</h2>
                        <h2>P - бонус</h2>
                    </div>
                </div>
            </div>
            <div style="display: flex;">
                <div class="fieldIT">
                    <h3>Поле IT</h3>
                </div>
                <div class="pamyatka2">
                    <h3>Памятка игрока</h3>
                </div>
            <div>
            `);

            const paiayElement = document.querySelector('.paiay');

            let paiayElementStatus = true; // true = первый событие false = второй событие

            if (paiayElement) {
                paiayElement.style.transition = 'margin-left 0.5s ease';

                paiayElement.addEventListener('click', () => {
                    paiayElementStatus = !paiayElementStatus;

                    if (paiayElementStatus) {
                        paiayElement.style.marginLeft = '0%';
                    } else {
                        paiayElement.style.marginLeft = '55%';
                    }
                });
            }


            const pamyatka2Element = document.querySelector('.pamyatka2')

            let pamyatkaStatus = true // true со стороны последовательности ходов false = со стороны личных целей

            if (pamyatka2Element) {
                pamyatka2Element.style.backgroundImage = "url('https://studio.boardgamearena.com:8084/data/themereleases/current/games/testtrs/999999-9999/img/pamyatka2.png')";
              
                pamyatka2Element.addEventListener('click', () => {

                  pamyatkaStatus = !pamyatkaStatus;
              
                  if (pamyatkaStatus) {
                    pamyatka2Element.style.backgroundImage = "url('https://studio.boardgamearena.com:8084/data/themereleases/current/games/testtrs/999999-9999/img/pamyatka2.png')";
                  } else {
                    pamyatka2Element.style.backgroundImage = "url('https://studio.boardgamearena.com:8084/data/themereleases/current/games/testtrs/999999-9999/img/pamyatka.png')";
                  }
                });
              }

            this.getGameAreaElement().insertAdjacentHTML('beforeend', `
                <div class="player-container">
                    <div class="pamyatka">
                        <h3>Памятка игрока</h3>
                    </div>
                    <div class="player-planshet">
                        <h3>Планешет игрока</h3>
                    </div>
                </div>
            `)
            
            // Setting up player boards
            // Object.values(gamedatas.players).forEach(player => {
            //     // example of setting up players boards
            //     this.getPlayerPanelElement(player.id).insertAdjacentHTML('beforeend', `
            //         <span id="energy-player-counter-${player.id}"></span> Energy
            //     `);
            //     const counter = new ebg.counter();
            //     counter.create(`energy-player-counter-${player.id}`, { value: player.energy, playerCounter: 'energy', playerId: player.id });

            //     // example of adding a div for each player
            //     document.getElementById('player-tables').insertAdjacentHTML('beforeend', `
            //         <div id="player-table-${player.id}">
            //             <strong>${player.name}</strong>
            //             <div>Player zone content goes here</div>
            //         </div>
            //     `);
            // });
            
            // TODO: Set up your game interface here, according to "gamedatas"
            
 
            // Setup game notifications to handle (see "setupNotifications" method below)
            this.setupNotifications();

            console.log( "Ending game setup" );
        },
       

        ///////////////////////////////////////////////////
        //// Game & client states
        
        // onEnteringState: this method is called each time we are entering into a new game state.
        //                  You can use this method to perform some user interface changes at this moment.
        //
        onEnteringState: function( stateName, args )
        {
            console.log( 'Entering state: '+stateName, args );
            
            switch( stateName )
            {
            
            /* Example:
            
            case 'myGameState':
            
                // Show some HTML block at this game state
                dojo.style( 'my_html_block_id', 'display', 'block' );
                
                break;
           */
           
           
            case 'dummy':
                break;
            }
        },

        // onLeavingState: this method is called each time we are leaving a game state.
        //                 You can use this method to perform some user interface changes at this moment.
        //
        onLeavingState: function( stateName )
        {
            console.log( 'Leaving state: '+stateName );
            
            switch( stateName )
            {
            
            /* Example:
            
            case 'myGameState':
            
                // Hide the HTML block we are displaying only during this game state
                dojo.style( 'my_html_block_id', 'display', 'none' );
                
                break;
           */
           
           
            case 'dummy':
                break;
            }               
        }, 

        // onUpdateActionButtons: in this method you can manage "action buttons" that are displayed in the
        //                        action status bar (ie: the HTML links in the status bar).
        //        
        onUpdateActionButtons: function( stateName, args )
        {
            console.log( 'onUpdateActionButtons: '+stateName, args );
                      
            if( this.isCurrentPlayerActive() )
            {            
                switch( stateName )
                {
                 case 'PlayerTurn':    
                    const playableCardsIds = args.playableCardsIds; // returned by the argPlayerTurn

                    // Add test action buttons in the action status bar, simulating a card click:
                    playableCardsIds.forEach(
                        cardId => this.statusBar.addActionButton(_('Play card with id ${card_id}').replace('${card_id}', cardId), () => this.onCardClick(cardId))
                    ); 

                    this.statusBar.addActionButton(_('Pass'), () => this.bgaPerformAction("actPass"), { color: 'secondary' }); 
                    break;
                }
            }
        },        

        ///////////////////////////////////////////////////
        //// Utility methods
        
        /*
        
            Here, you can defines some utility methods that you can use everywhere in your javascript
            script.
        
        */


        ///////////////////////////////////////////////////
        //// Player's action
        
        /*
        
            Here, you are defining methods to handle player's action (ex: results of mouse click on 
            game objects).
            
            Most of the time, these methods:
            _ check the action is possible at this game state.
            _ make a call to the game server
        
        */
        
        // Example:
        
        onCardClick: function( card_id )
        {
            console.log( 'onCardClick', card_id );

            this.bgaPerformAction("actPlayCard", { 
                card_id,
            }).then(() =>  {                
                // What to do after the server call if it succeeded
                // (most of the time, nothing, as the game will react to notifs / change of state instead)
            });        
        },    


        
        ///////////////////////////////////////////////////
        //// Reaction to cometD notifications

        /*
            setupNotifications:
            
            In this method, you associate each of your game notifications with your local method to handle it.
            
            Note: game notification names correspond to "notifyAllPlayers" and "notifyPlayer" calls in
                  your testtrs.game.php file.
        
        */
        setupNotifications: function()
        {
            console.log( 'notifications subscriptions setup' );
            
            // automatically listen to the notifications, based on the `notif_xxx` function on this class.
            this.bgaSetupPromiseNotifications();
        },  
        
        // TODO: from this point and below, you can write your game notifications handling methods
        
        /*
        Example:
        
        notif_cardPlayed: async function( args )
        {
            console.log( 'notif_cardPlayed' );
            console.log( args );
            
            // Note: args contains the arguments specified during you "notifyAllPlayers" / "notifyPlayer" PHP call
            
            // TODO: play the card in the user interface.
        },    
        
        
        */

   });             
});
