/** 
 * actions des boutons 
 */
document.querySelector('#editTitle').addEventListener('click',manageTitle);
document.querySelector('#saveTitle').addEventListener('click',manageTitle);

function manageTitle(){

    var title = document.querySelector('#title');
    title.toggleAttribute('contenteditable');
    title.focus();

    document.querySelector('#editTitle').classList.toggle('hidden');
    document.querySelector('#saveTitle').classList.toggle('hidden');
    
}

/**
 * Niveau 1 : En m'appuyant sur mes connaissances JavaScript, je développe la fonctionnalité permettant, en cliquant sur un bouton, 
 * d'ajouter un élément à une liste de tâches. Cette tâche pourra être cochée afin d'être marquée comme terminée.
 */
document.querySelector('#addTask').addEventListener('click',addTask);

let nbcounter = 0;

function addTask(){
    alert('Ajouter une tâche');

    let task = document.getElementById("task").content.cloneNode(true);
    
    let taskName = "task-" + nbcounter;
    let taskId = "task-checkbox-" + nbcounter

    task.querySelector("li").setAttribute("id", taskName)
    task.querySelector("input").setAttribute("name", taskName);
    task.querySelector("input").setAttribute("id", taskId);
    task.querySelector("label").setAttribute("for", taskId);
    
    document.querySelector(".tasks").append(task);

    nbcounter++;
}



/**
 * Niveau 2: Pour chacune des tâches, j'ajoute un menu me permettant de sélectionner une priorité.
 */

/**
 * Niveau 3 : Pour chacune des tâches, je peux modifier son libellé ou supprimer celle-ci.
 */

/**
document.querySelector('#editTask').addEventListener('click', manageTask);

function manageTask() {

    let task = document.querySelector('.pls');
    task.toggleAttribute('contenteditable');
    task.focus();
}
*/


/**
 * Niveau 4 : J'utilise les cookies afin de gérer la persistance des données et ainsi sauvegarder mes taches
 */