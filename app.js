/**
 * TIME TABLE 24-310 (EN) - APPLICATION LOGIC
 * High-Contrast Monochrome Interactive Web Application
 */

(function () {
  'use strict';

  // Master Schedule Data for 24-310 (EN)
  const TIMETABLE_DATA = [
    // === THURSDAY ===
    {
      id: "thu-1",
      day: "Thursday",
      dayUz: "Payshanba",
      dayOrder: 4,
      slotNum: "6",
      time: "16:30 - 17:50",
      startTime: "16:30",
      endTime: "17:50",
      subject: "Internet of Things",
      subjectUz: "Internet of Things (IoT)",
      type: "Lecture",
      typeUz: "Ma'ruza",
      teacher: "Rezayei Sardareh",
      room: "238 Lecture Room",
      groups: "24-309 (EN), 24-310 (EN)",
      isShared: true
    },
    {
      id: "thu-2",
      day: "Thursday",
      dayUz: "Payshanba",
      dayOrder: 4,
      slotNum: "7",
      time: "18:00 - 19:20",
      startTime: "18:00",
      endTime: "19:20",
      subject: "Internet of Things",
      subjectUz: "Internet of Things (IoT)",
      type: "Lecture",
      typeUz: "Ma'ruza",
      teacher: "Rezayei Sardareh",
      room: "234 Lecture Room",
      groups: "24-309 (EN), 24-310 (EN)",
      isShared: true
    },

    // === SATURDAY ===
    {
      id: "sat-1",
      day: "Saturday",
      dayUz: "Shanba",
      dayOrder: 6,
      slotNum: "2",
      time: "09:30 - 10:50",
      startTime: "09:30",
      endTime: "10:50",
      subject: "Advanced Programming",
      subjectUz: "Advanced Programming",
      type: "Practice",
      typeUz: "Amaliyot",
      teacher: "Islomboyev Botir",
      room: "227 Room",
      groups: "24-310 (EN)",
      isShared: false
    },
    {
      id: "sat-2",
      day: "Saturday",
      dayUz: "Shanba",
      dayOrder: 6,
      slotNum: "3",
      time: "11:00 - 12:20",
      startTime: "11:00",
      endTime: "12:20",
      subject: "Advanced Programming",
      subjectUz: "Advanced Programming",
      type: "Practice",
      typeUz: "Amaliyot",
      teacher: "Islomboyev Botir",
      room: "227 Room",
      groups: "24-310 (EN)",
      isShared: false
    },
    {
      id: "sat-3",
      day: "Saturday",
      dayUz: "Shanba",
      dayOrder: 6,
      slotNum: "4",
      time: "13:30 - 14:50",
      startTime: "13:30",
      endTime: "14:50",
      subject: "Advanced Programming",
      subjectUz: "Advanced Programming",
      type: "Practice",
      typeUz: "Amaliyot",
      teacher: "Islomboyev Botir",
      room: "227 Room",
      groups: "24-310 (EN)",
      isShared: false
    },
    {
      id: "sat-4",
      day: "Saturday",
      dayUz: "Shanba",
      dayOrder: 6,
      slotNum: "5",
      time: "15:00 - 16:20",
      startTime: "15:00",
      endTime: "16:20",
      subject: "Advanced Programming",
      subjectUz: "Advanced Programming",
      type: "Lecture",
      typeUz: "Ma'ruza",
      teacher: "Islomboyev Botir",
      room: "133 Lecture Room",
      groups: "24-310 (EN), 24-311 (EN), 24-312 (EN)",
      isShared: true
    },
    {
      id: "sat-5",
      day: "Saturday",
      dayUz: "Shanba",
      dayOrder: 6,
      slotNum: "6",
      time: "16:30 - 17:50",
      startTime: "16:30",
      endTime: "17:50",
      subject: "Risk Analysis and Systems Testing",
      subjectUz: "Risk Analysis & Testing",
      type: "Lecture",
      typeUz: "Ma'ruza",
      teacher: "Vacancy RAST",
      room: "236 Lecture Room",
      groups: "24-309 (EN), 24-310 (EN)",
      isShared: true
    },

    // === SUNDAY ===
    {
      id: "sun-1",
      day: "Sunday",
      dayUz: "Yakshanba",
      dayOrder: 0, // JS getDay() is 0 for Sunday
      slotNum: "2",
      time: "09:30 - 10:50",
      startTime: "09:30",
      endTime: "10:50",
      subject: "Advanced Programming",
      subjectUz: "Advanced Programming",
      type: "Practice",
      typeUz: "Amaliyot",
      teacher: "Islomboyev Botir",
      room: "227 Room",
      groups: "24-310 (EN)",
      isShared: false
    },
    {
      id: "sun-2",
      day: "Sunday",
      dayUz: "Yakshanba",
      dayOrder: 0,
      slotNum: "3",
      time: "11:00 - 12:20",
      startTime: "11:00",
      endTime: "12:20",
      subject: "Advanced Programming",
      subjectUz: "Advanced Programming",
      type: "Lecture",
      typeUz: "Ma'ruza",
      teacher: "Islomboyev Botir",
      room: "133 Lecture Room",
      groups: "24-310 (EN), 24-311 (EN), 24-312 (EN)",
      isShared: true
    },
    {
      id: "sun-3",
      day: "Sunday",
      dayUz: "Yakshanba",
      dayOrder: 0,
      slotNum: "4",
      time: "13:30 - 14:50",
      startTime: "13:30",
      endTime: "14:50",
      subject: "Falsafa",
      subjectUz: "Falsafa",
      type: "Lecture",
      typeUz: "Ma'ruza",
      teacher: "Toshev Suhrob",
      room: "323 Lecture Room",
      groups: "24-309 (EN), 24-310 (EN)",
      isShared: true
    },
    {
      id: "sun-4",
      day: "Sunday",
      dayUz: "Yakshanba",
      dayOrder: 0,
      slotNum: "5",
      time: "15:00 - 16:20",
      startTime: "15:00",
      endTime: "16:20",
      subject: "Falsafa",
      subjectUz: "Falsafa",
      type: "Lecture",
      typeUz: "Amaliy / Ma'ruza",
      teacher: "Toshev Suhrob",
      room: "238 Lecture Room",
      groups: "24-309 (EN), 24-310 (EN)",
      isShared: true
    },
    {
      id: "sun-5",
      day: "Sunday",
      dayUz: "Yakshanba",
      dayOrder: 0,
      slotNum: "6",
      time: "16:30 - 17:50",
      startTime: "16:30",
      endTime: "17:50",
      subject: "Digital Sustainability",
      subjectUz: "Digital Sustainability",
      type: "Lecture",
      typeUz: "Ma'ruza",
      teacher: "G'ulomov Abdulaziz",
      room: "236 Lecture Room",
      groups: "24-309 (EN), 24-310 (EN)",
      isShared: true
    }
  ];

  // Standard Time Slots
  const STANDARD_SLOTS = [
    { num: "1", time: "08:00 - 09:20", start: "08:00", end: "09:20" },
    { num: "2", time: "09:30 - 10:50", start: "09:30", end: "10:50" },
    { num: "3", time: "11:00 - 12:20", start: "11:00", end: "12:20" },
    { num: "4", time: "13:30 - 14:50", start: "13:30", end: "14:50" },
    { num: "5", time: "15:00 - 16:20", start: "15:00", end: "16:20" },
    { num: "6", time: "16:30 - 17:50", start: "16:30", end: "17:50" },
    { num: "7", time: "18:00 - 19:20", start: "18:00", end: "19:20" }
  ];

  // Translations
  const I18N = {
    uz: {
      navSubtext: "1-Semestr • Dars Jadvali",
      heroHeading: "Haftalik Dars Jadvali",
      heroSub: "24-310 (EN) guruhi uchun barcha ma'ruzalar, amaliy mashg'ulotlar, o'qituvchilar va auditoriyalar.",
      lessonsCount: "Dars / Hafta",
      daysCount: "O'quv Kuni",
      subjectsCount: "Fanlar",
      liveStatus: "JONLI HOLAT",
      currentLesson: "HOZIRGI DARS",
      nextLesson: "KEYINGI DARS",
      freeDay: "DAM OLISH KUNI",
      allDays: "Barcha Kunlar",
      today: "Bugun",
      thu: "Payshanba",
      sat: "Shanba",
      sun: "Yakshanba",
      cardsView: "Kartalar",
      matrixView: "Matritsa",
      dirView: "Fanlar",
      searchPlaceholder: "Fan, o'qituvchi yoki xona bo'yicha qidirish...",
      allFilter: "Barchasi",
      lectureFilter: "Ma'ruza",
      practiceFilter: "Amaliyot",
      exportIcs: "Taqvim (.ics)",
      copySchedule: "Nusxa olish",
      print: "Chop etish",
      countdownLeft: "QOLGAN VAQT",
      ongoing: "DAVOM ETMOQDA",
      startsIn: "boshlanishiga",
      remaining: "qoldi",
      noLessonsFound: "Belgilangan parametrlar bo'yicha hech qanday dars topilmadi.",
      freeDayMessage: "Bugungi kunda 24-310 guruhi uchun darslar belgilanmagan. Keyingi dars payshanba, shanba yoki yakshanba kuni.",
      sharedWith: "Birgalikda:",
      only310: "Faqat 24-310",
      teacher: "O'qituvchi",
      room: "Xona",
      detailsHint: "Batafsil ko'rish",
      copiedToast: "Dars jadvali buferga nusxalandi!",
      icsToast: "Kalendar fayli (.ics) yuklandi!",
      modalClose: "Yopish"
    },
    en: {
      navSubtext: "Semester 1 • Timetable",
      heroHeading: "Weekly Timetable",
      heroSub: "Dedicated timetable for cohort 24-310 (EN): lectures, lab sessions, rooms & professors.",
      lessonsCount: "Classes / Week",
      daysCount: "Study Days",
      subjectsCount: "Subjects",
      liveStatus: "LIVE STATUS",
      currentLesson: "CURRENT CLASS",
      nextLesson: "NEXT CLASS",
      freeDay: "DAY OFF",
      allDays: "All Days",
      today: "Today",
      thu: "Thursday",
      sat: "Saturday",
      sun: "Sunday",
      cardsView: "Cards",
      matrixView: "Matrix",
      dirView: "Subjects",
      searchPlaceholder: "Search by subject, professor, or room...",
      allFilter: "All",
      lectureFilter: "Lecture",
      practiceFilter: "Practice",
      exportIcs: "Calendar (.ics)",
      copySchedule: "Copy Schedule",
      print: "Print",
      countdownLeft: "TIME REMAINING",
      ongoing: "IN PROGRESS",
      startsIn: "starts in",
      remaining: "left",
      noLessonsFound: "No lessons match your current filters.",
      freeDayMessage: "No classes scheduled for group 24-310 today. Classes run on Thursday, Saturday & Sunday.",
      sharedWith: "Shared with:",
      only310: "Exclusive: 24-310",
      teacher: "Professor",
      room: "Room",
      detailsHint: "View details",
      copiedToast: "Timetable copied to clipboard!",
      icsToast: "Calendar file (.ics) downloaded!",
      modalClose: "Close"
    }
  };

  // State
  let currentLang = localStorage.getItem('timetable_lang') || 'uz';
  let currentTheme = localStorage.getItem('timetable_theme') || 'dark';
  let activeDay = 'all'; // 'all', 'today', 'Thursday', 'Saturday', 'Sunday'
  let activeView = 'cards'; // 'cards', 'matrix', 'directory'
  let activeType = 'all'; // 'all', 'Lecture', 'Practice'
  let searchQuery = '';
  let selectedLesson = null;

  // DOM Elements
  const htmlRoot = document.documentElement;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langIndicator = document.getElementById('langIndicator');
  const liveTimeDisplay = document.getElementById('liveTimeDisplay');
  const liveDayDisplay = document.getElementById('liveDayDisplay');
  const liveStatusBanner = document.getElementById('liveStatusBanner');
  const statusLeadLabel = document.getElementById('statusLeadLabel');
  const currentLessonTitle = document.getElementById('currentLessonTitle');
  const currentLessonDesc = document.getElementById('currentLessonDesc');
  const countdownTimer = document.getElementById('countdownTimer');
  const countdownLabel = document.getElementById('countdownLabel');
  const dayTabsNav = document.getElementById('dayTabsNav');
  const viewCardsBtn = document.getElementById('viewCardsBtn');
  const viewMatrixBtn = document.getElementById('viewMatrixBtn');
  const viewDirBtn = document.getElementById('viewDirBtn');
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const exportIcsBtn = document.getElementById('exportIcsBtn');
  const copyScheduleBtn = document.getElementById('copyScheduleBtn');
  const printBtn = document.getElementById('printBtn');
  const mainContentArea = document.getElementById('mainContentArea');
  const lessonModalBackdrop = document.getElementById('lessonModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const toastContainer = document.getElementById('toastContainer');
  const todayCountBadge = document.getElementById('todayCountBadge');

  // Modal elements
  const modalTypeTag = document.getElementById('modalTypeTag');
  const modalSlotTag = document.getElementById('modalSlotTag');
  const modalSubjectTitle = document.getElementById('modalSubjectTitle');
  const modalTimeVal = document.getElementById('modalTimeVal');
  const modalTeacherVal = document.getElementById('modalTeacherVal');
  const modalRoomVal = document.getElementById('modalRoomVal');
  const modalGroupsVal = document.getElementById('modalGroupsVal');
  const modalGoogleCalBtn = document.getElementById('modalGoogleCalBtn');
  const modalCopyBtn = document.getElementById('modalCopyBtn');

  // Initialize
  function init() {
    setTheme(currentTheme);
    setupEventListeners();
    updateLiveClockAndStatus();
    setInterval(updateLiveClockAndStatus, 1000);
    renderActiveView();
    updateTodayCountBadge();
  }

  // Set Theme
  function setTheme(theme) {
    currentTheme = theme;
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('timetable_theme', theme);
  }

  // Toggle Theme
  themeToggleBtn.addEventListener('click', () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Toggle Language
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'uz' ? 'en' : 'uz';
    localStorage.setItem('timetable_lang', currentLang);
    langIndicator.textContent = currentLang.toUpperCase();
    applyLanguageTranslations();
    renderActiveView();
    updateLiveClockAndStatus();
  });

  function applyLanguageTranslations() {
    const t = I18N[currentLang];
    document.getElementById('navSubtext').textContent = t.navSubtext;
    document.getElementById('heroMainHeading').textContent = t.heroHeading;
    document.getElementById('heroSubHeading').textContent = t.heroSub;
    document.getElementById('statLabelLessons').textContent = t.lessonsCount;
    document.getElementById('statLabelDays').textContent = t.daysCount;
    document.getElementById('statLabelSubjects').textContent = t.subjectsCount;

    document.querySelector('#tabAll .tab-name').textContent = t.allDays;
    document.querySelector('#tabToday .tab-name').textContent = t.today;
    document.querySelector('#tabThu .tab-name').textContent = t.thu;
    document.querySelector('#tabSat .tab-name').textContent = t.sat;
    document.querySelector('#tabSun .tab-name').textContent = t.sun;

    document.querySelector('#viewCardsBtn .view-btn-text').textContent = t.cardsView;
    document.querySelector('#viewMatrixBtn .view-btn-text').textContent = t.matrixView;
    document.querySelector('#viewDirBtn .view-btn-text').textContent = t.dirView;

    document.getElementById('searchInput').placeholder = t.searchPlaceholder;
    document.getElementById('pillAll').textContent = t.allFilter;
    document.getElementById('pillLecture').textContent = t.lectureFilter;
    document.getElementById('pillPractice').textContent = t.practiceFilter;

    document.querySelector('#exportIcsBtn .btn-text').textContent = t.exportIcs;
    document.querySelector('#copyScheduleBtn .btn-text').textContent = t.copySchedule;
    document.querySelector('#printBtn .btn-text').textContent = t.print;
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Day Tabs
    dayTabsNav.addEventListener('click', (e) => {
      const tab = e.target.closest('.day-tab');
      if (!tab) return;
      document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeDay = tab.dataset.day;
      renderActiveView();
    });

    // View Switcher
    const viewButtons = [viewCardsBtn, viewMatrixBtn, viewDirBtn];
    viewButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        viewButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeView = btn.dataset.view;
        renderActiveView();
      });
    });

    // Type Filter Pills
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeType = pill.dataset.type;
        renderActiveView();
      });
    });

    // Search Input
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      searchClearBtn.style.display = searchQuery ? 'block' : 'none';
      renderActiveView();
    });

    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClearBtn.style.display = 'none';
      searchInput.focus();
      renderActiveView();
    });

    // Action Buttons
    exportIcsBtn.addEventListener('click', exportToIcs);
    copyScheduleBtn.addEventListener('click', copyFormattedSchedule);
    printBtn.addEventListener('click', () => window.print());

    // Modal Events
    modalCloseBtn.addEventListener('click', closeModal);
    lessonModalBackdrop.addEventListener('click', (e) => {
      if (e.target === lessonModalBackdrop) closeModal();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    modalCopyBtn.addEventListener('click', copyModalLessonDetails);
  }

  // Get Current Tashkent Time & Day
  function getTashkentDate() {
    const now = new Date();
    // Toshkent is UTC+5
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * 5));
  }

  function getTodayDayName() {
    const dayIndex = getTashkentDate().getDay();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[dayIndex];
  }

  function updateTodayCountBadge() {
    const today = getTodayDayName();
    const count = TIMETABLE_DATA.filter(l => l.day === today).length;
    todayCountBadge.textContent = count;
  }

  // Live Clock & Live Status Engine
  function updateLiveClockAndStatus() {
    const now = getTashkentDate();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    liveTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    const dayName = getTodayDayName();
    const t = I18N[currentLang];
    
    // Day display
    let dayLabel = dayName;
    if (dayName === 'Thursday') dayLabel = t.thu;
    else if (dayName === 'Saturday') dayLabel = t.sat;
    else if (dayName === 'Sunday') dayLabel = t.sun;
    else if (dayName === 'Monday') dayLabel = currentLang === 'uz' ? 'Dushanba' : 'Monday';
    else if (dayName === 'Tuesday') dayLabel = currentLang === 'uz' ? 'Seshanba' : 'Tuesday';
    else if (dayName === 'Wednesday') dayLabel = currentLang === 'uz' ? 'Chorshanba' : 'Wednesday';
    else if (dayName === 'Friday') dayLabel = currentLang === 'uz' ? 'Juma' : 'Friday';
    liveDayDisplay.textContent = dayLabel;

    // Check if there is currently an ongoing lesson
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const todayLessons = TIMETABLE_DATA.filter(l => l.day === dayName);

    let ongoingLesson = null;
    let upcomingLessonToday = null;

    for (const l of todayLessons) {
      const [sh, sm] = l.startTime.split(':').map(Number);
      const [eh, em] = l.endTime.split(':').map(Number);
      const startMinutes = sh * 60 + sm;
      const endMinutes = eh * 60 + em;

      if (nowMinutes >= startMinutes && nowMinutes < endMinutes) {
        ongoingLesson = { lesson: l, endMin: endMinutes };
        break;
      } else if (nowMinutes < startMinutes) {
        if (!upcomingLessonToday) {
          upcomingLessonToday = { lesson: l, startMin: startMinutes };
        }
      }
    }

    if (ongoingLesson) {
      // Ongoing class right now
      liveStatusBanner.classList.add('is-active');
      statusLeadLabel.textContent = t.currentLesson;
      currentLessonTitle.textContent = ongoingLesson.lesson.subject;
      currentLessonDesc.textContent = `${ongoingLesson.lesson.slotNum}-para • ${ongoingLesson.lesson.room} • ${ongoingLesson.lesson.teacher}`;
      
      const remMin = ongoingLesson.endMin - nowMinutes;
      const remSec = 60 - now.getSeconds();
      countdownLabel.textContent = t.countdownLeft;
      countdownTimer.textContent = `${String(remMin - 1).padStart(2, '0')}:${String(remSec).padStart(2, '0')}`;
    } else if (upcomingLessonToday) {
      // Next class today
      liveStatusBanner.classList.remove('is-active');
      statusLeadLabel.textContent = `${t.nextLesson} (${t.today.toUpperCase()})`;
      currentLessonTitle.textContent = upcomingLessonToday.lesson.subject;
      currentLessonDesc.textContent = `${upcomingLessonToday.lesson.time} • ${upcomingLessonToday.lesson.room} • ${upcomingLessonToday.lesson.teacher}`;

      const diffMin = upcomingLessonToday.startMin - nowMinutes;
      const hoursLeft = Math.floor(diffMin / 60);
      const minsLeft = diffMin % 60;
      const remSec = 60 - now.getSeconds();
      countdownLabel.textContent = t.countdownLeft;
      countdownTimer.textContent = `${String(hoursLeft).padStart(2, '0')}:${String(minsLeft - 1).padStart(2, '0')}:${String(remSec).padStart(2, '0')}`;
    } else {
      // Find next class in the coming days
      liveStatusBanner.classList.remove('is-active');
      const nextUpcoming = findNextClassInWeek(now);
      if (nextUpcoming) {
        statusLeadLabel.textContent = `${t.nextLesson} (${nextUpcoming.dayLabel})`;
        currentLessonTitle.textContent = nextUpcoming.lesson.subject;
        currentLessonDesc.textContent = `${nextUpcoming.dayLabel}, ${nextUpcoming.lesson.time} • ${nextUpcoming.lesson.room}`;

        // Countdown to nextUpcoming
        const msDiff = nextUpcoming.targetDate - now;
        if (msDiff > 0) {
          const totalSec = Math.floor(msDiff / 1000);
          const d = Math.floor(totalSec / 86400);
          const h = Math.floor((totalSec % 86400) / 3600);
          const m = Math.floor((totalSec % 3600) / 60);
          const s = totalSec % 60;
          countdownLabel.textContent = t.countdownLeft;
          countdownTimer.textContent = d > 0 ? `${d}k ${h}s ${m}d` : `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        }
      } else {
        statusLeadLabel.textContent = t.freeDay;
        currentLessonTitle.textContent = t.freeDayMessage;
        currentLessonDesc.textContent = "24-310 (EN)";
        countdownTimer.textContent = "--:--:--";
      }
    }
  }

  // Find next class date
  function findNextClassInWeek(now) {
    const todayIndex = now.getDay();
    // Schedule days are Thursday (4), Saturday (6), Sunday (0)
    const validDays = [
      { day: 'Thursday', order: 4, nameUz: 'Payshanba' },
      { day: 'Saturday', order: 6, nameUz: 'Shanba' },
      { day: 'Sunday', order: 0, nameUz: 'Yakshanba' }
    ];

    for (let dayOffset = 0; dayOffset <= 7; dayOffset++) {
      const checkDayIndex = (todayIndex + dayOffset) % 7;
      const foundTarget = validDays.find(d => d.order === checkDayIndex);
      if (foundTarget) {
        const dayLessons = TIMETABLE_DATA.filter(l => l.day === foundTarget.day);
        for (const lesson of dayLessons) {
          const [h, m] = lesson.startTime.split(':').map(Number);
          const targetDate = new Date(now);
          targetDate.setDate(now.getDate() + dayOffset);
          targetDate.setHours(h, m, 0, 0);

          if (targetDate > now) {
            return {
              lesson,
              dayLabel: currentLang === 'uz' ? foundTarget.nameUz : foundTarget.day,
              targetDate
            };
          }
        }
      }
    }
    return null;
  }

  // Filter lessons according to search, day, type
  function getFilteredLessons() {
    const todayName = getTodayDayName();

    return TIMETABLE_DATA.filter(lesson => {
      // Day filter
      if (activeDay === 'today') {
        if (lesson.day !== todayName) return false;
      } else if (activeDay !== 'all') {
        if (lesson.day !== activeDay) return false;
      }

      // Type filter
      if (activeType !== 'all') {
        if (lesson.type !== activeType) return false;
      }

      // Search Query
      if (searchQuery) {
        const haystack = `${lesson.subject} ${lesson.subjectUz} ${lesson.teacher} ${lesson.room} ${lesson.groups} ${lesson.type}`.toLowerCase();
        if (!haystack.includes(searchQuery)) return false;
      }

      return true;
    });
  }

  // Render Views
  function renderActiveView() {
    if (activeView === 'cards') {
      renderCardsView();
    } else if (activeView === 'matrix') {
      renderMatrixView();
    } else if (activeView === 'directory') {
      renderDirectoryView();
    }
  }

  // ==========================================
  // VIEW 1: Cards View
  // ==========================================
  function renderCardsView() {
    const lessons = getFilteredLessons();
    const t = I18N[currentLang];

    if (lessons.length === 0) {
      mainContentArea.innerHTML = `
        <div class="empty-day-banner">
          <div class="empty-day-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></polyline><line x1="8" y1="12" x2="16" y2="12"></polyline></svg>
          </div>
          <h3>${t.noLessonsFound}</h3>
          <p>${activeDay === 'today' ? t.freeDayMessage : ''}</p>
        </div>
      `;
      return;
    }

    // Group by Day
    const daysOrder = ['Thursday', 'Saturday', 'Sunday'];
    let html = '';

    daysOrder.forEach(day => {
      const dayLessons = lessons.filter(l => l.day === day);
      if (dayLessons.length === 0) return;

      const dayTitle = currentLang === 'uz' ? (day === 'Thursday' ? 'Payshanba' : day === 'Saturday' ? 'Shanba' : 'Yakshanba') : day;
      const isToday = getTodayDayName() === day;

      html += `
        <section class="day-group-section" id="daySection-${day}">
          <div class="day-group-header">
            <div class="day-group-title">
              <h2>${dayTitle}</h2>
              <span class="day-badge-counter">${dayLessons.length} ${t.lessonsCount.split('/')[0].trim()}</span>
              ${isToday ? `<span class="hero-pill primary" style="font-size:0.68rem;">${t.today.toUpperCase()}</span>` : ''}
            </div>
            <div class="day-summary-text">
              24-310 (EN)
            </div>
          </div>
          <div class="cards-grid">
            ${dayLessons.map(l => createLessonCardHtml(l)).join('')}
          </div>
        </section>
      `;
    });

    mainContentArea.innerHTML = html;

    // Attach click events to cards
    document.querySelectorAll('.lesson-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        const lesson = TIMETABLE_DATA.find(l => l.id === id);
        if (lesson) openModal(lesson);
      });
    });
  }

  function createLessonCardHtml(lesson) {
    const t = I18N[currentLang];
    const typeLabel = lesson.type === 'Lecture' ? t.lectureFilter : t.practiceFilter;
    const typeClass = lesson.type.toLowerCase();

    return `
      <article class="lesson-card" data-id="${lesson.id}">
        <div>
          <div class="card-header-row">
            <div class="slot-time-pill">
              <span class="slot-number">${lesson.slotNum.padStart(2, '0')}</span>
              <span class="slot-clock">${lesson.time}</span>
            </div>
            <span class="type-tag ${typeClass}">${typeLabel}</span>
          </div>

          <h3 class="card-subject">${lesson.subject}</h3>

          <div class="card-details-list">
            <div class="detail-row">
              <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span class="detail-text">${t.teacher}: <strong>${lesson.teacher}</strong></span>
            </div>
            <div class="detail-row">
              <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <span class="detail-text">${t.room}: <strong>${lesson.room}</strong></span>
            </div>
          </div>
        </div>

        <div class="card-footer-row">
          <div class="cohort-tag">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <span class="cohort-badge">${lesson.isShared ? lesson.groups : t.only310}</span>
          </div>
          <span class="card-action-hint">
            ${t.detailsHint} &rarr;
          </span>
        </div>
      </article>
    `;
  }

  // ==========================================
  // VIEW 2: Matrix View (Weekly Table)
  // ==========================================
  function renderMatrixView() {
    const t = I18N[currentLang];
    const days = [
      { key: 'Thursday', labelUz: 'Payshanba', labelEn: 'Thursday' },
      { key: 'Saturday', labelUz: 'Shanba', labelEn: 'Saturday' },
      { key: 'Sunday', labelUz: 'Yakshanba', labelEn: 'Sunday' }
    ];

    let html = `
      <div class="matrix-view-container">
        <table class="matrix-table">
          <thead>
            <tr>
              <th style="width: 170px;">Vaqt / Para</th>
              ${days.map(d => `<th>${currentLang === 'uz' ? d.labelUz : d.labelEn}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
    `;

    STANDARD_SLOTS.forEach(slot => {
      html += `
        <tr>
          <td class="slot-col">
            ${slot.num}-para
            <span>${slot.time}</span>
          </td>
      `;

      days.forEach(d => {
        const lesson = TIMETABLE_DATA.find(l => l.day === d.key && l.slotNum === slot.num);
        if (lesson) {
          const typeLabel = lesson.type === 'Lecture' ? t.lectureFilter : t.practiceFilter;
          const typeClass = lesson.type.toLowerCase();
          html += `
            <td>
              <div class="matrix-lesson-pill" data-id="${lesson.id}">
                <div class="matrix-subj-name">
                  <span>${lesson.subject}</span>
                  <span class="type-tag ${typeClass}" style="font-size: 0.65rem;">${typeLabel}</span>
                </div>
                <div class="matrix-meta">
                  <span><strong>${lesson.room}</strong></span>
                  <span>•</span>
                  <span>${lesson.teacher}</span>
                </div>
              </div>
            </td>
          `;
        } else {
          html += `<td class="matrix-cell-empty">—</td>`;
        }
      });

      html += `</tr>`;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;

    mainContentArea.innerHTML = html;

    // Attach click events
    document.querySelectorAll('.matrix-lesson-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const id = pill.dataset.id;
        const lesson = TIMETABLE_DATA.find(l => l.id === id);
        if (lesson) openModal(lesson);
      });
    });
  }

  // ==========================================
  // VIEW 3: Subject Directory View
  // ==========================================
  function renderDirectoryView() {
    const t = I18N[currentLang];

    // Group subjects
    const subjectsMap = {};
    TIMETABLE_DATA.forEach(l => {
      if (!subjectsMap[l.subject]) {
        subjectsMap[l.subject] = {
          name: l.subject,
          teachers: new Set(),
          rooms: new Set(),
          types: new Set(),
          totalLessons: 0,
          days: new Set()
        };
      }
      subjectsMap[l.subject].teachers.add(l.teacher);
      subjectsMap[l.subject].rooms.add(l.room);
      subjectsMap[l.subject].types.add(l.type);
      subjectsMap[l.subject].totalLessons++;
      subjectsMap[l.subject].days.add(currentLang === 'uz' ? l.dayUz : l.day);
    });

    let html = `
      <div class="directory-grid">
        ${Object.values(subjectsMap).map(s => `
          <div class="directory-card">
            <div>
              <div class="directory-card-top">
                <div class="directory-card-body">
                  <h3>${s.name}</h3>
                  <div class="directory-prof-info">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <span>${Array.from(s.teachers).join(', ')}</span>
                  </div>
                </div>
                <div class="directory-icon">
                  ${s.totalLessons}x
                </div>
              </div>

              <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 1rem;">
                <div><strong>${t.room}:</strong> ${Array.from(s.rooms).join(', ')}</div>
                <div style="margin-top: 0.25rem;"><strong>Kunlar:</strong> ${Array.from(s.days).join(', ')}</div>
              </div>
            </div>

            <div class="directory-stats-row">
              <div class="dir-stat">
                Mashg'ulot Turi
                <strong>${Array.from(s.types).join(' / ')}</strong>
              </div>
              <div class="dir-stat">
                Haftalik Soat
                <strong>${s.totalLessons * 80} daqiqa</strong>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    mainContentArea.innerHTML = html;
  }

  // ==========================================
  // Modal Logic
  // ==========================================
  function openModal(lesson) {
    selectedLesson = lesson;
    const t = I18N[currentLang];

    modalSubjectTitle.textContent = lesson.subject;
    modalTypeTag.textContent = (lesson.type === 'Lecture' ? t.lectureFilter : t.practiceFilter).toUpperCase();
    modalTypeTag.className = `type-tag ${lesson.type.toLowerCase()}`;
    modalSlotTag.textContent = `${lesson.slotNum}-PARA`;

    const dayName = currentLang === 'uz' ? lesson.dayUz : lesson.day;
    modalTimeVal.textContent = `${dayName}, ${lesson.time}`;
    modalTeacherVal.textContent = lesson.teacher;
    modalRoomVal.textContent = lesson.room;
    modalGroupsVal.textContent = lesson.groups;

    // Google Calendar Link generator
    // Format recurring or next upcoming occurrence
    const gCalUrl = generateGoogleCalendarUrl(lesson);
    modalGoogleCalBtn.href = gCalUrl;

    lessonModalBackdrop.classList.add('is-open');
    lessonModalBackdrop.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    lessonModalBackdrop.classList.remove('is-open');
    lessonModalBackdrop.setAttribute('aria-hidden', 'true');
    selectedLesson = null;
  }

  function copyModalLessonDetails() {
    if (!selectedLesson) return;
    const l = selectedLesson;
    const day = currentLang === 'uz' ? l.dayUz : l.day;
    const text = `📚 24-310 (EN) Dars:\n` +
      `• Fan: ${l.subject}\n` +
      `• Turi: ${l.type}\n` +
      `• Vaqt: ${day}, ${l.time} (${l.slotNum}-para)\n` +
      `• Xona: ${l.room}\n` +
      `• O'qituvchi: ${l.teacher}\n` +
      `• Guruhlar: ${l.groups}`;
    navigator.clipboard.writeText(text).then(() => {
      showToast(I18N[currentLang].copiedToast);
    });
  }

  // ==========================================
  // Utilities: ICS Export, Clipboard, Google Cal
  // ==========================================
  function generateGoogleCalendarUrl(lesson) {
    // Generate next date for this lesson
    const now = getTashkentDate();
    const todayIndex = now.getDay();
    const targetDayIndex = lesson.dayOrder;
    let diffDays = (targetDayIndex - todayIndex + 7) % 7;
    if (diffDays === 0) {
      const [h, m] = lesson.startTime.split(':').map(Number);
      if (now.getHours() > h || (now.getHours() === h && now.getMinutes() >= m)) {
        diffDays = 7;
      }
    }

    const eventDate = new Date(now);
    eventDate.setDate(now.getDate() + diffDays);

    const [sh, sm] = lesson.startTime.split(':').map(Number);
    const [eh, em] = lesson.endTime.split(':').map(Number);

    eventDate.setHours(sh, sm, 0, 0);
    const endDate = new Date(eventDate);
    endDate.setHours(eh, em, 0, 0);

    const formatGTime = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const title = encodeURIComponent(`${lesson.subject} (${lesson.type}) - 24-310`);
    const details = encodeURIComponent(`O'qituvchi: ${lesson.teacher}\nXona: ${lesson.room}\nGuruhlar: ${lesson.groups}`);
    const location = encodeURIComponent(lesson.room);
    const dates = `${formatGTime(eventDate)}/${formatGTime(endDate)}`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}&recur=RRULE:FREQ=WEEKLY`;
  }

  function exportToIcs() {
    let icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//TimeTable 24-310//UZ",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "X-WR-CALNAME:24-310 (EN) Timetable",
      "X-WR-TIMEZONE:Asia/Tashkent"
    ];

    const dayByMap = {
      Thursday: "TH",
      Saturday: "SA",
      Sunday: "SU"
    };

    TIMETABLE_DATA.forEach(l => {
      const [sh, sm] = l.startTime.split(':').map(Number);
      const [eh, em] = l.endTime.split(':').map(Number);

      const byDay = dayByMap[l.day];

      icsContent.push(
        "BEGIN:VEVENT",
        `UID:24310-${l.id}@timetable.app`,
        `DTSTAMP:${new Date().toISOString().replace(/-|:|\.\d\d\d/g, "")}`,
        `SUMMARY:${l.subject} (${l.type})`,
        `DESCRIPTION:O'qituvchi: ${l.teacher} | Guruhlar: ${l.groups}`,
        `LOCATION:${l.room}`,
        `RRULE:FREQ=WEEKLY;BYDAY=${byDay}`,
        `DTSTART;TZID=Asia/Tashkent:20261001T${String(sh).padStart(2,'0')}${String(sm).padStart(2,'0')}00`,
        `DTEND;TZID=Asia/Tashkent:20261001T${String(eh).padStart(2,'0')}${String(em).padStart(2,'0')}00`,
        "END:VEVENT"
      );
    });

    icsContent.push("END:VCALENDAR");

    const blob = new Blob([icsContent.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "24-310_TimeTable.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(I18N[currentLang].icsToast);
  }

  function copyFormattedSchedule() {
    let text = `🗓️ 24-310 (EN) GURUHI DARS JADVALI (3-kurs, 1-semestr)\n\n`;

    const days = ['Thursday', 'Saturday', 'Sunday'];
    days.forEach(d => {
      const dLessons = TIMETABLE_DATA.filter(l => l.day === d);
      const dTitle = d === 'Thursday' ? 'PAYSHANBA' : d === 'Saturday' ? 'SHANBA' : 'YAKSHANBA';
      text += `📌 ${dTitle} (${dLessons.length} ta dars):\n`;
      dLessons.forEach(l => {
        text += `  • ${l.slotNum}-para [${l.time}] ${l.subject} (${l.type})\n    Xona: ${l.room} | O'qituvchi: ${l.teacher}\n`;
      });
      text += `\n`;
    });

    text += `Manba: Rasmiy TimeTable`;

    navigator.clipboard.writeText(text).then(() => {
      showToast(I18N[currentLang].copiedToast);
    });
  }

  // Toast System
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 200);
    }, 3000);
  }

  // Run on DOM ready
  document.addEventListener('DOMContentLoaded', init);
})();
