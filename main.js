var inputfield= document.getElementById('inputfield');
var ToDoContainer= document.getElementById('ToDoContainer');
var addToDoButton= document.getElementById('addToDo');
//créer un evenement au click du bouton
addToDoButton.onclick= function(){
    //verifier que le champ n'est pas vide
    if(inputfield.value !=""){
    //creer un element p pour afficher le texte
    var paragraphe= document.createElement('p');
    }
    //style du paragraphe
    paragraphe.classList.add("paragraphe-style");

    //ajouter le texte dans le paragraphe
    paragraphe.innerText=inputfield.value;
    //ajouter le paragraphe dans le container
    ToDoContainer.appendChild(paragraphe);
    //vider le champ
    inputfield.value="";
    //barrer le texte
    paragraphe.addEventListener('click', function(){
        paragraphe.classList.add("paragraphe_click");
    });
    //supprimer le texte quand on double click
    paragraphe.addEventListener('dblclick', function(){
        ToDoContainer.removeChild(paragraphe);
    });


};
