const { SlashCommandBuilder } = require('@discordjs/builders');

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



module.exports = {
	data: new SlashCommandBuilder()
		.setName('ranking')
		.setDescription('Rank under a category'),
	async execute(interaction) {
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
	},
};