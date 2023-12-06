// static approach
/*var state = {
    taskList: [
        {
            imageUrl : "",
            taskTitle : "",
            taskType : "",
            taskDescription : ""
        },
        {
            imageUrl: "",
            taskTitle: "",
            taskType: "",
            taskDescription: ""
        },
        {
            imageUrl: "",
            taskTitle: "",
            taskType: "",
            taskDescription: ""
        },
        {
            imageUrl: "",
            taskTitle: "",
            taskType: "",
            taskDescription: ""
        }
    ]
} */

//Dynamic approach
var state = {
    taskList : []
}

// DOM Objects
var taskContents = document.querySelector(".task__contents");
var taskMModal = document.querySelector(".task__modal_body");

//console.log(taskContents);
/*var htmlTaskContent = (id, title, description, type, url) => {
    //whenever u want to write HTML code in JS write it in ``
    return ``
}; */

var htmlTaskContent = ({id, title, description, type, url}) => `
     <div class = 'col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
        <div class= 'card shadow-sm task__card'>
          <!--CARD-HEADER-->
            <div class = 'card-header d-flex justify-content-end task__card__header'>
              <button type = "button" class="btn btn-outline-info mr-2" name = "${id}" >
                  <i class ="fas fa-pencil-alt" name=${id}></i>
              </button>
              <button type = "button" class="btn btn-outline-danger mr-2" name = "${id}" >
                  <i class ="fas fa-trash-alt" name=${id}></i>
              </button>
            </div>

            <!--CARD BODY-->
            <div class="card-body">
              ${url &&
    `<img width=100% src=${url} alt='card image cap' class='card-img-top md-3 rounded-lg' />`
    }
              <h4 class="card-title">${title}</h4>
              <p class="description trim-3 text-muted data-gram_editor='false'">${description}</p>
              <div class="tags text-white d-flex flex-wrap">
                <span class="badge bg-primary m-1">${type}</span>
              </div>

            </div>

            <!--CARD FOOTER-->
            <div class="card-footer">
              <button type="button" class="btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button>
            </div>
        </div>
    </div>
`