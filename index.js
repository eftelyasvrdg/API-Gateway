const express = require('express');
const setupProxies = require('./config/routes');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = 5000;

// Middleware
app.use(logger);

// Routes
setupProxies(app);

// Health check
app.get('/health', (req, res) => res.send({ status: 'API Gateway is running!' }));

// Error Handling
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
