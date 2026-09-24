const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'healthy', version: '2.1.0' }));
app.use('/api/v2/events', require('./routes/events'));
app.use('/api/v2/dashboard', require('./routes/dashboard'));

app.listen(PORT, () => console.log(`Nexus Platform API running on port ${PORT}`));
module.exports = app;
