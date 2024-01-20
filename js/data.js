
const save_img = './src/img/svg/save.svg';
const save_not_img = './src/img/svg/save_not.svg';
const like_img = './src/img/svg/like.svg';
const like_not_img = './src/img/svg/save_not.svg';
let displaySizeX = window.innerWidth;
let hasRenderedNav = false;
let hasRenderedFooter = false;
let posts = [];

const originData = [
	{
		'id': 0,
        'author': 'junus.ergin',
        'author_img': './src/img/Author_junus_ergin.jpg',
        'since': '3 Std.',
		'post_img': './src/img/posts_junus.jpg',
        'post_txt': 'Wie man JavaScript von Null auf 100 in nur 5 Minuten lernt!',
        'like_counter': 137,
        'like_boolean': false,
        'like_url': './src/img/svg/like_not.svg',
        'save_boolean': false,
        'save_url': './src/img/svg/save_not.svg',
        'comments_names': ['kevin', 'ali.papa', 'konrad_apolek', 'nilplex.official', 'malikdem5148', 'danielhxze7856', 'VRM-Of',
                        'user-im2xw9qd5u', 'VISION-IT', 'Sagittarius182', 'user-rj8if3gb3d', 'markschultze7983'],
        'comments_texts': ['Ab welchem Alter kann ich mitmachen?',
             'Ey, was kostet bei Euch?',
             'Ich freue mich sehr darauf, bald bei Euch anzufangen.',
             'Ich häng gerad a "richtig gut werden" ^^',
             'Hi, cooler Beitrag. Ich habe mit deinen Tutorials angefangen Javascript zu lernen Html und CSS habe ich bereits drauf. Deine Videos sind jedes mal, Unterhaltsam und Informativ! Danke für die geleistete Arbeit. Ich habe schon einige Youtuber probiert aber du bist der einzige der alles so anschaulich und übersichtlich erklärt.',
             'Hey Leute, bin seit Juli 23 selbst Jr. Webentiwckler und kann euch versichern: Junus Tipps in diesem Video sind enorm wertvoll!',
             'sehr hilfreich wie immer',
             'Hi Junus kannst du Mal eine Registrierung und ein Login mit Javascript programmieren. Bitte. Vielen Dank.',
             'miene größte Motivation - warum ich wahrscheinl. noch mit 55+ nen Seiteneinstieg mache: <br>2-3 Mega Projektideen <br>Weltweit arbeiten zu können <br>Interviews mit Programmierern - die im Ausland arbeiten - fände ich interessant',
             'Unser Programmierlehrer in der Computerschule sagt aber : JavaScript ist keine Programmiersprache sondern eine Script-Sprache (Code wird nicht kompiliert sondern durch einen Interpreter interpretiert) ... Java allerdings ist eine Programmiersprache',
             'Hallo Junus, guten Morgen. Also.... ? ich habe seit einigen Tagen große Probleme mit meinem OpenOffice. Genau so lange bin ich auch schon am eifrigen "arbeiten" um meine Excel-Dateien wieder normal nutzen zu können. Mein Problem ist, wenn ich in meinem Haushaltsplan, meine monatl. Eintragungen mache, kann ich diese Änderungen nicht mehr abspeichern.  Ich bekomme (immer beim abspeichern) eine Fehlermeldung (Fehler beim speichern des Dokuments ..... Fehler beim anlegen . Sicherungskopie konnte nicht erstellt werden). Ich arbeite mit OpenOffice 4.1.15 . Rausgefunden habe ich - mittlerweile -, dass das an der  "JRE-Javalaufzeitumgebung" liegen soll (???). Da ich keine bis sehr sehr wenig Ahnung habe, möchte ich dich gerne um Hilfe und Rat bitten',
             'Danke dass du 5 Minuten meines Lebens mit einem Labervideo verschwendet hast. Auf den Tip "Ruf uns an" wär ich selber ja nie gekommen...',],
    },

    {
		'id': 1,
        'author': 'freifrau.kunigunde',
        'author_img': './src/img/author_pexels-files-7806354.jpg',
        'since': '4 Std.',
        'post_img': './src/img/pexels-maria-pop-339805.jpg',
        'post_txt': 'Stählern und unerschütterlich in der Morgensonne. Ein Ritter auf seinem Weg, eine Legende zu schmieden. Bereit, das Unmögliche zu erobern. Komm auch Du und kämpfe an unserer Seite!',
        'like_counter': 324,
        'like_boolean': false,
        'like_url': './src/img/svg/like_not.svg',
        'save_boolean': false,
        'save_url': './src/img/svg/save_not.svg',
        'comments_names': ['KnightQuest', 'ShiningArmor', 'LegendarySword'],
        'comments_texts': ['Cool, wann gehts los? Gibts Buhurt und wann?', 'Seit ihr wieder auf Kaltstein?', 'Buhurt, yeah!!!'],
    },

    {
		'id': 2,
        'author': 'venecian.nights',
        'author_img': './src/img/author_pexels-iván-cauich-18269857.jpg',
        'since': '6 Std.',
        'post_img': './src/img/pexels-18394075.jpg',
        'post_txt': 'Tauche ein in eine Welt des Glamours und der Geheimnisse! Unser exklusives Masken-Event erwartet dich mit funkelnder Eleganz und verlockenden Geheimnissen. Sei dabei, lass die Masken fallen und die Nacht zum Tag werden!',
        'like_counter': 14,
        'like_boolean': false,
        'like_url': './src/img/svg/like_not.svg',
        'save_boolean': false,
        'save_url': './src/img/svg/save_not.svg',
        'comments_names': ['MysteryMask', 'WineWhispers', 'MidnightMasquerade'],
        'comments_texts': ['Die Spannung steigt! Ich bin bereit, die Nacht zu erobern.', 'Das wird sooo geil werden!!', 'Ein Hauch von Venedig in jedem Glas. Ich kann es kaum erwarten, dabei zu sein.'],
    },

    {
		'id': 3,
        'author': 'dick.und.flauschig',
        'author_img': './src/img/author_pexels-miquel-ferran-gomez-figueroa-3814446.jpg',
        'since': '7 Std.',
        'post_img': './src/img/pexels-kader-d-kahraman-15564188.jpg',
        'post_txt': 'Luftige Leckerbissen! Kreiere deine eigenen Lieblingspfannkuchen nach unserem geheimen Rezept. Zwischen jede Lage kommt ein wenig Liebe. Genieße den Geschmack des Glücks!',
        'like_counter': 117,
        'like_boolean': false,
        'like_url': './src/img/svg/like_not.svg',
        'save_boolean': false,
        'save_url': './src/img/svg/save_not.svg',
        'comments_names': ['SweetTreats', 'PancakeParadise', 'StacksOnStacks'],
        'comments_texts': ['Ein Gaumenschmaus mit jedem Bissen. Ich könnte meinen Bildschirm ablecken!', 'Einfach himmlisch! Ich kann nie genug davon bekommen.', 'Pfannkuchenliebe pur!'],
    },

    {
		'id' : 4,
        'author': 'lick.my.sweat',
        'author_img': './src/img/author_pexels-pixabay-414029.jpg',
        'since': '9 Std.',
        'post_img': './src/img/pexels-sabel-blanco-1638324.jpg',
        'post_txt': 'Hey, ich bin Alex, dein Wegweiser zu deiner besten Form. Lass uns gemeinsam stark sein, deine Ziele erreichen und die Grenzen sprengen. Willst du trainieren?!',
        'like_counter': 38,
        'like_boolean': false,
        'like_url': './src/img/svg/like_not.svg',
        'save_boolean': false,
        'save_url': './src/img/svg/save_not.svg',
        'comments_names': ['FitFamGym', 'SweatAndSuccess', 'IronLadyFitness'],
        'comments_texts': ['Best trainer in the city!', 'Ein Training mit Alex ist eine Veränderung, die du spüren wirst!', 'Alex ist der Weg zu einer stärkeren, gesünderen Version von dir!'],
    },

    {
		'id' : 5,
        'author': 'reenactment.forlive',
        'author_img': './src/img/author_pexels-juan-soler-campello-13102841.jpg',
        'since': '12 Std.',
        'post_img': './src/img/pexels-vlastimil-starec-14173503.jpg',
        'post_txt': 'Tauche ein in die fesselnde Geschichte vergangener Schlachten! Ein einzigartiges Erlebnis erwartet dich. Erforsche das Leben und die Kämpfe vergangener Zeiten, live und intensiv. Sei Teil dieser unvergesslichen Reise!',
        'like_counter': 68,
        'like_boolean': false,
        'like_url': './src/img/svg/like_not.svg',
        'save_boolean': false,
        'save_url': './src/img/svg/save_not.svg',
        'comments_names': ['TimeTraveler', 'BattlefieldsOfOld', 'LivingHistory'],
        'comments_texts': ['Ein historisches Erlebnis! Ein Muss für Geschichtsliebhaber und Abenteurer!', 'Die Vergangenheit erwacht zu neuem Leben! Ich bin dabei, wer noch?', 'Fühl die Spannung vergangener Schlachten! Dieses Event ist episch!'],
    },
]

