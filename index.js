console.log("A");console.log("a - en index.js lo primero que sale");
import express from "express";
import cors from 'cors';
var port = process.env.PORT || 12345;
var app = express();
app.use(express.json());
app.use(cors());
console.log("z - justo despues de express y cors")
import {handler} from "./frontend/build/handler.js"
console.log("b index.js antes de import loadbackend ");
import {loadBackend_MASv3} from "./backend/index_MASv3.js";
import {loadBackend_MAS} from "./backend/index_MAS.js";
import {loadBackend_MASv2} from "./backend/index_MASv2.js";
import {loadBackend_LMPv2} from "./backend/index_LMPv2.js";
import {loadBackend_LMPv3} from "./backend/index_LMPv3.js";
console.log("c index.js antes de loadbackend app");
loadBackend_MAS(app);
loadBackend_MASv2(app);
loadBackend_MASv3(app);
loadBackend_LMPv2(app);
loadBackend_LMPv3(app);
console.log("d despues de loadbackend all apps");
console.log("B");
app.use(handler);
app.listen(port,() =>{
  console.log("C");console.log("e - index.js dentro del listen port antes de console.log servidor corriendo");console.log(`Servidor corriendo en el puerto: ${port}`);
});
console.log("D");console.log("f - final code index.js");