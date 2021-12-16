const buttons = document.querySelectorAll("button");
var para = document.getElementById('para');
var section = document.getElementById('chifoumi');

for( let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener("click",function(){

        const player = buttons[i].innerHTML;

        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;

        console.log(robot);

    var prog1 = document.getElementById('myLife');
    console.log(prog1);
    var prog2 = document.getElementById('hisLife');
    console.log(prog2);

    if(player === robot){
        console.log("je fonctionne")
        para.innerHTML = "Egalité ! Vous avez choisi la même chose.";
    }else if(player === "feuille" && robot === "pierre"){
        prog2.value -= 25;
        para.textContent = "Vous avez Gagnez ! Vous avez choisi feuille, Ordi à choisi pierre !";
    }else if(player === "pierre" && robot === "feuille"){
        prog1.value -= 25;
        para.textContent = "Vous avez perdu ! Vous avez choisi pierre, Ordi à choisi feuille !";
    }else if(player === "feuille" && robot === "ciseaux"){
        prog1.value -= 25;
        para.textContent = "Vous avez perdu ! Vous avez choisi feuille, Ordi à choisi ciseaux !";
    }else if(player === "ciseaux" && robot === "feuille"){
        prog2.value -= 25;
        para.textContent = "Vous avez Gagnez ! Vous avez choisi ciseaux, Ordi à choisi feuille !";
    }else if(player === "ciseaux" && robot === "pierre"){
        prog1.value -= 25;
        para.textContent = "Vous avez perdu ! Vous avez choisi ciseaux, Ordi à choisi pierre !";
    }else if(player === "pierre" && robot === "ciseaux"){
        prog2.value -= 25;
        para.textContent = "Vous avez Gagnez ! Vous avez choisi pierre, Ordi à choisi ciseaux !";
    }


    if(prog1.value <= 5 ){
        section.innerHTML = "Tu as perdu ! Retente ta chance <button style='margin:40px;'><a href='index.html' style='text-decoration:none;color:rgb(255 247 0);background:rgb(31 31 31);padding:8px;'>Rejouer</a></button>";
    }else if(prog2.value <=5){
        section.innerHTML = "Tu as gagnez ! Retente ta chance de gagnez <button style='margin:40px;'><a href='index.html' style='text-decoration:none;color:rgb(255 247 0);background:rgb(31 31 31);padding:8px;'>Rejouer</a></button>";
    }
    })
}    



