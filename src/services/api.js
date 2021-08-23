import axios from 'axios';

 //Base url = https://sujeitoprogramador.com/
 
 //r-api/?api=filmes/ (TODOS OS FILMES)

 //r-api/?api=filmes/123 (filme com id 123)

 //Base urlhttps://sujeitoprogramador.com/r-api/?api=filmes/

 const api = axios.create({
     baseURL: 'https://sujeitoprogramador.com'
 });

 export default api;