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
    content: `God's temple in heaven was opened, and the ark of his covenant was seen within his temple.\n\nA great portent appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars. She was with child and was crying out in her pangs of birth, in anguish for delivery. Then another portent appeared in heaven: a great red dragon, with seven heads and ten horns, and seven diadems on his heads. His tail swept down a third of the stars of heaven and cast them to the earth. Then the dragon stood before the woman who was about to bear a child, so that he might devour her child as soon as it was born. And she gave birth to a son, a male child, who is to rule all the nations with a rod of iron. But her child was snatched away and taken to God and to his throne; and the woman fled into the wilderness, where she has a place prepared by God.\n\nThen I heard a loud voice in heaven, saying, "Now have come the salvation and the power and the kingdom of our God and the authority of his Messiah!"`,
    category: "reading",
  },
  {
    id: "responsorial-psalm",
    tag: "SUNG RESPONSE",
    title: "Responsorial Psalm",
    citation: "Psalm 45:10, 11, 12, 16",
    latinAntiphon: "Adstitit regina a dextris tuis in vestitu deaurato.",
    content: `℟. The queen stands at your right hand, arrayed in gold.\n\nThe daughters of kings are of your court;\non your right stands the queen in gold of Ophir.\nHear, O daughter, see and incline your ear;\nforget your people and your father's house.\n\n℟. The queen stands at your right hand, arrayed in gold.\n\nSo will the king desire your beauty;\nhe is your lord, pay homage to him.\nThey are escorted amid gladness and joy;\nthey enter the palace of the king.\n\n℟. The queen stands at your right hand, arrayed in gold.`,
    category: "psalm",
  },
  {
    id: "second-reading",
    tag: "EPISTLE",
    title: "Second Reading",
    citation: "1 Corinthians 15:20–27",
    content: `Brothers and sisters: Christ has been raised from the dead, the first fruits of those who have died. For since death came through a human being, the resurrection of the dead has also come through a human being; for as all die in Adam, so all will be made alive in Christ. But each in his own order: Christ the first fruits, then at his coming those who belong to Christ. Then comes the end, when he hands over the kingdom to God the Father, after he has destroyed every ruler and every authority and power. For he must reign until he has put all his enemies under his feet. The last enemy to be destroyed is death. For "God has put all things in subjection under his feet."`,
    category: "reading",
  },
  {
    id: "gospel",
    tag: "GOSPEL",
    title: "The Holy Gospel",
    citation: "Luke 1:39–56 (The Visitation & The Magnificat)",
    content: `Mary set out and went with haste to a Judean town in the hill country, where she entered the house of Zechariah and greeted Elizabeth. When Elizabeth heard Mary's greeting, the child leaped in her womb. And Elizabeth was filled with the Holy Spirit and exclaimed with a loud cry, "Blessed are you among women, and blessed is the fruit of your womb. And why has this happened to me, that the mother of my Lord comes to me? For as soon as I heard the sound of your greeting, the child in my womb leaped for joy. And blessed is she who believed that there would be a fulfillment of what was spoken to her by the Lord."\n\nAnd Mary said:\n"My soul proclaims the greatness of the Lord,\nand my spirit rejoices in God my Savior;\nfor he has looked with favor on the lowliness of his servant.\nSurely, from now on all generations will call me blessed;\nfor the Mighty One has done great things for me,\nand holy is his name.\nHis mercy is for those who fear him\nfrom generation to generation.\nHe has shown strength with his arm;\nhe has scattered the proud in the thoughts of their hearts.\nHe has brought down the powerful from their thrones,\nand lifted up the lowly;\nhe has filled the hungry with good things,\nand sent the rich away empty.\nHe has helped his servant Israel,\nin remembrance of his mercy,\naccording to the promise he made to our ancestors,\nto Abraham and to his descendants forever."\n\nAnd Mary remained with her for about three months and then returned to her home.`,
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
