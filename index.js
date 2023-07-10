console.log("a");
import express from "express";
import cors from 'cors';
var port = process.env.PORT || 12345;
var app = express();
app.use(express.json());
app.use(cors());
import {handler} from "./frontend/build/handler.js"
console.log("b");
import {loadBackend_MASv3} from "./backend/index_MASv3.js";
import {loadBackend_MAS} from "./backend/index_MAS.js";
import {loadBackend_MASv2} from "./backend/index_MASv2.js";
import {loadBackend_LMPv2} from "./backend/index_LMPv2.js";
console.log("c");
loadBackend_MAS(app);
loadBackend_MASv2(app);
loadBackend_MASv3(app);
loadBackend_LMPv2(app);
console.log("d");

app.use(handler);
app.listen(port,() =>{
  console.log("e");console.log(`Servidor corriendo en el puerto: ${port}`);
});
console.log("f");
