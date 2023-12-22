import axios from 'axios';

const { apiKey } = require("./demodata");

const client = axios.create({
    headers:{
        "Authorization " : "Bearer "+ apiKey,
        "Content-Type": "application/json"
    }
})

const chagptendpoint = "https://api.openai.com/v1/chat/completions";
const dallEendpoint = "https://api.openai.com/v1/images/generations";


export const apicall = async(prompt , messages ) => {
    try{

        const res = await client.post(chagptendpoint , {
            model: 'gpt-3.5-turbo',
            messages: [
            {
             role: 'user',
             content: `Does this message want to generate an AI picture, image, art or anything similar? ${prompt} . Simply answer with a yes or no.`
            },
        ]
        })

        console.log('data : ' , res.data);
     
    }catch(err){
        console.log("error : " ,  err)
        


        return Promise.resolve({success:false , msg: err.message})
    }
}