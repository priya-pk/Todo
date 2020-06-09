function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var output=""
            for(var i=0;i<response.length;i++){
                let stmt = response[i].completed === true?`<li class="disabled">`: `<li>`;
                output += stmt + `<input type='checkbox' class='checkbox' ${response[i].completed?'checked':''}> ${response[i].title} </li> <hr>`;
            }
            document.getElementById("list").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
ajax();


    let count = 0;
    $('#list').on('click','.checkbox',function(e){
        if($(this).prop('checked')===true){
            count++;
            check();
        }
        else{
            count--;
        }
    })
function check(){
    var promise = new Promise(function(resolve,reject){
        if(count===5){
            resolve("Congrats. 5 Tasks have been Successfully Completed");
        }
    })
    promise.then(function(s){
        alert(s);
    })
}   


