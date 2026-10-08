// =============================================================================
// WHITE STAR QUIZ PRO - JAVASCRIPT APPLICATION CORE (VERSION 2.5)
// =============================================================================

const APP_STATE = {
  currentTab: 'dashboard',
  isDarkTheme: true,
  summary: null,
  masterQuestions: [],
  mockExams: [],
  
  // User Profile
  currentUser: {
    id: 'u_default',
    name: 'Kỹ thuật viên WS',
    code: 'WS-2026-001',
    dept: 'Kỹ thuật sản xuất',
    avatar: '👨‍💻'
  },
  userHistory: [],
  userBookmarks: [], // list of question IDs
  userAnswersRecord: {}, // qId -> { isCorrect: boolean, selectedKey: string, timestamp: number }

  // Practice state
  practiceFiltered: [],
  practicePage: 1,
  practicePageSize: 10,
  selectedAvatarTemp: '👨‍💻',
  
  // Exam state
  selectedExamPreset: 'EXAM_TEST_01',
  activeExam: null,
  examCurrentIndex: 0,
  examAnswers: {}, // index -> key
  examTimerInterval: null,
  examSecondsRemaining: 3600,
  examTimeSpentSeconds: 0,
  examIsSubmitted: false,
  examConfig: {
    shuffleOptions: true,
    shuffleQuestions: false,
    enableTimer: true
  }
};

// Document Ready
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  initUserProfile();
  await loadApplicationData();
  initDashboard();
  initSchematicGallery();
  initPracticeModuleDropdown();
  renderHistoryDashboard();
  switchTab('dashboard');

  // Click outside to close theme popover
  document.addEventListener('click', (e) => {
    const wrapper = document.getElementById('theme-menu-wrapper');
    if (wrapper && !wrapper.contains(e.target)) {
      wrapper.classList.remove('open');
    }
  });
});

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

// =============================================================================
// DATA FETCHING & INITIALIZATION (SUPPORTS OFFLINE FILE:// & HTTP SERVER)
// =============================================================================
async function loadApplicationData() {
  try {
    // 1. Prefer preloaded JS bundles if available (works offline with 0 server/CORS errors)
    if (window.APP_DATA_MASTER && window.APP_DATA_EXAMS) {
      APP_STATE.summary = window.APP_DATA_SUMMARY || {};
      APP_STATE.masterQuestions = window.APP_DATA_MASTER;
      APP_STATE.mockExams = window.APP_DATA_EXAMS;
    } else {
      // 2. Fallback to standard fetch when hosted on web server or GitHub Pages
      const [summaryRes, masterRes, examsRes] = await Promise.all([
        fetch('data/summary.json'),
        fetch('data/questions_master.json'),
        fetch('data/mock_exams.json')
      ]);

      APP_STATE.summary = await summaryRes.json();
      APP_STATE.masterQuestions = await masterRes.json();
      APP_STATE.mockExams = await examsRes.json();
    }

    // Ensure all questions have question_type, topic_tag, and explanation
    APP_STATE.masterQuestions.forEach(q => ensureQuestionEnriched(q));

    // Update badges
    const badge = document.getElementById('badge-count');
    if (badge) badge.innerText = `${APP_STATE.masterQuestions.length} Master Qs`;
    
    updatePracticeStatCounters();
  } catch (error) {
    console.warn('Network fetch error, attempting offline bundle fallback:', error);
    if (window.APP_DATA_MASTER) {
      APP_STATE.summary = window.APP_DATA_SUMMARY || {};
      APP_STATE.masterQuestions = window.APP_DATA_MASTER;
      APP_STATE.mockExams = window.APP_DATA_EXAMS || { exams: [] };
      APP_STATE.masterQuestions.forEach(q => ensureQuestionEnriched(q));
      updatePracticeStatCounters();
    } else {
      console.error('Fatal: Unable to load question data via fetch or offline bundles.', error);
    }
  }
}

// Fallback dynamic enrichment helper
function ensureQuestionEnriched(q) {
  if (!q.question_type) {
    const text = (q.question || '').toLowerCase();
    const imgs = q.images || [];
    if (imgs.length > 0 || /ký hiệu|kí hiệu|sơ đồ|hình|time chart|đồ thị|sóng/.test(text)) {
      q.question_type = 'schema';
    } else if (/bao nhiêu|tính|giá trị|tần số|chu kỳ|1005|1003|1km|vrms|vin/.test(text)) {
      q.question_type = 'calculation';
    } else if (/sự cố|lỗi|khắc phục|bảo trì|lắp đặt|thước|bôi trơn|chống bụi/.test(text)) {
      q.question_type = 'application';
    } else {
      q.question_type = 'theory';
    }
  }

  if (!q.topic_tag) {
    q.topic_tag = q.module ? q.module.split('.').pop().trim() : 'Kiến thức cốt lõi';
  }

  if (!q.explanation) {
    const ansKey = (q.correct_answer || 'A').toUpperCase();
    const correctOpt = (q.options || []).find(o => o.key === ansKey);
    const optText = correctOpt ? correctOpt.text : '';
    q.explanation = {
      overview: `Câu hỏi kiểm tra kiến thức về chuyên đề **${q.topic_tag}** (${q.subject}). Đáp án chuẩn là **${ansKey}**.`,
      correct_answer: ansKey,
      correct_text: optText,
      why_correct: `Đáp án ${ansKey} ("${optText}") thể hiện chính xác nguyên lý kỹ thuật của ${q.topic_tag || 'chuyên đề'}.`,
      why_wrong: `Các phương án còn lại đưa ra thông số hoặc bản chất cơ điện không phù hợp với yêu cầu của câu hỏi.`,
      supplementary_knowledge: `💡 **Kiến thức trọng tâm:** Nắm vững công thức tính và quy chuẩn vận hành liên quan đến ${q.topic_tag || 'chuyên đề'}.`
    };
  }
}

// =============================================================================
// NAVIGATION & TABS
// =============================================================================
function switchTab(tabId) {
  APP_STATE.currentTab = tabId;
  
  // Update sidebar active buttons
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`nav-${tabId}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Update mobile bottom nav active buttons
  document.querySelectorAll('.bottom-nav-item').forEach(btn => btn.classList.remove('active'));
  const activeBottomBtn = document.getElementById(`bottom-nav-${tabId}`);
  if (activeBottomBtn) activeBottomBtn.classList.add('active');

  // Auto-close mobile sidebar if open
  closeSidebar();

  // Show bottom nav unless taking an active exam
  const bottomNav = document.getElementById('mobile-bottom-nav');
  if (bottomNav) {
    const isExamActive = (tabId === 'exam' && document.getElementById('exam-active-view')?.style.display === 'block');
    bottomNav.style.display = isExamActive ? 'none' : '';
  }

  // Update views
  document.querySelectorAll('.tab-view').forEach(view => view.classList.remove('active'));
  const activeView = document.getElementById(`view-${tabId}`);
  if (activeView) activeView.classList.add('active');

  // Update Breadcrumb
  const breadcrumbMap = {
    dashboard: 'Hệ thống trắc nghiệm / Tổng quan kho đề',
    practice: 'Hệ thống trắc nghiệm / Luyện tập theo môn',
    exam: 'Hệ thống trắc nghiệm / Thi thử White Star',
    history: 'Hệ thống trắc nghiệm / Lịch sử & Thống kê kết quả thi',
    gallery: 'Hệ thống trắc nghiệm / Kho sơ đồ kỹ thuật'
  };
  const bc = document.getElementById('current-breadcrumb');
  if (bc) bc.innerText = breadcrumbMap[tabId] || 'White Star Quiz';

  // Trigger tab-specific setup
  if (tabId === 'practice') {
    applyPracticeFilters();
  } else if (tabId === 'history') {
    renderHistoryDashboard();
  }
}

// =============================================================================
// USER PROFILE MANAGEMENT
// =============================================================================
function initUserProfile() {
  const savedUser = localStorage.getItem('ws_quiz_user');
  if (savedUser) {
    try {
      APP_STATE.currentUser = JSON.parse(savedUser);
    } catch (e) {
      console.warn('Could not parse saved user profile');
    }
  }

  // Load history & bookmarks for this user
  loadUserHistoryAndBookmarks();
  updateUserProfileDisplay();
}

function loadUserHistoryAndBookmarks() {
  const uid = APP_STATE.currentUser.id || 'u_default';
  
  // History
  const savedHist = localStorage.getItem(`ws_quiz_history_${uid}`);
  if (savedHist) {
    try {
      APP_STATE.userHistory = JSON.parse(savedHist);
    } catch (e) {
      APP_STATE.userHistory = [];
    }
  } else {
    APP_STATE.userHistory = [];
  }

  // Bookmarks
  const savedBm = localStorage.getItem(`ws_quiz_bookmarks_${uid}`);
  if (savedBm) {
    try {
      APP_STATE.userBookmarks = JSON.parse(savedBm);
    } catch (e) {
      APP_STATE.userBookmarks = [];
    }
  } else {
    APP_STATE.userBookmarks = [];
  }

  // Answers record
  const savedAns = localStorage.getItem(`ws_quiz_answers_${uid}`);
  if (savedAns) {
    try {
      APP_STATE.userAnswersRecord = JSON.parse(savedAns);
    } catch (e) {
      APP_STATE.userAnswersRecord = {};
    }
  } else {
    APP_STATE.userAnswersRecord = {};
  }
}

function saveUserHistoryAndBookmarks() {
  const uid = APP_STATE.currentUser.id || 'u_default';
  localStorage.setItem(`ws_quiz_history_${uid}`, JSON.stringify(APP_STATE.userHistory));
  localStorage.setItem(`ws_quiz_bookmarks_${uid}`, JSON.stringify(APP_STATE.userBookmarks));
  localStorage.setItem(`ws_quiz_answers_${uid}`, JSON.stringify(APP_STATE.userAnswersRecord));
}

function updateUserProfileDisplay() {
  const user = APP_STATE.currentUser;
  setText('topbar-user-name', user.name);
  setText('topbar-user-code', user.code);
  const avatarTop = document.getElementById('topbar-user-avatar');
  if (avatarTop) avatarTop.innerText = user.avatar;

  // Exam setup banner
  setText('exam-setup-cand-name', user.name);
  setText('exam-setup-cand-meta', `Mã học viên: ${user.code} • ${user.dept || 'Kỹ thuật'}`);
  const candAv = document.getElementById('exam-setup-cand-avatar');
  if (candAv) candAv.innerText = user.avatar;

  // History hero display name
  setText('history-user-display-name', user.name);
}

function openUserProfileModal() {
  const user = APP_STATE.currentUser;
  const modal = document.getElementById('user-profile-modal');
  if (!modal) return;

  const nameInput = document.getElementById('prof-input-name');
  const codeInput = document.getElementById('prof-input-code');
  const deptInput = document.getElementById('prof-input-dept');

  if (nameInput) nameInput.value = user.name;
  if (codeInput) codeInput.value = user.code;
  if (deptInput) deptInput.value = user.dept || '';

  APP_STATE.selectedAvatarTemp = user.avatar || '👨‍💻';
  document.querySelectorAll('.avatar-opt').forEach(btn => {
    btn.classList.toggle('active', btn.innerText.trim() === APP_STATE.selectedAvatarTemp);
  });

  modal.classList.add('active');
}

function closeUserProfileModal() {
  const modal = document.getElementById('user-profile-modal');
  if (modal) modal.classList.remove('active');
}

function pickAvatar(emoji, btnElem) {
  APP_STATE.selectedAvatarTemp = emoji;
  document.querySelectorAll('.avatar-opt').forEach(btn => btn.classList.remove('active'));
  if (btnElem) btnElem.classList.add('active');
}

function saveUserProfile(e) {
  if (e) e.preventDefault();
  
  const name = document.getElementById('prof-input-name')?.value.trim() || 'Kỹ thuật viên WS';
  const code = document.getElementById('prof-input-code')?.value.trim() || 'WS-2026-001';
  const dept = document.getElementById('prof-input-dept')?.value.trim() || 'Kỹ thuật sản xuất';
  const avatar = APP_STATE.selectedAvatarTemp || '👨‍💻';

  APP_STATE.currentUser.name = name;
  APP_STATE.currentUser.code = code;
  APP_STATE.currentUser.dept = dept;
  APP_STATE.currentUser.avatar = avatar;

  localStorage.setItem('ws_quiz_user', JSON.stringify(APP_STATE.currentUser));
  updateUserProfileDisplay();
  closeUserProfileModal();
  renderHistoryDashboard();
}

// =============================================================================
// BOOKMARK SYSTEM
// =============================================================================
function toggleBookmark(qId) {
  const idx = APP_STATE.userBookmarks.indexOf(qId);
  if (idx > -1) {
    APP_STATE.userBookmarks.splice(idx, 1);
  } else {
    APP_STATE.userBookmarks.push(qId);
  }
  saveUserHistoryAndBookmarks();
  updatePracticeStatCounters();

  // Update button in place if visible
  const btn = document.getElementById(`btn-bm-${qId}`);
  if (btn) {
    const isBookmarked = APP_STATE.userBookmarks.includes(qId);
    btn.classList.toggle('bookmarked', isBookmarked);
    btn.innerHTML = isBookmarked ? '⭐' : '☆';
  }
}

function updatePracticeStatCounters() {
  const wrongCount = Object.values(APP_STATE.userAnswersRecord).filter(r => r.isCorrect === false).length;
  const bmCount = APP_STATE.userBookmarks.length;

  setText('count-wrong-stat', wrongCount);
  setText('count-bm-stat', bmCount);
}

// =============================================================================
// THEME MANAGEMENT (MIDNIGHT / CYBER / EMERALD / LIGHT)
// =============================================================================
const THEMES = {
  midnight: { name: 'Midnight', icon: '🌌', className: 'dark-theme' },
  cyber:    { name: 'Cyber',    icon: '🔮', className: 'theme-cyber' },
  emerald:  { name: 'Emerald',  icon: '🌲', className: 'theme-emerald' },
  light:    { name: 'Clean Day',icon: '☀️', className: 'theme-light' }
};

function initTheme() {
  const savedTheme = localStorage.getItem('ws_quiz_theme') || 'midnight';
  applyTheme(savedTheme, false);
}

function applyTheme(themeKey, save = true) {
  const theme = THEMES[themeKey] || THEMES.midnight;
  document.body.className = theme.className;

  setText('current-theme-name', theme.name);
  setText('current-theme-icon', theme.icon);

  document.querySelectorAll('.theme-option').forEach(opt => {
    opt.classList.toggle('active', opt.id === `theme-opt-${themeKey}`);
  });

  const sidebarIcon = document.getElementById('theme-icon');
  const sidebarLabel = document.getElementById('theme-label');
  if (sidebarIcon && sidebarLabel) {
    if (themeKey === 'light') {
      sidebarIcon.innerText = '☀️';
      sidebarLabel.innerText = 'Giao diện Sáng';
    } else {
      sidebarIcon.innerText = '🌙';
      sidebarLabel.innerText = 'Giao diện Tối';
    }
  }

  if (save) {
    localStorage.setItem('ws_quiz_theme', themeKey);
  }
}

function toggleThemeDropdown() {
  const wrapper = document.getElementById('theme-menu-wrapper');
  if (wrapper) wrapper.classList.toggle('open');
}

function selectTheme(themeKey) {
  applyTheme(themeKey, true);
  const wrapper = document.getElementById('theme-menu-wrapper');
  if (wrapper) wrapper.classList.remove('open');
}

function toggleTheme() {
  const current = localStorage.getItem('ws_quiz_theme') || 'midnight';
  const next = current === 'light' ? 'midnight' : 'light';
  applyTheme(next, true);
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) {
    sidebar.classList.toggle('open');
    if (backdrop) backdrop.classList.toggle('active', sidebar.classList.contains('open'));
  }
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) sidebar.classList.remove('open');
  if (backdrop) backdrop.classList.remove('active');
}

function toggleExamPalette() {
  const palette = document.getElementById('exam-palette-sidebar');
  const backdrop = document.getElementById('palette-backdrop');
  if (palette) {
    palette.classList.toggle('mobile-open');
    if (backdrop) backdrop.classList.toggle('active', palette.classList.contains('mobile-open'));
  }
}

function closeExamPalette() {
  const palette = document.getElementById('exam-palette-sidebar');
  const backdrop = document.getElementById('palette-backdrop');
  if (palette) palette.classList.remove('mobile-open');
  if (backdrop) backdrop.classList.remove('active');
}

function navigateExamPrev() {
  if (APP_STATE.activeExam && APP_STATE.examCurrentIndex > 0) {
    jumpToExamQuestion(APP_STATE.examCurrentIndex - 1);
  }
}

function navigateExamNext() {
  if (!APP_STATE.activeExam) return;
  if (APP_STATE.examCurrentIndex < APP_STATE.activeExam.questions.length - 1) {
    jumpToExamQuestion(APP_STATE.examCurrentIndex + 1);
  } else {
    confirmSubmitExam();
  }
}

// =============================================================================
// VIEW 1: DASHBOARD
// =============================================================================
function initDashboard() {
  if (!APP_STATE.summary) return;

  setText('val-master-count', APP_STATE.summary.master_question_bank?.total_questions || 398);
  setText('val-review-count', APP_STATE.summary.review_slides_bank?.total_extracted || 486);
  setText('val-exams-count', APP_STATE.summary.mock_exams?.count || 5);
  setText('val-images-count', APP_STATE.summary.diagram_images?.total_files || 213);

  const bySub = APP_STATE.summary.master_question_bank?.by_subject || {};
  setText('count-electric', `${bySub['Điện - Điện tử cơ bản'] || 99} câu hỏi`);
  setText('count-plc', `${bySub['PLC cơ bản'] || 99} câu hỏi`);
  setText('count-machine', `${bySub['Linh kiện máy cơ bản'] || 100} câu hỏi`);
  setText('count-pneumatics', `${bySub['Khí nén cơ bản'] || 100} câu hỏi`);
}

function startQuickPractice() {
  switchTab('practice');
}

function startQuickExam() {
  switchTab('exam');
}

function startSubjectPractice(subjectCode) {
  const sel = document.getElementById('practice-subject-select');
  if (sel) sel.value = subjectCode;
  onSubjectFilterChange();
  switchTab('practice');
}

// =============================================================================
// VIEW 2: PRACTICE MODE WITH ADVANCED CLASSIFICATION & SHUFFLE
// =============================================================================
function initPracticeModuleDropdown() {
  onSubjectFilterChange(false);
}

function onSubjectFilterChange(triggerFilter = true) {
  const subSelect = document.getElementById('practice-subject-select');
  const modSelect = document.getElementById('practice-module-select');
  if (!subSelect || !modSelect) return;

  const subVal = subSelect.value;
  let availableModules = new Set();

  APP_STATE.masterQuestions.forEach(q => {
    if (subVal === 'all' || q.subject_code === subVal) {
      if (q.module) availableModules.add(q.module.trim());
    }
  });

  const sortedModules = Array.from(availableModules).sort();
  modSelect.innerHTML = `<option value="all">Tất cả chuyên đề (${sortedModules.length})</option>` +
    sortedModules.map(m => `<option value="${escapeHtml(m)}">${escapeHtml(m)}</option>`).join('');

  if (triggerFilter) {
    applyPracticeFilters();
  }
}

function applyPracticeFilters() {
  const sub = document.getElementById('practice-subject-select')?.value || 'all';
  const mod = document.getElementById('practice-module-select')?.value || 'all';
  const qType = document.getElementById('practice-type-select')?.value || 'all';
  const diff = document.getElementById('practice-diff-select')?.value || 'all';
  const status = document.getElementById('practice-status-select')?.value || 'all';
  const query = (document.getElementById('practice-search-input')?.value || '').trim().toLowerCase();

  // Filter questions
  APP_STATE.practiceFiltered = APP_STATE.masterQuestions.filter(q => {
    // Subject filter
    if (sub !== 'all' && q.subject_code !== sub) return false;

    // Module filter
    if (mod !== 'all' && q.module !== mod) return false;

    // Question type filter
    if (qType !== 'all' && q.question_type !== qType) return false;

    // Difficulty filter
    if (diff !== 'all' && q.difficulty !== diff) return false;

    // Practice status filter
    if (status !== 'all') {
      const rec = APP_STATE.userAnswersRecord[q.id];
      if (status === 'unanswered' && rec) return false;
      if (status === 'correct' && (!rec || rec.isCorrect !== true)) return false;
      if (status === 'wrong' && (!rec || rec.isCorrect !== false)) return false;
      if (status === 'bookmarked' && !APP_STATE.userBookmarks.includes(q.id)) return false;
    }

    // Search query
    if (query) {
      const matchText = (q.question || '').toLowerCase();
      const matchId = (q.id || '').toLowerCase();
      const matchModule = (q.module || '').toLowerCase();
      const matchTag = (q.topic_tag || '').toLowerCase();
      const matchNote = (q.note || '').toLowerCase();
      if (!matchText.includes(query) && !matchId.includes(query) && !matchModule.includes(query) && !matchTag.includes(query) && !matchNote.includes(query)) {
        return false;
      }
    }

    return true;
  });

  // Update counters
  setText('filter-result-count', `Hiển thị ${APP_STATE.practiceFiltered.length} / ${APP_STATE.masterQuestions.length} câu hỏi`);
  updatePracticeStatCounters();

  APP_STATE.practicePage = 1;
  renderPracticeQuestions();
}

function resetPracticeFilters() {
  const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  setVal('practice-subject-select', 'all');
  setVal('practice-type-select', 'all');
  setVal('practice-diff-select', 'all');
  setVal('practice-status-select', 'all');
  setVal('practice-search-input', '');

  onSubjectFilterChange(false);
  applyPracticeFilters();
}

function clearPracticeSearch() {
  const searchInput = document.getElementById('practice-search-input');
  if (searchInput) searchInput.value = '';
  applyPracticeFilters();
}

function filterOnlyWrongQuestions() {
  const statSelect = document.getElementById('practice-status-select');
  if (statSelect) {
    statSelect.value = 'wrong';
    applyPracticeFilters();
  }
}

function filterOnlyBookmarked() {
  const statSelect = document.getElementById('practice-status-select');
  if (statSelect) {
    statSelect.value = 'bookmarked';
    applyPracticeFilters();
  }
}

// Option shuffling algorithm (Fisher-Yates) with accurate key remapping
function shuffleQuestionOptions(options, originalCorrectKey) {
  if (!options || options.length <= 1) {
    return { options: options || [], correct_answer: originalCorrectKey };
  }

  const target = options.find(o => o.key === originalCorrectKey);
  const targetText = target ? target.text : null;

  const shuffled = options.map(o => ({ ...o }));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const letters = ['A', 'B', 'C', 'D'];
  let newCorrectKey = originalCorrectKey;

  const remapped = shuffled.map((opt, idx) => {
    const newKey = letters[idx] || String.fromCharCode(65 + idx);
    if (targetText && opt.text === targetText) {
      newCorrectKey = newKey;
    } else if (!targetText && opt.key === originalCorrectKey) {
      newCorrectKey = newKey;
    }
    return {
      key: newKey,
      text: opt.text,
      original_key: opt.key
    };
  });

  return {
    options: remapped,
    correct_answer: newCorrectKey
  };
}

// Get question type badge info
function getQuestionTypeBadge(type) {
  const map = {
    schema: { icon: '📐', text: 'Đọc sơ đồ' },
    theory: { icon: '📖', text: 'Lý thuyết' },
    calculation: { icon: '🧮', text: 'Tính toán' },
    application: { icon: '🛠️', text: 'Ứng dụng & Lỗi' }
  };
  return map[type] || { icon: '📌', text: 'Kiến thức' };
}

function renderPracticeQuestions() {
  const container = document.getElementById('practice-question-stream');
  if (!container) return;

  const total = APP_STATE.practiceFiltered.length;
  const start = (APP_STATE.practicePage - 1) * APP_STATE.practicePageSize;
  const end = start + APP_STATE.practicePageSize;
  const pageItems = APP_STATE.practiceFiltered.slice(start, end);

  const totalPages = Math.ceil(total / APP_STATE.practicePageSize) || 1;
  setText('practice-page-info', `Trang ${APP_STATE.practicePage} / ${totalPages} (${total} câu)`);

  const prevBtn = document.getElementById('btn-prev-page');
  const nextBtn = document.getElementById('btn-next-page');
  if (prevBtn) prevBtn.disabled = APP_STATE.practicePage <= 1;
  if (nextBtn) nextBtn.disabled = APP_STATE.practicePage >= totalPages;

  if (pageItems.length === 0) {
    container.innerHTML = `
      <div class="q-card" style="text-align: center; color: var(--text-muted); padding: 40px;">
        <span style="font-size: 2.5rem; display: block; margin-bottom: 12px;">🔍</span>
        <h4>Không tìm thấy câu hỏi nào phù hợp với bộ lọc</h4>
        <p>Thử nới lỏng bộ lọc hoặc nhấn nút "Đặt lại bộ lọc" để xem toàn bộ 398 câu hỏi.</p>
        <button class="btn btn-primary" style="margin-top: 14px;" onclick="resetPracticeFilters()">Đặt lại bộ lọc</button>
      </div>`;
    return;
  }

  const isShuffle = document.getElementById('practice-shuffle-toggle')?.checked ?? false;

  container.innerHTML = pageItems.map((q, idx) => {
    const qIndexGlobal = start + idx + 1;
    const diffBadgeClass = q.difficulty === 'Dễ' ? 'badge-diff-de' : (q.difficulty === 'Khó' ? 'badge-diff-kho' : 'badge-diff-tb');
    const isBookmarked = APP_STATE.userBookmarks.includes(q.id);
    const prevAnswer = APP_STATE.userAnswersRecord[q.id];
    const typeInfo = getQuestionTypeBadge(q.question_type);

    // Media block
    const mediaHtml = (q.images && q.images.length > 0)
      ? `<div class="q-media-box">
          <div class="q-media-grid ${q.images.length > 1 ? 'multi' : ''}">
            ${q.images.map((img, i) => `
              <div class="q-media-item">
                <img class="q-media-img" src="${img}" alt="Sơ đồ minh họa ${i+1}" onerror="handleImgError(this)" onclick="openImageModal('${img}', '${escapeHtml(q.question)}')">
                ${q.images.length > 1 ? `<span class="q-media-label">Hình ${String.fromCharCode(65 + i)}</span>` : ''}
              </div>
            `).join('')}
          </div>
          <span class="q-media-hint"><i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / xem chi tiết</span>
         </div>`
      : '';

    // Handle options & shuffle
    let rawOptions = (q.options && q.options.length > 0) ? q.options : [
      { key: 'A', text: 'Đáp án A / Hình A (Xem sơ đồ minh họa)' },
      { key: 'B', text: 'Đáp án B / Hình B (Xem sơ đồ minh họa)' },
      { key: 'C', text: 'Đáp án C / Hình C (Xem sơ đồ minh họa)' },
      { key: 'D', text: 'Đáp án D / Hình D (Xem sơ đồ minh họa)' }
    ];

    let effectiveOptions = rawOptions;
    let effectiveCorrect = q.correct_answer;

    if (isShuffle) {
      const shuffledPack = shuffleQuestionOptions(rawOptions, q.correct_answer);
      effectiveOptions = shuffledPack.options;
      effectiveCorrect = shuffledPack.correct_answer;
    }

    const optionsHtml = effectiveOptions.map(opt => {
      let extraClass = '';
      if (prevAnswer) {
        if (opt.key === effectiveCorrect) extraClass = 'correct';
        else if (opt.key === prevAnswer.selectedKey) extraClass = 'wrong';
      }

      return `
        <button class="opt-btn ${extraClass}" id="opt-btn-${q.id}-${opt.key}" ${prevAnswer ? 'disabled' : ''} onclick="handlePracticeOptionClick('${q.id}', '${opt.key}', '${effectiveCorrect}')">
          <span class="opt-key">${opt.key}</span>
          <span class="opt-text">${escapeHtml(opt.text)}</span>
        </button>
      `;
    }).join('');

    // Detailed explanation block
    const expl = q.explanation || {};
    const explDisplay = prevAnswer ? 'block' : 'none';
    const statusText = prevAnswer ? (prevAnswer.isCorrect ? '✅ Bạn đã trả lời CHÍNH XÁC' : `❌ Bạn chọn đáp án ${prevAnswer.selectedKey} (Chưa chính xác)`) : '';
    const statusClass = prevAnswer ? (prevAnswer.isCorrect ? 'correct' : 'wrong') : '';

    return `
      <div class="q-card" id="q-card-${q.id}">
        <div class="q-card-header">
          <div class="q-badge-group">
            <span class="badge badge-subject">${q.subject}</span>
            <span class="badge ${diffBadgeClass}">${q.difficulty}</span>
            <span class="badge badge-type">${typeInfo.icon} ${typeInfo.text}</span>
            ${q.topic_tag ? `<span class="badge badge-topic">${escapeHtml(q.topic_tag)}</span>` : ''}
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" id="btn-bm-${q.id}" onclick="toggleBookmark('${q.id}')" title="Đánh dấu câu hỏi này">
              ${isBookmarked ? '⭐' : '☆'}
            </button>
            <span class="q-id">#${q.id} (Câu ${qIndexGlobal})</span>
          </div>
        </div>

        <div class="q-title">${escapeHtml(q.question)}</div>

        ${mediaHtml}

        <div class="q-options-list">
          ${optionsHtml}
        </div>

        <!-- Rich Detailed Explanation Box -->
        <div class="q-explanation-box" id="expl-box-${q.id}" style="display: ${explDisplay};">
          <div class="expl-header-bar">
            <span class="expl-status-tag ${statusClass}" id="expl-status-${q.id}">
              ${statusText}
            </span>
            <button class="expl-toggle-btn" onclick="toggleExplanationCollapse('${q.id}')">
              Thu gọn / Mở rộng
            </button>
          </div>
          
          <div class="expl-content-body" id="expl-body-${q.id}">
            <div class="expl-block why-correct">
              <h5><span class="icon">✓</span> Phân tích đáp án chuẩn (${effectiveCorrect}):</h5>
              <p>${expl.why_correct || ('Đáp án ' + effectiveCorrect + ' là phương án chính xác theo nguyên lý kỹ thuật.')}</p>
            </div>

            ${expl.why_wrong ? `
              <div class="expl-block why-wrong">
                <h5><span class="icon">⚠️</span> Phân tích phương án nhiễu & Bẫy thường gặp:</h5>
                <p>${expl.why_wrong}</p>
              </div>
            ` : ''}

            ${expl.supplementary_knowledge ? `
              <div class="expl-block supplementary">
                <h5><span class="icon">💡</span> Cẩm nang kỹ thuật & Kiến thức bổ trợ:</h5>
                <p>${expl.supplementary_knowledge}</p>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function handlePracticeOptionClick(qId, selectedKey, correctKey) {
  const isInstant = document.getElementById('instant-feedback-toggle')?.checked ?? true;
  const isCorrect = (selectedKey === correctKey);

  // Save record in userAnswersRecord
  APP_STATE.userAnswersRecord[qId] = {
    isCorrect: isCorrect,
    selectedKey: selectedKey,
    timestamp: Date.now()
  };
  saveUserHistoryAndBookmarks();
  updatePracticeStatCounters();

  const card = document.getElementById(`q-card-${qId}`);
  if (!card) return;

  const buttons = card.querySelectorAll('.opt-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    const key = btn.querySelector('.opt-key').innerText.trim();
    if (key === correctKey) {
      btn.classList.add('correct');
    } else if (key === selectedKey) {
      btn.classList.add('wrong');
    }
  });

  // Display rich explanation box
  const explBox = document.getElementById(`expl-box-${qId}`);
  const explStatus = document.getElementById(`expl-status-${qId}`);
  if (explBox && explStatus) {
    explStatus.className = `expl-status-tag ${isCorrect ? 'correct' : 'wrong'}`;
    explStatus.innerText = isCorrect 
      ? '✅ Bạn đã trả lời CHÍNH XÁC!' 
      : `❌ Bạn chọn đáp án ${selectedKey} (Chưa chính xác)`;
    
    if (isInstant) {
      explBox.style.display = 'block';
    }
  }
}

function toggleExplanationCollapse(qId) {
  const body = document.getElementById(`expl-body-${qId}`);
  if (body) {
    body.style.display = (body.style.display === 'none') ? 'flex' : 'none';
  }
}

function prevPracticePage() {
  if (APP_STATE.practicePage > 1) {
    APP_STATE.practicePage--;
    renderPracticeQuestions();
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }
}

function nextPracticePage() {
  const totalPages = Math.ceil(APP_STATE.practiceFiltered.length / APP_STATE.practicePageSize);
  if (APP_STATE.practicePage < totalPages) {
    APP_STATE.practicePage++;
    renderPracticeQuestions();
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }
}

// =============================================================================
// VIEW 3: EXAM MODE WITH SHUFFLE OPTIONS & TIMER
// =============================================================================
function selectExamPreset(presetId, elem) {
  APP_STATE.selectedExamPreset = presetId;
  document.querySelectorAll('.exam-item').forEach(item => item.classList.remove('active'));
  if (elem) elem.classList.add('active');
}

function startSelectedExam() {
  // Read config settings
  APP_STATE.examConfig.shuffleOptions = document.getElementById('exam-shuffle-options')?.checked ?? true;
  APP_STATE.examConfig.shuffleQuestions = document.getElementById('exam-shuffle-questions')?.checked ?? false;
  APP_STATE.examConfig.enableTimer = document.getElementById('exam-enable-timer')?.checked ?? true;

  const preset = APP_STATE.selectedExamPreset;

  if (preset === 'RANDOM_40') {
    APP_STATE.activeExam = generateRandomExam(40);
  } else {
    // Find preset in mockExams
    const found = APP_STATE.mockExams.find(e => e.id === preset);
    if (found) {
      // Deep clone exam questions to avoid modifying source data
      APP_STATE.activeExam = JSON.parse(JSON.stringify(found));
    } else {
      APP_STATE.activeExam = generateRandomExam(40);
    }
  }

  // Ensure all questions are enriched
  APP_STATE.activeExam.questions.forEach(q => ensureQuestionEnriched(q));

  // 1. Shuffle Questions if configured
  if (APP_STATE.examConfig.shuffleQuestions) {
    for (let i = APP_STATE.activeExam.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [APP_STATE.activeExam.questions[i], APP_STATE.activeExam.questions[j]] = [APP_STATE.activeExam.questions[j], APP_STATE.activeExam.questions[i]];
    }
  }

  // 2. Shuffle Options for each question if configured
  if (APP_STATE.examConfig.shuffleOptions) {
    APP_STATE.activeExam.questions.forEach(q => {
      const shuffledPack = shuffleQuestionOptions(q.options, q.correct_answer);
      q.options = shuffledPack.options;
      q.correct_answer = shuffledPack.correct_answer;
    });
  }

  // Reset exam state
  APP_STATE.examCurrentIndex = 0;
  APP_STATE.examAnswers = {};
  APP_STATE.examIsSubmitted = false;
  APP_STATE.examSecondsRemaining = (APP_STATE.activeExam.questions.length > 50) ? 3600 : 1800; // 60 min or 30 min
  APP_STATE.examTimeSpentSeconds = 0;

  // Switch to active exam view
  document.getElementById('exam-setup-view').style.display = 'none';
  document.getElementById('exam-result-view').style.display = 'none';
  document.getElementById('exam-active-view').style.display = 'block';

  // Hide mobile bottom nav during exam
  const bottomNav = document.getElementById('mobile-bottom-nav');
  if (bottomNav) bottomNav.style.display = 'none';

  setText('active-exam-title', APP_STATE.activeExam.title);
  buildExamPalette();
  renderExamQuestion(0);
  
  if (APP_STATE.examConfig.enableTimer) {
    startExamTimer();
  } else {
    setText('exam-timer-text', 'Không giới hạn');
  }
}

function generateRandomExam(totalCount = 40) {
  const perSubject = Math.floor(totalCount / 4);
  const subjects = ['electric', 'plc', 'machine', 'pneumatics'];
  let questions = [];

  subjects.forEach(sub => {
    const pool = APP_STATE.masterQuestions.filter(q => q.subject_code === sub);
    const shuffled = pool.sort(() => 0.5 - Math.random()).slice(0, perSubject);
    shuffled.forEach((q, idx) => {
      questions.push({
        id: `RAND_${sub.toUpperCase()}_${idx+1}`,
        section: q.subject,
        question_number: questions.length + 1,
        question: q.question,
        options: q.options,
        correct_answer: q.correct_answer,
        images: q.images,
        question_type: q.question_type,
        topic_tag: q.topic_tag,
        explanation: q.explanation
      });
    });
  });

  return {
    id: 'EXAM_RANDOM_40',
    title: 'Đề Thi Nhanh Ngẫu Nhiên White Star (40 câu)',
    total_questions: questions.length,
    questions: questions
  };
}

function buildExamPalette() {
  const palette = document.getElementById('exam-palette-grid');
  if (!palette || !APP_STATE.activeExam) return;

  palette.innerHTML = APP_STATE.activeExam.questions.map((q, idx) => {
    return `
      <button class="palette-btn" id="pal-btn-${idx}" onclick="jumpToExamQuestion(${idx})">
        ${idx + 1}
      </button>
    `;
  }).join('');
}

function renderExamQuestion(index) {
  const exam = APP_STATE.activeExam;
  if (!exam || !exam.questions[index]) return;

  APP_STATE.examCurrentIndex = index;
  const q = exam.questions[index];

  // Update header progress and mobile status counters
  const statusStr = `${index + 1} / ${exam.questions.length}`;
  setText('exam-progress-counter', `Câu ${statusStr}`);
  setText('exam-palette-status-count', `${index + 1}/${exam.questions.length}`);
  setText('exam-palette-status-count-b', `${index + 1}/${exam.questions.length}`);

  // Update mobile bottom controls state
  const prevMobBtn = document.getElementById('btn-exam-prev-mobile');
  const nextMobBtn = document.getElementById('btn-exam-next-mobile');
  if (prevMobBtn) prevMobBtn.disabled = (index === 0);
  if (nextMobBtn) {
    if (index === exam.questions.length - 1) {
      nextMobBtn.innerText = 'Nộp bài 🏁';
      nextMobBtn.className = 'btn btn-danger btn-sm';
    } else {
      nextMobBtn.innerText = 'Tiếp →';
      nextMobBtn.className = 'btn btn-primary btn-sm';
    }
  }

  // Update palette active states
  exam.questions.forEach((_, i) => {
    const btn = document.getElementById(`pal-btn-${i}`);
    if (!btn) return;
    btn.classList.toggle('current', i === index);
  });

  const selectedAnswer = APP_STATE.examAnswers[index];

  // Media
  const mediaHtml = (q.images && q.images.length > 0)
    ? `<div class="q-media-box">
        <div class="q-media-grid ${q.images.length > 1 ? 'multi' : ''}">
          ${q.images.map((img, i) => `
            <div class="q-media-item">
              <img class="q-media-img" src="${img}" alt="Sơ đồ minh họa ${i+1}" onerror="handleImgError(this)" onclick="openImageModal('${img}', '${escapeHtml(q.question)}')">
              ${q.images.length > 1 ? `<span class="q-media-label">Hình ${String.fromCharCode(65 + i)}</span>` : ''}
            </div>
          `).join('')}
        </div>
        <span class="q-media-hint"><i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / xem chi tiết</span>
       </div>`
    : '';

  // Options with robust fallback
  const effectiveOptions = (q.options && q.options.length > 0) ? q.options : [
    { key: 'A', text: 'Đáp án A / Hình A (Xem sơ đồ minh họa)' },
    { key: 'B', text: 'Đáp án B / Hình B (Xem sơ đồ minh họa)' },
    { key: 'C', text: 'Đáp án C / Hình C (Xem sơ đồ minh họa)' },
    { key: 'D', text: 'Đáp án D / Hình D (Xem sơ đồ minh họa)' }
  ];

  const optionsHtml = effectiveOptions.map(opt => {
    const isSelected = selectedAnswer === opt.key;
    return `
      <button class="opt-btn ${isSelected ? 'active' : ''}" style="${isSelected ? 'background: rgba(99,102,241,0.2); border-color: var(--primary);' : ''}" onclick="selectExamAnswer(${index}, '${opt.key}')">
        <span class="opt-key" style="${isSelected ? 'background: var(--primary); color: white;' : ''}">${opt.key}</span>
        <span class="opt-text">${escapeHtml(opt.text)}</span>
      </button>
    `;
  }).join('');

  const container = document.getElementById('exam-question-content');
  container.innerHTML = `
    <div class="q-card-header">
      <span class="badge badge-subject">${q.section || 'Kỹ thuật'}</span>
      <span class="q-id">Câu ${index + 1} / ${exam.questions.length}</span>
    </div>
    <div class="q-title" style="font-size: 1.25rem;">${escapeHtml(q.question)}</div>
    ${mediaHtml}
    <div class="q-options-list" style="margin-top: 24px;">
      ${optionsHtml}
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: auto; padding-top: 24px;">
      <button class="btn btn-secondary" ${index === 0 ? 'disabled' : ''} onclick="jumpToExamQuestion(${index - 1})">← Câu trước</button>
      ${index < exam.questions.length - 1 
        ? `<button class="btn btn-primary" onclick="jumpToExamQuestion(${index + 1})">Câu tiếp theo →</button>`
        : `<button class="btn btn-danger" onclick="confirmSubmitExam()">Nộp bài thi</button>`
      }
    </div>
  `;
}

function selectExamAnswer(qIndex, key) {
  APP_STATE.examAnswers[qIndex] = key;
  
  // Update palette button status
  const palBtn = document.getElementById(`pal-btn-${qIndex}`);
  if (palBtn) palBtn.classList.add('answered');

  // Re-render current question
  renderExamQuestion(qIndex);
}

function jumpToExamQuestion(index) {
  closeExamPalette();
  renderExamQuestion(index);
}

function startExamTimer() {
  clearInterval(APP_STATE.examTimerInterval);
  updateTimerDisplay();

  APP_STATE.examTimerInterval = setInterval(() => {
    APP_STATE.examSecondsRemaining--;
    APP_STATE.examTimeSpentSeconds++;
    updateTimerDisplay();

    if (APP_STATE.examSecondsRemaining <= 0) {
      clearInterval(APP_STATE.examTimerInterval);
      alert('Hết giờ làm bài! Hệ thống tự động thu bài thi.');
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(APP_STATE.examSecondsRemaining / 60);
  const s = APP_STATE.examSecondsRemaining % 60;
  const timeStr = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  setText('exam-timer-text', timeStr);
}

function confirmSubmitExam() {
  const answeredCount = Object.keys(APP_STATE.examAnswers).length;
  const total = APP_STATE.activeExam.questions.length;
  const msg = `Bạn đã hoàn thành ${answeredCount}/${total} câu hỏi. Bạn có chắc chắn muốn nộp bài thi ngay không?`;
  if (confirm(msg)) {
    submitExam();
  }
}

function submitExam() {
  clearInterval(APP_STATE.examTimerInterval);
  APP_STATE.examIsSubmitted = true;

  const exam = APP_STATE.activeExam;
  let correctCount = 0;
  const subStats = {};

  const recordAnswers = [];

  exam.questions.forEach((q, idx) => {
    const sec = q.section || 'Tổng hợp';
    if (!subStats[sec]) subStats[sec] = { total: 0, correct: 0 };
    subStats[sec].total++;

    const userAns = APP_STATE.examAnswers[idx];
    const isCorrect = (userAns && userAns === q.correct_answer);

    if (isCorrect) {
      correctCount++;
      subStats[sec].correct++;
    }

    recordAnswers.push({
      questionIndex: idx + 1,
      id: q.id,
      question: q.question,
      options: q.options,
      correct_answer: q.correct_answer,
      user_answer: userAns || null,
      is_correct: isCorrect,
      section: sec,
      explanation: q.explanation || null
    });
  });

  const percent = Math.round((correctCount / exam.questions.length) * 100);
  const isPassed = percent >= 70;

  // Format time spent
  const timeSpentMin = Math.floor(APP_STATE.examTimeSpentSeconds / 60);
  const timeSpentSec = APP_STATE.examTimeSpentSeconds % 60;
  const timeSpentStr = `${timeSpentMin}m ${timeSpentSec}s`;

  // Create Exam Attempt Record
  const attempt = {
    id: `ATTEMPT_${Date.now()}`,
    userId: APP_STATE.currentUser.id,
    userName: APP_STATE.currentUser.name,
    userCode: APP_STATE.currentUser.code,
    examId: exam.id,
    examTitle: exam.title,
    date: new Date().toLocaleString('vi-VN'),
    timeSpent: timeSpentStr,
    scorePercent: percent,
    correctCount: correctCount,
    totalQuestions: exam.questions.length,
    isPassed: isPassed,
    subjectBreakdown: subStats,
    answers: recordAnswers
  };

  // Save to history
  APP_STATE.userHistory.unshift(attempt);
  saveUserHistoryAndBookmarks();
  renderHistoryDashboard();

  // Show result view
  document.getElementById('exam-active-view').style.display = 'none';
  document.getElementById('exam-result-view').style.display = 'block';

  // Restore mobile bottom nav
  const bottomNav = document.getElementById('mobile-bottom-nav');
  if (bottomNav) bottomNav.style.display = '';

  setText('result-score-percent', `${percent}%`);
  setText('result-score-fraction', `${correctCount} / ${exam.questions.length} câu đúng`);

  const icon = document.getElementById('result-badge-icon');
  const title = document.getElementById('result-title');
  if (percent >= 80) {
    if (icon) icon.innerText = '🏆';
    if (title) title.innerText = 'XUẤT SẮC - ĐẠT CHUẨN WHITE STAR!';
  } else if (percent >= 70) {
    if (icon) icon.innerText = '🎉';
    if (title) title.innerText = 'CHÚC MỪNG - BẠN ĐÃ ĐẠT KỲ THI!';
  } else {
    if (icon) icon.innerText = '📚';
    if (title) title.innerText = 'CHƯA ĐẠT CHUẨN (CẦN ÔN TẬP THÊM)';
  }

  // Render subject breakdown
  const breakdownDiv = document.getElementById('result-subject-breakdown');
  if (breakdownDiv) {
    breakdownDiv.innerHTML = Object.entries(subStats).map(([sec, stat]) => {
      const p = Math.round((stat.correct / stat.total) * 100);
      return `
        <div class="result-row">
          <span>${sec}</span>
          <strong>${stat.correct}/${stat.total} câu (${p}%)</strong>
        </div>
      `;
    }).join('');
  }
}

function restartExamSelection() {
  document.getElementById('exam-result-view').style.display = 'none';
  document.getElementById('exam-setup-view').style.display = 'block';
  const bottomNav = document.getElementById('mobile-bottom-nav');
  if (bottomNav) bottomNav.style.display = '';
}

function reviewExamAnswers() {
  if (APP_STATE.userHistory.length > 0) {
    openExamReviewModal(APP_STATE.userHistory[0].id);
  }
}

// =============================================================================
// VIEW 5: EXAM HISTORY DASHBOARD & DETAILED ATTEMPT REVIEW
// =============================================================================
function renderHistoryDashboard() {
  const history = APP_STATE.userHistory;

  const totalAttempts = history.length;
  setText('hist-total-attempts', totalAttempts);

  if (totalAttempts === 0) {
    setText('hist-best-score', '--%');
    setText('hist-avg-score', '--%');
    setText('hist-pass-rate', '--%');

    const timeline = document.getElementById('history-progression-timeline');
    if (timeline) {
      timeline.innerHTML = `<div style="color: var(--text-muted); padding: 40px; width: 100%; text-align: center;">Chưa có bài thi nào được thực hiện. Bấm vào "Thi thử bài mới" để bắt đầu làm bài!</div>`;
    }

    const tableBody = document.getElementById('history-table-body');
    if (tableBody) {
      tableBody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 30px;">Chưa có dữ liệu lịch sử thi</td></tr>`;
    }
    return;
  }

  // Calculate metrics
  const scores = history.map(h => h.scorePercent);
  const bestScore = Math.max(...scores);
  const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / totalAttempts);
  const passCount = history.filter(h => h.isPassed).length;
  const passRate = Math.round((passCount / totalAttempts) * 100);

  setText('hist-best-score', `${bestScore}%`);
  setText('hist-avg-score', `${avgScore}%`);
  setText('hist-pass-rate', `${passRate}%`);

  // Render Progression Chart (Recent 10 attempts)
  const timeline = document.getElementById('history-progression-timeline');
  if (timeline) {
    const recent = history.slice(0, 10).reverse();
    timeline.innerHTML = recent.map((item, idx) => {
      const heightPercent = Math.max(15, item.scorePercent);
      const isPass = item.isPassed;
      return `
        <div class="chart-bar-item" title="${item.examTitle}: ${item.scorePercent}% (${item.date})">
          <div class="bar-pill ${isPass ? 'pass' : 'fail'}" style="height: ${heightPercent}%;">
            <span class="bar-score-val">${item.scorePercent}%</span>
          </div>
          <span class="bar-label">Lần ${idx + 1}</span>
        </div>
      `;
    }).join('');
  }

  // Render History Table
  const tableBody = document.getElementById('history-table-body');
  if (tableBody) {
    tableBody.innerHTML = history.map((item, idx) => {
      const breakdownText = Object.entries(item.subjectBreakdown || {})
        .map(([sec, st]) => `${sec.substring(0, 10)}: ${st.correct}/${st.total}`)
        .join(' • ');

      return `
        <tr>
          <td>#${idx + 1}</td>
          <td><strong>${escapeHtml(item.examTitle)}</strong></td>
          <td>${item.date}</td>
          <td>${item.timeSpent || '60m'}</td>
          <td><strong>${item.scorePercent}%</strong> (${item.correctCount}/${item.totalQuestions})</td>
          <td>
            <span class="${item.isPassed ? 'badge-pass' : 'badge-fail'}">
              ${item.isPassed ? '✓ ĐẠT' : '✕ CHƯA ĐẠT'}
            </span>
          </td>
          <td><small style="color: var(--text-muted);">${breakdownText || '--'}</small></td>
          <td>
            <div style="display: flex; gap: 8px;">
              <button class="btn btn-sm btn-outline" onclick="openExamReviewModal('${item.id}')" title="Xem lại bài làm">
                👁️ Xem
              </button>
              <button class="btn btn-sm btn-secondary" onclick="retakeExam('${item.examId}')" title="Thi lại đề này">
                🔄 Thi lại
              </button>
              <button class="btn btn-sm btn-danger-outline" onclick="deleteHistoryAttempt('${item.id}')" title="Xóa">
                🗑️
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }
}

function openExamReviewModal(attemptId) {
  const attempt = APP_STATE.userHistory.find(h => h.id === attemptId);
  if (!attempt) return;

  const modal = document.getElementById('exam-review-modal');
  if (!modal) return;

  setText('review-modal-title', `Chi Tiết Bài Thi: ${attempt.examTitle}`);
  setText('review-modal-meta', `Thí sinh: ${attempt.userName} (${attempt.userCode}) • Nộp bài lúc: ${attempt.date} • Thời lượng: ${attempt.timeSpent}`);
  setText('review-modal-score', `${attempt.scorePercent}% (${attempt.correctCount}/${attempt.totalQuestions} câu đúng)`);

  const container = document.getElementById('review-modal-questions-stream');
  if (container) {
    container.innerHTML = attempt.answers.map(ans => {
      const qStatusClass = ans.is_correct ? 'correct' : (ans.user_answer ? 'wrong' : 'skipped');
      const statusIcon = ans.is_correct ? '✅ Đúng' : (ans.user_answer ? `❌ Sai (Bạn chọn ${ans.user_answer})` : '⚠️ Bỏ qua');
      const expl = ans.explanation || {};

      return `
        <div class="review-q-card ${qStatusClass}">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span class="badge badge-subject">${ans.section}</span>
            <span style="font-weight: 700; color: ${ans.is_correct ? '#10b981' : '#ef4444'};">
              Câu ${ans.questionIndex}: ${statusIcon}
            </span>
          </div>
          
          <div class="q-title" style="margin-bottom: 14px;">${escapeHtml(ans.question)}</div>

          <div class="q-options-list" style="margin-bottom: 14px;">
            ${(ans.options || []).map(opt => {
              const isUserChoice = ans.user_answer === opt.key;
              const isCorrectAnswer = ans.correct_answer === opt.key;
              let optStyle = '';
              let badgeText = '';

              if (isCorrectAnswer) {
                optStyle = 'background: rgba(16, 185, 129, 0.15); border-color: #10b981; color: #10b981; font-weight: 700;';
                badgeText = ' (Đáp án chuẩn)';
              } else if (isUserChoice) {
                optStyle = 'background: rgba(239, 68, 68, 0.15); border-color: #ef4444; color: #ef4444;';
                badgeText = ' (Lựa chọn của bạn)';
              }

              return `
                <div class="opt-btn" style="${optStyle}; pointer-events: none;">
                  <span class="opt-key">${opt.key}</span>
                  <span class="opt-text">${escapeHtml(opt.text)}${badgeText}</span>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Rich Explanation -->
          <div class="q-explanation-box" style="display: block;">
            <div class="expl-content-body">
              <div class="expl-block why-correct">
                <h5>✓ Phân tích vì sao đáp án chuẩn (${ans.correct_answer}) là đúng:</h5>
                <p>${expl.why_correct || ('Đáp án ' + ans.correct_answer + ' là phương án chính xác theo nguyên lý kỹ thuật.')}</p>
              </div>
              ${expl.why_wrong ? `
                <div class="expl-block why-wrong">
                  <h5>⚠️ Phân tích bẫy đề thi & phương án sai:</h5>
                  <p>${expl.why_wrong}</p>
                </div>
              ` : ''}
              ${expl.supplementary_knowledge ? `
                <div class="expl-block supplementary">
                  <h5>💡 Kiến thức bổ trợ & Ghi nhớ nhanh:</h5>
                  <p>${expl.supplementary_knowledge}</p>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  modal.classList.add('active');
}

function closeExamReviewModal() {
  const modal = document.getElementById('exam-review-modal');
  if (modal) modal.classList.remove('active');
}

function retakeExam(examId) {
  closeExamReviewModal();
  selectExamPreset(examId);
  switchTab('exam');
  startSelectedExam();
}

function deleteHistoryAttempt(attemptId) {
  if (confirm('Bạn có chắc chắn muốn xóa bản ghi kết quả bài thi này?')) {
    APP_STATE.userHistory = APP_STATE.userHistory.filter(h => h.id !== attemptId);
    saveUserHistoryAndBookmarks();
    renderHistoryDashboard();
  }
}

function confirmClearHistory() {
  if (confirm('CẢNH BÁO: Thao tác này sẽ xóa toàn bộ lịch sử các bài thi của học viên hiện tại. Bạn có chắc chắn không?')) {
    APP_STATE.userHistory = [];
    saveUserHistoryAndBookmarks();
    renderHistoryDashboard();
  }
}

function exportHistoryData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(APP_STATE.userHistory, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `white_star_exam_history_${APP_STATE.currentUser.code}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// =============================================================================
// VIEW 4: SCHEMATIC GALLERY
// =============================================================================
function initSchematicGallery() {
  filterGallery('all');
}

function filterGallery(category, chipElem) {
  if (chipElem) {
    document.querySelectorAll('.gallery-chip').forEach(c => c.classList.remove('active'));
    chipElem.classList.add('active');
  }

  const container = document.getElementById('schematic-gallery-grid');
  if (!container) return;

  let items = [];
  APP_STATE.masterQuestions.forEach(q => {
    if (q.images && q.images.length > 0) {
      if (category === 'all' || q.subject_code === category) {
        q.images.forEach(img => {
          items.push({
            imgSrc: img,
            qId: q.id,
            subject: q.subject,
            questionText: q.question
          });
        });
      }
    }
  });

  if (items.length === 0) {
    container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 40px;">Không có hình ảnh trong danh mục này.</div>`;
    return;
  }

  container.innerHTML = items.map(item => {
    return `
      <div class="gallery-card" onclick="openImageModal('${item.imgSrc}', '${escapeHtml(item.questionText)}')">
        <div class="gallery-card-img-wrap">
          <img src="${item.imgSrc}" alt="${item.qId}" loading="lazy" onerror="handleImgError(this)">
        </div>
        <div class="gallery-card-info">
          <h5>${item.qId}</h5>
          <span>${item.subject}</span>
        </div>
      </div>
    `;
  }).join('');
}

// =============================================================================
// MODAL VIEWER & UTILITIES
// =============================================================================
function openImageModal(src, caption) {
  const modal = document.getElementById('image-modal');
  const img = document.getElementById('modal-img');
  const cap = document.getElementById('modal-caption');
  if (modal && img) {
    img.onerror = function() { handleImgError(this); };
    img.src = src;
    if (cap) cap.innerText = caption || '';
    modal.classList.add('active');
  }
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (modal) modal.classList.remove('active');
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
