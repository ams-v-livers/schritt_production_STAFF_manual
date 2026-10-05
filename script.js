/* しゅりプロ 運営資料室 / Git版 */

const PLATFORMS = ["TikTok LIVE", "IRIAM", "ミラティブ", "共通"];

const CATEGORIES = [
  {
    id: "scout",
    title: "スカウト・面談",
    description: "候補者の確認から面談まで"
  },
  {
    id: "invite",
    title: "事務所招待・入所",
    description: "所属登録と初回のご案内"
  },
  {
    id: "stream",
    title: "配信準備・初配信",
    description: "環境・設定・初配信の確認"
  },
  {
    id: "support",
    title: "配信サポート",
    description: "振り返りとトラブル対応"
  },
  {
    id: "event",
    title: "イベント",
    description: "参加条件・告知・進行管理"
  },
  {
    id: "leave",
    title: "退所・退会",
    description: "退所受付と必要な手続き"
  }
];

const MANUAL_CONTENT = {
  scout: `## 1. 候補者を確認する
プロフィールURL、活動内容、希望PF、他事務所への所属状況を確認する。過去の連絡記録と照合し、重複送信を防ぐ。

## 2. スカウトを送る
承認済みの募集条件とDMテンプレートを使用する。未確認の報酬や特典を約束しない。送信日と返信状況を記録する。

## 3. 面談を調整する
活動希望・配信経験・稼働予定を確認し、面談方法と候補日時を案内する。

## 4. 面談結果を記録する
説明した条件、本人の希望、次の対応と担当者を記録する。

## 既存資料で確認する項目
募集基準／DM原稿／面談可能時間／面談質問／所属条件`,

  invite: `## 1. 所属意思と条件を確認する
本人の所属意思、登録するアカウント、他事務所との契約状況を確認する。条件説明と必要な契約手続きを完了させる。

## 2. PF別の登録手順を確認する
事務所向け管理画面・申請方法・必要情報を、最新の事務所向け資料で確認する。具体的な操作手順と画面例は、確認後にこの資料へ追加する。

## 3. 招待・申請を実施する
対象アカウントを再確認して手続きを行う。本人側の操作が必要な場合は、承認方法と期限を案内する。

## 4. 完了を確認する
管理画面の所属状態を確認する。登録完了日、担当者、連絡先を記録し、初配信の案内を送る。

## 既存資料で確認する項目
管理画面URL／権限／操作手順／必要情報／申請期限／招待エラー時の窓口`,

  stream: `## 1. 配信環境を準備する
通信環境、端末、充電、マイクと音量を確認する。配信に使用する画像・音楽・ゲームの利用条件を確認する。

## 2. PFの設定を確認する
プロフィール、配信タイトル、配信に必要な設定を確認する。配信要件と対応する方法は公式ヘルプを参照する。

## 3. 初配信の内容を決める
自己紹介、話題、配信開始時刻と終了予定を決める。SNSでの告知と担当者への共有を行う。

## 4. 配信後に振り返る
音声・画面の不具合、視聴者の反応、良かった点と次回改善する点をまとめる。

## 既存資料で確認する項目
初配信案内／機材設定／権利確認／配信ルール／配信要件`,

  support: `## 1. 配信状況を確認する
対象期間、配信時間、視聴状況などPFで取得できる数値を確認する。本人の目標と困りごとを聞く。

## 2. 改善内容を決める
配信時間帯、企画、視聴者対応など、次回取り組む内容を具体的に決める。

## 3. トラブルを記録する
発生日時、端末・アプリ、画面表示、再現手順を記録する。個人情報を含む画面は共有先を確認する。

## 4. 必要な窓口へ相談する
公式ヘルプと事務所向け窓口を確認し、対応状況と次回連絡予定を記録する。

## 既存資料で確認する項目
振り返りシート／数値の定義／問い合わせ窓口／違反通知の対応／緊急時の連絡先`,

  event: `## 1. 開催情報を確認する
公式のイベントページで、開催期間、参加条件、申請方法、特典と注意事項を確認する。

## 2. 本人と参加方針を決める
配信予定と目標を相談し、参加申請が必要な場合は期限までに対応する。

## 3. 告知を準備する
承認済みの画像と告知文を準備する。期間や条件を元のイベントページと照合する。

## 4. 結果と後続対応を記録する
結果、特典の受け取りに必要な手続き、提出期限を記録する。

## 既存資料で確認する項目
イベントページ／エントリー手順／告知テンプレート／特典受領の期限`,

  leave: `## 1. 希望する手続きを確認する
事務所からの退所、活動休止、PFのアカウント削除のどれを希望しているか確認する。事務所の退所とアカウント削除は別の手続きとして扱う。

## 2. 契約と申請条件を確認する
契約書、退所予告期間、未精算分、参加中イベント、使用素材の扱いを確認する。PFの解除手順と必要な期間は事務所向け資料に従う。

## 3. 必要な手続きを実施する
本人と合意した退所日を記録し、担当者が事務所・PFへの申請を行う。具体的な解除方法は確認済みの手順を追加する。

## 4. 完了を連絡する
所属解除の反映、最終精算、共有資料や連絡先の扱いを確認する。完了日と対応内容を記録する。

## 既存資料で確認する項目
契約書／退所受付の文面／所属解除手順／最終精算／素材利用／アカウント削除の公式案内`
};

const OFFICIAL_LINKS = {
  "TikTok LIVE": [
    {
      title: "TikTok LIVE 公式ヘルプ",
      url: "https://support.tiktok.com/ja/live-gifts-wallet/tiktok-live"
    }
  ],
  IRIAM: [
    {
      title: "IRIAM 公式FAQ",
      url: "https://support.iriam.com/hc/ja"
    },
    {
      title: "イラスト配信準備ガイド",
      url: "https://iriam.com/illustration-guide"
    }
  ],
  "ミラティブ": [
    {
      title: "ミラティブ 公式FAQ",
      url: "https://mirrativ.zendesk.com/hc/ja"
    }
  ]
};

const SITE_DATA = {
  name: "しゅりプロ 運営資料室",
  platforms: PLATFORMS,
  categories: CATEGORIES,

  documents: PLATFORMS.slice(0, 3).flatMap((platform, i) =>
    CATEGORIES.map(c => ({
      id: "guide-" + i + "-" + c.id,
      title: platform + "｜" + c.title,
      platform,
      category: c.id,
      kind: "manual",
      status: "draft",
      summary: c.description,
      content:
        "運営手順のたたき台です。事務所の現行ルールとPF向け資料を確認し、内容を更新してください。\n\n" +
        MANUAL_CONTENT[c.id],
      links: ["stream", "support"].includes(c.id) ? OFFICIAL_LINKS[platform] : [],
      updatedAt: "2026-10-05T07:06:00.000Z",
      attachments: []
    }))
  ).concat(
    PLATFORMS.slice(0, 3).map((platform, i) => ({
      id: "source-" + i,
      title: platform + " 公式ヘルプ",
      platform,
      category: "support",
      kind: "link",
      status: "ready",
      summary: "公式の操作案内・FAQを確認する",
      content:
        "公式ヘルプへの参照リンクです。事務所向けの所属条件や管理画面の操作は、別途事務所向け資料を登録してください。",
      links: OFFICIAL_LINKS[platform],
      updatedAt: "2026-10-05T07:06:00.000Z",
      attachments: []
    }))
  )
};

function initOperationsSite(initialData) {
  "use strict";

  const data = JSON.parse(JSON.stringify(initialData));
  const $ = id => document.getElementById(id);
  const main = $("main");
  const editor = $("editor");

  const classNames = {
    "TikTok LIVE": "tiktok",
    IRIAM: "iriam",
    "ミラティブ": "mirrativ",
    "共通": "common"
  };

  const kindNames = {
    manual: "手順書",
    link: "外部リンク",
    file: "ファイル"
  };

  let lastListHash = "#library";
  let editId = null;
  let editLinks = [];
  let editAttachments = [];
  let imageSelection = [0, 0];
  let removeId = null;
  let dirty = false;
  let uploadBusy = false;
  let toastTimer;

  const esc = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));

  const icon = name =>
    `<svg class="icon" aria-hidden="true"><use href="#ico-${name}"></use></svg>`;

  const fmtDate = value => {
    const date = new Date(value);
    return Number.isNaN(date.getTime())
      ? "未設定"
      : date.toLocaleDateString("ja-JP", {
          timeZone: "Asia/Tokyo",
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        });
  };

  const uid = () =>
    globalThis.crypto?.randomUUID?.() ||
    `doc-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  const catName = id =>
    data.categories.find(category => category.id === id)?.title || "未分類";

  const safeUrl = (value, mode = "link") => {
    const raw = String(value || "").trim();

    if (!raw || /[\u0000-\u001f\u007f]/.test(raw)) return "";

    if (
      mode === "image" &&
      /^data:image\/(?:png|jpeg|webp|gif);base64,[A-Za-z0-9+/=]+$/i.test(raw)
    ) return raw;

    if (
      mode === "file" &&
      /^data:application\/octet-stream;base64,[A-Za-z0-9+/=]+$/i.test(raw)
    ) return raw;

    try {
      const url = new URL(raw, document.baseURI);

      if (
        url.username ||
        url.password ||
        /^data:|^javascript:|^vbscript:|^blob:/i.test(raw)
      ) return "";

      if (["https:", "http:"].includes(url.protocol)) return raw;

      if (
        url.protocol === "file:" &&
        !/^[a-z][a-z0-9+.-]*:/i.test(raw) &&
        !raw.startsWith("//")
      ) return raw;
    } catch {
      /* 不正なURLは表示しません。 */
    }

    return "";
  };

  function listHref(pf = "all", cat = "all", kind = "all") {
    const params = new URLSearchParams();

    if (pf !== "all") params.set("pf", pf);
    if (cat !== "all") params.set("cat", cat);
    if (kind !== "all") params.set("kind", kind);

    return "#library" + (params.toString() ? "?" + params.toString() : "");
  }

  function route() {
    const hash = location.hash || "#library";

    if (hash.startsWith("#doc/")) {
      try {
        return { type: "doc", id: decodeURIComponent(hash.slice(5)) };
      } catch {
        return { type: "doc", id: "" };
      }
    }

    const params = new URLSearchParams(hash.split("?")[1] || "");

    return {
      type: "list",
      pf: data.platforms.includes(params.get("pf")) ? params.get("pf") : "all",
      cat: data.categories.some(category => category.id === params.get("cat"))
        ? params.get("cat")
        : "all",
      kind: ["manual", "resources"].includes(params.get("kind"))
        ? params.get("kind")
        : "all"
    };
  }

  function navigate(hash) {
    closeMobileMenu();
    if (location.hash === hash) render(true);
    else location.hash = hash;
  }

  function toast(message) {
    clearTimeout(toastTimer);
    $("toast").textContent = message;
    $("toast").hidden = false;
    toastTimer = setTimeout(() => {
      $("toast").hidden = true;
    }, 5500);
  }

  function markChanged() {
    dirty = true;
    $("changes-banner").hidden = false;
    $("changes-text").textContent =
      "編集中の変更があります。script.jsを書き出して、Gitの同名ファイルを差し替えてください。";
  }

  function statusBadge(documentData) {
    const isDraft = documentData.status === "draft";
    const label = isDraft
      ? "下書き"
      : documentData.kind === "manual" ? "運用中" : "参照資料";

    return `<span class="status ${isDraft ? "draft" : "ready"}">${label}</span>`;
  }

  function pfBadge(platform) {
    return `<span class="pf-tag ${classNames[platform] || "common"}">${esc(platform)}</span>`;
  }

  function renderNav(currentRoute) {
    const currentDocument = currentRoute.type === "doc"
      ? data.documents.find(documentData => documentData.id === currentRoute.id)
      : null;

    const pf = currentDocument?.platform || currentRoute.pf || "all";
    const cat = currentDocument?.category || currentRoute.cat || "all";

    const navItems = [
      { id: "all", label: "すべての資料", icon: "grid" },
      { id: "manual", label: "手順書", icon: "file" },
      { id: "resources", label: "既存資料・リンク", icon: "link" }
    ];

    $("navigation").innerHTML = `
      <p class="nav-title">資料を探す</p>
      ${navItems.map(item => {
        const active = currentRoute.type === "list" &&
          currentRoute.kind === item.id &&
          currentRoute.cat === "all";

        return `
          <a class="nav-link ${active ? "active" : ""}"
            href="${esc(listHref(pf, "all", item.id))}"
            ${active ? 'aria-current="page"' : ""}>
            ${icon(item.icon)}
            <span>${esc(item.label)}</span>
          </a>`;
      }).join("")}

      <p class="nav-title">業務から探す</p>
      ${data.categories.map((category, index) => `
        <a class="nav-link ${cat === category.id ? "active" : ""}"
          href="${esc(listHref(pf, category.id))}"
          ${cat === category.id ? 'aria-current="page"' : ""}>
          <span class="nav-step">0${index + 1}</span>
          <span>${esc(category.title)}</span>
        </a>
      `).join("")}
    `;
  }

  function renderLibrary(currentRoute) {
    lastListHash = listHref(currentRoute.pf, currentRoute.cat, currentRoute.kind);

    const documents = data.documents.filter(documentData =>
      (currentRoute.pf === "all" || documentData.platform === currentRoute.pf) &&
      (currentRoute.cat === "all" || documentData.category === currentRoute.cat) &&
      (
        currentRoute.kind === "manual"
          ? documentData.kind === "manual"
          : currentRoute.kind === "resources"
            ? documentData.kind !== "manual"
            : true
      )
    );

    const title = currentRoute.cat !== "all"
      ? catName(currentRoute.cat)
      : currentRoute.kind === "manual"
        ? "手順書一覧"
        : currentRoute.kind === "resources"
          ? "既存資料・リンク"
          : "運営資料室";

    document.title = title + " | しゅりプロ";
    $("header-context").textContent =
      currentRoute.pf === "all" ? "すべてのPF" : currentRoute.pf;

    const tabs = [
      { value: "all", label: "すべてのPF" },
      ...data.platforms.map(platform => ({ value: platform, label: platform }))
    ];

    const descriptions = [
      "リアル・VライバーのLIVE運営",
      "Vライバーの所属・配信運営",
      "ゲーム・エモモの配信運営"
    ];

    const topSections = currentRoute.cat === "all" && currentRoute.kind === "all"
      ? `
        <section class="platform-grid" aria-label="PF別の資料">
          ${data.platforms.slice(0, 3)
            .filter(platform => currentRoute.pf === "all" || currentRoute.pf === platform)
            .map(platform => {
              const index = data.platforms.indexOf(platform);
              const count = data.documents.filter(item => item.platform === platform).length;

              return `
                <a class="platform-card ${classNames[platform]}"
                  href="${esc(listHref(platform))}">
                  <div class="pf-card-top">
                    <span class="pf-letter">${["T", "I", "M"][index]}</span>
                    <span>${count} 資料</span>
                  </div>
                  <h2>${esc(platform)}</h2>
                  <p>${esc(descriptions[index])}</p>
                  <div class="pf-card-foot">
                    <span>運営マニュアル</span>${icon("book")}
                  </div>
                </a>`;
            }).join("")}
        </section>

        <section class="workflow-section">
          <div class="section-heading">
            <h2>業務から探す</h2>
            <span>スカウト → 所属 → 配信 → 退所</span>
          </div>

          <div class="workflow-grid">
            ${data.categories.map((category, index) => `
              <a class="workflow-card"
                href="${esc(listHref(currentRoute.pf, category.id))}">
                <span class="step-number">0${index + 1}</span>
                <span>
                  <strong>${esc(category.title)}</strong>
                  <small>${esc(category.description)}</small>
                </span>
              </a>
            `).join("")}
          </div>
        </section>`
      : "";

    const list = documents.length
      ? `
        <div class="document-list">
          <div class="list-head">
            <span>資料名</span><span>PF</span><span>状態</span><span>更新日</span>
          </div>

          ${documents.map(documentData => `
            <a class="document-row" href="#doc/${encodeURIComponent(documentData.id)}">
              <span class="doc-main">
                <span class="doc-symbol ${documentData.kind !== "manual" ? "resource" : ""}">
                  ${icon(
                    documentData.kind === "manual" ? "file"
                      : documentData.kind === "link" ? "link" : "paperclip"
                  )}
                </span>
                <span>
                  <strong>${esc(documentData.title)}</strong>
                  <small>${esc(documentData.summary || catName(documentData.category))}</small>
                  <small class="row-pf">
                    ${esc(documentData.platform)} · ${esc(catName(documentData.category))}
                  </small>
                </span>
              </span>
              ${pfBadge(documentData.platform)}
              ${statusBadge(documentData)}
              <span class="updated">${fmtDate(documentData.updatedAt)}</span>
            </a>
          `).join("")}
        </div>`
      : `
        <div class="empty-state">
          <h2>まだ資料がありません</h2>
          <p>このPF・業務の手順書や既存資料を追加できます。</p>
          <button class="button primary" data-action="add">資料を追加</button>
        </div>`;

    main.innerHTML = `
      <div class="page">
        <div class="page-heading">
          <div>
            <div class="eyebrow">OPERATIONS LIBRARY</div>
            <h1>${esc(title)}</h1>
            <p>スカウトから退所まで、必要な手順と資料をひとつに。</p>
          </div>
          <button class="button primary" data-action="add">
            ${icon("plus")}資料を追加
          </button>
        </div>

        <nav class="tabs" aria-label="PFを選択">
          ${tabs.map(tab => `
            <a class="tab ${currentRoute.pf === tab.value ? "active" : ""}"
              href="${esc(listHref(tab.value, currentRoute.cat, currentRoute.kind))}"
              ${currentRoute.pf === tab.value ? 'aria-current="page"' : ""}>
              ${tab.value === "all"
                ? ""
                : `<span class="pf-dot ${classNames[tab.value]}"></span>`}
              ${esc(tab.label)}
            </a>
          `).join("")}
        </nav>

        ${topSections}

        ${currentRoute.cat !== "all" ? `
          <a class="button small secondary filter-reset"
            href="${esc(listHref(currentRoute.pf, "all", currentRoute.kind))}">
            業務の絞り込みを解除
          </a>
        ` : ""}

        <section>
          <div class="section-heading">
            <h2>資料一覧 <span class="count">${documents.length}</span></h2>
            <button class="text-button" data-action="add-link">
              ${icon("link")}既存資料を登録
            </button>
          </div>
          ${list}
        </section>
      </div>
    `;
  }

  function richText(text) {
    return esc(text).replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");
  }

  function renderContent(source) {
    const html = [];
    const headings = [];

    let paragraph = [];
    let list = [];
    let listTag = "";

    function flushParagraph() {
      if (paragraph.length) {
        html.push(`<p>${richText(paragraph.join("\n"))}</p>`);
        paragraph = [];
      }
    }

    function flushList() {
      if (list.length) {
        html.push(
          `<${listTag}>${list.map(text => `<li>${richText(text)}</li>`).join("")}</${listTag}>`
        );
        list = [];
        listTag = "";
      }
    }

    for (const line of String(source || "").replace(/\r\n/g, "\n").split("\n")) {
      const heading = /^(#{2,3})\s+(.+)$/.exec(line);
      const image = /^!\[([^\]]*)\]\((.+)\)\s*$/.exec(line);
      const bullet = /^(?:[-*]\s+|\d+[.)]\s+)(.+)$/.exec(line);

      if (heading) {
        flushParagraph();
        flushList();

        const id = "section-" + (headings.length + 1);
        const level = heading[1].length;

        headings.push({ id, title: heading[2], level });
        html.push(`<h${level} id="${id}">${richText(heading[2])}</h${level}>`);
      } else if (image) {
        flushParagraph();
        flushList();

        const src = safeUrl(image[2], "image");
        const alt = image[1] || "手順の参考画像";

        html.push(src ? `
          <figure class="manual-figure">
            <button class="manual-image" data-action="zoom"
              data-src="${esc(src)}" data-alt="${esc(alt)}"
              aria-label="${esc(alt)}を拡大">
              <img src="${esc(src)}" alt="${esc(alt)}"
                loading="lazy" decoding="async">
            </button>
            <figcaption>
              <span>${esc(alt)}</span>
              <span class="zoom-hint">クリックして拡大</span>
            </figcaption>
          </figure>
        ` : `<p class="image-fallback">画像のURLを確認してください：${esc(alt)}</p>`);
      } else if (bullet) {
        flushParagraph();

        const tag = /^\d/.test(line) ? "ol" : "ul";
        if (listTag && listTag !== tag) flushList();

        listTag = tag;
        list.push(bullet[1]);
      } else if (line.startsWith("> ")) {
        flushParagraph();
        flushList();
        html.push(`<blockquote>${richText(line.slice(2))}</blockquote>`);
      } else if (!line.trim()) {
        flushParagraph();
        flushList();
      } else {
        flushList();
        paragraph.push(line);
      }
    }

    flushParagraph();
    flushList();

    return { html: html.join(""), headings };
  }

  function resourceHtml(link) {
    const url = safeUrl(link.url);

    if (!url) {
      return `<p class="subtle">登録されたURLを確認してください：${esc(link.title)}</p>`;
    }

    let name = "";
    try {
      name = new URL(url, document.baseURI).hostname || "登録ファイル";
    } catch {
      /* 相対パス */
    }

    return `
      <a class="resource-link" href="${esc(url)}"
        target="_blank" rel="noopener noreferrer">
        <div>
          <b>${esc(link.title)}</b>
          <small>${esc(name)}</small>
        </div>
        ${icon("external")}
      </a>`;
  }

  function renderDocument(currentRoute) {
    const documentData = data.documents.find(item => item.id === currentRoute.id);

    if (!documentData) {
      document.title = "資料が見つかりません | しゅりプロ";
      $("header-context").textContent = "";
      main.innerHTML = `
        <div class="page">
          <div class="empty-state">
            <h1>資料が見つかりません</h1>
            <p>資料が削除されたか、編集後のscript.jsが未反映の可能性があります。</p>
            <a class="button secondary" href="#library">資料一覧へ戻る</a>
          </div>
        </div>`;
      return;
    }

    document.title = documentData.title + " | しゅりプロ";
    $("header-context").textContent =
      documentData.platform + " / " + catName(documentData.category);

    const content = renderContent(documentData.content);
    const links = documentData.links || [];
    const attachments = documentData.attachments || [];

    const attachmentHtml = attachments.map(file => {
      const url = safeUrl(file.data || file.url, "file");

      return url
        ? `
          <a class="resource-link" href="${esc(url)}" download="${esc(file.filename)}">
            <div>
              <b>${esc(file.filename)}</b>
              <small>${(Number(file.size || 0) / 1024 / 1024).toFixed(2)} MB</small>
            </div>
            ${icon("download")}
          </a>`
        : `<p class="subtle">${esc(file.filename)}：ファイルのパスを確認してください。</p>`;
    }).join("");

    main.innerHTML = `
      <div class="reader-page">
        <div class="reader-navigation">
          <div class="breadcrumbs">
            <a href="${esc(lastListHash)}">資料一覧</a>
            <span>${esc(documentData.platform)}</span>
            <span>${esc(catName(documentData.category))}</span>
          </div>

          <div class="reader-actions">
            <button class="button secondary small" data-action="edit"
              data-id="${esc(documentData.id)}">
              ${icon("edit")}資料を編集
            </button>
            <button class="button secondary small" data-action="delete"
              data-id="${esc(documentData.id)}">削除</button>
          </div>
        </div>

        <div class="reader-layout">
          <article class="reader-document" aria-labelledby="document-title">
            <header class="reader-header">
              <div class="reader-tags">
                ${pfBadge(documentData.platform)}
                ${statusBadge(documentData)}
                <span class="subtle">${esc(kindNames[documentData.kind] || "手順書")}</span>
              </div>

              <h1 id="document-title">${esc(documentData.title)}</h1>
              ${documentData.summary
                ? `<p class="summary">${esc(documentData.summary)}</p>`
                : ""}

              <p class="reader-meta">
                ${esc(catName(documentData.category))}　／　更新 ${fmtDate(documentData.updatedAt)}
              </p>
            </header>

            ${documentData.status === "draft" ? `
              <div class="draft-note">
                ${icon("edit")}
                <div>
                  <b>この資料は下書きです</b>
                  <p>現行ルールとPF向け資料を確認し、内容を更新してから運用してください。</p>
                </div>
              </div>
            ` : ""}

            <div class="manual-body">
              ${content.html ||
                '<p class="subtle">本文は未登録です。「資料を編集」から手順と画像を追加できます。</p>'}
            </div>

            <section class="resources-section">
              <h2>${icon("link")}関連する既存資料</h2>
              ${links.length
                ? links.map(resourceHtml).join("")
                : '<p class="subtle">リンクは未登録です。</p>'}
              <p class="source-note">
                外部資料は元のサイトで開きます。
                閲覧には元の資料のアクセス権限が必要です。
              </p>
            </section>

            <section class="resources-section">
              <h2>${icon("paperclip")}添付ファイル</h2>
              ${attachmentHtml || '<p class="subtle">添付ファイルはありません。</p>'}
            </section>
          </article>

          <aside class="reader-aside" aria-label="この資料の目次">
            ${content.headings.length ? `
              <div class="toc-box">
                <h2>この資料の目次</h2>
                <div class="toc-list">
                  ${content.headings.map(heading => `
                    <button class="toc-button ${heading.level === 3 ? "sub" : ""}"
                      data-action="scroll-section" data-section="${heading.id}">
                      ${esc(heading.title)}
                    </button>
                  `).join("")}
                </div>
              </div>
            ` : ""}
            <p class="aside-note">
              本文中の画像をクリックすると、拡大して確認できます。
            </p>
          </aside>
        </div>

        <div class="reader-bottom">
          <a class="button secondary" href="${esc(lastListHash)}">資料一覧へ戻る</a>
        </div>
      </div>
    `;
  }

  function render(focus = false) {
    if (location.hash === "#main") {
      main.focus();
      return;
    }

    const currentRoute = route();
    renderNav(currentRoute);

    if (currentRoute.type === "doc") renderDocument(currentRoute);
    else renderLibrary(currentRoute);

    if (focus) {
      window.scrollTo({ top: 0, behavior: "instant" });
      main.focus({ preventScroll: true });
    }
  }

  function openDialog(dialog) {
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function closeDialog(dialog) {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  }

  function closeMobileMenu() {
    $("sidebar").classList.remove("mobile-open");
    $("mobile-shade").hidden = true;
    $("nav-open").setAttribute("aria-expanded", "false");
  }

  $("nav-open").addEventListener("click", () => {
    $("sidebar").classList.add("mobile-open");
    $("mobile-shade").hidden = false;
    $("nav-open").setAttribute("aria-expanded", "true");
    $("nav-close").focus();
  });

  $("nav-close").addEventListener("click", () => {
    closeMobileMenu();
    $("nav-open").focus();
  });

  $("mobile-shade").addEventListener("click", closeMobileMenu);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && $("sidebar").classList.contains("mobile-open")) {
      closeMobileMenu();
      $("nav-open").focus();
    }
  });

  $("sidebar").addEventListener("click", event => {
    if (event.target.closest("a")) closeMobileMenu();
  });

  window.addEventListener("hashchange", () => {
    closeMobileMenu();
    render(true);
  });

  function renderEditorLinks() {
    $("editor-links").innerHTML = editLinks.map((link, index) => `
      <div class="link-input-row" data-link-index="${index}">
        <input required maxlength="180" placeholder="資料名"
          aria-label="リンク${index + 1}の資料名"
          data-link-field="title" value="${esc(link.title)}">
        <input required type="url" placeholder="https://…"
          aria-label="リンク${index + 1}のURL"
          data-link-field="url" value="${esc(link.url)}">
        <button type="button" class="remove-link" data-remove-link="${index}"
          aria-label="リンク${index + 1}を取り消す">
          ${icon("close")}
        </button>
      </div>
    `).join("");
  }

  $("editor-links").addEventListener("input", event => {
    const field = event.target.dataset.linkField;

    if (field) {
      const index = Number(event.target.closest("[data-link-index]").dataset.linkIndex);
      editLinks[index][field] = event.target.value;
    }
  });

  $("editor-links").addEventListener("click", event => {
    const button = event.target.closest("[data-remove-link]");

    if (button) {
      editLinks.splice(Number(button.dataset.removeLink), 1);
      renderEditorLinks();
    }
  });

  $("add-editor-link").addEventListener("click", () => {
    editLinks.push({ title: "", url: "" });
    renderEditorLinks();
    $("editor-links").lastElementChild?.querySelector("input")?.focus();
  });

  function renderEditorAttachments() {
    $("editor-attachments").innerHTML = editAttachments.map((file, index) => `
      <div class="attachment-edit">
        ${icon("paperclip")}
        <span>
          ${esc(file.filename)}
          <small>${(Number(file.size || 0) / 1024 / 1024).toFixed(2)} MB</small>
        </span>
        <button type="button" class="remove-link" data-remove-attachment="${index}"
          aria-label="${esc(file.filename)}を取り消す">
          ${icon("close")}
        </button>
      </div>
    `).join("");
  }

  $("editor-attachments").addEventListener("click", event => {
    const button = event.target.closest("[data-remove-attachment]");

    if (button && !uploadBusy) {
      editAttachments.splice(Number(button.dataset.removeAttachment), 1);
      renderEditorAttachments();
    }
  });

  function editorError(message) {
    $("editor-error").textContent = message;
    $("editor-error").hidden = false;
  }

  function startEditor(id = null, kind = "manual") {
    const currentRoute = route();
    const existing = id ? data.documents.find(item => item.id === id) : null;
    const current = currentRoute.type === "doc"
      ? data.documents.find(item => item.id === currentRoute.id)
      : null;

    const documentData = existing || {
      title: "",
      platform: current?.platform ||
        (currentRoute.pf !== "all" && currentRoute.pf) ||
        data.platforms[0],
      category: current?.category ||
        (currentRoute.cat !== "all" && currentRoute.cat) ||
        data.categories[0].id,
      kind,
      status: "draft",
      summary: "",
      content: "",
      links: [],
      attachments: []
    };

    editId = existing?.id || null;
    editLinks = JSON.parse(JSON.stringify(documentData.links || []));
    editAttachments = JSON.parse(JSON.stringify(documentData.attachments || []));

    $("editor-title").textContent = existing ? "資料を編集" : "資料を追加";
    $("edit-title").value = documentData.title;

    $("edit-platform").innerHTML = data.platforms.map(platform =>
      `<option value="${esc(platform)}">${esc(platform)}</option>`
    ).join("");

    $("edit-category").innerHTML = data.categories.map(category =>
      `<option value="${esc(category.id)}">${esc(category.title)}</option>`
    ).join("");

    for (const key of ["platform", "category", "kind", "status", "summary", "content"]) {
      $("edit-" + key).value = documentData[key] || "";
    }

    $("editor-error").hidden = true;
    renderEditorLinks();
    renderEditorAttachments();
    openDialog(editor);
  }

  function endEditor() {
    if (!uploadBusy) closeDialog(editor);
  }

  $("editor-close").addEventListener("click", endEditor);
  $("editor-cancel").addEventListener("click", endEditor);

  editor.addEventListener("cancel", event => {
    if (uploadBusy) event.preventDefault();
  });

  function setUploadBusy(on) {
    uploadBusy = on;
    $("apply-edit").disabled = on;
    $("insert-image-file").disabled = on;
    $("insert-attachment").disabled = on;
    $("insert-image-url").disabled = on;
    $("editor-close").disabled = on;
    $("editor-cancel").disabled = on;
  }

  function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error("ファイルを読み込めませんでした。"));
      reader.readAsDataURL(file);
    });
  }

  function rememberSelection() {
    imageSelection = [
      $("edit-content").selectionStart,
      $("edit-content").selectionEnd
    ];
  }

  for (const eventName of ["keyup", "click", "select", "blur"]) {
    $("edit-content").addEventListener(eventName, rememberSelection);
  }

  function insertAtCursor(value) {
    const input = $("edit-content");
    const [start, end] = imageSelection;
    const addition = "\n\n" + value + "\n\n";

    input.value = input.value.slice(0, start) + addition + input.value.slice(end);

    const cursor = start + addition.length;
    imageSelection = [cursor, cursor];

    input.focus();
    input.setSelectionRange(cursor, cursor);
  }

  function cleanAlt(text) {
    return String(text)
      .replace(/[\[\]()\\\r\n]/g, " ")
      .trim()
      .slice(0, 240) || "手順の参考画像";
  }

  $("insert-image-file").addEventListener("change", async event => {
    if (uploadBusy) return;

    const files = Array.from(event.target.files || []);
    event.target.value = "";
    if (!files.length) return;

    setUploadBusy(true);
    $("editor-error").hidden = true;

    try {
      if (files.some(file =>
        !["image/png", "image/jpeg", "image/webp", "image/gif"].includes(file.type) ||
        file.size > 5 * 1024 * 1024
      )) {
        throw new Error("PNG・JPEG・WebP・GIFの画像を選択してください。1枚5MBまでです。");
      }

      const images = [];

      for (const file of files) {
        images.push(`![${cleanAlt(file.name)}](${await readFile(file)})`);
      }

      const addition = images.join("\n\n");

      if ($("edit-content").value.length + addition.length > 12000000) {
        throw new Error("本文と画像の合計が大きすぎます。画像URL・相対パスで挿入してください。");
      }

      insertAtCursor(addition);
      toast("本文に画像を挿入しました。");
    } catch (error) {
      editorError(error.message);
    } finally {
      setUploadBusy(false);
    }
  });

  $("insert-image-url").addEventListener("click", () => {
    rememberSelection();
    $("image-url-value").value = "";
    $("image-url-alt").value = "";
    $("image-url-error").hidden = true;
    openDialog($("image-url-dialog"));
  });

  $("image-url-cancel").addEventListener("click", () => {
    closeDialog($("image-url-dialog"));
  });

  $("image-url-form").addEventListener("submit", event => {
    event.preventDefault();

    const raw = $("image-url-value").value.trim();
    const src = safeUrl(raw, "image");

    if (!src || /[\r\n]/.test(raw)) {
      $("image-url-error").textContent =
        "画像の直接URL、または ./images/ファイル名.png のような相対パスを指定してください。";
      $("image-url-error").hidden = false;
      return;
    }

    closeDialog($("image-url-dialog"));
    insertAtCursor(`![${cleanAlt($("image-url-alt").value)}](${src})`);
  });

  $("insert-attachment").addEventListener("change", async event => {
    if (uploadBusy) return;

    const files = Array.from(event.target.files || []);
    event.target.value = "";
    if (!files.length) return;

    setUploadBusy(true);
    $("editor-error").hidden = true;

    try {
      const allowed = ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "csv"];

      if (files.some(file =>
        !allowed.includes(file.name.split(".").pop().toLowerCase()) ||
        file.size > 10 * 1024 * 1024 ||
        !file.size
      )) {
        throw new Error("10MB以下のPDF・Office文書・テキスト・CSVを選択してください。");
      }

      const added = [];

      for (const file of files) {
        const value = await readFile(file);

        added.push({
          id: uid(),
          filename: file.name,
          size: file.size,
          data: "data:application/octet-stream;base64," +
            value.slice(value.indexOf(",") + 1)
        });
      }

      if (JSON.stringify(editAttachments.concat(added)).length > 30000000) {
        throw new Error(
          "添付の合計が大きすぎます。Googleドライブなどへのリンク登録を利用してください。"
        );
      }

      editAttachments.push(...added);
      renderEditorAttachments();
    } catch (error) {
      editorError(error.message);
    } finally {
      setUploadBusy(false);
    }
  });

  $("editor-form").addEventListener("submit", event => {
    event.preventDefault();
    if (uploadBusy) return;

    const title = $("edit-title").value.trim();

    if (!title) {
      editorError("資料名を入力してください。");
      return;
    }

    if (editLinks.some(link =>
      !link.title.trim() ||
      !/^https?:\/\//i.test(link.url.trim()) ||
      !safeUrl(link.url)
    )) {
      editorError("リンクの資料名と、http・httpsで始まるURLを確認してください。");
      return;
    }

    const documentData = {
      id: editId || uid(),
      title,
      platform: $("edit-platform").value,
      category: $("edit-category").value,
      kind: $("edit-kind").value,
      status: $("edit-status").value,
      summary: $("edit-summary").value.trim(),
      content: $("edit-content").value,
      links: editLinks.map(link => ({
        title: link.title.trim(),
        url: link.url.trim()
      })),
      attachments: editAttachments,
      updatedAt: new Date().toISOString()
    };

    const index = data.documents.findIndex(item => item.id === documentData.id);

    if (index >= 0) data.documents[index] = documentData;
    else data.documents.push(documentData);

    closeDialog(editor);
    markChanged();
    navigate("#doc/" + encodeURIComponent(documentData.id));
    toast("編集を反映しました。script.jsを書き出して差し替えてください。");
  });

  function exportScript() {
    const source =
      "/* しゅりプロ 運営資料室 / Git版\n" +
      " * このファイルに資料・画像・リンクのデータが保存されています。\n" +
      " * 本文の画像：![説明](./images/example.png)\n" +
      " * 編集後はこのファイルを書き出してGitの同名ファイルを差し替えてください。\n" +
      " */\nconst SITE_DATA = " +
      JSON.stringify(data, null, 2) +
      ";\n\n" +
      initOperationsSite.toString() +
      "\n\ninitOperationsSite(SITE_DATA);\n";

    const blob = new Blob([source], {
      type: "text/javascript;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "script.js";
    document.body.append(anchor);
    anchor.click();
    anchor.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);

    dirty = false;
    $("changes-banner").hidden = false;
    $("changes-text").textContent =
      "script.jsを書き出しました。Gitの同名ファイルを差し替えると、編集内容が反映されます。";

    toast("script.jsをダウンロードしました。");
  }

  document.addEventListener("click", event => {
    const target = event.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;

    if (action === "add") startEditor();
    if (action === "add-link") startEditor(null, "link");
    if (action === "edit") startEditor(target.dataset.id);
    if (action === "export") exportScript();

    if (action === "zoom") {
      const src = safeUrl(target.dataset.src, "image");
      if (!src) return;

      $("large-image").src = src;
      $("large-image").alt = target.dataset.alt || "参考画像";
      $("image-title").textContent = target.dataset.alt || "画像の拡大表示";
      $("image-caption").textContent = target.dataset.alt || "";

      openDialog($("image-viewer"));
    }

    if (action === "scroll-section") {
      const heading = $(target.dataset.section);

      if (heading) {
        heading.scrollIntoView({ behavior: "smooth", block: "start" });
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      }
    }

    if (action === "delete") {
      removeId = target.dataset.id;

      const documentData = data.documents.find(item => item.id === removeId);
      if (!documentData) return;

      $("delete-description").textContent =
        "「" + documentData.title + "」を資料一覧から削除します。";

      openDialog($("delete-dialog"));
    }
  });

  $("image-close").addEventListener("click", () => {
    closeDialog($("image-viewer"));
  });

  $("delete-cancel").addEventListener("click", () => {
    removeId = null;
    closeDialog($("delete-dialog"));
  });

  $("delete-confirm").addEventListener("click", () => {
    data.documents = data.documents.filter(item => item.id !== removeId);

    closeDialog($("delete-dialog"));
    removeId = null;

    markChanged();
    navigate(lastListHash);
    toast("一覧から削除しました。script.jsを書き出して差し替えてください。");
  });

  main.addEventListener("error", event => {
    if (event.target.tagName !== "IMG") return;

    const figure = event.target.closest("figure");
    if (!figure) return;

    const alt = event.target.alt;

    figure.innerHTML = `
      <div class="image-fallback">
        画像を読み込めませんでした。画像のURL・パスとアクセス権限を確認してください。
      </div>
      <figcaption>${esc(alt)}</figcaption>
    `;
  }, true);

  window.addEventListener("beforeunload", event => {
    if (dirty) {
      event.preventDefault();
      event.returnValue = "";
    }
  });

  render();
}

initOperationsSite(SITE_DATA);
