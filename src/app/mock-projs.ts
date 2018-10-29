import { projectCard } from './projectCard';

export const PROJECTS: projectCard[] = 
[
    { 
        name: "Ko-Fi Notification Interface",
        url: "KofiNotificationInterface",
        id: 1,
        type: "Webhook, Interface",
        img: "https://via.placeholder.com/150x150", 
        desc:"A webhook developed to send notifications from https://ko-fi.com/eylesis to a Discord channel.",
        code: `
        import traceback
        import json
        import util_functions
        from discord.ext import commands
        import discord
        import sys
        import re
        import os
        import asyncio
        from aiohttp import web
        import datetime
        
        botToken = os.environ.get('botToken')
        
        def run_app(app, *, host='0.0.0.0', port=80, shutdown_timeout=60.0, ssl_context=None, print=print, backlog=128):
            """Run an app"""
            if port is None:
                if not ssl_context:
                    port = 8080
                else:
                    port = 8443
        
            loop = app.loop
        
            handler = app.make_handler()
            server = loop.create_server(handler, host, port, ssl=ssl_context, backlog=backlog)
            srv, startup_res = loop.run_until_complete(asyncio.gather(server, app.startup(), loop=loop))
        
            scheme = 'https' if ssl_context else 'http'
            print("======== Running on {scheme}://{host}:{port}/ ========\n"
                    "(Press CTRL+C to quit)".format(
                scheme=scheme, host=host, port=port))
        
        async def tba_handler(request):
            data = await request.post()
            data = json.loads(data['data'])
            print("Accepted request:\n{}".format(data))
            print("{}".format(data))
            embed = discord.Embed(
                title="Ko-Fi Received!", 
                url="https://ko-fi.com/eylesis", 
                description="{} has sent \${}.".format(data['from_name'], data['amount']))
            embed.set_footer(text="Ko-Fi Notification")
            
            if data['message'] == "":
                data['message'] == "No Message."
            embed.add_field(name="__Message__", value=data['message'])
        
            channelids = {'470455397912674305'}
            for channelid in channelids:
                await bot.send_message(bot.get_channel(channelid), embed=embed)
            return web.Response()
                    
        
        bot = commands.Bot(command_prefix='*')
        loop = bot.loop
        app = web.Application(loop=loop)
        app.router.add_post('/endpoint', tba_handler)
        
        
        
        
        if __name__ == "__main__":
            run_app(app, host=os.environ.get('HOST'), port=os.environ.get('PORT'))
            bot.run(botToken)
        `
    },

    { 
        name: "Botfriend",
        url: "Botfriend", 
        id: 2,
        type: "Webhook, Discord Bot",
        img: "https://via.placeholder.com/250x250", 
        desc:"A fully functioning Discord Bot designed to serve the various needs of a DnD centered server. Base functionality includes extension loading and unloading to add or remove functionality to the bot.",
        code: `
        import traceback
        import json
        import util_functions
        from discord.ext import commands
        import redisInterface
        import sys
        import re
        import os
        import pygsheets
        
        botToken = os.environ.get('botToken')
        
        description = '''Botfriend Configuration: Conversational ^-^'''
        
        #startup_extensions = []
        startup_extensions = ["Cogs.help", "Cogs.Misc", "Cogs.Weather", "Cogs.DataBaseTools", "Cogs.Markov", "Cogs.GameTime"]
        # "Cogs.GameAlerts", "Cogs.CharacterComparator", "Cogs.Misc"
        bot = commands.Bot(command_prefix='*', description=description)
        bot.remove_command('help')
        bot.db = redisInterface.Database()
        bot.training_data = []
        bot.STATE_SIZE = 2
        
        with open('Settings/settings.json', encoding="utf8") as settings_data:
            Settings = json.load(settings_data)
        
        @bot.event
        async def on_message(message):
            await bot.process_commands(message)
        
        @bot.event
        async def on_ready():
            print('Logged in as {}:{}'.format(bot.user.name, bot.user.id))
            print('----------')
            if "prefix" in Settings:
                bot.command_prefix = commands.when_mentioned_or(Settings["prefix"])
        
        
        @bot.command(pass_context=True, no_pm=True, hidden=True)
        async def prefix(ctx, new_prefix: str):
            """Changes the prefix."""
            allowed = False
            for role in ctx.message.author.roles:
                if role.name == "Moderators":
                    allowed = True
            if allowed or ctx.message.author.id == '227168575469780992':
                    if new_prefix != " ":
                        Settings["prefix"] = new_prefix
                        bot.command_prefix = commands.when_mentioned_or(
                            Settings["prefix"])
                        util_functions.saveFile(Settings, 'Settings/settings.json')
                    return await bot.say('Why certainly, {0.author.mention}. I have changed the prefix to \`{1}\`.'.format(ctx.message, Settings["prefix"]))
            return await bot.say('Terribly sorry {0.author.mention}, but I do not recognize you as a person of authority here!'.format(ctx.message))
        
        
        @bot.command(pass_context=True, no_pm=True, hidden=True)
        async def load(ctx, extension_name: str):
            """Loads an extension."""
            allowed = False
            for role in ctx.message.author.roles:
                if role.name == "Moderator":
                    allowed = True
            if allowed or ctx.message.author.id == '227168575469780992':
                try:
                    bot.load_extension(extension_name)
                except (AttributeError, ImportError) as e:
                    await bot.say("Oh dear. It would appear engineering has sent up the following correspondance.\`\`\`py\n{}:\`\`\`".format(type(e).__name__, str(e)))
                    return
                return await bot.say("Excellent choice, {0.author.mention}! \`{1}\` has been loaded and is ready to be ultilized.".format(ctx.message, extension_name))
            return await bot.say('Terribly sorry {0.author.mention}, but I do not recognize you as a person of authority here!'.format(ctx.message))
        
        
        @bot.command(pass_context=True, no_pm=True, hidden=True)
        async def unload(ctx, extension_name: str):
            """Unloads an extension."""
            for role in ctx.message.author.roles:
                if role.name == "Moderator":
                    allowed = True
            if allowed or ctx.message.author.id == '227168575469780992':
                bot.unload_extension(extension_name)
                return await bot.say("Excellent choice, {0.author.mention}! \`{1}\` has been unloaded and stored for future use.".format(ctx.message, extension_name))
            return await bot.say('Terribly sorry {0.author.mention}, but I do not recognize you as a person of authority here!'.format(ctx.message))
        
        
        @bot.event
        async def on_command_error(error, ctx):
            traceback.print_exception(
                type(error), error, error.__traceback__, file=sys.stderr)
        
        if __name__ == "__main__":
            for extension in startup_extensions:
                try:
                    bot.load_extension(extension)
                except Exception as e:
                    exc = '{} : {}'. format(type(e).__name__, e)
                    print('Failed to load extension {}\n{}'.format(extension, exc))
            bot.run(botToken)`
    },
    { 
        name: "JSON DB", 
        url: "JSONDB",
        id: 3, 
        type: "Databasae Handler, Interface",
        img: "https://via.placeholder.com/250x250", 
        desc:"A class to provide functionality necessary to create, edit, and maintain a JSON Database.",
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
                os.makedirs(path)
        `
    },
    { 
        name: "Caaaaaat", 
        url: "Caaaaaat", 
        id: 4,
        type: "Image Stitching, Joke, Discord Command",
        img: "https://via.placeholder.com/250x250", 
        desc:"A coroutine that reads Discord messages and searches for strings containing 'c+(a^n)+t' where n is the number of a's present. Outputs the image of a cat with a variable length body correlating to the number of a's present.",
        code: `
        async def on_message(self, message):
        match = re.fullmatch('c(a+)t', message.content.lower())
        if match:
            segments = len(match.group(1))
            images = []
            images.append(Image.open('images/tail.jpg'))
            for x in range(0,segments+1):
                images.append(Image.open('images/body.jpg'))
            images.append(Image.open('images/head.jpg'))
            widths,heights = zip(*(i.size for i in images))

            total_widths = sum(widths)
            max_height = max(height)

            out_im = Image.new('RGB', (total_width, max_height))

            x_offset = 0
            for image in images:
                out_im.paste(image, (x_offset,0))
                x_offset += image.size[0]
            out_image.save('images/out.jpg')
            self.bot.send_file(message.channel, 'images/out.jpg')`
    }
]