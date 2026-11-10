/**
 * =============================================================================
 * WHITE STAR QUIZ PRO v3.0 - APPLICATION CORE
 * Complete High-Performance Client-Side Technical Learning & Exam Platform
 * Zero-Dependency, 100% Offline Compatible, Audio Engine & Leitner Flashcards
 * =============================================================================
 */

// Global image error fallback handler (works offline, Windows, and GitHub Pages)
window.handleImgError = function(el) {
  if (!el || el.dataset.retried) return;
  el.dataset.retried = '1';
  const src = el.getAttribute('src') || '';
  if (src.startsWith('images/')) {
    el.src = 'data/' + src;
  } else if (src.startsWith('data/images/')) {
    el.src = src.replace('data/', '');
  }
};

/* --- 1. AUDIO ENGINE (Synthesized Web Audio API - Zero External Files) --- */
const AudioEngine = {
  ctx: null,
  enabled: true,

  init() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    } catch (e) {
      this.enabled = false;
    }
  },

  ensureContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  toggleSound() {
    this.enabled = !this.enabled;
    const btn = document.getElementById('btn-audio-toggle');
    if (btn) {
      btn.innerHTML = this.enabled ? '🔊' : '🔇';
      btn.title = this.enabled ? 'Tắt hiệu ứng âm thanh' : 'Bật hiệu ứng âm thanh';
      btn.classList.toggle('active', this.enabled);
    }
    AppState.saveSoundPreference(this.enabled);
    if (this.enabled) this.playTone(523.25, 0.08, 'sine');
  },

  playTone(freq, duration, type = 'sine', gainVal = 0.15) {
    if (!this.enabled || !this.ctx) return;
    this.ensureContext();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  },

  playCorrect() {
    if (!this.enabled) return;
    this.playTone(587.33, 0.1, 'triangle', 0.12); // D5
    setTimeout(() => this.playTone(880.00, 0.18, 'triangle', 0.15), 100); // A5
  },

  playWrong() {
    if (!this.enabled) return;
    this.playTone(220.00, 0.15, 'sawtooth', 0.12);
  },

  playTick() {
    if (!this.enabled) return;
    this.playTone(900, 0.03, 'sine', 0.05);
  },

  playComplete() {
    if (!this.enabled) return;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 0.25, 'triangle', 0.15), i * 120);
    });
  }
};

/* --- 2. LIGHTBOX PAN-ZOOM ENGINE --- */
const LightboxEngine = {
  scale: 1,
  panX: 0,
  panY: 0,
  isPanning: false,
  startX: 0,
  startY: 0,

  open(imgSrc, title = 'Sơ đồ kỹ thuật') {
    const modal = document.getElementById('modal-lightbox');
    const img = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    if (!modal || !img) return;

    img.src = imgSrc;
    if (titleEl) titleEl.innerText = title;
    this.reset();
    modal.classList.add('open');
  },

  close() {
    const modal = document.getElementById('modal-lightbox');
    if (modal) modal.classList.remove('open');
    this.reset();
  },

  updateTransform() {
    const img = document.getElementById('lightbox-img');
    const zoomVal = document.getElementById('lightbox-zoom-val');
    if (img) {
      img.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${this.scale})`;
    }
    if (zoomVal) {
      zoomVal.innerText = `${Math.round(this.scale * 100)}%`;
    }
  },

  zoomIn() {
    this.scale = Math.min(this.scale + 0.25, 4.0);
    this.updateTransform();
  },

  zoomOut() {
    this.scale = Math.max(this.scale - 0.25, 0.5);
    this.updateTransform();
  },

  reset() {
    this.scale = 1;
    this.panX = 0;
    this.panY = 0;
    this.updateTransform();
  },

  handleWheel(e) {
    e.preventDefault();
    if (e.deltaY < 0) {
      this.zoomIn();
    } else {
      this.zoomOut();
    }
  },

  startPan(e) {
    if (e.button !== 0) return;
    this.isPanning = true;
    this.startX = e.clientX - this.panX;
    this.startY = e.clientY - this.panY;
    const vp = document.getElementById('lightbox-viewport');
    if (vp) vp.classList.add('panning');

    const onMouseMove = (ev) => {
      if (!this.isPanning) return;
      this.panX = ev.clientX - this.startX;
      this.panY = ev.clientY - this.startY;
      this.updateTransform();
    };

    const onMouseUp = () => {
      this.isPanning = false;
      if (vp) vp.classList.remove('panning');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }
};

/* --- 3. TEXT & TECHNICAL FORMULA ENGINE --- */
const TextEngine = {
  format(text) {
    if (!text) return '';
    let out = String(text);

    // Escape HTML first
    out = out
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Bold markdown **text**
    out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Code formatting `text`
    out = out.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    // Engineering units & Greek symbols
    out = out
      .replace(/\\Omega/g, 'Ω')
      .replace(/\\mu\\text\{F\}/g, 'μF')
      .replace(/\\text\{k\}\\Omega/g, 'kΩ')
      .replace(/\\beta/g, 'β')
      .replace(/\\omega/g, 'ω')
      .replace(/\\pi/g, 'π');

    return out;
  }
};

/* --- 4. CENTRAL APPLICATION STATE --- */
const AppState = {
  currentTab: 'dashboard',
  theme: 'midnight',
  soundEnabled: true,

  currentUser: {
    id: 'ws_user_default',
    name: 'Kỹ thuật viên WS',
    code: 'WS-2026-001',
    dept: 'Kỹ thuật sản xuất',
    avatar: '👨‍💻'
  },

  masterQuestions: [],
  mockExams: [],
  summary: null,

  // Learning tracking
  userAnswersRecord: {}, // qId -> { isCorrect: bool, selectedKey: str, timesAttempted: int, timesWrong: int }
  userBookmarks: new Set(),
  mistakes: new Set(),
  leitner: {
    box1: [], // Chưa nhớ
    box2: [], // Đang nhớ
    box3: []  // Đã thuộc
  },

  // Practice state
  practice: {
    subject: 'all',
    module: 'all',
    type: 'all',
    difficulty: 'all',
    status: 'all',
    search: '',
    page: 1,
    pageSize: 10,
    instantFeedback: true,
    shuffle: true,
    filtered: []
  },

  // Flashcards state
  flashcards: {
    subject: 'all',
    deck: [],
    currentIndex: 0,
    isFlipped: false
  },

  // Exam state
  exam: {
    selectedPreset: 'SMART_80',
    activeExam: null,
    currentIndex: 0,
    answers: {}, // index -> key
    flags: new Set(), // indices flagged
    secondsRemaining: 3600,
    timeSpentSeconds: 0,
    timerInterval: null,
    isSubmitted: false,
    lastResult: null,
    shuffleOptions: true,
    shuffleQuestions: false,
    enableTimer: true
  },

  // History state
  history: [],

  init() {
    this.loadStorage();
    this.loadBundledData();
  },

  loadStorage() {
    try {
      const savedTheme = localStorage.getItem('ws_quiz_theme');
      if (savedTheme) this.theme = savedTheme;

      const savedSound = localStorage.getItem('ws_quiz_sound');
      if (savedSound !== null) this.soundEnabled = savedSound === 'true';

      const savedUser = localStorage.getItem('ws_quiz_user');
      if (savedUser) this.currentUser = JSON.parse(savedUser);

      const uid = this.currentUser.id || 'ws_user_default';
      const savedAnswers = localStorage.getItem(`ws_answers_${uid}`);
      if (savedAnswers) this.userAnswersRecord = JSON.parse(savedAnswers);

      const savedBm = localStorage.getItem(`ws_bookmarks_${uid}`);
      if (savedBm) this.userBookmarks = new Set(JSON.parse(savedBm));

      const savedMistakes = localStorage.getItem(`ws_mistakes_${uid}`);
      if (savedMistakes) this.mistakes = new Set(JSON.parse(savedMistakes));

      const savedLeitner = localStorage.getItem(`ws_leitner_${uid}`);
      if (savedLeitner) this.leitner = JSON.parse(savedLeitner);

      const savedHistory = localStorage.getItem(`ws_history_${uid}`);
      if (savedHistory) this.history = JSON.parse(savedHistory);
    } catch (e) {
      console.warn('Storage load failed:', e);
    }
  },

  saveStorage() {
    try {
      const uid = this.currentUser.id || 'ws_user_default';
      localStorage.setItem('ws_quiz_theme', this.theme);
      localStorage.setItem('ws_quiz_sound', String(this.soundEnabled));
      localStorage.setItem('ws_quiz_user', JSON.stringify(this.currentUser));
      localStorage.setItem(`ws_answers_${uid}`, JSON.stringify(this.userAnswersRecord));
      localStorage.setItem(`ws_bookmarks_${uid}`, JSON.stringify([...this.userBookmarks]));
      localStorage.setItem(`ws_mistakes_${uid}`, JSON.stringify([...this.mistakes]));
      localStorage.setItem(`ws_leitner_${uid}`, JSON.stringify(this.leitner));
      localStorage.setItem(`ws_history_${uid}`, JSON.stringify(this.history));
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  },

  saveSoundPreference(val) {
    this.soundEnabled = val;
    localStorage.setItem('ws_quiz_sound', String(val));
  },

  loadBundledData() {
    this.masterQuestions = window.QUESTIONS_MASTER || [];
    this.mockExams = window.MOCK_EXAMS_DATA || [];
    this.summary = window.APP_SUMMARY || {};

    // Normalize each question
    this.masterQuestions.forEach(q => {
      if (!q.question_type) {
        const text = (q.question || '').toLowerCase();
        if (q.images && q.images.length > 0) q.question_type = 'schema';
        else if (/tính|giá trị|bao nhiêu|tần số|chu kỳ/.test(text)) q.question_type = 'calculation';
        else if (/sự cố|lỗi|khắc phục|bảo trì/.test(text)) q.question_type = 'application';
        else q.question_type = 'theory';
      }
      if (!q.difficulty) q.difficulty = 'Dễ';
    });

    // Populate leitner box1 if empty
    if (!this.leitner.box1 || this.leitner.box1.length === 0) {
      this.leitner.box1 = this.masterQuestions.slice(0, 100).map(q => q.id);
      this.leitner.box2 = [];
      this.leitner.box3 = [];
    }
  },

  recordAnswer(qId, selectedKey, isCorrect) {
    const existing = this.userAnswersRecord[qId] || { timesAttempted: 0, timesWrong: 0 };
    existing.isCorrect = isCorrect;
    existing.selectedKey = selectedKey;
    existing.timesAttempted += 1;
    existing.timestamp = Date.now();

    if (!isCorrect) {
      existing.timesWrong += 1;
      this.mistakes.add(qId);
    } else {
      // If answered correctly in mistakes mode or normal, we can graduate from mistakes
      if (this.mistakes.has(qId)) {
        this.mistakes.delete(qId);
      }
    }

    this.userAnswersRecord[qId] = existing;
    this.saveStorage();
    UI.updateBadges();
  },

  toggleBookmark(qId) {
    if (this.userBookmarks.has(qId)) {
      this.userBookmarks.delete(qId);
    } else {
      this.userBookmarks.add(qId);
    }
    this.saveStorage();
    UI.updateBadges();
  }
};

/* --- 5. STORAGE & BACKUP MANAGER --- */
const StorageManager = {
  exportBackup() {
    const backupData = {
      version: '3.0',
      exportedAt: new Date().toISOString(),
      user: AppState.currentUser,
      answers: AppState.userAnswersRecord,
      bookmarks: [...AppState.userBookmarks],
      mistakes: [...AppState.mistakes],
      leitner: AppState.leitner,
      history: AppState.history
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `white-star-quiz-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('✅ Đã xuất dữ liệu sao lưu thành công! Hãy lưu file này cẩn thận.');
  },

  handleImport(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (!data.answers && !data.history) {
          throw new Error('Định dạng file không tương thích.');
        }

        if (confirm('Bạn có chắc muốn nạp lại bản sao lưu này? Dữ liệu hiện tại sẽ được cập nhật.')) {
          if (data.user) AppState.currentUser = data.user;
          if (data.answers) AppState.userAnswersRecord = data.answers;
          if (data.bookmarks) AppState.userBookmarks = new Set(data.bookmarks);
          if (data.mistakes) AppState.mistakes = new Set(data.mistakes);
          if (data.leitner) AppState.leitner = data.leitner;
          if (data.history) AppState.history = data.history;

          AppState.saveStorage();
          alert('🎉 Khôi phục dữ liệu thành công!');
          location.reload();
        }
      } catch (err) {
        alert('❌ Lỗi khi đọc file sao lưu: ' + err.message);
      }
    };
    reader.readAsText(file);
  }
};

/* --- 6. DASHBOARD CONTROLLER --- */
const DashboardController = {
  render() {
    const totalQ = AppState.masterQuestions.length;
    const answeredCount = Object.keys(AppState.userAnswersRecord).length;
    const correctCount = Object.values(AppState.userAnswersRecord).filter(a => a.isCorrect).length;
    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    // Metrics
    const totalEl = document.getElementById('val-total-master');
    if (totalEl) totalEl.innerText = totalQ;

    const accEl = document.getElementById('val-accuracy-rate');
    if (accEl) accEl.innerText = answeredCount > 0 ? `${accuracy}%` : '--%';

    const accSub = document.getElementById('val-accuracy-sub');
    if (accSub) accSub.innerText = `${correctCount} / ${answeredCount} câu đã làm`;

    const sideProg = document.getElementById('sidebar-progress-percent');
    if (sideProg) sideProg.innerText = `${Math.round((answeredCount / totalQ) * 100)}%`;

    // 4 Subjects progress
    const subjects = ['electric', 'plc', 'machine', 'pneumatics'];
    subjects.forEach(sub => {
      const subQs = AppState.masterQuestions.filter(q => q.subject_code === sub);
      const subAnswered = subQs.filter(q => AppState.userAnswersRecord[q.id]).length;
      const pct = subQs.length > 0 ? Math.round((subAnswered / subQs.length) * 100) : 0;

      const fill = document.getElementById(`prog-${sub}`);
      if (fill) fill.style.width = `${pct}%`;

      const rateLabel = document.getElementById(`rate-${sub}`);
      if (rateLabel) rateLabel.innerText = `${pct}% hoàn thành`;
    });

    // Rank logic
    this.updateRank(correctCount);
  },

  updateRank(correctCount) {
    const iconEl = document.getElementById('rank-icon');
    const nameEl = document.getElementById('rank-name');
    const descEl = document.getElementById('rank-desc');

    if (correctCount >= 500) {
      if (iconEl) iconEl.innerText = '🏆';
      if (nameEl) nameEl.innerText = 'Kỹ Thuật Viên White Star Master';
      if (descEl) descEl.innerText = 'Xuất sắc! Bạn đã làm chủ hoàn toàn các chuyên đề kỹ thuật White Star.';
    } else if (correctCount >= 250) {
      if (iconEl) iconEl.innerText = '⭐';
      if (nameEl) nameEl.innerText = 'Kỹ Thuật Viên Bậc 2 (Senior)';
      if (descEl) descEl.innerText = 'Rất tốt! Điểm số ổn định, sẵn sàng cho các bài thi đánh giá chuẩn.';
    } else if (correctCount >= 100) {
      if (iconEl) iconEl.innerText = '🔧';
      if (nameEl) nameEl.innerText = 'Kỹ Thuật Viên Bậc 1 (Junior)';
      if (descEl) descEl.innerText = 'Đã nắm vững lý thuyết cốt lõi, tiếp tục rèn luyện các bài thi thử.';
    } else {
      if (iconEl) iconEl.innerText = '🎖️';
      if (nameEl) nameEl.innerText = 'Kỹ Thuật Viên Tập Sự';
      if (descEl) descEl.innerText = 'Hãy làm quen với các câu hỏi và sơ đồ kỹ thuật ở 4 môn chuyên đề.';
    }
  }
};

/* --- 7. PRACTICE CONTROLLER --- */
const PracticeController = {
  init() {
    this.populateModuleDropdown();
    this.applyFilters();
  },

  populateModuleDropdown() {
    const select = document.getElementById('p-filter-module');
    if (!select) return;

    const currentSub = AppState.practice.subject;
    const questions = currentSub === 'all'
      ? AppState.masterQuestions
      : AppState.masterQuestions.filter(q => q.subject_code === currentSub);

    const modules = [...new Set(questions.map(q => q.module).filter(Boolean))].sort();
    select.innerHTML = '<option value="all">Tất cả chuyên đề</option>' +
      modules.map(m => `<option value="${m}">${m}</option>`).join('');
  },

  startSubject(subCode) {
    AppState.practice.subject = subCode;
    const subSelect = document.getElementById('p-filter-subject');
    if (subSelect) subSelect.value = subCode;
    this.populateModuleDropdown();
    this.applyFilters();
    UI.switchTab('practice');
  },

  onFilterChange() {
    AppState.practice.subject = document.getElementById('p-filter-subject').value;
    AppState.practice.module = document.getElementById('p-filter-module').value;
    AppState.practice.type = document.getElementById('p-filter-type').value;
    AppState.practice.difficulty = document.getElementById('p-filter-diff').value;
    AppState.practice.status = document.getElementById('p-filter-status').value;
    AppState.practice.page = 1;
    this.populateModuleDropdown();
    this.applyFilters();
  },

  onSearchInput() {
    AppState.practice.search = document.getElementById('p-filter-search').value.trim().toLowerCase();
    AppState.practice.page = 1;
    this.applyFilters();
  },

  toggleOption(key) {
    if (key === 'instantFeedback') {
      AppState.practice.instantFeedback = document.getElementById('p-opt-instant').checked;
    } else if (key === 'shuffle') {
      AppState.practice.shuffle = document.getElementById('p-opt-shuffle').checked;
    }
    this.renderQuestions();
  },

  resetFilters() {
    AppState.practice.subject = 'all';
    AppState.practice.module = 'all';
    AppState.practice.type = 'all';
    AppState.practice.difficulty = 'all';
    AppState.practice.status = 'all';
    AppState.practice.search = '';
    AppState.practice.page = 1;

    document.getElementById('p-filter-subject').value = 'all';
    document.getElementById('p-filter-module').value = 'all';
    document.getElementById('p-filter-type').value = 'all';
    document.getElementById('p-filter-diff').value = 'all';
    document.getElementById('p-filter-status').value = 'all';
    document.getElementById('p-filter-search').value = '';

    this.populateModuleDropdown();
    this.applyFilters();
  },

  applyFilters() {
    const { subject, module, type, difficulty, status, search } = AppState.practice;

    let res = AppState.masterQuestions.filter(q => {
      if (subject !== 'all' && q.subject_code !== subject) return false;
      if (module !== 'all' && q.module !== module) return false;
      if (type !== 'all' && q.question_type !== type) return false;
      if (difficulty !== 'all' && q.difficulty !== difficulty) return false;

      // Status filter
      if (status !== 'all') {
        const record = AppState.userAnswersRecord[q.id];
        if (status === 'unattempted' && record) return false;
        if (status === 'correct' && (!record || !record.isCorrect)) return false;
        if (status === 'wrong' && (!record || record.isCorrect)) return false;
        if (status === 'bookmarked' && !AppState.userBookmarks.has(q.id)) return false;
      }

      // Search filter
      if (search) {
        const text = `${q.id} ${q.question} ${(q.options || []).map(o => o.text).join(' ')}`.toLowerCase();
        if (!text.includes(search)) return false;
      }

      return true;
    });

    AppState.practice.filtered = res;
    const counter = document.getElementById('practice-result-counter');
    if (counter) counter.innerText = `Hiển thị ${res.length} câu`;

    this.renderQuestions();
  },

  renderQuestions() {
    const list = document.getElementById('practice-questions-list');
    if (!list) return;

    const { page, pageSize, filtered, shuffle } = AppState.practice;
    const totalPages = Math.ceil(filtered.length / pageSize) || 1;
    const startIdx = (page - 1) * pageSize;
    const pageItems = filtered.slice(startIdx, startIdx + pageSize);

    // Update pagination
    const pageInfo = document.getElementById('pagination-info');
    if (pageInfo) pageInfo.innerText = `Trang ${page} / ${totalPages} (${filtered.length} câu)`;

    const btnPrev = document.getElementById('btn-page-prev');
    const btnNext = document.getElementById('btn-page-next');
    if (btnPrev) btnPrev.disabled = page <= 1;
    if (btnNext) btnNext.disabled = page >= totalPages;

    if (pageItems.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: 14px; border: 1px solid var(--border-color);">
          <div style="font-size: 48px; margin-bottom: 12px;">🔍</div>
          <h3>Không tìm thấy câu hỏi phù hợp</h3>
          <p style="color: var(--text-secondary); margin-bottom: 16px;">Vui lòng thử điều chỉnh lại bộ lọc hoặc từ khóa tìm kiếm.</p>
          <button class="btn btn-primary btn-sm" onclick="PracticeController.resetFilters()">Đặt lại bộ lọc</button>
        </div>
      `;
      return;
    }

    list.innerHTML = pageItems.map((q, idx) => {
      const qNum = startIdx + idx + 1;
      const isBookmarked = AppState.userBookmarks.has(q.id);
      const record = AppState.userAnswersRecord[q.id];

      // Prepare options
      let options = (q.options || []).map(opt => ({ ...opt }));
      if (shuffle) {
        // Deterministic shuffle based on question ID
        options.sort((a, b) => a.key.localeCompare(b.key));
      }

      // Check option states
      const optHtml = options.map(opt => {
        let optClass = 'option-btn';
        if (record) {
          if (opt.key === q.correct_answer) optClass += ' correct';
          else if (record.selectedKey === opt.key && !record.isCorrect) optClass += ' wrong';
          else optClass += ' disabled';
        }

        return `
          <button class="${optClass}" onclick="PracticeController.selectOption('${q.id}', '${opt.key}', '${q.correct_answer}')">
            <span class="opt-badge">${opt.key}</span>
            <span class="opt-text">${TextEngine.format(opt.text)}</span>
          </button>
        `;
      }).join('');

      // Images
      let imgHtml = '';
      if (q.images && q.images.length > 0) {
        imgHtml = `
          <div class="question-images">
            ${q.images.map(img => `
              <img src="${img}" alt="Schematic" class="q-img-thumb" 
                   onclick="LightboxEngine.open('${img}', '${q.id}: ${q.module || 'Sơ đồ'}')" 
                   onerror="handleImgError(this)">
            `).join('')}
          </div>
        `;
      }

      // Explanation
      let expHtml = '';
      if (q.explanation && record) {
        const exp = q.explanation;
        expHtml = `
          <div class="explanation-box">
            <div class="explanation-toggle-btn" onclick="UI.toggleAccordion('exp-${q.id}')">
              <span>💡 Giải thích chi tiết câu #${q.id}</span>
              <span>▼</span>
            </div>
            <div class="explanation-content" id="exp-${q.id}">
              <div class="exp-section why-correct">
                <h5>✓ Vì sao đáp án [${exp.correct_answer || q.correct_answer}] chính xác:</h5>
                <p>${TextEngine.format(exp.why_correct || exp.overview || '')}</p>
              </div>
              ${exp.why_wrong ? `
                <div class="exp-section why-wrong">
                  <h5>⚠ Phân tích phương án gây nhiễu & bẫy thi:</h5>
                  <p>${TextEngine.format(exp.why_wrong)}</p>
                </div>
              ` : ''}
              ${exp.supplementary_knowledge ? `
                <div class="exp-section supplementary">
                  <h5>📌 Kiến thức cốt lõi cần nhớ:</h5>
                  <p>${TextEngine.format(exp.supplementary_knowledge)}</p>
                </div>
              ` : ''}
            </div>
          </div>
        `;
      }

      return `
        <div class="question-card" id="qcard-${q.id}">
          <div class="question-card-header">
            <div class="question-meta-tags">
              <span class="tag tag-id">#${qNum} (${q.id})</span>
              <span class="tag tag-subject">${q.subject || q.subject_code}</span>
              <span class="tag tag-diff-${q.difficulty === 'Dễ' ? 'easy' : q.difficulty === 'Khó' ? 'hard' : 'medium'}">${q.difficulty}</span>
              ${q.module ? `<span class="tag" style="background: var(--bg-surface); color: var(--text-secondary);">${q.module}</span>` : ''}
            </div>
            <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" onclick="PracticeController.toggleBookmark('${q.id}')" title="Gắn sao câu hỏi này">
              ${isBookmarked ? '⭐' : '☆'}
            </button>
          </div>

          <div class="question-title">${TextEngine.format(q.question)}</div>
          ${q.context ? `<div class="question-context">${TextEngine.format(q.context)}</div>` : ''}
          ${imgHtml}

          <div class="options-grid">
            ${optHtml}
          </div>

          ${expHtml}
        </div>
      `;
    }).join('');
  },

  selectOption(qId, selectedKey, correctKey) {
    const isCorrect = selectedKey === correctKey;
    if (isCorrect) {
      AudioEngine.playCorrect();
    } else {
      AudioEngine.playWrong();
    }

    AppState.recordAnswer(qId, selectedKey, isCorrect);
    this.renderQuestions();
    DashboardController.render();
  },

  toggleBookmark(qId) {
    AppState.toggleBookmark(qId);
    this.renderQuestions();
  },

  prevPage() {
    if (AppState.practice.page > 1) {
      AppState.practice.page -= 1;
      this.renderQuestions();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  nextPage() {
    const totalPages = Math.ceil(AppState.practice.filtered.length / AppState.practice.pageSize);
    if (AppState.practice.page < totalPages) {
      AppState.practice.page += 1;
      this.renderQuestions();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};

/* --- 8. FLASHCARDS CONTROLLER (SPACED REPETITION) --- */
const FlashcardController = {
  init() {
    this.onSubjectChange();
  },

  onSubjectChange() {
    const sub = document.getElementById('flashcard-subject-select').value;
    AppState.flashcards.subject = sub;

    let deck = [];
    if (sub === 'mistakes') {
      deck = AppState.masterQuestions.filter(q => AppState.mistakes.has(q.id));
    } else if (sub === 'all') {
      deck = [...AppState.masterQuestions];
    } else {
      deck = AppState.masterQuestions.filter(q => q.subject_code === sub);
    }

    AppState.flashcards.deck = deck;
    AppState.flashcards.currentIndex = 0;
    AppState.flashcards.isFlipped = false;
    this.updateCounters();
    this.renderCard();
  },

  shuffleCards() {
    const arr = AppState.flashcards.deck;
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    AppState.flashcards.currentIndex = 0;
    AppState.flashcards.isFlipped = false;
    this.renderCard();
  },

  flipCard() {
    AppState.flashcards.isFlipped = !AppState.flashcards.isFlipped;
    const cardEl = document.getElementById('active-flashcard');
    if (cardEl) {
      cardEl.classList.toggle('flipped', AppState.flashcards.isFlipped);
    }
  },

  renderCard() {
    const { deck, currentIndex } = AppState.flashcards;
    const counterEl = document.getElementById('flashcard-counter');
    const cardEl = document.getElementById('active-flashcard');
    if (cardEl) cardEl.classList.remove('flipped');
    AppState.flashcards.isFlipped = false;

    if (deck.length === 0) {
      if (counterEl) counterEl.innerText = '0 / 0 thẻ';
      const frontQ = document.getElementById('flash-front-question');
      if (frontQ) frontQ.innerText = 'Không có thẻ ghi nhớ nào trong mục này.';
      return;
    }

    const q = deck[currentIndex];
    if (counterEl) counterEl.innerText = `Thẻ ${currentIndex + 1} / ${deck.length}`;

    // Front
    const fSubject = document.getElementById('flash-front-subject');
    const fQuestion = document.getElementById('flash-front-question');
    const fImgBox = document.getElementById('flash-front-img-container');

    if (fSubject) fSubject.innerText = q.subject || q.subject_code;
    if (fQuestion) fQuestion.innerHTML = TextEngine.format(q.question);

    if (fImgBox) {
      if (q.images && q.images.length > 0) {
        fImgBox.innerHTML = `<img src="${q.images[0]}" alt="diagram" style="max-height: 140px; border-radius: 8px; border: 1px solid var(--border-color); background: #fff;" onerror="handleImgError(this)">`;
      } else {
        fImgBox.innerHTML = '';
      }
    }

    // Back
    const bId = document.getElementById('flash-back-id');
    const bAnswer = document.getElementById('flash-back-answer');
    const bExp = document.getElementById('flash-back-explanation');

    if (bId) bId.innerText = q.id;

    // Find correct option text
    const correctOpt = (q.options || []).find(o => o.key === q.correct_answer);
    const ansText = correctOpt ? correctOpt.text : q.correct_answer;
    if (bAnswer) bAnswer.innerHTML = `Đáp án ${q.correct_answer}: ${TextEngine.format(ansText)}`;

    if (bExp) {
      const whyCorrect = q.explanation ? (q.explanation.why_correct || q.explanation.overview || '') : '';
      bExp.innerHTML = TextEngine.format(whyCorrect);
    }
  },

  rateCard(boxNum) {
    const { deck, currentIndex } = AppState.flashcards;
    if (deck.length === 0) return;

    const qId = deck[currentIndex].id;
    // Remove from other boxes
    AppState.leitner.box1 = AppState.leitner.box1.filter(id => id !== qId);
    AppState.leitner.box2 = AppState.leitner.box2.filter(id => id !== qId);
    AppState.leitner.box3 = AppState.leitner.box3.filter(id => id !== qId);

    // Add to rated box
    if (boxNum === 1) {
      AppState.leitner.box1.push(qId);
      AppState.mistakes.add(qId);
      AudioEngine.playWrong();
    } else if (boxNum === 2) {
      AppState.leitner.box2.push(qId);
      AudioEngine.playTone(600, 0.1, 'sine');
    } else if (boxNum === 3) {
      AppState.leitner.box3.push(qId);
      AppState.mistakes.delete(qId);
      AudioEngine.playCorrect();
    }

    AppState.saveStorage();
    this.updateCounters();
    this.nextCard();
  },

  nextCard() {
    const { deck } = AppState.flashcards;
    if (deck.length === 0) return;
    AppState.flashcards.currentIndex = (AppState.flashcards.currentIndex + 1) % deck.length;
    this.renderCard();
  },

  prevCard() {
    const { deck } = AppState.flashcards;
    if (deck.length === 0) return;
    AppState.flashcards.currentIndex = (AppState.flashcards.currentIndex - 1 + deck.length) % deck.length;
    this.renderCard();
  },

  updateCounters() {
    const b1 = document.getElementById('flash-count-box1');
    const b2 = document.getElementById('flash-count-box2');
    const b3 = document.getElementById('flash-count-box3');

    if (b1) b1.innerText = AppState.leitner.box1.length;
    if (b2) b2.innerText = AppState.leitner.box2.length;
    if (b3) b3.innerText = AppState.leitner.box3.length;
  }
};

/* --- 9. MISTAKES CONTROLLER --- */
const MistakesController = {
  render() {
    const list = document.getElementById('mistakes-questions-list');
    if (!list) return;

    const mistakeQuestions = AppState.masterQuestions.filter(q => AppState.mistakes.has(q.id));

    if (mistakeQuestions.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: 14px; border: 1px solid var(--border-color);">
          <div style="font-size: 48px; margin-bottom: 12px;">🎉</div>
          <h3>Sổ tay câu sai đang trống!</h3>
          <p style="color: var(--text-secondary);">Bạn không có câu hỏi nào bị sai hoặc đã hoàn thành xuất sắc tất cả các câu đã làm.</p>
        </div>
      `;
      return;
    }

    list.innerHTML = mistakeQuestions.map(q => {
      const record = AppState.userAnswersRecord[q.id] || {};
      const wrongCount = record.timesWrong || 1;

      return `
        <div class="question-card" style="border-left: 4px solid var(--danger);">
          <div class="question-card-header">
            <div class="question-meta-tags">
              <span class="tag tag-id">${q.id}</span>
              <span class="tag tag-subject">${q.subject || q.subject_code}</span>
              <span class="mistake-badge">Đã sai ${wrongCount} lần</span>
            </div>
            <button class="btn btn-sm btn-outline" onclick="MistakesController.graduateQuestion('${q.id}')">
              ✓ Đã hiểu (Gỡ khỏi sổ sai)
            </button>
          </div>

          <div class="question-title">${TextEngine.format(q.question)}</div>

          <div style="background: var(--bg-surface); padding: 14px; border-radius: 8px; margin-top: 10px;">
            <div style="color: var(--success); font-weight: 700; margin-bottom: 4px;">Đáp án chuẩn: [${q.correct_answer}]</div>
            <div style="font-size: 13px; color: var(--text-secondary);">${TextEngine.format(q.explanation ? (q.explanation.why_correct || q.explanation.overview || '') : '')}</div>
          </div>
        </div>
      `;
    }).join('');
  },

  graduateQuestion(qId) {
    AppState.mistakes.delete(qId);
    AppState.saveStorage();
    UI.updateBadges();
    this.render();
  },

  practiceAllMistakes() {
    AppState.practice.status = 'wrong';
    document.getElementById('p-filter-status').value = 'wrong';
    PracticeController.applyFilters();
    UI.switchTab('practice');
  },

  clearMistakes() {
    if (confirm('Bạn có chắc muốn xóa tất cả câu hỏi trong Sổ tay câu sai?')) {
      AppState.mistakes.clear();
      AppState.saveStorage();
      UI.updateBadges();
      this.render();
    }
  }
};

/* --- 10. EXAM CONTROLLER (EXAM SIMULATION ENGINE) --- */
const ExamController = {
  selectPreset(presetKey, elem) {
    AppState.exam.selectedPreset = presetKey;
    document.querySelectorAll('.exam-card-item').forEach(el => el.classList.remove('active'));
    if (elem) elem.classList.add('active');
  },

  startExam() {
    const preset = AppState.exam.selectedPreset;
    const shuffleOpts = document.getElementById('exam-shuffle-options').checked;
    const shuffleQs = document.getElementById('exam-shuffle-questions').checked;
    const enableTimer = document.getElementById('exam-enable-timer').checked;

    let examQuestions = [];
    let title = 'Bài thi thử White Star';
    let durationMinutes = 60;

    if (preset.startsWith('SMART_')) {
      const gen = this.generateSmartExam(preset);
      examQuestions = gen.questions;
      title = gen.title;
      durationMinutes = gen.duration;
    } else {
      // Find official mock exam
      const found = AppState.mockExams.find(e => e.id === preset);
      if (found) {
        examQuestions = found.questions.map(q => ({ ...q }));
        title = found.title;
        durationMinutes = 60;
      }
    }

    if (shuffleQs) {
      examQuestions.sort(() => Math.random() - 0.5);
    }

    AppState.exam.activeExam = {
      presetId: preset,
      title: title,
      questions: examQuestions,
      shuffleOptions: shuffleOpts,
      durationMinutes: durationMinutes
    };

    AppState.exam.currentIndex = 0;
    AppState.exam.answers = {};
    AppState.exam.flags.clear();
    AppState.exam.secondsRemaining = durationMinutes * 60;
    AppState.exam.timeSpentSeconds = 0;
    AppState.exam.isSubmitted = false;

    // Switch views
    document.getElementById('exam-setup-view').style.display = 'none';
    document.getElementById('exam-result-view').style.display = 'none';
    document.getElementById('exam-active-view').style.display = 'flex';

    document.getElementById('active-exam-title').innerText = title;

    if (enableTimer) {
      this.startTimer();
    } else {
      document.getElementById('exam-timer-display').innerText = 'Không giới hạn';
    }

    this.renderActiveQuestion();
    this.renderPalette();
  },

  generateSmartExam(preset) {
    let count = 80;
    let duration = 60;
    let title = 'Đề Chuẩn Mô Phỏng White Star (80 câu)';

    if (preset === 'SMART_40') {
      count = 40;
      duration = 30;
      title = 'Đề Rút Gọn Cân Bằng (40 câu)';
    } else if (preset === 'SMART_20') {
      count = 20;
      duration = 15;
      title = 'Đề Cấp Tốc (20 câu)';
    } else if (preset === 'SMART_SUBJECT') {
      count = 25;
      duration = 20;
      title = 'Đề Chuyên Sâu Từng Môn (25 câu)';
    }

    const perSubject = Math.floor(count / 4);
    const subjects = ['electric', 'plc', 'machine', 'pneumatics'];
    let selected = [];

    subjects.forEach(sub => {
      const pool = AppState.masterQuestions.filter(q => q.subject_code === sub);
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      selected.push(...shuffled.slice(0, perSubject));
    });

    return {
      title,
      duration,
      questions: selected.map(q => ({ ...q }))
    };
  },

  startTimer() {
    clearInterval(AppState.exam.timerInterval);
    const display = document.getElementById('exam-timer-display');
    const timerBox = document.getElementById('exam-timer-box');

    AppState.exam.timerInterval = setInterval(() => {
      AppState.exam.secondsRemaining -= 1;
      AppState.exam.timeSpentSeconds += 1;

      const mins = Math.floor(AppState.exam.secondsRemaining / 60);
      const secs = AppState.exam.secondsRemaining % 60;
      if (display) {
        display.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }

      // Warning when < 5 mins
      if (AppState.exam.secondsRemaining <= 300) {
        if (timerBox) timerBox.classList.add('warning');
        if (AppState.exam.secondsRemaining % 60 === 0) AudioEngine.playTick();
      }

      if (AppState.exam.secondsRemaining <= 0) {
        clearInterval(AppState.exam.timerInterval);
        alert('⏰ Đã hết thời gian làm bài! Hệ thống đang tự động nộp bài.');
        this.submitExam();
      }
    }, 1000);
  },

  renderActiveQuestion() {
    const { activeExam, currentIndex, answers, flags } = AppState.exam;
    if (!activeExam || !activeExam.questions) return;

    const q = activeExam.questions[currentIndex];
    const total = activeExam.questions.length;

    // Progress
    const progText = document.getElementById('active-exam-progress');
    if (progText) progText.innerText = `Câu ${currentIndex + 1} / ${total}`;

    const flagBtn = document.getElementById('btn-exam-flag');
    if (flagBtn) {
      const isFlagged = flags.has(currentIndex);
      flagBtn.innerHTML = isFlagged ? '🚩 Đã cắm cờ' : '🏳️ Cắm cờ phân vân';
      flagBtn.classList.toggle('active', isFlagged);
    }

    const box = document.getElementById('exam-question-content');
    if (!box) return;

    // Images
    let imgHtml = '';
    if (q.images && q.images.length > 0) {
      imgHtml = `
        <div class="question-images">
          ${q.images.map(img => `
            <img src="${img}" alt="Schematic" class="q-img-thumb" 
                 onclick="LightboxEngine.open('${img}', '${q.id}: ${q.module || 'Sơ đồ'}')" 
                 onerror="handleImgError(this)">
          `).join('')}
        </div>
      `;
    }

    // Options
    const selected = answers[currentIndex];
    const optHtml = (q.options || []).map(opt => {
      const isSelected = selected === opt.key;
      return `
        <button class="option-btn ${isSelected ? 'selected' : ''}" onclick="ExamController.selectAnswer('${opt.key}')">
          <span class="opt-badge">${opt.key}</span>
          <span class="opt-text">${TextEngine.format(opt.text)}</span>
        </button>
      `;
    }).join('');

    box.innerHTML = `
      <div class="question-meta-tags" style="margin-bottom: 12px;">
        <span class="tag tag-id">Câu #${currentIndex + 1} (${q.id})</span>
        <span class="tag tag-subject">${q.subject || q.subject_code}</span>
        <span class="tag tag-diff-medium">${q.difficulty}</span>
      </div>

      <div class="question-title">${TextEngine.format(q.question)}</div>
      ${q.context ? `<div class="question-context">${TextEngine.format(q.context)}</div>` : ''}
      ${imgHtml}

      <div class="options-grid">
        ${optHtml}
      </div>
    `;
  },

  selectAnswer(key) {
    const { currentIndex } = AppState.exam;
    AppState.exam.answers[currentIndex] = key;
    AudioEngine.playTone(450, 0.05, 'sine', 0.08);
    this.renderActiveQuestion();
    this.renderPalette();
  },

  toggleFlag() {
    const { currentIndex, flags } = AppState.exam;
    if (flags.has(currentIndex)) {
      flags.delete(currentIndex);
    } else {
      flags.add(currentIndex);
    }
    this.renderActiveQuestion();
    this.renderPalette();
  },

  prevQuestion() {
    if (AppState.exam.currentIndex > 0) {
      AppState.exam.currentIndex -= 1;
      this.renderActiveQuestion();
      this.renderPalette();
    }
  },

  nextQuestion() {
    const total = AppState.exam.activeExam.questions.length;
    if (AppState.exam.currentIndex < total - 1) {
      AppState.exam.currentIndex += 1;
      this.renderActiveQuestion();
      this.renderPalette();
    }
  },

  jumpToQuestion(idx) {
    AppState.exam.currentIndex = idx;
    this.renderActiveQuestion();
    this.renderPalette();
    if (window.innerWidth <= 1024) {
      this.togglePaletteMobile(false);
    }
  },

  renderPalette() {
    const grid = document.getElementById('exam-palette-grid');
    if (!grid) return;

    const { activeExam, currentIndex, answers, flags } = AppState.exam;
    const questions = activeExam.questions || [];

    grid.innerHTML = questions.map((q, idx) => {
      let cls = 'palette-btn';
      if (idx === currentIndex) cls += ' current';
      else if (answers[idx]) cls += ' done';
      else cls += ' pending';

      if (flags.has(idx)) cls += ' flagged';

      return `<button class="${cls}" onclick="ExamController.jumpToQuestion(${idx})">${idx + 1}</button>`;
    }).join('');
  },

  togglePaletteMobile(forceOpen) {
    const palette = document.getElementById('exam-palette-sidebar');
    const closeBtn = document.getElementById('btn-close-palette-mobile');
    if (!palette) return;

    if (forceOpen !== undefined) {
      palette.classList.toggle('mobile-open', forceOpen);
    } else {
      palette.classList.toggle('mobile-open');
    }

    if (closeBtn) closeBtn.style.display = palette.classList.contains('mobile-open') ? 'block' : 'none';
  },

  confirmSubmit() {
    const { activeExam, answers } = AppState.exam;
    const total = activeExam.questions.length;
    const answeredCount = Object.keys(answers).length;
    const unanswered = total - answeredCount;

    let msg = `Bạn đã làm ${answeredCount} / ${total} câu.`;
    if (unanswered > 0) {
      msg += ` Còn ${unanswered} câu CHƯA LÀM!`;
    }
    msg += '\nBạn có chắc chắn muốn nộp bài thi ngay bây giờ?';

    if (confirm(msg)) {
      this.submitExam();
    }
  },

  submitExam() {
    clearInterval(AppState.exam.timerInterval);
    const { activeExam, answers, timeSpentSeconds } = AppState.exam;
    const questions = activeExam.questions || [];
    let correctCount = 0;

    const subjectBreakdown = {
      electric: { total: 0, correct: 0, name: 'Điện & Điện Tử' },
      plc: { total: 0, correct: 0, name: 'PLC Cơ Bản' },
      machine: { total: 0, correct: 0, name: 'Linh Kiện Máy' },
      pneumatics: { total: 0, correct: 0, name: 'Khí Nén Cơ Bản' }
    };

    questions.forEach((q, idx) => {
      const userAns = answers[idx];
      const isCorr = userAns === q.correct_answer;
      if (isCorr) correctCount += 1;

      // Record in central state for learning analytics
      if (userAns) {
        AppState.recordAnswer(q.id, userAns, isCorr);
      }

      // Breakdown
      const sub = q.subject_code || 'electric';
      if (subjectBreakdown[sub]) {
        subjectBreakdown[sub].total += 1;
        if (isCorr) subjectBreakdown[sub].correct += 1;
      }
    });

    const total = questions.length;
    const percent = Math.round((correctCount / total) * 100);
    const passed = percent >= 70;

    const result = {
      id: 'exam_' + Date.now(),
      title: activeExam.title,
      date: new Date().toLocaleString('vi-VN'),
      score: correctCount,
      total: total,
      percent: percent,
      passed: passed,
      timeSpent: timeSpentSeconds,
      breakdown: subjectBreakdown,
      answers: { ...answers }
    };

    AppState.exam.lastResult = result;
    AppState.exam.isSubmitted = true;
    AppState.history.unshift(result);
    AppState.saveStorage();

    // Sound
    if (passed) AudioEngine.playComplete();
    else AudioEngine.playWrong();

    this.renderResult(result);
  },

  renderResult(res) {
    document.getElementById('exam-active-view').style.display = 'none';
    document.getElementById('exam-result-view').style.display = 'block';

    const icon = document.getElementById('result-icon');
    const title = document.getElementById('result-exam-title');
    const scorePct = document.getElementById('result-score-percent');
    const scoreFraction = document.getElementById('result-score-fraction');
    const badge = document.getElementById('result-status-badge');

    if (icon) icon.innerText = res.passed ? '🎉' : '⚠️';
    if (title) title.innerText = res.title;
    if (scorePct) scorePct.innerText = `${res.percent}%`;

    const mins = Math.floor(res.timeSpent / 60);
    const secs = res.timeSpent % 60;
    if (scoreFraction) {
      scoreFraction.innerText = `${res.score} / ${res.total} câu đúng • Thời gian: ${mins} phút ${secs} giây`;
    }

    if (badge) {
      badge.className = `result-status-badge ${res.passed ? 'passed' : 'failed'}`;
      badge.innerText = res.passed ? '✓ ĐẠT CHUẨN WHITE STAR (≥ 70%)' : '✕ CHƯA ĐẠT CHUẨN WHITE STAR (< 70%)';
    }

    // Breakdown bars
    const box = document.getElementById('result-breakdown-box');
    if (box) {
      box.innerHTML = Object.values(res.breakdown).map(b => {
        const pct = b.total > 0 ? Math.round((b.correct / b.total) * 100) : 0;
        return `
          <div class="sub-breakdown-row">
            <span style="width: 140px; font-weight: 600;">${b.name}:</span>
            <div class="sub-breakdown-bar">
              <div class="sub-breakdown-fill" style="width: ${pct}%;"></div>
            </div>
            <span style="width: 80px; text-align: right; font-family: var(--font-mono); font-weight: 700;">${b.correct}/${b.total} (${pct}%)</span>
          </div>
        `;
      }).join('');
    }

    DashboardController.render();
  },

  restartSelection() {
    document.getElementById('exam-result-view').style.display = 'none';
    document.getElementById('exam-active-view').style.display = 'none';
    document.getElementById('exam-setup-view').style.display = 'block';
  },

  openReviewDetail() {
    const res = AppState.exam.lastResult;
    if (!res) return;
    UI.openExamReview(res);
  },

  filterReview(filterType, btn) {
    document.querySelectorAll('#modal-exam-review .btn-sm').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const res = AppState.exam.lastResult;
    if (!res) return;

    const stream = document.getElementById('review-questions-stream');
    const questions = AppState.exam.activeExam.questions || [];

    const filtered = questions.filter((q, idx) => {
      const userAns = res.answers[idx];
      const isCorrect = userAns === q.correct_answer;
      if (filterType === 'wrong') return !isCorrect;
      if (filterType === 'correct') return isCorrect;
      return true;
    });

    stream.innerHTML = filtered.map((q, i) => {
      // Find index in original
      const originalIdx = questions.findIndex(orig => orig.id === q.id);
      const userAns = res.answers[originalIdx];
      const isCorrect = userAns === q.correct_answer;

      return `
        <div class="question-card" style="border-left: 4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
          <div class="question-card-header">
            <span class="tag tag-id">#${originalIdx + 1} (${q.id})</span>
            <span class="tag ${isCorrect ? 'tag-diff-easy' : 'tag-diff-hard'}">${isCorrect ? '✓ Đúng' : '✕ Sai'}</span>
          </div>
          <div class="question-title">${TextEngine.format(q.question)}</div>

          <div style="margin: 12px 0;">
            <div style="font-size: 13px;">Đáp án bạn chọn: <strong style="color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">[${userAns || 'Chưa làm'}]</strong></div>
            <div style="font-size: 13px;">Đáp án chính xác: <strong style="color: var(--success);">[${q.correct_answer}]</strong></div>
          </div>

          ${q.explanation ? `
            <div style="background: var(--bg-surface); padding: 12px; border-radius: 8px; font-size: 13px; color: var(--text-secondary);">
              <strong>Giải thích:</strong> ${TextEngine.format(q.explanation.why_correct || q.explanation.overview || '')}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }
};

/* --- 11. CHEATSHEET CONTROLLER --- */
const CheatsheetController = {
  activeTab: 'electric',

  data: {
    electric: [
      {
        title: '⚡ Định luật Ohm & Mạch RLC Nối Tiếp',
        content: `
          <table class="cheat-table">
            <tr><th>Công thức</th><th>Ý nghĩa kỹ thuật</th></tr>
            <tr><td><code>I = U / R</code></td><td>Định luật Ohm cơ bản</td></tr>
            <tr><td><code>Z = √(R² + (X_L - X_C)²)</code></td><td>Tổng trở mạch RLC xoay chiều</td></tr>
            <tr><td><code>X_L = 2πfL = ωL</code></td><td>Cảm kháng cuộn cảm (Ω)</td></tr>
            <tr><td><code>X_C = 1 / (2πfC) = 1 / (ωC)</code></td><td>Dung kháng tụ điện (Ω)</td></tr>
            <tr><td><code>f_0 = 1 / (2π√(LC))</code></td><td>Tần số cộng hưởng (Resonance Frequency)</td></tr>
            <tr><td><code>P = U.I.cosφ</code></td><td>Công suất tác dụng mạch xoay chiều 1 pha</td></tr>
          </table>
        `
      },
      {
        title: '🔬 Linh Kiện Bán Dẫn (BJT, Diode, Op-Amp)',
        content: `
          <table class="cheat-table">
            <tr><th>Linh kiện</th><th>Đặc tính trọng tâm White Star</th></tr>
            <tr><td><strong>Diode Zener</strong></td><td>Phân cực ngược để ổn định điện áp chuẩn (Vz)</td></tr>
            <tr><td><strong>BJT NPN</strong></td><td>Dòng điện: <code>I_E = I_B + I_C</code>, Hệ số khuếch đại dòng: <code>β = I_C / I_B</code></td></tr>
            <tr><td><strong>SSR Relay</strong></td><td>Solid State Relay - đóng cắt không tiếp điểm bằng Optocoupler</td></tr>
            <tr><td><strong>Op-Amp Đảo</strong></td><td>Độ lợi: <code>Av = -R_f / R_in</code> (Đảo pha 180°)</td></tr>
            <tr><td><strong>Op-Amp Không Đảo</strong></td><td>Độ lợi: <code>Av = 1 + (R_f / R_in)</code> (Cùng pha)</td></tr>
          </table>
        `
      }
    ],

    plc: [
      {
        title: '💻 Bảng Thiết Bị PLC Mitsubishi (FX/Q Series Device)',
        content: `
          <table class="cheat-table">
            <tr><th>Ký hiệu</th><th>Tên thiết bị</th><th>Bản chất kỹ thuật</th></tr>
            <tr><td><strong>X</strong></td><td>Input</td><td>Ngõ vào số (Optocoupler cách ly quang từ cảm biến)</td></tr>
            <tr><td><strong>Y</strong></td><td>Output</td><td>Ngõ ra số (Relay / Transistor lái tải ngoài)</td></tr>
            <tr><td><strong>M</strong></td><td>Internal Relay</td><td>Rơ le phụ trợ nội bộ (Bit 0/1)</td></tr>
            <tr><td><strong>D</strong></td><td>Data Register</td><td>Thanh ghi dữ liệu 16-bit (-32,768 đến 32,767)</td></tr>
            <tr><td><strong>T</strong></td><td>Timer</td><td>Bộ định thời (Đếm thời gian trễ On/Off)</td></tr>
            <tr><td><strong>C</strong></td><td>Counter</td><td>Bộ đếm xung sự kiện</td></tr>
          </table>
        `
      },
      {
        title: '⚙️ Tập Lệnh Logic Ladder Phổ Biến',
        content: `
          <table class="cheat-table">
            <tr><th>Lệnh</th><th>Chức năng</th></tr>
            <tr><td><code>LD / LDI</code></td><td>Tiếp điểm Thường mở / Thường đóng</td></tr>
            <tr><td><code>OUT</code></td><td>Kích hoạt cuộn dây ngõ ra (Coil)</td></tr>
            <tr><td><code>SET / RST</code></td><td>Chốt tự giữ trạng thái / Hủy chốt</td></tr>
            <tr><td><code>PLS / PLF</code></td><td>Phát xung cạnh lên (Rising) / Cạnh xuống (Falling) trong 1 chu kỳ quét</td></tr>
            <tr><td><code>MC / MCR</code></td><td>Chủ điều khiển Master Control / Hủy điều khiển</td></tr>
          </table>
        `
      }
    ],

    pneumatics: [
      {
        title: '💨 Ký Hiệu Van Đảo Chiều & Cơ Cấu Khí Nén',
        content: `
          <table class="cheat-table">
            <tr><th>Ký hiệu van</th><th>Ứng dụng điển hình</th></tr>
            <tr><td><strong>Van 3/2</strong></td><td>Điều khiển xi lanh tác động đơn (1 ngõ vào, 1 ngõ ra, 1 xả)</td></tr>
            <tr><td><strong>Van 5/2</strong></td><td>Điều khiển xi lanh tác động kép (đẩy tiến / lùi độc lập)</td></tr>
            <tr><td><strong>Van 5/3</strong></td><td>Van 3 vị trí (Vị trí giữa đóng, xả hoặc cấp áp để dừng lơ lửng)</td></tr>
            <tr><td><strong>Bộ FRL</strong></td><td>Bộ ba khí nén: Lọc tách nước (Filter) + Điều áp (Regulator) + Bôi trơn (Lubricator)</td></tr>
            <tr><td><strong>Van tiết lưu một chiều</strong></td><td>Điều chỉnh vận tốc xi lanh (Meter-out / Meter-in)</td></tr>
          </table>
        `
      },
      {
        title: '📐 Công Thức Tính Lực Xi Lanh Khí Nén',
        content: `
          <table class="cheat-table">
            <tr><th>Trạng thái</th><th>Công thức tính lực (N)</th></tr>
            <tr><td><strong>Lực đẩy tiến:</strong></td><td><code>F_đẩy = P × A_piston = P × (π × D² / 4)</code></td></tr>
            <tr><td><strong>Lực kéo lùi:</strong></td><td><code>F_kéo = P × (A_piston - A_rod) = P × π × (D² - d²) / 4</code></td></tr>
            <tr><td><strong>Lưu ý áp suất:</strong></td><td><code>1 bar = 10⁵ Pa = 0.1 MPa ≈ 1.02 kgf/cm²</code></td></tr>
          </table>
        `
      }
    ],

    machine: [
      {
        title: '⚙️ Bộ Truyền Động & Ổ Lăn (Bearing)',
        content: `
          <table class="cheat-table">
            <tr><th>Khái niệm</th><th>Quy tắc kỹ thuật</th></tr>
            <tr><td><strong>Tỉ số truyền bánh răng:</strong></td><td><code>i = Z₂ / Z₁ = n₁ / n₂</code> (Z: số răng, n: tốc độ vòng/phút)</td></tr>
            <tr><td><strong>Ký hiệu ổ lăn 6204:</strong></td><td>Đường kính trong (d): <code>04 × 5 = 20 mm</code></td></tr>
            <tr><td><strong>Ký hiệu ổ lăn 6305:</strong></td><td>Đường kính trong (d): <code>05 × 5 = 25 mm</code> (Dòng 63: tải trọng trung bình)</td></tr>
            <tr><td><strong>Mối ghép Then (Key):</strong></td><td>Then bằng, then bán nguyệt truyền mô-men xoắn giữa trục và bánh răng</td></tr>
          </table>
        `
      },
      {
        title: '📏 Dung Sai Lắp Ghép Tiêu Chuẩn (Fits & Tolerances)',
        content: `
          <table class="cheat-table">
            <tr><th>Dạng lắp ghép</th><th>Ký hiệu chuẩn ISO / JIS</th></tr>
            <tr><td><strong>Lắp lỏng (Clearance fit):</strong></td><td><code>H7/g6</code>, <code>H7/f7</code> (Các chi tiết trượt hoặc quay tương đối)</td></tr>
            <tr><td><strong>Lắp trung gian (Transition fit):</strong></td><td><code>H7/k6</code>, <code>H7/m6</code> (Định vị chính xác, cần búa cao su hoặc ép nhẹ)</td></tr>
            <tr><td><strong>Lắp chặt (Interference fit):</strong></td><td><code>H7/p6</code>, <code>H7/s6</code> (Không dịch chuyển, cần ép thủy lực hoặc gia nhiệt)</td></tr>
          </table>
        `
      }
    ]
  },

  switchTab(subKey, btn) {
    this.activeTab = subKey;
    document.querySelectorAll('.cheatsheet-tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const container = document.getElementById('cheatsheet-content');
    if (!container) return;

    const cards = this.data[subKey] || [];
    container.innerHTML = cards.map(c => `
      <div class="cheat-card">
        <h4>${c.title}</h4>
        ${c.content}
      </div>
    `).join('');
  }
};

/* --- 12. GALLERY CONTROLLER --- */
const GalleryController = {
  currentFilter: 'all',

  filter(subKey, btn) {
    this.currentFilter = subKey;
    document.querySelectorAll('.gallery-chip').forEach(c => c.classList.remove('active'));
    if (btn) btn.classList.add('active');
    this.render();
  },

  render() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    // Collect all images from master questions
    const imgList = [];
    AppState.masterQuestions.forEach(q => {
      if (q.images && q.images.length > 0) {
        if (this.currentFilter === 'all' || q.subject_code === this.currentFilter) {
          q.images.forEach(img => {
            imgList.push({
              src: img,
              qId: q.id,
              subject: q.subject || q.subject_code,
              module: q.module || 'Sơ đồ'
            });
          });
        }
      }
    });

    if (imgList.length === 0) {
      grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">Không có hình ảnh nào cho phân loại này.</div>';
      return;
    }

    grid.innerHTML = imgList.map(item => `
      <div class="gallery-item-card" onclick="LightboxEngine.open('${item.src}', '${item.qId}: ${item.module}')">
        <div class="gallery-img-box">
          <img src="${item.src}" alt="${item.qId}" onerror="handleImgError(this)" loading="lazy">
        </div>
        <div class="gallery-item-info">
          <strong>${item.qId}: ${item.module}</strong>
          <span>${item.subject}</span>
        </div>
      </div>
    `).join('');
  }
};

/* --- 13. HISTORY CONTROLLER --- */
const HistoryController = {
  render() {
    const total = AppState.history.length;
    const countEl = document.getElementById('hist-total-attempts');
    if (countEl) countEl.innerText = total;

    if (total === 0) {
      const bestEl = document.getElementById('hist-best-score');
      const avgEl = document.getElementById('hist-avg-score');
      const passEl = document.getElementById('hist-pass-rate');
      if (bestEl) bestEl.innerText = '--%';
      if (avgEl) avgEl.innerText = '--%';
      if (passEl) passEl.innerText = '--%';

      const tbody = document.getElementById('history-table-body');
      if (tbody) tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px;">Chưa có lượt thi thử nào được thực hiện.</td></tr>';
      return;
    }

    const scores = AppState.history.map(h => h.percent);
    const best = Math.max(...scores);
    const avg = Math.round(scores.reduce((a, b) => a + b, 0) / total);
    const passedCount = AppState.history.filter(h => h.passed).length;
    const passRate = Math.round((passedCount / total) * 100);

    const bestEl = document.getElementById('hist-best-score');
    const avgEl = document.getElementById('hist-avg-score');
    const passEl = document.getElementById('hist-pass-rate');
    if (bestEl) bestEl.innerText = `${best}%`;
    if (avgEl) avgEl.innerText = `${avg}%`;
    if (passEl) passEl.innerText = `${passRate}%`;

    // Table rows
    const tbody = document.getElementById('history-table-body');
    if (tbody) {
      tbody.innerHTML = AppState.history.map((h, i) => {
        const mins = Math.floor(h.timeSpent / 60);
        const secs = h.timeSpent % 60;
        return `
          <tr>
            <td>${i + 1}</td>
            <td><strong>${h.title}</strong></td>
            <td>${h.date}</td>
            <td>${mins}m ${secs}s</td>
            <td><strong style="color: ${h.passed ? 'var(--success)' : 'var(--danger)'};">${h.score}/${h.total} (${h.percent}%)</strong></td>
            <td><span class="tag ${h.passed ? 'tag-diff-easy' : 'tag-diff-hard'}">${h.passed ? 'ĐẠT' : 'CHƯA ĐẠT'}</span></td>
            <td>
              <button class="btn btn-sm btn-outline" onclick="HistoryController.viewDetail('${h.id}')">Xem lại</button>
              <button class="btn btn-sm btn-danger-outline" onclick="HistoryController.deleteItem('${h.id}')">Xóa</button>
            </td>
          </tr>
        `;
      }).join('');
    }
  },

  viewDetail(historyId) {
    const item = AppState.history.find(h => h.id === historyId);
    if (!item) return;
    AppState.exam.lastResult = item;
    AppState.exam.activeExam = { questions: AppState.masterQuestions };
    UI.openExamReview(item);
  },

  deleteItem(historyId) {
    if (confirm('Bạn có chắc muốn xóa bản ghi kết quả này?')) {
      AppState.history = AppState.history.filter(h => h.id !== historyId);
      AppState.saveStorage();
      this.render();
    }
  },

  clearHistory() {
    if (confirm('CẢNH BÁO: Toàn bộ lịch sử các bài thi sẽ bị xóa. Bạn có chắc không?')) {
      AppState.history = [];
      AppState.saveStorage();
      this.render();
    }
  }
};

/* --- 14. UI COORDINATOR --- */
const UI = {
  init() {
    this.applyTheme(AppState.theme);
    this.updateUserProfileDisplay();
    this.updateBadges();

    // Check query params for tab
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam) {
      this.switchTab(tabParam);
    } else {
      this.switchTab('dashboard');
    }

    // Audio status
    const audioBtn = document.getElementById('btn-audio-toggle');
    if (audioBtn) {
      audioBtn.innerHTML = AppState.soundEnabled ? '🔊' : '🔇';
      audioBtn.classList.toggle('active', AppState.soundEnabled);
    }

    // Close popovers on click outside
    document.addEventListener('click', (e) => {
      const themeWrapper = document.getElementById('theme-menu-wrapper');
      if (themeWrapper && !themeWrapper.contains(e.target)) {
        themeWrapper.classList.remove('open');
      }
    });

    // Keyboard shortcuts
    this.initKeyboardShortcuts();
  },

  switchTab(tabId) {
    AppState.currentTab = tabId;

    // Sidebar active item
    document.querySelectorAll('.sidebar .nav-item').forEach(btn => {
      btn.classList.remove('active');
    });
    const sideBtn = document.getElementById(`nav-${tabId}`);
    if (sideBtn) sideBtn.classList.add('active');

    // Bottom nav active item
    document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(btn => {
      btn.classList.remove('active');
    });
    const bottomBtn = document.getElementById(`b-nav-${tabId}`);
    if (bottomBtn) bottomBtn.classList.add('active');

    // Show active tab view
    document.querySelectorAll('.tab-view').forEach(view => {
      view.classList.remove('active');
    });
    const targetView = document.getElementById(`view-${tabId}`);
    if (targetView) targetView.classList.add('active');

    // Update Breadcrumb
    const bTitle = document.getElementById('breadcrumb-title');
    const titles = {
      dashboard: 'Tổng quan kho đề',
      practice: 'Luyện tập đa chiều',
      flashcards: 'Flashcard ghi nhớ',
      mistakes: 'Sổ tay câu sai',
      exam: 'Thi thử White Star',
      cheatsheet: 'Sổ tay công thức',
      gallery: 'Kho sơ đồ kỹ thuật',
      history: 'Lịch sử & Sao lưu'
    };
    if (bTitle) bTitle.innerText = titles[tabId] || tabId;

    // Trigger tab-specific initialization
    if (tabId === 'dashboard') DashboardController.render();
    else if (tabId === 'practice') PracticeController.init();
    else if (tabId === 'flashcards') FlashcardController.init();
    else if (tabId === 'mistakes') MistakesController.render();
    else if (tabId === 'cheatsheet') CheatsheetController.switchTab('electric');
    else if (tabId === 'gallery') GalleryController.render();
    else if (tabId === 'history') HistoryController.render();

    this.closeSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const bd = document.getElementById('sidebar-backdrop');
    if (sb) sb.classList.toggle('mobile-open');
    if (bd) bd.style.display = sb && sb.classList.contains('mobile-open') ? 'block' : 'none';
  },

  closeSidebar() {
    const sb = document.getElementById('sidebar');
    const bd = document.getElementById('sidebar-backdrop');
    if (sb) sb.classList.remove('mobile-open');
    if (bd) bd.style.display = 'none';
  },

  toggleThemeDropdown() {
    const wrapper = document.getElementById('theme-menu-wrapper');
    if (wrapper) wrapper.classList.toggle('open');
  },

  selectTheme(themeKey) {
    this.applyTheme(themeKey);
    const wrapper = document.getElementById('theme-menu-wrapper');
    if (wrapper) wrapper.classList.remove('open');
  },

  applyTheme(themeKey) {
    AppState.theme = themeKey;
    document.body.className = `theme-${themeKey}`;

    const icons = {
      midnight: '🌌',
      cyber: '🔮',
      emerald: '🌲',
      light: '☀️'
    };
    const names = {
      midnight: 'Midnight',
      cyber: 'Cyber Neon',
      emerald: 'Emerald',
      light: 'Clean Day'
    };

    const curIcon = document.getElementById('current-theme-icon');
    const curName = document.getElementById('current-theme-name');
    if (curIcon) curIcon.innerText = icons[themeKey] || '🌌';
    if (curName) curName.innerText = names[themeKey] || 'Theme';

    AppState.saveStorage();
  },

  updateUserProfileDisplay() {
    const u = AppState.currentUser;
    const aEl = document.getElementById('topbar-avatar');
    const nEl = document.getElementById('topbar-user-name');
    const cEl = document.getElementById('topbar-user-code');

    if (aEl) aEl.innerText = u.avatar || '👨‍💻';
    if (nEl) nEl.innerText = u.name || 'Kỹ thuật viên WS';
    if (cEl) cEl.innerText = u.code || 'WS-2026-001';
  },

  updateBadges() {
    const mistakesBadge = document.getElementById('nav-badge-mistakes');
    if (mistakesBadge) {
      mistakesBadge.innerText = AppState.mistakes.size;
    }

    const practiceBadge = document.getElementById('nav-badge-practice');
    if (practiceBadge) {
      practiceBadge.innerText = AppState.masterQuestions.length;
    }
  },

  openUserProfileModal() {
    const modal = document.getElementById('modal-user-profile');
    if (!modal) return;

    const u = AppState.currentUser;
    const nameInput = document.getElementById('prof-name');
    const codeInput = document.getElementById('prof-code');
    const deptInput = document.getElementById('prof-dept');

    if (nameInput) nameInput.value = u.name;
    if (codeInput) codeInput.value = u.code;
    if (deptInput) deptInput.value = u.dept || '';

    // Render avatar choices
    const avatars = ['👨‍💻', '👩‍🔧', '🧑‍🏭', '🧑‍🔬', '⚡', '💻', '⚙️', '💨', '🚀', '⭐'];
    const grid = document.getElementById('avatar-picker-grid');
    if (grid) {
      grid.innerHTML = avatars.map(av => `
        <button type="button" class="btn btn-sm btn-outline ${av === u.avatar ? 'active' : ''}" 
                onclick="UI.pickAvatar('${av}', this)" style="font-size: 20px; padding: 6px 12px;">
          ${av}
        </button>
      `).join('');
    }

    modal.classList.add('open');
  },

  closeUserProfileModal() {
    const modal = document.getElementById('modal-user-profile');
    if (modal) modal.classList.remove('open');
  },

  pickAvatar(emoji, btn) {
    document.querySelectorAll('#avatar-picker-grid button').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    AppState.currentUser.avatar = emoji;
  },

  saveUserProfile(e) {
    e.preventDefault();
    const nameVal = document.getElementById('prof-name').value.trim();
    const codeVal = document.getElementById('prof-code').value.trim();
    const deptVal = document.getElementById('prof-dept').value.trim();

    if (nameVal) AppState.currentUser.name = nameVal;
    if (codeVal) AppState.currentUser.code = codeVal;
    AppState.currentUser.dept = deptVal;

    AppState.saveStorage();
    this.updateUserProfileDisplay();
    this.closeUserProfileModal();
    alert('✅ Đã lưu thông tin hồ sơ thí sinh!');
  },

  openShortcutsModal() {
    const modal = document.getElementById('modal-shortcuts');
    if (modal) modal.classList.add('open');
  },

  closeShortcutsModal() {
    const modal = document.getElementById('modal-shortcuts');
    if (modal) modal.classList.remove('open');
  },

  openExamReview(res) {
    const modal = document.getElementById('modal-exam-review');
    if (!modal) return;

    const titleEl = document.getElementById('review-exam-title');
    const metaEl = document.getElementById('review-exam-meta');
    const scoreEl = document.getElementById('review-exam-score');

    if (titleEl) titleEl.innerText = res.title;
    if (metaEl) metaEl.innerText = `Ngày thi: ${res.date} • Thời gian làm bài: ${Math.floor(res.timeSpent / 60)} phút`;
    if (scoreEl) scoreEl.innerText = `${res.percent}% (${res.score}/${res.total} câu)`;

    ExamController.filterReview('all');
    modal.classList.add('open');
  },

  closeExamReview() {
    const modal = document.getElementById('modal-exam-review');
    if (modal) modal.classList.remove('open');
  },

  toggleAccordion(elemId) {
    const el = document.getElementById(elemId);
    if (!el) return;
    el.style.display = el.style.display === 'none' ? 'flex' : 'none';
  },

  initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Ignore if focus is in an input
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const key = e.key.toUpperCase();

      // Exam Mode Shortcuts
      if (AppState.currentTab === 'exam' && AppState.exam.activeExam && !AppState.exam.isSubmitted) {
        if (['1', '2', '3', '4'].includes(key)) {
          const optMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
          ExamController.selectAnswer(optMap[key]);
        } else if (['A', 'B', 'C', 'D'].includes(key)) {
          ExamController.selectAnswer(key);
        } else if (key === 'ARROWLEFT') {
          ExamController.prevQuestion();
        } else if (key === 'ARROWRIGHT' || key === 'ENTER') {
          ExamController.nextQuestion();
        } else if (key === 'F') {
          ExamController.toggleFlag();
        }
      }

      // Flashcards Shortcuts
      if (AppState.currentTab === 'flashcards') {
        if (e.code === 'Space') {
          e.preventDefault();
          FlashcardController.flipCard();
        } else if (key === 'ARROWLEFT') {
          FlashcardController.prevCard();
        } else if (key === 'ARROWRIGHT') {
          FlashcardController.nextCard();
        } else if (key === '1') {
          FlashcardController.rateCard(1);
        } else if (key === '2') {
          FlashcardController.rateCard(2);
        } else if (key === '3') {
          FlashcardController.rateCard(3);
        }
      }

      // Help Shortcut
      if (key === '?') {
        UI.openShortcutsModal();
      }
    });
  }
};

/* --- 15. BOOTSTRAP APPLICATION --- */
document.addEventListener('DOMContentLoaded', () => {
  AudioEngine.init();
  AppState.init();
  UI.init();
});
