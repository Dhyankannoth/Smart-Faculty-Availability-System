import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Global state for sensor status
// Values can be: 'AVAILABLE', 'BUSY', 'NOT_PRESENT'
let currentStatus = 'NOT_PRESENT';

// Connected SSE clients
let clients = [];

// Endpoint for the ESP32 to POST updates
app.post('/status', (req, res) => {
  const { status } = req.body;
  
  if (status && status !== currentStatus) {
    currentStatus = status;
    console.log(`[Sensor] Status changed to: ${status}`);
    
    // Broadcast the change to all connected SSE clients
    clients.forEach(client => {
      client.res.write(`data: ${JSON.stringify({ status: currentStatus })}\n\n`);
    });
  }
  
  res.sendStatus(200);
});

// Endpoint for frontend to subscribe to real-time events (SSE)
app.get('/stream', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  // Send initial state immediately
  res.write(`data: ${JSON.stringify({ status: currentStatus })}\n\n`);

  // Add this client to the broadcast list
  const clientId = Date.now();
  const newClient = { id: clientId, res };
  clients.push(newClient);

  console.log(`[Stream] Client connected: ${clientId}`);

  // When client closes connection we update the list of clients
  req.on('close', () => {
    console.log(`[Stream] Client disconnected: ${clientId}`);
    clients = clients.filter(client => client.id !== clientId);
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`EduStatus Backend listening at http://0.0.0.0:${PORT}`);
  console.log(`ESP32 should send POST requests to http://<YOUR_IP>:${PORT}/status`);
});
