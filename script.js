let input=document.querySelector('#new-task');
    let btn=document.querySelector('#btn');

    // For cut list item
    function cut(elem){
        if(elem.style.textDecoration ==='line-through'){
            elem.style.textDecoration='none'
           }
        else{
            elem.style.textDecoration='line-through'
           }
    }
 
    // For deleting item
    function cross(del){
      del.parentElement.remove()

      // Resetting localStorage
      let data=JSON.parse(localStorage.getItem('data'))
      for(let i=0; i<data.length; i++){
          if (data[i].Value === del.parentElement.textContent){
              data.splice(i,1)
              break;
          }
      }
      localStorage.setItem('data',JSON.stringify(data))
    }

    // Add button
    btn.addEventListener('click', e=>{

        let input=document.querySelector('#new-task').value;
        const list=document.querySelector('#incomplete-tasks');

        let items={
            Value:input,
        }
    
        // Storing input in localStorage
        if(localStorage.getItem('data') === null){
            let data=[];
            data.push(items)
            localStorage.setItem('data', JSON.stringify(data))
        }
        else{
            let data=JSON.parse(localStorage.getItem('data'))
            data.push(items)
            localStorage.setItem('data', JSON.stringify(data))
        }

        // For list
        list.innerHTML='';
                    let data=JSON.parse(localStorage.getItem('data'))
                    for(let i=0; i<data.length; i++){
                        list.innerHTML+='<div    class="list" style= " text-decoration:none; border:1px solid gray; margin-bottom:10px;" >'
                                     +'<li onclick="cut(this)" style="display:inline-block; position:absolute; padding:10px; padding-bottom:8px; cursor:pointer;">'+ data[i].Value+'</li>'
                                     +'<a onclick="cross(this)" style="position:relative; left:347px; top:0px; padding:10px; display:inline-block;">'+'<i class="fa-solid fa-xmark">'+'</i>'+'<a>'+'</div>';
                    }
        input='';
    })



    // btn.addEventListener('click', e=>{
    //     const list=document.querySelector('#list-item');
    //     list.innerHTML='';
    // // Clearing localStorage
    //     localStorage.clear()
    //})