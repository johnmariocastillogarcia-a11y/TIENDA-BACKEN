
import express from "express";
import 'dotenv/config';
import cors from 'cors'

export class Server {
    constructor(){
     this.app = express();
     this.port = process.env.PORT || 3001;
     this.middlewares();
     this.routes();
    }
//segundo metodo de mi clase Server
    routes(){
        this.app.get('/api', (req, res) => {
            res.json({
                msg: 'GET - Server'
            })
        });

        this.app.post('/api', (req, res) => {
            res.json({
                msg: 'POST - Server'
            })
        });

        this.app.put('/api', (req, res) => {
            res.json({
                msg: 'PUT - Server'
            })
        });

        this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'DELETE - Server'
            })
        });
    }

    // metodo 3 de mi clase server
    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
        
    }

 // Primer metodo de mi clase server
    listen (){
        this.app.listen(this.port,() => {
        console.log(`Servidor corriendo en el puerto: ${this.port}`);
        
        });
    
    }
}

export default Server;