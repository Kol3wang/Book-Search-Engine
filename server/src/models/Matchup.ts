import { Schema, model, type Document } from 'mongoose';
import type { TechnologyDocument } from './Technology';

export interface MatchupDocument extends Document {
  tech1: TechnologyDocument['_id'];
  tech2: TechnologyDocument['_id'];
  votesForTech1: number;
  votesForTech2: number;
}

const matchupSchema = new Schema<MatchupDocument>({
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

const Matchup = model<MatchupDocument>('Matchup', matchupSchema);

export default Matchup;