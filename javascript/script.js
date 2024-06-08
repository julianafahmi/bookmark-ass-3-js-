
var bookMarkName=document.getElementById("bookmarkName")
var bookMarkUrl=document.getElementById("bookmarkUrl")
var boxInfo = document.querySelector(".box-ifno")
var bookMarkList=[];
if(localStorage.getItem("bookMarkList")!=null){
    bookMarkList=JSON.parse(localStorage.getItem("bookMarkList"));
    displayBookMark(bookMarkList)


}


function addBookMark(){
    if(
        bookMarkName.classList.contains("is-valid")&&bookMarkUrl.classList.contains("is-valid")
    ){


    var bookMark={
        name:bookMarkName.value,
        url:bookMarkUrl.value,
        
    }
    
    bookMarkList.push(bookMark);
    localStorage.setItem("bookMarkList",JSON.stringify(bookMarkList))
  clear()
    displayBookMark(bookMarkList)}
    else if(bookMarkName==''&& bookMarkUrl==''){
        boxInfo.classList.remove("d-none")
    }
    else{
        boxInfo.classList.remove("d-none")
    }
    
}

function closeBoxInfo(){
    boxInfo.classList.add("d-none")
}

function displayBookMark(list) {
    var cartoona=`` 
    for(var i=0;i<list.length;i++){
        cartoona+=` <tr>
                        <td >${i+1}</td>
                        <td >${list[i].name}</td>
                        <td ><button onclick="location.href = '${list[i].url}'"  class="btn btn-visit"><i class="fa-solid fa-eye pe-2"></i> Visit</button></td>
                        <td ><button onclick="deleteBookMark(${i})" class="btn btn-delete" > <i class="fa-solid fa-trash-can pe-2" ></i>delete </button></td>
                       
                    </tr>`
    }
    document.getElementById("tableBody").innerHTML= cartoona
    
}

function clear(){
    bookMarkName.value=null
    bookMarkUrl.value=null
}

function deleteBookMark(index){
    bookMarkList.splice(index,1);
    localStorage.setItem("bookMarkList",JSON.stringify(bookMarkList))
    displayBookMark(bookMarkList)
}

function validateBookMarkInput(element){
    var regex={
        bookmarkName:/^[a-z0-9]{5,8}$/,
        bookmarkUrl:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/

    }

    if(regex[element.id].test(element.value)==true){
        console.log("match");
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
    }
    else{
        console.log("not match");
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
    }
}



