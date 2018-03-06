var tableaux = ['♠', '♥', '♦', '♣'];
var divBouton = $('.bouton');
var creditJoueur = 100;


var clignotement = function(){      // fonction qui permet de faire clignoter un texte
    if (document.querySelector('.blink').style.visibility=='visible'){
        document.querySelector('.blink').style.visibility='hidden';
    }
    else{
        document.querySelector('.blink').style.visibility='visible';
    }
};


divBouton.click(function () {
    if (creditJoueur >= 1) {        // si le joueur a encore des crédits
        var allCases = $('.case');      // designe toutes les cases dans lesquelles vont apparaitre les symboles
        var case1 = $('.case1');
        var case2 = $('.case2');
        var case3 = $('.case3');
        var case4 = $('.case4');
        var score = $('.score');
        var win = $('.win');
        var credit = $('.credit');

        // Réinitilaiser les div contenant du texte
        win.html('');
        score.html('');
        creditJoueur--;     // La partie coute 1 credit

        // Génération de 4 nombres aléatoires entre 0 et 3 pour afficher les images
        var tableau1 = tableaux[Math.floor(Math.random() * 4)];
        var tableau2 = tableaux[Math.floor(Math.random() * 4)];
        var tableau3 = tableaux[Math.floor(Math.random() * 4)];
        var tableau4 = tableaux[Math.floor(Math.random() * 4)];

        // remplir les cases avec les symboles obtenus aleatoirement
        case1.html('<p class="symbol">'+tableau1+'</p>');
        case2.html('<p class="symbol">'+tableau2+'</p>');
        case3.html('<p class="symbol">'+tableau3+'</p>');
        case4.html('<p class="symbol">'+tableau4+'</p>');
        $( ".symbol" ).slideUp( 400 ).delay( 0 ).fadeIn( 0 );       // animation sur les symboles

        // si toutes les cases correspondent
        if (tableau1 == tableau2 && tableau2 == tableau3 && tableau3 == tableau4) {
            creditJoueur += 500;      // Le joueur gagne 10 credits
            credit.html(creditJoueur+' credits');    // Mettre a jour le score du joueur
            score.html('<li class="animated fadeInUp">'+"Vous avez gagné 20 crédits"+'</li>');
            win.html('<p class="blink">JACKPOT !!!</p>');     // Afficher le texte "JACKPOT"
            periode = setInterval(clignotement, 500);       // faire clignoter le texte "JACKPOT"
        }

        // si toutes les cases ne correspondent pas
        if (tableau1 != tableau2 || tableau2 != tableau3 || tableau3 != tableau4) {
            credit.html(creditJoueur+' credits');    // Mettre a jour le score du joueur
            score.html('<li class="animated fadeInUp">'+"Vous avez perdu 1 crédit"+'</li>');
        }
    }
    else {
        // si le joueur perd
        $('.credit').disabled;
        $('.credit').html('Vous avez perdu');
    }
});











