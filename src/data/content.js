// 雙語教學內容（en / zh），key 對應 models.js 的 id

const SRC = { en: 'Blender JSON', zh: 'Blender JSON' };
const SRC_LABEL = { en: 'Source', zh: '模型來源' };

export const CONTENT = {
  surface: {
    id: 'surface',
    name: { en: 'Human Body', zh: '人體' },
    sub: { en: 'Full body · Surface', zh: '全身 · 表面' },
    tagline: { en: 'A universe in motion', zh: '一座運轉中的小宇宙' },
    focus: { en: 'Overall structure of the human body', zh: '人體整體構造' },
    concept: {
      en: 'The human body is an integrated whole made of roughly 37 trillion cells, organised into tissues, organs, and systems that cooperate constantly. Eleven major systems — from the circulatory to the nervous — keep the body alive, and about 60% of its weight is water. Its external surface is the skin, the body’s largest organ, which shields everything inside, regulates temperature, and senses the outside world.',
      zh: '人體是由約 37 兆個細胞組成的整合體，再進一步組織成組織、器官與系統，彼此持續協同運作。十一個主要系統——從循環到神經——共同維持生命，而體重約有 60% 是水。外層表面是皮膚——人體最大的器官——保護內部構造、調節體溫，並感受外在世界。',
    },
    structures: [
      { name: { en: 'Head & Neck', zh: '頭部與頸部' }, detail: { en: 'Houses the brain and sensory organs', zh: '容納腦部與感覺器官' } },
      { name: { en: 'Trunk', zh: '軀幹' }, detail: { en: 'Thorax and abdomen containing vital organs', zh: '胸腔與腹腔，內含重要器官' } },
      { name: { en: 'Limbs', zh: '四肢' }, detail: { en: 'Upper and lower limbs for movement', zh: '上肢與下肢，負責活動' } },
      { name: { en: 'Skin', zh: '皮膚' }, detail: { en: 'Protective outer layer and largest organ', zh: '外層保護，也是最大的器官' } },
      { name: { en: 'Internal organs', zh: '內臟器官' }, detail: { en: 'Fill the chest and abdominal cavities', zh: '填滿胸腔與腹腔' } },
    ],
    funFact: {
      en: 'The skin is your body’s largest organ — it makes up about 15% of your body weight.',
      zh: '皮膚是人體最大的器官，約佔你體重的 15%。',
    },
    meta: [
      { label: { en: 'Type', zh: '類型' }, value: { en: 'Body overview', zh: '全身總覽' } },
      { label: { en: 'System', zh: '系統' }, value: { en: 'All systems', zh: '所有系統' } },
      { label: SRC_LABEL, value: SRC },
      { label: { en: 'Status', zh: '狀態' }, value: { en: 'Interactive', zh: '可互動' } },
    ],
  },

  skeleton: {
    id: 'skeleton',
    name: { en: 'Skeletal System', zh: '骨骼系統' },
    sub: { en: 'Human body · Bones', zh: '人體 · 骨骼' },
    tagline: { en: 'The frame of life', zh: '撐起生命的骨架' },
    focus: { en: 'The framework of the human body', zh: '人體的支撐框架' },
    concept: {
      en: 'The skeleton is the body’s rigid framework, made of 206 bones that support the body, protect vital organs, store minerals such as calcium, and — together with joints — allow movement. Bones come in four shapes (long, short, flat, and irregular) and are living tissue that constantly remodels; the marrow inside them produces blood cells. Newborns actually start with about 300 bones, many of which fuse together as we grow.',
      zh: '骨骼是人體堅硬的支架，由 206 塊骨頭組成，支撐身體、保護重要器官、儲存鈣等礦物質，並透過關節讓身體得以活動。骨頭分為長骨、短骨、扁骨與不規則骨四種形狀，是會不斷重塑的活組織；裡面的骨髓則負責製造血球。新生兒其實約有 300 塊骨頭，成長過程中許多會融合在一起。',
    },
    structures: [
      { name: { en: 'Skull', zh: '顱骨' }, detail: { en: 'Protects the brain', zh: '保護腦部' } },
      { name: { en: 'Rib cage', zh: '肋骨籠' }, detail: { en: 'Shields the heart and lungs', zh: '保護心臟與肺臟' } },
      { name: { en: 'Spine', zh: '脊柱' }, detail: { en: 'Central axis of support', zh: '身體的中軸支柱' } },
      { name: { en: 'Long bones', zh: '長骨' }, detail: { en: 'Femur and humerus for support and movement', zh: '股骨與肱骨，負責支撐與運動' } },
      { name: { en: 'Joints', zh: '關節' }, detail: { en: 'Where bones meet to allow motion', zh: '骨頭相接處，讓動作得以發生' } },
    ],
    funFact: {
      en: 'Bones are about five times stronger than steel of the same weight.',
      zh: '以相同重量比較，骨骼的強度約是鋼鐵的五倍。',
    },
    meta: [
      { label: { en: 'Type', zh: '類型' }, value: { en: 'System', zh: '系統' } },
      { label: { en: 'Bones', zh: '骨頭數' }, value: { en: '206', zh: '206 塊' } },
      { label: SRC_LABEL, value: SRC },
      { label: { en: 'Status', zh: '狀態' }, value: { en: 'Interactive', zh: '可互動' } },
    ],
  },

  skeleton_muscles: {
    id: 'skeleton_muscles',
    name: { en: 'Skeleton & Muscles', zh: '骨骼與肌肉' },
    sub: { en: 'Human body · Musculoskeletal', zh: '人體 · 肌肉骨骼' },
    tagline: { en: 'Power of movement', zh: '驅動身體的力量' },
    focus: { en: 'How bones and muscles work together', zh: '骨骼與肌肉如何協同運作' },
    concept: {
      en: 'Skeletal muscles attach to bones across joints; when a muscle contracts, it pulls on the bone to produce movement. More than 600 skeletal muscles work in opposing pairs, while tendons anchor muscle to bone and ligaments bind bone to bone. The body actually has three muscle types: skeletal (voluntary), smooth (in organs such as the stomach), and cardiac (the heart).',
      zh: '骨骼肌跨越關節附著在骨頭上；肌肉收縮時會拉動骨頭產生動作。全身 600 多條骨骼肌以對抗的成對方式運作；肌腱把肌肉接到骨頭，韌帶則把骨頭與骨頭相連。人體其實有三種肌肉：骨骼肌（隨意肌）、平滑肌（存在於胃等器官）與心肌（心臟）。',
    },
    structures: [
      { name: { en: 'Skeletal muscle', zh: '骨骼肌' }, detail: { en: 'Voluntary muscle for movement', zh: '控制動作的隨意肌' } },
      { name: { en: 'Tendons', zh: '肌腱' }, detail: { en: 'Connect muscle to bone', zh: '連接肌肉與骨骼' } },
      { name: { en: 'Joints', zh: '關節' }, detail: { en: 'Where movement happens', zh: '動作發生的部位' } },
      { name: { en: 'Ligaments', zh: '韌帶' }, detail: { en: 'Bind bone to bone for stability', zh: '連接骨頭與骨頭，維持穩定' } },
      { name: { en: 'Muscle pairs', zh: '對抗肌群' }, detail: { en: 'Opposing muscles that coordinate motion', zh: '成對協調的肌肉，控制動作' } },
    ],
    funFact: {
      en: 'The human body has more than 600 skeletal muscles.',
      zh: '人體全身有超過 600 條骨骼肌。',
    },
    meta: [
      { label: { en: 'Type', zh: '類型' }, value: { en: 'System', zh: '系統' } },
      { label: { en: 'Muscles', zh: '肌肉數' }, value: { en: '600+', zh: '600+ 條' } },
      { label: SRC_LABEL, value: SRC },
      { label: { en: 'Status', zh: '狀態' }, value: { en: 'Interactive', zh: '可互動' } },
    ],
  },

  neck: {
    id: 'neck',
    name: { en: 'Neck', zh: '頸部' },
    sub: { en: 'Head · Neck region', zh: '頭部 · 頸部區域' },
    tagline: { en: 'The vital passageway', zh: '生命的必經通道' },
    focus: { en: 'Structures of the neck', zh: '頸部的構造' },
    concept: {
      en: 'The neck connects the head to the trunk; within its narrow space it carries the airway, the food passage, major blood vessels to the brain, the cervical spine, and the thyroid gland. Its seven cervical vertebrae are the smallest and most flexible in the spine, and the U-shaped hyoid bone supports the tongue — the only bone that does not touch another bone. The thyroid gland here regulates your metabolism and energy use.',
      zh: '頸部連接頭部與軀幹；在狹小的空間裡，它容納了呼吸道、食道、通往腦部的主要血管、頸椎以及甲狀腺。頸部的七節頸椎是脊椎中最小、也最靈活的部分，而 U 形的舌骨支撐舌頭——它是人體唯一不與其他骨頭相接的骨頭。這裡的甲狀腺則調節你的新陳代謝與能量消耗。',
    },
    structures: [
      { name: { en: 'Cervical spine', zh: '頸椎' }, detail: { en: 'Seven vertebrae supporting the head', zh: '七節椎骨，支撐頭部' } },
      { name: { en: 'Trachea & esophagus', zh: '氣管與食道' }, detail: { en: 'Air and food passages', zh: '空氣與食物的通道' } },
      { name: { en: 'Carotid arteries', zh: '頸動脈' }, detail: { en: 'Main blood supply to the brain', zh: '供應腦部的主要血管' } },
      { name: { en: 'Hyoid bone', zh: '舌骨' }, detail: { en: 'U-shaped bone anchoring the tongue', zh: 'U 形骨，固定舌頭' } },
      { name: { en: 'Thyroid gland', zh: '甲狀腺' }, detail: { en: 'Regulates metabolism', zh: '調節新陳代謝' } },
    ],
    funFact: {
      en: 'The neck is flexible enough to turn the head almost 180 degrees.',
      zh: '頸部足夠靈活，能讓頭部轉動將近 180 度。',
    },
    meta: [
      { label: { en: 'Type', zh: '類型' }, value: { en: 'Body region', zh: '身體區域' } },
      { label: { en: 'Location', zh: '位置' }, value: { en: 'Between head and trunk', zh: '頭與軀幹之間' } },
      { label: SRC_LABEL, value: SRC },
      { label: { en: 'Status', zh: '狀態' }, value: { en: 'Interactive', zh: '可互動' } },
    ],
  },

  heart: {
    id: 'heart',
    name: { en: 'Heart', zh: '心臟' },
    sub: { en: 'Cardiovascular · Pump', zh: '循環系統 · 泵浦' },
    tagline: { en: 'The engine of life', zh: '生命的引擎' },
    focus: { en: 'The muscular pump of the circulatory system', zh: '循環系統的肌肉泵浦' },
    concept: {
      en: 'The heart is a fist-sized muscular organ that beats about 100,000 times a day, pumping blood through the body to deliver oxygen and nutrients and to remove waste. It has four chambers — two atria and two ventricles — and four valves that keep blood flowing one way. A small electrical pacemaker (the sinoatrial node) triggers every heartbeat, and in one day the heart pumps roughly 7,000 litres of blood.',
      zh: '心臟是一個拳頭大小的肌肉器官，每天跳動約十萬次，把血液送往全身，輸送氧氣與養分，並帶走廢物。它有四個腔室——兩個心房與兩個心室——以及四個瓣膜，確保血液單向流動。一個微小的電氣節律器（竇房結）啟動每一次心跳，而心臟一天大約會泵出 7000 公升的血液。',
    },
    structures: [
      { name: { en: 'Atria', zh: '心房' }, detail: { en: 'Upper chambers receiving blood', zh: '接收血液的上方腔室' } },
      { name: { en: 'Ventricles', zh: '心室' }, detail: { en: 'Lower chambers pumping blood out', zh: '將血液泵出的下方腔室' } },
      { name: { en: 'Valves', zh: '瓣膜' }, detail: { en: 'Keep blood flowing one way', zh: '讓血液單向流動' } },
      { name: { en: 'Septum', zh: '中膈' }, detail: { en: 'Wall separating left and right sides', zh: '分隔左右兩側的隔板' } },
      { name: { en: 'Coronary arteries', zh: '冠狀動脈' }, detail: { en: 'Supply blood to the heart muscle', zh: '供應心臟肌肉本身的血液' } },
    ],
    funFact: {
      en: 'Over a lifetime, the heart beats about 2.5 billion times.',
      zh: '人一生中，心臟大約會跳動 25 億次。',
    },
    meta: [
      { label: { en: 'Type', zh: '類型' }, value: { en: 'Organ', zh: '器官' } },
      { label: { en: 'Location', zh: '位置' }, value: { en: 'Chest, between lungs', zh: '胸腔、兩肺之間' } },
      { label: SRC_LABEL, value: SRC },
      { label: { en: 'Status', zh: '狀態' }, value: { en: 'Interactive', zh: '可互動' } },
    ],
  },

  lung: {
    id: 'lung',
    name: { en: 'Lungs', zh: '肺部' },
    sub: { en: 'Respiratory · Gas exchange', zh: '呼吸系統 · 氣體交換' },
    tagline: { en: 'The breath of life', zh: '生命的呼吸' },
    focus: { en: 'The organs that exchange oxygen and carbon dioxide', zh: '交換氧氣與二氧化碳的器官' },
    concept: {
      en: 'The lungs are a pair of spongy organs in the chest that bring oxygen into the blood and remove carbon dioxide. Air travels through the trachea and branching bronchi into about 300 million tiny air sacs called alveoli, where gas exchange takes place. The alveoli together have a surface area roughly the size of a tennis court, and you breathe about 12 to 20 times a minute without ever thinking about it.',
      zh: '肺是一對海綿狀的胸腔器官，負責把氧氣帶入血液並排出二氧化碳。空氣經由氣管與分岔的支氣管，進入約 3 億個微小的肺泡，在那裡進行氣體交換。這些肺泡的總面積大約等於一座網球場，而你每分鐘呼吸約 12 到 20 次，完全不需要思考。',
    },
    structures: [
      { name: { en: 'Trachea', zh: '氣管' }, detail: { en: 'Main airway into the chest', zh: '通往胸腔的主要氣道' } },
      { name: { en: 'Bronchi', zh: '支氣管' }, detail: { en: 'Branching airways into each lung', zh: '分岔進入兩側肺臟的氣道' } },
      { name: { en: 'Alveoli', zh: '肺泡' }, detail: { en: 'Tiny sacs where gas exchange occurs', zh: '進行氣體交換的微小囊泡' } },
      { name: { en: 'Diaphragm', zh: '橫膈膜' }, detail: { en: 'Muscle that drives breathing', zh: '驅動呼吸的肌肉' } },
      { name: { en: 'Pleura', zh: '肋膜' }, detail: { en: 'Membrane covering each lung', zh: '包覆肺臟的膜' } },
    ],
    funFact: {
      en: 'Your lungs contain about 300 million alveoli — together they could cover a tennis court.',
      zh: '你的肺裡約有 3 億個肺泡，攤開來面積大約等於一座網球場。',
    },
    meta: [
      { label: { en: 'Type', zh: '類型' }, value: { en: 'Organ', zh: '器官' } },
      { label: { en: 'Location', zh: '位置' }, value: { en: 'Chest, either side of heart', zh: '胸腔、心臟兩側' } },
      { label: SRC_LABEL, value: SRC },
      { label: { en: 'Status', zh: '狀態' }, value: { en: 'Interactive', zh: '可互動' } },
    ],
  },

  stomach: {
    id: 'stomach',
    name: { en: 'Stomach', zh: '胃部' },
    sub: { en: 'Digestive · Storage', zh: '消化系統 · 儲存' },
    tagline: { en: 'The body’s mixing bowl', zh: '身體的攪拌碗' },
    focus: { en: 'The muscular sac that begins digestion', zh: '啟動消化的肌肉囊袋' },
    concept: {
      en: 'The stomach is a J-shaped muscular sac that stores food and churns it with strong acid and digestive enzymes, turning it into a semi-liquid mixture called chyme. When empty it holds about one litre, expanding to roughly four litres after a large meal, and food typically stays here for two to four hours. Its hydrochloric acid is strong enough to break down proteins — yet a mucus layer protects the stomach itself.',
      zh: '胃是一個 J 字形的肌肉囊袋，儲存食物並以強酸與消化酵素攪拌，把食物變成半液態的食糜。空腹時它大約可容納 1 公升，吃大餐後可撐到約 4 公升，而食物通常會在胃裡停留 2 到 4 小時。它的鹽酸強到足以分解蛋白質——但一層黏液保護著胃本身不受傷害。',
    },
    structures: [
      { name: { en: 'Rugae', zh: '胃皺襞' }, detail: { en: 'Folds that expand as the stomach fills', zh: '胃撐大時展開的皺褶' } },
      { name: { en: 'Pyloric sphincter', zh: '幽門括約肌' }, detail: { en: 'Controls release into the intestine', zh: '控制食物進入腸道' } },
      { name: { en: 'Gastric lining', zh: '胃黏膜' }, detail: { en: 'Secretes acid and enzymes', zh: '分泌胃酸與酵素' } },
      { name: { en: 'Cardiac sphincter', zh: '賁門括約肌' }, detail: { en: 'Valve between esophagus and stomach', zh: '食道與胃之間的瓣膜' } },
      { name: { en: 'Fundus', zh: '胃底' }, detail: { en: 'Upper dome that stores food and gas', zh: '上方圓頂，儲存食物與氣體' } },
    ],
    funFact: {
      en: 'Stomach acid is strong enough to dissolve metal, yet a mucus layer protects the stomach itself.',
      zh: '胃酸強到足以溶解金屬，但一層黏液保護著胃本身不受傷害。',
    },
    meta: [
      { label: { en: 'Type', zh: '類型' }, value: { en: 'Organ', zh: '器官' } },
      { label: { en: 'Location', zh: '位置' }, value: { en: 'Upper abdomen', zh: '上腹部' } },
      { label: SRC_LABEL, value: SRC },
      { label: { en: 'Status', zh: '狀態' }, value: { en: 'Interactive', zh: '可互動' } },
    ],
  },

  brain: {
    id: 'brain',
    name: { en: 'Brain', zh: '腦部' },
    sub: { en: 'Nervous · Control centre', zh: '神經系統 · 控制中心' },
    tagline: { en: 'The command centre', zh: '全身的指揮中心' },
    focus: { en: 'The control centre of the nervous system', zh: '神經系統的控制中樞' },
    concept: {
      en: 'The brain contains roughly 86 billion neurons that control thought, memory, emotion, and every voluntary and involuntary action. Its wrinkled outer layer, the cerebral cortex, is divided into lobes that handle movement, senses, language and vision, while signals race between neurons at up to 400 kilometres per hour. Though it is only about 2% of your body weight, the brain uses around 20% of your energy.',
      zh: '腦部約有 860 億個神經元，掌管思考、記憶、情緒，以及一切自主與不自主的動作。外層佈滿皺褶的大腦皮質分成不同腦葉，負責運動、感覺、語言與視覺，而神經元之間的訊號能以每小時高達 400 公里的速度傳遞。腦部只占體重約 2%，卻消耗了全身約 20% 的能量。',
    },
    structures: [
      { name: { en: 'Cerebrum', zh: '大腦' }, detail: { en: 'Thought, language, senses', zh: '思考、語言與感覺' } },
      { name: { en: 'Cerebellum', zh: '小腦' }, detail: { en: 'Balance and coordination', zh: '平衡與協調' } },
      { name: { en: 'Brainstem', zh: '腦幹' }, detail: { en: 'Breathing and heartbeat', zh: '呼吸與心跳' } },
      { name: { en: 'Frontal lobe', zh: '額葉' }, detail: { en: 'Decision-making and personality', zh: '決策與性格' } },
      { name: { en: 'Hippocampus', zh: '海馬迴' }, detail: { en: 'Forming and storing memories', zh: '形成與儲存記憶' } },
    ],
    funFact: {
      en: 'The brain uses about 20% of the body’s energy but is only 2% of its weight.',
      zh: '腦部只占體重約 2%，卻消耗了全身約 20% 的能量。',
    },
    meta: [
      { label: { en: 'Type', zh: '類型' }, value: { en: 'Organ', zh: '器官' } },
      { label: { en: 'Location', zh: '位置' }, value: { en: 'Inside the skull', zh: '顱骨內' } },
      { label: SRC_LABEL, value: SRC },
      { label: { en: 'Views', zh: '檢視' }, value: { en: 'Sagittal / Coronal', zh: '矢狀／冠狀' } },
    ],
  },

  kidney: {
    id: 'kidney',
    name: { en: 'Kidneys', zh: '腎臟' },
    sub: { en: 'Urinary · Filtration', zh: '泌尿系統 · 過濾' },
    tagline: { en: 'The body’s filter', zh: '身體的濾網' },
    focus: { en: 'The organs that filter blood and make urine', zh: '過濾血液並製造尿液的器官' },
    concept: {
      en: 'The kidneys are a pair of bean-shaped organs that filter the blood, removing waste and extra water to make urine. Every day they filter about 180 litres of blood, yet produce only around 1.5 litres of urine — the rest is reabsorbed. Each kidney contains about one million tiny filtering units called nephrons.',
      zh: '腎臟是一對豆形的器官，負責過濾血液、清除廢物與多餘水分以製造尿液。每天它們約過濾 180 公升的血液，卻只產生約 1.5 公升的尿液——其餘都會被回收。每個腎臟約有 100 萬個微小的過濾單位，稱為腎元。',
    },
    structures: [
      { name: { en: 'Renal cortex', zh: '腎皮質' }, detail: { en: 'Outer layer containing nephrons', zh: '外層，含腎元' } },
      { name: { en: 'Renal medulla', zh: '腎髓質' }, detail: { en: 'Inner region forming urine', zh: '內層，形成尿液' } },
      { name: { en: 'Nephron', zh: '腎元' }, detail: { en: 'The functional filtering unit', zh: '負責過濾的功能單位' } },
      { name: { en: 'Renal pelvis', zh: '腎盂' }, detail: { en: 'Collects urine before the ureter', zh: '收集尿液送往輸尿管' } },
      { name: { en: 'Ureter', zh: '輸尿管' }, detail: { en: 'Tube carrying urine to the bladder', zh: '將尿液送往膀胱的管道' } },
    ],
    funFact: {
      en: 'Your kidneys filter all your blood about 60 times every single day.',
      zh: '你的腎臟每天會把你全身的血液過濾大約 60 次。',
    },
    meta: [
      { label: { en: 'Type', zh: '類型' }, value: { en: 'Organ', zh: '器官' } },
      { label: { en: 'Location', zh: '位置' }, value: { en: 'Upper back abdomen, either side of spine', zh: '後上腹部、脊柱兩側' } },
      { label: SRC_LABEL, value: SRC },
      { label: { en: 'Status', zh: '狀態' }, value: { en: 'Interactive', zh: '可互動' } },
    ],
  },

  small_intestine: {
    id: 'small_intestine',
    name: { en: 'Small Intestine', zh: '小腸' },
    sub: { en: 'Digestive · Absorption', zh: '消化系統 · 吸收' },
    tagline: { en: 'The nutrient factory', zh: '養分的吸收工廠' },
    focus: { en: 'Where most nutrients are absorbed', zh: '吸收大部分養分的場所' },
    concept: {
      en: 'The small intestine is a long, coiled tube where most digestion and nutrient absorption take place. Uncoiled, it measures about six metres — roughly four times your height. Its inner wall is covered with millions of finger-like villi and even smaller microvilli, which together create a surface area the size of a tennis court for absorbing nutrients into the bloodstream.',
      zh: '小腸是一段長而盤曲的管道，大部分的消化與養分吸收都在此進行。把它拉直大約有 6 公尺——約是你身高的四倍。內壁佈滿數百萬個指狀絨毛和更小的微絨毛，共同形成約一座網球場大小的吸收面積，把養分送進血液。',
    },
    structures: [
      { name: { en: 'Villi', zh: '絨毛' }, detail: { en: 'Tiny folds that absorb nutrients', zh: '吸收養分的微小突起' } },
      { name: { en: 'Duodenum', zh: '十二指腸' }, detail: { en: 'Receives food from the stomach', zh: '承接來自胃部的食物' } },
      { name: { en: 'Jejunum & ileum', zh: '空腸與迴腸' }, detail: { en: 'Main sites of absorption', zh: '主要的吸收部位' } },
      { name: { en: 'Microvilli', zh: '微絨毛' }, detail: { en: 'Even smaller folds that boost surface area', zh: '更小的突起，進一步增加面積' } },
      { name: { en: 'Ileocecal valve', zh: '迴盲瓣' }, detail: { en: 'Connects to the large intestine', zh: '連接大腸的瓣膜' } },
    ],
    funFact: {
      en: 'Uncoiled, the small intestine can be about 6 metres long.',
      zh: '如果把小腸拉直，長度大約有 6 公尺。',
    },
    meta: [
      { label: { en: 'Type', zh: '類型' }, value: { en: 'Organ', zh: '器官' } },
      { label: { en: 'Location', zh: '位置' }, value: { en: 'Lower abdomen', zh: '下腹部' } },
      { label: SRC_LABEL, value: SRC },
      { label: { en: 'Status', zh: '狀態' }, value: { en: 'Interactive', zh: '可互動' } },
    ],
  },
};

export function getContent(id) {
  return CONTENT[id] || CONTENT.surface;
}
