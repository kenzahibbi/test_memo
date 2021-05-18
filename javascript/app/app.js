ret_op = randomOp();
document.getElementById("p1").innerHTML = ret_op[0];
tmp = ret_op[1];
var cmpt = 0; //compteur de mauvaise reponse
var tab_Ess = new Array();
var tableau = document.getElementById("tableau");
var ligne = tableau.insertRow(-1);//on a ajouté une ligne

function getResult() {
        // 
        var res = document.getElementById("resultat").value;
        
        if (res == tmp && cmpt == 0){
            document.getElementById("p2").innerHTML = "Bravo ";

        }else if (res == tmp && cmpt > 0 && cmpt < 3) {
            document.getElementById("p2").innerHTML = "Vous pouvez faire mieux";
            for (j = 0; j < cmpt; j++){
                var colonne1 = ligne.insertCell(0);//on a une ajouté une cellule
                colonne1.innerHTML += tab_Ess[j];//on y met le contenu de titre   
            }
            cmpt =0;
        }else if (res != tmp){
            document.getElementById("p2").innerHTML = "Entrer une autre valeur";

            if(cmpt < 3){
                tab_Ess[cmpt] = res;
                cmpt++;
            }else{
                document.getElementById("p2").innerHTML = "Tous les essais sont faux";
                for (j = 0; j < cmpt; j++){
                    var colonne1 = ligne.insertCell(0);//on a une ajouté une cellule
                     colonne1.innerHTML += tab_Ess[j];//on y met le contenu de titre   
                }
                cmpt = 0;      
            }
            
        }
}


function randomOp(){
    //var ops=['+','-','*','/'];
    //var opindex = Math.floor((Math.random()*4)+1); //good that your rnum2 cannot be zero
    var ops=['+','-','*'];
    var opindex = Math.floor((Math.random()*2)+1);
    var operator = ops[opindex];
    rnum1 = Math.floor((Math.random()*10)+1);
    rnum2 = Math.floor((Math.random()*10)+1);

    //calculate the expected result:
    var res;
    switch (opindex){
        case 0: res=rnum1+rnum2; break;
        case 1: res=rnum1-rnum2; break;
        case 2: res=rnum1*rnum2; break;
        case 3: res=rnum1/rnum2; break;
    }
    let operation = "Calculer svp cette operation " + rnum1 + operator + rnum2;
    return [operation, res];
    
}
