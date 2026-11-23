const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI não está definida no arquivo .env');
    }

    await mongoose.connect(mongoUri);
    console.log('MongoDB conectado');
    } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
