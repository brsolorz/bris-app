import axios from 'axios';

export const getYodaTranslation = async (text: string) => axios({
    "method":"POST",
    "url":"https://yodish.p.rapidapi.com/yoda.json",
    "headers":{
    "content-type":"application/x-www-form-urlencoded",
    "x-rapidapi-host":"yodish.p.rapidapi.com",
    "x-rapidapi-key":"11aed80f3emsh5c32f2fa85b2b74p1fdda5jsnce0b10007b7d"
    },"params":{
    "text": text
    },"data":{
    
    }
    });