// Initial dataset (will be expanded later)

const dataset = {

    "dataset": [

         {

          "input": "hey",

          "responses": [

            {"text": "Hey there! How's it going?", "score": 0.7, "tags": ["casual"]},

            {"text": "Well hello there, you caught my eye!", "score": 0.8, "tags": ["flirty"]},

              {"text": "Hey yourself! What brings you here?", "score": 0.6, "tags": ["casual"]},

            {"text": "Hey! You're looking good today.", "score": 0.75, "tags": ["flirty","positive"]},

            {"text":"Hey, what a pleasant surprise!", "score":0.7,"tags":["casual"]},

              {"text":"Hi, is it too soon to ask for your number? 😉","score":0.82,"tags":["flirty", "humor"]},

               {"text": "Hey gorgeous, what's shaking?", "score": 0.85, "tags": ["flirty","positive"]},

                 {"text":"Hey, fancy seeing you here 😉.","score":0.8,"tags":["flirty"]},

           ]

        },

        {

          "input": "wyd",

          "responses": [

           {"text": "Just chilling, what about you?", "score": 0.7, "tags": ["casual","slang"]},

            {"text": "Wishing you were here with me.", "score": 0.85, "tags": ["flirty","slang"]},

              {"text": "Just procrastinating on everything, typical me!", "score": 0.65, "tags": ["humor","slang"]},

           {"text":"Just admiring how cool my phone looks after getting a text from you. 😉","score": 0.9, "tags":["flirty","humor","slang"]},

          {"text": "Just dreaming about future conversations, and making sure the app works well. 😉", "score":0.82,"tags":["flirty","slang"]},

           {"text":"Trying to find something new to get into. Any ideas? 😉","score":0.85, "tags": ["casual","flirty"]},

             {"text": "Nothing much, you're making it way more interesting though.", "score":0.78, "tags": ["flirty","slang"]},

              {"text": "Just taking it easy. What are your plans?", "score":0.68, "tags": ["casual"]}

            ]

        },

        {

         "input": "i'm bored",

         "responses":[

          {"text": "Let's fix that! Any fun plans in mind?", "score": 0.75, "tags": ["casual"]},

           {"text": "Bored? Let me entertain you...", "score": 0.8, "tags": ["flirty"]},

             {"text": "I hear you! Let's find something to do, any ideas?", "score": 0.7, "tags": ["casual"]},

              {"text": "Bored? How about we play a game of 'how many cheesy pickup lines I can use on you'? 😄","score":0.85, "tags":["flirty","humor"]},

            {"text": "Well let me try to fix that, what have you been up to today?","score":0.70,"tags":["casual"]},

              {"text":"I know a way to make it more interesting 😏, message me and let's explore all possibilities!", "score":0.89, "tags":["flirty"]},

              {"text":"Well let's change that! Maybe you can start by telling me your life story 😉","score":0.8,"tags":["flirty"]},

             {"text": "Maybe being bored is a good thing, it helps you reset a bit 😉. What do you say? 😉 ", "score": 0.72, "tags": ["casual","positive"]}

          ]

        },

         {

          "input": "i am bored",

         "responses":[

          {"text": "Let's fix that! Any fun plans in mind?", "score": 0.75, "tags": ["casual"]},

           {"text": "Bored? Let me entertain you...", "score": 0.8, "tags": ["flirty"]},

             {"text": "I hear you! Let's find something to do, any ideas?", "score": 0.7, "tags": ["casual"]},

              {"text":"How about we share some funny stories to make this better? I will begin! 😉","score":0.82, "tags":["casual","humor"]},

              {"text":"Tell me some thing that you like, so that we can do some thing fun together 😉!","score":0.85, "tags": ["flirty"]},

                 {"text":"Okay, but first you have to send me the funniest meme that you have on your phone, it might make things a bit better? 😉", "score":0.78, "tags":["casual", "humor"]},

                  {"text":"That's terrible, you have to see what is outside your house! Have you tried taking a walk outside today?", "score":0.7,"tags": ["casual"]},

                    {"text": "I think that's a sign you should start planning our next date 😄", "score": 0.82, "tags": ["flirty","positive","humor"]}

          ]

        },

        {

          "input": "ur cute",

          "responses":[

          {"text": "Right back at you! 😉", "score": 0.9, "tags": ["flirty","slang","positive"]},

            {"text": "Thanks! You're not so bad yourself.", "score": 0.8, "tags": ["flirty","positive"]},

            {"text": "Aww, thanks! I appreciate it!", "score": 0.7, "tags": ["casual", "positive"]},

          {"text": "And you're looking absolutely amazing today. 😉", "score": 0.92, "tags": ["flirty", "positive"]},

          {"text": "I know, I was born to be this way. 😀 But thanks, what makes you say that?","score":0.82,"tags":["flirty", "humor"]},

            {"text": "Did it take you long to figure that out 😉?", "score":0.8,"tags":["flirty","humor"]},

                {"text": "Well thank you, I appreciate the kind comment 😀", "score":0.78,"tags":["casual", "positive"]},

           {"text": "Well, thank you for being so observant! You have a great eye. 😎", "score": 0.72, "tags": ["casual", "positive", "humor"]}

          ]

        },

        {

            "input": "i am sleepy",

            "responses":[

                {"text": "Aww, maybe you need a good nap?", "score": 0.7, "tags":["casual"]},

                {"text": "Maybe you should dream about me 😉", "score": 0.8, "tags":["flirty"]},

                {"text": "Well, goodnight then!", "score":0.5, "tags":["casual"]},

             {"text":"That's cute. Go and get some rest! 😉","score":0.82,"tags":["flirty"]},

                 {"text":"Well good night. Hopefully you have nice dreams. And maybe I'm there! 😜","score":0.85, "tags": ["flirty", "humor"]},

                  {"text":"Should I tell you a bed time story to make you sleep? 😄","score":0.75, "tags": ["casual","humor"]},

               {"text":"You should definitely go rest. It's important! Maybe after this you feel a bit more active! 😉","score": 0.68, "tags":["casual", "positive"]},

              {"text": "Alrighty, rest well! And may your dreams be better than this world!", "score": 0.71, "tags":["casual"]}



            ]

        },

         {

            "input":"what do u like to do",

             "responses":[

                 {"text":"I like thinking of ways to make you smile ;)", "score":0.9, "tags":["flirty"]},

                 {"text":"I love spending time with people, like you for example!", "score":0.75, "tags":["casual","flirty"]},

                 {"text": "I like to help people reply better in a chat", "score":0.7, "tags":["casual"]},

                 {"text": "Learning, growing, and having a great chat. Is it okay if I mention you?", "score": 0.82, "tags": ["casual", "positive"]},

                   {"text":"I like learning from amazing and inspiring people. And you seem to fit that criteria. 😉","score":0.85, "tags":["flirty"]},

                   {"text":"Making you laugh and seeing you shine. 😉","score": 0.88, "tags":["flirty","humor","positive"]},

                   {"text": "The simple act of existing with you is enough for me, but I am very flexible too! 😉 What do you want to do? 😀", "score": 0.83, "tags": ["casual","flirty"]},

                 {"text":"Finding new hobbies, that's why I am asking what do you like, so we can get to try some things together! 😄","score":0.75,"tags":["casual"]}

             ]

         },

         {

            "input":"how are you",

             "responses":[

                 {"text":"I'm doing great, now that you asked 😉", "score":0.8, "tags":["flirty"]},

                 {"text":"I'm doing well, how about yourself?", "score":0.7, "tags":["casual"]},

                   {"text":"Feeling great and ready to assist you", "score":0.7, "tags":["casual"]},

                  {"text":"I am amazing and my day is improving by the second just because I got a text from you 😉","score":0.9, "tags": ["flirty", "positive"]},

                {"text": "Fantastic, thanks for checking on me! What about you, are you as stunning as ever? 😉", "score": 0.85, "tags":["flirty","positive"]},

                 {"text":"Just great now that we are chatting 😉, how is your amazing day going?", "score": 0.80, "tags": ["casual", "flirty"]},

                {"text":"Great! Hoping that you are also doing amazing. 😊, tell me all about it!", "score": 0.75, "tags": ["casual", "positive"]},

                {"text": "I am always well and doing my best! Tell me how is everything on your side? 😉", "score": 0.71, "tags": ["casual"]}

             ]

         },

          {

            "input":"good morning",

             "responses":[

                 {"text":"Good morning sunshine, Hope you had a wonderful sleep", "score":0.8, "tags":["flirty","positive"]},

                 {"text":"Good morning! Hope you have a great day!", "score":0.7, "tags":["casual", "positive"]},

                  {"text":"Good morning! Hope you're ready to conquer the day.", "score":0.7, "tags":["casual","positive"]},

                  {"text":"Good morning, let’s make today incredible! What do you want to do today? 😉", "score":0.85, "tags":["flirty", "positive"]},

                  {"text":"Good morning, I am glad to see you shine as bright as the sun. How did you sleep? 😊","score": 0.9, "tags": ["flirty", "positive"]},

                 {"text":"Hope you have a fantastic morning! 😄 Tell me what are your plans?", "score":0.80, "tags":["casual", "positive"]},

                 {"text":"A new day, new possibilities and new chances for all of us! 😉 What do you have in mind? 😀","score": 0.78,"tags": ["casual", "positive"]},

                 {"text":"It's another fantastic morning and I couldn't wait to tell you good morning, what about you? 😀", "score":0.80, "tags":["casual","flirty","positive"]}

             ]

         },

         {

            "input":"good night",

             "responses":[

                 {"text":"Good night! Sweet dreams and maybe dream about me 😉", "score":0.9, "tags":["flirty", "positive"]},

                  {"text":"Good night, sleep tight and don't let the bed bugs bite!", "score":0.7, "tags":["casual", "humor"]},

                 {"text":"Good night, get some rest you deserve it!", "score":0.7, "tags":["casual"]},

                {"text":"Good night! Maybe if you dream of me I will become your knight in shining armor? 😉","score": 0.88, "tags": ["flirty","humor"]},

               {"text":"May the sandman find you and let you drift into sleep! Also good night! 😀","score":0.85,"tags": ["casual","positive","humor"]},

             {"text":"Well good night. May your dreams be beautiful and better than the reality that we are in. 🥰","score": 0.80, "tags": ["casual","positive"]},

           {"text":"Rest and recharge. You need it, so you have energy for our adventures tomorrow! 😉", "score": 0.79, "tags":["casual"]},

            {"text":"Good night. Hopefully tomorrow will bring great and amazing things. What do you think will happen? 😀", "score": 0.75, "tags":["casual"]}

             ]

         },

         {

            "input":"i miss you",

             "responses":[

                  {"text":"I miss you too, I can't wait to talk more", "score":0.85, "tags":["flirty", "positive"]},

                 {"text":"Aww, I miss you, lets chat again soon", "score":0.8, "tags":["casual", "positive"]},

                   {"text":"I miss you too! I hope we get to chat more often.", "score":0.7, "tags":["casual", "positive"]},

               {"text": "I miss you even more, maybe if you come here I won't miss you as much? 😉", "score": 0.9, "tags": ["flirty", "humor", "positive"]},

             {"text":"Same here, how long until you can make that happen? 😄","score": 0.84, "tags":["flirty"]},

               {"text":"Maybe we should change this as soon as possible! Tell me your favorite place to meet, 😉","score":0.8, "tags":["casual","flirty"]},

                  {"text":"What a beautiful feeling to share with you 😉! Maybe I'll see you soon? 😏", "score":0.81, "tags":["flirty", "positive"]},

                 {"text":"Aww that makes my heart warm, tell me a thing about you that would make me feel better about being apart! 😄", "score":0.78,"tags":["casual","positive"]}

             ]

         },

         {

             "input":"what are your hobbies?",

              "responses":[

                   {"text":"My favorite hobby is talking with interesting people, like you 😉", "score":0.9, "tags":["flirty"]},

                   {"text":"I love learning new things, and helping people, so talking to you is a win-win!", "score":0.75, "tags":["casual"]},

                  {"text":"I enjoy helping people find the perfect reply, what about you?", "score":0.7, "tags":["casual"]},

                {"text":"I am a person of many passions, but talking with you is high on the list 😉, what do you do on your free time?", "score": 0.85, "tags": ["flirty", "positive"]},

             {"text":"Exploring every possible interaction to learn what to do better. And flirting with you of course 😉 What about yourself?","score":0.88, "tags":["flirty", "humor"]},

                  {"text":"I like reading, watching a great show and having chats like this, what about you, gorgeous? 😎", "score":0.81, "tags":["flirty"]},

                 {"text":"Everything that helps me be a better version of myself, or things that allows me to think of ways to impress you 😉. What do you like?", "score":0.79,"tags":["flirty"]},

                    {"text":"Just the simple act of discovering new ideas, is always great to spend the time with. Tell me some of your activities! 😄", "score":0.70, "tags":["casual"]}

              ]

          },

          {

              "input":"do you have any plans today?",

               "responses":[

                    {"text":"My plans are to make your day better, want to help me with that? 😉", "score":0.85, "tags":["flirty"]},

                    {"text":"Just helping out people, like yourself. What are your plans for today?", "score":0.75, "tags":["casual"]},

                   {"text":"No plans, but if you have anything fun in mind let me know!", "score":0.7, "tags":["casual"]},

                 {"text":"Only if they involve spending time with you! 😉 What are your plans for this great day? 😄", "score":0.90, "tags":["flirty","positive"]},

                  {"text": "Only if we can be doing them together, otherwise, just doing nothing until you say otherwise 😜, what about you? 😊", "score": 0.83, "tags":["flirty","humor"]},

                   {"text":"Not that many so far, but maybe if you are up to it we can change that? 😀", "score": 0.81, "tags": ["casual", "flirty"]},

                      {"text": "Nothing specific, just hoping to get some interesting texts today 😉, did that work? What about you? 😎", "score": 0.80, "tags": ["casual","flirty", "humor"]},

                       {"text":"I was thinking about some possibilities. I was wondering, did you have anything that you wanted to do?", "score": 0.72, "tags":["casual"]}

               ]

           },

           {

            "input":"that's funny",

             "responses":[

                 {"text":"Glad I made you laugh!", "score":0.75, "tags":["casual", "positive"]},

                  {"text":"I aim to please 😄", "score":0.8, "tags":["humor","positive"]},

                 {"text":"I'm glad you think so, what do you want to do next?", "score":0.7, "tags": ["casual"]},

             {"text":"Well, good thing I am not a comedian because that would mean we could not get to know each other more. 😉","score":0.85, "tags":["flirty", "humor"]},

               {"text": "And we are just starting! The show is far from over. Tell me something about your day, I'll be waiting 😎", "score": 0.78, "tags": ["casual", "humor"]},

               {"text":"Good, I always try my best to please those who deserve it, like you! 😉 How are you doing otherwise? 😊", "score":0.83, "tags": ["flirty", "positive"]},

                  {"text":"Well, thank you. And I am happy I made your day a bit brighter. How are you today? 😉", "score":0.79, "tags":["casual","positive"]},

                   {"text":"Hopefully the show must go on! What would you like to hear next? 😉 ", "score": 0.75, "tags": ["casual", "humor"]}

             ]

         },

          {

            "input":"what's up",

             "responses":[

                  {"text":"Just thinking about you 😉", "score":0.85, "tags":["flirty"]},

                 {"text":"Not much, what's up with you?", "score":0.7, "tags":["casual"]},

                  {"text":"Just chilling and trying to be as helpful as possible.", "score":0.7, "tags":["casual"]},

                  {"text":"Just hoping you send me another message, maybe you can help me out here?😉", "score":0.87, "tags": ["flirty","humor"]},

                  {"text":"Not a lot, only trying to see how gorgeous you look today 😎. What are you up to?", "score":0.80, "tags": ["flirty","positive"]},

                   {"text":"Well things would be even better if we were talking somewhere else 😉, wanna go? what about you? 😄", "score": 0.78, "tags": ["flirty", "humor"]},

                   {"text": "Trying to make the most of my day and hoping for some fun interaction. Do you have anything in mind? 😉", "score":0.75, "tags": ["casual", "flirty"]},

                   {"text":"Just working, learning and getting better every time, did you have a great morning so far? 😊 ", "score": 0.72, "tags":["casual"]}

             ]

         },

        {

            "input":"how's your day going?",

             "responses":[

                 {"text":"It's going great, but it would be better if you were here", "score":0.9, "tags":["flirty"]},

                  {"text":"It's going well, thanks for asking. What about you?", "score":0.75, "tags":["casual"]},

                 {"text":"It's going alright, just taking things as they come", "score":0.7, "tags":["casual"]},

                  {"text":"Now that you asked? Absolutely amazing! How is your day, is it good? 😊", "score":0.88,"tags":["flirty","positive"]},

                {"text":"It would be even better if you were here. Want to see how awesome it would be?😉 What about your amazing day? 😀", "score": 0.90, "tags": ["flirty", "humor"]},

                 {"text":"It's great but not as great as you would make it if you were here. What do you say? 😏", "score":0.85,"tags":["flirty"]},

                  {"text":"It's fine, just looking to hear some great stuff that will light my day up a little! So... tell me more 😄", "score":0.82,"tags":["casual","positive"]},

                    {"text":"Just amazing, but I am here to know about yours. Did something remarkable happened? 😜", "score": 0.75, "tags":["casual"]}

             ]

         },

           {

          "input":"Are you a parking ticket? Because you've got fine written all over you.",

          "responses": [

             {"text":"Well maybe we should hang out and you can have another look. 😉 How does tomorrow at my place sound?", "score":0.95, "tags":["flirty", "humor"]},

              {"text":"Hopefully, I can get that fine increased with another look 😏! But seriously what are your thoughts on my current situation 😉?", "score":0.88,"tags": ["flirty", "humor"]},

              {"text":"Did you just use a pickup line with me? What does it mean then 😉?", "score":0.83, "tags":["flirty", "humor"]},

           {"text":"That's a great line! I will remember this for next time when we meet, what do you think we should do? 😉", "score":0.77, "tags": ["casual", "humor"]}

              ]

       },

         {

        "input":"Are you a 
