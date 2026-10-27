import mongoose from "../database/mongoose.js";
import { randomUUID } from "crypto";

const poiSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => randomUUID(),
      required: true
    },
    nome: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
    },
    tipo: {
      type: String,
      enum: ["Educação", "Lazer", "Saúde", "Trabalho"],
      required: true
    },
    localizacao: {
      type: {
        type: String,
        enum: ["Point"],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      },
    },
  });

  const Poi = mongoose.model("Poi", poiSchema);
  export default Poi;