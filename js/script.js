

const container=document.createElement("div")
container.className="dog";

const row=document.createElement("div");
row.className="row";

container.append(row)

const res=fetch("https://dog.ceo/api/breed/hound/images? limit=30");
res.then((data)=>data.json())
.then((data1)=>dogs(data1))
.catch((error)=>console.log(error));

function dogs(data1){


    for(let i=0; i<data1.message.length; i++){
        row.innerHTML +=`
        <div class="col-lg-3 col-sm-12">
        
        <div class="design"><img src="${data1.message[i]}" alt="..."> <br>
        <button type="button" class="btn btn-outline-success">click</button>
        </div>
        <div class="card-body">
       
    </div>
</div>      `


    }
    document.body.append(container)
}
