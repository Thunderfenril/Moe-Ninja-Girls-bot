module.exports = [ //Array for the help command

    /*[Name of the command , Small description, ["\u200b", "\u200b"], [Format, "\u200b"], ["Arguments:", Explanation of the argument], ["Explanation:", Full explanation], ["Example of use:", Example]]*/ //Format of the array
  
    ["The birthday command", "Allow to get know info on the birthday", ["\u200b", "\u200b"], ["birthday [name]", "\u200B"], ["Argument:", "The argument isn't necessary, but you can put the name of one of the girl in it"], ["Explanation:", "Create a small sentence, if no argument is put, will says when is the next birthday, and if it's the actual day, will make a small special sentence; in case a name is given, will says how much days are left before we reach the birthday."], ["Example:", "birthday Enju"]],

    ["The changelog command", "The command to get the news on the bot", ["\u200b", "\u200b"], ["changelog", "\u200b"], ["Arguments:", "There is no argument needed"], ["Explanation:", "This will create an embed with the news on the bot and the main things planned for the bot"], ["Example:", "changelog"]],

    ["The congrats command", "Allow you to congratulate someone", ["\u200b", "\u200b"], ["congrats @someone", "\u200b"], ["Argument:", "You need to mention someone"], ["Explanation:", "By mentionning someone, it will create a random number, if the number is even, will send the message 1, else the message 2."], ["Example:", "congrats @someone"]],

    ["The data command", "Allow you to get data on a ranking based on a category", ["\u200b", "\u200b"], ["data [category]", "\u200b"], ["Argument:", "You can choose one in the list, or just let it be blank"], ["Explanation:", "Will create an embed.\nIf no  category is given, will create an embed, and give the top 3 in each category.\nIf a category is given, will give the ranking of all the girl based on this category."], ["Example:", "data height"]],

    ["The fight master command", "If you want to know if you can beat the stage", ["\u200b", "\u200b"], ["fm stage weakness fire ice thunder level shuriken", "\u200b"], ["Arguments:", "You will have to choose which stage in a list, then the weakness in a list, then you will have to input the value of each other category as a number"], ["Explanation:", "By filling the arguments, it will look the HP of the stage, then will calculate your power with and without juice.\nIt will tell you if you can beat the stage, and in how many rounds."], ["Example:", "fm 1 thunder 0 0 804 90 500"]],

    ["The gacha command", "Let's hear the holy prayer", ["\u200b", "\u200b"], ["gacha", "\u200b"], ["Argument:", "There is no argument"], ["Explanation:", "Send to us the holy prayer"], ["Example:", "gacha"]],

    ["The github command", "A direct link to the project", ["\u200b", "\u200b"], ["github", "\u200b"], ["Argument:", "There is no argument"], ["Explanation:", "Send a link to the github of the project"], ["Example:", "github"]],

    ["The hug command", "Nobody will ever be able to do it", ["\u200b", "\u200b"], ["hug", "\u200b"], ["Argument:", "There is no argument"], ["Explanation:", "Send a text to the weirdo trying to hug the bot"], ["Example:", "hug"]],

    ["The ninjutsu command", "Try to use a ninjutsu on someone", ["\u200b", "\u200b"], ["ninjutsu @someone", "\u200b"], ["Argument:", "You need to mention someone"], ["Explanation:", "The bot will create 2 random numbers. The first one will determine if it was a success or a fail.\nThe second one will detrermine which jutstu will be used."], ["Example:", "ninjutsu @Bluedragon"]],

    ["The pat command", "Headpat someone", ["\u200b", "\u200b"], ["pat @someone", "\u200b"], ["Argument:", "You need to mention someone"], ["Explanation:", "The bot will pat the one you mentioned"], ["Example:", "pat @Bluedragon"]],

    ["The profile command", "To get some general info on a character", ["\u200b", "\u200b"], ["profile name", "\u200b"], ["Argument:", "You need to put a name"], ["Explanation:", "The bot will look if the name you gave is correct or no.\nIf it is, then it will create an embed, with a picture of the character, and some info based on the RPG and the official one."], ["Example:", "profile Enju"]],

    ["The ranking command", "To know how is your girl compared to the others", ["\u200b", "\u200b"], ["ranking name", "\u200b"], ["Argument:", "You need to write the name of a girl"], ["Explanation:", "The bot will compare all the girl.\nThen it will look how the girl is compared to the others.\nTo give the result, the bot will create an embed."], ["Example:", "ranking Akari"]],

    ["The revive command", "Heroes never dies!", ["\u200b", "\u200b"], ["revive @someone", "\u200b"], ["Argument:", "You need to mention someone"], ["Explanation:", "The bot will look if there is someone dead, then it will look if you pinged yourself.\nIf you did, it stop, else it will revive the one you mentioned."], ["Example:", "revive @Bluedragon"]],

    ["The roll command", "Imagine thunderfenril not creating a true gacha command.", ["\u200b", "\u200b"], ["roll category number", "\u200b"], ["Argument:", "You need to mention to select which category you wish to roll, and how much"], ["Explanation:", "The bot will select randomly an item from the category you chose.\nIn case the number is 10, there will be a pity system, where if you don't have an item of rarity 3 or 4, one will be forced for the tenth roll.\nThen the item are sorted randomly."], ["Example:", "roll body 10"]],

    ["The serverinfo command", "Just give a small info on the server", ["\u200b", "\u200b"], ["serverinfo", "\u200b"], ["Argument:", "There is no argument"], ["Explanation:", "Will just says the name of the server and the number of people in it."], ["Example:", "serverinfo"]],

    ["The versus command", "Ready ? Fight", ["\u200b", "\u200b"], ["versus firstFighter secondFighter", "\u200b"], ["Argument:", "You need to write the name of 2 girls."], ["Explanation:", "The bot will compare the 2 fighters trhough their ratings.\nThe winner burst the loser, and show it through an embed with the result of each rounds."], ["Example:", "versus Lily Tengge"]],

    ["The walkthrough command", "I really hate to write this word", ["\u200b", "\u200b"], ["walkthrough [season]", "\u200b"], ["Argument:", "You can input a number to select which season you which to have the walkthrough"], ["Explanation:", "The bot will look if you gave a number or not.\nIf you did and it found it, then it will dm you the link to the guide.\nElse it will create some embed with all the links."], ["Example:", "walktrhough 3"]],

    ["The whip command", "Good way to make someone work", ["\u200b", "\u200b"], ["whip [@someone||text]", "\u200b"], ["Argument:", "You can either mention someone, put a text or just put nothing"], ["Explanation:", "The bot will whip the one you mentioned, what you wrote or everything.\nBe careful to not mention the bot or someone close of the bot."], ["Example:", "whip @Bluedragon"]],

    ["The zap command", "Good way to wake up someone", ["\u200b", "\u200b"], ["zap [@someone||text]", "\u200b"], ["Argument:", "You can either mention someone, put a text or just put nothing"], ["Explanation:", "The bot will zap the one you mentioned, what you wrote or everything.\nBe careful to not mention the bot or someone close of the bot."], ["Example:", "zap @Bluedragon"]],

    ["General info", "\u200B", ["Community category:", "congrats: Aloow to congratulate someone.\nninjutsu: Try to use jutsu on someone.\npat: pat someone.\nrevive: Ressurect someone.\nwhip: Whip someone.\nzap: zap somone."], ["MNG commands:", "birthday: To know a birthday date.\ndata: For a ranking.\nfm: To know if you can beat a stage.\nprofile: To get info on a girl.\nranking: To know how your girl compare to the others.\nversus: To compare 2 girls.\walkthrough: To get a guide."], ["Miscelaneous commands:", "gacha: Holy prayer.\nhug: Pervert.\nroll: let the salt comes."], ["Bot and server command:", "Help: bruh.\nchangelog: latest info on the bot.\ngithub: Link to the project.\nserverinfo: small info on the server."]]
  ]