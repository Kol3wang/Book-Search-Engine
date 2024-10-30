import { Schema, model, type Document } from 'mongoose';

export interface TechnologyDocument extends Document {
  name: string;
  description?: string;
}

const technologySchema = new Schema<TechnologyDocument>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
});

const Technology = model<TechnologyDocument>('Technology', technologySchema);

export default Technology;