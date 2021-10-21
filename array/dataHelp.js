module.exports = [ //Array for the help command

    /*[ , , ["\u200b", "\u200b"], [, "\u200b"], ["Arguments:", ], ["Explanation:", ], ["Example of use:", ]]*/ //Format of the array
  
    ["The changelog command.", "Let the know the latest update on the bot", ["\u200B", "\u200B"], ["changelog", "\u200B"], ["Arguments", "No argument are needed"], ["Explanation", "Send an embed to inform the user from the latest update on the bot"], ["Example of use", "changelog"]],
  
    ["The gacha command.", "Let us hear the holy prayer", ["\u200B", "\u200B"], ["gacha", "\u200B"], ["Arguments", "No argument are needed"], ["Explanation:", "After the command is called, the bot will send the holy prayer of the gacha genre."], ["Example of use:", "gacha"]],
  
    ["The hug command.", "No one will be able to hug them, not even the author of the bot.", ["\u200B", "\u200B"], ["hug", "\u200b"], ["Arguments:", "No arguments are needed"], ["Explanation:", "After you launch the command, you will see the bot reacting to your tentative of huging her."], ["Example of use:", "hug"]],
  
    ["The congrats command" , "Let's congratulate someone from it's pull", ["\u200B", "\u200B" ], ["congrats @someone", "\u200B"], ["Arguments:", "You need to mention someone"], ["Explanation:", "The bot will send a message to congratulate the person you mentionned, and a few second later, the message will be edited"], ["Example of use:", "congrats @thunderfenril#4235"]],
  
    ["The roll command" , "The gacha simulator for the RPG", ["\u200b", "\u200b"], ["roll toolsbody 110", "\u200b"], ["Arguments:", "Two arguments are needed. The first one is the category of the pull, while the second one determine if you do a single or multi pull."], ["Explanation:", "After you choose launched the command with the correct arguments, the bot will generate a random number and look for the corresponding rarity of the category you chose.\nAfter it will create a new random number, to look for the item.\nFor the multipull, it will do it 10 times instead of once."], ["Example of use:", "roll tools 10"]],
  
    ["The profile command" , "It will show a small embed with the description  of the girl.", ["\u200b", "\u200b"], ["profile nameOfTheGirl", "\u200b"], ["Arguments:", "One argument is needed, the name of the girl"], ["Explanation:", "The bot will recognize the name, if right spelled, and will generate an embed that will give what the girl like, their Seyuu, hobby, etc."], ["Example of use:", "profile enju"]],
  
    ["The data command.", "Give some information on the height and 3 sizes.", ["\u200b", "\u200b"], ["data [height bust waist hips]", "\u200b"], ["Arguments:", "It needs 1 or 0 argument."], ["Explanation:","If an argument is given, it will return an embed, with the ranking of the girls based on the chosen category.\nIf no argument is given, it will give a general ranking of each category, with the 3 top of each category."], ["Example of use:", "data height"]],
  
    ["The ranking command" ,"Give some information about a girl on their rank in several category." , ["\u200b", "\u200b"], ["ranking nameOfAGirl", "\u200b"], ["Arguments:", "One argument is needed"], ["Explanation:", "After the command is launched, the bot will generate an embed which will give information on the ranking of the girl based on common trait with the other, and with personal characteristics."], ["Example of use:", "ranking Ran"]],
  
    ["The suggestion/report command" ,"If you want to report something or doing an suggestion anonymously." , ["\u200b", "\u200b"], ["dm testHere", "\u200b"], ["Arguments:", "1 is needed"], ["Explanation:", "In order to do this, you have to go in DM with the bot and do the command, before sending the command, write the text.\nWhen you send the message, the bot will send the message to the bot author, without saying who sent the message."], ["Example of use:", "dm Someone in mng-general broke the rule [insert random rule number.]"]],
  
    ["The whip/zap command" , "Do you want to whip or zap someone ?", ["\u200b", "\u200b"], ["whip @mention someone or zap @mention someone", "\u200b"], ["Arguments:", "You have to mention someone."], ["Explanation:", "This very old command is back. You will be able to whip or zap someone again, there will be of course a special message if you try to whip or zap yourself."], ["Example of use:", "whip @Bluedragon#7657"]],
  
    ["The birthday command" ,"To know who has it's birthday next" , ["\u200b", "\u200b"], ["birthday", "\u200b"], ["Arguments:", "No argument is needed"], ["Explanation:", "It will say which girl in the mng-verse will have it's birthday next, and in how many days."], ["Example of use:", "birthday"]],
  
    ["The ninjutsu command" ,"The command to try to look like a ninja" , ["\u200b", "\u200b"], ["ninjutsu target", "\u200b"], ["Arguments:", "One argument is needed, eitehr a mention or a text."], ["Explanation:", "You will use a random ninjutsu against the target, but because you don't know how to use it, you only have a 50% to hit the target, else you will hit yourself."], ["Example of use:", "ninjutsu @Bluedragon#7657"]],
  
    ["The fight master command." , "aka the annoying one to make.", ["\u200b", "\u200b"], ["fm", "\u200b"], ["Arguments:", "None"], ["Explanation:", "The bot will ask you a series of question, to which you will have to answer. Depending of your result, the bot will tell you if you can beat the stage and in how many rounds."], ["Example of use:", "fm"]],
  
    ["The versus command" ,"To compare 2 characters" , ["\u200b", "\u200b"], ["versus name1 name 2", "\u200b"], ["Arguments:", "Two different names are needed, some characters can't be used cause we don't have all the data *curse SOLMARE for being slow with it*"], ["Explanation:", "It will compare the 2 characters based on their Height, Bust, Waist, Hips, Strength, Shinobi/Spiritual power, Intelligence and Agility.\nIf one has a bigger number, then she get +1 to her score, in case of tie, nobody get a point."], ["Example of use:", "versus Enju Venus"]],

    ["github" , "The command to direct to the github of the bot", ["\u200b", "\u200b"], ["github", "\u200b"], ["Arguments:", ], ["Explanation:", ], ["Example of use:", ]],
  
    ["You called for some help ?" ,"Here are the command." , ["__Command about MNG:__", "data: Give info and ranking on the different sizes.\nranking: Give the ranking of the girl.\nprofile: Give you some basic info on the girl.\nfm: The command about to know if you can beat  a certain stage.\nversus: To compare 2 characters.\nbirthday: Who is the next one to get her birthday ?"], ["__Fun command__", "gacha: Let us hear the holy prayer.\nhug: Good luck.\ncongrats ``mention``: Congratulation to ``mention`` for his/her luck.\nroll: Let the salt come.\nninjutsu: You use a random ninjutsu on someone.\nrevive: To ressurect someone.\nwhip: To whip someone.\nzap: To zap someone.\n"], ["__Info__", "changelog: To be up to date with the change.\nhelp [command name]: Do I have to explain ?\ndm: To send an anonymous message to the author of the bot **DM only**\nThis is currently the version 4.3.0 of the bot."], ["__Suggestion__", "In order to make a suggestion, request, fix, send your message under this format:\n@thunderfenril#4235\n[ ]....\n\nHere is an example:\n```@thunderfenril#4235\n[request] Let me hug the bot.```\n*for info, I will never fulfill this request*\nYou can also use dm command to do one."]]
  ]
  //Redo: gacha, hug, congrats, roll, profile, data, ranking, dm, whip, zap, birthday, ninjutsu, fm, versus

  //To do: github, pat, walkthrough, revive, serverinfo

  //No need: dead, test, sleep

  //Done: changelog