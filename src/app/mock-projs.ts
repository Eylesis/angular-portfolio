import { projectCard } from './projectCard';

export const PROJECTS: projectCard[] = 
[
    { 
        name: "Terrain Generator",
        url: "TerrainGenerator",
        id: 1,
        type: "Procedural Generation",
        img: "https://via.placeholder.com/150x150", 
        desc:"A script that generates a voxel terrain in chunks, modelled after the Minecraft Chunk Generation Model.",
        code: `
        import os
        import urllib.parse
        import json
        import redis
        import discord
        from discord.ext import commands
        
        class Database:
           
            def __init__(self, path='data/'):
                self.path = path
                ensure_path_exists(path)
        
            def get_val(self, key, default=None):
                path = f"{self.path}{key}.json"
                if not os.path.exists(path):
                    return default
                else:
                    with open(path) as f:
                        data = json.load(f)
                    return data
        
            def set_val(self, key, value):
                path = f"{self.path}{key}.json"
                with open(path, 'w') as f:
                    json.dump(value, f)
        
            def ensure_path_exists(path):
                if not os.path.exists(path):
                    os.makedirs(path)`
    },

    { 
        name: "Reward Card Generator",
        url: "RewardCardGenerator", 
        id: 2,
        type: "Procedural Generation",
        img: "https://via.placeholder.com/250x250", 
        desc:"Randomized list concantenation that outputs a name and description from set parameters. Useful for magic item loot.",
        code: `
        import os
        import urllib.parse
        import json
        import redis
        import discord
        from discord.ext import commands
        
        class Database:
           
            def __init__(self, path='data/'):
                self.path = path
                ensure_path_exists(path)
        
            def get_val(self, key, default=None):
                path = f"{self.path}{key}.json"
                if not os.path.exists(path):
                    return default
                else:
                    with open(path) as f:
                        data = json.load(f)
                    return data
        
            def set_val(self, key, value):
                path = f"{self.path}{key}.json"
                with open(path, 'w') as f:
                    json.dump(value, f)
        
        def ensure_path_exists(path):
            if not os.path.exists(path):
                os.makedirs(path)`
    },
    { 
        name: "Lockpick Mini Game", 
        url: "LockpickMiniGame",
        id: 3, 
        type: "Prototype",
        img: "https://via.placeholder.com/250x250", 
        desc:"Unity proof of concept minigame involving an arcade adaptation of a real world lock mechanism. The goal is to unlock the chest.",
        code: `import os
        import urllib.parse
        import json
        import redis
        import discord
        from discord.ext import commands
        
        class Database:
           
            def __init__(self, path='data/'):
                self.path = path
                ensure_path_exists(path)
        
            def get_val(self, key, default=None):
                path = f"{self.path}{key}.json"
                if not os.path.exists(path):
                    return default
                else:
                    with open(path) as f:
                        data = json.load(f)
                    return data
        
            def set_val(self, key, value):
                path = f"{self.path}{key}.json"
                with open(path, 'w') as f:
                    json.dump(value, f)
        
        def ensure_path_exists(path):
            if not os.path.exists(path):
                os.makedirs(path)`
    },
    { 
        name: "Lockpick Mini Game", 
        url: "LockpickMiniGame", 
        id: 4,
        type: "Prototype",
        img: "https://via.placeholder.com/250x250", 
        desc:"Unity proof of concept minigame involving an arcade adaptation of a real world lock mechanism. The goal is to unlock the chest.",
        code: `import os
        import urllib.parse
        import json
        import redis
        import discord
        from discord.ext import commands
        
        class Database:
           
            def __init__(self, path='data/'):
                self.path = path
                ensure_path_exists(path)
        
            def get_val(self, key, default=None):
                path = f"{self.path}{key}.json"
                if not os.path.exists(path):
                    return default
                else:
                    with open(path) as f:
                        data = json.load(f)
                    return data
        
            def set_val(self, key, value):
                path = f"{self.path}{key}.json"
                with open(path, 'w') as f:
                    json.dump(value, f)
        
        def ensure_path_exists(path):
            if not os.path.exists(path):
                os.makedirs(path)`
    }
]