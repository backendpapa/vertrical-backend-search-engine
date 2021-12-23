import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors'

const app = express();
const port = 3001;

interface information{
    title:string;
    photo:string;
    description:string;
    shortDesc:string
}

let informations:information[]=[
    {
        title:"Real Madrid squad list vs Athletic Club: Alaba one of 11 absentees!",
        photo:"https://phantom-marca.unidadeditorial.es/ae2ae6a38a5d5780baddd95a0db756ed/f/webp/assets/multimedia/imagenes/2021/12/21/16400938595187.jpg",
        description:"Real Madrid's final game of 2021 is set to be a challenge, with David Alaba missing out on a place in the squad to face Athletic Club at San Mames on Wednesday night.",
        shortDesc:"The Austrian had to miss training in order to get a PCR test"
    },
    {
        title:"Ancelotti: The issue with Isco is complicated",
        photo:"https://phantom-marca.unidadeditorial.es/9b942943876e52dad7cc0bf2ea8fb9f6/resize/660/f/webp/assets/multimedia/imagenes/2021/12/21/16400754617807.jpg",
        description:"Carlo Ancelotti has revealed that there is a tricky dynamic between himself and Isco, as he has had to make to with a peripheral role at Real Madrid this season.",
        shortDesc:"The Malaga-born midfielder has had a peripheral role this season"
    },
    {
        title:"Ancelotti changes the midfield: Time for Valverde and Camavinga",
        photo:"https://phantom-marca.unidadeditorial.es/4053cd63e91d3a0976ae31240cb809d5/resize/660/f/webp/assets/multimedia/imagenes/2021/12/20/16400269654608.jpg",
        description:"Carlo Ancelotti will need to utilise a new-look midfielder against Athletic Club, with Fede Valverde and Eduardo Camavinga in line to come into the Real Madrid starting XI.",
        shortDesc:"They will come in for the absent Modric and Casemiro"
    },
    {
        title:"Manchester United and Chelsea set to battle for Sevilla star Jules Kounde",
        photo:"https://phantom-marca.unidadeditorial.es/308c761530c899feff6e39c95282e4d2/crop/0x70/2044x1217/resize/660/f/webp/assets/multimedia/imagenes/2021/12/21/16400905999770.jpg",
        description:"Manchester United are ready to fight to sign Sevilla defender Jules Kounde, with fellow Premier League rivals Chelsea also reportedly interested.",
        shortDesc:"The defender's release clause is set at 68 million pounds"
    }
]

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/:search',(req,res)=>{
    let filteredArray:Object[]=[]
    filteredArray=informations.filter((item:any)=>(req.params.search==""||item.title.toLowerCase().includes(req.params.search.toLowerCase())))
  
    
    res.status(200).json(filteredArray)
})
app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});