"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/:number', (req, res) => {
    console.log(req, 'respuesta ingeniosa');
    const name = req.query.name || '¿... Sin nombre?';
    const lastname = req.query.lastname || '... ¿No tienes apellido?';
    res.send(`¡Hola, ${name}! \nAsí que tu apellido es ${lastname}`);
    console.log(name, 'Es el nombre');
});
app.get('/hello', (_req, res) => {
    res.send('¡Hola, Jesus!');
});
app.get('/goodbye', (_req, res) => {
    res.send('¡Hey, ¿cómo les va?!');
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map