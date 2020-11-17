$( function() {

    // Générer aléatoirement un fighter à l'ordinateur via la fonction math random entre 0 et 2. Il faut relier le resultat obtenu à un fighter via des conditons.
    // si math random = 2 alors poulpe ordi
    // si math random = 0 alors homard ordi
    // si math random = 1 alors murene ordi
    var iaChoice = Math.floor(Math.random() * 3);

    // initialisation des compteurs : nombre de partie qui va se décrémenter, et victoire et défaite qui vont s'incrémenter.
    var round = 10;
    var victory = 0;
    var defeat = 0;
    // Affichage des compteurs dès le chargement de la page
    $('#defeat').html(defeat);
    $('#round').html(round);
    $('#victory').html(victory);

    // la fonction setAiChoice permet de relancer la fonction random afin de généré un nouveau choix de l'ordinateur sans recharger la page
    function setAiChoice(){
        iaChoice = Math.floor(Math.random() * 3);
        $("#leviathanChoiceHiddenImg").attr("src","Assets/IMG/Leviathan.png"); 
        round--; // Décrémentation à chaque tour
        console.log(round);// affichage de l'image face caché du choix de l'ordinateur
        $('#round').html(round);
        if(round == 0 ){
            var egalite = 10 - victory - defeat
            var partieNonNulle = 10 - egalite 
            var pourcentage = Math.floor((victory/partieNonNulle)*100)
            // alert(pourcentage);

            if(pourcentage > 0 && pourcentage < 50){
                $('#endGame').show();
                $('#textEndGame').html("Tu perds le duel avec seulement"+"\n"+ pourcentage + "% de victoires."+"\n"+" Le trône du Roi des Océans" +"\n"+" revient au Léviathan ! ");
            }  
            else if(pourcentage == 50){
                $('#endGame').show();
                $('#endGame').attr("src","Assets/IMG/alerteEgalite.png")
                $('#textEndGame').html("Tu termines le duel à égalité."+"\n"+" Veux-tu retenter ta chance ?");
            }
            else{
                $('#endGame').show();
                $('#endGame').attr("src","Assets/IMG/alerteGagne.png");
                $('#textEndGame').html("Tu remportes le duel avec"+"\n" + pourcentage + "% de victoires."+"\n"+" À toi le trône"+"\n"+" du Roi des Océans!"); 
            }  
        };

    }
  

    // carte poulpe 

        var poulpe = $('#poulpe');
        poulpe.draggable({
            drag: function( event, ui ) {  // la fonction s'enclenche avec la méthode draggable (en attrapant l'objet), on fixe un chiffre fixe à notre variable qui correspond à un des fighters, ici le 6 correspond au poulpe
                var poulpechoice = 6;
                    $("#droppable" ).droppable({  
                    drop: function( event, ui ) {  // La comparaison des valeurs s'effectue avec cette fonction qui démarre avec la méthode droppable (quand l'objet est déposé dans la zone défini par l'id #droppable (la div dans le html))
                            
                            
                            $("#leviathanChoiceHiddenImg").attr("src","Assets/IMG/Leviathan.png"); // attr permet de changer les attributs css

                        
                            if(iaChoice + poulpechoice == 8){  // les résultats strictes définissent si le joueur a gagné ou a perdu (cf tableau)
                                $('#result').html('Égalité'); // message qui s'affiche dans le paragraphe #result 
                                $("#leviathanChoiceHiddenImg").attr("src","Assets/IMG/poulpe_dark.png"); // affichage du choix de l'ordinateur
                                
                            }
                            else if(iaChoice + poulpechoice == 7){
                                $('#result').html('Perdu');
                                $("#leviathanChoiceHiddenImg").attr("src","Assets/IMG/murene_dark.png");
                                defeat++; // incrémentation à chaque défaite
                            }
                            else{
                                $('#result').html('Gagné');
                                $("#leviathanChoiceHiddenImg").attr("src","Assets/IMG/homard_dark.png");
                                victory++; //incrémentation à chaque victoire
                            };
                            // la méthode .animate permet de modifier / animer des propriétés CSS.
                            $('#poulpe').animate({
                                'display' : 'float', // position initiale de l'objet , au moment où le joueur le dépose dans la div droppable
                            }, 0).delay(200).animate({ // le delay permet de mettre une temporisation entre 2 méthodes (en ms)  
                                'top': '0px', // retour à sa position d'origine
                                'left': '0px',
                                'position': 'relative'
                                }, 600, setAiChoice); // lancement de la fonction setAiChoice crée en ligne 10 pour que l'ordinateur regénère une partie

                            $('#defeat').html(defeat); // actualisation des compteurs 
                            $('#round').html(round);
                            $('#victory').html(victory);
                                 
                     }})
                    
      
        }});   //fin du tour
        
      // carte Homard

        var homard = $('#homard');
        homard.draggable({
            drag: function( event, ui ) {
                var homardchoice = 9;
                    $("#droppable" ).droppable({
                    drop: function( event, ui ) {
                            
                            $("#leviathanChoiceHiddenImg").attr("src","Assets/IMG/poulpe2.png");
                            if(iaChoice + homardchoice == 9){
                                $('#result').html('Égalité');
                                $("#leviathanChoiceHiddenImg").attr("src","Assets/IMG/homard_dark.png");
                            }
                            else if(iaChoice + homardchoice == 11){
                                $("#leviathanChoiceHiddenImg").attr("src","Assets/IMG/poulpe_dark.png");
                                $('#result').html('Perdu');
                                defeat++;  
                            }
                            else{
                                $('#result').html('Gagné');
                                $("#leviathanChoiceHiddenImg").attr("src","Assets/IMG/murene_dark.png");
                                victory++;
                            };
                            // la méthode animate permet de modifier / animer des propriétés CSS.
                            $('#homard').animate({
                                'display' : 'float',
                            }, 0).delay(200).animate({
                                'top': '0px',
                                'left': '0px',
                                'position': 'relative'
                                }, 600, setAiChoice);
                                
                            $('#defeat').html(defeat);
                            $('#round').html(round);
                            $('#victory').html(victory);
                                  
                     }})
                     
        }});

        
        // carte Murene

            var murene = $('#murene');
                murene.draggable({
                    drag: function( event, ui ) {
                        var murenechoice = 3 ;
                            $("#droppable" ).droppable({
                            drop: function( event, ui ) {
                                    
                                    $("#leviathanChoiceHiddenImg").attr("src","Assets/IMG/poulpe_dark.png");
                                    if(iaChoice + murenechoice == 4){
                                        $('#result').html('Égalité');
                                        $("#leviathanChoiceHiddenImg").attr("src","Assets/IMG/murene_dark.png");
                                    }
                                    else if(iaChoice + murenechoice == 3){
                                        $('#result').html('Perdu');
                                        $("#leviathanChoiceHiddenImg").attr("src","Assets/IMG/homard_dark.png");
                                        defeat++;
                                    }
                                    else{
                                        $('#result').html('Gagné');
                                        $("#leviathanChoiceHiddenImg").attr("src","Assets/IMG/poulpe_dark.png");
                                        victory++;
                                    };
                                    // la méthode animate permet de modifier / animer des propriétés CSS.
                                    $('#murene').animate({
                                        'display' : 'float',
                                    }, 0).delay(200).animate({
                                        'top': '0px',
                                        'left': '0px',
                                        'position': 'relative'
                                        }, 600, setAiChoice);
                                    $('#defeat').html(defeat);
                                    $('#round').html(round);
                                    $('#victory').html(victory);
                                  
                             }}) 

            }}); 
        
         
        // drag and drop avec le retour à la position initiale si le drop ne se fait pas dans la zone droppable

            $( "#homard" ).draggable({
                revert: "invalid",
                cursor: "move"
            });
            $( "#murene" ).draggable({
                revert: "invalid",
                cursor: "move"
            });
            $("#poulpe").draggable({
                revert: "invalid",
                cursor: "move"
            });
        
    //     }
    // }     
        
  

        // à la fin des 10 parties, afficher messages de fin (victoire, défaite, égalité) et calculer le pourcentage de victoire par rapport à l'ordinateur.

        // bouton reset qui recharge la page
    $('#reset').click(function(){
            location.reload();
    }); //relancer la partie

  });