let inputData = document.getElementById('inputData');
let btnAdd = document.getElementById('btnAdd');
let noTask = document.getElementById('noTask');
let tasks = document.getElementById('tasks')
let model = document.getElementById('model');
let showModel = document.getElementById('showModel');
let closee = document.getElementById('closee');











let apearModel = () => {
 model.classList.toggle('block')

}

closee.addEventListener('click' , apearModel)
showModel.addEventListener('click' , apearModel)













let showNoTask = () => {

    if (tasks.children.length == 0) {
        noTask.classList.remove('none')
    }
}


let addtask = () => {
    let task = inputData.value;
    if (inputData.value.length == 0) {
        alert('please add data')
    }
    else {
        noTask.classList.add('none');
        tasks.innerHTML += `
           <div class=" alert alert-info text-left task">
           ${task}

           <button class="delete btn btn-danger float-right"> delete</button>
           </div>
           
        `
    }
    inputData.value = ("");
    apearModel();


}




btnAdd.addEventListener('click', addtask);



document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();

        showNoTask();


    }

})


let check = (e) =>{
 if(e.target.classList.contains('task'))
    e.target.classList.toggle('check')

}

tasks.addEventListener('click' , check)