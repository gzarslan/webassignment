const fakeDB = {

    products : [
        {
            id:123123,
            title:'Monster Hunter',
            genre:"",
            titleYear:2020,
            category:"mv",
            buyPrice:13.99,
            rentalPrice:5.99,
            trailer:'https://www.vudu.com/content/movies/play/1616928/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FMonster-Hunter%252F1616928',
            description:"When Lt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers.",
            featured:true,
            
           src:"https://images2.vudu.com/poster2/1616928-168",
           hero:"https://images2.vudu.com/poster2/1616928-168"

        },
        {
            id:234234,
            title:'Wonder Women 1984',
            titleYear:2020,
            category:"mv",
            buyPrice:14.99,
            rentalPrice:5.99,
            trailer:'https://www.vudu.com/content/movies/play/1615154/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FWonder-Woman-1984%252F1615154',
            description:"Fast forward to the 1980s as Wonder Woman's next big screen adventure finds her facing a wide array of foes including: Max Lord and The Cheetah.",
            featured:true,
            src:"https://images2.vudu.com/poster2/1615154-168"

        },
        {
            id:345345,
            title:'Greenland',
            titleYear:2020,
            category:"mv",
            buyPrice:13.99,
            rentalPrice:6.99,
            trailer:'https://www.vudu.com/content/movies/play/1547884/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FGreenland%252F1547884',
            description:"A family fights for survival as a planet-killing comet races to Earth. John Garrity (Gerard Butler), his estranged wife Allison (Morena Baccarin), and young son Nathan make a perilous journey to their only hope for sanctuary. Amid terrifying news accounts of cities around the world being leveled by the comet's fragments, the Garrity's experience the best and worst in humanity while they battle the increasing panic and lawlessness surrounding them. As the countdown to global apocalypse approaches zero, their incredible trek culminates in a desperate and last-minute flight to",
            featured:true,
            src:"https://images2.vudu.com/poster2/1547884-168"

        },
        {
            id:455456,
            title:'Wrong Turn',
            titleYear:2020,
            category:"mv",
            buyPrice:15.99,
            rentalPrice:7.99,
            trailer:'https://www.vudu.com/content/movies/play/1632739/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FWrong-Turn%252F1632739',
            description:"Backwoods terror and nerve-jangling suspense meet when a group of friends hiking the Appalachian Trail come face to face with a community of dangerous mountain dwellers.",
           featured:true,
           src:"https://images2.vudu.com/poster2/1632739-168"

        },
        {
            id:567567,
            title:'Let Him Go',
            titleYear:2020,
            category:"mv",
            buyPrice:11.99,
            rentalPrice:4.99,
            trailer:'https://www.vudu.com/content/movies/play/1576343/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FLet-Him-Go%252F1576343',
            description:"Following the loss of their son, a retired sheriff and his wife leave their Montana ranch to rescue their young grandson from the clutches of a dangerous family living off the grid in the Dakotas.",
            featured:true,
            src:"https://images2.vudu.com/poster2/1576343-168"

        },
        {
            id:678678,
            title:'Ravage',
            titleYear:2020,
            category:"mv",
            buyPrice:12.99,
            rentalPrice:5.99,
            trailer:'https://www.vudu.com/content/movies/play/1456352/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FRavage%252F1456352',
            description:"Alone in the woods, nature photographer Harper witnesses a violent crime. After being captured by the culprits she uses her survivalist skills to take them out one by one.",
            featured:true,
            src:"https://images2.vudu.com/poster2/1456352-168"

        },
        {
            id:789789,
            title:'The Office',
            titleYear:2018,
            category:"tv",
            buyPrice:16.99,
            rentalPrice:8.99,
            trailer:'https://www.vudu.com/content/movies/play/1534706/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FThe-War-With-Grandpa%252F1534706',
            description:"Based on the award-winning British comedy of the same name, The Office exposes the humorous and often foolish events at Dunder-Mifflin Paper Company.",
            featured:true,
            src:"https://images2.vudu.com/poster2/1043933-168"

        },
        {
            id:88910,
            title:'Yellow Stone',
            titleYear:2019,
            category:"tv",
            buyPrice:9.99,
            rentalPrice:3.99,
            trailer:'https://www.vudu.com/content/movies/play/1534706/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FThe-War-With-Grandpa%252F1534706',
            description:"From the brilliant creative mind of Taylor Sheridan (HELL OR HIGH WATER and SICARIO) & starring Academy Award Winner Kevin Costner, this epic drama series follows the Dutton family, led by John Dutton, who controls the largest contiguous ranch in the US.",
            featured:true,
            src:"https://images2.vudu.com/poster2/1144876-168"

        },
        {
            id:91011,
            title:'Game of Thrones',
            titleYear:2020,
            category:"tv",
            buyPrice:10.99,
            rentalPrice:3.99,
            trailer:'',
            description:"Based on the popular book series A Song of Ice and Fire by George R.R. Martin, this complete series includes all eight seasons of this epic fantasy series.",
            featured:true,
            src:"https://images2.vudu.com/poster2/296646-168"

        },
        {
            id:101112,
            title:'Jumanji',
            titleYear:2017,
            category:"tv",
            buyPrice:17.99,
            rentalPrice:5.99,
            trailer:'https://www.vudu.com/content/movies/play/880680/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FJumanji-Welcome-to-the-Jungle%252F880680',
            description:"Four teenagers in detention discover an old video game console with a game they've never heard of. When they decide to play, they are immediately sucked into the jungle world of Jumanji in the bodies of their avatars (Dwayne Johnson, Jack Black, Kevin Hart, and Karen Gillan). They'll have to complete the adventure of their lives filled with fun, thrills and danger or be stuck in the game forever!",
            featured:true,
            src:"https://images2.vudu.com/poster2/880680-168"

        },
        {
            id:121314,
            title:'Pride and Prejudice:',
            genre:'drama',
            titleYear:1995,
            category:"tv",
            buyPrice:13.99,
            rentalPrice:4.99,
            trailer:'',
            description:"This is the definitive Pride and Prejudice and the most successful TV period drama ever. Starring Colin Firth, Jennifer Ehle and a fabulous supporting cast, this BBC/A&E co-production pulsates with energy as lively, witty Elizabeth Bennet charms smouldering, haughty Darcy against a backdrop of a picture postcard countryside, small-town assembly rooms and stately English homes.",
            featured:true,
            src:"https://images2.vudu.com/poster2/339861-168"

        },
        {
            id:141516,
            title:'John Wick',
            genre:'comedy',
            titleYear:1999,
            category:"mv",
            buyPrice:13.99,
            rentalPrice:4.99,
            trailer:'https://www.vudu.com/content/movies/play/611565/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FJohn-Wick%252F611565',
            description:"When sadistic young thugs senselessly attack John Wick (Keanu Reeves) - a brilliantly lethal ex-assassin - they have no idea they've messed with the wrong guy. With New York City as his bullet-riddled playground, Wick embarks on a merciless rampage, hunting down his adversaries with the skill and ruthlessness that made him an underworld legend.",
            featured:true,
            src:"https://images2.vudu.com/poster2/611565-168"

        },
        {
            id:151617,
            title:'MUMMY',
            genre:'Action',
            titleYear:2007,
            category:"mv",
            buyPrice:9.99,
            rentalPrice:4.99,
            trailer:'https://www.vudu.com/content/movies/play/4973/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FThe-Mummy%252F4973',
            description:"",
            featured:true,
            src:"https://images2.vudu.com/poster2/4973-168"

        },
        {
            id:161718,
            title:'Hybrid',
            genre:'Action',
            titleYear:2018,
            category:"mv",
            buyPrice:18.99,
            rentalPrice:4.99,
            trailer:'https://www.vudu.com/content/movies/play/966920/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FSilencer%252F966920',
            description:"When he is blinded by an accident at work, a young man becomes part of an ambitious cross-species experiment and gets implants of wolf eyes, a choice which backfires when he starts to behave like a wolf.",
            featured:true,
            src:"https://images2.vudu.com/poster2/656334-168"

        },
        {
            id:202122,
            title:'Shrek',
            genre:'Adventure',
            titleYear:2004,
            category:"mv",
            buyPrice:10.99,
            rentalPrice:5.99,
            trailer:'https://www.vudu.com/content/movies/play/966920/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FSilencer%252F966920',
            description:"Happily ever after never seemed so far far away when a trip to meet the in-laws turns into a hilariously twisted adventure for Shrek (Mike Myers) and Fiona (Cameron Diaz). With the help of his faithful Donkey (Eddie Murphy), Shrek takes on a potion-brewing Fairy Godmother, the pompous Prince Charming (Rupert Everett), and the ogre-killer, Puss In Boots (Antonio Banderas) who's a pussycat at heart.",
            featured:true,
            src:"https://images2.vudu.com/poster2/398580-168"

        },
        {
            id:171819,
            title:'AVA',
            genre:'Action',
            titleYear:2004,
            category:"mv",
            buyPrice:6.99,
            rentalPrice:5.99,
            trailer:'https://www.vudu.com/content/movies/play/1492072/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FAva%252F1492072',
            description:"Ava is a deadly assassin who works for a black ops organization, traveling the globe specializing in high profile hits. When a job goes dangerously wrong she is forced to fight for her own survival.",
            featured:true,
            src:"https://images2.vudu.com/poster2/1492072-168"

        },
        {
            id:181920,
            title:'The Vigil',
            genre:'Action',
            titleYear:2020,
            category:"mv",
            buyPrice:9.99,
            rentalPrice:5.99,
            trailer:'https://www.vudu.com/content/movies/play/1634164/TRAILER?returnUrl=%252Fcontent%252Fmovies%252Fdetails%252FThe-Vigil%252F1634164',
            description:"Called to stand watch overnight to a deceased member of his former Orthodox Jewish community, a young man comes to feel an inescapable supernatural presence in the house.",
            featured:true,
            src:"https://images2.vudu.com/poster2/1634164-168"

        },
        {
            id:232425,
            title:'The Bing Bang Theory',
            genre:'Action',
            titleYear:2012,
            category:"tv",
            buyPrice:7.99,
            rentalPrice:3.99,
            trailer:'',
            description:"The Big Bang geniuses return after being thrown for a bell curve in the previous season of THE BIG BANG THEORY. While Leonard has to debug his relationship with Penny once more after accidentally proposing to her in the heat of the moment, Sheldon, Howard, and Raj continue to discover the feminine mystique is something that cannot be easily graphed or calculated.",
            featured:true,
            src:"https://images2.vudu.com/poster2/379551-168"

        },
        {
            id:252627,
            title:'Leverage',
            genre:'Crime',
            titleYear:2011,
            category:"tv",
            buyPrice:7.99,
            rentalPrice:3.99,
            trailer:'',
            description:"Nate Ford was an insurance investigator until his company refused to pay for his young son's medical treatment, resulting in his death. Now, two years later, divorced and descending into alcoholism, Nate is hired to head a team of highly skilled criminals to recover stolen airplane designs: Alec Hardison, an internet and computer specialist; Eliot Spencer, a retrieval specialist; Parker, an expert thief; and Sophie Devereaux, a high-society grifter.",
            featured:true,
            src:"https://images2.vudu.com/poster2/205021-168"

        },
       
        {
            id:272829,
            title:'Ghost Stories',
            genre:'Crime',
            titleYear:1997,
            category:"tv",
            buyPrice:7.99,
            rentalPrice:3.99,
            trailer:'',
            description:"Have you ever felt a strange presence around you, or heard a thump in the night...or gotten a chill for no reason at all? Hosted by Patrick Macnee, this spine-tingling series investigates various haunting across the globe. These spooky ghost stories are guaranteed to stay with you through the darkest of nights and keep you on edge.",
            featured:true,
            src:" https://images2.vudu.com/poster2/1067163-168"

        },
        
        {
            id:282930,
            title:'Blackout',
            genre:'Crime',
            titleYear:2012,
            category:"tv",
            buyPrice:8.99,
            rentalPrice:4.99,
            trailer:'',
            description:"A computer hacker, recruited by a shadowy figure, has executed the largest disaster to hit California--completely shutting down the state's vulnerable electrical system. With the outage comes chaos, as record heat waves and the dark of the night create a city by city panic. As residents across the West Coast fight to survive, Agent Strickland of Homeland Security's Cyber Terrorism Division enlists a squadron of experts to outwit the conspiratorial source of the blackout.",
            featured:true,
            src:"https://images2.vudu.com/poster2/1272844-168"

        },
        {
            id:303132,
            title:'Hells Kitchen',
            genre:'Reality',
            titleYear:2005,
            category:"tv",
            buyPrice:8.99,
            rentalPrice:2.99,
            trailer:'',
            description:"In this reality show, celebrity chef Gordon Ramsay roasts aspiring restauranteurs as they compete for the opportunity to run one of his eateries.",
            featured:true,
            src:" https://images2.vudu.com/poster2/1011802-168"

        },
        {
            id:313233,
            title:'The hive',
            genre:'Animation',
            titleYear:2010,
            category:"tv",
            buyPrice:5.99,
            rentalPrice:4.99,
            trailer:'',
            description:"THE HIVE is a colourful new animated series for pre-schoolers featuring the Bee family, who live together in Honeybee Hive. Pappa Bee, Mamma Bee, Buzzbee and Rubee are really just like any other family, except they are tiny, stripy and buzz around in the sky!",
            featured:true,
            src:" https://images2.vudu.com/poster2/842441-168"

        },
          {
            id:333435,
            title:'Floribama Shore',
            genre:'Adventure',
            titleYear:2020,
            category:"tv",
            buyPrice:8.99,
            rentalPrice:4.99,
            trailer:'',
            description:"From the gulf coast to the montana wilderness, roommates jeremiah, codi, aimee, kirk, nilsa, candace and gus head out on vacation to have a good time and stir up southern-fried shenanigans.",
            featured:true,
            src:"https://images2.vudu.com/poster2/1655001-168"

        },
       





      
    
    
    
    
    ],


 
      




    getAllProducts()
    {
        return this.products;
    },
    
    getAllHero()    
    {
        return this.hero;
    },


   // 125
    getAProduct(id)
    {

      const productReturned=  this.products.find((product)=>{

            return product.id == id;
        })


        return productReturned;
    },




    getMovies()
    {

        return this.products.filter((product) => product.category==="mv" &&product.featured==true);
  


    },

    getTv()
    {

        return this.products.filter((product) => product.category==="tv" &&product.featured==true);
  


    },
    getFree()
    {

        return this.products.filter((product) => product.buyPrice==0);
  


    },


     /* i have been helped by shiw sharma to declare my function*/
   /* getAllFeaturedProducts(query)
    {

          let productFeatured = [];

        for(i=0;i<fakeDB.products.length;++i)
        {
        if(fakeDB.products[i].featured===true && fakeDB.products[i].category === query)
        {

        productFeatured=productFeatured.concat(fakeDB.products[i]);
       }
       
        }

        return productFeatured;

    },*/
   

}


module.exports=fakeDB;
