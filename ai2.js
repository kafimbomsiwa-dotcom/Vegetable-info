/* ==========================================
   VEGETABLE CROPS WEBSITE
   Expanded 60-Crop Database, Learning Content & Logic
   (Combined & Upgraded Version)
========================================== */

/* 1. IMAGE FILES (60 Crops) */

const cropImages = {
    Amaranthus: "image/amaranthus.jpg",
    Cabbage: "image/cabbage.jpg",
    Spinach: "image/spinach.jpg",
    Lettuce: "image/lettuce.jpg",
    Pumpkin: "image/pumpkin.jpg",
    Watermelon: "image/watermelon2.jpg",
    Cucumber: "image/cucumber.jpg",
    Carrot: "image/carrot.jpg",
    Onion: "image/onion.jpg",
    Garlic: "image/garlic.jpg",
    Okra: "image/okra.jpg",
    Tomato: "image/tomato.jpg",
    Eggplant: "image/eggplant.jpg",
    SweetPepper: "image/sweetpepper.jpg",
    HotPepper: "image/hotpepper.jpg",
    Potato: "image/potato.jpg",
    SweetPotato: "image/sweetpotato.jpg",
    Cassava: "image/cassava.jpg",
    Beetroot: "image/beetroot.jpg",
    Radish: "image/radish.jpg",
    Turnip: "image/turnip.jpg",
    Leek: "image/leek.jpg",
    Shallot: "image/shallot.jpg",
    SpringOnion: "image/springonion.jpg",
    Broccoli: "image/broccoli.jpg",
    Cauliflower: "image/cauliflower.jpg",
    Kale: "image/kale.jpg",
    SwissChard: "image/swisschard.jpg",
    Celery: "image/celery.jpg",
    Parsley: "image/parsley.jpg",
    Coriander: "image/coriander.jpg",
    Basil: "image/basil.jpg",
    Peas: "image/peas.jpg",
    GreenBeans: "image/greenbeans.jpg",
    Cowpeas: "image/cowpeas.jpg",
    Soybean: "image/soybean.jpg",
    Zucchini: "image/zucchini.jpg",
    Butternut: "image/butternut.jpg",
    Melon: "image/melon.jpg",
    BitterGourd: "image/bittergourd.jpg",
    BottleGourd: "image/bottlegourd.jpg",
    RidgeGourd: "image/ridgegourd.jpg",
    SnakeGourd: "image/snakegourd.jpg",
    Taro: "image/taro.jpg",
    Yam: "image/yam.jpg",
    Ginger: "image/ginger.jpg",
    Turmeric: "image/turmeric.jpg",
    Asparagus: "image/asparagus.jpg",
    Artichoke: "image/artichoke.jpg",
    BrusselsSprouts: "image/brusselssprouts.jpg",
    Kohlrabi: "image/kohlrabi.jpg",
    Watercress: "image/watercress.jpg",
    Arugula: "image/arugula.jpg",
    BokChoy: "image/bokchoy.jpg",
    Nightshade: "image/nightshade.jpg",
    EthiopianMustard: "image/ethiopianmustard.jpg",
    Cleome: "image/cleome.jpg",
    Moringa: "image/moringa.jpg",
    JuteMallow: "image/jutemallow.jpg",
    SweetCorn: "image/sweetcorn.jpg"
};


/* 2. BOTANICAL CLASSIFICATION (60 Crops) */

const botanicalData = {
    Amaranthus: { commonName: "Amaranth; mchicha", scientificName: "Amaranthus spp.", family: "Amaranthaceae", genus: "Amaranthus", species: "Several species" },
    Cabbage: { commonName: "Cabbage", scientificName: "Brassica oleracea var. capitata", family: "Brassicaceae", genus: "Brassica", species: "oleracea" },
    Spinach: { commonName: "Spinach", scientificName: "Spinacia oleracea", family: "Amaranthaceae", genus: "Spinacia", species: "oleracea" },
    Lettuce: { commonName: "Lettuce", scientificName: "Lactuca sativa", family: "Asteraceae", genus: "Lactuca", species: "sativa" },
    Pumpkin: { commonName: "Pumpkin", scientificName: "Cucurbita spp.", family: "Cucurbitaceae", genus: "Cucurbita", species: "Several species" },
    Watermelon: { commonName: "Watermelon", scientificName: "Citrullus lanatus", family: "Cucurbitaceae", genus: "Citrullus", species: "lanatus" },
    Cucumber: { commonName: "Cucumber", scientificName: "Cucumis sativus", family: "Cucurbitaceae", genus: "Cucumis", species: "sativus" },
    Carrot: { commonName: "Carrot", scientificName: "Daucus carota subsp. sativus", family: "Apiaceae", genus: "Daucus", species: "carota" },
    Onion: { commonName: "Onion", scientificName: "Allium cepa", family: "Amaryllidaceae", genus: "Allium", species: "cepa" },
    Garlic: { commonName: "Garlic", scientificName: "Allium sativum", family: "Amaryllidaceae", genus: "Allium", species: "sativum" },
    Okra: { commonName: "Okra", scientificName: "Abelmoschus esculentus", family: "Malvaceae", genus: "Abelmoschus", species: "esculentus" },
    Tomato: { commonName: "Tomato", scientificName: "Solanum lycopersicum", family: "Solanaceae", genus: "Solanum", species: "lycopersicum" },
    Eggplant: { commonName: "Eggplant; Biringanya", scientificName: "Solanum melongena", family: "Solanaceae", genus: "Solanum", species: "melongena" },
    SweetPepper: { commonName: "Sweet Pepper; Hoho", scientificName: "Capsicum annuum", family: "Solanaceae", genus: "Capsicum", species: "annuum" },
    HotPepper: { commonName: "Hot Pepper; Pilipili", scientificName: "Capsicum frutescens", family: "Solanaceae", genus: "Capsicum", species: "frutescens" },
    Potato: { commonName: "Irish Potato", scientificName: "Solanum tuberosum", family: "Solanaceae", genus: "Solanum", species: "tuberosum" },
    SweetPotato: { commonName: "Sweet Potato; Viazi Tamu", scientificName: "Ipomoea batatas", family: "Convolvulaceae", genus: "Ipomoea", species: "batatas" },
    Cassava: { commonName: "Cassava Leaves; Kisamvu", scientificName: "Manihot esculenta", family: "Euphorbiaceae", genus: "Manihot", species: "esculenta" },
    Beetroot: { commonName: "Beetroot", scientificName: "Beta vulgaris", family: "Amaranthaceae", genus: "Beta", species: "vulgaris" },
    Radish: { commonName: "Radish", scientificName: "Raphanus sativus", family: "Brassicaceae", genus: "Raphanus", species: "sativus" },
    Turnip: { commonName: "Turnip", scientificName: "Brassica rapa subsp. rapa", family: "Brassicaceae", genus: "Brassica", species: "rapa" },
    Leek: { commonName: "Leek", scientificName: "Allium ampeloprasum", family: "Amaryllidaceae", genus: "Allium", species: "ampeloprasum" },
    Shallot: { commonName: "Shallot", scientificName: "Allium cepa var. aggregatum", family: "Amaryllidaceae", genus: "Allium", species: "cepa" },
    SpringOnion: { commonName: "Spring Onion", scientificName: "Allium fistulosum", family: "Amaryllidaceae", genus: "Allium", species: "fistulosum" },
    Broccoli: { commonName: "Broccoli", scientificName: "Brassica oleracea var. italica", family: "Brassicaceae", genus: "Brassica", species: "oleracea" },
    Cauliflower: { commonName: "Cauliflower", scientificName: "Brassica oleracea var. botrytis", family: "Brassicaceae", genus: "Brassica", species: "oleracea" },
    Kale: { commonName: "Kale; Sukuma wiki", scientificName: "Brassica oleracea var. acephala", family: "Brassicaceae", genus: "Brassica", species: "oleracea" },
    SwissChard: { commonName: "Swiss Chard", scientificName: "Beta vulgaris subsp. vulgaris", family: "Amaranthaceae", genus: "Beta", species: "vulgaris" },
    Celery: { commonName: "Celery", scientificName: "Apium graveolens", family: "Apiaceae", genus: "Apium", species: "graveolens" },
    Parsley: { commonName: "Parsley", scientificName: "Petroselinum crispum", family: "Apiaceae", genus: "Petroselinum", species: "crispum" },
    Coriander: { commonName: "Coriander; Dania", scientificName: "Coriandrum sativum", family: "Apiaceae", genus: "Coriandrum", species: "sativum" },
    Basil: { commonName: "Basil", scientificName: "Ocimum basilicum", family: "Lamiaceae", genus: "Ocimum", species: "basilicum" },
    Peas: { commonName: "Garden Peas", scientificName: "Pisum sativum", family: "Fabaceae", genus: "Pisum", species: "sativum" },
    GreenBeans: { commonName: "Green Beans", scientificName: "Phaseolus vulgaris", family: "Fabaceae", genus: "Phaseolus", species: "vulgaris" },
    Cowpeas: { commonName: "Cowpea Leaves; Kunde", scientificName: "Vigna unguiculata", family: "Fabaceae", genus: "Vigna", species: "unguiculata" },
    Soybean: { commonName: "Soybean", scientificName: "Glycine max", family: "Fabaceae", genus: "Glycine", species: "max" },
    Zucchini: { commonName: "Zucchini", scientificName: "Cucurbita pepo", family: "Cucurbitaceae", genus: "Cucurbita", species: "pepo" },
    Butternut: { commonName: "Butternut Squash", scientificName: "Cucurbita moschata", family: "Cucurbitaceae", genus: "Cucurbita", species: "moschata" },
    Melon: { commonName: "Muskmelon / Melon", scientificName: "Cucumis melo", family: "Cucurbitaceae", genus: "Cucumis", species: "melo" },
    BitterGourd: { commonName: "Bitter Gourd", scientificName: "Momordica charantia", family: "Cucurbitaceae", genus: "Momordica", species: "charantia" },
    BottleGourd: { commonName: "Bottle Gourd", scientificName: "Lagenaria siceraria", family: "Cucurbitaceae", genus: "Lagenaria", species: "siceraria" },
    RidgeGourd: { commonName: "Ridge Gourd", scientificName: "Luffa acutangula", family: "Cucurbitaceae", genus: "Luffa", species: "acutangula" },
    SnakeGourd: { commonName: "Snake Gourd", scientificName: "Trichosanthes cucumerina", family: "Cucurbitaceae", genus: "Trichosanthes", species: "cucumerina" },
    Taro: { commonName: "Taro / Arrowroot; Majimbi", scientificName: "Colocasia esculenta", family: "Araceae", genus: "Colocasia", species: "esculenta" },
    Yam: { commonName: "Yam", scientificName: "Dioscorea spp.", family: "Dioscoreaceae", genus: "Dioscorea", species: "Several species" },
    Ginger: { commonName: "Ginger; Tangawizi", scientificName: "Zingiber officinale", family: "Zingiberaceae", genus: "Zingiber", species: "officinale" },
    Turmeric: { commonName: "Turmeric; Manjano", scientificName: "Curcuma longa", family: "Zingiberaceae", genus: "Curcuma", species: "longa" },
    Asparagus: { commonName: "Asparagus", scientificName: "Asparagus officinalis", family: "Asparagaceae", genus: "Asparagus", species: "officinalis" },
    Artichoke: { commonName: "Globe Artichoke", scientificName: "Cynara cardunculus", family: "Asteraceae", genus: "Cynara", species: "cardunculus" },
    BrusselsSprouts: { commonName: "Brussels Sprouts", scientificName: "Brassica oleracea var. gemmifera", family: "Brassicaceae", genus: "Brassica", species: "oleracea" },
    Kohlrabi: { commonName: "Kohlrabi", scientificName: "Brassica oleracea var. gongylodes", family: "Brassicaceae", genus: "Brassica", species: "oleracea" },
    Watercress: { commonName: "Watercress", scientificName: "Nasturtium officinale", family: "Brassicaceae", genus: "Nasturtium", species: "officinale" },
    Arugula: { commonName: "Arugula / Rocket", scientificName: "Eruca vesicaria", family: "Brassicaceae", genus: "Eruca", species: "vesicaria" },
    BokChoy: { commonName: "Bok Choy", scientificName: "Brassica rapa subsp. chinensis", family: "Brassicaceae", genus: "Brassica", species: "rapa" },
    Nightshade: { commonName: "African Nightshade; Mnavu", scientificName: "Solanum scabrum", family: "Solanaceae", genus: "Solanum", species: "scabrum" },
    EthiopianMustard: { commonName: "Ethiopian Mustard; Kandis", scientificName: "Brassica carinata", family: "Brassicaceae", genus: "Brassica", species: "carinata" },
    Cleome: { commonName: "Spider Plant; Mgagani", scientificName: "Cleome gynandra", family: "Cleomaceae", genus: "Cleome", species: "gynandra" },
    Moringa: { commonName: "Moringa Leaves; Mlonge", scientificName: "Moringa oleifera", family: "Moringaceae", genus: "Moringa", species: "oleifera" },
    JuteMallow: { commonName: "Jute Mallow; Mlenda", scientificName: "Corchorus olitorius", family: "Malvaceae", genus: "Corchorus", species: "olitorius" },
    SweetCorn: { commonName: "Sweet Corn", scientificName: "Zea mays var. saccharata", family: "Poaceae", genus: "Zea", species: "mays" }
};


/* 3. DETAILED CROP PROFILES & CONTENT */

const cropProfiles = {
    Amaranthus:      { group: "Leafy vegetable", part: "Leaves, tender stems (and grain)", cycle: "Annual" },
    Cabbage:         { group: "Cole crop (Brassica)", part: "Leafy head", cycle: "Biennial, grown as an annual" },
    Spinach:         { group: "Leafy vegetable", part: "Leaves", cycle: "Annual" },
    Lettuce:         { group: "Leafy salad vegetable", part: "Leaves or head", cycle: "Annual" },
    Pumpkin:         { group: "Cucurbit", part: "Mature fruit, leaves, seeds", cycle: "Annual" },
    Watermelon:      { group: "Cucurbit", part: "Ripe fruit flesh", cycle: "Annual" },
    Cucumber:        { group: "Cucurbit", part: "Immature fruit", cycle: "Annual" },
    Carrot:          { group: "Root vegetable", part: "Storage taproot", cycle: "Biennial, grown as an annual" },
    Onion:           { group: "Allium (bulb crop)", part: "Bulb (and green leaves)", cycle: "Biennial, grown as an annual" },
    Garlic:          { group: "Allium (bulb crop)", part: "Bulb of cloves", cycle: "Annual (propagated by cloves)" },
    Okra:            { group: "Fruit vegetable", part: "Immature pods", cycle: "Annual (sometimes perennial)" },
    Tomato:          { group: "Solanaceous fruit vegetable", part: "Fruit (berry)", cycle: "Annual in cultivation" },
    Eggplant:        { group: "Solanaceous fruit vegetable", part: "Fruit (berry)", cycle: "Annual (perennial in the tropics)" },
    SweetPepper:     { group: "Solanaceous fruit vegetable", part: "Fruit", cycle: "Annual (perennial in the tropics)" },
    HotPepper:       { group: "Solanaceous fruit vegetable", part: "Fruit", cycle: "Annual (perennial in the tropics)" },
    Potato:          { group: "Tuber crop", part: "Stem tuber", cycle: "Annual" },
    SweetPotato:     { group: "Root and tuber crop", part: "Storage roots and leaves", cycle: "Perennial vine grown as an annual" },
    Cassava:         { group: "Root crop (leaf use)", part: "Leaves (and roots)", cycle: "Perennial shrub" },
    Beetroot:        { group: "Root vegetable", part: "Swollen root (and leaves)", cycle: "Biennial, grown as an annual" },
    Radish:          { group: "Root vegetable (Brassica)", part: "Swollen root", cycle: "Annual" },
    Turnip:          { group: "Root vegetable (Brassica)", part: "Swollen root and leaves", cycle: "Biennial, grown as an annual" },
    Leek:            { group: "Allium", part: "Leaf bases (shank) and leaves", cycle: "Biennial, grown as an annual" },
    Shallot:         { group: "Allium (bulb crop)", part: "Clustered bulbs", cycle: "Perennial, grown as an annual" },
    SpringOnion:     { group: "Allium", part: "Green leaves and white base", cycle: "Perennial, grown as an annual" },
    Broccoli:        { group: "Cole crop (Brassica)", part: "Flower head and stem", cycle: "Annual or biennial" },
    Cauliflower:     { group: "Cole crop (Brassica)", part: "Curd (immature flower head)", cycle: "Annual or biennial" },
    Kale:            { group: "Cole crop (leafy Brassica)", part: "Leaves", cycle: "Biennial, grown as an annual" },
    SwissChard:      { group: "Leafy vegetable", part: "Leaves and stalks", cycle: "Biennial, grown as an annual" },
    Celery:          { group: "Apiaceae vegetable", part: "Leaf stalks (petioles)", cycle: "Biennial, grown as an annual" },
    Parsley:         { group: "Herb", part: "Leaves", cycle: "Biennial, grown as an annual" },
    Coriander:       { group: "Herb and spice", part: "Leaves and seeds", cycle: "Annual" },
    Basil:           { group: "Herb", part: "Leaves", cycle: "Annual (perennial in warm areas)" },
    Peas:            { group: "Legume", part: "Green seeds or pods", cycle: "Annual" },
    GreenBeans:      { group: "Legume", part: "Immature pods", cycle: "Annual" },
    Cowpeas:         { group: "Legume (leaf use)", part: "Leaves, green pods, seeds", cycle: "Annual" },
    Soybean:         { group: "Legume", part: "Seeds (and green pods as edamame)", cycle: "Annual" },
    Zucchini:        { group: "Cucurbit (summer squash)", part: "Immature fruit", cycle: "Annual" },
    Butternut:       { group: "Cucurbit (winter squash)", part: "Mature fruit", cycle: "Annual" },
    Melon:           { group: "Cucurbit", part: "Ripe fruit flesh", cycle: "Annual" },
    BitterGourd:     { group: "Cucurbit", part: "Immature fruit", cycle: "Annual vine" },
    BottleGourd:     { group: "Cucurbit", part: "Tender fruit (and shoots)", cycle: "Annual vine" },
    RidgeGourd:      { group: "Cucurbit", part: "Tender fruit", cycle: "Annual vine" },
    SnakeGourd:      { group: "Cucurbit", part: "Tender fruit", cycle: "Annual vine" },
    Taro:            { group: "Root and tuber crop", part: "Corms, cormels and leaves", cycle: "Perennial, grown as an annual" },
    Yam:             { group: "Root and tuber crop", part: "Tuber", cycle: "Perennial vine grown as an annual" },
    Ginger:          { group: "Spice (rhizome crop)", part: "Rhizome", cycle: "Perennial, grown as an annual" },
    Turmeric:        { group: "Spice (rhizome crop)", part: "Rhizome", cycle: "Perennial, grown as an annual" },
    Asparagus:       { group: "Perennial vegetable", part: "Young shoots (spears)", cycle: "Perennial" },
    Artichoke:       { group: "Perennial vegetable", part: "Immature flower bud", cycle: "Perennial" },
    BrusselsSprouts: { group: "Cole crop (Brassica)", part: "Axillary buds (sprouts)", cycle: "Biennial, grown as an annual" },
    Kohlrabi:        { group: "Cole crop (Brassica)", part: "Swollen stem", cycle: "Biennial, grown as an annual" },
    Watercress:      { group: "Leafy salad (aquatic)", part: "Leaves and shoots", cycle: "Perennial" },
    Arugula:         { group: "Leafy salad (Brassica)", part: "Leaves", cycle: "Annual" },
    BokChoy:         { group: "Leafy Brassica", part: "Leaves and stalks", cycle: "Annual or biennial" },
    Nightshade:      { group: "African indigenous vegetable", part: "Leaves and shoot tips", cycle: "Annual" },
    EthiopianMustard:{ group: "African indigenous vegetable", part: "Leaves", cycle: "Annual" },
    Cleome:          { group: "African indigenous vegetable", part: "Leaves and shoot tips", cycle: "Annual" },
    Moringa:         { group: "Tree vegetable", part: "Leaves, pods, seeds", cycle: "Perennial tree" },
    JuteMallow:      { group: "African indigenous vegetable", part: "Leaves and shoot tips", cycle: "Annual" },
    SweetCorn:       { group: "Cereal-type vegetable", part: "Immature kernels on the cob", cycle: "Annual" }
};

const notesCrops = [
    "Okra", "Pumpkin", "Amaranthus", "Tomato", "SweetPepper", "HotPepper", "Potato", "Cabbage",
    "Lettuce", "Watermelon", "Onion", "Garlic", "Carrot", "Cucumber", "Peas", "GreenBeans"
];

/* Detailed Content Objects */
const detailedContent = {
    Okra: {
        about: "Okra (Abelmoschus esculentus) is a mallow-family vegetable grown for its tender green pods, also called lady's fingers or gumbo...",
        history: "The species apparently originated in the Ethiopian Highlands...",
        ecology: "Okra is a hot-weather crop grown from sea level to 1600 m...",
        production: "Prepare the land 2-3 months before planting...",
        management: "Weed throughout the long harvest period...",
        harvesting: "Pods are ready 4-6 days after the bloom opens...",
        marketing: "Grade out crooked, bent or spotted pods..."
    },
    Tomato: {
        about: "Tomato (Solanum lycopersicum) is a Solanaceae fruit vegetable...",
        history: "Wild tomatoes occur in South America, in the coastal desert of Peru...",
        ecology: "Tomato is a warm-season crop; optimum temperature is about 18-27 °C...",
        production: "Sow in a nursery where tomatoes, potatoes, eggplant have not grown...",
        management: "Diseases: late blight, Fusarium, Verticillium and bacterial wilts...",
        harvesting: "Pick shipping tomatoes at the mature-green stage...",
        marketing: "Sort large from small fruit and damaged from sound..."
    }
    // (Other crop notes integrated from crop-content.js can be placed here)
};

const contentSource = {};
Object.keys(detailedContent).forEach(function (crop) {
    contentSource[crop] = notesCrops.includes(crop)
        ? "Source: HT 202 Vegetable Crops course notes (SUA), edited for this site."
        : "Source: general agronomic knowledge. Check local recommendations with your extension officer.";
});

const cropData = {};

Object.keys(botanicalData).forEach(function (crop) {
    const common = botanicalData[crop].commonName;
    const generic = {
        about: crop + " (" + common + ") is an important agricultural vegetable crop cultivated for its high yield, nutrients, and economic value.",
        history: crop + " has a rich background of cultivation spanning traditional production systems and modern farming regions.",
        ecology: "Thrives under optimal temperature ranges, well-drained fertile soils, and regular moisture management.",
        production: "Establish utilizing high-grade seeds or healthy seedlings. Maintain correct spatial arrangements and fertility levels.",
        management: "Implement standard weed controls, routine scouting, and precise plant protection protocols.",
        harvesting: "Harvest at the ideal physiological or marketable stage to guarantee superior product quality.",
        marketing: "Grade and sort produce carefully for local markets, distribution chains, or value addition."
    };
    cropData[crop] = Object.assign({}, generic, detailedContent[crop] || {});
});


/* 4. SHORT INFORMATION FOR THE CROP CARD */

function firstParagraph(text) {
    return String(text || "").split("\n")[0];
}

const vegetableData = {};

Object.keys(cropData).forEach(function (crop) {
    vegetableData[crop] = {
        description: firstParagraph(cropData[crop].about),
        production: firstParagraph(cropData[crop].production),
        harvesting: firstParagraph(cropData[crop].harvesting)
    };
});


/* 5. GET PAGE ELEMENTS & UI INITIALIZATION */

const cropMenu = document.getElementById("cropMenu");
const selectedCropName = document.getElementById("selectedCropName");
const closeCropMenu = document.getElementById("closeCropMenu");
const vegetableSelect = document.getElementById("vegetables");

const topicInformation = document.getElementById("topicInformation");
const topicTitle = document.getElementById("topicTitle");
const topicContent = document.getElementById("topicContent");

const searchInput = document.getElementById("search");
const searchResults = document.getElementById("searchResults");
const clearSearchButton = document.getElementById("clearSearch");
const cropOptions = document.querySelectorAll(".crop-options button");

let currentCrop = "";

if (topicContent) {
    topicContent.style.whiteSpace = "pre-line";
}

let topicSource = null;
if (topicInformation) {
    topicSource = document.createElement("p");
    topicSource.className = "topic-source";
    topicSource.style.fontSize = "0.85rem";
    topicSource.style.opacity = "0.75";
    topicSource.style.marginTop = "12px";
    topicInformation.appendChild(topicSource);
}


/* 6. SEARCH & CLASSIFICATION HELPERS */

const searchableCrops = Object.keys(cropData).map(function (name) {
    return {
        name: name,
        scientificName: botanicalData[name].scientificName,
        image: cropImages[name] || "image/placeholder.jpg"
    };
});

function buildClassificationText(cropName) {
    const botanical = botanicalData[cropName];
    const profile = cropProfiles[cropName];

    let text =
        "Common name: " + botanical.commonName +
        "\nScientific name: " + botanical.scientificName +
        "\nFamily: " + botanical.family +
        "\nGenus: " + botanical.genus +
        "\nSpecies: " + botanical.species;

    if (profile) {
        text +=
            "\nCrop group: " + profile.group +
            "\nEdible part: " + profile.part +
            "\nLife cycle: " + profile.cycle;
    }

    return text;
}

/* 7. DISPLAY CROP INFORMATION */

function showCropInformation(cropName) {
    const vegetable = vegetableData[cropName];
    const botanical = botanicalData[cropName];
    const informationBox = document.getElementById("vegetableInfo");
    const cropImage = document.getElementById("cropImage");

    if (!vegetable || !botanical) return;

    informationBox.hidden = false;

    const infoDescription = document.getElementById("infoDescription");
    const infoClassification = document.getElementById("infoClassification");
    const infoProduction = document.getElementById("infoProduction");
    const infoHarvesting = document.getElementById("infoHarvesting");

    document.getElementById("infoName").textContent = cropName;
    infoDescription.textContent = vegetable.description;
    infoClassification.textContent = buildClassificationText(cropName);
    infoProduction.textContent = vegetable.production;
    infoHarvesting.textContent = vegetable.harvesting;

    [infoDescription, infoClassification, infoProduction, infoHarvesting].forEach(function (el) {
        el.style.whiteSpace = "pre-line";
    });

    // Smooth loading configuration for the selected crop image
    cropImage.loading = "eager";
    cropImage.decoding = "async";
    cropImage.style.opacity = "0";

    cropImage.onload = function () {
        this.hidden = false;
        this.style.opacity = "1";
    };

    cropImage.onerror = function () {
        this.hidden = true;
    };

    cropImage.hidden = false;
    cropImage.alt = cropName + " crop";
    cropImage.src = cropImages[cropName] || "";
}



/* 8. OPEN LEARNING MENU & SELECTION */

function clearActiveTopic() {
    cropOptions.forEach(function (button) {
        button.classList.remove("active");
        button.setAttribute("aria-pressed", "false");
    });
}

function openCropMenu(cropName) {
    if (!cropData[cropName]) return;
    currentCrop = cropName;
    selectedCropName.textContent = cropName + " — Learning Menu";
    cropMenu.classList.add("show");

    topicInformation.classList.remove("show");
    topicTitle.textContent = "";
    topicContent.textContent = "";
    if (topicSource) topicSource.textContent = "";
    clearActiveTopic();
}

function openSelectedCrop(cropName) {
    if (!cropData[cropName]) return;
    if (vegetableSelect) vegetableSelect.value = cropName;

    showCropInformation(cropName);
    openCropMenu(cropName);

    if (searchResults) searchResults.classList.remove("show");
    if (searchInput) {
        searchInput.value = "";
        searchInput.setAttribute("aria-expanded", "false");
    }
    if (clearSearchButton) clearSearchButton.style.display = "none";

    cropMenu.scrollIntoView({ behavior: "smooth", block: "start" });
}


/* ==========================================
   9. SMART SEARCH & AI AGRONOMIST
========================================== */

function displayCropResults(query) {
    if (!searchInput || !searchResults) return;
    const term = query.trim().toLowerCase();
    searchResults.replaceChildren();

    if (clearSearchButton) {
        clearSearchButton.style.display = term ? "block" : "none";
    }

    if (!term) {
        searchResults.classList.remove("show");
        searchInput.setAttribute("aria-expanded", "false");
        return;
    }

    const matches = searchableCrops.filter(function (crop) {
        const botanical = botanicalData[crop.name];
        return (
            crop.name.toLowerCase().includes(term) ||
            crop.scientificName.toLowerCase().includes(term) ||
            botanical.commonName.toLowerCase().includes(term)
        );
    });

    searchInput.setAttribute("aria-expanded", "true");

    if (matches.length > 0) {
        matches.forEach(function (crop) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "search-result";
            button.setAttribute("role", "option");

            const image = document.createElement("img");
image.src = crop.image;
image.alt = "";
image.className = "search-crop-image";
image.loading = "lazy";
image.decoding = "async";
image.onerror = function () { this.hidden = true; };

            const details = document.createElement("span");
            details.className = "search-result-text";

            const name = document.createElement("strong");
            name.textContent = crop.name;

            const scientific = document.createElement("small");
            scientific.textContent = crop.scientificName;

            details.append(name, scientific);
            button.append(image, details);
            button.addEventListener("click", function () {
                openSelectedCrop(crop.name);
            });

            searchResults.appendChild(button);
        });
    } else {
        const message = document.createElement("div");
        message.className = "search-message";
        message.textContent = "This information is not available in our crop database. Ask our AI Agronomist for an explanation.";
        searchResults.appendChild(message);
    }

    const aiButton = createAIButton(
        matches.length > 0
            ? "Explain " + query + " and provide its agricultural production information."
            : query
    );

    searchResults.appendChild(aiButton);
    searchResults.classList.add("show");
}


/* Search Events */
if (searchInput && searchResults) {
    searchInput.addEventListener("input", function () { displayCropResults(this.value); });
    searchInput.addEventListener("focus", function () { displayCropResults(this.value); });
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            searchResults.classList.remove("show");
            searchInput.setAttribute("aria-expanded", "false");
        }
        if (event.key === "Enter") {
            const firstResult = searchResults.querySelector(".search-result");
            if (firstResult) firstResult.click();
        }
    });

    document.addEventListener("click", function (event) {
        const searchFixed = document.getElementById("searchFixed");
        if (searchFixed && !searchFixed.contains(event.target)) {
            searchResults.classList.remove("show");
            searchInput.setAttribute("aria-expanded", "false");
        }
    });
}

if (clearSearchButton && searchInput) {
    clearSearchButton.addEventListener("click", function () {
        searchInput.value = "";
        displayCropResults("");
        searchInput.focus();
    });
}

if (vegetableSelect) {
    vegetableSelect.addEventListener("change", function () {
        if (this.value) openSelectedCrop(this.value);
    });
}


/* Learning Topics Handling */
const topicTitles = {
    about: "About Crop",
    botanical: "Botanical Classification",
    history: "History and Origin",
    ecology: "Ecological Requirements",
    production: "Production Strategies",
    management: "Management and Protection",
    harvesting: "Harvesting and Post-harvesting",
    marketing: "Value Addition and Marketing"
};

function showTopic(topic, clickedButton) {
    const crop = cropData[currentCrop];
    if (!crop || !topic) return;

    topicTitle.textContent = currentCrop + ": " + (topicTitles[topic] || "Crop Information");

    if (topic === "botanical") {
        topicContent.textContent = buildClassificationText(currentCrop);
    } else {
        topicContent.textContent = crop[topic] || "Information is not available.";
    }

    if (topicSource) {
        topicSource.textContent = contentSource[currentCrop] || "";
    }

    clearActiveTopic();
    if (clickedButton) {
        clickedButton.classList.add("active");
        clickedButton.setAttribute("aria-pressed", "true");
    }

    topicInformation.classList.add("show");
    topicInformation.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

cropOptions.forEach(function (button) {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", function () {
        showTopic(this.getAttribute("data-topic"), this);
    });
});

if (closeCropMenu) {
    closeCropMenu.addEventListener("click", function () {
        cropMenu.classList.remove("show");
        topicInformation.classList.remove("show");
        clearActiveTopic();
    });
}



/* ==========================================
   10. DR. IBRAHIM AI AGRONOMIST CONNECTION
========================================== */

const AGRONOMIST_API = "https://dr-ibrahim-agronomist.ibrahimkwangu01.workers.dev/";

async function askAgronomist(question) {
    const query = question.trim();
    if (!query) return;

    const existingAnswer = searchResults.querySelector(".ai-search-answer");
    if (existingAnswer) existingAnswer.remove();

    const answerBox = document.createElement("div");
    answerBox.className = "ai-search-answer";
    answerBox.setAttribute("aria-live", "polite");

    const heading = document.createElement("h3");
    heading.textContent = "Dr. Ibrahim's AI Agronomist";

    const loading = document.createElement("p");
    loading.className = "ai-status-text";
    loading.textContent = "Thinking... Please wait.";

    answerBox.append(heading, loading);
    searchResults.appendChild(answerBox);
    searchResults.classList.add("show");

    try {
        const response = await fetch(AGRONOMIST_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: query })
        });

        const responseText = await response.text();
        let data;
        try {
            data = JSON.parse(responseText);
        } catch (error) {
            throw new Error("Invalid Worker response: " + responseText.substring(0, 200));
        }

        if (!response.ok) {
            throw new Error(data.error || "AI service error: " + response.status);
        }

        if (!data.answer) {
            throw new Error("The AI Worker did not return an answer.");
        }

        loading.remove();
        const contentDiv = document.createElement("div");
        contentDiv.className = "ai-answer-content";
        contentDiv.style.whiteSpace = "pre-line";
        contentDiv.textContent = data.answer;

        answerBox.appendChild(contentDiv);
    } catch (error) {
        console.error("Agronomist error:", error);
        loading.textContent = "Unable to get an AI answer: " + error.message;
        loading.style.color = "#d9534f";
    }

    searchResults.scrollTop = searchResults.scrollHeight;
}

function createAIButton(question) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "ai-search-button";
    button.textContent = "Ask Dr. Ibrahim about: " + question;
    button.addEventListener("click", function () {
        askAgronomist(question);
    });
    return button;
}


/* 11. GENERAL SITE FEATURES */

const startButton = document.getElementById("startButton");
if (startButton) {
    startButton.addEventListener("click", function () {
        document.getElementById("vegetableSection").scrollIntoView({ behavior: "smooth" });
        if (searchInput) searchInput.focus();
    });
}

const darkModeButton = document.getElementById("darkModeButton");
if (darkModeButton) {
    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        this.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });
}

const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* WELCOME SECTION (NAME SUBMISSION) */
const nameInput = document.getElementById("nameInput");
const nameButton = document.getElementById("nameButton");
const welcomeMessage = document.getElementById("welcomeMessage");

function handleNameSubmit() {
    if (!nameInput || !welcomeMessage) return;

    const visitorName = nameInput.value.trim();
    if (!visitorName) {
        welcomeMessage.textContent = "Please enter your name first.";
        welcomeMessage.style.display = "block";
        nameInput.focus();
        return;
    }

    try {
        localStorage.setItem("visitorName", visitorName);
    } catch (error) {
        // Ignore storage errors in restricted/private browser modes
    }

    welcomeMessage.textContent = "Welcome, " + visitorName + "!";
    welcomeMessage.style.display = "block";
    nameInput.value = "";
}

if (nameButton) {
    nameButton.addEventListener("click", handleNameSubmit);
}

if (nameInput) {
    nameInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            handleNameSubmit();
        }
    });
}

try {
    const savedName = localStorage.getItem("visitorName");
    if (savedName && welcomeMessage) {
        welcomeMessage.textContent = "Welcome back, " + savedName + "!";
        welcomeMessage.style.display = "block";
    }
} catch (error) {
    // Ignore storage errors in restricted/private browser modes
}
