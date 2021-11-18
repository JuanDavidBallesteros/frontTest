class UserView{

    

    //State
    constructor(user){
        this.user = user;
        this.block = null;
        //Object.seal(this);
    }


    //Metodos
    render = (container)=>{
        let div = document.createElement("div");
        div.classList.add("card");
        div.classList.add("w-75");
        div.classList.add("card-space");

        let html = `
            
                <div class="card-body">
                    <h5 class="card-title">${this.user.name}</h5>
                    <p class="card-text">Su edad es: ${this.user.age}</p>
                    <a href="#" id="btn${this.user.id}" class="btn btn-danger">Bloquear</a>
                </div>
            
        `
        div.innerHTML = html;
        container.appendChild(div);

        let btn = document.getElementById("btn"+this.user.id)
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            alert("Desea bloquear a "+this.user.name)
        })

        //let root = div.firstChild;

    }

    



    /*
    block = ()=>{
        alert("Bloquear a "+this.user.name);
    }
    */



}