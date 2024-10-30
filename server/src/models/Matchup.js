import { Schema, model } from 'mongoose';
const matchupSchema = new Schema({
    tech1: {
        type: Schema.Types.ObjectId,
        ref: 'Technology',
        required: true,
    },
    tech2: {
        type: Schema.Types.ObjectId,
        ref: 'Technology',
        required: true,
    },
    votesForTech1: {
        type: Number,
        default: 0,
    },
    votesForTech2: {
        type: Number,
        default: 0,
    },
});
const Matchup = model('Matchup', matchupSchema);
export default Matchup;
