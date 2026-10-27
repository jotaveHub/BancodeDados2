import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/teste";

try {
  await mongoose.connect(mongoUri);
  console.log("Conexão com o MongoDB estabelecida com sucesso!");
} catch (error) {
  console.error("Erro ao conectar ao MongoDB:", error);
}

export default mongoose;

