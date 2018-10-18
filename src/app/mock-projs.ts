import { projectCard } from './projectCard';

export const PROJECTS: projectCard[] = 
[
    { 
        name: "Terrain Generation", 
        img: "assets\projects\terraingen.png", 
        desc:"A script that generates a voxel terrain in chunks, modelled after the Minecraft Chunk Generation Model."
    },

    { 
        name: "Reward Card Generator", 
        img: "assets\projects\rewardcards.png", 
        desc:"Randomized list concantenation that outputs a name and description from set parameters. Useful for magic item loot."
    },
    { 
        name: "Lockpick Mini Game", 
        img: "assets\projects\lockpick.png", 
        desc:"Unity proof of concept minigame involving an arcade adaptation of a real world lock mechanism. The goal is to unlock the chest."
    }
]