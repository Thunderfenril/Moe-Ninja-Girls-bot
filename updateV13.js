const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const config = require("./config.json");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const botOwnerID=221352736657113088;

const { prefix } = config;

let deadList=[]

let vTuberSimp =[
  "Tokino Sora", "Shirakami Fubuki", "Oozora Subaru", "Shirogane Noel", "Kiryu Coco", "Tsunokami Watame", "Shishiro Botan", "Moona Hoshinova", "Anya Melfissa", "Watson Emilia", "Artia"
];

const data = [ //Array mainly used for the profile command
  //Format: Name, Family name, birthday (own tab [day, month]), Zodiac Sign, height, 3 sizes (own tab[chest, waist, hips, "size"]), Gift (own tab[fav, normal]), Seyuu, Eye color, Hair color, Hobbies, Likes, personal rating (own tab[["Value", rating]]), image, thumbnail, color, burst
  ["Akari", "Hanao", [20, 3], "Pisces", 161, [88, 57, 85, "E"], ["Colorful sneakers, Momonga and Flower Bouquet", "Surprise mystery box"], "Aya Suzaki", "Red wine", "Clear Gold", "Karaoke", "Attempting new things", [["Strength", 6], ["Shinobi Skill", 2], ["Intelligence", 7], ["Agility", 8], ["Singing", 0]], "https://66.media.tumblr.com/f43595c0cdf27c3958e0c5673d2f6468/2e152319c5dbaa4a-c3/s1280x1920/8422853ff1cb601e95dff3bded594eb86e9a819a.png ", 16711685, ["https://64.media.tumblr.com/9db87e2fa863c751a4b9b9bc162b5656/83d81f39fa31da80-47/s2048x3072/35b461291fc8a5fdf46a9e0d09c519af23a6a66e.png", "temp"]],

  ["Enju", "Saion-ji", [8, 5], "Taurus", 164, [89, 57, 85, "E"], [["Yumi bread, Chocolate cake, Planner and Ballpoint pen"], "Strawberry tart, Striders CD and Sunbuck coffee"], "Yoko Hikasa", "Lime green", "Dark Brown", "Reading", "Sweet", [["Strength", 5], ["Shinobi Skill", 10], ["Intelligence", 8], ["Agility", 6], ["Tsundere", 10]], "https://66.media.tumblr.com/d50724066056ae303cd1fe355c545566/2e152319c5dbaa4a-3f/s1280x1920/ac0b8aca64e2f78c05db375a2907768d5b774837.png", 3329330, ["https://64.media.tumblr.com/e95e6e2a3571bbb060b551d690001e40/83d81f39fa31da80-a9/s2048x3072/df9c888f372023c30c78449f98e7287b88c31d91.png", "temp"]],

  ["Ran", "Kuzuryu", [6, 12], "Saggitarius", 0,[85, 55, 83, "D"], ["\u200B", "Procrastination station and Sunbucks coffee"], "Yui Horie", "Emerald green", "Primrose Yellow", "Studying ninjutsu", "Mizaki school", [["Strength", "unknown"], ["Shinobi Skill", "unknown"], ["Intelligence", "unknown"], ["Agility", "unknown"], ["unknown", "unknown"]], "https://66.media.tumblr.com/dd15838a51a911e4bf0a78f93c8de1b9/2e152319c5dbaa4a-32/s1280x1920/68fa811c23ffce20df64308997ce47353f38f401.png", 5294200,["https://www.litespeedtech.com/support/wiki/lib/exe/fetch.php/litespeed_wiki:config:404.png?w=400&tok=a0557c", "temp"]],

  ["Oka", "Kazamatsuri", [21, 4], "Taurus", 0, [86, 61, 87, "DD"], ["Rough chow dog and Extravagant Tiara", "\u200B"], "Kaori Ishibara", "Lilac", "Powder Pink", "Training", "Master", [["Strength", "unknown"], ["Shinobi Skill", "unknown"], ["Intelligence", "unknown"], ["Agility", "unknown"], ["unknown", "unknown"]], "https://66.media.tumblr.com/67e7e35083c0e10bb5aa64efc3ff3f1b/2e152319c5dbaa4a-92/s1280x1920/9e3f906c348b5662374ec14c727d3a09f7c9490d.png", 16757456, ["https://64.media.tumblr.com/8c257c01de4f1b78770cb13715044a4f/4893c6845e03fd5f-98/s2048x3072/94f48b449b92e67d05e4f8fae8a552936753b812.png", "temp"]],

  ["Ricka", "Machiyuki", [6, 11], "Scorpio", 163, [84, 55, 82, "D"], ["Fried noodle hotdogs, Bulletproof vest and Phone case", "\u200B"], "Akari Uehara", "Blue", "Light Periwinkle", "Shooter games", "Fried noodle hotdogs", [["Strength", 7], ["Shinobi Skill", 8], ["Intelligence", 0], ["Agility", 10], ["Hunger for Fried Noodle Hotdog", 999]], "https://66.media.tumblr.com/87b44f0f248832da35cea3f5d1cb07a4/a4ed4bfd586f88c8-ff/s1280x1920/50f412a0ae0dd2aa750d66ef750c61ad282b63a3.png", 12962785, ["https://64.media.tumblr.com/2d2ee454095a148a003f282005811fd3/4893c6845e03fd5f-21/s2048x3072/7a46146e24ef97cf5f86025fb7dae96c437282e1.png", "temp"]],

  ["Myu", "Momochi", [3, 7], "Cancer", 151, [88, 55, 83, "F"], ["Bloody handprint sticker and Compilation of scary   stories", "Strawberry tart and Zadako doll"], "Konomi Yuzaki", "Rose red", "Bright Pink", "Cooking and making sweet", "Everything horror related", [["Strength", 4], ["Shinobi Skill", 4], ["Intelligence", 8], ["Agility", 7], ["Girliness", 10]], "https://66.media.tumblr.com/bb025c4e718d12548275d61dcc34de5a/2e152319c5dbaa4a-12/s1280x1920/87554a7b40d6a3e89028975f43b46295ecb91c0e.png", 16711807, ["https://64.media.tumblr.com/e11d27224892c27485d74e38a3db526b/83d81f39fa31da80-c2/s2048x3072/4803da99e0d9abc70bdfd3d2f52d83cdc25bc542.png", "temp"]],

  ["Yamabuki", "Suou", [23, 1], "Aquarius", 166, [82, 57, 83, "B"], ["Ramen, Sketchbook and Harem novel", "Zadako doll"], "Natsumi Takamori", "Peony", "Dark Violet", "Dojinshi and Cosplay", "Pranks and Moe-tan", [["Strength", 5], ["Shinobi Skill", 8], ["Intelligence", 7], ["Agility", 3], ["Artistry", 10]], "https://66.media.tumblr.com/0094f6e0e3454866b5a4a39bdc5219a2/a4ed4bfd586f88c8-0b/s1280x1920/a68431010f199d3e2a3757e3496f0247a22b2ca5.png", 14563114, ["https://64.media.tumblr.com/0b387ca0ca490b1e003f917de769e5b4/4893c6845e03fd5f-76/s2048x3072/c5b10ef5293b7b1dee0572dcff7590b3a271591c.png", "temp"]],

  ["Tengge", "Yomoda", [27, 8], "Virgo", 176, [98, 60, 91, "G"], ["Dazzling dress and Kasa Blanca", "Free shoulder rub coupn"], "Ikumi Hasegawa", "Amber", "Dark Purple", "Massage and Ayurveda", "Captivating men", [["Strength", 6], ["Shinobi Skill", 9], ["Intelligence", 9], ["Agility", 7], ["Voluptuousness", 10]], "https://66.media.tumblr.com/da7d5a6517ef6870e0231b63e50b6353/a4ed4bfd586f88c8-7a/s1280x1920/0adaa585413fcfd44da26954e72f489e3459dba0.png", 8388736, ["https://64.media.tumblr.com/c44e91ad863e26e01919284091842ada/4893c6845e03fd5f-67/s2048x3072/4770ac04f092e456d2de4cb7e2b5fd461914436f.png", "temp"]],

  ["Yozuki", "Noctiflora Beatrix", [3, 6], "Gemini", 0, [89, 57, 88, "F"], ["Three-color dango and Dakimakura", "Procrastination station, Kunai and Free shoulder rub coupon"], "Yuka Amemiya", "Orion Blue", "Indigo", "Moving her body", "Meat and Darling", [["Strength", "unknown"], ["Shinobi Skill", "unknown"], ["Intelligence", "unknown"], ["Agility", "unknown"], ["unknown", "unknown"]], "https://64.media.tumblr.com/43d7de6ec2da8f6340bfe8c3fef7f9a6/a4ed4bfd586f88c8-81/s1280x1920/3b43610a80f33dfd28ee036122af54f34f055c79.png", 5004134],

  ["Iori", "Natsume", [5, 5], "Taurus", 0, [96, 57, 85, "G"], ["Genie lamp and Book of Riddle", "\u200B"], "Nichika Omori", "Horizon Blue", "Pale Iris", "Experiments", "Science", [["Strength", "unknown"], ["Shinobi Skill", "unknown"], ["Intelligence", "unknown"], ["Agility", "unknown"], ["unknown", "unknown"]], "https://66.media.tumblr.com/6a8e6d8a79279a804b4302ca18438983/2e152319c5dbaa4a-d9/s1280x1920/6cbc1767dd9600b2116d26377b970d95beee02f8.png", 9352145, ["https://www.litespeedtech.com/support/wiki/lib/exe/fetch.php/litespeed_wiki:config:404.png?w=400&tok=a0557c", "temp"]],

  ["Waka", "Kyogoku", [10, 2], "Aquarius", 0, [82, 62, 82, "C"], ["French fries", "Procrastination station, High perf engine and Surprise mystery bag"], "Natsumi Yanase", "Chartreuse yellow", "Heath gray", "Sleeping and making videos", "Futons", [["Strength", "unknown"], ["Shinobi Skill", "unknown"], ["Intelligence", "unknown"], ["Agility", "unknown"], ["unknown", "unknown"]], "https://64.media.tumblr.com/06b1ab8b7f6d027bd6d6a829b7b7e5b9/a4ed4bfd586f88c8-1a/s1280x1920/5db3f2122a769b27c56d103a622761c2a8bd64da.png", 14614272, ["https://64.media.tumblr.com/6b96d5eeb4eb19658be314135bb4b6f5/4893c6845e03fd5f-59/s2048x3072/7a55bbef716a8f708b88debb2bbd963ec13bc573.png", "temp"]],

  ["Nanao", "Kashima", [23, 10], "Libra", 164, [83, 57, 83], ["Glowstick", "Fanfic for Girls and Strider CD"], "Harumi Sakurai", "Hazel", "Apple green", "Going to sacred place and fantasies", "2D and Science", [["Strength", 3], ["Shinobi Skill", 3], ["Intelligence", 10], ["Agility", 4], ["Otakuness", 10]], "https://66.media.tumblr.com/48429b589d8d41338dd6ccc69adca2eb/2e152319c5dbaa4a-fd/s1280x1920/05c53a5e43fca956fdc133c7f722cb8cdaa52c63.png", 6338048, ["https://64.media.tumblr.com/2fdfb84c9a1a6faaf93ec510f000ceb1/83d81f39fa31da80-21/s2048x3072/e76fe72e4cad88620350cdb45dda3b6b4acdb2a9.png", "temp"]],

  ["Lily", "Fuma", [25, 9], "Libra", 173, [90, 58, 88, "E"], ["Fairy tale picture book, Rose déflorée and Misplaced white rabbit", "Kunai"], "Hiyori Nitta", "Green", "Navy", "Training", "Shojo manga", [["Strength", 8], ["Shinobi Skill", 8], ["Intelligence", 9], ["Agility", 7], ["Handsomeness", 10]], "https://66.media.tumblr.com/05180495bf8f77b6b635c29416087ce6/2e152319c5dbaa4a-90/s1280x1920/4462196257a3f89e9be21974e145730263d75dee.png", 2237022, ["https://64.media.tumblr.com/350f4f8b238f9efd04cf8fa11f4f9c55/83d81f39fa31da80-b0/s2048x3072/aadfd65de6983522ae130ab593e809b5c0454963.png", "temp"]],

  ["Kikuko", "Hattori", [8, 8], "Leo", 149, [72, 51, 76, "A"], ["Handsome men registry and Hush hush Hokum", "Fanfic for girls"], "Yu Ayase", "Yellow", "Ash Gray", "Otome game", "Good-looking guys", [["Strength", 7], ["Shinobi Skill", 8], ["Intelligence", 8], ["Agility", 6], ["M.I.L.F.-ness", 10]], "https://66.media.tumblr.com/5fea1b2f22a980feaa9b4df6bea8544f/2e152319c5dbaa4a-79/s1280x1920/4a6c6f149f814c56149aada912cfc952d46b6ee9.png", 11714229, ["https://64.media.tumblr.com/4b83fcde1c7a499d8b6658e4ed1154b6/4893c6845e03fd5f-ad/s2048x3072/458b107547d8891ef7c1adcce581a44d5e6e8ca3.png", "temp"]],

  ["Cy", "Tokakushi", [29, 2], "Pisces", 150, [70, 50, 73], ["Hair Tie", "High-perf engine"], "Yuina Ito", "Wisteria", "Champagne beige", "Early morning exercices", "Onii-chan!", [["Strength", 10], ["Shinobi Skill", 2], ["Intelligence", 8], ["Agility", 6], ["Artificial Intelligence", 10]], "https://66.media.tumblr.com/53d033a4d1904fee28c5f942b5f4038b/2e152319c5dbaa4a-7f/s1280x1920/6c3041c6773d13d47d5ce0ae659dbc2e9d54a8fa.png", 14181131, ["https://64.media.tumblr.com/c6d6118a136e0bf7efc0c965af9f61e5/4893c6845e03fd5f-b6/s2048x3072/2e0a365bf915e402b77fa6c23f5f349eacb07287.png", "temp"]],

  ["Kirara", "Himeno", [4, 4], "Aries", 155, [85, 56, 85, "C"], ["\u200B", "\u200B"], "No Seyuu (RIP)", "Bright Yellow", "Ultramarine Blue", "Composing music, playing Piano and Violin", "Animals (such as dogs and werewolfs) and Mashiro", [["Strength", 4], ["Shinobi Skill", 5], ["Intelligence", 8], ["Agility", 4], ["Singing", 10], ["Dancing", 6], ["Looks", 8], ["Peofessionalism", 6], ["Cowardliness", 10]], "https://64.media.tumblr.com/9fca05de6552c74c2a81c29f7c6dfbb0/72ff158bd89f8c95-90/s1280x1920/ef4c61f9c9d5915b91dbdf178265b234b8c7a57d.png", 6388181, ["https://64.media.tumblr.com/b791102e17c0f28bc9708166fc8c3f96/83d81f39fa31da80-b8/s2048x3072/94ab64f4b89aff77f67a310df0d9969a70ab1b0c.png", "temp"]],

  ["Futaba", "Tsukimi", [21, 7], "Cancer", 161, [86, 56, 86, "C"], ["\u200B", "\u200B"], "No Seyuu unfortunately", "Scarlet", "Rose Madder", "All sport", "Everyone's smiling face", [["Strength", 6], ["Shinobi Skill", 2], ["Intelligence", 7], ["Agility", 8], ["Singing", 6], ["Dancing", "9"], ["Looks", 7], ["Peofessionalism ", 7], ["Smile", 10]], "https://64.media.tumblr.com/350ae21ef6326d7338be28e36b389e69/72ff158bd89f8c95-ed/s1280x1920/3f073b72a89c64e1575d534e1305eac2d2254175.png", 12207952, ["https://64.media.tumblr.com/f1097d1fecafb0e8d4fd0f3104ebded9/83d81f39fa31da80-59/s2048x3072/8bc70ba9c33d88db9d9cafd0fa8e1772fe4868da.png", "temp"]],

  ["Sena", "Shirasu", [28, 12], "Capricorn", 160, [82, 55, 83, "B"], ["\u200b", "\u200b"], "No Seyuu, let's hope for some in the college edition", "Pale Aqua", "Jet Black", "Preparing Tea and Arranging flowers", "Crossdessing MC and Ultra-spicy food", [["Strength", 6], ["Shinobi Skill", 2], ["Intelligence", 9], ["Agility", 9],["Singing", 7], ["Dancing", 7], ["Looks", 9], ["Peofessionalism", 9], ["Bigotry", 10]], "https://64.media.tumblr.com/5ab95d2e671c018d2c63a975e882d21b/72ff158bd89f8c95-76/s1280x1920/87ad1c9258d1120992c291e80f9ad0d747783314.png", 4474184, ["https://64.media.tumblr.com/5d515fda1dd93c6af7c0fe855b74c660/83d81f39fa31da80-f4/s2048x3072/654dcb60abc32dd60f2e82bb1680e7a8f53b0952.png", "temp"]],

  ["Hotaru", "Kokonohi", [9, 6], "Gemini", 161, [85, 56, 85, "D"], ["\u200b", "\u200b"], "No Seyuu here too", "Amethyst", "Camel Brown", "Shopping and Social media", "Green Tea", [["Strength", 1], ["Spiritual power", 10], ["Intelligence", 8], ["Agility", 4], ["Sense of Style", 10]], "https://64.media.tumblr.com/885ec3e36a6b17e25e20f8b99396e243/72ff158bd89f8c95-34/s1280x1920/a6c60967e5e7cc77624f08ac278476193c076358.png", 11638907, ["https://64.media.tumblr.com/41b6e9d4469fe8981c1623cdf2f23409/4893c6845e03fd5f-db/s2048x3072/6b1d485143fe3983ad4fb4c38ae7d935939baa56.png", "temp"]],

  ["Mari", "Hanao", [28, 10], "Taurus", 164, [89, 59, 87, "F"], ["\u200b", "\u200b"], "No Seyuu for best mama", "Wine Red", "Clear Gold", "Riding around on her motorbike", "Flowers", [["Strength", 6], ["Shinobi Skill", 5], ["Intelligence", 7], ["Agility", 4], ["Motherly-ness", 10]], "https://64.media.tumblr.com/03034005a6070afb40289fa90d41fd32/72ff158bd89f8c95-67/s1280x1920/92e465751bde4e3bd26615aa3c0fff65d502497b.png", 16776960, ["https://64.media.tumblr.com/e30a739fdfa7baed624342425dcbd2df/83d81f39fa31da80-d4/s2048x3072/fe8eed563f94b6390905e8e8b15609d35135a2ab.png", "temp"]],

  ["Zina", "", [7, 2], "Aquarius", 176, [99, 61, 92, "H"], ["\u200B", "\u200b"], "No Seyuu for mad scientist.", "Wine Red", "Wine Red", "Her research", "Tea", [["Strength", 6], ["Shinobi skill", 10], ["Intelligence", 10], ["Agility", 5], ["Empress-ness", 10]], "https://64.media.tumblr.com/9a65b529f62ed1085acf2f0881b1b1c1/72ff158bd89f8c95-8b/s1280x1920/1871d97dd0821d4174ed502197563deda1d57880.png", 11604518, ["https://64.media.tumblr.com/db50f9fc9ae2186f929f1abe4a960df5/4893c6845e03fd5f-57/s2048x3072/bd6cc5ed33b209ef6819e3826cb96a25d184b678.png", "temp"]],

  ["Venus", "Otomegawa", [30, 8], "Virgo", 168, [92, 58, 89, "E"], ["\u200B", "\u200b"], "None for the himedere", "Violet", "Golden Blonde", "Horse riding and Fencing", "Rare things", [["Strength", 3], ["Shinobi Skill", 10], ["Intelligence", 9], ["Agility", 5], ["Financial Power", 10]], "https://64.media.tumblr.com/baa9f578d6eb859fde3106fa66f2139e/056041b61eea6680-3b/s1280x1920/6e2dc42502ec601360d657bda3f76e4cff9cafea.png", 16766720, ["https://64.media.tumblr.com/1b98d88622a5990b5aad5b72e72f02fb/83d81f39fa31da80-b7/s2048x3072/e55e2b16a1efca6e8ed9c2b61be31e7b9da23166.png", "temp"]],
]

const dataHelp = [ //Array for the help command

  /*[ , , ["\u200b", "\u200b"], [, "\u200b"], ["Arguments:", ], ["Explanation:", ], ["Example of use:", ]]*/ //Format of the array

  ["The tips command.", "Let the player get some Tips on the RPG *and the VN in a later update.", ["\u200B", "\u200B"], ["|tips", "\u200B"], ["Arguments", "No argument are needed"], ["Explanation", "After the command is launched, the player has to pick a number lesser or equal to the highest number of tips.\nAfter that, the bot will send an embed corresponding to the tip chosen."], ["Example of use", "|tips"]],

  ["The gacha command.", "Let us hear the holy prayer", ["\u200B", "\u200B"], ["|gacha", "\u200B"], ["Arguments", "No argument are needed"], ["Explanation:", "After the command is called, the bot will send the holy prayer of the gacha genre."], ["Example of use:", "|gacha"]],

  ["The hug command.", "No one will be able to hug them, not even the author of the bot.", ["\u200B", "\u200B"], ["|hug", "\u200b"], ["Arguments:", "No arguments are needed"], ["Explanation:", "After you launch the command, you will see the bot reacting to your tentative of huging her."], ["Example of use:", "|hug"]],

  ["The congrats command" , "Let's congratulate someone from it's pull", ["\u200B", "\u200B" ], ["|congrats @someone", "\u200B"], ["Arguments:", "You need to mention someone"], ["Explanation:", "The bot will send a message to congratulate the person you mentionned, and a few second later, the message will be edited"], ["Example of use:", "|congrats @thunderfenril#4235"]],

  ["The roll command" , "The gacha simulator for the RPG", ["\u200b", "\u200b"], ["|roll tools|body 1|10", "\u200b"], ["Arguments:", "Two arguments are needed. The first one is the category of the pull, while the second one determine if you do a single or multi pull."], ["Explanation:", "After you choose launched the command with the correct arguments, the bot will generate a random number and look for the corresponding rarity of the category you chose.\nAfter it will create a new random number, to look for the item.\nFor the multipull, it will do it 10 times instead of once."], ["Example of use:", "|roll tools 10"]],

  ["The profile command" , "It will show a small embed with the description  of the girl.", ["\u200b", "\u200b"], ["|profile nameOfTheGirl", "\u200b"], ["Arguments:", "One argument is needed, the name of the girl"], ["Explanation:", "The bot will recognize the name, if right spelled, and will generate an embed that will give what the girl like, their Seyuu, hobby, etc."], ["Example of use:", "|profile enju"]],

  ["The data command.", "Give some information on the height and 3 sizes.", ["\u200b", "\u200b"], ["|data [height| bust| waist| hips]", "\u200b"], ["Arguments:", "It needs 1 or 0 argument."], ["Explanation:","If an argument is given, it will return an embed, with the ranking of the girls based on the chosen category.\nIf no argument is given, it will give a general ranking of each category, with the 3 top of each category."], ["Example of use:", "|data height"]],

  ["The ranking command" ,"Give some information about a girl on their rank in several category." , ["\u200b", "\u200b"], ["|ranking nameOfAGirl", "\u200b"], ["Arguments:", "One argument is needed"], ["Explanation:", "After the command is launched, the bot will generate an embed which will give information on the ranking of the girl based on common trait with the other, and with personal characteristics."], ["Example of use:", "|ranking Ran"]],

  ["The suggestion/report command" ,"If you want to report something or doing an suggestion anonymously." , ["\u200b", "\u200b"], ["|dm testHere", "\u200b"], ["Arguments:", "1 is needed"], ["Explanation:", "In order to do this, you have to go in DM with the bot and do the command, before sending the command, write the text.\nWhen you send the message, the bot will send the message to the bot author, without saying who sent the message."], ["Example of use:", "|dm Someone in mng-general broke the rule [insert random rule number.]"]],

  ["The whip/zap command" , "Do you want to whip or zap someone ?", ["\u200b", "\u200b"], ["|whip @mention someone or |zap @mention someone", "\u200b"], ["Arguments:", "You have to mention someone."], ["Explanation:", "This very old command is back. You will be able to whip or zap someone again, there will be of course a special message if you try to whip or zap yourself."], ["Example of use:", "|whip @Bluedragon#7657"]],

  ["The birthday command" ,"To know who has it's birthday next" , ["\u200b", "\u200b"], ["|birthday", "\u200b"], ["Arguments:", "No argument is needed"], ["Explanation:", "It will say which girl in the mng-verse will have it's birthday next, and in how many days."], ["Example of use:", "|birthday"]],

  ["The ninjutsu command" ,"The command to try to look like a ninja" , ["\u200b", "\u200b"], ["|ninjutsu target", "\u200b"], ["Arguments:", "One argument is needed, eitehr a mention or a text."], ["Explanation:", "You will use a random ninjutsu against the target, but because you don't know how to use it, you only have a 50% to hit the target, else you will hit yourself."], ["Example of use:", "|ninjutsu @Bluedragon#7657"]],

  ["The fight master command." , "aka the annoying one to make.", ["\u200b", "\u200b"], ["|fm", "\u200b"], ["Arguments:", "None"], ["Explanation:", "The bot will ask you a series of question, to which you will have to answer. Depending of your result, the bot will tell you if you can beat the stage and in how many rounds."], ["Example of use:", "fm"]],

  ["The versus command" ,"To compare 2 characters" , ["\u200b", "\u200b"], ["|versus name1 name 2", "\u200b"], ["Arguments:", "Two different names are needed, some characters can't be used cause we don't have all the data *curse SOLMARE for being slow with it*"], ["Explanation:", "It will compare the 2 characters based on their Height, Bust, Waist, Hips, Strength, Shinobi/Spiritual power, Intelligence and Agility.\nIf one has a bigger number, then she get +1 to her score, in case of tie, nobody get a point."], ["Example of use:", "|versus Enju Venus"]],

  ["You called for some help ?" ,"Here are the command." , ["__Command about the RPG__", "|tips: Need some tips on the game ? Don't forget to pick a choice by writing a number after.\n|birthday: Who is the next one to get her birthday ?"], ["__Command about MNG:__", "|data: Give info and ranking on the different sizes.\n|ranking: Give the ranking of the girl.\n|profile: Give you some basic info on the girl.\n|fm: The command about to know if you can beat  a certain stage.\n|versus: To compare 2 characters."], ["__Fun command__", "|gacha: Let us hear the holy prayer.\n|hug: Good luck.\n|congrats ``mention``: Congratulation to ``mention`` for his/her luck.\n|roll: Let the salt come.\n|ninjutsu: You use a random ninjutsu on someone.\n|revive: To ressurect someone.\n|whip: To whip someone.\n|zap: To zap someone.\n"], ["__Info__", "|changelog: To be up to date with the change.\n|help [command name]: Do I have to explain ?\n|dm: To send an anonymous message to the author of the bot **DM only**\nThis is currently the version 4.3.0 of the bot."], ["__Suggestion__", "In order to make a suggestion, request, fix, send your message under this format:\n@thunderfenril#4235\n[ ]....\n\nHere is an example:\n```@thunderfenril#4235\n[request] Let me hug the bot.```\n*for info, I will never fulfill this request*\nYou can also use |dm command to do one."]]
]

const dataRoll = [ //Array for the roll command

  //Tools then Body

  [ //Tools
    [ // 4*
      "You rolled: Blade of Triumph, a 4* Sword", "You rolled: Youtou Masamura, a 4* Sword", "You rolled: Stinger, a 4* Sword", "You rolled: Ninja Scroll, a 4* Scroll", "You rolled: Infinity Scroll, a 4* Scroll", "You rolled: Tales of Hallows' Eve, a 4* Scroll", "You rolled: Tapestry of Transcience, a 4* Fan", "You rolled: The Fan Formerly Known As Uchiwa, a 4* Fan", "You rolled: Royal Fan, a 4* Fan", "You rolled: Forgotten Staff of Gabriel, a 4* Staff", "You rolled: Sheared Tail of the Best, a 4* Staff", "You rolled: Staff of Midas, a 4* Staff", "You rolled: Perdition's Flame, a 4* Shuriken", "You rolled: Star of Andromeda, a 4* Shuriken", "You rolled: Godhand, a 4* Shuriken", "You rolled: Heart-Shaped Magatama, a 4* accessory", "You rolled: Fluorite, a 4* accessory", "You rolled: Engraved Dragon Crystal, a 4* accessory", "You rolled: The I.R.S, a 4* accessory", "You rolled: The Tax Refund, a 4* accessory", "You rolled: The 100 Grand, a 4* accessory", "You rolled: The Payday, a 4* accessory", "You rolled: Bunny Ears and Tail, a 4* accessory", "You rolled: Cat Ears and Tail, a 4* accessory", "You rolled: Heart Pendant, a 4* accessory", "You rolled: Milk Chocolate Bracelet, a 4* accessory", "You rolled: Strawberry-Chocolate Bracelet, a 4* accessory", "You rolled: Confessions of a Teenage Otaku, a 4* accessory", "You rolled: Thor's Get-A-Grip Wrench, a 4* accessory", "You rolled: Casino Dice, a 4* accessory"
    ],
    [ // 3*
      "You rolled: Susanoo's Sword, a 3* Sword", "You rolled: Bloddthirsty Sword, a 3* Sword", "You rolled: Youtou Shigure, a 3* Sword",  "You rolled: Harbinger of Blight, a 3* Sword", "You rolled: Blade of the Dancing Sakura, a 3* Sword", "You rolled: Ichigo Parchement, a 3* Scroll", "You rolled: Totally Legit Manifesto, a 3* Scroll", "You rolled: Dragon Scroll: Gaiden, a 3* Scroll", "You rolled: Dragon Scroll: Memoirs, a 3* Scroll", "You rolled: Casanova Scroll, a 3* Scroll", "You rolled: Wind of Fantasia, a 3* Fan", "You rolled: Wing of Yatagarasu, a 3* Fan", "You rolled: Autumn's Cool Breeze, a 3* Fan", "You rolled: Leprechaun's Fan, a 3* Fan", "You rolled: Apothecary's Fan, a 3* Fan", "You rolled: The Jester's Smile, a 3* Staff", "You rolled: Millenium in Bloom, a 3* Staff", "You rolled: Steel Staff Type-0, a 3* Staff", "You rolled: The Polyglot's Gift, a 3* Staff", "You rolled: A Somber Goodbye, a 3* Staff", "You rolled: Zantetsu Shuriken, a 3* Shuriken", "You rolled: R/C Shuriken, a 3* Shuriken", "You rolled: Flower Power!, a 3* Shuriken", "You rolled: Crescent Moon's Blessing, a 3* Shuriken", "You rolled: Remnant of the Heavens, a 3* Shuriken", "You rolled: Traditional Bookmark, a 3* Accessory", "You rolled: Gold Bookmark, a 3* Accessory", "You rolled: Bamboo Water Bottle, a 3* Accessory", "You rolled: Obsidian, a 3* Accessory", "You rolled: Gold Ofuda, a 3* Accessory", "You rolled: Red Ofuda, a 3* Accessory", "You rolled: Black Kunai, a 3* Accessory", "You rolled: Pink Kunai, a 3* Accessory", "You rolled: Zeni, a 3* Accessory", "You rolled: Caltrops, a 3* Accessory", "You rolled: Gourmet Rations, a 3* Accessory", "You rolled: Fossilized Rations, a 3* Accessory", "You rolled: Inrou, a 3* Accessory", "You rolled: Shinobi Fire Bomb, a 3* Accessory", "You rolled: Hamaya, a 3* Accessory", "You rolled: Taruto's Headband, a 3* Accessory", "You rolled: Calamity's Bane, a 3* Accessory", "You rolled: Ema, a 3* Accessory", "You rolled: Shikigami, a 3* Accessory", "You rolled: Tears of the Moon, a 3* Accessory", "You rolled: Comet Hammer, a 3* Accessory", "You rolled: Cookbook for Dummies, a 3* Accessory", "You rolled: DNA Container, a 3* Accessory", "You rolled: Yamabuki Fanfic, a 3* Accessory", "You rolled: Misunderstood Kitchen Knife, a 3* Accessory"
    ],
    [ // 2*
      "You rolled: Tainted Sword, a 2* Sword", "You rolled: Sun God's Butter Knife, a 2* Sword", "You rolled: Sword of light, a 2* Sword", "You rolled: Sword of Cavities, a 2* Sword", "You rolled: Festive Scimitar, a 2* Sword", "You rolled: Clashing Supernoveas, a 2* Sword", "You rolled: Wooden Sword, a 2* Sword", "You rolled: Kiku-juumonji, a 2* Sword", "You rolled: Iga Short Sword, a 2* Sword", "You rolled: The Nosebleed Sword, a 2* Sword", "You rolled: Ninjutsu Anthology Vol. III, a 2* Scroll", "You rolled: Scroll of Restraint, a 2* Scroll", "You rolled: Sneaking Scroll, a 2* Scroll", "You rolled: Suspicious-Looking Scroll, a 2* Scroll", "You rolled: Treasure Map, a 2* Scroll", "You rolled: Sushi Scroll, a 2* Scroll", "You rolled: Eyes Eyes Baby, a 2* Scroll", "You rolled: Chrono's Diary, a 2* Scroll", "You rolled: Dirty Fanfiction, a 2* Scroll", "You rolled: Twilight Manuscript, a 2* Scroll", "You rolled: Winter Butterfly, a 2* Fan", "You rolled: Light of the Heavens, a 2* Fan", "You rolled: The Peony, a 2* Fan", "You rolled: Winter's First Snow, a 2* Fan", "You rolled: Sakura Storm, a 2* Fan", "You rolled: Sol's Final Hour, a 2* Fan", "You rolled: A Fan Made out of Money, a 2* Fan", "You rolled: Queen's Fan, a 2* Fan", "You rolled: Autumns Maple Leaf, a 2* Fan", "You rolled: Symbol of Spring, a 2* Fan", "You rolled: One-Winged Staff, a 2* Staff", "You rolled: Corrupted Angel's Staff, a 2* Staff", "You rolled: Angel's Wand, a 2* Staff", "You rolled: Toy Wand, a 2* Staff", "You rolled: Swan's Ballet, a 2* Staff", "You rolled: Bad Staff, a 2* Staff", "You rolled: Staff of Life, a 2* Staff", "You rolled: Zodiac Staff, a 2* Staff", "You rolled: Amaterasu Staff, a 2* Staff", "You rolled: Bubble Wand, a 2* Staff", "You rolled: Shadow of the Moon, a 2* Shuriken", "You rolled: Pine Jet Shuriken, a 2* Shuriken", "You rolled: Eight-Point Shuriken, a 2* Shuriken", "You rolled: Baseball, a 2* Shuriken", "You rolled: Manji Shuriken, a 2* Shuriken", "You rolled: Standard Shuriken, a 2* Shuriken", "You rolled: Three-Point Shuriken, a 2* Shuriken", "You rolled: Party Trick, a 2* Shuriken", "You rolled: Overpriced Shuriken, a 2* Shuriken", "You rolled: ROFL Copter, a 2* Shuriken", "You rolled: Blue Good-Luck Charm, a 2* Accessory", "You rolled: Yellow Good-Luck Charm, a 2* Accessory", "You rolled: Survival Kit, a 2* Accessory", "You rolled: Shamisen, a 2* Accessory", "You rolled: Peach Explosion, a 2* Accessory", "You rolled: Carassius Auratus, a 2* Accessory", "You rolled: Pimplicis Explodius, a 2* Accessory", "You rolled: Jiangshi Protection Seal, a 2* Accessory", "You rolled: Hopping Dead All-Access Pass, a 2* Accessory", "You rolled: Masquerade Eye Mask, a 2* Accessory", "You rolled: Stone Cold Pendant, a 2* Accessory", "You rolled: DIY Pendant Kit, a 2* Accessory", "You rolled: The Raging Bull Mk. II, a 2* Accessory", "You rolled: Smokey's 75th Birthday Gift, a 2* Accessory", "You rolled: Uncle P. Bags' Missing Monocle, a 2* Accessory", "You rolled: Silver Pocket Watch, a 2* Accessory", "You rolled: Gold Pocket Watch, a 2* Accessory", "You rolled: Ice Queen's Chime, a 2* Accessory", "You rolled: Soothsayer's Quill, a 2* Accessory", "You rolled: *Odeur de Tiger*, a 2* Accessory", "You rolled: Equestrian Crop, a 2* Accessory", "You rolled: Opulent Hair Accessory, a 2* Accessory", "You rolled: Purple Passion, a 2* Accessory", "You rolled: Winter Wonder, a 2* Accessory", "You rolled: Friendship Bracelet for Men, a 2* Accessory", "You rolled: Friendship Bracelet for Women, a 2* Accessory", "You rolled: Swanwhite Ballet, a 2* Accessory", "You rolled: Off-Brand Cat Nip, a 2* Accessory", "You rolled: Brand-Name Cat Nip, a 2* Accessory", "You rolled: Flour-Leaf Clover, a 2* Accessory", "You rolled: Hippocratic Oath, a 2* Accessory", "You rolled: White Kitsune Mask, a 2* Accessory", "You rolled: Black Kitsune Mask, a 2* Accessory", "You rolled: Purple Charm, a 2* Accessory", "You rolled: Red Charm, a 2* Accessory", "You rolled: Blue Charm, a 2* Accessory", "You rolled: Black Handcuffs, a 2* Accessory", "You rolled: Elegant Demon's Bane, a 2* Accessory", "You rolled: Demon's Bane, a 2* Accessory", "You rolled: Melancholy's Elegy, a 2* Accessory", "You rolled: Diamond Engagement Shield, a 2* Accessory", "You rolled: Magatama Fish Tank, a 2* Accessory", "You rolled: Champion's Belt, a 2* Accessory", "You rolled: Slime in a Bottle, a 2* Accessory", "You rolled: Mizaki School Handbook, a 2* Accessory", "You rolled: Cristal Clear Persuasion, a 2* Accessory", "You rolled: Sakura's Hoe, a 2* Accessory", "You rolled: *Mature* by Iori, a 2* Accessory", "You rolled: Leather's Painful Kiss, a 2* Accessory", "You rolled: Doctor's Syringe, a 2* Accessory"
    ]
  ],

  [ //Body
    [ // 4*
      "You rolled: Akari Sexy Armor, a 4* Attacker and Spirit body", "You rolled: Enju Sexy Armor, a 4* Mage and Technique body", "You rolled: Ricka Sexy Armor, a 4* Ranger and Illusion body", "You rolled: Myu Sexy Armor, a 4* Mage and Vitality body", "You rolled: Tengge Sexy Armor, a 4* Tank and Technique body", "You rolled: Yamabuki Sexy Armor, a 4* Healer and Spirit body", "You rolled: Lily Sexy Armor, a 4* Ranger and Spirit body", "You rolled: Cy Sexy Armor, a 4* Attacker and Vitality body", "You rolled: Nanao Sexy Armor, a 4* Mage and Truth body", "You rolled: Kikuko Sexy Armor, a 4* Attacker and Truth body", "You rolled: Oka Sexy Armor, a 4* Attacker and Illusion body", "You rolled: Yozuki Sexy Armor, a 4* Tank and Truth body", "You rolled: Waka Sexy Armor, a 4* Ranger and Technique body", "You rolled: Iori Sexy Armor, a 4* Healer and Vitality body", "You rolled: Ran Sexy Armor, a 4* Mage and Illusion body", "You rolled: Spy suit Akari, a 4* Attacker and Technique body", "You rolled: Halloween hijinks Tengge, a 4* Ranger and Vitality body", "You rolled: New year's dress Lily, a 4* Healer and Truth body", "You rolled: Gothic dress Ricka, a 4* Mage and Truth body", "You rolled: Animal get-up Tengge, a 4* Tank and Illusion body", "You rolled: Animal get-up Kikuko, a 4* Attacker and Spirit body", "You rolled: Moon viewing mayhem Yamabuki, a 4* Tank and Illusion body", "You rolled: Mizaki's ace attorney Enju, a 4* Attacker and Truth body", "You rolled: Christmas angel Myu, a 4* Mage and Truth body", "You rolled: Christmas angel Enju, a 4* Healer and Illusion body", "You rolled: New year's dress Oka, a 4* Attacker and Spirit body", "You rolled: Valentine dress Ran, a 4* Mage and Vitality body", "You rolled: Stylish head chef Yozuki, a 4* Healer and Spirit body", "You rolled: Hunter outfit Akari, a 4* Tank and Vitality body", "You rolled: Panda dress Enju, a 4* Mage and Spirit body", "You rolled: All Grown up Cy, a 4* Attacker and Truth body", "You rolled: All Grown up Ricka, a 4* Healer and Technique body", "You rolled: Sexy ninja garb Yozuki, a 4* Attacker and Vitality body", "You rolled: Valentine dress Waka, a 4* Attacker and Spirit body", "You rolled: Panda dress Iori, a 4* Tank and Truth body", "You rolled: Sexy ninja garb Enju, a 4* Mage and Illusion body"
    ],
    [ // 3*
      "You rolled: Spy suit Lily, a 3* Mage and Spirit body", "You rolled: Animal get-up Lily, a 3* Ranger and Vitality body", "You rolled: Big bad wolf Iori Outfit, a 3* Ranger and Illusion body", "You rolled: Stylish head chef Myu, a 3* Attacker and Illusion body", "You rolled: Halloween hijinks Nanao, a 3* Mage and Technique body", "You rolled: Catwalk star Ran, a 3* Ranger and Spirit body", "You rolled: Moon viewing mayhem Yozuki, a 3* Mage and Technique body", "You rolled: Christmas angel Cy, a 3* Attacker and Spirit body", "You rolled: All Grown up Kikuko, a 3* Ranger and Truth body", "You rolled: Moon viewing mayhem Enju, a 3* Attacker and Spirit body", "You rolled: Sexy weathergirl Tengge, a 3* Healer and Illusion body", "You rolled: All Grown up Akari, a 3* Mage and Illusion body",      "You rolled: Animal get-up Akari, a 3* Healer and Illusion body", "You rolled: Valentine dress Enju, a 3* Tank and Technique body", "You rolled: Panda dress Ricka, a 3* Ranger and Vitality body", "You rolled: Stylish head chef Ricka, a 3* Tank and Spirit body", "You rolled: Dream-dress up Myu, a 3* Tank and Technique body", "You rolled: New year's dress Tengge, a 3* Mage and Vitality body", "You rolled: Valentine dress Yamabuki, a 3* Healer and Technique body", "You rolled: Playtime fun Cy, a 3* Mage and Vitality body", "You rolled: New year's dress Nanao, a 3* Ranger and Spirit body", "You rolled: Beautiful bunny Nanao, a 3* Attacker and Vitality body", "You rolled: Halloween hijinks Kikuko, a 3* Healer and Truth body", "You rolled: Stylish head chef Oka, a 3* Ranger and Spirit body", "You rolled: Spy suit Oka, a 3* Tank and Vitality body", "You rolled: Little red riding Oka, a 3* Healer and Technique body", "You rolled: Dreamy dress-up Oka, a 3* Attacker and Truth body", "You rolled: Panda dress Yozuki, a 3* Attacker and Truth body", "You rolled: Gotich dress Waka, a 3* Tank and Illusion body", "You rolled: Gothic dress Iori, a 3* Healer and Technique body", "You rolled: Christmas dress Ran, a 3* Tank and Truth body", "You rolled: Akari Roaring Fist Outfit, a 3* Attacker and Truth body", "You rolled: Enju Thaumaturge Outfit, a 3* Mage and Vitality body", "You rolled: Ricka Outfit of Justice, a 3* Ranger and Spirit body", "You rolled: Myu Beast Outfit, a 3* Healer and Illusion body", "You rolled: Tengge Get Down and Boogie Outfit, a 3* Attacker and Vitality body", "You rolled: Yamabuki Lady Luck Outfit, a 3* Ranger and Vitality body", "You rolled: Lily One With the Sky Outfit, a 3* Tank and Illusion body", "You rolled: Cy Deadeye Outfit, a 3* Ranger and Illusion body", "You rolled: Nanao Healing Touch Outfit, a 3* Healer and Technique body", "You rolled: Kikuko Outfit of the Worthy, a 3* Tank and Technique body", "You rolled: Oka Servant of the Gods Outfit, a 3* Healer and Truth body", "You rolled: Yozuki Bloodlust Outfit, a 3* Attacker and Spirit body", "You rolled: Waka Outfit of the Dead, a 3* Mage and Spirit body", "You rolled: Ran Jack of all Trades, a 3* Mage and Technique body", "You rolled: Iori Watcher of the Stars Outfits, a 3* Mage and Truth body", "You rolled: Akari Dress, a 3* Healer and Vitality body", "You rolled: Enju Dress, a 3* Ranger and Truth body", "You rolled: Ricka Dress, a 3* Mage and Vitality body", "You rolled: Myu Dress, a 3* Ranger and Spirit body", "You rolled: Tengge Dress, a 3* Ranger and Truth body", "You rolled: Yamabuki Dress, a 3* Tank and Illusion body", "You rolled: Lily Dress, a 3* Ranger and Technique body", "You rolled: Cy Dress, a 3* Attacker and Technique body", "You rolled: Nanao Dress, a 3* Mage and Illusion body", "You rolled: Kikuko Dress, a 3* Attacker and Illusion body", "You rolled: Oka Dress, a 3* Tank and Technique body", "You rolled: Yozuki Dress, a 3* Attacker and Vitality body", "You rolled: Waka Dress, a 3* Ranger and Truth body", "You rolled: Iori Dress, a 3* Healer and Spirit body", "You rolled: Ran Dress, a 3* Healer and Spirit body"
    ],
    [ // 2*
      "You rolled: Akari Modern Kimono, a 2* Healer and Illusion body", "You rolled: Enju Modern Kimono, a 2* Healer and Technique body", "You rolled: Ricka Modern Kimono, a 2* Tank and Technique body", "You rolled: Myu Modern Kimono, a 2* Ranger and Vitality body", "You rolled: Tengge Modern Kimono, a 2* Attacker and Truth body", "You rolled: Yamabuki Modern Kimono, a 2* Ranger and Spirit body", "You rolled: Lily Modern Kimono, a 2* Attacker and Vitality body", "You rolled: Cy Modern Kimono, a 2* Tank and Illusion body", "You rolled: Nanao Modern Kimono, a 2* Tank and Truth body", "You rolled: Kikuko Modern Kimono, a 2* Tank and Vitality body", "You rolled: Oka Modern Kimono, a 2* Mage and Technique body", "You rolled: Yozuki Modern Kimono, a 2* Healer and Spirit body", "You rolled: Waka Modern Kimono, a 2* Healer and Truth body", "You rolled: Ran Modern Kimono, a 2* Ranger and Truth body", "You rolled: Iori Modern Kimono, a 2* Mage and Spirit body", "You rolled: Akari Suit, a 2* Ranger and Technique body", "You rolled: Enju Suit, a 2* Ranger and Illusion body", "You rolled: Ricka Suit, a 2* Attacker and Illusion body", "You rolled: Myu Suit, a 2* Healer and Spirit body", "You rolled: Tengge Suit, a 2* Mage and Illusion body", "You rolled: Yamabuki Suit, a 2* Tank and Vitality body", "You rolled: Lily Suit, a 2* Tank and Spirit body", "You rolled: Cy Suit, a 2* Healer and Truth body", "You rolled: Nanao Suit, a 2* Attacker and Technique body", "You rolled: Kikuko Suit, a 2* Mage and Truth body", "You rolled: Oka Suit, a 2* Healer and Vitality body", "You rolled: Yozuki Suit, a 2* Tank and Technique body", "You rolled: Waka Suit, a 2* Ranger and Spirit body", "You rolled: Ran Suit, a 2* Mage and Vitality body", "You rolled: Iori Suit, a 2* Attacker and Truth body", "You rolled: Akari Yukata, a 2* Attacker and Vitality body", "You rolled: Enju Yukata, a 2* Mage and Spirit body", "You rolled: Ricka Yukata, a 2* Mage and Truth body", "You rolled: Myu Yukata, a 2* Mage and Technique body", "You rolled: Tengge Yukata, a 2* Tank and Spirit body", "You rolled: Yamabuki Yukata, a 2* Attacker and Technique body", "You rolled: Lily Yukata, a 2* Ranger and Truth body", "You rolled: Cy Yukata, a 2* Ranger and Vitality body", "You rolled: Nanao Yukata, a 2* Healer and Vitality body", "You rolled: Kikuko Yukata, a 2* Attacker and Spirit body", "You rolled: Oka Yukata, a 2* Tank and Illusion body", "You rolled: Yozuki Yukata, a 2* Attacker and Illusion body", "You rolled: Waka Yukata, a 2* Mage and Illusion body", "You rolled: Ran Yukata, a 2* Healer and Technique body", "You rolled: Iori Yukata, a 2* Ranger and Illusion body", "You rolled: Akari Spring Outfit, a 2* tank and Spirit body", "You rolled: Enju Spring Outfit, a 2* Attacker and Truth body", "You rolled: Ricka Spring Outfit, a 2* Healer and Vitality body", "You rolled: Myu Spring Outfit, a 2* Tank and Illusion body", "You rolled: Tengge Spring Outfit, a 2* Ranger and Technique body", "You rolled: Yamabuki Spring Outfit, a 2* Healer and Illusion body", "You rolled: Lily Spring Outfit, a 2* Mage and Technique body", "You rolled: Cy Spring Outfit, a 2* Attacker and Spirit body", "You rolled: Nanao Spring Outfit, a 2* Mage and Illusion body", "You rolled: Kikuko Spring Outfit, a 2* Ranger and Technique body", "You rolled: Oka Spring Outfit, a 2* Ranger and Truth body", "You rolled: Yozuki Spring Outfit, a 2* Mage and Truth body", "You rolled: Waka Spring Outfit, a 2* Attacker and Vitality body", "You rolled: Ran Spring Outfit, a 2* Tank and Spirit body", "You rolled: Iori Spring Outfit, a 2* Healer and Vitality body", "You rolled: Akari Kimono, a 2* Mage and Truth body", "You rolled: Enju Kimono, a 2* Tank and Vitality body", "You rolled: Ricka Kimono, a 2* Ranger and Spirit body", "You rolled: Myu Kimono, a 2* Attacker and Truth body", "You rolled: Tengge Kimono, a 2* Healer and Vitality body", "You rolled: Yamabuki Kimono, a 2* Mage and Truth body", "You rolled: Lily Kimono, a 2* Healer and Illusion body", "You rolled: Cy Kimono, a 2* Mage and Technique body", "You rolled: Nanao Kimono, a 2* Ranger and Spirit body", "You rolled: Kikuko Kimono, a 2* Healer and Illusion body", "You rolled: Oka Kimono, a 2* Attacker and Spirit body", "You rolled: Yozuki Kimono, a 2* Ranger and Vitality body", "You rolled: Waka Kimono, a 2* Tank and Technique body", "You rolled: Iori Kimono, a 2* Tank and Technique body", "You rolled: Ran Kimono, a 2* Attacker and Illusion body"
    ]
  ]

]

const datafm = [ //Array for the fight master command
  [300, 7], [800, 5], [1500, 7], [2800, 9], [4500, 7], [6900, 7], [8500, 6], [10000, 5], [12000, 5], [15000, 5]
]

/*
Function : monthToString
Parameter : an int
Return : A string corresponding to the month of the int
*/
function monthToString(monthInt) {
  switch (monthInt) {
    case 1: return "January";
    case 2: return "February";
    case 3: return "March";
    case 4: return "April";
    case 5: return "May";
    case 6: return "June";
    case 7: return "July";
    case 8: return "August";
    case 9: return "September";
    case 10: return "October";
    case 11: return "November";
    case 12: return "December";
    default: return "Error";
  }
}

/*
  Function: daysLeftInMonth
  Parameter: 3 int that correspond to the current day, the month-1 and the year
  Return: The number of days left in the current month of the current year
*/
function daysLeftInMonth(day, month, year) {
  month+=1; //We increase it to make it a bit easier to work with
  var daysInMonth; //We create a var that will save the number of days in a month
  if(month==1||month==3||month==5||month==7||month==8||month==10||month==12) { //January, March, May, July, August, October and December
    daysInMonth=31;
  } else if (month!=2) { //All the other month except February
    daysInMonth=30;
  } else {
    if(((year%4==0)&&(year%100!=0))||(year%400==0)){ //February has 29 days, if we can divide the year by 4 but not by 100 or if we can divide it by 400. That means, division without any rest
      daysInMonth=29;
    } else {
      daysInMonth=28;
    }
  }
  var daysLeft=daysInMonth-day;
  return daysLeft;
}

/*
  Function: death
  Parameter: A variable
  Effect: If the variable is a mention, put the id in the array deadList, else do nothing
*/
function death(target){
  if(target!=undefined) {//We look if it's a mention or not, if it isn't, it's undefined
    let toBury = target.id; //We save the id of the mention in a variable
    if (deadList.length == 0) { //We check if the array is empty
      deadList.push(toBury); //We push this value in the array deadList if it's empty
      return;
    } else {
      let deadCounter=0; //We initialize a variable to 0
      for (deadCounter; deadCounter < deadList.length; deadCounter++){ //We do a for loop in the array
        if(deadList[deadCounter] == toBury){ //If the target is already in the list
          return; //We stop, we are humans, not cats
        }
      }
    }
    deadList.push(toBury); //We push this value in the array deadList if the target isn't in the list
  }
}

/*
  Function: givePositionRanking
  Parameter: 2 string
  Return: An int, the ranking of the girl in the chosen category
*/
function givePositionRanking(name, category){ //Change, add all, then  sort, and for from end
  let index=-1;
  let indexGirl = -1;
  for(counter = 0; counter<data.length; counter++){
    if(name == data[counter][0]){
      indexGirl=counter;
    }
  }

  let rankingArray=[];

  switch (category) {
    case "height":
      for(counterRankingArray = 0; counterRankingArray<data.length; counterRankingArray++){
        rankingArray.indexOf(data[counterRankingArray][4]) === -1 ? rankingArray.push(data[counterRankingArray][4]) : index = -1;
      }
      rankingArray.sort(function(a, b){return b-a});
      for(counterIndexRanking=0; counterIndexRanking<rankingArray.length; counterIndexRanking++){
        if(data[indexGirl][4]==rankingArray[counterIndexRanking]){
          index=counterIndexRanking;
        }
      }
      break;
    case "bust":
      for(counterRankingArray = 0; counterRankingArray<data.length; counterRankingArray++){
        rankingArray.indexOf(data[counterRankingArray][5][0]) === -1 ? rankingArray.push(data[counterRankingArray][5][0]) : index = -1;
      }
      rankingArray.sort(function(a, b){return b-a});
      for(counterIndexRanking=0; counterIndexRanking<rankingArray.length; counterIndexRanking++){
        if(data[indexGirl][5][0]==rankingArray[counterIndexRanking]){
          index=counterIndexRanking;
        }
      }
      break;
    case "waist":
      for(counterRankingArray = 0; counterRankingArray<data.length; counterRankingArray++){
        rankingArray.indexOf(data[counterRankingArray][5][1]) === -1 ? rankingArray.push(data[counterRankingArray][5][1]) : index = -1;
      }
      rankingArray.sort(function(a, b){return b-a});
      for(counterIndexRanking=0; counterIndexRanking<rankingArray.length; counterIndexRanking++){
        if(data[indexGirl][5][1]==rankingArray[counterIndexRanking]){
          index=counterIndexRanking;
        }
      }
      break;
    case "hips":
      for(counterRankingArray = 0; counterRankingArray<data.length; counterRankingArray++){
        rankingArray.indexOf(data[counterRankingArray][5][2]) === -1 ? rankingArray.push(data[counterRankingArray][5][2]) : index = -1;
      }
      rankingArray.sort(function(a, b){return b-a});
      for(counterIndexRanking=0; counterIndexRanking<rankingArray.length; counterIndexRanking++){
        if(data[indexGirl][5][2]==rankingArray[counterIndexRanking]){
          index=counterIndexRanking;
        }
      }
      break;
    default:
      message.channel.send("Error in givePositionRanking")
  }
  index++;
  return index;
}

/*
  Function: shuffle
  Parameter: 1 array
  Return: The array with the value being in random place
*/
function shuffle(array){
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while(0!== currentIndex){ //While we still have things to shuffle
    randomIndex=Math.floor(Math.random() * currentIndex); //We create a random number that will serve for the shuffle
    currentIndex-=1; //We decremente the value

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue; //And we swap
  }

  return array;
}

/*
  Function: givePositionIndex
  Parameter: A name
  Return: The position in the array data
*/
function givePositionIndex(name){
  let targetName = name; //We save the nbame in a variable
  let indexGirl = -1; //We initialize a variable to -1 if not found
  let nameTarget = targetName.charAt(0).toUpperCase() + targetName.substr(1, 10); //We change the name so it start with a major letter

  for(counter = 0; counter < data.length; counter ++){ //For loop
    if(nameTarget === data[counter][0]){ //If to check if the name correspond
      indexGirl = counter; //If yes, then we save the position in a variable
    }
  }
  return indexGirl;
}

/*
  Function: versusFight
  Parameter: Position of the 2 fighter in data and in which round they compete
  Return: The position of the winner
*/
function versusFight(right, left, round, subRound){
  if(round == 5) {
    if(data[right][round][subRound] > data[left][round][subRound]){
      return right;
    } else if(data[right][round][subRound] < data[left][round][subRound]) {
      return left;
    } else {
      return -1;
    }
  } else if(round == 12) {
    if(data[right][round][subRound][1] > data[left][round][subRound][1]){
      return right;
    } else if(data[right][round][subRound][1] < data[left][round][subRound][1]) {
      return left;
    } else {
      return -1;
    }
  } else {
    if (data[right][round] > data[left][round]) {
      return right;
    } else if(data[right][round] < data[left][round]) {
      return left;
    } else {
      return -1;
    }
  }
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on("messageCreate", message => {
	if (/\bh[o0]rn[iy1]\b/i.test(message.content)) {
		if (message.author.id === client.user.id) return;
    randomHorny=Math.round(Math.random()*(2-1)+1)
    switch (randomHorny) {
      case 1:
        message.reply({content: "Go to horny jail", allowedMentions: { repliedUser: true}});
        break;
      default:
        message.reply({content: "Bonk", allowedMentions: { repliedUser: true}})
    }
	}

  /*
  Description: Check if the bot is the message is made of 22 characters and then check if it's a mention of the bot.
  Return: a message
  */
  if(message.content.length == 22 && message.mentions.has(client.user)) {
    message.channel.send("Yes ?")
  }
})

client.on("messagecreate", async message => {
  //Used so it doesn't respond if someone write a command name without the prefix, or if a bot write something that would trigger a reaction
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  //It's used for the argument
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  const isBotMentioned = message.mentions.users.first()
  const filterFm = m => m.author.id === message.author.id

  //Variable and if used for the reset
  let date = new Date();
  let dayOfTheWeek = date.getDay();
  let hour = date.getUTCHours();
  let newHour = hour + 6;
  if (newHour > 23) {
    newHour -= 24;
    dayOfTheWeek += 1;
    if (dayOfTheWeek > 6) {
      dayOfTheWeek -= 7;
    }
  }


  /*
    Command : dm
    Parameter : a text
    Return : If messgae isn't a dm, do nothing, else return a text to the bot author.
  */
  if(message.channel.type === "dm"){ //Check if the message is from dm
    if(command === "dm"){ //If the command is |suggestion
      const text = args.join(' ') //We take the args, and do a string with a space between each args
      const creator = client.users.fetch('221352736657113088').then( user => user.send(text)) //We look for the user with this id, then we send the variable text to this user
      console.log(creator)
    }
  }


  /*
    Command : tips
    Parameter : None
    Return : An embed depending on the choice of the user.
  */
  if(command === "tips"){
	const embedTips= new Discord.MessageEmbed() //We create an embed that will the info on which choice will show which info later
		.setTitle("Tips Command")
		.addFields({name: "Want some tips ?",
					value: "Here are some, just select one with the correponding number"})
		.addFields({name: "\u200B",
					value: "1.Gacha\n2.Reroll\n3.Bait strat\n4.Niney from friends\n5.Bond Breakthrough",
					inline: true})
		.addFields({name: "\u200B",
					value: "6.Body Breakthrough\n7.Strong and early 3* weapons\n8.Training\n9.Enemies attack type",
					inline: true})
	message.channel.send({ embeds: [embedTips]})
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max: 1, time: 20000 }); //We will collect the answer of the author of the command
    collector.on('collect', message => {
      if (message.content==="1"){
		const embedTipsSend= new Discord.MessageEmbed()
			.setTitle("Gacha")
			.setFooter("Tips Command")
			.addFields({name: "\u200B",
						value: "You can complete the daily mission of creation with the 2 free creation and the tool creation."})
			.addFields({name:"\u200B",
	  			        value:"\u200B"})
        message.channel.send({ embeds: [embedTipsSend]});
        return
      }
      else if (message.content==="2"){
		const embedTipsSend= new Discord.MessageEmbed()
			.setTitle("Reroll")
			.setFooter("Tips Command")
			.addFields({name: "\u200B",
						value: "1) Go to Menu->Options/Support-> Data transfer/Other \n2) Select Data Transfer/Data Link \n3) Select Transfer Data \n4) Select Transfer Data again \n5) Set a password\n6) Screenshot/Write down the password and the Transfer ID \n",
						inline: true})
			.addFields({name:"\u200B",
						value:"7) Close the game \n8) On the second device, launch the game, choose Data Transfer/Link Account On the Title Screen \n9) Select Data Transfer and fill the blank text \n10) Go back to the first device \n11) Fresh start, enjoy your salt",
						inline: true})
			.addFields({name:"\u200B",
						value: "\u200B"})
        message.channel.send({ embeds: [embedTipsSend]});
        return
      }
      else if (message.content==="3"){
		const embedTipsSend=new Discord.MessageEmbed()
			.setTitle("Bait strat")
			.setFooter("Tips Command")
			.addFields({name: "\u200B",
						value: "The bait strat is to use a strong friend with several weak body. \nYou need that the strong friend has skills like aoe damage and heal. \nYou don't need to mend the bait body after the battle."})
			.addFields({name: "\u200B",
						value: "\u200B"})
        message.channel.send({ embeds: [embedTipsSend]})
        return
      }
      else if (message.content==="4") {
		  const embedTipsSend=new Discord.MessageEmbed()
  			.setTitle("Niney from friends")
  			.setFooter("Tips Command")
  			.addFields({name: "\u200B",
						value: "Every time someone use one of your unit as a support, you get 100 niney. \nThat's an easy to get some niney, so add lot's of friends"})
			.addFields({name: "\u200B",
						value: "<:EnjuHappy:534157250550562847>"})
  			.addFields({name: "\u200B",
  						value: "\u200B"})
        message.channel.send({ embeds: [embedTipsSend]});
      }
      else if (message.content==="5") {
		  const embedTipsSend=new Discord.MessageEmbed()
  			.setTitle("Bond Breakthrough")
  			.setFooter("Tips Command")
  			.addFields({name: "When you reach the max level of a bond, you can breakthrough this bond, to increase the max level.\nThe breakthrough are available at level 20, 40, 60 and 80, each requiring different materials and niney to proceed.",
						value:"\u200B"})
			.addFields({name: "__Level 20:__",
						value: "10 branches,\n 5 fluffy sheep,\n 5 roses hairpin,\n 5 luscious lipstick,\n 50k niney",
						inline: true})
			.addFields({name: "__Level 40:__",
						value: "20 branches,\n 10 strong branches,\n 10 fluffy sheep,\n 10 Roses hairpin,\n 10 luscious lipsticks,\n 5 fashion magazines,\n 100K niney",
						inline: true})
			.addFields({name: "\u200B",
			  			value: "\u200B"})
			.addFields({name: "__Level 60:__",
						value: "30 branches,\n 20 strong branches,\n 10 unyielding branches,\n 20 fluffy sheep,\n 20 roses hairpin,\n 20 luscious lipstick,\n 10 fashion magazines,\n 5 tea set for two,\n 200k niney",
						inline:true})
			.addFields({name:"__Level 80:__",
						value: "40 branches,\n 30 strong branches,\n 20 unyielding branches,\n 30 fluffy sheep,\n 30 roses hairpin,\n 20 luscious lipstick,\n 20 fashion magazines,\n 10 tea set for two,\n 400k niney",
						inline: true})

  			.addFields({name: "\u200B",
  						value: "\u200B"})
			.addFields({name:"\u200B",
						value:"All the materials are collecteable, except the branches, to know where they can drop, please go look at Shiro guide, and thank him."})
        message.channel.send({ embeds: [embedTipsSend]})
      }
      else if (message.content==="6") {
		  const embedTipsSend=new Discord.MessageEmbed()
  			.setTitle("Body Breakthrough")
  			.setFooter("Tips Command")
  			.addFields({name:"Once you manage to reach the level cap, you get the option to perform an outfit breakthrough, thus raising the max level and earning a new skill.\nThe breakthrough are possible when the outfit reach level 20,40,60 and 80.",
						value:"You will need materials for each breakthrough, and here is the list I kindly prepared for you:"})
			.addFields({name: "\u200B",
  						value: "\u200B"})
			.addFields({name: "__Level 20:__",
						value: "5 Master's hammer,\n 10 silvers keys",
						inline: true})
			.addFields({name: "__Level 40:__",
						value: "5 Sacred hammers,\n 20 silver keys,\n 10 gold keys",
						inline: true})
  			.addFields({name: "\u200B",
  						value: "\u200B"})
			.addFields({name: "__Level 60:__",
						value: "5 Amaterasu's hammers,\n 30 silver keys,\n 20 gold keys,\n 10 rainbow keys",
						inline: true})
			.addFields({name: "__Level 80:__",
						value: "5 Amaterasu's hammers,\n 40 silver keys,\n 30 gold keys,\n 20 rainbow keys",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "For each breakthrough you will need this amount of materials, but the cost in niney and of duplicate or Komainu will be different based on the rarity of the outfit.",
						value: "\u200B"})


			.addFields({name: "For an outfit of rarity 4, you will need for each breakthrough:",
						value: "\u200B"}) //4
			.addFields({name: "__Level 20:__",
						value: "52k niney and 1 similar outfit of the same character or a 4 star Komainu",
						inline: true})
			.addFields({name: "__Level 40:__",
						value: "104k niney and 1 similar outfit of the same character or a 4 star Komainu",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "__Level 60:__",
						value: "208k niney and 1 similar outfit of the same character or a 4 star Komainu",
						inline: true})
			.addFields({name: "__Level 80:__",
						value: "416k niney and 1 similar outfit of the same character or a 4 star Komainu",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})


			.addFields({name: "For an outfit of rarity 3, you will need for each breakthrough:",
						value: "\u200B"}) //3
			.addFields({name: "__Level 20:__",
						value: "35k niney and 1 similar outfit of the same character or a 3 star Komainu",
						inline: true})
			.addFields({name: "__Level 40:__",
						value: "70K niney and 2 similar outfit of the same character or 2 3 star Komainus",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "__Level 60:__",
						value: "140k niney and 2 similar outfit of the same character or 2 3 star Komainus",
						inline: true})
			.addFields({name: "__Level 80:__",
						value: "*Missing for the moment*",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})


		 const embedTipsSend2=new Discord.MessageEmbed()
			.addFields({name: "For an outfit of rarity 2, you will need for each breakthrough:",
						value: "\u200B"}) //2
			.addFields({name: "__Level 20:__",
						value: "7k niney and 2 similar outfit of the same character or 2 Komainus",
						inline: true})
			.addFields({name: "__Level 40:__",
						value: "14k niney and 2 similar outfit of the same character or 2 Komainus",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "__Level 60:__",
						value: "28k niney and 3 similar outfits of the same character or 3 Komainus",
						inline: true})
			.addFields({name: "__Level 80:__",
						value: "*Missing for the moment*",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})


			.addFields({name: "For an outfit of rarity 1, you will need for each breakthrough:",
						value: "\u200B"}) //1
			.addFields({name: "__Level 20:__",
						value: "3,5k niney and 3 similar outfit of the same character or 2 Komainus",
						inline: true})
			.addFields({name: "__Level 40:__",
						value: "7k niney and 3 similar outfit of the same character or 2 Komainus",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "__Level 60:__",
						value: "14k niney and 3 similar outfit of the same character or 3 Komainus",
						inline: true})
			.addFields({name: "__Level 80:__",
						value: "28k niney and 3 similar outfit of the same character or 3 Komainus",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "Now about the materials.",
						value: "\u200B"}) //Materials
			.addFields({name: "__**The Hammer**__",
						value: "You can get them during the daily stage.\nYou can get the master hammer from all the difficulty, the Sacred from the Chunin and Jounin, and the Amaterasu hammer only from the Jounin"}) //Hammer
			.addFields({name: "__**The keys**__",
						value: "You can get the silver keys from almost all the stage in season 1, except on the stage 'Front of the School', please be aware that not all the difficulty can give you a key.\nThe gold and rainbows keys, can drop on a few stages in season 2, but also from the daily stage Full of coins"}) //Key
			.addFields({name: "__**The similar outfit and the Komainus**__",
						value: "For each breakthrough, you have to use a similar outfit. By example if you want to breakthrough my dress <:EnjuTsun:535534059300978688> , you will need to prepare the same dress. If you unfortunately don't have one, or want to keep another one, you can use a Komainus.\nYou can get Komainus from the exchange shop, for 1 keystone, you can get a normal Komainu, for 3 keystone, you will get a 3 star Komainu, and for the small price of 8 keystone, you will own a 4 star Komainu."}) //Similar outfit
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "\u200B",
						value: "I'm sorry "+"<@"+message.author.id+">"+" I don't know every thing about the breakthrough, please wait a few days, and I might know everything"})

        message.channel.send({ embeds: [embedTipsSend]})
		    message.channel.send({ embeds: [embedTipsSend2]})
      }
      else if (message.content==="7") {
		  const embedTipsSend=new Discord.MessageEmbed()
  			.setTitle("Strong and early 3* weapons")
  			.setFooter("Tips Command")
  			.addFields({name: "\u200B",
						value: "You can have access to some of the strongest 3* weapons very early in the game. They are the weapons in the exchange shop. They have in fact, better stats than the equivalent in the tools gacha."})
  			.addFields({name: "\u200B",
  						value: "\u200B"})
        message.channel.send({ embeds: [embedTipsSend]})
      }
      else if (message.content==="8") {
		  const embedTipsSend=new Discord.MessageEmbed()
  			.setTitle("Training")
  			.setFooter("Tips Command")
  			.addFields({name: "\u200B",
						value : "You can train your outfits in the training. You can put a level 30 outfits and a level 1 in the 4h, and do something similar with the 8h."})
  			.addFields({name: "\u200B",
  						value: "\u200B"})
        message.channel.send({ embeds: [embedTipsSend]})
      }
      else if (message.content==="9") {
		  const embedTipsSend=new Discord.MessageEmbed()
  			.setTitle("Enemies attack type")
  			.setFooter("Tips Command")
  			.addFields({name: "\u200B",
						value: "Just like our heroine, the enemies deal either physical or shinobi damage, based on their appearance."})
  			.addFields({name: "\u200B",
  						value: "\u200B"})
			.addFields({name: "__Shinobi:__",
						value: "Kunoichi\nFox",
						inline: true})
			.addFields({name: "__Physical:__",
						value: "Kazuki\nRobot\nRaven\nSpiders",
						inline: true})
		  message.channel.send({ embeds: [embedTipsSend]})
	  }
    })
  }

  /*
    Command : gacha
    Parameter : None
    Return : A string
  */
  else if(command ==="gacha") {
    message.channel.send("Rate up is a lie");
  }

  /*
    Command : Election
    Parameter: None
    Return: A string that ping the club, which will also create a reaction to the message
  */

  if(command === "elections") {
	  if(message.author.id == botOwnerID){
		message.channel.send("Hello.\nAfter this week, where you got the time to vote, it is time to announce the result "+args[0]+".\nThe new president of the club is: "+args[1]).then((message) => message.pin())
	  }
  }

  /*
    Command : hug
    Parameter : None
    Return : A string
  */
  else if(command === "hug") {
    message.channel.send("Moshi moshi, Police desu ka ?");
  }

  /*
    Command : test
    Parameter : None
    Return : String if the caller is the bow owner
  */
  else if(command ==="test"){
    if (message.author.id==botOwnerID){
      message.channel.send("Yes ?");
    }
  }

  /*
    Command : Congratulation
    Parameter : A mention
    Return: A random string that get edited after 10s
  */
  else if (command ==="congrats") {
    const taggedUser = message.mentions.users.first();
    const randomCongrats = Math.round(Math.random()*(100-1)+1);
    if (taggedUser!==undefined){
      if(randomCongrats%2==0){
        message.channel.send("Congratulation "+"<@"+taggedUser+">"+", I will hire the best cook to celebrate it !").then((msg)=>{
        setTimeout(function(){
          msg.edit("W-what ? There is no need to go to such length ? W-well, fine so, I won't.");
        }, 10000)
        })
      } else {
        message.channel.send("Congratulation "+"<@"+taggedUser+">, if you want we can celebrate it in the club room.").then((msg) => {
          setTimeout(function() {
            msg.edit("D-Don't get any wrong idea about this.\nHentai.");}, 10000)
          })
        }
      }
    }

  /*
    Command : roll
    Parameter : 2 string, one for the type of roll, the other for the number
    Return: An embed with the result of the roll
  */
  else if (command ==="roll") {
    if(message.channel.name==="spam-only"||message.channel.name==="cy’s-playground"){

      const numberOfRoll = args[1]; //We save the number of roll the user want to do

      if((numberOfRoll>1 && numberOfRoll<10) || numberOfRoll>10){ //If it isn't 1 or 10, we say no
        message.reply({content: "You have to input either 1 or 10 in order to roll, not "+numberOfRoll+".", allowedMentions: { repliedUser: true}});
      } else {

        let tabPity = []; //Array that will own the value of the random rarity for the pity system
        let tabResult = []; //Array that will own the result of the rolls

        let currentRoll = 1; //We track at which roll we are
        var randomRarity; //Random rarity
        var randomObject; //Random object taken from the rarity
        let randomCharacter = Math.floor(Math.random()*data.length); //A random character in the data array
        let randomColor = Math.floor(Math.random()*16777214)+1; //Random color between 1 and 16777215

        let indexPity = 0;
        let indexRarity = -1;

        let pityBool = true; //Boolean to know if we can have access to the pity or not.

        let category = args[0].toLowerCase();

        while (currentRoll<=numberOfRoll) { //Loop until we have done the same amount of roll than the one chosen
          if(pityBool){ //It's the normal case
            randomRarity = Math.floor(Math.random()*100);
          }

          if(currentRoll == 10) { //If we are at the tenth roll...
            for(indexPity; indexPity < tabPity.length; indexPity++){ //We will loop through the array tabPity...
              if(tabPity[indexPity] < 20){ //We look if we have an object with a rarity at 3* or 4*
                pityBool=false; //If we have one, then we will won't change the value of pityBool
              }
            }
            if(pityBool){ //If we don't have one, we will reroll randomRarity with an int between 0 and 19
              randomRarity = Math.floor(Math.random()*20);
            }
          }

          if(randomRarity<5){
            indexRarity=0; //4*
          } else if(randomRarity<20){
            indexRarity=1; //3*
          } else {
            indexRarity=2; //2*
          }

          tabPity.push(randomRarity); //We push the value in the tab for the pity.

          switch (category) {
            case "tool":
            case "tools":
              randomObject= Math.floor(Math.random()*dataRoll[0][indexRarity].length); //Random number between 0 and the number of item in the array
              tabResult.push(dataRoll[0][indexRarity][randomObject]); //We push the texte in the array of the result
              break;
            case "body":
              randomObject= Math.floor(Math.random()*dataRoll[1][indexRarity].length); //Random number between 0 and the number of item in the array
              tabResult.push(dataRoll[1][indexRarity][randomObject]); //We push the texte in the array of the result
              break;

          }
          currentRoll++; //We incremente the value because we go to the next roll
        }

        if(numberOfRoll==10){
          shuffle(tabResult); //We shuffle if we made 10 rolls
        }
        const embedRoll = new Discord.MessageEmbed()
          embedRoll.setAuthor("Salt Dispenser")
          embedRoll.setTitle("Result of your roll")
          embedRoll.setThumbnail(data[randomCharacter][13])
          embedRoll.setColor(randomColor)
          for(counterRoll=0; counterRoll < tabResult.length; counterRoll++){ //We will create as many fields as there is of item in tabResult
            embedRoll.addFields({name: "Roll number "+(counterRoll+1)+":", value: tabResult[counterRoll]})
          }
        message.channel.send({ embeds: [embedRoll]})
      }
    }
	}

  /*
    Command : profile
    Parameter: Name of one of the girls
    Return: Reply if there wasn't a name, Message if the name wasn't recognized, an embed else
  */
  else if(command ==="profile"){
    if (!args.length) { //Test if there is an argument or not
      return message.channel.send( //Send an reply to the author of the command call
        `You didn't provide any arguments, baka, ${message.author}!`
      );
    }

    let indexPosition = givePositionIndex(args[0]); //We use a function to get the position of the girl in the list

    if(indexPosition === -1){
      message.channel.send("Are you sure you didn't made a mistake in the name ?")
      return; //If not found, then we stop the execution
    }

    const monthString = monthToString(data[indexPosition][2][1]) //Call to the function monthToString, to get a String with the name of the month

    if(indexPosition!=-1){ //If the girl was found, then we create an embed
      const embedTest = new Discord.MessageEmbed()
        .setTitle(data[indexPosition][0]+ " "+ data[indexPosition][1])
        .setColor(data[indexPosition][14])
        .setFooter(data[indexPosition][0]+" "+data[indexPosition][1]+" profile page")
        .setThumbnail(data[indexPosition][13])
        .setImage(data[indexPosition][13])
        .addFields({name: "Unique gift:",
                    value: data[indexPosition][6][0]})
        .addFields({name: "Normal gifts:",
                    value: data[indexPosition][6][1]})
        .addFields({name:"\u200B",
                    value:"\u200B"})
        .addFields({name:"Trivia",
                    value:"\nSeyuu: "+data[indexPosition][7]+"\nThree sizes: "+data[indexPosition][5][0]+"/"+data[indexPosition][5][1]+"/"+data[indexPosition][5][2]+"\nBust Size: "+data[indexPosition][5][3]+"\nBirthday: "+data[indexPosition][2][0]+" "+monthString+"\nZodiac sign: "+data[indexPosition][3]+"\nEye color: "+data[indexPosition][8]+"\nHair color: "+data[indexPosition][9]+"\nHobbies: "+data[indexPosition][10]+"\nLikes: "+data[indexPosition][11]})
      message.channel.send({ embeds: [embedTest]})
    }
  }

  /*
    Command: data
    Parameter: a string or nothing
    Return: An embed which rank the girl based on the parameter, or a top 3 of each category
  */
  else if(command==="data"){
	if (args[0]==="height") {
		data.sort(function(a,b){return b[4]-a[4]}); //We sort the array based on the height
		let embedHeight = new Discord.MessageEmbed()
      embedHeight.setTitle("Ranking based on the height") //We create the title for the embed
      for(counterData=0; counterData<data.length; counterData++){ //For loop to create all the addFields needed
        embedHeight.addFields({name: "\u200B", value: (counterData+1)+") "+data[counterData][0]+" "+data[counterData][4]+"cm\n"})
      }

    message.channel.send({ embeds: [embedHeight]})

	} else if (args[0]=="bust") {
		data.sort(function(a,b){return b[5][0]-a[5][0]});
		let embedBust = new Discord.MessageEmbed()
      embedBust.setTitle("Ranking based on the bust")
      for(counterData=0; counterData<data.length; counterData++){
        embedBust.addFields({name: "\u200B", value: (counterData+1)+")  "+data[counterData][0]+" "+data[counterData][5][0]+"cm\n"})
      }
    message.channel.send({ embeds: [embedBust]});

	} else if (args[0]=="waist") {
		data.sort(function(a,b){return b[5][1]-a[5][1]});
    let embedWaist = new Discord.MessageEmbed()
      embedWaist.setTitle("Ranking based on the waist")
      for(counterData=0; counterData<data.length; counterData++){
        embedWaist.addFields({name: "\u200B", value: (counterData+1)+")  "+data[counterData][0]+" "+data[counterData][5][1]+"cm\n"})
      }
    message.channel.send({ embeds: [embedWaist]});

	} else if (args[0]=="hips") {
		data.sort(function(a,b){return b[5][2]-a[5][2]});
    let embedHips = new Discord.MessageEmbed()
      embedHips.setTitle("Ranking based on the hips")
      for(counterData=0; counterData<data.length; counterData++){
        embedHips.addFields({name: "\u200B", value: (counterData+1)+")  "+data[counterData][0]+" "+data[counterData][5][2]+"cm\n"})
      }
    message.channel.send({ embeds: [embedHips]});

	} else { //We sort before each category, making it a more general and easier code
		const embedData=new Discord.MessageEmbed()
      embedData.setTitle("Summary on the data.")
			embedData.setColor(5294200)
			embedData.setFooter("You big hentai")

      data.sort(function(a,b){return b[4]-a[4]});
			embedData.addFields({name:"The 3 tallest girls", value:"1. "+data[0][0]+" "+data[0][4]+"cm\n2. "+data[1][0]+" "+data[1][4]+"cm\n3. "+data[2][0]+"  "+data[2][4]+"cm"})
			embedData.addFields({name:"\u200B", value:"\u200B"})

      data.sort(function(a,b){return b[5][0]-a[5][0]});
			embedData.addFields({name: "The largest bust", value:"1. "+data[0][0]+" "+data[0][5][2]+"cm\n2. "+data[1][0]+" "+data[1][5][2]+"cm\n3. "+data[2][0]+" "+data[2][5][2]+"cm", inline:true})

      data.sort(function(a,b){return b[5][1]-a[5][1]});
			embedData.addFields({name: "The largest waist", value:"1. "+data[0][0]+" "+data[0][5][1]+"cm\n2. "+data[1][0]+" "+data[1][5][1]+"cm\n3. "+data[2][0]+" "+data[2][5][1]+"cm", inline:true})

      data.sort(function(a,b){return b[5][2]-a[5][2]});
			embedData.addFields({name: "The largest hips", value:"1. "+data[0][0]+" "+data[0][5][2]+"cm\n2. "+data[1][0]+" "+data[1][5][2]+"cm\n3. "+data[2][0]+" "+data[2][5][2]+"cm", inline:true})
		message.channel.send({ embeds: [embedData]});
	 }
  }

  /*
    Command: ranking
    Parameter: Name of a girl
    Return: An embed with the rating of a girl
  */
  else if(command === "ranking"){
    if (!args.length) { //Test if there is an argument or not
      return message.channel.send( //Send an reply to the author of the command call
        `You didn't provide any arguments, baka, ${message.author}!`
      );
    }
    let indexGirl = givePositionIndex(args[0]);

    if(indexGirl != -1){
      const embedRanking = new Discord.MessageEmbed()
        embedRanking.setTitle(data[indexGirl][0]+" "+data[indexGirl][1]+" ranking")
        embedRanking.setColor(data[indexGirl][14])
        embedRanking.addFields({name: "__Physical information:__", value:"\u200B"})

        positionRank = givePositionRanking(data[indexGirl][0], "height")
        embedRanking.addFields({name: "Height:", value: positionRank+"th on "+data.length, inline: true})


        positionRank = givePositionRanking(data[indexGirl][0], "bust")
        embedRanking.addFields({name: "Bust:", value: positionRank+"th on "+data.length, inline: true})

        embedRanking.addFields({name:"\u200B", value:"\u200B", inline:true})

        positionRank = givePositionRanking(data[indexGirl][0], "waist")
        embedRanking.addFields({name: "Waist:", value: positionRank+"th on "+data.length, inline: true})

        positionRank = givePositionRanking(data[indexGirl][0], "hips")
        embedRanking.addFields({name: "Hips:", value: positionRank+"th on "+data.length, inline: true})

        embedRanking.addFields({name: "\u200B", value: "\u200B"})
        embedRanking.addFields({name:"__Personal statistic:__", value:"\u200B"})

        for(counterPersonal=0; counterPersonal<data[indexGirl][12].length; counterPersonal++){
          embedRanking.addFields({name: data[indexGirl][12][counterPersonal][0], value:data[indexGirl][12][counterPersonal][1]+" on 10", inline: true})
        }
      message.channel.send({ embeds: [embedRanking]})
    }
  }

  /*
    Command : Zap
    Parameter : A mention or a string
    Return : A string based on the parameter
  */
  else if(command==="zap") {
    const taggedUser = message.mentions.users.first(); //We get the first mention
    if (taggedUser!==undefined) { //If taggedUser is not undefined...
      if (taggedUser.id === message.author.id) { //If the author of the message tagged himself...
        message.channel.send("<@"+message.author.id+"> is a masochistic Hentai."); //We send this message
        message.channel.send('<a:EnjuZap:653780228933681192>')
      } else if(taggedUser.id === '758252653435944970' ||taggedUser.id === '720943363679059979') { //If he tag the bot or another bot then...
        message.channel.send("*Focus*").then((msg) => { //We send a message, and we will..
          setTimeout(function() { msg.edit("Mega zap on <@"+message.author.id+">"); //edit the message...
        }, 1000) //after 1s
        })
      } else {
        message.channel.send("Zap at <@"+taggedUser+">")
      }
    } else if(taggedUser === undefined){
      message.channel.send("Zap at "+args.join(' '))
    } else {
      message.channel.send("Zap on everybody")
    }
}

  /*
    Command : whip
    Parameter : A mention or a string
    Return : A string based on the parameter
  */
  else if(command ==="whip") {
  const taggedUser = message.mentions.users.first(); //We get the first mention
  if (taggedUser!==undefined) { //If taggedUser is not undefined...
    if (taggedUser.id === message.author.id) { //If the author of the message tagged himself...
      message.channel.send("<@"+message.author.id+"> is a masochistic pervert."); //We send this message
      message.channel.send('<a:RanExposed:745341250852356186>')
    } else if(taggedUser.id === '758252653435944970' ||taggedUser.id === '720943363679059979') { //If he tag the bot or another bot then...
      message.channel.send("*Focus*").then((msg) => { //We send a message, and we will..
        setTimeout(function() { msg.edit("Mega whip on <@"+message.author.id+">"); //edit the message...
      }, 1000) //after 1s
      })
    } else {
      message.channel.send("Whip at <@"+taggedUser+">")
      message.channel.send("<a:LMyuWhip1:676408951537139732><a:LMyuWhip2:676409245263986731>")
    }
  } else if(taggedUser === undefined){
    message.channel.send("Whip at "+args.join(' '))
  } else {
    message.channel.send("Whip on everybody")
  }
}

 /*
   Command: ninjutsu
   Parameter: A mention or a string
   Return: A random message, and possibly add someone in the deadList array
 */
 else if (command ==="ninjutsu") {
   if (!args.length) { //We look if there is an argument
     message.channel.send("There is no target <@"+message.author.id+">"); //if there isn't, we send this message
   } else {
     let target = args; //We save the argument there
     let isMention = message.mentions.users.first(); //We save the first mention in the argument list. no mention = undefined
     let randomNinjutsu = Math.round(Math.random()*(150-1)+1); //We create a random number, that is used to choose which ninjutsu is used
     let randomNinjutsuSuccess = Math.round(Math.random()*(150-1)+1); //New variable that will indicate if the ninjutsu was a success or a failure
     if(randomNinjutsuSuccess<60){ //If it's even, it's a success
       if(randomNinjutsu < 11) {
         string = "You used a fire jutsu on "+target.join(' ')+".\n"+target.join(' ')+" suffer from small burn of it, but survive.";
       } else if (randomNinjutsu < 13) {
         string = "You used a fire jutsu on "+target.join(' ')+".\n"+target.join(' ')+" suffer from heavy burn of it, but survive.";
       } else if (randomNinjutsu < 20) {
         string = "You used a fire jutsu on "+target.join(' ')+".\n"+target.join(' ')+" has been killed from it.";
         death(isMention); //We use the death function to add the mention to the deadList array
       } else if (randomNinjutsu < 35) {
         string = "You used a shadow jutsu on "+target.join(' ')+", this person can't move anymore.";
       } else if (randomNinjutsu < 46) {
         string = "You used a shadow jutsu on "+target.join(' ')+".\nThis person is now imprisoned in the shadow world.";
       } else if (randomNinjutsu < 57) {
         string = "You used a water jutsu on "+target.join(' ')+".\nYou healed "+target.join(' ')+".";
       } else if (randomNinjutsu < 63) {
         string = "You used a water jutsu on "+target.join(' ')+".\nThe water blade made some small cut on "+target.join(' ')+".";
       } else if (randomNinjutsu < 74) {
         string = "You used a water jutsu on "+target.join(' ')+".\nThe swift water blade kill "+target.join(' ')+".";
         death(isMention);
       } else if (randomNinjutsu < 84) {
         string = "You used a genjutsu technique on "+target.join(' ')+".\n"+target.join(' ')+" now think he/she changed his/her gender.";
       } else if (randomNinjutsu < 94) {
         string = "You used a wind jutsu on "+target.join(' ')+".\n"+target.join(' ')+" is now levitating in the sky.";
       } else if (randomNinjutsu < 104) {
         string = "You used a summon ninjutsu. You summoned a dog.\nThe dog started to attack "+target.join(' ')+".\n"+target.join(' ')+" ran away.";
       } else if (randomNinjutsu < 115) {
         string = "You used a summon ninjutsu. You summoned a dog.\nThe dog started to attack "+target.join(' ')+".\n"+target.join(' ')+" got killed by it.";
         death(isMention);
       } else if (randomNinjutsu < 125) {
         randomVTuberSimp=Math.round(Math.random()*vTuberSimp.length-1); //Random variable to pick a random vTuber from the list
         string = "You used a genjutsu technique on "+target.join(' ')+".\n"+target.join(' ')+" is now the biggest simp of "+vTuberSimp[randomVTuberSimp]+".";
       } else if (randomNinjutsu < 136) {
         string = "You used a special ninjutsu on "+target.join(' ')+".\n"+target.join(' ')+" is now a pepega.";
       } else if (randomNinjutsu < 141) {
         string = "You used a special ninjutsu on "+target.join(' ')+".\n"+target.join(' ')+" feel compulsed to go in the horny jail.";
       } else if (randomNinjutsu < 146) {
         string = "You used a forbidden ninjutsu on "+target.join(' ')+".\nYou both started to hear some truck noise nearby.\nThe truck drive towards "+target.join(' ')+".\n"+target.join(' ')+" just got isekaied.";
       } else if (randomNinjutsu < 148) {
         string = "You used a lightning ninujtsu on "+target.join(' ')+".\n"+target.join(' ')+" got shocked to death.";
         death(isMention);
       } else if (randomNinjutsu < 149) {
         string = "You used an eart jutsu on "+target.join(' ')+".\n"+target.join(' ')+" got crushed to death by the rocks.";
         death(isMention);
       } else {
         string = "You used a special ninjutsu.\nNothing happen, you look like an idiot."
       }
     } else { //If it's odd, it's a failure
       if(randomNinjutsu < 11) {
         string = "You used a fire jutsu on "+target.join(' ')+", but you made a mistake.\nYou suffer from small burn of it, but survive.";
       } else if (randomNinjutsu < 13) {
         string = "You used a fire jutsu on "+target.join(' ')+", but you made a mistake.\nYou suffer from heavy burn of it, but survive.";
       } else if (randomNinjutsu < 20) {
         string = "You used a fire jutsu on "+target.join(' ')+", but you made a mistake.\nYou has been killed from it.";
         deadList.push(message.author.id) //We add the author of the message in the deadList array
       } else if (randomNinjutsu < 35) {
         string = "You used a shadow jutsu on "+target.join(' ')+", but you made a mistake.\nYou can't move anymore.";
       } else if (randomNinjutsu < 46) {
         string = "You used a shadow jutsu on "+target.join(' ')+", but you made a mistake.\nYou are now imprisoned in the shadow world.";
       } else if (randomNinjutsu < 57) {
         string = "You used a water healing jutsu on "+target.join(' ')+", but you made a mistake.\nYou killed "+target.join(' ')+".";
         death(isMention);
       } else if (randomNinjutsu < 63) {
         string = "You used a water jutsu on "+target.join(' ')+", but you made a mistake.\nThe water blade made some small cut on yourself.";
       } else if (randomNinjutsu < 74) {
         string = "You used a water jutsu on "+target.join(' ')+", but you made a mistake.\nThe swift water blade kill you.";
         deadList.push(message.author.id)
       } else if (randomNinjutsu < 84) {
         string = "You used a genjutsu technique on "+target.join(' ')+", but you made a mistake.\nYou now think you are of the opposite gender.";
       } else if (randomNinjutsu < 94) {
         string = "You used a wind jutsu on "+target.join(' ')+", but you made a mistake.\nYou are now levitating in the sky.\nCan you see "+target.join(' ')+" house from there ?";
       } else if (randomNinjutsu < 104) {
         string = "You used a summon ninjutsu. You summoned a dog, but you made a mistake.\nThe dog started to attack <@"+message.author.id+">.\nYou ran away.";
       } else if (randomNinjutsu < 115) {
         string = "You used a summon ninjutsu. You summoned a dog, but you made a mistake.\nThe dog started to attack <@"+message.author.id+">.\nYou got killed by it.";
         deadList.push(message.author.id)
       } else if (randomNinjutsu < 125) {
         randomVTuberSimp=Math.round(Math.random()*vTuberSimp.length-1);
         string = "You used a genjutsu technique on "+target.join(' ')+", but you made a mistake.\nYou are now the biggest simp of "+vTuberSimp[randomVTuberSimp]+".";
       } else if (randomNinjutsu < 136) {
         string = "You used a special ninjutsu on "+target.join(' ')+", but you made a mistake.\nYou are now a pepega.";
       } else if (randomNinjutsu < 141) {
         string = "You used a special ninjutsu on "+target.join(' ')+", but you made a mistake.\nYou feel compulsed to go in the horny jail.";
       } else if (randomNinjutsu < 146) {
         string = "You used a forbidden ninjutsu on "+target.join(' ')+".\nYou both started to hear some truck noise nearby.\nThe truck drive towards you.\nYou got isekaied.";
       } else if (randomNinjutsu < 148) {
         string = "You used a lightning ninujtsu on "+target.join(' ')+", but you made a mistake.\nYou got shocked to death.";
         deadList.push(message.author.id)
       } else if (randomNinjutsu < 149) {
         string = "You used an eart jutsu on "+target.join(' ')+", but you made a mistake.\nYou got crushed to death by the rocks.";
         deadList.push(message.author.id)
       } else {
         string = "You used a special ninjutsu.\nNothing happen, you look like an idiot."
       }
     }
     message.channel.send(string.toString());
   }
 }

 /*
  Command : dead
  Parameter : None
  Return : If the caller is the owner of the bot, will send 1 message with a mention of the people still dead
 */
 else if (command === "dead") {
   if (message.author.id==botOwnerID) {
     for (counter=0; counter<deadList.length; counter++) {
       message.channel.send((counter+1)+") "+"<@"+deadList[counter]+">"+"\n")
     }
   } else {
     message.channel.send("You can't see it")
   }
 }

 /*
  Command : revive
  Parameter : A mention
  Return : A string and will remove one iteration of the people pinged if they are dead
 */
 else if (command === "revive") {
   let index=-1
   target=message.mentions.users.first().id
   if (target == undefined) return; //Stop the command if no target
   for (counter=0; counter<deadList.length; counter++) {
     if (deadList[counter] === target) {
       index=counter
     }
   }
   if (index === -1) {
     message.channel.send("<@"+target+">"+" isn't dead *yet*")
   } else {
     message.channel.send("<@"+target+">"+" has been ressurected !")
     deadList.splice(index, 1)
   }
 }

 /*
  Command: birthday
  Parameter: None
  Return: A message with the number of days left the next birthday
 */
 else if (command ==="birthday") {
  const month=date.getMonth(); //We retrieve the current day, and we save it in a var
  const day=date.getDate(); //We retrieve the current month as an int from 0 to 11, and we save it in a var
  const year=date.getFullYear(); //We retrieve the current year and we save it in a var
   if (args[0]=== undefined) {
    let testSameMonth = -1; //We create a var that will be used to indicate if a girl in the list has a birthday this month, and after the current day
    var indexBirthday = -1; //Index used at the end to indicate in the array the girl with the next birthday
    var tempDayVar = 100; //Var used to calculate which girl has a day that is  near the start of the month, or of the current day

    let birthdayArray = []; //Empty array that will be filled with the girl meeting the criteria of not having their birthday yet

    if((month==11) && (day>6) ){ //Test to see if we are the 7th December or after, there is no birthday after the 6th December atm
      daysLeft=daysLeftInMonth(day, month, year); //We calculate how many days are left in this month with this function
      daysLeftBeforeBirthday = daysLeft+23; //We send add the 23 days of the first anniversary of the year
      message.channel.send("There is "+daysLeftBeforeBirthday+" days before Yamabuki birthday !");
    }

    for (counterBirthday=0; counterBirthday<data.length; counterBirthday++) {
      if (((data[counterBirthday][2][1]==(month+1))&&(data[counterBirthday][2][0]>=day))||(data[counterBirthday][2][1]==(month+2))) { //We look for girls that have their birthday after the current day
        var tempArray=[]; //We create a temporary array, where we will stock ...
        tempArray.push(data[counterBirthday][0]); //... the name of the girl...
        tempArray.push(data[counterBirthday][2]); //... and the date of her birthday
        birthdayArray.push(tempArray); //Then we push it in the cetral array
        if(data[counterBirthday][2][1]==(month+1)) { //We do a small test if the girl has her birthday this month or not
          testSameMonth=1; //If yes, then we change the value to 1
        }
      }
    }

    if(testSameMonth==1){ //If a girl has her birthday this month, then we enter here
      for(counterBirthdaySameMonth=0; counterBirthdaySameMonth<birthdayArray.length; counterBirthdaySameMonth++){ //We do a for loop in order to find which girl has her birthday the closest this month
        if((birthdayArray[counterBirthdaySameMonth][1][1]==(month+1))&&(birthdayArray[counterBirthdaySameMonth][1][0]<tempDayVar)){ //We ask, is it the same month than this and if the day is smaller than the one saved in tempDayVar
          tempDayVar=birthdayArray[counterBirthdaySameMonth][1][0]; //If yes, then we change the day saved in tempDayVar with the new one
          indexBirthday=counterBirthdaySameMonth; //And we save her position in the index
        }
      }
      daysLeftBeforeBirthday = tempDayVar - day; //Then we calculate the difference between the value saved in tempDayVar and the current day
    } else { //No girls have a birthday this month
      var tempMonthVar=100; //We create a local temporary variable to look for the next month where there is a birthday
      for(counterBirthdayDifferentMonth=0; counterBirthdayDifferentMonth<birthdayArray.length; counterBirthdayDifferentMonth++){
        if(birthdayArray[counterBirthdayDifferentMonth][1][1]<tempMonthVar) { //If it is smaller than the one saved in the variable
          tempMonthVar=birthdayArray[counterBirthdayDifferentMonth][1][1]; //Then we save it inside the variable
        }
      }
      for(counterBirthdayDifferentMonth=0; counterBirthdayDifferentMonth<birthdayArray.length; counterBirthdayDifferentMonth++){ //New for loop to look for the smallest day in the month saved inside tempMonthVar
        if((birthdayArray[counterBirthdayDifferentMonth][1][1]==tempMonthVar)&&(birthdayArray[counterBirthdayDifferentMonth][1][0]<tempDayVar)){
          tempDayVar=birthdayArray[counterBirthdayDifferentMonth][1][0];
          indexBirthday=counterBirthdayDifferentMonth;
        }
      }
      daysLeft = daysLeftInMonth(day, month, year); //We calculate how much days is left in this month...
      daysLeftBeforeBirthday = birthdayArray[indexBirthday][1][0] + daysLeft; //...and we add it to the day of the birthday
    }

    message.channel.send("There is "+daysLeftBeforeBirthday+" days before "+birthdayArray[indexBirthday][0]+" birthday!"); //Message that will be sent, where the numbers of days is saved in each category, and the name is looked in the array
   } else {
     let birthdayCandidate = givePositionIndex(args[0]);
     if(birthdayCandidate===-1) return message.channel.send("Are you sure you didn't made a mistake in the name ?")
     let todayDate = new Date(year, month, day); //Today date
     let girlDate = new Date(year, data[birthdayCandidate][2][1]-1, data[birthdayCandidate][2][0]);

     if((data[birthdayCandidate][2][1] == month +1) && (data[birthdayCandidate][2][0] < day)) {
      girlDate.setFullYear(girlDate.getFullYear() +1)
     } else if (data[birthdayCandidate][2][1] < month+1) {
      girlDate.setFullYear(girlDate.getFullYear() +1)
     }

     let oneDay = 1000*60*60*24 //Number of millisecond in 1 day

     let numberOfDaysLeft = Math.floor((girlDate.getTime() - todayDate.getTime() )/ oneDay)

     message.channel.send("There is "+numberOfDaysLeft+" days left before "+data[birthdayCandidate][0]+" birthday.")
   }
 }

 /*
  Command: fm
  Parameter: None
  Return: A string that indicate if the user can beat the stage or not
 */
 else if (command === "fm") {
   //Creation of the variable
   let valueStage;
   let valueWeakness;
   let valueFire;
   let valueIce;
   let valueThunder;
   let valueLevel;
   let valueShuriken;

   //We collect the data through the function fmCollector, to keep the command short
   message.reply("Which stage do you select ?\n*Just need to input a number, final stage is 10.*").then(message => {setTimeout(() => message.delete(), 30000)});
   const collector = new Discord.MessageCollector( message.channel, { filterFm, max: 1, time: 60000 });
   collector.on('collect', message => {
     if ((message.content>=1) && (message.content<=10)){
       valueStage = message.content;
       message.reply("What is the weakness of the stage ? *(fire, ice or thunder only)*").then(message => {setTimeout(() => message.delete(), 30000)}); //Message will delete after 1minute
       const collector = new Discord.MessageCollector(message.channel, { filterFm, max: 1, time: 60000 });
       collector.on('collect', message => {
         let valueWeak = message.content.toLowerCase();
         if((valueWeak=="fire")||(valueWeak=="ice")||(valueWeak=="thunder")){
           valueWeakness = valueWeak;
           message.reply("What is the value of your fire power ?").then(message => {setTimeout(() => message.delete(), 30000)});
           const collector = new Discord.MessageCollector(message.channel, { filterFm, max: 1, time: 60000 });
           collector.on('collect', message => {
             if (message.content < 0) { //Protection for negative answer
               message.reply("You can't have a negative power, **baka**.\nEnd of the command.");
               return;
             }
             valueFire = message.content;
             message.reply("What is the value of your ice power ?").then(message => {setTimeout(() => message.delete(), 30000)});
             const collector = new Discord.MessageCollector(message.channel,  { filterFm, max: 1, time: 60000 });
             collector.on('collect', message => {
              if (message.content < 0) {
                message.reply("You can't have a negative power, **baka**.\nEnd of the command.");
                return;
              }
               valueIce = message.content;
               message.reply("What is the value of your thunder power ?").then(message => {setTimeout(() => message.delete(), 30000)});
               const collector = new Discord.MessageCollector(message.channel,  { filterFm, max: 1, time: 60000 });
               collector.on('collect', message => {
                if (message.content < 0) {
                  message.reply("You can't have a negative power, **baka**.\nEnd of the command.");
                  return;
                }
                 valueThunder = message.content;
                 message.reply("What is your current level ?").then(message => {setTimeout(() => message.delete(), 30000)});
                 const collector = new Discord.MessageCollector(message.channel,  { filterFm, max: 1, time: 60000 });
                 collector.on('collect', message => {
                  if (message.content < 1) {
                    message.reply("You can't have a negative level or a level at 0, **baka**.\nEnd of the command.");
                    return;
                  }
                   valueLevel = message.content;
                   message.reply("How much Shuriken do you own ?").then(message => {setTimeout(() => message.delete(), 30000)});
                   const collector = new Discord.MessageCollector(message.channel,  { filterFm, max: 1, time: 60000 });
                   collector.on('collect', message => {
                    if (message.content < 0) {
                      message.reply("You can't have a negative amount of shuriken, **baka**.\nEnd of the command.");
                      return;
                    }
                     valueShuriken=message.content;

                     //New variable for the sake of the calcul
                     let valuePower;
                     let valuePowerJuice;
                     let fmCounter;
                     let stageHealth;
                     let counterLimit;
                     let numberTurn;
                     let numberTurnJuice;

                     //We calcul the total power of the author based on the weakness of the stage
                     let powerFire = parseInt(valueFire, 10);
                     let powerIce = parseInt(valueIce, 10);
                     let powerThunder = parseInt(valueThunder, 10);
                     let powerLevel = parseInt(valueLevel, 10);
                     let powerShuriken = parseInt(valueShuriken, 10);

                     //We make the calcul to know the power of  the user
                     if (valueWeakness == "fire") {
                       valuePower = powerFire *2 + powerIce + powerThunder + powerLevel + powerShuriken;
                       valuePowerJuice = powerFire *3 + powerIce + powerThunder + powerLevel + powerShuriken;
                     } else if (valueWeakness == "ice") {
                       valuePower = powerFire + powerIce*2 + powerThunder + powerLevel + powerShuriken;
                       valuePowerJuice = powerFire + powerIce*3 + powerThunder + powerLevel + powerShuriken;
                     } else if ( valueWeakness == "thunder" ) {
                       valuePower = powerFire + powerIce + powerThunder*2 + powerLevel + powerShuriken;
                       valuePowerJuice = powerFire + powerIce + powerThunder*3 + powerLevel + powerShuriken;
                     } else {
                       message.channel.send("error");
                       return;
                     }


                     //For loop so we can take the value of the selected stage
                     for(counterFor = 0; counterFor < datafm.length; counterFor++){
                       if(valueStage == (counterFor+1)){
                         stageHealth = datafm[counterFor][0];
                         counterLimit = datafm[counterFor][1];
                       }
                     }

                     //We make the calculation of the number of turns required
                     numberTurn = Math.ceil(stageHealth/valuePower);
                     numberTurnJuice = Math.ceil(stageHealth/valuePowerJuice);

                     //Return the result
                     if((numberTurn>counterLimit) && (numberTurnJuice>counterLimit)) {
                       message.reply("You can't beat the stage.\nYou would need "+numberTurn+" turns without juice and "+numberTurnJuice+" turns with juice.\nThe stage has a "+counterLimit+" turns limit.")
                     } else if ((numberTurn>counterLimit) && (numberTurnJuice<=counterLimit) ) {
                       message.reply("You can't beat the stage without juice.\nYou would need "+numberTurn+" turns without them, and "+numberTurnJuice+" turns with it.\nThe stage has a "+counterLimit+" turns limit.\nUse a "+valueWeakness+" juice to beat it.")
                     } else if (numberTurn<=counterLimit) {
                       message.reply("You can beat the stage in "+numberTurn+" turns without juice.")
                     } else {
                       message.channel.send("Error <@"+botOwnerID+">")
                       message.channel.send("numberTurn: "+numberTurn+"\nnumberTurnJuice: "+numberTurnJuice+"\ncounterLimit: "+counterLimit+"\nvaluePower: "+valuePower+"\nvaluePowerJuice: "+valuePowerJuice+"\nStage: "+valueStage)
                     }

                   })
                 })
               })
             })
           })
         } else {
           message.reply("This weakness doesn't exist")
         }
       })
     } else {
     message.reply("This stage doesn't exist.\nEnd of the command.");
   }
 })
 }

 else if (command === "versus") {
   if (args[1] === undefined) { //If the second argument is empty, then we reply that he forgot to add an opponent
     return message.reply({content: "You didn't provided an opponent baka !", allowedMentions: { repliedUser: true}});
   }

   let rightCharacter = givePositionIndex(args[1]); //We save the position of 1 of the character in a variable
   let leftCharacter = givePositionIndex(args[0]); //We save the position of the second character in another variable

   if((rightCharacter === -1) || (leftCharacter === -1)){ //We do a test to see if one of the character hasn't been found
    return message.channel.send("You made an error in one of the name");
   } else if (((rightCharacter == 2) || (leftCharacter == 2)) || ((rightCharacter == 3) || (leftCharacter == 3)) || ((rightCharacter == 8) || (leftCharacter == 8)) || ((rightCharacter == 9) || (leftCharacter == 9)) || ((rightCharacter == 10) || (leftCharacter == 10))) { //Temporary stop until we get the info on the RPG cast
     return message.channel.send("We don't have all the info for one of the person, so we can't do the fight.");
   } else if (rightCharacter === leftCharacter) { //Test to see if the same character is on the 2 side
     return message.channel.send("That's the same character, aho !")
   }

   //Declaration of variable
   let rightCharacterScore = 0; //Score of the right character
   let leftCharacterScore = 0; //Score of the left character

   let winnerRound = undefined; //Just a small variable that will change for every round
   let announcementWinner = undefined; //Will be used to say who won the round

   const versusEmbed = new Discord.MessageEmbed()
    versusEmbed.setTitle(data[rightCharacter][0]+" "+data[rightCharacter][1]+" versus "+data[leftCharacter][0]+" "+data[leftCharacter][1])

    versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: false})

    //Height round

    winnerRound = versusFight(rightCharacter, leftCharacter, 4, 0); //We search for the winner

    if(winnerRound == rightCharacter){ //If the winner is the right character
      rightCharacterScore+=1; //We increase the score
      announcementWinner = data[rightCharacter][0]+" won the round"; //We say she won the round
    } else if (winnerRound == leftCharacter){
      leftCharacterScore+=1;
      announcementWinner = data[leftCharacter][0]+" won the round";
    } else { //Tie case
      announcementWinner = "It's a tie" //We just announce it's a tie
    }
    versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: true})
    versusEmbed.addFields({name: data[rightCharacter][4]+"    height    "+data[leftCharacter][4], value:announcementWinner, inline: true})
    versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: true})

    //Small jump
    versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: false})

    //Breast round

    winnerRound = versusFight(rightCharacter, leftCharacter, 5, 0);

    if(winnerRound == rightCharacter){
      rightCharacterScore+=1;
      announcementWinner = data[rightCharacter][0]+" won the round";
    } else if (winnerRound == leftCharacter){
      leftCharacterScore+=1;
      announcementWinner = data[leftCharacter][0]+" won the round";
    } else {
      announcementWinner = "It's a tie"
    }
    versusEmbed.addFields({name: data[rightCharacter][5][0]+"    bust    "+data[leftCharacter][5][0], value:announcementWinner, inline: true})

    //Waist round

    winnerRound = versusFight(rightCharacter, leftCharacter, 5, 1);

    if(winnerRound == rightCharacter){
      rightCharacterScore+=1;
      announcementWinner = data[rightCharacter][0]+" won the round";
    } else if (winnerRound == leftCharacter){
      leftCharacterScore+=1;
      announcementWinner = data[leftCharacter][0]+" won the round";
    } else {
      announcementWinner = "It's a tie"
    }
    versusEmbed.addFields({name: data[rightCharacter][5][1]+"    waist    "+data[leftCharacter][5][1], value:announcementWinner, inline: true})

    //Hips round

    winnerRound = versusFight(rightCharacter, leftCharacter, 5, 2);

    if(winnerRound == rightCharacter){
      rightCharacterScore+=1;
      announcementWinner = data[rightCharacter][0]+" won the round";
    } else if (winnerRound == leftCharacter){
      leftCharacterScore+=1;
      announcementWinner = data[leftCharacter][0]+" won the round";
    } else {
      announcementWinner = "It's a tie"
    }
    versusEmbed.addFields({name: data[rightCharacter][5][2]+"    hips    "+data[leftCharacter][5][2], value:announcementWinner, inline: true})

    //Small jump

    versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: false})

    //Strength round

    winnerRound = versusFight(rightCharacter, leftCharacter, 12, 0);

    if(winnerRound == rightCharacter){
      rightCharacterScore+=1;
      announcementWinner = data[rightCharacter][0]+" won the round";
    } else if (winnerRound == leftCharacter){
      leftCharacterScore+=1;
      announcementWinner = data[leftCharacter][0]+" won the round";
    } else {
      announcementWinner = "It's a tie"
    }
    versusEmbed.addFields({name: data[rightCharacter][12][0][1]+"    Strength    "+data[leftCharacter][12][0][1], value:announcementWinner, inline:true})

    //Shinobi round

    winnerRound = versusFight(rightCharacter, leftCharacter, 12, 1);

    if(winnerRound == rightCharacter){
      rightCharacterScore+=1;
      announcementWinner = data[rightCharacter][0]+" won the round";
    } else if (winnerRound == leftCharacter){
      leftCharacterScore+=1;
      announcementWinner = data[leftCharacter][0]+" won the round";
    } else {
      announcementWinner = "It's a tie"
    }
    versusEmbed.addFields({name: data[rightCharacter][12][1][1]+"    Shinobi/Spiritual    "+data[leftCharacter][12][1][1], value:announcementWinner, inline:true})

    //Small Jump

    versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: false})

    //Intelligence round

    winnerRound = versusFight(rightCharacter, leftCharacter, 12, 2);

    if(winnerRound == rightCharacter){
      rightCharacterScore+=1;
      announcementWinner = data[rightCharacter][0]+" won the round";
    } else if (winnerRound == leftCharacter){
      leftCharacterScore+=1;
      announcementWinner = data[leftCharacter][0]+" won the round";
    } else {
      announcementWinner = "It's a tie"
    }
    versusEmbed.addFields({name: data[rightCharacter][12][2][1]+"    Intelligence    "+data[leftCharacter][12][2][1], value:announcementWinner, inline:true})

    //Agility round

    winnerRound = versusFight(rightCharacter, leftCharacter, 12, 3);

    if(winnerRound == rightCharacter){
      rightCharacterScore+=1;
      announcementWinner = data[rightCharacter][0]+" won the round";
    } else if (winnerRound == leftCharacter){
      leftCharacterScore+=1;
      announcementWinner = data[leftCharacter][0]+" won the round";
    } else {
      announcementWinner = "It's a tie"
    }
    versusEmbed.addFields({name: data[rightCharacter][12][3][1]+"    Agility    "+data[leftCharacter][12][3][1], value:announcementWinner, inline:true})

    //Small Jump

    versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: false})

  //Results announcement
  versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: true})
  if(rightCharacterScore > leftCharacterScore){ //Right character wins
    versusEmbed.addFields({name:"Victory", value: data[rightCharacter][0]+" won with "+rightCharacterScore+" points🏆", inline: true})
    versusEmbed.setImage(data[leftCharacter][15][0])
    versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: true})
    message.channel.send({ embeds: [versusEmbed]})
  } else if(rightCharacterScore < leftCharacterScore){ //Left character wins
    versusEmbed.addFields({name:"Victory", value: data[leftCharacter][0]+" won with "+leftCharacterScore+" points🏆", inline: true})
    versusEmbed.setImage(data[rightCharacter][15][0])
    versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: true})
    message.channel.send({ embeds: [versusEmbed]})
  } else {
    versusEmbed.addFields({name: "End of the fight", value:"It's a tie with "+rightCharacterScore+" points.", inline: true})
    versusEmbed.setThumbnail(data[leftCharacter][15][0])
    versusEmbed.setImage(data[rightCharacter][15][0])
    versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: true})
    message.channel.send({ embeds: [versusEmbed]})
  }
 }

 /*
 Command : changelog
 Parameter : None
 Return : An embed
 */
 else if (command=="changelog") {

   const embedChange = new Discord.MessageEmbed()
     .setTitle("Changelog")
     .setColor(5294200)
     .setDescription("Changelog for the version 4.3.0.")
     .addFields({name:"__New feature__",
                 value:"The versus command."})
     .addFields({name:"__Change in the code__",
                 value:"Corrected some typo."})
     .addFields({name:"\u200B",
                 value:"\u200B"})
     .addFields({name:"__Plan to do__",
                 value:"Look below for the corresponding category."})
     .addFields({name: "*__Change in the code__*",
                 value:"For the moment nothing is planned.\n",
                 inline: true})
     .addFields({name: "*__New Feature__*",
                 value:"Quiz command, one day, perhaps.\ncc command.",
                 inline: true})
     .addFields({name: "Next work ?",
                 value: "A side project not related to the server.",
                 inline: true})
   message.channel.send({ embeds: [embedChange]});
 }

  /*
    Command: help
    Parameter: A string or nothing
    Return: A General embed, or an embed for the command in parameter
  */
  else if (command==="help") {
    const help = args[0]; //Look if there is an argument.
    let indexHelp = -1;
    const embedHelp = new Discord.MessageEmbed() //We will create a new embed
      embedHelp.setColor(5294200) //We set the color of the embed
    switch (help) { //We look for the value stored in help
      case "tips":
        indexHelp=0;
        break;
      case "gacha":
        indexHelp=1
        break;
      case "hug":
        indexHelp=2;
        break;
      case "congrats":
        indexHelp=3;
        break;
      case "roll":
        indexHelp=4;
        break;
      case "profile":
        indexHelp=5;
        break;
      case "data":
        indexHelp=6;
        break;
      case "ranking":
        indexHelp=7
        break;
      case "dm":
        indexHelp=8;
        break;
      case "whip":
      case "zap":
        indexHelp=9;
        break;
      case "birthday":
        indexHelp=10;
        break;
      case "ninjutsu":
        indexHelp = 11;
        break;
      case "fight master":
      case "fm":
        indexHelp = 12 ;
        break;
      case "versus":
        indexHelp = 13;
        break;
      default:
        indexHelp=dataHelp.length-1;
    }
      embedHelp.setTitle(dataHelp[indexHelp][0])
      embedHelp.setDescription(dataHelp[indexHelp][1])
      embedHelp.addFields({name: dataHelp[indexHelp][2][0], value: dataHelp[indexHelp][2][1]})
      embedHelp.addFields({name: dataHelp[indexHelp][3][0], value: dataHelp[indexHelp][3][1]})
      embedHelp.addFields({name: dataHelp[indexHelp][4][0], value: dataHelp[indexHelp][4][1]})
      embedHelp.addFields({name: dataHelp[indexHelp][5][0], value: dataHelp[indexHelp][5][1]})
      embedHelp.addFields({name: dataHelp[indexHelp][6][0], value: dataHelp[indexHelp][6][1]})
    message.author.send(embedHelp);
  }

  //To stop the bot
	else if (message.content === prefix + 'sleep') {
	   if (message.author.id==botOwnerID){
		   client.channels.cache.get('697617573394776114').send('Good night everybody');
       client.channels.cache.get('697617573394776114').send('<:NanaoBlanket:706704532742078557> ').then(() => {
			   process.exit(1);
  		})
	}}

	else if (message.content === prefix + 'kill') {
	   if (message.author.id==botOwnerID){
			   process.exit(1);
	}}

 	else if (message.content === prefix + 'maintenance') {
  		if (message.author.id==botOwnerID){
    		//client.channels.cache.get('700522029597851789').send('See you soon, I will come back with news things <:EnjuLookingFor:704262826897965126>').then(() => {
				setTimeout(function () {
		        		process.on("exit", function () {
		            		require("child_process").spawn(process.argv.shift(), process.argv, {
		                		cwd: process.cwd(),
		                		detached : true,
		                		stdio: "inherit"
		            		});
		        		});
		        		process.exit();
		    		}, 1000);
//})
}};
});

client.on('interactionCreate', async interaction => {
  if(!interaction.isCommand()) return; //Test to see if the interation is a command

  const { commandName } = interaction;
})

client.login(config.token);
client.commands = new Collection();
