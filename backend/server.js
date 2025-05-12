require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://vanijor:P3tLqMcMvoriVfxq@equipamentos15kv.du9wxlm.mongodb.net/?retryWrites=true&w=majority&appName=equipamentos15kv';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes placeholder
app.get('/', (req, res) => {
  res.send('React Equipamentos Backend is running');
});

// Import routes
const consultaRoutes = require('./routes/consulta');
const inspecaoRoutes = require('./routes/inspecao');
const comunicacaoRoutes = require('./routes/comunicacao');

app.use('/api/consulta', consultaRoutes);
app.use('/api/inspecao', inspecaoRoutes);
app.use('/api/comunicacao', comunicacaoRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
