// WELCOME TO THE BACKDROP SECTION
// Here you can change the artist backdrop that shows in the now playing screen
// Add or Change your artists backdrop and add more by using ,
// EXAMPLE: 
// "Kanye West": "https://wallpapercave.com/wp/wp1839970.jpg", <--- This goes to a new line so it reads all of it
// "Kanye West": "https://wallpapercave.com/wp/wp1839970.jpg" <--- leave it out at the very bottom so it closes the function
// Read all the functions for more examples
// Backdrops are recommended by 1000x1000
// Enjoy!

// DO NOT CHANGE THIS 
const artistBackdropsMap = {
  // === KANYE WEST ===
  "Kanye West": "https://wallpapercave.com/wp/wp1839970.jpg",
 

  // === BABY KEEM ===
  "Baby Keem": "https://static01.nyt.com/images/2026/04/19/multimedia/19cul-baby-keem-promo/19cul-baby-keem-01-hfvj-videoSixteenByNine3000.jpg",
  

  // === SZA ===
  "SZA": "https://media.allure.com/photos/67a9600ac75c91c977c2064f/16:9/w_2396,h_1348,c_limit/sza%20super%20bowl%20halftime%20show%20look.jpg",
  
  // === YOUNGBOY NEVER BROKE AGAIN ===
  "YoungBoy Never Broke Again": "https://images.paramount.tech/uri/mgid:arc:imageassetref:bet.com:5ac64c5d-4f77-469d-bcc3-f7fb5f9f4d8f?quality=0.7&gen=ntrn&legacyStatusCode=true",
  

  // === YEAT ===
  "Yeat": "https://wallpapers.com/images/hd/rapper-yeat-with-louis-vuitton-30lo3420ke28vgv8.jpg",
 
  // === ESDEEKID ===
  "EsDeeKid": "https://i0.wp.com/chicagoreader.com/wp-content/uploads/2026/01/Esdeekid-courtesy-the-artist_social.jpg?fit=1200%2C675&quality=89&ssl=1",
  
  // === PLAYBOI CARTI ===
  "Playboi Carti": "https://media2.ntslive.co.uk/resize/1600x1600/46836229-b7c7-44d4-8cc7-cd4888a9daeb_1685577600.jpeg",
  
  // === JUICE WRLD ===
  "Juice WRLD": "https://wallpapercave.com/wp/wp9065366.jpg",
  

  // === DRAKE ===
  "Drake": "https://variety.com/wp-content/uploads/2021/09/Drake-publicity3-2021.jpg?w=1000&h=562&crop=1",
  
  // === MIGOS ===
  "Migos": "https://media.npr.org/assets/img/2018/01/26/gettyimages-800832610_wide-72b788c5721cce6dc0a7df79f22053788f42953f.jpg",
 

  // === OFFSET ===
  "Offset": "https://www.rollingstone.com/wp-content/uploads/2023/10/Offset-new-album.jpg?crop=0px%2C30px%2C1800px%2C1014px&resize=1600%2C900",
  
  // === NLE CHOPPA ===
  "NLE Choppa": "https://www.miaminewtimes.com/wp-content/uploads/sites/4/ww-media/mediaserver/mia/2024-32/nle_choppa.webp",
  

  // === LIL UZI VERT ===
  "Lil Uzi Vert": "https://wallpapers.com/images/hd/lil-uzi-desktop-7usqbi31oyb7yvj6.jpg",

/*
"Lil Uzi Vert": "https://lh3.googleusercontent.com/5rBwZUjAmTGZp5IA31AER-HUOLIet4SHmT4MKEfnLmt0YvTH0DngwtmMq2GJQDk9p83ICdvadKrLtDk=w2880-h1200-p-l90-rj",
*/

// === LIL TJAY ===
  "Lil Tjay": "https://wallpapercave.com/wp/wp4061579.jpg",
  

  // === TRAVIS SCOTT ===
  "Travis Scott": "https://wallpapercave.com/wp/wp6370814.jpg",

  //"Travis Scott": "https://studybreaks.com/wp-content/uploads/2018/08/travis-scott.jpg",

  //"Travis Scott": "https://media.gq.com/photos/64ac2fb0d025dc7de1c5fb2d/16:9/w_2560%2Cc_limit/1528446117",
  

  // === CHIEF KEEF ===
  "Chief Keef": "https://getwallpapers.com/wallpaper/full/7/1/c/792853-chief-keef-wallpapers-2204x1240-pc.jpg",
  

  // === J. COLE ===
  "J. Cole": "https://wallpaperaccess.com/full/2829662.jpg",
  

  // === KODAK BLACK ===
  "Kodak Black": "https://th.bing.com/th/id/R.4a3e700bafd8074df309ceb2747f79d6?rik=RP5NbfG36aulQQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f8%2f9%2f4%2f1016515-kodak-black-wallpapers-1920x1080-windows-10.jpg&ehk=BwyZPj0DZ89DELN7wftZD5zgIrxt00zcSoMUX48noAM%3d&risl=&pid=ImgRaw&r=0",

  // === KODAK BLACK ===
  //"Kodak Black": "https://getwallpapers.com/wallpaper/full/c/d/a/1016244-kodak-black-wallpapers-2552x1434-htc.jpg",
  

  // === LIL BABY ===
  "Lil Baby": "https://wallpapers.com/images/hd/lil-baby-show-off-diamonds-n3iivjug1s374kke.jpg",
  

  // === FUTURE ===
  "Future": "https://wallpaperaccess.com/full/25268.jpg",
  

  // === KID CUDI ===
  "Kid Cudi": "https://www.rollingstone.com/wp-content/uploads/2023/09/kid-cudi-star-trek.jpg",
  

  // === RODDY RICCH ===
  "Roddy Ricch": "https://wallpapercat.com/w/full/1/0/6/1627478-2000x1270-desktop-hd-roddy-ricch-wallpaper.jpg",
  

  // === POP SMOKE ===
  "Pop Smoke": "https://wallpapercat.com/w/full/7/9/4/2278178-2400x1600-desktop-hd-pop-smoke-wallpaper-photo.jpg",
  

  // === TRIPPIE REDD ===
  "Trippie Redd": "https://wallpaperaccess.com/full/651319.jpg",
  

  // === KING VON ===
  "King Von": "https://wallpaperaccess.com/full/6395904.jpg",
 

  // === GUNNA ===
  "Gunna": "https://images.hdqwalls.com/download/gunna-2020-w1-2560x1440.jpg",
  

  // === 21 SAVAGE ===
  "21 Savage": "https://yt3.googleusercontent.com/_UGe0049ulvg04iFMXKVuXZy1JyxV8c-J5cloT9MyT1mD6P5bdhX7KhWPg9bzotvetqohN-Ij9nHUjir=w2028-h845-p-l90-rj",
  

  // === MEEK MILL ===
  "Meek Mill": "https://www.rollingstone.com/wp-content/uploads/2021/10/meek-mill-review.jpg",
  

  // === DABABY ===
  "DaBaby": "https://wallpapers.com/images/hd/rockstar-rapper-dababy-21hf5iswf7wmjcoo.jpg",
  

  // === A$AP ROCKY ===

  //1: "A$AP Rocky": "https://wallpaperaccess.com/full/500698.jpg",

    //2:"A$AP Rocky": "https://wallpapercave.com/wp/wp6370072.jpg",

     //3: "A$AP Rocky": "https://wallpapercave.com/wp/wp6318263.jpg",

     //4: "A$AP Rocky": "https://wallpapercave.com/wp/wp6370084.jpg",

      //5: "A$AP Rocky": "https://wallpaper.dog/large/17275616.jpg",

        /*6:*/ "A$AP Rocky": "https://wallpapercave.com/wp/wp7236662.jpg",
  
  // === DDG ===
  "DDG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiUV54iK2nTqiEXKXm6rAuPXnmEicl6zbQw&s",
  

  // === THE WEEKND ===
  "The Weeknd": "https://websiteserviceapi.azurewebsites.net/api/Images/1423586/5",
  

  // === KENDRICK LAMAR ===
  "Kendrick Lamar": "https://4kwallpapers.com/images/wallpapers/kendrick-lamar-7680x4320-21245.jpg",
  
  // === POST MALONE ===
  "Post Malone": "https://www.rollingstone.com/wp-content/uploads/2023/06/Post-Malone-Songwriter-Hall-of-Fame.jpg?w=1581&h=1054&crop=1",
  

  // === MAC MILLER ===
  "Mac Miller": "https://www.rollingstone.com/wp-content/uploads/2018/11/mac-miller-left-behind.jpg?w=1600&h=900&crop=1",
  

  // === TYLER, THE CREATOR ===
  "Tyler The Creator": "https://4kwallpapers.com/images/wallpapers/tyler-the-creator-1920x1080-19376.jpgba03ec9313f4e76b9c82",
  

  // === EMINEM ===
  "Eminem": "https://wallpapercave.com/wp/wp9806867.jpg",
  

  // === 2 CHAINZ ===
  "2 Chainz": "https://www.hot97.com/wp-content/uploads/sites/2/2024/10/GettyImages-2177515243.jpg?w=990",
  

  // === LIL DURK ===
  "Lil Durk": "https://wallpapercat.com/w/full/2/1/6/2273205-2048x1152-desktop-hd-lil-durk-background-photo.jpg",
  

  // === DON TOLIVER ===
  "Don Toliver": "https://wallpapercat.com/w/full/b/f/b/2252999-2500x1667-desktop-hd-don-toliver-background-image.jpg",
  

  // === SNOOP DOGG ===
  "Snoop Dogg": "https://wallpapers.com/images/hd/snoop-dogg-smoking-weed-jt3ihyso70vlz8bg.jpg",
  

  // === LIL WAYNE ===
  "Lil Wayne": "https://cdn.wallpapersafari.com/86/83/odlDjq.jpg",
  

  // === JAY-Z ===
  

  // === 50 CENT ===
  "50 Cent": "https://wallpaper.forfun.com/fetch/be/be91b88a3134dfaeceb91b6a4942e944.jpeg",
  

  // === BIG SEAN ===
  "Big Sean": "https://wallpapers.com/images/hd/red-outfit-big-sean-6aso7q9sh3nbekav.jpg",
  

  // === QUAVO ===
  "Quavo": "https://hdqwalls.com/wallpapers/quavo-b6.jpg",
  

  // === TAKEOFF ===
  "Takeoff": "https://static.dw.com/image/63615150_605.jpg",
  

  // === YOUNG DOLPH ===
  "Young Dolph": "https://m.gettywallpapers.com/wp-content/uploads/2023/10/Young-Dolph-Computer-Wallpaper-scaled.jpg",
  

  // === KEY GLOCK ===
  "Key Glock": "https://wallpapercat.com/w/full/8/d/7/2267742-2560x1753-desktop-hd-key-glock-background-image.jpg",
  

  // === EXTRAS ===
  // ICE CUBE
  "Ice Cube": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-8m_kMYEu8rYWv-dQWtg9WGNUITuonQFEHikygIWgA&s=10",
 
  // YNW MELLY
  "YNW Melly": "https://wallpapercave.com/wp/wp10207272.png",


  // JOEY BADA$$
  "Joey Bada$$": "https://www.billboard.com/wp-content/uploads/2023/04/Joey-Badass-cr-Waqas-Ghani-billboard-1548.jpg",


  // JACKSON 5
  "Jackson 5": "https://cdn.britannica.com/37/101937-050-60A347CA/The-Jackson-5-1973.jpg",
  

  // BENNY THE BUTCHER
  "Benny The Butcher": "https://wallpapers.com/images/hd/benny-the-butcher-blue-aesthetic-68pnn8h2ili8oztc.jpg",
 

  // DENZEL CURRY
  "Denzel Curry": "https://dynamicmedia.livenationinternational.com/j/o/d/ad5128bf-f8d9-4eae-85cd-8c8801349076.jpg?format=webp&width=3840&quality=75",


  // SMILEY
  "Smiley": "https://smartcdn.gprod.postmedia.digital/torontosun/wp-content/uploads/2023/05/smiley-rapper-e1684009377951.jpg",


  // NAS
  "Nas": "https://lh3.googleusercontent.com/lqOS3kDPrySVufjJfPFXI3Sz9uummUdG-OT8e5Z5JCarmQI3cxDwD6b0nT0lVbaIRClO6wpn6hml-Mc=w2880-h1200-p-l90-rj",


  // XXXTENTACION
  "XXXTENTACION": "https://www.digitalmusicnews.com/wp-content/uploads/2025/07/xxxtentacion-bad-vibes-clothing-brand.png",
 


// === BRUNO MARS ===
  "Bruno Mars": "https://img.buzzfeed.com/buzzfeed-static/complex/images/ep4lldux0k5edna9qcrg/bruno-mars-lacoste-ricky-regal-collaboration.jpg?output-format=jpg&output-quality=auto",
  "Silk Sonic": "https://img.buzzfeed.com/buzzfeed-static/complex/images/ep4lldux0k5edna9qcrg/bruno-mars-lacoste-ricky-regal-collaboration.jpg?output-format=jpg&output-quality=auto",

// === B.O.B ===
  "B.o.B": "https://cdn.mos.cms.futurecdn.net/DzfAxFdQhxdHrL4szEYxSo.jpg",


// === METRO BOOMIN ===
  "Metro Boomin": "https://media.redbullmusicacademy.com/assets/metro-boomin.da44efc3.jpg?auto=format&w=1280",


// === TY DOLLA $IGN ===
  "Ty Dolla $ign": "https://wallpapercave.com/wp/wp2172012.jpg",


// === LIL YACHTY ===
  "Lil Yachty": "https://wallpapercat.com/w/full/1/e/2/915941-2560x1440-desktop-hd-lil-yachty-wallpaper-photo.jpg",


// === GUCCI MANE ===
  "Gucci Mane": "https://wallpapers.com/images/hd/gucci-mane-event-appearance-7tpq9wgc499aqgd7.jpg",


// === WIZ KHALIFA ===
  "Wiz Khalifa": "https://reggaeriseup.com/wp-content/uploads/2022/10/Wiz-Approved-Press-Photo-2000x1333.jpg",


// === MUSTARD ===
  "Mustard": "https://www.billboard.com/wp-content/uploads/media/DJ-Mustard-press-photo-2018-cr-B-Wade-billboard-1548.jpg",


// === YG ===
  "YG": "https://www.rollingstone.com/wp-content/uploads/2019/05/YG-album-review.jpg?w=1581&h=1054&crop=1",


// === NIPSEY HUSSLE ===
  "Nipsey Hussle": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6ZxBvi4JmCsLEmS0Kt_31ksnPCLrC5oIRnIKdDOSr29_UYL1vGYK-dU&s=10",


// === THE GAME ===
  "The Game": "https://wallpapercave.com/wp/omDsa2X.jpg",


// === RICK ROSS ===
  "Rick Ross": "https://wallpaper.forfun.com/fetch/a0/a0a437abe7c99e41aaadf01c80adb254.jpeg",


// === FRENCH MONTANA ===
  "French Montana": "https://www.vibe.com/wp-content/uploads/2023/04/Apple_Music_Radio_French_Montana_56-e1682096653860.jpg",
 

// === NICKI MINAJ ===
  "Nicki Minaj": "https://people.com/thmb/VP8GFHmsf5I01qPHQ3OxpqSagF0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(728x309:730x311)/Nicki-Minaj-Turning-Point-AmericaFest-Youth-Conference-2025-122525-55d6c9f8dedc4ecfa8a84bb793a8e888.jpg",


// === CARDI B ===
  "Cardi B": "https://assets.teenvogue.com/photos/6329eeeb2e0e69d852e0c4d6/16:9/w_2560%2Cc_limit/1424865636",


// === MEGAN THEE STALLION ===
  "Megan Thee Stallion": "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1189841420.jpg?crop=1xw:0.5625xh;center,top&resize=1200:*",


// === GLORILLA ===
  "GloRilla": "https://media.pitchfork.com/photos/66ed7ddfb20e8a9aebbc2d44/2:1/w_2560%2Cc_limit/Glorilla.jpg",


// === LATTO ===
  "Latto": "https://theshaderoom.com/wp-content/uploads/2026/04/Latto-Shuts-Down-Mariah-The-Scientists-Atlanta-Concert-With-Surprise-Performance-Viral-Twerk-Session-e1775921185888.jpg",


// === RIHANNA ===
  "Rihanna": "https://cdn.abcotvs.com/dip/images/10929421_080421-cc-ap-rihanna-img.jpeg",


// === BENNY BLANCO ===
  "benny blanco": "https://variety.com/wp-content/uploads/2017/09/benny-blanco-blue-jacket-20171.jpg?w=1000&h=667&crop=1",

// === BAD BUNNY ===
  "Bad Bunny": "https://ichef.bbci.co.uk/ace/standard/3840/cpsprodpb/f706/live/d8f38d40-0d79-11f1-ba5c-7bf79826200c.jpg",


// === LOGIC ===
  "Logic": "https://www.rollingstone.com/wp-content/uploads/2019/10/logic-twisted.jpg?w=1600&h=900&crop=1",


  // === CHANCE THE RAPPER ===
  "Chance the Rapper": "https://images5.alphacoders.com/664/664523.jpg",


  // === CHILDISH GAMBINO ===
  "Childish Gambino": "https://deathbycake.net/wp-content/uploads/2014/10/c8842b0d6c741aa77fefb376be8b548960a6f852a1e1537a5ab1f329decc0f0f_large.jpeg",


  // === FREDDIE GIBBS ===
  "Freddie Gibbs": "https://i.iheart.com/v3/re/new_assets/6346bdc147f3b9b0d14e6c24",


// === LIL NAS X ===
  "Lil Nas X": "https://media.cnn.com/api/v1/images/stellar/prod/190523102954-lil-nas-x-fashion-nova-red-carpet-may-2019.jpg?q=w_3000,h_2000,x_0,y_0,c_fill",



// === THE KID LAROI ===
  "The Kid LAROI": "https://wallpapers.com/images/hd/the-kid-laroi-flaunt-magazine-photoshoot-dqmeieio1y4tr3eu.jpg",



// === FOOLIO ===
  "Foolio": "https://allhiphop.com/wp-content/uploads/2022/01/qvooip2-ndw.jpg",
  "Julio Foolio": "https://allhiphop.com/wp-content/uploads/2022/01/qvooip2-ndw.jpg",


// === G HERBO ===
  "G Herbo": "https://www.rollingstone.com/wp-content/uploads/2021/08/GHerboPressPhoto1c.jpg?w=1581&h=1054&crop=1",


// === JPEGMAFIA ===
  "JPEGMAFIA": "https://wallpapercave.com/wp/wp15066294.jpg",


// === JENN CARTER ===
  "Jenn Carter": "https://i0.wp.com/downersclub.com/wp-content/uploads/2023/12/Jenn-Carter.jpg?fit=1280%2C720&ssl=1",

  // === KYLE RICHH ===
  "Kyle Richh": "https://wallpapercave.com/wp/wp11665138.jpg",


  // === TATA ===
  "TaTa": "https://yt3.googleusercontent.com/m6m3jLwyUAPWfNsVloN-GWqK7O8DOY8SQAkkcxOSAvMeueqbXNhsYKBuWKzM_1SHZiQGvCPAJA=w851-h354-l90-rj-dcDWSariEJ",



"41": "https://www.billboard.com/wp-content/uploads/2024/10/41-group-rap-2024-bet-awards-rc-billboard-1548.jpg",



// === DAFT PUNK ===
  "Daft Punk": "https://concord.com/wp-content/uploads/2021/09/daft-punk-banner-new.webp",


// === SKI MASK THE SLUMP GOD ===
  "Ski Mask The Slump God": "https://wallpapercave.com/wp/wp5332185.jpg",


// === PI'ERRE BOURNE ===
  "Pi’erre Bourne": "https://wallpapercave.com/wp/wp6193640.jpg",


// === TAY KEITH ===
  "Tay Keith": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/rockcms/2026-06/260618-Tay-Keith-vsb-2016-92e46a.jpg",


// === BLOCBOY JB ===
  "BlocBoy JB": "https://media.pitchfork.com/photos/5e8627d7ffd4cb0008aae7d4/16:9/w_1280,c_limit/BlocBoy-JB.jpg",


// === WAKA FLOCKA FLAME ===
  "Waka Flocka Flame": "https://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/b/22/b220ca01-6c79-53d6-8ab2-73a0ae02f786/5c40aca78e4a3.image.jpg?resize=1200%2C900",


  // === CENTRAL CEE ===
  "Central Cee": "https://wallpapercave.com/wp/wp15051046.webp",


// === WU-TANG CLAN ===
  "Wu-Tang Clan": "https://miro.medium.com/1*klMtz1sjO3-nZD9Omj58xA.png",
 

// === NE-YO ===
  "Ne-Yo": "https://www.rollingstone.com/wp-content/uploads/2023/08/GettyImages-1365255552-1.jpg?w=1581&h=1054&crop=16df0c4c74e5bb75b9f4e166cb9d3.jpg",


// === T-PAIN ===
  "T-Pain": "https://i0.wp.com/essentiallypop.com/epop/wp-content/uploads/2019/03/TPain-press.jpg?fit=1100%2C733&ssl=1",
  

// === 2PAC ===
  "2Pac": "https://i.tribune.com.pk/media/images/1299238-tupac-1484728735/1299238-tupac-1484728735.jpg",
 

// === THE NOTORIOUS B.I.G. ===
  "The Notorious B.I.G.": "https://ew.com/thmb/bcjSF5Lb7Dm_hX5NQJtvgxevtQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-136090653-b439a6c08bc047a19f50b2530532594c.jpg",


  "Pharrell Williams": "https://pbs.twimg.com/media/GcR0S6JXMAMEAo9.jpg",

"Young Thug": "https://wallpaperaccess.com/full/103352.jpg",

"Clipse": "https://hiphopgoldenage.com/wp-content/uploads/2016/02/clipse-010613.jpg",

"Polo G": "https://wallpapercat.com/w/full/7/1/4/1383411-2560x1707-desktop-hd-polo-g-wallpaper-photo.jpg",

"JACKBOYS": "https://modernnotoriety.com/wp-content/uploads/2019/12/TRVS.jpg",

"¥$": "https://media.pitchfork.com/photos/6578cd7ae26ab8072d0d73ed/2:1/w_2560%2Cc_limit/Ty-Dolla-Sign-Kanye-West.jpg",

"DJ Khaled": "https://wallpaper.forfun.com/fetch/12/12d151b8b83053dfcea3be25ff75b851.jpeg",

"Tyga": "https://www.hotnewhiphop.com/wp-content/uploads/2023/06/tyga-net-worth-2-scaled.jpeg",

"Mos Def": "https://wallpapercave.com/wp/wp7131474.jpg",

"Pusha T": "https://images.alphacoders.com/953/953538.jpg",

"Tame Impala": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWfZh6Cb425oGtGEqPCW02qfd90avJBz0_isJdBBqQtfn7dT3LJ51QFPA&s=10",

"DJ Shadow": "https://cdn.mos.cms.futurecdn.net/38693337a495835ba70e1375414968e2.jpg",

"Nardo Wick": "https://cdn.wallpapersafari.com/9/7/vGrB04.jpg",

"Lil Loaded": "https://mrwallpaper.com/images/hd/a-man-with-dreadlocks-is-holding-a-phone-vmz034p3cgtawbkp.jpg",

"Kevin Sherwood": "https://images5.alphacoders.com/385/thumb-1920-385898.jpg",

"Elena Siegman": "https://images5.alphacoders.com/385/thumb-1920-385898.jpg",

"James McCawley": "https://images5.alphacoders.com/385/thumb-1920-385898.jpg",

"Johnny Cash": "https://cdn-p.smehost.net/sites/cb6910fb9f0e47fa8979be5f624290db/wp-content/uploads/2019/05/Ultimate.jpg",

"BigXthaPlug": "https://static01.nyt.com/images/2025/08/20/multimedia/15cul-bigx-popcast-02-chpg/15cul-bigx-popcast-02-chpg-videoSixteenByNineJumbo1600.jpg",

"Khalid": "https://images.hdqwalls.com/wallpapers/khalid-iw.jpg",

"Sueco": "https://www.popdust.com/wp-content/uploads/2022/10/origin-23.jpg",

"Oliver Tree": "https://wallpapercave.com/wp/wp4220816.jpg",

"Homixide Gang": "https://www.billboard.com/wp-content/uploads/2025/08/unnamed.jpg",

"Ken Carson": "https://wallpapercave.com/wp/wp14391816.jpg",

"Destroy Lonely": "https://wallpapercave.com/wp/wp12103825.jpg",

"Fall Out Boy": "https://wallpapercave.com/wp/wp3166872.jpg",

"Queen": "https://i.pinimg.com/originals/2d/ff/1e/2dff1e6dc0f1daf6acb94110e06f0a8b.jpg",

"JID": "https://cdn.wallpapersafari.com/15/4/bLH37z.jpg",

"Sublime": "https://th.bing.com/th/id/R.4d16f51e579ac0cbc1ec0b38d8ac4b07?rik=V9WC2j8M1Tn8rg&riu=http%3a%2f%2fz2comics.com%2fcdn%2fshop%2fcollections%2fA4Vkn1T.jpg%3fv%3d1730223290&ehk=XQ8C6xKR16HhabHSYw1WqaS6Bgf12fYvxZeQWLbGm2s%3d&risl=&pid=ImgRaw&r=0",

"Diplo": "https://lasvegasnightclubs.com/wp-content/uploads/2022/11/Diplo-Las-Vegas.jpg",

"Consequence": "https://www.vibe.com/wp-content/uploads/2022/11/GettyImages-162328916-e1667320292777.jpg?w=910&h=511&crop=1&resize=1024%2C576",

"Dr. Dre": "https://wallpaperaccess.com/full/1336163.jpg",

"N.W.A.": "https://wallpaperaccess.com/full/1520817.jpg",
"N.W.A": "https://wallpaperaccess.com/full/1520817.jpg",

"Red Hot Chili Peppers": "https://wallpapers.com/images/hd/red-hot-chili-peppers-2l8tudlsy73n181k.jpg",

"Bon Jovi": "https://therockrevival.com/wp-content/uploads/2024/01/Bon-Jovi-band-2024-1024x768.jpg",

"AC/DC": "https://cdn.concreteplayground.com/content/uploads/2025/06/ACDC_01_Christie-Goodwin_supplied.jpg",

"Metallica": "https://wallpapercave.com/wp/wp10392116.jpg",

"The Offspring": "https://concord.com/wp-content/uploads/2014/12/The_Offspring_-_Promo_Shot_2_Credit_Daveed_Benito.jpg",

"Billy Joel": "https://prod-img.standaard.be/public/nieuws/wi31lm-britain-billy-joel/alternates/THREE_TWO_1620/Britain%20Billy%20Joel",

"The Beatles": "https://www.radiopopolare.it/wp-content/uploads/2023/11/397536085_880258100136514_3771676531404241999_n.jpg",

"John Lennon": "https://wallpaperaccess.com/full/3599288.jpg",

"blink-182": "https://th.bing.com/th/id/R.509afc28b0afe56eccfe9923532c0ba7?rik=Vj9uBEPVe5GOgw&pid=ImgRaw&r=0",

"Green Day": "https://wallpapercat.com/w/full/a/b/7/1238822-2016x1134-desktop-hd-green-day-band-background.jpg",

"Ray Vaughn": "https://hiphop-n-more.com/wp-content/uploads/2025/05/ray-vaughn-hoe-era.jpg",

"Ava Max": "https://media.vanityfair.com/photos/5c5325d33889055ec0570bcf/16:9/w_2000,h_1125,c_limit/t-ava-max-interview.jpg",

"Ellie Goulding": "https://wallpapercat.com/w/full/5/6/1/272694-1920x1200-desktop-hd-ellie-goulding-wallpaper-image.jpg",

"Bebe Rexha": "https://people.com/thmb/1jhihZcU6SvRt7gL_dt51pe9EEc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/bebe-rexha-061923-3-d5dec6f54ee0420ab614355f561a8aa5.jpg",

"Twenty One Pilots": "https://images.kerrangcdn.com/images/2025/04/twentyonepilots-MasonCastino-2025-1.jpg?auto=compress&fit=max&w=2048",

"42 Dugg": "https://wallpaperaccess.com/full/7147165.jpg",

"Dua Lipa": "https://numero.com/wp-content/uploads/2026/05/dua_lipa_pop-up_paris_augustinus_bader_2.jpg",

"Camila Cabello": "https://images.hdqwalls.com/wallpapers/camila-cabello-2025-3s.jpg",

"mgk": "https://www.morecore.de/wp-content/uploads/machine-gun-kelly-mgk-dont-let-me-go-video-01-2024-scaled.jpg",

"Kygo": "https://www.euphoriazine.com/wp-content/uploads/2024/06/kygo-1-scaled.jpg",

"Oasis": "https://wallpaperaccess.com/full/1971477.jpg",

"Blur": "https://wallpapercave.com/wp/wp6619475.jpg",

"Linkin Park": "https://images.kerrangcdn.com/images/Linkin-Park-Mike-Shinoda-Emily-Armstrong-March-2025-promo-credit-Jimmy-Fontaine-2.jpg?auto=compress&fit=max&w=2048",

"Taylor Swift": "https://people.com/thmb/u_xzZ0H4Xwgc54n1wTfnmz-xHcU=/filters:no_upscale():max_bytes(150000):strip_icc():format(jpeg)/Taylor-Swift-Reputation-081824-01-9c2cc19b358f42fbb8ae582b8e12c027.jpg",

"Survivor": "https://www.billboard.com/wp-content/uploads/2023/02/Survivor-1984-billboard-1548.jpg",

"Journey": "https://img-cdn.brainberries.co/wp-content/uploads/2019/10/Steve-Perry-%E2%80%93-Journey-1024x696.jpg",

"Nickelback": "https://media.distractify.com/brand-img/btC0dGyRc/0x0/gettyimages-923131452-1570557842877.jpg",

"JAŸ-Z": "https://wallpapers.com/images/hd/jay-z-with-fierce-expression-u19lflcy9w649my1.jpg",

"Luke Bryan": "https://www.redlightmanagement.com/wp-content/uploads/2024/02/Luke-Bryan-2024-1-scaled.jpg",

"Sleepy Hallow": "https://wallpaperaccess.com/full/9289499.jpg",

"Lil Keed": "https://www.hotnewhiphop.com/imgprst/2292x1200-fit-81-auto/artist/93/48/1570484893_8dd2eb11bae9a5b0719cf07448f289f3.jpg",

"CTID": "https://i.cdn.newsbytesapp.com/images/l90520260108031103.jpeg",

"Luke Combs": "https://savingcountrymusic.com/wp-content/uploads/2026/03/luke-combs-1200x628.jpg",

"Eazy-E": "https://wallpaperbat.com/img/425824-eazy-e-image.jpg",

"Mobb Deep": "https://wallpapercave.com/wp/wp2339927.jpg",

"The White Stripes": "https://cdn-p.smehost.net/sites/9ef434e5ac094002b4a5dc8d926b2107/wp-content/uploads/2023/03/ws-elephant-hp.jpg",

"NAV": "https://wallpaperaccess.com/full/696179.jpg",

"Nirvana": "https://images.wallpapersden.com/image/download/nirvana-band-glasses_amtraG6UmZqaraWkpJRmbmdlrWZlbWU.jpg",

"Busta Rhymes": "https://cdn.amomama.com/f5729b50224a804274ca6f31ae7c76fbe4716e1dace5dd1f32601db4a79ff097.jpg",

"OHGEESY": "https://image-cdn.hypb.st/https://hypebeast.com/image/2023/01/A-Decade-Into-His-Career-Rapper-OhGeesy-Is-Just-Getting-Started-2.jpg?w=1600&cbr=1&q=90&fit=max",

"Shoreline Mafia": "https://image-cdn.hypb.st/https://hypebeast.com/image/2025/04/08/in-conversation-with-shoreline-mafia-interview-ohgeesy-fenix-flexin-back-in-bidness-coachella-reunion-tw.jpg?w=1080&cbr=1&q=90&fit=max",

"Frank Sinatra": "https://wallpaperaccess.com/full/4433479.png",

  "Pooh Shiesty": "https://wallpapercat.com/w/full/7/b/f/2281619-2560x1707-desktop-hd-pooh-shiesty-background-image.jpg",

  "JAY-Z": "https://cdn.wallpapersafari.com/36/78/Rz0m5G.jpg",

  "PARTYNEXTDOOR": "https://media.gq.com/photos/5e7b7d50c493b1000814cf4b/16:9/pass/gq%20march%202020%205%20questions%20we're%20asking%20ahead%20of%20new%20partynextdoor%20album.jpg",

  "Elvis Presley": "https://robbreport.com/wp-content/uploads/2026/08/elvis-presley.jpg?w=1000",

  "Skillet": "https://dynamicmedia.livenationinternational.com/g/g/z/7ecf6ea2-9e2a-4b51-a52e-1ffd78cd76c7.jpg?format=webp&width=3840&quality=75",

  "NEIKED": "https://concord.com/wp-content/uploads/2023/11/neiked.jpg",

  "N.E.R.D": "https://static01.nyt.com/images/2017/12/17/arts/17NERD4/17NERD4-superJumbo.jpg",

  "The Neptunes": "https://www.vibe.com/wp-content/uploads/2024/04/GettyImages-81945577.jpg?w=2048&h=1152",

  "Lil Tecca": "https://old.raptv.com/wp-content/uploads/lil-tecca-out-of-love-do-they-really-love-you-project-new-release-stream.png",

  "Lil Mosey": "https://wallpaperaccess.com/full/1185636.jpg",

  "Lil Peep": "https://wallpapercave.com/wp/wp4758093.jpg",

  "Lil Jon": "https://d.newsweek.com/en/full/2533700/lil-jon.jpg?w=1200&f=1b7e7157fce2cbb3c2020d911ed6599d",

  "Rich Gang": "https://www.sqoop.co.ug/wp-content/uploads/2016/12/DSC_0690.jpg",

  "Rich Homie Quan": "https://ktla.com/wp-content/uploads/sites/4/2024/09/GettyImages-929935342.crop_.jpg",

  "Vince Staples": "https://www.nme.com/wp-content/uploads/2022/04/Vince-Staples_press-shot_Photo-cred-Zamar-Velez1-1392x884.jpg",

 "\u006e\u0075\u006c\u006c\u005f\u0061\u0072\u0074\u0069\u0073\u0074": "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0061\u006c\u006c\u0070\u0061\u0070\u0065\u0072\u0061\u0063\u0063\u0065\u0073\u0073\u002e\u0063\u006f\u006d\u002f\u0066\u0075\u006c\u006c\u002f\u0033\u0038\u0039\u0037\u0035\u0038\u0033\u002e\u006a\u0070\u0067",
 
  "Selena Gomez": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/selena-gomez-gettyimages-2153676631-66db1f338cc1e.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",

  "MGMT": "https://wallpapercave.com/wp/wp2479963.jpg",

  "Coldplay": "https://www.rollingstone.com/wp-content/uploads/2023/01/coldplay-jimmy-kimmel.jpg",

  "IShowSpeed": "https://img.buzzfeed.com/buzzfeed-static/static/2023-08/16/22/asset/767dbadf1cec/sub-buzz-5134-1692224841-8.jpg?downsize=1840:*&output-format=jpg&output-quality=auto",

  "Kai Cenat": "https://theshaderoom.com/wp-content/uploads/2023/07/Kai-Cenat-Internet-Empire-Career-e1689630153850.jpg?w=1140",

  "Stromae": "https://www.pixelstalk.net/wp-content/uploads/2025/08/Stromae-Black-and-White-Portrait-Wallpaper-with-Moody-Expression-and-Turtleneck-Sweater.jpg",

  "Mobb Deep": "https://hiphophero.com/static/uploads/5/2023/08/Havoc-Hip-Hop-Hero-1.jpg",

  "Rich The Kid": "https://www.hotnewhiphop.com/i/v1/0x0-cover-81-auto/2023/05/Rich-The-Kid-Billboard-Fan-Packs-Bundle-Rule-e1683405005835.jpg",

  "Jay Rock": "https://wallpaperaccess.com/full/10972969.jpg",

  "A$AP Ferg": "https://wallpapercave.com/wp/wp7254395.jpg",

  "A$AP Mob": "https://wallpapercave.com/wp/wp6369997.jpg",

  "Frank Ocean": "https://wallpapers.com/images/hd/black-and-white-frank-ocean-wbdua3rbonhm6c8d.jpg",

  "Ariana Grande": "https://entertainmentnow.com/wp-content/uploads/2026/01/Ariana-Grande.jpg",

  "Fred again..": "https://www.scotsman.com/jpim-static/image/2025/09/29/13/25/British-producer-and-DJ-Fred-Again.jpeg?trim=1261",

  "d4vd": "https://www.nme.com/wp-content/uploads/2023/03/d4vd-artist-3.jpg",

  "KSI": "https://facts.net/wp-content/uploads/2023/07/32-facts-about-ksi-1690801213.jpg",

  "Tyler, The Creator": "https://media.gq.com/photos/60da1ae7f1da6f59930e7f96/16:9/w_2560%2Cc_limit/1325807671",

  "PlaqueBoyMax": "https://wallpapercave.com/wp/wp16385172.webp",

  "6ix9ine": "https://www.nme.com/wp-content/uploads/2020/05/Tekashi-6ix9ine-1.jpg",

  "A Boogie Wit da Hoodie": "https://wallpapercat.com/w/full/b/d/9/2259459-3000x1400-desktop-dual-screen-a-boogie-wit-da-hoodie-wallpaper-photo.jpg",

  "Tory Lanez": "https://wallpaperaccess.com/full/1380032.jpg",

  "Rod Wave": "https://cdn.wallpapersafari.com/47/83/IKvCt8.jpg",

  "Tee Grizzley": "https://s1.ticketm.net/dam/a/ddc/e6a9eab3-cc41-43e0-b638-1867913f8ddc_SOURCE",

  "Young Stoner Life": "https://www.rollingstone.com/wp-content/uploads/2023/06/Young-Thug-Gunna.jpg?w=1581&h=1054&crop=1",

  "Will Smith": "https://cdn.mos.cms.futurecdn.net/NAQFgf3uaa272fY8MsQZML.jpg",

  "Weezer": "https://wallpapers.com/images/hd/weezer-band-members-pose-mfdwufu3yw5hucgp.jpg",

  "AZ Chike": "https://parlemag.com/wp-content/uploads/2025/03/Who-is-AZ-Chike-800x500.jpg",

  "Paul McCartney": "https://wallpapercave.com/wp/NyssFAQ.jpg",

  "Chris Brown": "https://th.bing.com/th/id/R.a600cadb6766acc7c574f074ffb94dc1?rik=OIoD%2b4SrGDH9gA&riu=http%3a%2f%2fm.gettywallpapers.com%2fwp-content%2fuploads%2f2023%2f12%2fChris-Brown-Desktop-Wallpaper.jpg&ehk=EJV4LkYKVH8XELhjHQaF8TETomuwdy1iAZVHVszqqB0%3d&risl=&pid=ImgRaw&r=0"

//https://4kwallpapers.com/images/wallpapers/chris-brown-3840x2160-16381.jpeg
};