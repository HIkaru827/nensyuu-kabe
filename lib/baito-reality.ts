export type BaitoTypeId =
  | "service"
  | "steady"
  | "focus"
  | "high-wage"
  | "style"
  | "skill-up"

export type BaitoScore = Partial<Record<BaitoTypeId, number>>

export interface BaitoRealityArticle {
  slug: string
  title: string
  description: string
  jobName: string
  category: string
  catchCopy: string
  fitSummary: string
  workItems: string[]
  goodPoints: string[]
  hardPoints: string[]
  suitedFor: string[]
  notSuitedFor: string[]
  shiftReality: string
  incomeWallFit: string
  paidLeaveFit: string
  diagnosisTypeIds: BaitoTypeId[]
  sourceLinks: { title: string; href: string }[]
}

export interface BaitoTypeResult {
  id: BaitoTypeId
  title: string
  shortTitle: string
  summary: string
  strengths: string[]
  watchOut: string
  incomeWallTip: string
  paidLeaveTip: string
  recommendedSlugs: string[]
}

export interface BaitoDiagnosisQuestion {
  id: string
  question: string
  options: {
    label: string
    description: string
    scores: BaitoScore
  }[]
}

export const BAITO_REALITY_ARTICLES = [
  {
    slug: "baito-reality-restaurant",
    title: "飲食バイトの仕事内容｜ホール・キッチン、向いている学生、年収の壁",
    description:
      "飲食バイトのホール・キッチンの仕事内容、忙しい時間帯、大変なところ、向いている学生、扶養や有給の見方をまとめます。",
    jobName: "飲食バイト",
    category: "飲食",
    catchCopy: "接客もチーム作業も経験できる、学生バイトの定番。",
    fitSummary:
      "短時間シフトを組みやすい一方で、昼や夜のピークは一気に忙しくなります。扶養内で抑えたい学生にも、しっかり入って稼ぎたい学生にも選択肢があります。",
    workItems: [
      "ホールでは案内、注文確認、配膳、片付け、レジ、清掃を担当する",
      "キッチンではマニュアルに沿った調理、盛り付け、洗い場、食材補充を担当する",
      "ピーク中は提供、会計、片付けなどの優先順位を素早く切り替える",
      "店舗によっては開店準備、閉店作業、在庫補充も行う",
    ],
    goodPoints: [
      "学生の採用が多く、初バイトでも入りやすい",
      "まかないや食事補助がある職場もある",
      "接客、段取り、チーム連携が身につく",
      "ランチ、夕方、土日だけなどシフトの選択肢が多い",
    ],
    hardPoints: [
      "昼食時や夕食時は一気に忙しくなる",
      "立ち仕事が中心で、片付けや洗い場は体力を使う",
      "クレーム対応や急な欠勤フォローが発生することもある",
      "閉店作業がある店では帰宅時間が遅くなりやすい",
    ],
    suitedFor: [
      "人と話すことに抵抗が少ない学生",
      "忙しい時間の勢いに乗れる学生",
      "短時間シフトから始めたい学生",
      "友人以外の人と働く経験を積みたい学生",
    ],
    notSuitedFor: [
      "大きな声での接客が苦手な人",
      "ピーク時の同時進行が強いストレスになる人",
      "服や髪ににおいがつくのを避けたい人",
    ],
    shiftReality:
      "平日夕方、土日、ランチ帯の募集が多く、授業後や休日に入れやすいです。扶養内で抑えたい場合は、繁忙期に入りすぎないよう月ごとの給与見込みを確認しましょう。",
    incomeWallFit:
      "シフトを増減しやすい職場なら、年収の調整もしやすいです。ただし長期休みや年末の繁忙期に入りすぎると、年収の壁を一気に超えることがあります。",
    paidLeaveFit:
      "週の所定労働日数が固定されている学生は、有給の付与日数を確認しやすいです。週ごとにシフトが変わる場合は、契約上の日数や年間所定労働日数を確認しましょう。",
    diagnosisTypeIds: ["service", "steady", "high-wage"],
    sourceLinks: [
      { title: "厚生労働省 job tag 飲食チェーン店店員", href: "https://shigoto.mhlw.go.jp/User/Occupation/Detail/418" },
      { title: "厚生労働省 確かめようアルバイトの労働条件", href: "https://www.check-roudou.mhlw.go.jp/lp/arubaito/index.html" },
    ],
  },
  {
    slug: "baito-reality-cafe",
    title: "カフェバイトの仕事内容｜向いている学生、飲食バイトとの違い",
    description:
      "カフェバイトのレジ、ドリンク作成、接客、清掃、忙しい時間帯、向いている学生、年収調整のしやすさをまとめます。",
    jobName: "カフェバイト",
    category: "飲食",
    catchCopy: "接客のやわらかさと作業の正確さが両方いる仕事。",
    fitSummary:
      "接客、レジ、ドリンク作成、清掃をテンポよく進める仕事です。雰囲気で選ばれやすい一方で、朝・昼・夕方のピークはスピードも求められます。",
    workItems: [
      "レジ、注文確認、ドリンクや軽食の提供を行う",
      "席の片付け、店内清掃、備品補充を行う",
      "店舗によっては開店準備、閉店作業、簡単な調理補助も担当する",
      "混雑時は注文、作成、受け渡しを短時間で回す",
    ],
    goodPoints: [
      "接客の基礎を学びやすい",
      "朝、昼、夕方など授業前後のシフトを選びやすい職場がある",
      "店舗の雰囲気や客層が合うと続けやすい",
      "丁寧な言葉遣いや段取り力が身につく",
    ],
    hardPoints: [
      "見た目の落ち着いた雰囲気より忙しいことがある",
      "ドリンク作成やレジを同時に覚える必要がある",
      "立ち仕事で、清掃や洗い物も多い",
      "人気店はピーク時の回転が速い",
    ],
    suitedFor: [
      "落ち着いた接客をしたい学生",
      "作業の手順を覚えるのが好きな学生",
      "朝や夕方など短い時間で働きたい学生",
      "店の雰囲気を重視したい学生",
    ],
    notSuitedFor: [
      "細かい手順を覚えるのが苦手な人",
      "混雑時のスピード感が苦手な人",
      "土日や朝のシフトに入りづらい人",
    ],
    shiftReality:
      "駅前や商業施設内の店舗は朝、昼、夕方の山がはっきりしやすいです。短時間で入れる職場なら、授業やサークルと両立しやすくなります。",
    incomeWallFit:
      "短時間シフトを選びやすく、扶養内で働きたい学生にも向いています。ただし長期休みに多く入る場合は、月収ベースで見直しましょう。",
    paidLeaveFit:
      "週2日、週3日など契約日数が決まっている場合は比例付与の確認がしやすいです。シフト提出制でも契約上の所定労働日数を確認しておくと安心です。",
    diagnosisTypeIds: ["service", "style", "steady"],
    sourceLinks: [
      { title: "厚生労働省 job tag 飲食チェーン店店員", href: "https://shigoto.mhlw.go.jp/User/Occupation/Detail/418" },
      { title: "厚生労働省 確かめようアルバイトの労働条件", href: "https://www.check-roudou.mhlw.go.jp/lp/arubaito/index.html" },
    ],
  },
  {
    slug: "baito-reality-apparel",
    title: "アパレルバイトの仕事内容｜声かけ、社割、向いている学生",
    description:
      "アパレルバイトの接客、販売、品出し、ディスプレイ、社割、服装ルール、向いている学生、年収の壁の見方をまとめます。",
    jobName: "アパレルバイト",
    category: "販売",
    catchCopy: "好きな服に関われるだけでなく、提案する接客力も求められる仕事。",
    fitSummary:
      "服や雑貨に囲まれて働ける一方、声かけ、商品知識、売場づくり、在庫管理まで幅広く関わります。おしゃれが好きなだけでなく、相手に合わせて提案できる人に向きます。",
    workItems: [
      "来店客への声かけ、商品案内、試着案内、レジ対応を行う",
      "品出し、たたみ直し、在庫確認、売場整理を行う",
      "売れ筋商品や季節に合わせてディスプレイを整える",
      "店舗によってはSNSやコーディネート提案に関わることもある",
    ],
    goodPoints: [
      "服やトレンドに触れながら働ける",
      "接客、提案、観察力が身につく",
      "社割がある職場では服代を抑えられることがある",
      "ブランドの世界観が合うと働く楽しさにつながる",
    ],
    hardPoints: [
      "声かけ接客が苦手だと負担になりやすい",
      "立ち仕事で、品出しや整理も多い",
      "土日祝やセール期間は忙しくなりやすい",
      "服装ルールや購入ルールは店舗ごとに確認が必要",
    ],
    suitedFor: [
      "服や雑貨に興味がある学生",
      "相手に合わせて提案するのが好きな学生",
      "人の反応を見ながら接客したい学生",
      "店の雰囲気やブランドに共感できる学生",
    ],
    notSuitedFor: [
      "声かけや提案型の接客を避けたい人",
      "服装や身だしなみルールを負担に感じる人",
      "土日やセール時期に入りにくい人",
    ],
    shiftReality:
      "商業施設や駅ビルは土日祝、夕方、セール時期が忙しくなりやすいです。授業後だけでなく休日に入れるかが採用時のポイントになることがあります。",
    incomeWallFit:
      "シフトは調整できますが、セール期や長期休みに増えやすいので、扶養内で抑えるなら月ごとの上限を先に決めておくと安全です。",
    paidLeaveFit:
      "土日中心でも継続勤務と出勤率を満たせば有給対象になり得ます。契約日数と実際の出勤日数の差を確認しましょう。",
    diagnosisTypeIds: ["style", "service"],
    sourceLinks: [
      { title: "厚生労働省 job tag 衣料品販売", href: "https://shigoto.mhlw.go.jp/User/Occupation/Detail/73" },
      { title: "厚生労働省 確かめようアルバイトの労働条件", href: "https://www.check-roudou.mhlw.go.jp/lp/arubaito/index.html" },
    ],
  },
  {
    slug: "baito-reality-convenience-store",
    title: "コンビニバイトの仕事内容｜レジ以外の業務、向いている学生、シフトの組み方",
    description:
      "コンビニバイトのレジ、品出し、公共料金、宅配便、清掃、忙しい時間帯、向いている学生、扶養内で働くときのポイントをまとめます。",
    jobName: "コンビニバイト",
    category: "販売",
    catchCopy: "覚えることは多いものの、家や学校の近くで探しやすい定番バイト。",
    fitSummary:
      "レジだけでなく、品出し、検品、公共料金、宅配便、清掃など幅広く担当します。短時間シフトを組みやすい一方、時間帯によって仕事内容の濃さが変わります。",
    workItems: [
      "POSレジでの会計、袋詰め、各種支払い受付を行う",
      "宅配便、チケット、店頭サービスに対応する",
      "納品された商品の検品、品出し、棚整理を行う",
      "店内外の清掃、売場づくり、簡単な調理を担当することもある",
    ],
    goodPoints: [
      "家や学校の近くで探しやすい",
      "早朝、夕方、深夜など時間帯の選択肢が多い",
      "接客と作業をバランスよく経験できる",
      "短時間から始めやすい職場がある",
    ],
    hardPoints: [
      "サービスの種類が多く、覚えることが多い",
      "時間帯によって客層や忙しさが大きく変わる",
      "ワンオペに近い時間帯は負担が大きい場合がある",
      "深夜勤務は生活リズムに影響しやすい",
    ],
    suitedFor: [
      "家や学校の近くで働きたい学生",
      "接客と品出しの両方をしたい学生",
      "短時間でコツコツ働きたい学生",
      "決まった手順を覚えられる学生",
    ],
    notSuitedFor: [
      "覚える項目が多い仕事を避けたい人",
      "一人に近い時間帯の対応が不安な人",
      "深夜や早朝で生活リズムを崩しやすい人",
    ],
    shiftReality:
      "早朝、夕方、深夜、土日など募集の幅が広いです。学生は授業後の夕方や土日を中心に入りやすい一方、深夜勤務は無理に選ばない方が続けやすいです。",
    incomeWallFit:
      "短時間シフトを選びやすく、扶養内でも調整しやすい仕事です。固定シフトが増えると年収が積み上がるため、月収の目安を見ておきましょう。",
    paidLeaveFit:
      "週の契約日数が固定されやすい職場なら、有給日数を確認しやすいです。半年以上続けたら、付与条件を確認する価値があります。",
    diagnosisTypeIds: ["steady", "focus", "service"],
    sourceLinks: [
      { title: "厚生労働省 job tag コンビニエンスストア店員", href: "https://shigoto.mhlw.go.jp/User/Occupation/Detail/78" },
      { title: "厚生労働省 確かめようアルバイトの労働条件", href: "https://www.check-roudou.mhlw.go.jp/lp/arubaito/index.html" },
    ],
  },
  {
    slug: "baito-reality-supermarket",
    title: "スーパーのレジ・品出しバイトの仕事内容｜向いている学生、扶養内で働くコツ",
    description:
      "スーパーのレジ・品出しバイトの仕事内容、忙しい時間帯、メリット、大変なところ、向いている学生、年収調整のしやすさをまとめます。",
    jobName: "スーパーのレジ・品出しバイト",
    category: "販売",
    catchCopy: "作業内容が安定していて、生活リズムを作りやすいバイト。",
    fitSummary:
      "レジ、品出し、陳列、売場案内などを担当します。接客はありますが、アパレルのような提案型接客よりも、正確さと手順が重視されやすい仕事です。",
    workItems: [
      "レジ、会計補助、袋詰め案内を行う",
      "商品の検品、品出し、陳列、補充を行う",
      "売場や商品の場所を聞かれたときに案内する",
      "生鮮部門では包装、値付け、清掃などを担当することもある",
    ],
    goodPoints: [
      "仕事内容が比較的イメージしやすい",
      "近所で探しやすく通勤時間を抑えやすい",
      "品出し中心なら黙々作業の時間もある",
      "固定シフトで生活リズムを作りやすい",
    ],
    hardPoints: [
      "夕方、土日、特売日はレジが混みやすい",
      "品出しは重い商品を扱うことがある",
      "同じ作業の繰り返しに飽きやすい人には不向き",
      "部門によって忙しさやにおい、寒さが違う",
    ],
    suitedFor: [
      "安定したシフトで働きたい学生",
      "接客は必要最低限でよい学生",
      "近所で長く続けたい学生",
      "正確に作業するのが得意な学生",
    ],
    notSuitedFor: [
      "単調な作業が苦手な人",
      "重いものを持つ仕事を避けたい人",
      "土日や夕方に入りにくい人",
    ],
    shiftReality:
      "夕方から夜、土日、開店前後の品出しなど、学生が入りやすい時間帯があります。固定シフトになりやすいので、学期ごとの時間割変更を早めに共有しましょう。",
    incomeWallFit:
      "固定シフトは収入見込みを出しやすく、扶養内で管理しやすい働き方です。長期休みに追加で入る場合だけ注意しましょう。",
    paidLeaveFit:
      "週2日、週3日などで継続しやすく、有給の比例付与を確認しやすい職場です。契約日数が変わったときは付与日数も見直しましょう。",
    diagnosisTypeIds: ["steady", "focus"],
    sourceLinks: [
      { title: "厚生労働省 job tag スーパー店員", href: "https://shigoto.mhlw.go.jp/User/Occupation/Detail/57" },
      { title: "厚生労働省 確かめようアルバイトの労働条件", href: "https://www.check-roudou.mhlw.go.jp/lp/arubaito/index.html" },
    ],
  },
  {
    slug: "baito-reality-cram-school",
    title: "塾講師バイトの仕事内容｜時給、準備時間、向いている学生、年収の壁",
    description:
      "塾講師バイトの仕事内容、授業準備、個別指導と集団指導、向いている学生、時給と年収の壁の見方をまとめます。",
    jobName: "塾講師バイト",
    category: "教育",
    catchCopy: "高時給に見えやすい一方で、準備時間と責任も考えたい仕事。",
    fitSummary:
      "小中高生への学習指導が中心です。時給が高めに見えやすい一方、授業準備、報告、保護者対応補助など、授業外の時間も確認したい仕事です。",
    workItems: [
      "小学生、中学生、高校生へ学習指導を行う",
      "個別指導では生徒ごとに進度や理解度を見ながら説明する",
      "授業準備、宿題確認、指導記録、報告を行う",
      "教室によっては保護者面談の補助や電話対応を行うこともある",
    ],
    goodPoints: [
      "短い勤務時間で比較的高い収入を得やすい",
      "説明力、責任感、計画力が身につく",
      "得意科目を活かせる",
      "将来教育や人に教える仕事に興味がある学生に合いやすい",
    ],
    hardPoints: [
      "授業時間以外の準備や報告の扱いを確認する必要がある",
      "生徒の理解度に合わせる責任がある",
      "夕方から夜の勤務が中心になりやすい",
      "試験前や講習期間は忙しくなりやすい",
    ],
    suitedFor: [
      "人に説明するのが好きな学生",
      "得意科目を活かしたい学生",
      "短時間でしっかり稼ぎたい学生",
      "責任ある仕事に挑戦したい学生",
    ],
    notSuitedFor: [
      "準備や報告の時間を負担に感じる人",
      "夜の勤務が続くと生活が崩れやすい人",
      "人の理解度に合わせて説明するのが苦手な人",
    ],
    shiftReality:
      "平日夕方から夜、土曜、長期休みの講習が中心になりやすいです。授業枠で固定されやすいため、テスト期間の調整可否を確認しましょう。",
    incomeWallFit:
      "時給が高めでも勤務時間が短ければ扶養内に収めやすいです。ただし講習期間にまとまって入ると月収が跳ねるため、年間見込みで確認しましょう。",
    paidLeaveFit:
      "曜日固定の授業を継続する場合、有給の対象を確認しやすいです。授業準備や報告が労働時間に含まれるかも確認しておきましょう。",
    diagnosisTypeIds: ["high-wage", "skill-up"],
    sourceLinks: [
      { title: "厚生労働省 job tag 学習塾教師", href: "https://shigoto.mhlw.go.jp/User/Occupation/Detail/396" },
      { title: "厚生労働省 確かめようアルバイトの労働条件", href: "https://www.check-roudou.mhlw.go.jp/lp/arubaito/index.html" },
    ],
  },
  {
    slug: "baito-reality-warehouse",
    title: "倉庫・軽作業バイトの仕事内容｜ピッキング、仕分け、向いている学生、単発勤務の注意点",
    description:
      "倉庫・軽作業バイトのピッキング、仕分け、梱包、検品、大変なところ、向いている学生、単発や扶養内で働くときの注意点をまとめます。",
    jobName: "倉庫・軽作業バイト",
    category: "作業",
    catchCopy: "接客は少なめ。集中しやすい一方で、体力と正確さが必要。",
    fitSummary:
      "ピッキング、仕分け、梱包、検品などを担当します。接客が少ない一方、立ち仕事、移動、重さ、スピードの負担は職場によって差があります。",
    workItems: [
      "商品や荷物の搬入、搬出、仕分け、積み替えを行う",
      "伝票や指示書に沿って商品を集めるピッキングを行う",
      "検品、梱包、ラベル貼り、棚卸しを担当する",
      "ハンディ端末やバーコードリーダーを使う職場もある",
    ],
    goodPoints: [
      "接客が少なく、黙々と働きやすい",
      "単発や短期の募集が多い",
      "仕事内容が比較的シンプルな職場も多い",
      "人間関係を広げすぎずに働きたい学生に合いやすい",
    ],
    hardPoints: [
      "立ち仕事や移動が多く体力を使う",
      "重い荷物や寒暖差がある職場もある",
      "単純作業が続くと飽きやすい",
      "集合場所や勤務地が遠い場合がある",
    ],
    suitedFor: [
      "接客少なめで働きたい学生",
      "短期や単発で予定に合わせたい学生",
      "黙々と正確に作業するのが得意な学生",
      "体を動かす仕事が苦にならない学生",
    ],
    notSuitedFor: [
      "体力仕事を避けたい人",
      "単調な作業が苦手な人",
      "勤務地や集合時間の変化がストレスになる人",
    ],
    shiftReality:
      "単発、短期、週末、長期休みの募集が多いです。予定に合わせやすい一方、勤務地や集合時間、交通費の扱いは必ず確認しましょう。",
    incomeWallFit:
      "必要な月だけ働けるなら扶養内調整に使いやすいです。ただし短期集中で入りすぎると月収が急に増えるため、年間見込みを確認しましょう。",
    paidLeaveFit:
      "単発中心だと有給の対象を確認しにくいです。同じ勤務先で継続する場合は、契約期間、所定労働日数、出勤率を確認しましょう。",
    diagnosisTypeIds: ["focus", "steady"],
    sourceLinks: [
      { title: "厚生労働省 job tag 倉庫作業員", href: "https://shigoto.mhlw.go.jp/User/Occupation/Detail/485" },
      { title: "厚生労働省 job tag ピッキング作業員", href: "https://shigoto.mhlw.go.jp/User/Occupation/Detail/486" },
    ],
  },
  {
    slug: "baito-reality-event",
    title: "イベント・単発バイトの仕事内容｜向いている学生、扶養内で働く注意点",
    description:
      "イベント・単発バイトの会場設営、受付、案内、撤収、メリット、大変なところ、扶養内で働くときの注意点をまとめます。",
    jobName: "イベント・単発バイト",
    category: "短期",
    catchCopy: "予定に合わせやすいが、現場ごとの差が大きい仕事。",
    fitSummary:
      "イベント会場の設営、受付、案内、物販、撤収などを担当します。短期で入りやすい一方、集合時間、勤務地、服装、休憩、交通費の扱いを確認したい仕事です。",
    workItems: [
      "会場設営、備品運搬、受付、案内、誘導を行う",
      "物販、チケット確認、来場者対応を担当することがある",
      "イベント終了後の片付け、撤収作業を行う",
      "現場ごとに業務内容や集合時間が変わる",
    ],
    goodPoints: [
      "単発で予定に合わせやすい",
      "短期集中で収入を作りやすい",
      "普段行かない会場やイベントに関われる",
      "人間関係が固定されにくい",
    ],
    hardPoints: [
      "現場ごとの当たり外れがある",
      "集合が早い、終了が遅い、移動が長いことがある",
      "立ち仕事や屋外作業で体力を使うことがある",
      "直前変更や待機時間の扱いを確認する必要がある",
    ],
    suitedFor: [
      "予定の空いた日に働きたい学生",
      "短期で収入を作りたい学生",
      "新しい場所や人に抵抗が少ない学生",
      "長期固定シフトを避けたい学生",
    ],
    notSuitedFor: [
      "毎回違う現場が不安な人",
      "集合時間や勤務地の変化が苦手な人",
      "安定収入を作りたい人",
    ],
    shiftReality:
      "土日、長期休み、イベント開催日に集中しやすいです。応募前に集合場所、交通費、休憩、残業、キャンセル時の扱いを確認しましょう。",
    incomeWallFit:
      "扶養内で働く月を調整しやすい一方、短期集中で稼ぎすぎることがあります。月ごとの収入だけでなく年間合計で見ましょう。",
    paidLeaveFit:
      "単発中心では有給に結びつきにくいです。同じ派遣元や勤務先で継続する場合は、契約と勤務実績を確認しましょう。",
    diagnosisTypeIds: ["high-wage", "steady"],
    sourceLinks: [
      { title: "厚生労働省 job tag イベントの企画・運営", href: "https://shigoto.mhlw.go.jp/User/Occupation/Detail/566" },
      { title: "厚生労働省 確かめようアルバイトの労働条件", href: "https://www.check-roudou.mhlw.go.jp/lp/arubaito/index.html" },
    ],
  },
  {
    slug: "baito-reality-call-center",
    title: "コールセンターバイトの仕事内容｜高時給の理由、向いている学生、大変なところ",
    description:
      "コールセンターバイトの受信・発信、マニュアル対応、時給、ストレス、向いている学生、年収の壁の見方をまとめます。",
    jobName: "コールセンターバイト",
    category: "オフィス",
    catchCopy: "座って働けるが、会話の集中力と切り替えが必要。",
    fitSummary:
      "電話やチャットで問い合わせ対応、案内、受付などを行います。時給が高めの求人もありますが、会話のストレス、マニュアル理解、記録作業の負担もあります。",
    workItems: [
      "電話やチャットで問い合わせ、予約、注文、手続きに対応する",
      "マニュアルに沿って案内し、対応内容を記録する",
      "受信中心、発信中心、調査、案内など業務内容は職場で異なる",
      "研修やロールプレイを受けてから実務に入ることが多い",
    ],
    goodPoints: [
      "座って働ける職場が多い",
      "時給が高めの求人が見つかることがある",
      "敬語、説明力、PC入力が身につく",
      "オフィスワークの入口になりやすい",
    ],
    hardPoints: [
      "電話対応のストレスがある",
      "クレームや断られる場面に当たることがある",
      "マニュアルやルールを覚える必要がある",
      "勤務中の集中力が求められる",
    ],
    suitedFor: [
      "説明することが苦にならない学生",
      "座り仕事で稼ぎたい学生",
      "敬語やPC入力を身につけたい学生",
      "高時給を重視したい学生",
    ],
    notSuitedFor: [
      "電話そのものに強い苦手意識がある人",
      "断られることやクレームで気持ちを引きずりやすい人",
      "長時間同じ姿勢がつらい人",
    ],
    shiftReality:
      "夕方、夜、土日、短時間などの募集もありますが、研修参加が必須のことがあります。テスト期間の休みや最低勤務時間を確認しましょう。",
    incomeWallFit:
      "時給が高めだと短時間でも年収が伸びやすいです。扶養内で抑えるなら、週何時間まで働けるかを先に計算しておくと安心です。",
    paidLeaveFit:
      "継続勤務しやすい職場なら有給確認もしやすいです。シフト制でも契約上の所定日数と実績を見ておきましょう。",
    diagnosisTypeIds: ["high-wage", "skill-up"],
    sourceLinks: [
      { title: "厚生労働省 job tag コールセンターオペレーター", href: "https://shigoto.mhlw.go.jp/User/Occupation/Detail/64" },
      { title: "厚生労働省 確かめようアルバイトの労働条件", href: "https://www.check-roudou.mhlw.go.jp/lp/arubaito/index.html" },
    ],
  },
  {
    slug: "baito-reality-office",
    title: "事務バイトの仕事内容｜PCスキル、向いている学生、将来につながるポイント",
    description:
      "事務バイトのデータ入力、書類整理、電話対応、PCスキル、向いている学生、シフトや年収の壁の見方をまとめます。",
    jobName: "事務バイト",
    category: "オフィス",
    catchCopy: "将来の仕事にもつながりやすい、落ち着いた作業型バイト。",
    fitSummary:
      "データ入力、書類整理、電話・メール対応、台帳管理などを担当します。求人は飲食や販売より少なめですが、PCスキルや社会人マナーを学びたい学生に向いています。",
    workItems: [
      "文書作成、書類整理、データ入力、台帳管理を行う",
      "電話、メール、来客対応を補助することがある",
      "伝票や申込書の確認、ファイリングを行う",
      "職場によってはExcelや専用システムを使う",
    ],
    goodPoints: [
      "PC入力や書類管理の経験が積める",
      "将来の就活で話しやすい経験になりやすい",
      "飲食や販売より体力負担が少ない職場が多い",
      "落ち着いた環境で働きたい学生に合いやすい",
    ],
    hardPoints: [
      "求人が少なく、平日昼の勤務が多いことがある",
      "正確さが求められ、ミスが見えやすい",
      "電話対応がある職場もある",
      "単純入力だけだと飽きる場合がある",
    ],
    suitedFor: [
      "PC作業を身につけたい学生",
      "落ち着いた環境で働きたい学生",
      "正確にコツコツ進めるのが得意な学生",
      "就活につながる経験を作りたい学生",
    ],
    notSuitedFor: [
      "平日昼にほとんど時間が取れない人",
      "細かい確認作業が苦手な人",
      "体を動かす仕事の方が集中できる人",
    ],
    shiftReality:
      "平日昼の募集が多く、大学の空きコマや長期休みに合わせやすいです。夕方以降や土日の求人は職場によって限られます。",
    incomeWallFit:
      "勤務時間が読みやすい職場なら、年収を管理しやすいです。長期インターンに近い働き方だと勤務時間が増えやすいため、年収見込みを定期的に見直しましょう。",
    paidLeaveFit:
      "継続勤務と固定シフトになりやすい職場なら、有給の確認もしやすいです。契約書や労働条件通知書を保管しておきましょう。",
    diagnosisTypeIds: ["skill-up", "focus"],
    sourceLinks: [
      { title: "厚生労働省 job tag 一般事務", href: "https://shigoto.mhlw.go.jp/User/Occupation/Detail/428" },
      { title: "厚生労働省 確かめようアルバイトの労働条件", href: "https://www.check-roudou.mhlw.go.jp/lp/arubaito/index.html" },
    ],
  },
] as const satisfies readonly BaitoRealityArticle[]

export const BAITO_TYPE_RESULTS = [
  {
    id: "service",
    title: "接客コミュニケーションタイプ",
    shortTitle: "接客型",
    summary:
      "人と話しながら働く方が力を出しやすいタイプです。飲食、カフェ、アパレルなど、その場の反応を見ながら動くバイトが向いています。",
    strengths: ["初対面の人にも慣れやすい", "忙しい場面でも周りを見やすい", "接客経験を今後にも活かしやすい"],
    watchOut: "ピーク時の忙しさやクレーム対応で疲れやすいことがあります。最初は週2日程度から試すと続けやすいです。",
    incomeWallTip: "シフトを増やしやすい職場が多いので、長期休み前に年収見込みを確認しましょう。",
    paidLeaveTip: "週の契約日数が決まっている場合は、有給の比例付与も確認しやすいです。",
    recommendedSlugs: ["baito-reality-restaurant", "baito-reality-cafe", "baito-reality-apparel"],
  },
  {
    id: "steady",
    title: "扶養内バランスタイプ",
    shortTitle: "扶養内型",
    summary:
      "学業や生活リズムを優先しながら、安定して少しずつ稼ぎたいタイプです。コンビニ、スーパー、カフェなど、短時間シフトを選びやすいバイトが向いています。",
    strengths: ["収入見込みを管理しやすい", "学業や予定と両立しやすい", "長く続けるほど職場に慣れやすい"],
    watchOut: "固定シフトが増えすぎると年収が積み上がるため、月ごとの給与上限を決めておくと安心です。",
    incomeWallTip: "扶養内を守りたい場合は、毎月の給与と年末までの見込みをセットで確認しましょう。",
    paidLeaveTip: "同じ職場で継続しやすいので、半年後の有給付与も忘れずに確認しましょう。",
    recommendedSlugs: ["baito-reality-convenience-store", "baito-reality-supermarket", "baito-reality-cafe"],
  },
  {
    id: "focus",
    title: "コツコツ集中タイプ",
    shortTitle: "集中型",
    summary:
      "接客よりも、決まった作業を正確に進める方が合いやすいタイプです。倉庫、品出し、事務など、作業に集中しやすいバイトが向いています。",
    strengths: ["手順を覚えると安定しやすい", "接客ストレスを抑えやすい", "作業スピードを上げる楽しさがある"],
    watchOut: "単調な作業や体力面の負担が合わないこともあります。仕事内容と勤務環境を先に確認しましょう。",
    incomeWallTip: "単発や短期で働く場合は、短期間で稼ぎすぎないよう年間合計を見ておきましょう。",
    paidLeaveTip: "単発中心だと有給につながりにくいので、継続勤務かどうかを分けて考えましょう。",
    recommendedSlugs: ["baito-reality-warehouse", "baito-reality-supermarket", "baito-reality-office"],
  },
  {
    id: "high-wage",
    title: "高時給効率タイプ",
    shortTitle: "高時給型",
    summary:
      "短い時間で効率よく稼ぎたいタイプです。塾講師、コールセンター、イベントなど、時給や日給が高めの仕事が候補になります。",
    strengths: ["短時間で収入を作りやすい", "目標金額から逆算しやすい", "経験がスキルとして残りやすい仕事もある"],
    watchOut: "時給だけで選ぶと、準備時間、移動時間、精神的な負担を見落としやすいです。",
    incomeWallTip: "高時給ほど年収の壁に早く近づくため、週何時間まで働けるかを先に試算しましょう。",
    paidLeaveTip: "固定シフトなら有給確認もしやすいですが、単発中心なら契約先と勤務実績を分けて見ましょう。",
    recommendedSlugs: ["baito-reality-cram-school", "baito-reality-call-center", "baito-reality-event"],
  },
  {
    id: "style",
    title: "雰囲気重視タイプ",
    shortTitle: "雰囲気型",
    summary:
      "職場の雰囲気や、好きなものに関われることを重視するタイプです。アパレルやカフェなど、接客と空間づくりが近い仕事が向いています。",
    strengths: ["好きなものが仕事のモチベーションになる", "接客の表現力を磨きやすい", "職場の世界観に合うと続けやすい"],
    watchOut: "服装ルール、購入ルール、土日出勤、声かけ接客が負担にならないか確認しましょう。",
    incomeWallTip: "セール時期や繁忙期にシフトが増えやすいため、扶養内なら繁忙期前に調整しましょう。",
    paidLeaveTip: "土日中心でも継続勤務なら有給対象になり得ます。契約上の日数を確認しましょう。",
    recommendedSlugs: ["baito-reality-apparel", "baito-reality-cafe", "baito-reality-restaurant"],
  },
  {
    id: "skill-up",
    title: "スキルアップタイプ",
    shortTitle: "スキル型",
    summary:
      "バイト代だけでなく、将来につながる経験も重視するタイプです。塾講師、事務、コールセンターなど、説明力やPCスキルを伸ばしやすい仕事が候補になります。",
    strengths: ["就活で話しやすい経験になりやすい", "説明力やPCスキルを伸ばしやすい", "責任ある仕事に挑戦しやすい"],
    watchOut: "研修、準備、報告、電話対応など、時給に見えにくい負担も確認しましょう。",
    incomeWallTip: "長期で入るほど収入が安定するため、年収見込みを学期ごとに更新しましょう。",
    paidLeaveTip: "継続勤務になりやすい仕事は、有給や労働条件通知書の確認も大事です。",
    recommendedSlugs: ["baito-reality-cram-school", "baito-reality-office", "baito-reality-call-center"],
  },
] as const satisfies readonly BaitoTypeResult[]

export const BAITO_DIAGNOSIS_QUESTIONS = [
  {
    id: "people",
    question: "働くとき、人と話す時間はどれくらいがいい？",
    options: [
      {
        label: "接客は多めがいい",
        description: "お客さんや同僚と話しながら動く方が楽しい。",
        scores: { service: 3, style: 2 },
      },
      {
        label: "必要な分だけでいい",
        description: "接客はできるけど、ずっと話す仕事は少し疲れる。",
        scores: { steady: 2, "skill-up": 1, "high-wage": 1 },
      },
      {
        label: "できれば少なめがいい",
        description: "黙々と作業する方が集中できる。",
        scores: { focus: 3, steady: 1 },
      },
    ],
  },
  {
    id: "priority",
    question: "バイト選びで一番優先したいことは？",
    options: [
      {
        label: "短時間で稼ぐ",
        description: "時給や日給を重視して、効率よく働きたい。",
        scores: { "high-wage": 3, "skill-up": 1 },
      },
      {
        label: "続けやすさ",
        description: "学業や予定と両立して、無理なく続けたい。",
        scores: { steady: 3, focus: 1 },
      },
      {
        label: "好きな雰囲気",
        description: "お店や働く場所の雰囲気も大事にしたい。",
        scores: { style: 3, service: 1 },
      },
    ],
  },
  {
    id: "pace",
    question: "忙しい時間帯のスピード感は？",
    options: [
      {
        label: "忙しい方がやる気が出る",
        description: "ピークの忙しさもチームで乗り切りたい。",
        scores: { service: 2, "high-wage": 1, style: 1 },
      },
      {
        label: "ほどほどがいい",
        description: "忙しすぎない職場の方が続けやすい。",
        scores: { steady: 3, "skill-up": 1 },
      },
      {
        label: "落ち着いて進めたい",
        description: "手順を守って正確に進める仕事が合う。",
        scores: { focus: 3, "skill-up": 1 },
      },
    ],
  },
  {
    id: "schedule",
    question: "シフトの理想は？",
    options: [
      {
        label: "固定で読みやすく",
        description: "毎週の予定と収入見込みを安定させたい。",
        scores: { steady: 3, "skill-up": 1 },
      },
      {
        label: "空いた日に単発で",
        description: "予定が空いた日や長期休みにまとめて働きたい。",
        scores: { focus: 2, "high-wage": 2 },
      },
      {
        label: "夕方・土日にしっかり",
        description: "授業後や休日を使って、ある程度稼ぎたい。",
        scores: { service: 1, style: 1, "high-wage": 2 },
      },
    ],
  },
  {
    id: "future",
    question: "バイトで得たい経験は？",
    options: [
      {
        label: "接客経験",
        description: "言葉遣いや人との関わり方を身につけたい。",
        scores: { service: 3, style: 1 },
      },
      {
        label: "PC・説明力",
        description: "就活や将来につながる経験がほしい。",
        scores: { "skill-up": 3, "high-wage": 1 },
      },
      {
        label: "収入管理",
        description: "扶養内で安定して働く感覚を身につけたい。",
        scores: { steady: 3, focus: 1 },
      },
    ],
  },
  {
    id: "stress",
    question: "できれば避けたい負担は？",
    options: [
      {
        label: "電話やクレーム",
        description: "相手の感情を受け止め続ける仕事は負担が大きい。",
        scores: { focus: 2, steady: 2 },
      },
      {
        label: "単調な作業",
        description: "同じ作業ばかりだと飽きてしまう。",
        scores: { service: 2, style: 2, "high-wage": 1 },
      },
      {
        label: "服装や雰囲気のルール",
        description: "自分らしさより、働きやすさを優先したい。",
        scores: { steady: 2, focus: 2, "skill-up": 1 },
      },
    ],
  },
] as const satisfies readonly BaitoDiagnosisQuestion[]

export const BAITO_REALITY_BLOG_POSTS = BAITO_REALITY_ARTICLES.map((article) => ({
  slug: article.slug,
  title: article.title,
  description: article.description,
  publishedAt: "2026-07-12T00:00:00Z",
  updatedAt: "2026-07-12T00:00:00Z",
  priority: 0.86,
}))

export function getBaitoArticle(slug: string) {
  return BAITO_REALITY_ARTICLES.find((article) => article.slug === slug)
}

export function getBaitoResult(id: BaitoTypeId) {
  return BAITO_TYPE_RESULTS.find((result) => result.id === id)
}

export function getBaitoArticleKeywords(article: BaitoRealityArticle) {
  return [
    `${article.jobName} 仕事内容`,
    `${article.jobName} 向いている人`,
    `${article.jobName} 学生`,
    `${article.jobName} 扶養内`,
    `${article.jobName} 有給`,
    `${article.jobName} 年収の壁`,
    `${article.category} バイト`,
    "学生 バイト 診断",
  ]
}

export function getBaitoArticleFaqs(article: BaitoRealityArticle) {
  return [
    {
      question: `${article.jobName}はどんな仕事ですか？`,
      answer: article.fitSummary,
    },
    {
      question: `${article.jobName}はどんな学生に向いていますか？`,
      answer: `${article.suitedFor.join("、")}に向いています。`,
    },
    {
      question: `${article.jobName}で扶養内に収めるには何を見ればいいですか？`,
      answer: article.incomeWallFit,
    },
    {
      question: `${article.jobName}でも有給はありますか？`,
      answer: `アルバイトでも条件を満たせば年次有給休暇の対象になります。${article.paidLeaveFit}`,
    },
  ]
}
