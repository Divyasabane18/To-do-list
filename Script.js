let clickedbtn = document.getElementById('clicked');
let datastore = JSON.parse(localStorage.getItem("datastore")) || [];

function renderTask(taskText) {
  let list = document.createElement('li');
  document.getElementById("listtasks").appendChild(list);
  list.textContent = taskText;
  list.classList.add("litask");

  let buttoncontainer = document.createElement('div');
  buttoncontainer.classList.add("buttonGrp");
  list.appendChild(buttoncontainer);


  let button = document.createElement('button');
  let one = document.createElement('i');
  one.classList.add("fa-solid", "fa-trash");
  button.appendChild(one);
  button.classList.add("newbutton");

  button.addEventListener('click', () => {
    const taskText = list.textContent;
    datastore = datastore.filter(task => task !== taskText);
    localStorage.setItem("datastore", JSON.stringify(datastore));
    list.remove();
  });


  let donebutton = document.createElement('button');
  let two = document.createElement('i');
  two.classList.add("fa-solid", "fa-circle-check");
  donebutton.appendChild(two);
  donebutton.classList.add("donebutton");

  donebutton.addEventListener('click', () => {
    swal("Well done!", "You completed the task 🎯", "success");
    const taskText = list.textContent;
    datastore = datastore.filter(task => task !== taskText);
    localStorage.setItem("datastore", JSON.stringify(datastore));
    list.remove();
  });

  buttoncontainer.appendChild(button);
  buttoncontainer.appendChild(donebutton);
}


datastore.forEach(task => {
  renderTask(task);
});


clickedbtn.addEventListener("click", (event) => {
  event.preventDefault();
  let collectask = document.getElementById('task');

  if (collectask.value.trim() === "") {
    alert("Enter the task please!");
  } else {
    let acutaltask = collectask.value;
    renderTask(acutaltask); 
    datastore.push(acutaltask);
    localStorage.setItem('datastore', JSON.stringify(datastore));
    collectask.value = "";
  }
});
