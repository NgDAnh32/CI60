 class meme {
    id ;
    name ; 
    image;
    dateModified ;
    constructor (id,name,image,dateModified){
        this.id = id ;
        this.name = name;
        this.image = image;
        this.dateModified = dateModified;
    }
    show(){
        let meme=document.getElementById("meme")
        meme.innerHTML = meme.innerHTML +
            `<div >
            <div >
            ID : ${this.id}
        </div>
        <div >
            Name : ${this.name}
        </div>
        <div >
            Image : <img src="${this.image}">
        </div>
        <div >
            Date : ${this.dateModified}
        </div>
        <hr>        
        </div>`
    }
    update(data){
        this.name = data.name;
        this.id = data.id;
        this.image = data.image;
        this.dataModified = data.dataModified;
    }
}
class memeCollection extends meme{
    owner;
    memes;
    constructor(id,name,owner,memes){
        super(id,name);
        this.owner = owner;
        this.memes = memes;
    }
    add(data){
        if(data instanceof meme){
            this.memes.push(data);
        }
    }
    delete(x){
        let ViTri = -1;
       for(let i = 0; i < this.memes.length;i++){
           if(this.memes[i].id === x){
               ViTri = i;
               break;
           }
       }
       if(ViTri == - 1) console.log("kkhong có id đó");
       else{
           this.memes.splice(ViTri,1);
       }

    }
    update(x,data){
        if(data instanceof meme){
            let ViTri = -1;
            for(let i = 0; i < this.memes.length;i++){
                if(this.memes[i].id === x){
                    ViTri = i;
                    break;
            }
            this.memes.splice(ViTri,1,data);
       }
        }
        else {
            console.log("data khong tương thích");
        }
    }
    show(){
        let meme=document.getElementById("meme")
        meme.innerHTML = meme.innerHTML +
            `<div >
            <div >
            ID : ${this.id}
        </div>
        <div >
            Name : ${this.name}
        </div>
        <div>
            Owner : ${this.owner}
        </div>
        <div >
        List Meme :ID:${this.memes[0].id}, Tên: ${this.memes[0].name},Image:<img src="${this.memes[0].image}">,DateModified:${this.memes[0].dateModified}
        <br>
        List Meme :ID:${this.memes[1].id}, Tên: ${this.memes[1].name},Image:<img src="${this.memes[1].image}">,DateModified:${this.memes[1].dateModified}
        </div>
        
        <hr>        
        </div>`
    }
};
let meme1 = new meme(1, "meme", "./image/meme-hot-1.jpg", "13/04/2021") 
let meme2 = new meme(2,"meme2", "https://i.pinimg.com/736x/71/d3/03/71d3032a9522dbc015fb25cf6cb4b60d.jpg", "13/04/2021")
meme1.show();
meme2.show();