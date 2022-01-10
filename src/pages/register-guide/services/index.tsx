import { CardGuidesResponse } from "@services/guides";
import api from "@services/api";



export default async function SaveFunction(title:string, content:string){

    try{
        const guide:CardGuidesResponse = {
            title: title,
            content: content
        }
        api.post('register', guide);

    }catch(e){

    }









}