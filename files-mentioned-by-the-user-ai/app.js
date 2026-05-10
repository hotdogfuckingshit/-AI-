(function () {
  const data = window.STUDY_DATA;
  const practiceBank = window.PRACTICE_BANK || [];
  const initialHash = window.location ? window.location.hash : "";
  const state = {
    subjectId: data.subjects[0].id,
    sectionId: data.subjects[0].sections[0].id,
    view:
      initialHash === "#quiz"
        ? "quiz"
        : initialHash === "#past"
          ? "past"
          : initialHash === "#practice"
            ? "practice"
            : "full",
    query: "",
    quizScope: "section",
    onlyMissed: false,
    examId: data.pastExams?.[0]?.id || "",
  };

  const quizStoreKey = "ai-planner-study-answers-v1";
  let storageAvailable = true;
  let answers = loadAnswers();

  const statGrid = document.getElementById("statGrid");
  const subjectNav = document.getElementById("subjectNav");
  const sectionNav = document.getElementById("sectionNav");
  const viewTabs = document.getElementById("viewTabs");
  const mainContent = document.getElementById("mainContent");
  const searchInput = document.getElementById("searchInput");

  function loadAnswers() {
    try {
      return JSON.parse(localStorage.getItem(quizStoreKey) || "{}");
    } catch {
      storageAvailable = false;
      return {};
    }
  }

  function saveAnswers() {
    if (!storageAvailable) return;
    try {
      localStorage.setItem(quizStoreKey, JSON.stringify(answers));
    } catch {
      storageAvailable = false;
    }
  }

  function subject() {
    return data.subjects.find((item) => item.id === state.subjectId) || data.subjects[0];
  }

  function section() {
    const current = subject();
    return current.sections.find((item) => item.id === state.sectionId) || current.sections[0];
  }

  function quizzesByIds(ids) {
    const wanted = new Set(ids);
    return data.quizzes.filter((question) => wanted.has(question.id));
  }

  function pastExam() {
    return data.pastExams.find((item) => item.id === state.examId) || data.pastExams[0];
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function highlight(value) {
    const safe = escapeHtml(value);
    const query = state.query.trim();
    if (!query) return safe;
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp(escapedQuery, "gi"), (match) => `<mark>${match}</mark>`);
  }

  const keyTerms = [
    "人工智慧",
    "機器學習",
    "深度學習",
    "監督式學習",
    "非監督式學習",
    "強化學習",
    "生成式 AI",
    "鑑別式 AI",
    "資料處理",
    "資料分析",
    "模型訓練",
    "模型部署",
    "Prompt",
    "No Code",
    "Low Code",
    "RAG",
    "MLOps",
    "API",
    "隱私",
    "偏見",
    "治理",
    "風險",
  ];

  function emphasizeContent(value) {
    let safe = escapeHtml(value);
    const query = state.query.trim();
    keyTerms
      .slice()
      .sort((a, b) => b.length - a.length)
      .forEach((term) => {
        const escapedTerm = escapeHtml(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        safe = safe.replace(new RegExp(escapedTerm, "g"), `<strong class="key-term">${escapeHtml(term)}</strong>`);
      });
    safe = safe.replace(/^([^：:]{2,28})([：:])/u, `<strong class="key-term">$1</strong>$2`);
    if (!query) return safe;
    const escapedQuery = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp(escapedQuery, "gi"), (match) => `<mark>${match}</mark>`);
  }

  function sectionContentLines(current) {
    return current.text
      .split(/\n+/)
      .map((line) => line.replace(/^[-•]\s*/, "").trim())
      .filter(Boolean);
  }

  function sectionContentBlocks(current) {
    return current.text
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((text) => {
        const bullet = /^[-•]\s*/.test(text);
        const clean = text.replace(/^[-•]\s*/, "").trim();
        const heading =
          /^(\d+\.\s|[（(]?\d+[）)]|[（(]?[一二三四五六七八九十]+[）)]|[A-Z]\.)/.test(clean) ||
          (clean.length <= 34 && /[：:]$/.test(clean));
        return {
          text: clean,
          type: heading ? "heading" : bullet ? "bullet" : "paragraph",
        };
      });
  }

  function shortText(value, length = 180) {
    const compact = String(value || "").replace(/\s+/g, " ").trim();
    return compact.length > length ? `${compact.slice(0, length)}...` : compact;
  }

  function pageRangeLabel(item) {
    return item.pageStart === item.pageEnd ? `第 ${item.pageStart} 頁` : `第 ${item.pageStart}-${item.pageEnd} 頁`;
  }

  function renderStats() {
    const totalQuestions = data.stats.questionCount + practiceBank.length;
    const contentPoints = data.subjects.reduce(
      (sum, subj) => sum + subj.sections.reduce((inner, sec) => inner + sectionContentLines(sec).length, 0),
      0,
    );
    statGrid.innerHTML = [
      ["學習點", contentPoints],
      ["章節", data.stats.sectionCount],
      ["題目", totalQuestions],
      ["科目", data.stats.subjectCount],
    ]
      .map(
        ([label, value]) => `
          <div class="stat">
            <span class="stat-value">${value}</span>
            <span class="stat-label">${label}</span>
          </div>
        `,
      )
      .join("");
  }

  function renderSubjectNav() {
    subjectNav.innerHTML = data.subjects
      .map(
        (item) => `
          <button type="button" class="${item.id === state.subjectId ? "active" : ""}" data-subject="${item.id}">
            ${escapeHtml(item.shortTitle)}
          </button>
        `,
      )
      .join("");
  }

  function renderSectionNav() {
    sectionNav.innerHTML = subject()
      .sections.map(
        (item) => `
          <button type="button" class="section-link ${item.id === state.sectionId ? "active" : ""}" data-section="${item.id}">
            <span class="section-link-title">${escapeHtml(item.title)}</span>
            <span class="section-link-meta">${item.quizCount || 0} 題</span>
          </button>
        `,
      )
      .join("");
  }

  function renderTabs() {
    viewTabs.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("active", button.dataset.view === state.view);
    });
  }

  function hero() {
    const currentSubject = subject();
    const currentSection = section();
    return `
      <div class="section-hero">
        <div>
          <div class="breadcrumbs">${escapeHtml(currentSubject.title)}</div>
          <h2>${escapeHtml(currentSection.title)}</h2>
        </div>
        <div class="source-pill">${escapeHtml(currentSubject.shortTitle)} · ${currentSection.quizCount || 0} 題</div>
      </div>
    `;
  }

  function renderFull() {
    const current = section();
    const blocks = sectionContentBlocks(current);
    mainContent.innerHTML = `
      ${hero()}
      <div class="toolbar">
        ${current.quizCount ? `<button type="button" class="tool-button" data-view-jump="quiz">本章答題</button>` : ""}
      </div>
      <article class="study-article">
        ${blocks.map((block) => `<p class="study-line ${block.type}">${emphasizeContent(block.text)}</p>`).join("")}
      </article>
    `;
  }

  function quizScopeItems() {
    const currentSubject = subject();
    const currentSection = section();
    if (state.quizScope === "all") return data.quizzes;
    if (state.quizScope === "subject") {
      return data.quizzes.filter((item) => item.subjectId === currentSubject.id);
    }
    return quizzesByIds(currentSection.quizIds);
  }

  function quizStats(items) {
    let checked = 0;
    let correct = 0;
    items.forEach((item) => {
      const record = answers[item.id];
      if (record?.checked) {
        checked += 1;
        if (record.selected === item.answer) correct += 1;
      }
    });
    return { checked, correct, total: items.length };
  }

  function renderQuiz() {
    let items = quizScopeItems();
    if (state.onlyMissed) {
      items = items.filter((item) => answers[item.id]?.checked && answers[item.id].selected !== item.answer);
    }
    const stats = quizStats(items);
    mainContent.innerHTML = `
      ${hero()}
      <div class="quiz-toolbar">
        <div class="quiz-progress">已確認 ${stats.checked}/${stats.total} 題 · 答對 ${stats.correct} 題</div>
        <div class="toolbar">
          <button type="button" class="tool-button ${state.quizScope === "section" ? "active" : ""}" data-quiz-scope="section">本章</button>
          <button type="button" class="tool-button ${state.quizScope === "subject" ? "active" : ""}" data-quiz-scope="subject">本科</button>
          <button type="button" class="tool-button ${state.quizScope === "all" ? "active" : ""}" data-quiz-scope="all">全部</button>
          <button type="button" class="tool-button ${state.onlyMissed ? "active" : ""}" data-only-missed="toggle">錯題</button>
          <button type="button" class="tool-button" data-reset-quiz="1">↺ 重設</button>
        </div>
      </div>
      ${
        items.length
          ? `<div class="quiz-list">${items.map(renderQuestion).join("")}</div>`
          : `<div class="empty-state">目前範圍沒有題目。</div>`
      }
    `;
  }

  function renderPast() {
    const currentExam = pastExam();
    let items = currentExam ? quizzesByIds(currentExam.quizIds) : [];
    if (state.onlyMissed) {
      items = items.filter((item) => answers[item.id]?.checked && answers[item.id].selected !== item.answer);
    }
    const stats = quizStats(items);
    mainContent.innerHTML = `
      <div class="section-hero">
        <div>
          <div class="breadcrumbs">歷屆試題</div>
          <h2>${escapeHtml(currentExam?.title || "歷屆試題")}</h2>
        </div>
        <div class="source-pill">${currentExam ? `${currentExam.questionCount} 題 · ${escapeHtml(currentExam.fileName)}` : "0 題"}</div>
      </div>
      <div class="quiz-toolbar">
        <div class="quiz-progress">已確認 ${stats.checked}/${stats.total} 題 · 答對 ${stats.correct} 題</div>
        <div class="toolbar">
          ${data.pastExams
            .map(
              (exam) => `
                <button type="button" class="tool-button ${exam.id === state.examId ? "active" : ""}" data-exam-id="${exam.id}">
                  ${escapeHtml(exam.shortTitle)}
                </button>
              `,
            )
            .join("")}
          <button type="button" class="tool-button ${state.onlyMissed ? "active" : ""}" data-only-missed="toggle">錯題</button>
          <button type="button" class="tool-button" data-reset-past="1">↺ 重設本卷</button>
        </div>
      </div>
      ${
        items.length
          ? `<div class="quiz-list">${items.map(renderQuestion).join("")}</div>`
          : `<div class="empty-state">目前沒有歷屆試題。</div>`
      }
    `;
  }

  function practiceItems() {
    if (!state.onlyMissed) return practiceBank;
    return practiceBank.filter((item) => answers[item.id]?.checked && answers[item.id].selected !== item.answer);
  }

  function practiceStats(items) {
    let checked = 0;
    let correct = 0;
    items.forEach((item) => {
      const record = answers[item.id];
      if (record?.checked) {
        checked += 1;
        if (record.selected === item.answer) correct += 1;
      }
    });
    return { checked, correct, total: items.length };
  }

  function renderPractice() {
    const items = practiceItems();
    const stats = practiceStats(items);
    mainContent.innerHTML = `
      <div class="section-hero">
        <div>
          <div class="breadcrumbs">題庫練習</div>
          <h2>AI 基礎延伸題庫</h2>
        </div>
        <div class="source-pill">${practiceBank.length} 題 · 選擇題練習</div>
      </div>
      <div class="quiz-toolbar">
        <div class="quiz-progress">已作答 ${stats.checked}/${stats.total} 題 · 答對 ${stats.correct} 題</div>
        <div class="toolbar">
          <button type="button" class="tool-button ${state.onlyMissed ? "active" : ""}" data-only-missed="toggle">錯題</button>
          <button type="button" class="tool-button" data-reset-practice="1">↺ 重設題庫</button>
        </div>
      </div>
      ${
        items.length
          ? `<div class="quiz-list">${items.map(renderQuestion).join("")}</div>`
          : `<div class="empty-state">目前沒有題庫練習題。</div>`
      }
    `;
  }

  function renderQuestion(item) {
    const record = answers[item.id] || {};
    const checked = Boolean(record.checked);
    const selected = record.selected || "";
    const needsSelection = Boolean(record.needsSelection);
    const isCorrect = checked && selected === item.answer;
    const correctText = item.correctText || item.options?.[item.answer] || item.answer;
    return `
      <article class="quiz-card" data-question-id="${item.id}">
        <div class="question-head">
          <h3 class="question-title">${item.number}. ${highlight(item.question)}</h3>
          <div class="question-meta">${escapeHtml(item.sectionTitle || item.source || "題庫練習")}</div>
        </div>
        <div class="option-list">
          ${Object.entries(item.options)
            .map(([label, text]) => {
              const selectedClass = selected === label ? "selected" : "";
              const resultClass = checked && label === item.answer ? "correct" : checked && selected === label ? "wrong" : "";
              return `
                <button type="button" class="option-button ${selectedClass} ${resultClass}" data-option="${label}">
                  <span class="option-label">${label}</span>
                  <span class="option-text">${highlight(text)}</span>
                </button>
              `;
            })
            .join("")}
        </div>
        <div class="answer-row">
          <button type="button" class="primary-action" data-check-answer="1">✓ 確認答案</button>
          ${needsSelection ? `<span class="result-badge bad">請先選擇一個選項</span>` : ""}
          ${checked ? `<span class="result-badge ${isCorrect ? "good" : "bad"}">${isCorrect ? "答對" : "答錯"} · 正解 ${item.answer}</span>` : ""}
        </div>
        ${
          checked
            ? `<div class="explanation"><strong>解析：</strong>${highlight(item.explanation || `正解：${correctText}`)}</div>`
            : ""
        }
      </article>
    `;
  }

  function renderSearch() {
    const query = state.query.trim();
    const results = query ? collectSearchResults(query) : [];
    mainContent.innerHTML = `
      ${hero()}
      ${
        query
          ? `<div class="quiz-progress">搜尋「${escapeHtml(query)}」· ${results.length} 筆</div>`
          : `<div class="empty-state">輸入關鍵字後顯示搜尋結果。</div>`
      }
      ${
        results.length
          ? `<div class="search-list">${results.map(renderSearchResult).join("")}</div>`
          : query
            ? `<div class="empty-state">沒有符合的內容。</div>`
            : ""
      }
    `;
  }

  function collectSearchResults(query) {
    const lower = query.toLocaleLowerCase();
    const results = [];
    data.subjects.forEach((subj) => {
      subj.sections.forEach((sec) => {
        sec.pages.forEach((page) => {
          if (page.text.toLocaleLowerCase().includes(lower)) {
            results.push({
              type: "page",
              subjectId: subj.id,
              sectionId: sec.id,
              title: `${subj.shortTitle} · ${sec.title} · 第 ${page.number} 頁`,
              text: snippet(page.text, query),
            });
          }
        });
      });
    });
    data.quizzes.forEach((item) => {
      const text = [item.question, Object.values(item.options).join(" "), item.explanation].join(" ");
      if (text.toLocaleLowerCase().includes(lower)) {
        results.push({
          type: "quiz",
          subjectId: item.subjectId,
          sectionId: item.sectionId,
          title: `${item.sectionTitle} · 第 ${item.number} 題`,
          text: snippet(text, query),
        });
      }
    });
    practiceBank.forEach((item) => {
      const text = [item.question, item.correctText, Object.values(item.options || {}).join(" "), item.explanation].join(" ");
      if (text.toLocaleLowerCase().includes(lower)) {
        results.push({
          type: "practice",
          subjectId: state.subjectId,
          sectionId: state.sectionId,
          title: `題庫練習 · 第 ${item.number} 題`,
          text: snippet(text, query),
        });
      }
    });
    return results.slice(0, 120);
  }

  function snippet(text, query) {
    const clean = String(text || "").replace(/\s+/g, " ").trim();
    const index = clean.toLocaleLowerCase().indexOf(query.toLocaleLowerCase());
    if (index < 0) return shortText(clean, 220);
    const start = Math.max(0, index - 80);
    const end = Math.min(clean.length, index + query.length + 140);
    return `${start ? "..." : ""}${clean.slice(start, end)}${end < clean.length ? "..." : ""}`;
  }

  function renderSearchResult(item) {
    return `
      <article class="search-card">
        <div class="search-meta">${escapeHtml(item.title)}</div>
        <p class="search-snippet">${highlight(item.text)}</p>
        <div>
          <button type="button" class="secondary-action" data-go-section="${item.sectionId}" data-go-subject="${item.subjectId}">開啟章節</button>
        </div>
      </article>
    `;
  }

  function renderMain() {
    renderTabs();
    if (state.view === "full") renderFull();
    else if (state.view === "quiz") renderQuiz();
    else if (state.view === "past") renderPast();
    else if (state.view === "practice") renderPractice();
    else if (state.view === "search") renderSearch();
    else renderFull();
  }

  function renderAll() {
    renderStats();
    renderSubjectNav();
    renderSectionNav();
    renderMain();
  }

  subjectNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-subject]");
    if (!button) return;
    state.subjectId = button.dataset.subject;
    const firstLesson = subject().sections.find((item) => item.kind === "lesson") || subject().sections[0];
    state.sectionId = firstLesson.id;
    state.onlyMissed = false;
    renderAll();
  });

  sectionNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-section]");
    if (!button) return;
    state.sectionId = button.dataset.section;
    state.onlyMissed = false;
    renderSectionNav();
    renderMain();
  });

  viewTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-view]");
    if (!button) return;
    state.view = button.dataset.view;
    renderMain();
  });

  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    if (state.query.trim()) state.view = "search";
    renderMain();
  });

  mainContent.addEventListener("click", (event) => {
    const viewJump = event.target.closest("[data-view-jump]");
    if (viewJump) {
      state.view = viewJump.dataset.viewJump;
      renderMain();
      return;
    }

    const scope = event.target.closest("[data-quiz-scope]");
    if (scope) {
      state.quizScope = scope.dataset.quizScope;
      state.onlyMissed = false;
      renderMain();
      return;
    }

    const missed = event.target.closest("[data-only-missed]");
    if (missed) {
      state.onlyMissed = !state.onlyMissed;
      renderMain();
      return;
    }

    const examButton = event.target.closest("[data-exam-id]");
    if (examButton) {
      state.examId = examButton.dataset.examId;
      state.onlyMissed = false;
      renderMain();
      return;
    }

    const resetPast = event.target.closest("[data-reset-past]");
    if (resetPast) {
      const currentExam = pastExam();
      if (currentExam) {
        quizzesByIds(currentExam.quizIds).forEach((item) => delete answers[item.id]);
      }
      saveAnswers();
      renderMain();
      return;
    }

    const resetPractice = event.target.closest("[data-reset-practice]");
    if (resetPractice) {
      practiceBank.forEach((item) => delete answers[item.id]);
      saveAnswers();
      renderMain();
      return;
    }

    const reset = event.target.closest("[data-reset-quiz]");
    if (reset) {
      quizScopeItems().forEach((item) => delete answers[item.id]);
      saveAnswers();
      renderMain();
      return;
    }

    const goSection = event.target.closest("[data-go-section]");
    if (goSection) {
      state.subjectId = goSection.dataset.goSubject;
      state.sectionId = goSection.dataset.goSection;
      state.view = "full";
      renderSubjectNav();
      renderSectionNav();
      renderMain();
      return;
    }

    const card = event.target.closest("[data-question-id]");
    if (!card) return;
    const questionId = card.dataset.questionId;
    const option = event.target.closest("[data-option]");
    if (option) {
      answers[questionId] = { selected: option.dataset.option, checked: false, needsSelection: false };
      saveAnswers();
      renderMain();
      return;
    }
    const check = event.target.closest("[data-check-answer]");
    if (check) {
      const current = answers[questionId] || {};
      if (!current.selected) {
        answers[questionId] = { ...current, checked: false, needsSelection: true };
        saveAnswers();
        renderMain();
        return;
      }
      answers[questionId] = { ...current, checked: true, needsSelection: false };
      saveAnswers();
      renderMain();
    }
  });

  renderAll();
})();
