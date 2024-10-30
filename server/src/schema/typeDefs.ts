import gql from 'graphql-tag';

const typeDefs = gql`
  type Technology {
    _id: ID!
    name: String!
    description: String
  }

  type Matchup {
    _id: ID!
    tech1: Technology!
    tech2: Technology!
    votesForTech1: Int
    votesForTech2: Int
  }

  type Query {
    technologies: [Technology]
    matchups: [Matchup]
    matchup(id: ID!): Matchup
  }

  type Mutation {
    createMatchup(tech1: ID!, tech2: ID!): Matchup
    voteForTech(matchupId: ID!, techNum: Int!): Matchup
  }
`;

export default typeDefs;