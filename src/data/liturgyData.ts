import { LiturgyItem, HymnItem, ReflectionItem } from '../types';

export const PARISH_NAME = "St. Mary's Parish";

export const ORDER_OF_MASS: LiturgyItem[] = [
  {
    id: 'entrance-antiphon',
    tag: 'PROCESSIONAL',
    title: 'Entrance Antiphon',
    citation: 'Introit — Gaudeamus omnes in Domino',
    latinAntiphon: 'Gaudeamus omnes in Domino, diem festum celebrantes sub honore Mariae Virginis: de cuius Assumptione gaudent Angeli, et collaudant Filium Dei.',
    content: 'Let us all rejoice in the Lord, as we celebrate the feast day in honour of the Virgin Mary, at whose Assumption the Angels rejoice and praise the Son of God.',
    category: 'antiphon',
  },
  {
    id: 'first-reading',
    tag: 'OLD TESTAMENT',
    title: 'First Reading',
    citation: 'Revelation 11:19a; 12:1–6a, 10ab',
    content: `God's temple in heaven was opened, and the ark of his covenant was seen within his temple.\n\nA great portent appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars. She was with child and was crying out in her pangs of birth, in anguish for delivery. Then another portent appeared in heaven: a great red dragon, with seven heads and ten horns, and seven diadems on his heads. His tail swept down a third of the stars of heaven and cast them to the earth. Then the dragon stood before the woman who was about to bear a child, so that he might devour her child as soon as it was born. And she gave birth to a son, a male child, who is to rule all the nations with a rod of iron. But her child was snatched away and taken to God and to his throne; and the woman fled into the wilderness, where she has a place prepared by God.\n\nThen I heard a loud voice in heaven, saying, "Now have come the salvation and the power and the kingdom of our God and the authority of his Messiah!"`,
    category: 'reading',
  },
  {
    id: 'responsorial-psalm',
    tag: 'SUNG RESPONSE',
    title: 'Responsorial Psalm',
    citation: 'Psalm 45:10, 11, 12, 16',
    latinAntiphon: 'Adstitit regina a dextris tuis in vestitu deaurato.',
    content: `℟. The queen stands at your right hand, arrayed in gold.\n\nThe daughters of kings are of your court;\non your right stands the queen in gold of Ophir.\nHear, O daughter, see and incline your ear;\nforget your people and your father's house.\n\n℟. The queen stands at your right hand, arrayed in gold.\n\nSo will the king desire your beauty;\nhe is your lord, pay homage to him.\nThey are escorted amid gladness and joy;\nthey enter the palace of the king.\n\n℟. The queen stands at your right hand, arrayed in gold.`,
    category: 'psalm',
  },
  {
    id: 'second-reading',
    tag: 'EPISTLE',
    title: 'Second Reading',
    citation: '1 Corinthians 15:20–27',
    content: `Brothers and sisters: Christ has been raised from the dead, the first fruits of those who have died. For since death came through a human being, the resurrection of the dead has also come through a human being; for as all die in Adam, so all will be made alive in Christ. But each in his own order: Christ the first fruits, then at his coming those who belong to Christ. Then comes the end, when he hands over the kingdom to God the Father, after he has destroyed every ruler and every authority and power. For he must reign until he has put all his enemies under his feet. The last enemy to be destroyed is death. For "God has put all things in subjection under his feet."`,
    category: 'reading',
  },
  {
    id: 'gospel',
    tag: 'GOSPEL',
    title: 'The Holy Gospel',
    citation: 'Luke 1:39–56 (The Visitation & The Magnificat)',
    content: `Mary set out and went with haste to a Judean town in the hill country, where she entered the house of Zechariah and greeted Elizabeth. When Elizabeth heard Mary's greeting, the child leaped in her womb. And Elizabeth was filled with the Holy Spirit and exclaimed with a loud cry, "Blessed are you among women, and blessed is the fruit of your womb. And why has this happened to me, that the mother of my Lord comes to me? For as soon as I heard the sound of your greeting, the child in my womb leaped for joy. And blessed is she who believed that there would be a fulfillment of what was spoken to her by the Lord."\n\nAnd Mary said:\n"My soul proclaims the greatness of the Lord,\nand my spirit rejoices in God my Savior;\nfor he has looked with favor on the lowliness of his servant.\nSurely, from now on all generations will call me blessed;\nfor the Mighty One has done great things for me,\nand holy is his name.\nHis mercy is for those who fear him\nfrom generation to generation.\nHe has shown strength with his arm;\nhe has scattered the proud in the thoughts of their hearts.\nHe has brought down the powerful from their thrones,\nand lifted up the lowly;\nhe has filled the hungry with good things,\nand sent the rich away empty.\nHe has helped his servant Israel,\nin remembrance of his mercy,\naccording to the promise he made to our ancestors,\nto Abraham and to his descendants forever."\n\nAnd Mary remained with her for about three months and then returned to her home.`,
    category: 'gospel',
  },
  {
    id: 'preface',
    tag: 'EUCHARISTIC PRAYER',
    title: 'Preface of the Assumption',
    citation: 'Praefatio de Assumptione Beatae Mariae Virginis',
    content: `It is truly right and just, our duty and our salvation, always and everywhere to give you thanks, Lord, holy Father, almighty and eternal God, through Christ our Lord.\n\nFor today the Virgin Mother of God was assumed into heaven as the beginning and image of your Church's coming to perfection and a sign of sure hope and comfort to your pilgrim people; rightly you would not allow her to see the corruption of the tomb, since from her own body she marvelously brought forth your incarnate Son, the Author of all life.\n\nAnd so, in company with the choirs of Angels, we praise you, and with joy we proclaim: Holy, Holy, Holy Lord God of hosts...`,
    category: 'prayer',
  },
  {
    id: 'communion-antiphon',
    tag: 'COMMUNION',
    title: 'Communion Antiphon',
    citation: 'Luke 1:48–49',
    latinAntiphon: 'Beatam me dicent omnes generationes, quia fecit mihi magna qui potens est.',
    content: 'All generations shall call me blessed, for the Almighty has done great things for me.',
    category: 'antiphon',
  },
];

export const HYMNS_LIST: HymnItem[] = [
  {
    id: 'sing-of-mary',
    title: 'SING OF MARY, PURE AND LOWLY',
    subtitle: 'A processional hymn of praise to Mary’s humility and her role as Mother of God, sung to the tune "Pleading Savior."',
    tune: 'Pleading Savior (8.7.8.7 D)',
    stanzas: [
      'Sing of Mary, pure and lowly, Virgin Mother undented,\nSing of God’s own Son most holy, Who became her little child.\nFairest child of fairest Mother, God the Lord who came to earth,\nWord made flesh, our very brother, Takes our nature by his birth.',
      'Sing of Jesus, son of Mary, In the home at Nazareth,\nToil and labour cannot weary Love enduring unto death.\nConstant was the love he gave her, Though he went forth from her side,\nForth to preach, and heal, and suffer, Till on Calvary he died.',
      'Glory be to God the Father; Glory be to God the Son;\nGlory be to God the Spirit; Glory to the Three in One.\nFrom the heart of blessed Mary, From all saints the song ascends,\nAnd the Church the strain re-echoes Unto earth’s remotest ends.'
    ],
  },
  {
    id: 'hail-holy-queen',
    title: 'HAIL, HOLY QUEEN, ENTHRONED ABOVE',
    subtitle: 'A traditional Marian anthem drawn from the Salve Regina, honoring Mary as Queen of Heaven and Mother of Mercy.',
    tune: 'Salve Regina Caelitum',
    refrain: 'Triumph, all ye Cherubim! Sing with us, ye Seraphim! Heaven and earth resound the hymn: Salve, Salve, Salve Regina!',
    stanzas: [
      'Hail, holy Queen, enthroned above, O Maria!\nHail, Mother of mercy and of love, O Maria!',
      'Our life, our sweetness here below, O Maria!\nOur hope in sorrow and in woe, O Maria!',
      'And when our life-breath leaves us, O Maria!\nShow us thy Son, Lord Jesus, O Maria!'
    ],
  },
  {
    id: 'immaculate-mary',
    title: 'IMMACULATE MARY',
    subtitle: 'A beloved recessional hymn with the repeated refrain "Ave, Ave, Ave Maria," fitting for the close of the Assumption Mass.',
    tune: 'Lourdes Hymn (11.11 with Refrain)',
    refrain: 'Ave, Ave, Ave Maria! Ave, Ave, Ave Maria!',
    stanzas: [
      'Immaculate Mary, your praises we sing,\nYou reign now in splendor with Jesus our King.',
      'In heaven the blessed your glory proclaim,\nOn earth we your children invoke your fair name.',
      'We pray for our Mother, the Church upon earth,\nAnd bless, Holy Mary, the land of our birth.'
    ],
  },
];

export const REFLECTIONS_LIST: ReflectionItem[] = [
  {
    id: 'why-assumption-matters',
    date: 'AUG 2026',
    title: 'WHY THE ASSUMPTION MATTERS TO THE CHURCH TODAY',
    readTime: '4 MIN READ',
    tag: 'THEOLOGY & HOPE',
    summary: 'The Assumption reveals that our bodily existence is sacred, redeemable, and destined for heavenly glory.',
    fullText: [
      'On November 1, 1950, Pope Pius XII in the Apostolic Constitution Munificentissimus Deus solemnly defined what the faithful had prayed and celebrated for centuries: that the Immaculate Mother of God, having completed the course of her earthly life, was assumed body and soul into heavenly glory.',
      'In a modern culture that frequently swings between the worship of physical youth and the despair of bodily decay, the Assumption of Mary proclaims an invigorating truth: the human body is not a disposable shell, but the sacred temple of the Holy Spirit.',
      'Mary is the first among redeemed humanity to experience full resurrection in Christ. Where she has gone, we her pilgrim children are called to follow in joyful hope.'
    ],
    author: "St. Mary's Theological Pastoral Team"
  },
  {
    id: 'mary-magnificat',
    date: 'AUG 2026',
    title: "MARY'S MAGNIFICAT: A SONG OF HUMILITY AND HOPE",
    readTime: '6 MIN READ',
    tag: 'SCRIPTURE MEDITATION',
    summary: 'An exploration of how the Canticle of Mary upends worldly power and anchors the Christian heart in God’s providence.',
    fullText: [
      'When Mary visits her cousin Elizabeth in the hill country of Judea, her immediate response to Elizabeth’s blessing is not self-congratulation, but a song of pure praise: "Magnificat anima mea Dominum" — "My soul magnifies the Lord."',
      'The Magnificat is the manifesto of the Kingdom of God. It declares that God scatters the proud in their conceits, casts down tyrants from their thrones, fills the hungry with good things, and lifts up the humble.',
      'In the Assumption, we witness the ultimate fulfillment of the Magnificat: the lowly maiden of Nazareth is crowned Queen of Heaven, seated beside her divine Son.'
    ],
    author: "Fr. Thomas, Pastor of St. Mary's"
  },
  {
    id: 'assumption-our-hope',
    date: 'AUG 2026',
    title: 'THE ASSUMPTION AS A SIGN OF OUR OWN HOPE',
    readTime: '3 MIN READ',
    tag: 'SPIRITUAL PILGRIMAGE',
    summary: 'Contemplating Mary taken up into heaven as the bright beacon of our eternal destiny.',
    fullText: [
      'The Second Vatican Council teaches in Lumen Gentium (No. 68) that Mary shines forth upon earth as a sign of sure hope and solace to the people of God during its pilgrimage on earth until the day of the Lord shall arrive.',
      'When we look up to Mary assumed into heaven, we do not gaze upon a distant monarch, but upon our mother who intercedes for our every struggle, grief, and striving.',
      'Let us bring our petitions to her immaculate heart on this great solemnity, confident that her prayers draw us ever closer to Jesus Christ.'
    ],
    author: "Liturgy & Worship Committee"
  }
];
