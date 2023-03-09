
export default{
    name : document.querySelector("#myFormulario"),
    data: [],
    Api: async function(){
        let peticion = await fetch("./config.json");
        let json = await peticion.json();
        this.data = json;
    },
    Traditional(p1){
        this.data.Taditional.forEach((val,id)=>{
            if(p1==id){
                console.log(val[0], val[1]);
            }
        })
    },
    PointRange(p1){
        this.data["14-Point-Range"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0], val[1]);
            }
        })
    },
    Letter(p1){
        this.data.Letter.forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    SBGRating(p1){
        this.data["SBG-Rating"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    ProficiencyLevelWithStandard(p1){
        this.data["Proficiency-Level-With-Standard"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    Solucion(){
        this.name.addEventListener("submit", (e)=>{
            let numero= Object.fromEntries(new FormData(e.target)).Nota
            e.preventDefault(); 
            this.data.Taditional.forEach((val,id)=>{
                if(numero >= val[0] && numero<= val[1]){
                    console.log(val[0], val[1]);
                    this.Traditional(id);
                    this.PointRange(id);
                    this.Letter(id);
                    this.SBGRating(id);
                    this.ProficiencyLevelWithStandard(id);
                }
            })
            console.log (numero);
        } )
    }
}