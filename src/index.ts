import express, { Request, Response } from 'express';

const app = express(); // Crea una instancia de la aplicación Express
const port = 3000; // Define el puerto

// Ruta con parámetros opcionales de consulta
app.get('/:number', (req: Request, res: Response) => {
  console.log(req, 'respuesta ingeniosa');

  const name = req.query.name as string || '¿... Sin nombre?';
  const lastname = req.query.lastname as string || '... ¿No tienes apellido?';

  res.send(`¡Hola, ${name}! \nAsí que tu apellido es ${lastname}`);
  console.log(name, 'Es el nombre');
});

// Rutas adicionales
app.get('/hello', (_req: Request, res: Response) => {
  res.send('¡Hola, Jesus!');
});

app.get('/goodbye', (_req: Request, res: Response) => {
  res.send('¡Hey, ¿cómo les va?!');
});

// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
