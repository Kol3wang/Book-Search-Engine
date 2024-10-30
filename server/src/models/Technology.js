import { Schema, model } from 'mongoose';
const technologySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
});
const Technology = model('Technology', technologySchema);
export default Technology;
