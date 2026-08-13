import { LiturgyItem, HymnItem, ReflectionItem } from "../types";

export const PARISH_NAME = "St. Mary's Parish";

export const ORDER_OF_MASS: LiturgyItem[] = [
  {
    id: "entrance-antiphon",
    tag: "PROCESSIONAL",
    title: "Entrance Antiphon",
    citation: "Introit — Gaudeamus omnes in Domino",
    latinAntiphon:
      "Gaudeamus omnes in Domino, diem festum celebrantes sub honore Mariae Virginis: de cuius Assumptione gaudent Angeli, et collaudant Filium Dei.",
    content:
      "Let us all rejoice in the Lord, as we celebrate the feast day in honour of the Virgin Mary, at whose Assumption the Angels rejoice and praise the Son of God.",
    category: "antiphon",
  },
  {
    id: "first-reading",
    tag: "OLD TESTAMENT",
    title: "First Reading",
    citation: "Revelation 11:19a; 12:1–6a, 10ab",
    content: `The sanctuary of God in heaven opened and the ark of the covenant could be seen inside it.  \n\nNow a great sign appeared in heaven: a woman, adorned with the sun, standing on the moon, and with the twelve stars on her head for a crown. She was pregnant, and in labour, crying aloud in the pangs of childbirth. Then a second sign appeared in the sky, a huge red dragon which had seven heads and ten horns, and each of the seven heads crowned with a coronet. Its tail dragged a third of the stars from the sky and dropped them to the earth, and the dragon stopped in front of the woman as she was having the child, so that he could eat it as soon as it was born from its mother. The woman brought a male child into the world, the son who was to rule all the nations with an iron sceptre, and the child was taken straight up to God and to his throne, while the woman escaped into the desert, where God had made a place of safety ready. \n\nThen I heard a voice shout from heaven, ‘Victory and power and empire for ever have been won by our God, and all authority for his Christ.`,
    category: "reading",
  },
  {
    id: "responsorial-psalm",
    tag: "SUNG RESPONSE",
    title: "Responsorial Psalm",
    citation: "Psalm 45:10, 11, 12, 16",
    latinAntiphon: "Adstitit regina a dextris tuis in vestitu deaurato.",
    content: `℟. On your right stands the queen, in garments of gold.\n\nThe daughters of kings are among your loved ones.\nOn your right stands the queen in gold of Ophir.\nListen, O daughter, give ear to my words:\nforget your own people and your father’s house.\n\n℟. On your right stands the queen, in garments of gold.\n\nSo will the king desire your beauty:\nHe is your lord, pay homage to him.\nThey are escorted amid gladness and joy;\nthey pass within the palace of the king.\n\n℟. On your right stands the queen, in garments of gold.`,
    category: "psalm",
  },
  {
    id: "second-reading",
    tag: "EPISTLE",
    title: "Second Reading",
    citation: "1 Corinthians 15:20–27",
    content: `Christ has been raised from the dead, the first-fruits of all who have fallen asleep. Death came through one man and in the same way the resurrection of the dead has come through one man. Just as all men die in Adam, so all men will be brought to life in Christ; but all of them in their proper order: Christ as the first-fruits and then, after the coming of Christ, those who belong to him. After that will come the end, when he hands over the kingdom to God the Father, having done away with every sovereignty, authority and power. For he must be king until he has put all his enemies under his feet and the last of the enemies to be destroyed is death, for everything is to be put under his feet.`,
    category: "reading",
  },
  {
    id: "gospel",
    tag: "GOSPEL",
    title: "The Holy Gospel",
    citation: "Luke 1:39–56 (The Visitation & The Magnificat)",
    content: `Mary set out and went as quickly as she could to a town in the hill country of Judah. She went into Zechariah’s house and greeted Elizabeth. Now as soon as Elizabeth heard Mary’s greeting, the child leapt in her womb and Elizabeth was filled with the Holy Spirit. She gave a loud cry and said, ‘Of all women you are the most blessed, and blessed is the fruit of your womb. Why should I be honoured with a visit from the mother of my Lord? For the moment your greeting reached my ears, the child in my womb leapt for joy. Yes, blessed is she who believed that the promise made her by the Lord would be fulfilled.’\n And Mary said:\n\n‘My soul proclaims the greatness of the Lord and my spirit exults in God my saviour; because he has looked upon his lowly handmaid.  Yes, from this day forward all generations will call me blessed, for the Almighty has done great things for me.  Holy is his name, and his mercy reaches from age to age for those who fear him.  He has shown the power of his arm, he has routed the proud of heart.  He has pulled down princes from their thrones and exalted the lowly.  The hungry he has filled with good things, the rich sent empty away.  He has come to the help of Israel his servant, mindful of his mercy – according to the promise he made to our ancestors – of his mercy to Abraham and to his descendants for ever.’\n\n Mary stayed with Elizabeth about three months and then went back home.`,
    category: "gospel",
  },
  {
    id: "preface",
    tag: "EUCHARISTIC PRAYER",
    title: "Preface of the Assumption",
    citation: "Praefatio de Assumptione Beatae Mariae Virginis",
    content: `It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.\n\nFor today the Virgin Mother of God was assumed into heaven as the beginning and image of your Church's coming to perfection and a sign of sure hope and comfort to your pilgrim people; rightly you would not allow her to see the corruption of the tomb, since from her own body she marvelously brought forth your incarnate Son, the Author of all life.\n\nAnd so, in company with the choirs of Angels, we praise you, and with joy we proclaim: Holy, Holy, Holy Lord God of hosts...`,
    category: "prayer",
  },
  {
    id: "communion-antiphon",
    tag: "COMMUNION",
    title: "Communion Antiphon",
    citation: "Luke 1:48–49",
    latinAntiphon:
      "Beatam me dicent omnes generationes, quia fecit mihi magna qui potens est.",
    content:
      "All generations shall call me blessed, for the Almighty has done great things for me.",
    category: "antiphon",
  },
];

export const HYMNS_LIST: HymnItem[] = [
  {
    id: "holy-mary-now-we-crown-you",
    title: "HOLY MARY, NOW WE CROWN YOU",
    subtitle:
      "A coronation hymn honoring Mary as Queen, sung as the assembly gathers before Mass begins.",
    tune: "", // fill in from your parish hymnal / license source
    refrain:
      "Holy Mary, now we crown you, Honored Queen of all our race; Noble Virgin, may our tribute win your love and gain us grace.",
    moment: "BEFORE ENTRANCE",
    stanzas: [
      "On this day we sing your praises, Purest Maid of all the earth, While the beauty of the Springtime Tells the joy at Jesus’ birth.",
      "Stain of sin hath never marred thee, Mankind’s only spotless bloom; God whose might exceeds the heavens Thou hast sheltered in thy womb.",
      "Glorious Queen, look down in kindness, While before your throne we stand; Bring God’s blessing to your children; Watch our home and guard our land.",
      "Gate of heaven, thou wert Mother To the King of heav’n and earth; Now be Mother to thy subjects, In our souls give Jesus birth.",
      "Queen of heaven, while creation Speaks the grandeur of God’s love, Mold our hearts to seek his glory, Till we reach our homes above.",
    ], // paste licensed text here
  },
  {
    id: "hail-mary-gentle-woman",
    title: "HAIL MARY, GENTLE WOMAN",
    subtitle:
      "A contemporary Marian hymn reflecting on the Annunciation and Visitation, sung during the Collection.",
    tune: "Carey Landry, © OCP",
    refrain:
      "Gentle woman, quiet light, Morning star, so strong and bright.  Gentle Mother, peaceful dove, Teach us wisdom; teach us love.",
    moment: "COLLECTION",
    stanzas: [
      "Hail Mary, full of grace, The Lord is with you.  Blessed are you among women And blest is the fruit of your womb, Jesus.\nHoly Mary, Mother of God, Pray for us sinners now And at the hour of death.  Amen.\n(Refrain)",
      "You were chosen by the Father; You were chosen for the Son.  You were chosen from all women And for woman, shining one.\n(Refrain)",
      "Blessed are you among women, Blest in turn all women, too.  Blessed they with peaceful spirits.\n(Refrain)",
    ], // copyrighted (Carey Landry / OCP) — requires OneLicense.net/CCLI text
  },
  {
    id: "on-this-day-o-beautiful-mother",
    title: "ON THIS DAY, O BEAUTIFUL MOTHER",
    subtitle: "A traditional hymn of Marian devotion offered at the Offertory.",
    tune: "", // fill in from your parish hymnal / license source
    refrain:
      "On this day, O beautiful Mother, On this day we give thee our love; Near thee, Madonna, fondly we hover, Trusting thy gentle care to prove.",
    moment: "OFFERTORY",
    stanzas: [
      "On this day we ask to share, Dearest Mother, thy sweet care; Aid us ere our feet astray Wander from thy guiding way.",
      "Queen of angels, deign to hear Lisping children’s humble pray’r; Young hearts gain, O Virgin pure, Sweetly to thyself allure.",
    ],
  },
  {
    id: "draw-near-and-take",
    title: "DRAW NEAR AND TAKE THE BODY OF THE LORD",
    subtitle:
      "An ancient Eucharistic communion hymn, sung as the faithful approach the altar.",
    tune: "", // possibly the Bangor Antiphonary text — verify with your source
    moment: "COMMUNION",
    stanzas: [
      "Draw near and take the body of your Lord, and drink the holy blood for you outpoured.  Saved by his body and his holy blood, with souls refreshed we give our thanks to God",
      "Christ our Redeemer, God’s eternal Son, has by his cross and blood the vict’ry won.  He gave his life for greatest and for least, himself the off’ring and himself the priest.",
      "Let us approach with faithful hearts sincere and take the pledges of salvation here.  Christ, who in this life all the saints defends, gives all believers life that never ends.",
      "With heav’nly bread he makes the hungry whole, gives living waters to the thirsting soul.  Lord of the nations, to whom all must bow, in this great feast of love be with us now.",
    ],
  },
  {
    id: "virgin-full-of-grace",
    title: "VIRGIN, FULL OF GRACE",
    subtitle: "A meditative Marian communion hymn.",
    tune: "", // verify composer/copyright status before publishing lyrics
    moment: "COMMUNION",
    stanzas: [
      "Virgin, full of grace, purest of our race, Here your children, O Mary!  Maiden of gladness, banish our sadness; Pray for us, O pray for us, O Mary.",
      "Mary, plead for us, intercede for us; Hope of sinners, O Mary!  You are the portal to life immortal; Pray for us, O pray for us, O Mary.",
      "Queen of saints above, wondrous in your love, Hope of sinners, O Mary!  Show us, O Mother, Jesus, our Brother Pray for us, O pray for us, O Mary.",
      "Star of ocean bright, splendor in the night, Guide us homeward, O Mary!  Help, we implore you, Your sons before you; Pray for us, O pray for us, O Mary.",
    ],
  },
  {
    id: "i-hear-the-bells",
    title: "I HEAR THE BELLS",
    subtitle: "A joyful recessional hymn closing the feast day Mass.",
    refrain: "Ave Maria!  Ave, Maria!",
    tune: "", // verify composer/copyright status before publishing lyrics
    moment: "RECESSIONAL",
    stanzas: [
      "I hear the bells of Mary's Ave ringing,Joy to my heart, like angel voices singing,Calling to prayer, with echoes from afar.",
      "O Gabriel, sent down from heaven's bright glory,To tell to all this true and wondrous story.",
      "O Queen assumed, star-crowned in God's celestial light,May thy sweet name be on my lips in death's dark night,Guide me to heaven, O radiant morning star.",
    ],
  },
];

export const REFLECTIONS_LIST: ReflectionItem[] = [
  {
    id: "why-assumption-matters",
    date: "AUG 2026",
    title: "WHY THE ASSUMPTION MATTERS TO THE CHURCH TODAY",
    readTime: "4 MIN READ",
    tag: "THEOLOGY & HOPE",
    summary:
      "The Assumption reveals that our bodily existence is sacred, redeemable, and destined for heavenly glory.",
    fullText: [
      "On November 1, 1950, Pope Pius XII in the Apostolic Constitution Munificentissimus Deus solemnly defined what the faithful had prayed and celebrated for centuries: that the Immaculate Mother of God, having completed the course of her earthly life, was assumed body and soul into heavenly glory.",
      "In a modern culture that frequently swings between the worship of physical youth and the despair of bodily decay, the Assumption of Mary proclaims an invigorating truth: the human body is not a disposable shell, but the sacred temple of the Holy Spirit.",
      "Mary is the first among redeemed humanity to experience full resurrection in Christ. Where she has gone, we her pilgrim children are called to follow in joyful hope.",
    ],
    author: "St. Mary's Theological Pastoral Team",
  },
  {
    id: "mary-magnificat",
    date: "AUG 2026",
    title: "MARY'S MAGNIFICAT: A SONG OF HUMILITY AND HOPE",
    readTime: "6 MIN READ",
    tag: "SCRIPTURE MEDITATION",
    summary:
      "An exploration of how the Canticle of Mary upends worldly power and anchors the Christian heart in God’s providence.",
    fullText: [
      'When Mary visits her cousin Elizabeth in the hill country of Judea, her immediate response to Elizabeth’s blessing is not self-congratulation, but a song of pure praise: "Magnificat anima mea Dominum" — "My soul magnifies the Lord."',
      "The Magnificat is the manifesto of the Kingdom of God. It declares that God scatters the proud in their conceits, casts down tyrants from their thrones, fills the hungry with good things, and lifts up the humble.",
      "In the Assumption, we witness the ultimate fulfillment of the Magnificat: the lowly maiden of Nazareth is crowned Queen of Heaven, seated beside her divine Son.",
    ],
    author: "Fr. Thomas, Pastor of St. Mary's",
  },
  {
    id: "assumption-our-hope",
    date: "AUG 2026",
    title: "THE ASSUMPTION AS A SIGN OF OUR OWN HOPE",
    readTime: "3 MIN READ",
    tag: "SPIRITUAL PILGRIMAGE",
    summary:
      "Contemplating Mary taken up into heaven as the bright beacon of our eternal destiny.",
    fullText: [
      "The Second Vatican Council teaches in Lumen Gentium (No. 68) that Mary shines forth upon earth as a sign of sure hope and solace to the people of God during its pilgrimage on earth until the day of the Lord shall arrive.",
      "When we look up to Mary assumed into heaven, we do not gaze upon a distant monarch, but upon our mother who intercedes for our every struggle, grief, and striving.",
      "Let us bring our petitions to her immaculate heart on this great solemnity, confident that her prayers draw us ever closer to Jesus Christ.",
    ],
    author: "Liturgy & Worship Committee",
  },
];
