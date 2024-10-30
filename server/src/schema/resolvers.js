import Technology from '../models/Technology';
import Matchup from '../models/Matchup';
const resolvers = {
    Query: {
        technologies: async () => {
            return await Technology.find({});
        },
        matchups: async () => {
            return await Matchup.find({}).populate('tech1 tech2');
        },
        matchup: async (_, { id }) => {
            return await Matchup.findById(id).populate('tech1 tech2');
        },
    },
    Mutation: {
        createMatchup: async (_, { tech1, tech2 }) => {
            const newMatchup = await Matchup.create({ tech1, tech2 });
            return newMatchup.populate('tech1 tech2');
        },
        voteForTech: async (_, { matchupId, techNum }) => {
            const matchup = await Matchup.findById(matchupId);
            if (!matchup)
                throw new Error('Matchup not found');
            if (techNum === 1) {
                matchup.votesForTech1 += 1;
            }
            else if (techNum === 2) {
                matchup.votesForTech2 += 1;
            }
            else {
                throw new Error('Invalid techNum, should be 1 or 2');
            }
            await matchup.save();
            return matchup.populate('tech1 tech2');
        },
    },
};
export default resolvers;
