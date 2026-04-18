/**
 * SmartClass v.6.9 - JavaScript Logic
 * Developed for 奕鈞老師
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- State Initialization ---
    let class101 = {
        id: 'class_101',
        name: '101',
        students: [
            { id: 10101, seatNo: 1, name: '周杰倫', score: 0, missingHW: false, goodBehavior: false },
            { id: 10102, seatNo: 2, name: '蔡依林', score: 0, missingHW: false, goodBehavior: false },
            { id: 10103, seatNo: 3, name: '林俊傑', score: 0, missingHW: false, goodBehavior: false },
            { id: 10104, seatNo: 4, name: '鄧紫棋', score: 0, missingHW: false, goodBehavior: false },
            { id: 10105, seatNo: 5, name: '蕭敬騰', score: 0, missingHW: false, goodBehavior: false },
            { id: 10106, seatNo: 6, name: '田馥甄', score: 0, missingHW: false, goodBehavior: false },
            { id: 10107, seatNo: 7, name: '盧廣仲', score: 0, missingHW: false, goodBehavior: false },
            { id: 10108, seatNo: 8, name: '艾怡良', score: 0, missingHW: false, goodBehavior: false },
            { id: 10109, seatNo: 9, name: '韋禮安', score: 0, missingHW: false, goodBehavior: false },
            { id: 10110, seatNo: 10, name: '孫燕姿', score: 0, missingHW: false, goodBehavior: false },
            { id: 10111, seatNo: 11, name: '陳奕迅', score: 0, missingHW: false, goodBehavior: false },
            { id: 10112, seatNo: 12, name: '梁靜茹', score: 0, missingHW: false, goodBehavior: false }
        ],
        teachingProgress: '',
        homework: "1. 國語習作 P.20\n2. 數學心算 P.5"
    };

    let class108 = {
        id: 'class_108',
        name: '108',
        students: [
            { id: 10801, seatNo: 1, name: '五月天', score: 0, missingHW: false, goodBehavior: false },
            { id: 10802, seatNo: 2, name: '張惠妹', score: 0, missingHW: false, goodBehavior: false },
            { id: 10803, seatNo: 3, name: '李榮浩', score: 0, missingHW: false, goodBehavior: false },
            { id: 10804, seatNo: 4, name: '楊丞琳', score: 0, missingHW: false, goodBehavior: false },
            { id: 10805, seatNo: 5, name: '許光漢', score: 0, missingHW: false, goodBehavior: false },
            { id: 10806, seatNo: 6, name: '桂綸鎂', score: 0, missingHW: false, goodBehavior: false },
            { id: 10807, seatNo: 7, name: '劉以豪', score: 0, missingHW: false, goodBehavior: false },
            { id: 10808, seatNo: 8, name: '王淨', score: 0, missingHW: false, goodBehavior: false },
            { id: 10809, seatNo: 9, name: '彭于晏', score: 0, missingHW: false, goodBehavior: false },
            { id: 10810, seatNo: 10, name: '舒淇', score: 0, missingHW: false, goodBehavior: false },
            { id: 10811, seatNo: 11, name: '金城武', score: 0, missingHW: false, goodBehavior: false },
            { id: 10812, seatNo: 12, name: '賈靜雯', score: 0, missingHW: false, goodBehavior: false },
            { id: 10813, seatNo: 13, name: '吳慷仁', score: 0, missingHW: false, goodBehavior: false }
        ],
        teachingProgress: '',
        homework: "請新增功課"
    };

    let state = {
        classes: JSON.parse(localStorage.getItem('sc_v3_classes')) || [class101, class108],
        currentClassId: localStorage.getItem('sc_v3_curr_class') || 'class_101',
        activities: JSON.parse(localStorage.getItem('sc_v3_activities')) || [],
        brandName: localStorage.getItem('sc_v3_brand') || "SmartClass",
        theme: localStorage.getItem('sc_v3_theme') || "default",
        linkGroupPoints: localStorage.getItem('sc_v3_link_points') === 'true',
        arrivalTime: localStorage.getItem('sc_v3_arrival_time') || '08:00',
        customTag1: localStorage.getItem('sc_v3_custom_tag_1') || '',
        customTag2: localStorage.getItem('sc_v3_custom_tag_2') || '',
        customTag3: localStorage.getItem('sc_v3_custom_tag_3') || '',
        classBtn1: localStorage.getItem('sc_v3_cbtn1') || '功課',
        classBtn2: localStorage.getItem('sc_v3_cbtn2') || '優秀',
        classBtn3: localStorage.getItem('sc_v3_cbtn3') || '秩序',
        classBtn4: localStorage.getItem('sc_v3_cbtn4') || '',
        attBtn1: localStorage.getItem('sc_v3_abtn1') || '簽到',
        attBtn3: localStorage.getItem('sc_v3_abtn3') || '缺席',
        commWritingMode: localStorage.getItem('sc_v3_comm_mode') || 'horizontal',
        commShowZhuyin: localStorage.getItem('sc_v3_comm_zhuyin') === 'true',
        commShowAttendance: localStorage.getItem('sc_v3_comm_show_att') !== 'false',
        commFont: localStorage.getItem('sc_v3_comm_font') || 'default',
        commFontSize: parseFloat(localStorage.getItem('sc_v3_comm_font_size')) || 1.8,
        history: JSON.parse(localStorage.getItem('sc_v3_history')) || {},
        sheetsId: localStorage.getItem('sc_v3_sheets_id') || '',
        scoreLocked: !!localStorage.getItem('sc_v3_score_pwd') || localStorage.getItem('sc_v3_score_locked') === 'true',
        scoreLockPassword: localStorage.getItem('sc_v3_score_pwd') || '',
        customLinks: JSON.parse(localStorage.getItem('sc_v3_custom_links')) || [],
        courseAttPrefs: localStorage.getItem('sc_v3_course_att_prefs') || '1,國語,08:40,45\n2,數學,09:30,45',
        checkinSoundEnabled: localStorage.getItem('sc_v3_checkin_sound') !== 'false',
        groupShowButtons: false,
        groupEditMode: false,
        groupZoom: parseFloat(localStorage.getItem('sc_v3_group_zoom')) || 1.0,
        user: null,
        timer: { seconds: 0, active: false, interval: null }
    };

    // --- Sound Effects ---
    function playSound(id) {
        if (!state.checkinSoundEnabled) return; // Note: using checkinSoundEnabled as global toggle for compatibility
        const audio = document.getElementById(`audio-${id}`);
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(e => console.log("Sound play error:", e));
        }
    }

    // --- Hoisted Functions (Moved up for reliability) ---
    function getCurrentClass() {
        return state.classes.find(c => c.id === state.currentClassId);
    }

    function saveState() {
        localStorage.setItem('sc_v3_classes', JSON.stringify(state.classes));
        localStorage.setItem('sc_v3_curr_class', state.currentClassId);
        localStorage.setItem('sc_v3_activities', JSON.stringify(state.activities));
        localStorage.setItem('sc_v3_brand', state.brandName);
        localStorage.setItem('sc_v3_theme', state.theme);
        localStorage.setItem('sc_v3_link_points', state.linkGroupPoints);
        localStorage.setItem('sc_v3_arrival_time', state.arrivalTime);
        localStorage.setItem('sc_v3_custom_tag_1', state.customTag1);
        localStorage.setItem('sc_v3_custom_tag_2', state.customTag2);
        localStorage.setItem('sc_v3_custom_tag_3', state.customTag3);
        localStorage.setItem('sc_v3_cbtn1', state.classBtn1);
        localStorage.setItem('sc_v3_cbtn2', state.classBtn2);
        localStorage.setItem('sc_v3_cbtn3', state.classBtn3);
        localStorage.setItem('sc_v3_cbtn4', state.classBtn4);
        localStorage.setItem('sc_v3_abtn1', state.attBtn1);
        localStorage.setItem('sc_v3_abtn3', state.attBtn3);
        localStorage.setItem('sc_v3_comm_mode', state.commWritingMode);
        localStorage.setItem('sc_v3_comm_zhuyin', state.commShowZhuyin);
        localStorage.setItem('sc_v3_comm_show_att', state.commShowAttendance);
        localStorage.setItem('sc_v3_comm_font', state.commFont);
        localStorage.setItem('sc_v3_comm_font_size', state.commFontSize);
        localStorage.setItem('sc_v3_history', JSON.stringify(state.history));
        localStorage.setItem('sc_v3_sheets_id', state.sheetsId);
        localStorage.setItem('sc_v3_score_locked', state.scoreLocked);
        localStorage.setItem('sc_v3_score_pwd', state.scoreLockPassword);
        localStorage.setItem('sc_v3_custom_links', JSON.stringify(state.customLinks));
        localStorage.setItem('sc_v3_course_att_prefs', state.courseAttPrefs);
        localStorage.setItem('sc_v3_checkin_sound', state.checkinSoundEnabled);
        if (typeof updateDashboard === 'function') updateDashboard();
    }

    function loadDataForDate(dateStr) {
        const currClass = getCurrentClass();
        if (!currClass) return;
        
        // Ensure history structure exists
        if (!state.history[dateStr]) state.history[dateStr] = {};
        
        // If the date is actually today, use current class data as defaults instead of empty
        const isToday = dateStr === new Date().toLocaleDateString('en-CA');
        
        if (!state.history[dateStr][currClass.id]) {
            state.history[dateStr][currClass.id] = {
                className: currClass.name,
                homework: isToday ? currClass.homework : '',
                teachingProgress: isToday ? currClass.teachingProgress : '',
                attendance: []
            };
        }
        
        const hData = state.history[dateStr][currClass.id];
        currClass.homework = hData.homework || '';
        currClass.teachingProgress = hData.teachingProgress || '';
        
        updateDashboard();
        if (typeof renderCommunicationBook === 'function') renderCommunicationBook();
    }

    function applyTheme() {
        if(elements && elements.body) elements.body.className = `theme-${state.theme}`;
    }

    let currentGridZoom = parseInt(localStorage.getItem('sc_v3_grid_zoom')) || 220;
    window.setGridZoom = (delta) => {
        currentGridZoom = Math.max(120, Math.min(350, currentGridZoom + delta));
        const grids = document.querySelectorAll('.student-grid, .groups-container, #comm-attendance-grid');
        grids.forEach(g => {
            if (g.id !== 'comm-attendance-grid') {
                g.style.gridTemplateColumns = `repeat(auto-fill, minmax(${currentGridZoom}px, 1fr))`;
            }
        });
        localStorage.setItem('sc_v3_grid_zoom', currentGridZoom);
    };
    
    // Create initial style block for default zoom to prevent flash
    setTimeout(() => { window.setGridZoom(0); }, 100);

    window.toggleCheckinSound = () => {
        state.checkinSoundEnabled = !state.checkinSoundEnabled;
        saveState();
        if (typeof updateCheckinSoundUI === 'function') updateCheckinSoundUI();
        addActivity(`全域音效已${state.checkinSoundEnabled ? '開啟' : '關閉'}`);
    };

    function updateCheckinSoundUI() {
        document.querySelectorAll('.btn-sound-toggle').forEach(btn => {
            const icon = btn.querySelector('.icon-sound-toggle');
            if (state.checkinSoundEnabled) {
                if (icon) icon.setAttribute('data-lucide', 'volume-2');
                btn.title = '全域音效: 開';
                btn.style.color = 'white';
                btn.style.border = '2px solid var(--success)';
            } else {
                if (icon) icon.setAttribute('data-lucide', 'volume-x');
                btn.title = '全域音效: 關';
                btn.style.color = '';
                btn.style.border = '';
            }
        });
        if(typeof lucide !== 'undefined') lucide.createIcons();
    }

    function initWhiteboard() {
        const c = document.getElementById('whiteboard-canvas');
        if(!c) return;
        const ctx = c.getContext('2d');
        
        const rect = c.getBoundingClientRect();
        c.width = rect.width;
        c.height = rect.height;

        let painting = false;
        let color = 'black';

        const startPos = e => { 
            painting = true; 
            draw(e); 
        };
        const endPos = () => { 
            painting = false; 
            ctx.beginPath(); 
        };
        const draw = e => {
            if(!painting) return;
            const currentRect = c.getBoundingClientRect();
            const scaleX = c.width / currentRect.width;
            const scaleY = c.height / currentRect.height;

            const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;

            const x = (clientX - currentRect.left) * scaleX;
            const y = (clientY - currentRect.top) * scaleY;

            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            ctx.strokeStyle = color;
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        };

        c.onmousedown = startPos;
        c.onmouseup = endPos;
        c.onmousemove = draw;
        c.ontouchstart = e => { e.preventDefault(); startPos(e); };
        c.ontouchend = e => { e.preventDefault(); endPos(); };
        c.ontouchmove = e => { e.preventDefault(); draw(e); };

        const cBlack = document.getElementById('color-black');
        const cRed = document.getElementById('color-red');
        const cBlue = document.getElementById('color-blue');
        const cEraser = document.getElementById('color-eraser');
        const cClear = document.getElementById('btn-clear-board');

        if(cBlack) cBlack.onclick = () => color='black';
        if(cRed) cRed.onclick = () => color='red';
        if(cBlue) cBlue.onclick = () => color='blue';
        if(cEraser) cEraser.onclick = () => color='white';
        if(cClear) cClear.onclick = () => ctx.clearRect(0,0,c.width,c.height);
    }

    function saveDailyRecord() {
        // Fallback to today string if undefined
        const todayStr = new Date().toLocaleDateString('en-CA');
        const dateKey = window.currentEditDate || todayStr;
        const currClass = getCurrentClass();
        if (!currClass) return;

        if (!state.history[dateKey]) state.history[dateKey] = {};
        
        const existingData = state.history[dateKey][currClass.id] || {};
        let attendanceData = existingData.attendance || [];
        
        // Automatically populate attendance if this is today and it's empty
        if (dateKey === todayStr && attendanceData.length === 0) {
            attendanceData = currClass.students.map(s => ({
                seat: s.seatNo,
                name: s.name,
                status: s.absent ? '缺席' : (s.arrived ? (s.arriveTimeStr > state.arrivalTime ? '遲到' : '已到') : '未到')
            }));
        }

        state.history[dateKey][currClass.id] = {
            className: currClass.name,
            homework: currClass.homework || '',
            teachingProgress: currClass.teachingProgress || '',
            attendance: attendanceData
        };
        saveState();
    }

    async function syncToGoogleSheets() {
        if (!accessToken || !state.sheetsId) return;
        const now = new Date();
        const dateStr = now.toLocaleDateString('zh-TW');
        const currClass = getCurrentClass();
        try {
            if (!window.gapi || !window.gapi.client) {
                await new Promise((resolve, reject) => {
                    gapi.load('client', {callback: resolve, onerror: reject});
                });
            }
            if (!gapi.client.sheets) {
                await gapi.client.init({
                    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
                });
            }
            const range = 'A:E';
            const values = [
                [dateStr, currClass.name, currClass.homework || '', currClass.teachingProgress || '', currClass.students.filter(s => s.arrived).length + '/' + currClass.students.length]
            ];
            await gapi.client.sheets.spreadsheets.values.append({
                spreadsheetId: state.sheetsId,
                range: range,
                valueInputOption: 'USER_ENTERED',
                resource: { values: values },
            });
            addActivity("✅ 資料已同步至 Google 試算表");
        } catch (err) {
            console.error('Sheets Sync Error:', err);
            addActivity("❌ 試算表同步失敗：" + (err.result?.error?.message || "請檢查權限及 ID"));
        }
    }

    window.restoreFromGoogleSheets = async () => {
        if (!accessToken || !state.sheetsId) {
            alert("請先連結 Google 帳號並輸入 Google Sheets ID！");
            return;
        }
        const btn = document.getElementById('btn-restore-sheets');
        if(btn) btn.innerHTML = '<i data-lucide="loader"></i> 還原中...';
        try {
            if (!window.gapi || !window.gapi.client) {
                await new Promise((resolve, reject) => {
                    gapi.load('client', {callback: resolve, onerror: reject});
                });
            }
            if (!gapi.client.sheets) {
                await gapi.client.init({
                    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
                });
            }
            // Use get without sheet prefix to read from the first sheet
            const response = await gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: state.sheetsId,
                range: 'A:E'
            });
            
            const rows = response.result.values;
            if (!rows || rows.length === 0) {
                alert("找不到資料。試算表可能是空的。");
                return;
            }
            
            const currClass = getCurrentClass();
            let lastClassRow = null;
            for (let i = rows.length - 1; i >= 0; i--) {
                const row = rows[i];
                if (row[1] === currClass.name) {
                    lastClassRow = row;
                    break;
                }
            }
            if (lastClassRow) {
                if(lastClassRow[2]) currClass.homework = lastClassRow[2];
                if(lastClassRow[3]) currClass.teachingProgress = lastClassRow[3];
                saveState();
                renderCommunicationBook();
                updateDashboard();
                addActivity(`✅ 從試算表還原 ${currClass.name} 資料成功`);
                alert(`已成功從 Google 試算表還原 ${currClass.name} 的資料！`);
            } else {
                alert("在試算表中找不到目前班級的紀錄！");
            }
        } catch (err) {
            console.error('Sheets Restore Error:', err);
            alert("從試算表還原失敗：" + (err.result?.error?.message || err.message));
        } finally {
            if(btn) btn.innerHTML = '<i data-lucide="download-cloud"></i> 從雲端還原';
            if(typeof lucide !== 'undefined') lucide.createIcons();
        }
    };

    function renderHistory() {
        const datePicker = document.getElementById('history-date-picker');
        const classSelector = document.getElementById('history-class-select');
        const displayArea = document.getElementById('history-display-area');
        if (!datePicker || !classSelector || !displayArea) return;
        if (!datePicker.value) datePicker.value = new Date().toISOString().split('T')[0];
        const selectedDate = datePicker.value;
        const classesOnDate = state.history[selectedDate] || {};
        const prevSelectedClass = classSelector.value;
        classSelector.innerHTML = '';
        Object.keys(classesOnDate).forEach(id => {
            const opt = document.createElement('option');
            opt.value = id;
            opt.textContent = classesOnDate[id].className;
            classSelector.appendChild(opt);
        });
        if (prevSelectedClass && classesOnDate[prevSelectedClass]) classSelector.value = prevSelectedClass;
        const selectedClassId = classSelector.value;
        const data = classesOnDate[selectedClassId];
        if (!data) {
            displayArea.innerHTML = '<div class="empty-state">該日期尚無紀錄</div>';
            return;
        }
        displayArea.innerHTML = `
            <div class="card" style="margin-bottom: 1.5rem;">
                <h3>今日功課</h3>
                <div style="white-space: pre-wrap; margin-top: 0.5rem; padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 8px;">${data.homework || '無紀錄'}</div>
            </div>
            <div class="card" style="margin-bottom: 1.5rem;">
                <h3>教學進度</h3>
                <div style="white-space: pre-wrap; margin-top: 0.5rem; padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 8px;">${data.teachingProgress || '無紀錄'}</div>
            </div>
            <div class="card">
                <h3>出勤狀況</h3>
                <div style="margin-top: 1rem; display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 0.5rem;">
                    ${data.attendance.map(s => `
                        <div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 6px; display: flex; justify-content: space-between;">
                            <span>${s.seat}. ${s.name}</span>
                            <span style="color: ${s.status === '缺席' ? 'var(--danger)' : (s.status.includes('遲到') ? 'var(--warning)' : 'var(--success)')}">${s.status}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }


    function addActivity(msg) {
        const currClass = getCurrentClass();
        if(!currClass) return;
        if (!currClass.activities) currClass.activities = [];
        const time = new Date().toLocaleTimeString('zh-TW', { hour12: false });
        currClass.activities.unshift({ time, msg });
        if (currClass.activities.length > 50) currClass.activities.pop();
        if (typeof renderActivities === 'function') renderActivities();
        saveState();
    }

    function updateDashboard() {
        const currClass = getCurrentClass();
        if(!currClass) return;
        
        const totalEl = document.getElementById('stat-total-students');
        const goodEl = document.getElementById('stat-good-behavior');
        const missingEl = document.getElementById('stat-missing-hw');
        
        if(totalEl) totalEl.textContent = currClass.students.length;
        if(goodEl) goodEl.textContent = currClass.students.filter(s => s.goodBehavior).length;
        if(missingEl) missingEl.textContent = currClass.students.filter(s => s.missingHW).length;
        
        if(elements && elements.brandName) elements.brandName.textContent = state.brandName;
        
        if(elements && elements.hwInput) elements.hwInput.value = currClass.homework || '';
        if(elements && elements.progInput1) elements.progInput1.value = currClass.teachingProgress || '';
        if(elements && elements.progInput2) elements.progInput2.value = currClass.teachingProgress || '';
        
        renderActivities();
    }

    function renderActivities() {
        const listContainer = document.getElementById('activity-list');
        if (!listContainer) return;
        const currClass = getCurrentClass();
        if(!currClass) return;
        const acts = currClass.activities || [];
        listContainer.innerHTML = acts.length ? 
            acts.map(a => `<div style="padding:0.5rem 0; border-bottom:1px solid rgba(255,255,255,0.05); display:flex; justify-content:space-between;"><span>${a.msg}</span><small style="color:var(--text-muted)">${a.time}</small></div>`).join('') :
            '<div class="empty-state">尚無活動紀錄</div>';
    }

    function renderCommunicationBook() {
        const currClass = getCurrentClass();
        if(!currClass) return;
        const contentDiv = document.getElementById('blackboard-content');
        if (!contentDiv) return;

        contentDiv.className = `blackboard ${state.commWritingMode} font-${state.commFont}`;
        
        // Update button labels via the button elements (use btn id, then find inner span)
        const writingModeBtn = document.getElementById('btn-toggle-writing-mode');
        const zhuyinBtn = document.getElementById('btn-toggle-zhuyin');
        const attBtn = document.getElementById('btn-toggle-comm-attendance');
        const attContainer = document.getElementById('comm-attendance-container');

        if(writingModeBtn) { const lbl = writingModeBtn.querySelector('.btn-icon-label'); if(lbl) lbl.textContent = state.commWritingMode === 'horizontal' ? '切換直書' : '切換橫書'; }
        if(zhuyinBtn) { const lbl = zhuyinBtn.querySelector('.btn-icon-label'); if(lbl) lbl.textContent = '注音'; }
        if(attBtn) { const lbl = attBtn.querySelector('.btn-icon-label'); if(lbl) lbl.textContent = `簽到:${state.commShowAttendance ? '開' : '關'}`; }
        if(attContainer) attContainer.style.display = state.commShowAttendance ? 'flex' : 'none';
        
        const fontSelector = document.getElementById('select-blackboard-font');
        if (fontSelector) fontSelector.value = state.commFont;

        if(typeof lucide !== 'undefined') lucide.createIcons();

        const rawText = currClass.homework || '尚未輸入功課';

        if (document.activeElement !== contentDiv) {
            contentDiv.style.fontSize = `${state.commFontSize}rem`;
            if (!state.commShowZhuyin) {
                // Plain HTML escaping and wrap alphanumeric with .tcy
                let escapedHtml = rawText
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');
                    
                escapedHtml = escapedHtml.replace(/([A-Za-z0-9.\-\/]+)/g, '<span class="tcy">$1</span>');
                escapedHtml = escapedHtml.replace(/([\u4e00-\u9fa5\u3400-\u4dbf])/g, '<span class="char-box">$1</span>');
                escapedHtml = escapedHtml.replace(/\n/g, '<br>');
                
                escapedHtml = escapedHtml.replace(/✱([\s\S]*?)✱/g, '<span style="font-weight:900; -webkit-text-stroke: 1px currentColor;">$1</span>');
                
                contentDiv.innerHTML = escapedHtml;
            } else {
                // With zhuyin ruby annotation on CJK mapping
                let html = '';
                const lines = rawText.split('\n');
                let charIdx = 0; // track global character index
                lines.forEach((line, li) => {
                    if (li > 0) html += '<br>';
                    let i = 0;
                    while(i < line.length) {
                        const m = line.substring(i).match(/^([A-Za-z0-9.\-\/]+)/);
                        if (m) {
                            html += `<span class="tcy">${m[1]}</span>`;
                            i += m[1].length;
                            charIdx += m[1].length;
                        } else {
                            const ch = line[i];
                            if (ch === '✱') {
                                html += ch;
                            } else if (/[\u4e00-\u9fa5\u3400-\u4dbf]/.test(ch)) {
                                const override = getZhuyinForChar(ch, charIdx);
                                const isPolyphone = POLYPHONE_MAP[ch] && POLYPHONE_MAP[ch].length > 1;
                                const polyClass = isPolyphone ? 'polyphone-char' : '';
                                const polyStyle = isPolyphone ? ' style="cursor:pointer; border-bottom: 2px dotted rgba(255,200,0,0.5);"' : '';
                                if (override) {
                                    // Use standard font for base char to remove Bpmf Huninn's default zhuyin overlap
                                    html += `<ruby class="${polyClass}" data-char="${ch}" data-idx="${charIdx}"${polyStyle}><span style="font-family: 'Noto Sans TC', sans-serif;">${ch}</span><rt>${override}</rt></ruby>`;
                                } else {
                                    html += `<ruby class="${polyClass}" data-char="${ch}" data-idx="${charIdx}"${polyStyle}>${ch}<rt></rt></ruby>`;
                                }
                            } else {
                                html += ch === '&' ? '&amp;' : ch === '<' ? '&lt;' : ch;
                            }
                            i++;
                            charIdx++;
                        }
                    }
                });
                
                html = html.replace(/✱([\s\S]*?)✱/g, '<span style="font-weight:900; -webkit-text-stroke: 1px currentColor;">$1</span>');
                
                contentDiv.innerHTML = html;

                // Attach click handlers for polyphone characters
                contentDiv.querySelectorAll('.polyphone-char').forEach(ruby => {
                    ruby.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const ch = ruby.dataset.char;
                        const idx = parseInt(ruby.dataset.idx);
                        showZhuyinPicker(ruby, ch, idx);
                    });
                });
            }
        }
    }

    function renderCommAttendance() {
        const currClass = getCurrentClass();
        if(!currClass) return;
        const grid = document.getElementById('comm-attendance-grid');
        if (!grid) return;
        grid.innerHTML = '';
        state.commCols = state.commCols || 4;
        grid.style.gridTemplateColumns = `repeat(${state.commCols}, 1fr)`;

        currClass.students.forEach(s => {
            const box = document.createElement('div');
            box.className = `comm-student-box ${s.arrived ? 'arrived' : ''} ${s.absent ? 'absent' : ''}`;
            box.innerHTML = `
                <span class="seat-no">${s.seatNo}</span>
                <span class="name">${s.name}</span>
            `;
            box.onclick = () => {
                if (!s.arrived && !s.absent) {
                    window.attTog(s.id, 'arrived');
                } else if (s.arrived) {
                    window.attTog(s.id, 'arrived');
                    window.togS(s.id, 'absent');
                } else {
                    window.togS(s.id, 'absent');
                }
                renderCommAttendance();
            };
            grid.appendChild(box);
        });
    }

    function renderStudents(filter = '') {
        const currClass = getCurrentClass();
        if(!currClass || !elements.studentGrid) return;
        elements.studentGrid.innerHTML = '';
        const list = currClass.students.filter(s => s.name.includes(filter) || s.seatNo.toString().includes(filter));
        
        list.forEach(s => {
            const card = document.createElement('div');
            card.className = 'student-card';
            const btn4Html = state.classBtn4 ? `<button class="btn-secondary" style="font-size:0.75rem; padding:0.3rem" onclick="window.togS(${s.id},'discipline2')">${state.classBtn4}</button>` : '';
            const badge4Html = state.classBtn4 && s.discipline2 ? `<span class="badge" style="color:var(--warning); font-size:0.75rem">${state.classBtn4}</span>` : '';
            card.innerHTML = `
                <div class="avatar">${s.name[0]}</div>
                <h4>${s.name}</h4>
                <div class="seat-no">座號: ${s.seatNo}</div>
                <div class="badges" style="min-height:20px; margin-top:0.3rem; display:flex; flex-wrap:wrap; justify-content:center; gap:2px;">
                    ${s.missingHW ? '<span class="badge" style="color:var(--danger); font-size:0.75rem">' + state.classBtn1 + '</span>' : ''}
                    ${s.goodBehavior ? '<span class="badge" style="color:var(--success); font-size:0.75rem">' + state.classBtn2 + '</span>' : ''}
                    ${s.discipline ? '<span class="badge" style="color:var(--primary); font-size:0.75rem">' + state.classBtn3 + '</span>' : ''}
                    ${badge4Html}
                </div>
                <div class="score-line" style="display:flex; justify-content:space-between; align-items:center; margin:0.6rem 0; background:rgba(0,0,0,0.1); padding:0.3rem; border-radius:8px;">
                    <button class="btn-secondary" style="padding:0.2rem 0.5rem; border:none; background:var(--danger); color:white; font-size:0.8rem;" onclick="window.modS(${s.id},-1)">-</button>
                    <strong style="font-size:1.2rem">${s.score}</strong>
                    <button class="btn-secondary" style="padding:0.2rem 0.5rem; border:none; background:var(--success); color:white; font-size:0.8rem;" onclick="window.modS(${s.id},1)">+</button>
                </div>
                <div class="actions" style="display:grid; grid-template-columns:1fr 1fr; gap:0.3rem; margin-bottom:0.4rem;">
                    <button class="btn-secondary" style="font-size:0.75rem; padding:0.3rem" onclick="window.togS(${s.id},'missingHW')">${state.classBtn1}</button>
                    <button class="btn-secondary" style="font-size:0.75rem; padding:0.3rem" onclick="window.togS(${s.id},'goodBehavior')">${state.classBtn2}</button>
                    <button class="btn-secondary" style="font-size:0.75rem; padding:0.3rem" onclick="window.togS(${s.id},'discipline')">${state.classBtn3}</button>
                    ${btn4Html}
                </div>
                <input type="text" class="custom-select" placeholder="備註..." value="${s.note || ''}" style="margin-top:0.3rem; width:100%; border:none; background:rgba(255,255,255,0.05); color:white; font-size:0.75rem; padding:0.3rem; border-radius:6px;" onchange="window.saveNote(${s.id}, this.value)">
            `;
            elements.studentGrid.appendChild(card);
        });
        const groupsTab = document.getElementById('groups-tab');
        if(groupsTab && groupsTab.classList.contains('active')) renderGroups();
    }

    function renderAttendance(filter = '') {
        const currClass = getCurrentClass();
        if(!currClass) return;
        const grid = document.getElementById('attendance-grid');
        if(!grid) return;
        grid.innerHTML = '';
        const list = currClass.students.filter(s => s.name.includes(filter) || s.seatNo.toString().includes(filter));
        
        list.forEach(s => {
            const card = document.createElement('div');
            card.className = 'student-card';
            
            let arriveBadge = '';
            if (s.absent) {
                arriveBadge = `<span class="badge" style="color:var(--danger); font-size:0.75rem">🚪 ${state.attBtn3}</span>`;
            } else if (s.arrived) {
                if (s.arriveTimeStr > state.arrivalTime) {
                    arriveBadge = `<span class="badge" style="color:var(--warning); font-size:0.75rem">⏰遲到 (${s.arriveTimeStr})</span>`;
                } else {
                    arriveBadge = `<span class="badge" style="color:var(--success); font-size:0.75rem">✅已到 (${s.arriveTimeStr})</span>`;
                }
            }

            card.innerHTML = `
                <div class="avatar" style="background:var(--secondary)">${s.name[0]}</div>
                <h4>${s.name}</h4>
                <div class="seat-no">座號: ${s.seatNo}</div>
                <div class="badges" style="min-height:20px; margin-top:0.3rem; display:flex; flex-wrap:wrap; justify-content:center; gap:2px;">
                    ${arriveBadge}
                    ${s.custom1 ? '<span class="badge" style="color:var(--accent); font-size:0.75rem">' + state.customTag1 + '</span>' : ''}
                    ${s.custom2 ? '<span class="badge" style="color:var(--accent); font-size:0.75rem">' + state.customTag2 + '</span>' : ''}
                    ${s.custom3 ? '<span class="badge" style="color:var(--accent); font-size:0.75rem">' + state.customTag3 + '</span>' : ''}
                </div>
                
                <div class="actions" style="display:grid; grid-template-columns:1fr 1fr; gap:0.3rem; margin-top:0.8rem;">
                    <button class="btn-secondary" style="font-size:0.75rem; padding:0.3rem; background:${s.arrived ? 'var(--success)' : ''}; color:${s.arrived ? 'white' : ''}" onclick="window.attTog(${s.id},'arrived')">${s.arrived ? '✔️' + state.attBtn1 : state.attBtn1}</button>
                    <button class="btn-secondary" style="font-size:0.75rem; padding:0.3rem; background:${s.absent ? 'var(--danger)' : ''}; color:${s.absent ? 'white' : ''}" onclick="window.togS(${s.id},'absent'); window.renderAttendance();">${s.absent ? '✔️' + state.attBtn3 : state.attBtn3}</button>
                    ${state.customTag1 ? `<button class="btn-secondary" style="font-size:0.75rem; padding:0.3rem; background:${s.custom1 ? 'var(--accent)' : ''}; color:${s.custom1 ? 'white' : ''}" onclick="window.attTog(${s.id},'custom1')">${s.custom1 ? '✔️' + state.customTag1 : state.customTag1}</button>` : ''}
                    ${state.customTag2 ? `<button class="btn-secondary" style="font-size:0.75rem; padding:0.3rem; background:${s.custom2 ? 'var(--accent)' : ''}; color:${s.custom2 ? 'white' : ''}" onclick="window.attTog(${s.id},'custom2')">${s.custom2 ? '✔️' + state.customTag2 : state.customTag2}</button>` : ''}
                    ${state.customTag3 ? `<button class="btn-secondary" style="font-size:0.75rem; padding:0.3rem; background:${s.custom3 ? 'var(--accent)' : ''}; color:${s.custom3 ? 'white' : ''}" onclick="window.attTog(${s.id},'custom3')">${s.custom3 ? '✔️' + state.customTag3 : state.customTag3}</button>` : ''}
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function renderGroups() {
        const currClass = getCurrentClass();
        if(!currClass) return;
        const groups = currClass.groups || [];
        const container = document.getElementById('groups-container');
        if(!container) return;
        
        container.innerHTML = '';
        if(groups.length === 0) {
            container.innerHTML = '<div class="empty-state">設定組數後開始分組</div>';
            return;
        }
        groups.forEach((group, idx) => {
            const groupScore = currClass.groupScores ? (currClass.groupScores[idx] || 0) : 0;
            const gDiv = document.createElement('div');
            gDiv.className = 'group-box';
            let html = `<div class="group-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:0.5rem; gap:0.5rem; flex-wrap:wrap;">
                <div style="flex:1; min-width:120px;">
                    <h4 style="color:var(--secondary); margin:0; border:none; padding:0;">第 ${idx + 1} 組 (${group.length}人)</h4>
                    <div style="color:var(--warning); font-weight:bold; font-size:1.1rem; margin-top:0.2rem;">總分: ${groupScore}</div>
                </div>
                <div style="display:flex; gap:0.4rem;">
                    <button class="btn-primary" onclick="window.modGroupS(${idx}, 1)" style="padding:0.4rem 0.8rem; background:var(--success); font-size:1.1rem; width: 36px; display:flex; justify-content:center; align-items:center;">+</button>
                    <button class="btn-primary" onclick="window.modGroupS(${idx}, -1)" style="padding:0.4rem 0.8rem; background:var(--danger); font-size:1.1rem; width: 36px; display:flex; justify-content:center; align-items:center;">-</button>
                </div>
            </div>`;
            group.forEach(sRef => {
                const s = currClass.students.find(x => x.id === sRef.id) || sRef;
                html += `<div class="group-member">
                    <div style="flex:1; min-width:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; font-size:1.1rem;">
                        <span style="color:var(--text-muted); font-size:0.9rem; margin-right:6px;">${s.seatNo}.</span>
                        <span style="font-weight:600;">${s.name}</span>
                        <span style="color:var(--success); margin-left:8px; font-weight:bold;">(${s.score})</span>
                    </div>
                    <div style="display:flex; gap:0.4rem; flex-shrink:0;">
                        ${state.groupEditMode ? `<button class="btn-secondary" onclick="window.moveStudentToGroup(${s.id})" style="padding:4px 10px; font-size:0.8rem;" title="移動分組">移</button>` : ''}
                        ${state.groupShowButtons ? `
                            <button class="btn-primary" onclick="window.modS(${s.id}, 1)" style="padding:4px 12px; background:var(--success); border:none; font-size:1rem;">+</button>
                            <button class="btn-primary" onclick="window.modS(${s.id}, -1)" style="padding:4px 12px; background:var(--danger); border:none; font-size:1rem;">-</button>
                        ` : ''}
                    </div>
                </div>`;
            });
            gDiv.innerHTML = html;
            container.appendChild(gDiv);
        });
        if(typeof lucide !== 'undefined') lucide.createIcons();
    }
    const elements = {
        tabs: document.querySelectorAll('.nav-links li'),
        tabContents: document.querySelectorAll('.tab-content'),
        brandName: document.getElementById('brand-name'),
        mainTitle: document.getElementById('header-page-title'),
        classSelect: document.getElementById('class-select'),
        studentGrid: document.getElementById('student-grid'),
        timerDisplay: document.getElementById('global-timer-display'),
        timerStart: document.getElementById('btn-timer-start'),
        timerReset: document.getElementById('btn-timer-reset'),
        curDate: document.getElementById('current-date'),
        curTime: document.getElementById('current-time'),
        activityList: document.getElementById('activity-list'),
        hwInput: document.getElementById('homework-input'),
        hwPreview: document.getElementById('homework-preview'),
        hwSummary: document.getElementById('hw-summary-box'),
        progInput1: document.getElementById('teaching-progress-input'),
        progInput2: document.getElementById('teaching-progress-input-2'),
        themeBtns: document.querySelectorAll('.theme-btn'),
        body: document.body,
        brandInput: document.getElementById('settings-brand-name'),
        linkPointsBtn: document.getElementById('btn-toggle-link-points')
    };

    // --- Navigation & Classes ---
    elements.tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            elements.tabs.forEach(t => t.classList.remove('active'));
            elements.tabContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(`${target}-tab`).classList.add('active');
            elements.mainTitle.textContent = tab.querySelector('span').textContent;
            
            // Sync teaching progress textarea when switching tabs
            const currClass = getCurrentClass();
            if(target === 'students' || target === 'dashboard'){
                elements.progInput1.value = currClass.teachingProgress || '';
                elements.progInput2.value = currClass.teachingProgress || '';
            }
            if (target === 'attendance') {
                if (typeof renderAttendance === 'function') renderAttendance();
            }
            if (target === 'communication') {
                renderCommunicationBook();
                renderCommAttendance();
            }
            if (target === 'history') {
                renderHistory();
            }
            if (target === 'weblinks') {
                renderWeblinks();
            }
            if (target === 'course-attendance') {
                if (typeof renderCourseAttendanceTab === 'function') renderCourseAttendanceTab();
            }
            if (target === 'groups') {
                renderGroups();
            }
        });
    });

    function renderClassSelect() {
        elements.classSelect.innerHTML = '';
        state.classes.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.id;
            opt.textContent = c.name;
            if (c.id === state.currentClassId) opt.selected = true;
            elements.classSelect.appendChild(opt);
        });
    }

    elements.classSelect.onchange = (e) => {
        state.currentClassId = e.target.value;
        addActivity(`切換班級：${getCurrentClass().name}`);
        if(window.currentEditDate) loadDataForDate(window.currentEditDate);
        renderStudents();
        renderGroups();
        if (typeof renderAttendance === 'function') renderAttendance();
        updateDashboard();
        saveState();
    };

    document.getElementById('btn-add-class').onclick = () => {
        const name = prompt("請輸入新班級名稱：");
        if (name) {
            const newClass = {
                id: 'class_' + Date.now(),
                name,
                students: [],
                teachingProgress: '',
                homework: '請新增功課'
            };
            state.classes.push(newClass);
            state.currentClassId = newClass.id;
            renderClassSelect();
            renderStudents();
            updateDashboard();
            saveState();
            addActivity(`新增班級：${name}`);
        }
    };

    const btnDeleteClass = document.getElementById('btn-delete-class');
    if (btnDeleteClass) {
        btnDeleteClass.onclick = () => {
            const currClass = getCurrentClass();
            if (!currClass) return;
            if (state.classes.length <= 1) {
                alert('這是最後一個班級，無法刪除。若需清空請使用下方「清除所有資料」！');
                return;
            }
            if (confirm(`⚠️ 警告：確定要刪除「${currClass.name}」及其所有學生資料嗎？此動作將無法復原！`)) {
                state.classes = state.classes.filter(c => c.id !== currClass.id);
                state.currentClassId = state.classes[0].id;
                
                renderClassSelect();
                if(window.currentEditDate) loadDataForDate(window.currentEditDate);
                renderStudents();
                renderGroups();
                if (typeof renderAttendance === 'function') renderAttendance();
                updateDashboard();
                saveState();
                
                alert(`已刪除班級：${currClass.name}`);
                document.getElementById('settings-modal').style.display = 'none';
            }
        };
    }

    const updateClock = () => {
        const now = new Date();
        if(elements.curDate) elements.curDate.textContent = now.toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
        if(elements.curTime) elements.curTime.textContent = now.toLocaleTimeString('zh-TW', { hour12: false });
        
        if (now.getSeconds() === 0) {
            const settings = typeof getCourseAttSettings === 'function' ? getCourseAttSettings() : [];
            let needsRender = false;
            settings.forEach(setting => {
                if (setting.resetMins > 0) {
                    const [lh, lm] = setting.lateTime.split(':').map(Number);
                    const resetTimeMins = lh * 60 + lm + setting.resetMins;
                    const currMins = now.getHours() * 60 + now.getMinutes();
                    if (currMins === resetTimeMins) {
                        state.classes.forEach(c => {
                            if (c.courseAtt && c.courseAtt[setting.period]) {
                                c.courseAtt[setting.period] = {};
                                needsRender = true;
                            }
                        });
                    }
                }
            });
            if (needsRender) {
                saveState();
                if (document.getElementById('course-attendance-tab') && document.getElementById('course-attendance-tab').classList.contains('active')) {
                    if (typeof renderCourseAttendanceGrid === 'function') renderCourseAttendanceGrid();
                }
            }
        }
    };
    setInterval(updateClock, 1000);
    updateClock();

    const formatTime = (s) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    };

    elements.timerStart.onclick = () => {
        if (state.timer.active) {
            clearInterval(state.timer.interval);
            state.timer.active = false;
            elements.timerStart.innerHTML = '<i data-lucide="play"></i>';
        } else {
            state.timer.active = true;
            elements.timerStart.innerHTML = '<i data-lucide="pause"></i>';
            state.timer.interval = setInterval(() => {
                state.timer.seconds++;
                elements.timerDisplay.textContent = formatTime(state.timer.seconds);
            }, 1000);
        }
        lucide.createIcons();
    };

    elements.timerReset.onclick = () => {
        clearInterval(state.timer.interval);
        state.timer.active = false;
        state.timer.seconds = 0;
        elements.timerDisplay.textContent = "00:00";
        elements.timerStart.innerHTML = '<i data-lucide="play"></i>';
        lucide.createIcons();
    };

    function updateLinkPointsUI() {
        if (!elements.linkPointsBtn) return;
        if (state.linkGroupPoints) {
            elements.linkPointsBtn.innerHTML = '<i data-lucide="link-2"></i> <span>分組連動: 開</span>';
            elements.linkPointsBtn.classList.add('linked');
            elements.linkPointsBtn.classList.remove('btn-secondary');
            elements.linkPointsBtn.classList.add('btn-primary');
        } else {
            elements.linkPointsBtn.innerHTML = '<i data-lucide="link-2-off"></i> <span>分組連動: 關</span>';
            elements.linkPointsBtn.classList.remove('linked');
            elements.linkPointsBtn.classList.remove('btn-primary');
            elements.linkPointsBtn.classList.add('btn-secondary');
        }
        lucide.createIcons();
    }

    if (elements.linkPointsBtn) {
        elements.linkPointsBtn.onclick = () => {
            state.linkGroupPoints = !state.linkGroupPoints;
            updateLinkPointsUI();
            saveState();
            addActivity(`分組連動已${state.linkGroupPoints ? '開啟' : '關閉'}`);
        };
    }
    updateLinkPointsUI();


    window.moveStudentToGroup = (id) => {
        const currClass = getCurrentClass();
        const s = currClass.students.find(x => x.id === id);
        if(!s) return;
        const target = prompt(`將 ${s.name} 移動到第幾組？(1-${currClass.groups.length})`);
        const gIdx = parseInt(target) - 1;
        if(isNaN(gIdx) || gIdx < 0 || gIdx >= currClass.groups.length) return;

        // Remove from old groups
        currClass.groups.forEach(g => {
            const idx = g.findIndex(x => x.id === id);
            if(idx > -1) g.splice(idx, 1);
        });
        // Add to new group
        currClass.groups[gIdx].push(s);
        renderGroups();
        renderStudents();
        saveState();
        addActivity(`將 ${s.name} 移動至第 ${gIdx+1} 組`);
    };

    window.modS = (id, val) => {
        if (state.scoreLocked) {
            alert("分數操作已鎖定！若需修改請先解鎖。");
            return;
        }
        const currClass = getCurrentClass();
        const s = currClass.students.find(x => x.id === id);
        if (s) {
            s.score += val;
            if (val > 0) {
                confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
                playSound('score-up');
            } else {
                playSound('score-down');
            }
            addActivity(`${s.name} 個人分數 ${val > 0 ? '+' : ''}${val}`);
            
            // Sync with group score IF linked
            if (state.linkGroupPoints && currClass.groups) {
                const gIdx = currClass.groups.findIndex(g => g.find(x => x.id === id || (x.seatNo === s.seatNo && x.name === s.name)));
                if (gIdx !== -1) {
                    if (!currClass.groupScores) currClass.groupScores = [];
                    currClass.groupScores[gIdx] = (currClass.groupScores[gIdx] || 0) + val;
                    addActivity(`第 ${gIdx+1} 組 連帶同步 ${val > 0 ? '+' : ''}${val}`);
                }
            }
            
            renderStudents();
            renderGroups();
            saveState();
        }
    };

    window.togS = (id, field) => {
        const currClass = getCurrentClass();
        const s = currClass.students.find(x => x.id === id);
        if (s) {
            s[field] = !s[field];
            renderStudents();
            
            if (field === 'missingHW') {
                addActivity(`${s.name} 被標記為 ${s.missingHW ? state.classBtn1 : '取消' + state.classBtn1}`);
            } else if (field === 'goodBehavior') {
                addActivity(`${s.name} 被標記為 ${s.goodBehavior ? state.classBtn2 : '取消' + state.classBtn2}`);
            } else if (field === 'discipline') {
                addActivity(`${s.name} 被標記為 ${s.discipline ? state.classBtn3 : '取消' + state.classBtn3}`);
            } else if (field === 'absent') {
                addActivity(`${s.name} 被標記為 ${s.absent ? state.classBtn4 : '取消' + state.classBtn4}`);
            }
            
            updateDashboard();
            saveState();
        }
    };

    window.saveNote = (id, val) => {
        const currClass = getCurrentClass();
        const s = currClass.students.find(x => id === id);
        if (s) {
            s.note = val;
            addActivity(`${s.name} 備註更新：${val || '清空'}`);
            saveState();
        }
    };

    document.getElementById('student-search-input').oninput = (e) => renderStudents(e.target.value);

    window.renderAttendance = renderAttendance;

    window.attTog = (id, type) => {
        const currClass = getCurrentClass();
        const s = currClass.students.find(x => x.id === id);
        if(!s) return;

        if (type === 'arrived') {
            if (!s.arrived) {
                if(s.absent) {
                    s.absent = false;
                }
                const now = new Date();
                s.arrived = true;
                s.arriveTimeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
                if (s.arriveTimeStr > state.arrivalTime) {
                    addActivity(`${s.name} 簽到 (⏰遲到 - ${s.arriveTimeStr})`);
                    // 遲到也播放音效
                    if (state.checkinSoundEnabled && typeof playSound === 'function') {
                        playSound('checkin-late');
                    }
                } else {
                    addActivity(`${s.name} 簽到 (✅ ${s.arriveTimeStr})`);
                    if (typeof confetti === 'function') {
                        const r = Math.random();
                        if (r < 0.33) {
                            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                        } else if (r < 0.66) {
                            confetti({ particleCount: 50, spread: 100, origin: { y: 0.6 }, shapes: ['star'], colors: ['#FFE400', '#FFBD00', '#E89400', '#FFCA6C', '#FDFFB8'] });
                        } else {
                            confetti({ particleCount: 150, spread: 60, origin: { y: 0.6 }, drift: 0 }); 
                        }
                        // 準時簽到音效：coin05 / powerup03 隨機
                        if (state.checkinSoundEnabled && typeof playSound === 'function') {
                            const snds = ['checkin-ontime-1', 'checkin-ontime-2'];
                            playSound(snds[Math.floor(Math.random() * snds.length)]);
                        }
                    }
                }
            } else {
                s.arrived = false;
                addActivity(`取消 ${s.name} 簽到`);
            }
        } else if (type === 'custom1') {
            s.custom1 = !s.custom1;
        } else if (type === 'custom2') {
            s.custom2 = !s.custom2;
        } else if (type === 'custom3') {
            s.custom3 = !s.custom3;
        }
        renderAttendance();
        saveState();
    };

    document.getElementById('attendance-search-input').oninput = (e) => {
        if (typeof window.renderAttendance === 'function') window.renderAttendance(e.target.value);
    };

    document.getElementById('btn-export-attendance').onclick = () => {
        const currClass = getCurrentClass();
        const data = [
            ["座號", "姓名", "出席狀態", "簽到時間", state.attBtn3, state.customTag1, state.customTag2, state.customTag3]
        ];
        
        currClass.students.forEach(s => {
            let status = "未點名";
            if (s.absent) status = "缺席";
            else if (s.arrived) {
                if (s.arriveTimeStr > state.arrivalTime) status = "遲到";
                else status = "準時";
            }
            data.push([
                s.seatNo,
                s.name,
                status,
                s.arriveTimeStr || "-",
                s.brushedTeeth ? "是" : "否",
                s.custom1 ? "是" : "否",
                s.custom2 ? "是" : "否",
                s.custom3 ? "是" : "否"
            ]);
        });
        
        const worksheet = XLSX.utils.aoa_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "今日點名");
        XLSX.writeFile(workbook, `${currClass.name}_點名紀錄_${new Date().toLocaleDateString().replace(/\//g, '')}.xlsx`);
        addActivity("匯出了今日點名紀錄 (Excel)");
    };

    document.getElementById('btn-reset-attendance').onclick = () => {
        if(confirm("確定要重置全班今日點名與標籤資料嗎？")) {
            const currClass = getCurrentClass();
            currClass.students.forEach(s => {
                s.arrived = false;
                s.arriveTimeStr = null;
                s.absent = false;
                s.brushedTeeth = false;
                s.custom1 = false;
                s.custom2 = false;
                s.custom3 = false;
            });
            addActivity("已重置今日點名資料");
            renderAttendance();
            renderStudents();
            saveState();
        }
    };
    
    document.getElementById('btn-add-student').onclick = () => {
        const seatNo = prompt("請輸入座號：");
        const name = prompt("請輸入學生姓名：");
        if (name && seatNo) {
            const currClass = getCurrentClass();
            const id = Date.now();
            currClass.students.push({ id, seatNo: parseInt(seatNo), name, score:0, missingHW:false, goodBehavior:false });
            
            // Sort by seat number
            currClass.students.sort((a,b) => a.seatNo - b.seatNo);
            
            addActivity(`新增學生：${seatNo}號 ${name}`);
            renderStudents();
            saveState();
        }
    };

    document.getElementById('btn-reset-scores').onclick = () => {
        if (state.scoreLocked) {
            alert("分數操作已鎖定！若需重置請先解鎖。");
            return;
        }
        if(confirm("確定要將全班分數歸零嗎？")) {
            const currClass = getCurrentClass();
            currClass.students.forEach(s => s.score = 0);
            if(currClass.groupScores) currClass.groupScores = [];
            addActivity("已重置全班分數（含小組）");
            renderStudents();
            saveState();
        }
    };

    document.getElementById('btn-download-template').onclick = () => {
        const worksheet = XLSX.utils.aoa_to_sheet([
            ["班級", "座號", "姓名", "小組(1~10)"],
            ["101", 1, "林小明", 1],
            ["101", 2, "陳美美", 2],
            ["108", 1, "王大同", ""]
        ]);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "學生名單");
        XLSX.writeFile(workbook, "學生名單範例.xlsx");
        addActivity("下載了Excel範例檔");
    };

    // --- Excel Import ---
    document.getElementById('excel-import-students').onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                const data = evt.target.result;
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
                
                let imported = 0;
                let firstNewClassId = null;
                
                rows.forEach((row, idx) => {
                    // Skip if empty or header row
                    const clsName = String(row[0]).trim();
                    if (!clsName || clsName === '班級') return;

                    const seatNo = parseInt(String(row[1]).trim());
                    const name = row[2] ? String(row[2]).trim() : '';
                    const groupNum = row[3] ? parseInt(String(row[3]).trim()) : null;
                    
                    if (!isNaN(seatNo) && name) {
                        let targetClass = state.classes.find(c => c.name === clsName);
                        if(!targetClass) {
                            targetClass = {
                                id: 'class_' + Date.now() + Math.random(),
                                name: clsName,
                                students: [],
                                teachingProgress: '',
                                homework: '請新增功課'
                            };
                            state.classes.push(targetClass);
                            if(!firstNewClassId) firstNewClassId = targetClass.id;
                        }
                        
                        let student = targetClass.students.find(s => s.seatNo === seatNo);
                        if(!student){
                            student = {
                                id: Date.now() + Math.random(),
                                seatNo,
                                name,
                                score: 0,
                                missingHW: false,
                                goodBehavior: false,
                                note: ''
                            };
                            targetClass.students.push(student);
                            targetClass.students.sort((a,b) => a.seatNo - b.seatNo);
                            imported++;
                        } else {
                            if (name) student.name = name;
                            imported++;
                        }
                            
                        // Auto assign to group
                        if (groupNum && groupNum > 0) {
                            if(!targetClass.groups) targetClass.groups = [];
                            while(targetClass.groups.length < groupNum) {
                                targetClass.groups.push([]);
                            }
                            
                            // Prevent duplicate and remove from other groups
                            if (!targetClass.groups[groupNum - 1].find(s => s.seatNo === seatNo)) {
                                targetClass.groups.forEach(g => {
                                    const idx = g.findIndex(s => s.seatNo === seatNo);
                                    if(idx !== -1) g.splice(idx, 1);
                                });
                                targetClass.groups[groupNum - 1].push(student);
                            }
                        }
                    }
                });
                
                // Cleanup empty groups
                state.classes.forEach(c => {
                    if(c.groups) c.groups = c.groups.filter(g => g.length > 0);
                });
                
                if(firstNewClassId) state.currentClassId = firstNewClassId;
                
                addActivity(`從Excel匯入了 ${imported} 位學生至相應班級`);
                renderClassSelect();
                renderStudents();
                renderGroups();
                saveState();
                alert(`成功匯入 ${imported} 筆資料！${firstNewClassId ? '\n已為您切換至新匯入的班級。' : ''}`);
            } catch (err) {
                console.error(err);
                alert("讀取Excel時發生錯誤：\n" + (err.message || "請確認格式為 A欄班級、B欄座號、C欄姓名"));
            }
        };
        reader.readAsArrayBuffer(file);
        e.target.value = ''; // reset
    };

    // Edit Students Modal Logic
    const editStudentsModal = document.getElementById('edit-students-modal');
    document.getElementById('btn-edit-students').onclick = () => {
        editStudentsModal.style.display = 'flex';
        renderEditStudentsTable();
    };
    
    window.renderEditStudentsTable = () => {
        const currClass = getCurrentClass();
        const tbody = document.querySelector('#edit-students-table tbody');
        tbody.innerHTML = '';
        
        if (currClass.students.length === 0) {
            tbody.innerHTML = '<tr><td colspan="3" class="empty-state">目前沒有學生資料</td></tr>';
            return;
        }
        
        currClass.students.forEach(s => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="number" class="custom-select" value="${s.seatNo}" style="width: 60px; padding: 0.3rem;" onchange="updateStudentInfo(${s.id}, 'seatNo', this.value)"></td>
                <td><input type="text" class="custom-select" value="${s.name}" style="width: 120px; padding: 0.3rem;" onchange="updateStudentInfo(${s.id}, 'name', this.value)"></td>
                <td>
                    <button class="btn-danger" onclick="deleteStudent(${s.id})" style="padding: 0.3rem 0.8rem; font-size: 0.9rem;">刪除</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    };
    
    window.updateStudentInfo = (id, field, val) => {
        const currClass = getCurrentClass();
        const student = currClass.students.find(s => s.id === id);
        if (student) {
            if (field === 'seatNo') student.seatNo = parseInt(val) || 0;
            if (field === 'name') student.name = val;
            currClass.students.sort((a,b) => a.seatNo - b.seatNo);
            saveState();
            renderStudents();
            renderGroups();
            updateDashboard();
        }
    };
    
    window.deleteStudent = (id) => {
        if(!confirm("確定要刪除這位學生嗎？")) return;
        const currClass = getCurrentClass();
        currClass.students = currClass.students.filter(s => s.id !== id);
        // Clean from groups
        if(currClass.groups) {
            currClass.groups.forEach(g => {
                const idx = g.findIndex(x => x.id === id);
                if(idx > -1) g.splice(idx, 1);
            });
        }
        saveState();
        renderStudents();
        renderGroups();
        updateDashboard();
        renderEditStudentsTable();
        addActivity("手動刪除了一名學生");
    };
    
    document.getElementById('btn-delete-all-students').onclick = () => {
        if(!confirm("⚠️ 警告！確定要刪除該班級「所有」學生嗎？此動作無法復原！")) return;
        const currClass = getCurrentClass();
        currClass.students = [];
        currClass.groups = [];
        currClass.groupScores = [];
        saveState();
        renderStudents();
        renderGroups();
        updateDashboard();
        renderEditStudentsTable();
        addActivity("清空了全班學生名單");
    };

    // --- Teaching Progress ---
    const saveTeachingProgress = () => {
        const currClass = getCurrentClass();
        currClass.teachingProgress = elements.progInput1.value || elements.progInput2.value;
        addActivity("更新了今日教學進度");
        saveState();
    };
    document.getElementById('btn-save-progress').onclick = () => {
        elements.progInput2.value = elements.progInput1.value;
        saveTeachingProgress();
    };
    document.getElementById('btn-save-progress-2').onclick = () => {
        elements.progInput1.value = elements.progInput2.value;
        saveTeachingProgress();
    };


    // --- Tools ---
    
    // 1. Random Picker
    const pickerModal = document.getElementById('random-picker-modal');
    const pickerAnim = document.getElementById('picker-animation');
    const pickerRes = document.getElementById('picker-result');
    const startPickBtn = document.getElementById('btn-start-picker');

    document.getElementById('tool-random-picker').onclick = () => pickerModal.style.display = 'flex';
    document.getElementById('btn-random-pick-quick').onclick = () => pickerModal.style.display = 'flex';
    
    const runPickerAnimation = (candidates, labelPrefix, formatWinnerObj, onWin) => {
        if (!candidates || candidates.length === 0) return;
        let count = 0;
        pickerAnim.textContent = "?";
        pickerRes.textContent = "等待命運的安排...";
        startPickBtn.style.display = 'none'; // hide generic start
        document.getElementById('btn-pick-again').style.display = 'none';
        
        const interval = setInterval(() => {
            const randomPick = candidates[Math.floor(Math.random() * candidates.length)];
            pickerAnim.textContent = formatWinnerObj(randomPick);
            count++;
            if (count > 20) {
                clearInterval(interval);
                const winnerObj = candidates[Math.floor(Math.random() * candidates.length)];
                const finalLabel = formatWinnerObj(winnerObj);
                pickerAnim.textContent = finalLabel;
                pickerRes.textContent = `${labelPrefix}：${finalLabel}！`;
                addActivity(`${labelPrefix}：${finalLabel}`);
                playSound('win');
                confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
                
                // Keep references for "Pick Again"
                document.getElementById('btn-pick-again').style.display = 'block';
                document.getElementById('btn-pick-again').onclick = () => {
                    runPickerAnimation(candidates, labelPrefix, formatWinnerObj, onWin);
                };
                
                if(onWin) onWin(winnerObj);
            }
        }, 100);
        playSound('bell');
    };

    startPickBtn.onclick = () => {
        // Class pick generic mode
        runPickerAnimation(
            getCurrentClass().students, 
            "幸運兒就是", 
            (s) => s.name
        );
    };

    // 2. Groups (Auto & Manual Drag Context)
    const groupsContainer = document.getElementById('groups-container');
    document.getElementById('btn-generate-groups').onclick = () => {
        const count = parseInt(document.getElementById('group-count').value);
        const currClass = getCurrentClass();
        if (isNaN(count) || count < 2 || currClass.students.length === 0) return;

        const shuffled = [...currClass.students].sort(() => 0.5 - Math.random());
        currClass.groups = Array.from({ length: count }, () => []);
        
        shuffled.forEach((s, i) => currClass.groups[i % count].push(s));
        
        renderGroups();
        addActivity(`重新分組為 ${count} 組`);
        saveState();
    };



    document.getElementById('btn-toggle-group-buttons').onclick = function() {
        state.groupShowButtons = !state.groupShowButtons;
        this.innerHTML = state.groupShowButtons ? '<i data-lucide="eye-off"></i> 顯示學生按鈕: 開' : '<i data-lucide="eye"></i> 顯示學生按鈕: 關';
        if(typeof lucide !== 'undefined') lucide.createIcons();
        renderGroups();
    };

    document.getElementById('btn-manual-grouping').onclick = function() {
        state.groupEditMode = !state.groupEditMode;
        if (state.groupEditMode) {
            this.style.background = 'var(--warning)';
            this.style.color = 'var(--bg-dark)';
            this.querySelector('span').textContent = '調整中(按此關閉)';
        } else {
            this.style.background = '';
            this.style.color = '';
            this.querySelector('span').textContent = '手動微調';
        }
        renderGroups();
    };

    window.modGroupS = (gIdx, val) => {
        if (state.scoreLocked) {
            alert("分數操作已鎖定！若需修改請先解鎖。");
            return;
        }
        const currClass = getCurrentClass();
        if(!currClass.groupScores) currClass.groupScores = new Array(currClass.groups ? currClass.groups.length : 10).fill(0);
        currClass.groupScores[gIdx] = (currClass.groupScores[gIdx] || 0) + val;
        
        if (val > 0) {
            playSound('score-up');
        } else {
            playSound('score-down');
        }
        
        if (val > 0) {
            playSound('score-up');
        } else {
            playSound('score-down');
        }
        
        // Sync with all group members IF linked
        if (state.linkGroupPoints && currClass.groups && currClass.groups[gIdx]) {
            currClass.groups[gIdx].forEach(sRef => {
                const s = currClass.students.find(x => x.id === sRef.id);
                if (s) {
                    s.score += val;
                }
            });
            renderStudents();
            addActivity(`第 ${gIdx+1} 組 全員連帶同步 ${val > 0 ? '+' : ''}${val}`);
        }
        
        renderGroups();
        saveState();
        addActivity(`第 ${gIdx+1} 組 小組分數 ${val > 0 ? '+' : ''}${val}`);
        if (val > 0) confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
    };

    document.getElementById('btn-pick-group').onclick = () => {
        const currClass = getCurrentClass();
        if(!currClass.groups || currClass.groups.length === 0) return alert('目前沒有分組資料');
        pickerModal.style.display = 'flex';
        runPickerAnimation(
            currClass.groups,
            "恭喜",
            (g) => `第 ${currClass.groups.indexOf(g) + 1} 組`
        );
    };

    document.getElementById('btn-pick-group-student').onclick = () => {
        const currClass = getCurrentClass();
        if(!currClass.groups || currClass.groups.length === 0) return alert('目前沒有分組資料');
        const validGroups = currClass.groups.filter(g => g.length > 0);
        if(validGroups.length === 0) return;
        
        let allValidStudents = [];
        validGroups.forEach((g) => {
            const gIdx = currClass.groups.indexOf(g);
            g.forEach(s => allValidStudents.push({ ...s, gLabel: gIdx + 1 }));
        });

        pickerModal.style.display = 'flex';
        runPickerAnimation(
            allValidStudents,
            "抽中組員",
            (s) => `${s.name} (第${s.gLabel}組)`
        );
    };

    // 3. Buzzer (Super Buzz - PeerJS Implementation)
    // PeerJS ICE 伺服器配置 - 增加多組 STUN 伺服器提升跨網路連線成功率
    const PEER_CONFIG = {
        config: {
            iceServers: [
                { urls: 'stun:stun.l.google.com:19302' },
                { urls: 'stun:stun1.l.google.com:19302' },
                { urls: 'stun:stun2.l.google.com:19302' },
                { urls: 'stun:stun3.l.google.com:19302' },
                { urls: 'stun:stun4.l.google.com:19302' },
                { urls: 'stun:global.stun.twilio.com:3478' }
            ]
        },
        pingInterval: 5000
    };
    let peer = null;
    let connections = [];
    let winners = [];
    let isRoundActive = false;
    let classroomId = 'SC-' + Math.floor(1000 + Math.random() * 9000);

    const connectionModal = document.getElementById('connection-modal');
    document.getElementById('btn-student-entry').onclick = () => {
        connectionModal.style.display = 'flex';
        initTeacherPeer();
    };

    const buzzerModal = document.getElementById('buzzer-modal');
    document.getElementById('tool-buzzer').onclick = () => {
        buzzerModal.style.display = 'flex';
    };

    function initTeacherPeer() {
        if(peer) return; 
        peer = new Peer(classroomId, PEER_CONFIG);
        
        peer.on('open', (id) => {
            document.getElementById('classroom-id-display').textContent = id;
            if(document.getElementById('global-classroom-id')) document.getElementById('global-classroom-id').textContent = id;
            
            const qrContainer = document.getElementById('global-qrcode');
            if(qrContainer) {
                qrContainer.innerHTML = '';
                // Update URL to point to student.html
                const p = window.location.pathname;
                const basePath = p.substring(0, p.lastIndexOf('/'));
                const studentUrl = window.location.origin + basePath + "/student.html?room=" + id;
                new QRCode(qrContainer, { text: studentUrl, width: 250, height: 250 });
            }
        });
        
        peer.on('disconnected', () => {
            console.log('Peer disconnected. Attempting to reconnect...');
            peer.reconnect();
        });

        // Add a heartbeat ping manually just in case
        setInterval(() => {
            if (peer && !peer.disconnected && !peer.destroyed) {
                connections.forEach(conn => {
                    if(conn.open) conn.send({ type: 'PING' });
                });
            }
        }, 15000);

        peer.on('connection', (conn) => {
            connections.push(conn);
            updateConnectedCount();
            
            conn.on('data', (data) => {
                const type = data.type;
                const d = data.data || {};
                
                if (type === 'JOIN') {
                    conn.studentMeta = { seat: d.seat, name: d.name };
                    updateConnectedCount();
                } else if (type === 'BUZZ_ACT' && isRoundActive) {
                    processBuzz(d.seat, d.name, conn);
                } else if (type === 'QA_ANS') {
                    addQAResult(d.seat, d.name, data.ans);
                } else if (type === 'FILE_SUBMIT') {
                    addFileResult(d.seat, d.name, data.filename, data.fileData);
                } else if (type === 'WHITEBOARD_SUBMIT') {
                    addWhiteboardResult(d.seat, d.name, data.imgData);
                } else if (type === 'TEXT_ANS') {
                    addTextResult(d.seat, d.name, data.text);
                }
            });
            
            conn.on('close', () => {
                connections = connections.filter(c => c !== conn);
                updateConnectedCount();
            });
        });
    }

    function updateConnectedCount() {
        const count = connections.length;
        document.getElementById('connected-count').textContent = count;
        if(document.getElementById('global-connected-count')) document.getElementById('global-connected-count').textContent = count;
        
        const listDiv = document.getElementById('connected-students-list');
        if (!listDiv) return;
        
        if (count === 0) {
            listDiv.innerHTML = '<div class="empty-state" style="width: 100%; font-size: 0.9rem;">等待學生加入...</div>';
            return;
        }
        
        listDiv.innerHTML = connections.map(c => {
            const m = c.studentMeta || { seat: '?', name: '連線中' };
            return `<span style="background: rgba(255,255,255,0.15); color: white; padding: 0.3rem 0.6rem; border-radius: 20px; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.2);"><strong style="color:var(--secondary)">${m.seat}</strong> ${m.name}</span>`;
        }).join('');
    }

    function processBuzz(seat, name, conn) {
        if (winners.find(w => w.name === name)) return; // Already buzzed
        
        winners.push({ seat, name, time: Date.now() });
        renderWinners();
        
        // Notify student of their rank
        conn.send({ type: 'RESULT', rank: winners.length });
        
        if (winners.length === 1) {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            playSound('jump');
        }
    }

    function renderWinners() {
        const list = document.getElementById('buzzer-winner-list');
        if (winners.length === 0) {
            list.innerHTML = '<div class="empty-state">等待搶答者...</div>';
            return;
        }
        list.innerHTML = winners.map((w, idx) => `
            <div class="winner-item">
                <div class="winner-rank">${idx + 1}</div>
                <div style="flex:1">
                    <div style="font-weight:bold">${w.seat}號 ${w.name}</div>
                    <div style="font-size:0.8rem; color:var(--text-muted)">搶答成功！</div>
                </div>
            </div>
        `).join('');
    }

    document.getElementById('btn-start-buzzer-round').onclick = () => {
        winners = [];
        renderWinners();
        isRoundActive = true;
        // Notify all connected students
        connections.forEach(conn => conn.send({ type: 'START_ROUND' }));
        document.getElementById('btn-start-buzzer-round').innerHTML = '<i data-lucide="zap"></i> 搶答進行中...';
        lucide.createIcons();
        
        setTimeout(() => {
            isRoundActive = false;
            document.getElementById('btn-start-buzzer-round').innerHTML = '<i data-lucide="play"></i> 開始新輪次';
            lucide.createIcons();
            playSound('buzzer-end');
            connections.forEach(conn => conn.send({ type: 'IDLE', msg: '搶答結束！' }));
        }, 10000); // 10 second round
    };

    document.getElementById('btn-reset-buzzer').onclick = () => {
        winners = [];
        renderWinners();
        connections.forEach(conn => conn.send({ type: 'RESET' }));
    };

    // 3b. Broadcast Link
    const linkModal = document.getElementById('link-modal');
    document.getElementById('tool-link').onclick = () => linkModal.style.display = 'flex';
    document.getElementById('btn-send-link').onclick = () => {
        const url = document.getElementById('inp-broadcast-link').value;
        if(!url) return alert('請輸入網址');
        connections.forEach(conn => conn.send({ type: 'LINK', url }));
        addActivity('推送全班廣播連結');
        alert(`已推播給 ${connections.length} 位學生`);
    };

    // 3c. Q&A Tool
    const qaModal = document.getElementById('qa-modal');
    const qaResultsList = document.getElementById('qa-results-list');
    const qaAnsCount = document.getElementById('qa-ans-count');
    let qaCount = 0;

    document.getElementById('tool-qa').onclick = () => qaModal.style.display = 'flex';
    document.getElementById('btn-start-qa-short').onclick = () => {
        qaCount = 0; qaAnsCount.textContent = `(${qaCount} 份)`;
        qaResultsList.innerHTML = '';
        connections.forEach(conn => conn.send({ type: 'QA_SHORT' }));
        addActivity('發布「簡答題」');
    };
    document.getElementById('btn-start-qa-mc').onclick = () => {
        qaCount = 0; qaAnsCount.textContent = `(${qaCount} 份)`;
        qaResultsList.innerHTML = '';
        connections.forEach(conn => conn.send({ type: 'QA_MC' }));
        addActivity('發布「單選題」');
    };
    document.getElementById('btn-start-whiteboard').onclick = () => {
        qaCount = 0; qaAnsCount.textContent = `(${qaCount} 份)`;
        qaResultsList.innerHTML = '';
        connections.forEach(conn => conn.send({ type: 'WHITEBOARD_REQ' }));
        addActivity('發布「小白板」');
    };
    document.getElementById('btn-clear-qa-results').onclick = () => {
        qaCount = 0; qaAnsCount.textContent = `(${qaCount} 份)`;
        qaResultsList.innerHTML = '<div class="empty-state">等待學生作答送出...</div>';
        connections.forEach(conn => conn.send({ type: 'IDLE', msg: '測驗已結束，等待下一場活動。' }));
    };

    function addQAResult(seat, name, ans) {
        if(qaResultsList.querySelector('.empty-state')) qaResultsList.innerHTML = '';
        qaCount++; qaAnsCount.textContent = `(${qaCount} 份)`;
        const div = document.createElement('div');
        div.style.background = 'rgba(255,255,255,0.1)'; div.style.padding = '1rem'; div.style.borderRadius = '8px';
        div.innerHTML = `<strong style="color:var(--secondary)">${seat}號 ${name}</strong><div style="margin-top:0.5rem">${ans}</div>`;
        qaResultsList.prepend(div);
    }
    function addWhiteboardResult(seat, name, imgData) {
        if(qaResultsList.querySelector('.empty-state')) qaResultsList.innerHTML = '';
        qaCount++; qaAnsCount.textContent = `(${qaCount} 份)`;
        const div = document.createElement('div');
        div.style.background = 'rgba(255,255,255,0.1)'; div.style.padding = '1rem'; div.style.borderRadius = '8px';
        div.innerHTML = `<strong style="color:var(--secondary)">${seat}號 ${name}</strong><img src="${imgData}" style="width:100%; height:auto; border-radius:4px; margin-top:0.5rem; background:white; cursor:pointer;" onclick="const w=window.open(''); w.document.write('<img src=\\''+this.src+'\\' style=\\'max-width:100%;\\'>');">`;
        qaResultsList.prepend(div);
    }

    // 3d. File Receive
    const fileModal = document.getElementById('file-modal');
    const fileResultsList = document.getElementById('file-results-list');
    const fileRecvCount = document.getElementById('file-recv-count');
    let fileCount = 0;

    document.getElementById('tool-file').onclick = () => fileModal.style.display = 'flex';
    document.getElementById('btn-request-files').onclick = () => {
        fileCount = 0; fileRecvCount.textContent = `(${fileCount} 份)`;
        fileResultsList.innerHTML = '';
        connections.forEach(conn => conn.send({ type: 'FILE_REQ' }));
        addActivity('開放學生檔案上傳通道');
    };
    
    function addFileResult(seat, name, filename, fileData) {
        if(fileResultsList.querySelector('.empty-state')) fileResultsList.innerHTML = '';
        fileCount++; fileRecvCount.textContent = `(${fileCount} 份)`;
        const li = document.createElement('li');
        li.style.background = 'rgba(255,255,255,0.05)'; li.style.padding = '1rem'; li.style.borderRadius = '8px'; li.style.marginBottom = '0.5rem'; li.style.display = 'flex'; li.style.justifyContent = 'space-between'; li.style.alignItems = 'center';
        li.innerHTML = `<div><strong style="color:var(--secondary)">${seat}號 ${name}</strong> <span style="margin-left:1rem">${filename}</span></div> <a href="${fileData}" download="${seat}_${name}_${filename}" class="btn-primary" style="text-decoration:none; padding: 0.5rem 1rem;">下載</a>`;
        fileResultsList.prepend(li);
    }

    // 3e. Text Receive Channel
    const textModal = document.getElementById('text-modal');
    const textResultsList = document.getElementById('text-results-list');
    const textRecvCount = document.getElementById('text-recv-count');
    let textCount = 0;

    document.getElementById('tool-text').onclick = () => textModal.style.display = 'flex';
    document.getElementById('btn-request-text').onclick = () => {
        textCount = 0; textRecvCount.textContent = `(${textCount} 份)`;
        textResultsList.innerHTML = '';
        connections.forEach(conn => conn.send({ type: 'TEXT_REQ' }));
        addActivity('開放學生短文輸入通道');
    };
    
    document.getElementById('btn-clear-text-results').onclick = () => {
        textCount = 0; textRecvCount.textContent = `(${textCount} 份)`;
        textResultsList.innerHTML = '<div class="empty-state">尚未接收到文字..</div>';
        connections.forEach(conn => conn.send({ type: 'IDLE', msg: '測驗已結束，等待下一場活動。' }));
    };

    function addTextResult(seat, name, text) {
        if(textResultsList.querySelector('.empty-state')) textResultsList.innerHTML = '';
        textCount++; textRecvCount.textContent = `(${textCount} 份)`;
        const div = document.createElement('div');
        div.style.background = 'rgba(255,255,255,0.05)'; div.style.padding = '1rem'; div.style.borderRadius = '12px'; div.style.borderLeft = '4px solid #8b5cf6';
        div.innerHTML = `<div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;"><strong style="color:var(--secondary)">${seat}號 ${name}</strong></div><div style="font-size: 1.1rem; word-break: break-all;">${text}</div>`;
        textResultsList.prepend(div);
    }

    // 4. Advanced Timer
    const timerModal = document.getElementById('timer-modal');
    let advTimerInt = null;
    let advSeconds = 300; // 5 mins
    const advDisplay = document.getElementById('adv-timer-display');
    const inputMins = document.getElementById('timer-mins');

    document.getElementById('tool-timer-advanced').onclick = () => timerModal.style.display = 'flex';
    document.getElementById('btn-start-adv-timer').onclick = () => {
        if(advTimerInt) clearInterval(advTimerInt);
        advSeconds = parseInt(inputMins.value) * 60;
        if(isNaN(advSeconds) || advSeconds <= 0) return;
        
        advTimerInt = setInterval(() => {
            advSeconds--;
            advDisplay.textContent = formatTime(advSeconds);
            if(advSeconds <= 0) {
                clearInterval(advTimerInt);
                advDisplay.textContent = "時間到！";
                playSound('timer-end');
                confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
            }
        }, 1000);
    };
    document.getElementById('btn-stop-adv-timer').onclick = () => {
        if(advTimerInt) clearInterval(advTimerInt);
    };

    // 5. Noise Meter (Actual Microphone API)
    const noiseModal = document.getElementById('noise-modal');
    let noiseInt = null;
    let audioContext = null;
    let mediaStream = null;
    const noiseBtn = document.getElementById('btn-toggle-noise');
    const noiseLevel = document.getElementById('noise-level');
    const noiseStatus = document.getElementById('noise-status');

    document.getElementById('tool-noise').onclick = () => noiseModal.style.display = 'flex';
    noiseBtn.onclick = async () => {
        if(noiseInt) {
            clearInterval(noiseInt);
            noiseInt = null;
            if(audioContext) {
                audioContext.close();
                audioContext = null;
            }
            if(mediaStream) {
                mediaStream.getTracks().forEach(t => t.stop());
                mediaStream = null;
            }
            noiseBtn.textContent = "開始監測";
            noiseLevel.style.width = '0%';
            noiseStatus.textContent = "已停止";
        } else {
            try {
                mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const source = audioContext.createMediaStreamSource(mediaStream);
                const analyser = audioContext.createAnalyser();
                analyser.fftSize = 256;
                source.connect(analyser);
                const bufferLength = analyser.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);

                noiseBtn.textContent = "停止監測";
                noiseInt = setInterval(() => {
                    analyser.getByteFrequencyData(dataArray);
                    let sum = 0;
                    for(let i = 0; i < bufferLength; i++) { sum += dataArray[i]; }
                    const average = sum / bufferLength;
                    
                    // Maps RMS roughly to 0-100%
                    const sens = parseFloat(document.getElementById('noise-sensitivity').value) || 1.0;
                    const vol = Math.min(100, Math.max(0, average * 1.5 * sens));
                    
                    noiseLevel.style.width = `${vol}%`;
                    if(vol < 40) { noiseStatus.textContent = "音量良好 🟢"; noiseStatus.style.color = 'var(--success)'; }
                    else if(vol < 70) { noiseStatus.textContent = "稍微吵雜 🟡"; noiseStatus.style.color = 'var(--warning)'; }
                    else { noiseStatus.textContent = "太吵了！ 🔴"; noiseStatus.style.color = 'var(--danger)'; }
                }, 100);
            } catch(err) {
                alert("無法存取麥克風，請確認瀏覽器已允許麥克風權限！");
                console.error(err);
            }
        }
    };

    // 6. Whiteboard Setup
    const wbModal = document.getElementById('whiteboard-modal');
    const canvas = document.getElementById('whiteboard-canvas');
    const ctx = canvas ? canvas.getContext('let') : null; // intentionally wrong to bypass error if missing
    
    document.getElementById('tool-whiteboard').onclick = () => {
        wbModal.style.display = 'flex';
        initWhiteboard();
    };

    // 7. Dice
    const diceModal = document.getElementById('dice-modal');
    const diceDisplay = document.getElementById('dice-display');
    const btnDice = document.getElementById('btn-roll-dice');
    const faces = ['⚀','⚁','⚂','⚃','⚄','⚅'];

    document.getElementById('tool-dice').onclick = () => diceModal.style.display = 'flex';
    btnDice.onclick = () => {
        let count = 0;
        btnDice.disabled = true;
        playSound('bell');
        const int = setInterval(() => {
            diceDisplay.textContent = faces[Math.floor(Math.random()*6)];
            diceDisplay.style.transform = `rotate(${Math.random()*360}deg)`;
            count++;
            if(count > 15) {
                clearInterval(int);
                const final = Math.floor(Math.random()*6);
                diceDisplay.textContent = faces[final];
                diceDisplay.style.transform = `rotate(0deg)`;
                btnDice.disabled = false;
                addActivity(`擲骰子：得了 ${final+1} 點`);
            }
        }, 100);
    };

    // --- Settings & Themes ---
    const settingsModal = document.getElementById('settings-modal');
    document.getElementById('btn-settings-toggle').onclick = () => {
        elements.brandInput.value = state.brandName;
        document.getElementById('settings-arrival-time').value = state.arrivalTime;
        if(document.getElementById('settings-custom-tag-1')) document.getElementById('settings-custom-tag-1').value = state.customTag1;
        if(document.getElementById('settings-custom-tag-2')) document.getElementById('settings-custom-tag-2').value = state.customTag2;
        if(document.getElementById('settings-custom-tag-3')) document.getElementById('settings-custom-tag-3').value = state.customTag3;
        document.getElementById('st-class-btn-1').value = state.classBtn1;
        document.getElementById('st-class-btn-2').value = state.classBtn2;
        document.getElementById('st-class-btn-3').value = state.classBtn3;
        document.getElementById('st-class-btn-4').value = state.classBtn4;
        if(document.getElementById('st-att-btn-1')) document.getElementById('st-att-btn-1').value = state.attBtn1;
        if(document.getElementById('st-att-btn-3')) document.getElementById('st-att-btn-3').value = state.attBtn3;
        
        const currentClassLabel = document.getElementById('settings-current-class-name');
        if (currentClassLabel && getCurrentClass()) {
            currentClassLabel.textContent = getCurrentClass().name;
        }
        
        settingsModal.style.display = 'flex';
    };

    elements.themeBtns.forEach(btn => {
        btn.onclick = () => {
            state.theme = btn.dataset.theme;
            applyTheme();
            saveState();
        };
    });

    document.getElementById('btn-apply-attendance-settings').onclick = () => {
        state.arrivalTime = document.getElementById('settings-arrival-time').value || '08:00';
        state.customTag1 = document.getElementById('settings-custom-tag-1').value || '';
        state.customTag2 = document.getElementById('settings-custom-tag-2').value || '';
        state.customTag3 = document.getElementById('settings-custom-tag-3').value || '';
        state.classBtn1 = document.getElementById('st-class-btn-1').value || '功課';
        state.classBtn2 = document.getElementById('st-class-btn-2').value || '優秀';
        state.classBtn3 = document.getElementById('st-class-btn-3').value || '秩序';
        state.classBtn4 = document.getElementById('st-class-btn-4').value || '';
        state.attBtn1 = document.getElementById('st-att-btn-1').value || '簽到';
        state.attBtn3 = document.getElementById('st-att-btn-3').value || '缺席';
        saveState();
        renderStudents();
        if (typeof renderAttendance === 'function') renderAttendance();
        alert("按鈕與點名簿設定已更新！");
    };

    document.getElementById('btn-apply-brand').onclick = () => {
        state.brandName = elements.brandInput.value || "SmartClass";
        elements.brandName.textContent = state.brandName;
        saveState();
        alert("標題已更新！");
    };

    document.getElementById('btn-apply-sheets-id').onclick = () => {
        let val = document.getElementById('settings-sheets-id').value.trim();
        // 自動解析網址中的 ID
        const match = val.match(/\/d\/(.*?)(\/|$)/);
        if (match) {
            val = match[1];
            document.getElementById('settings-sheets-id').value = val;
        }
        state.sheetsId = val;
        saveState();
        alert("試算表同步設定已更新！");
    };


    if (document.getElementById('history-date-picker')) {
        document.getElementById('history-date-picker').onchange = renderHistory;
    }
    if (document.getElementById('history-class-select')) {
        document.getElementById('history-class-select').onchange = renderHistory;
    }

    document.getElementById('btn-clear-all').onclick = () => {
        if(confirm("警告：這將會清除所有班級的資料！您確定嗎？")){
            localStorage.clear();
            location.reload();
        }
    };

    // --- Homework ---
    document.getElementById('btn-save-homework').onclick = () => {
        const currClass = getCurrentClass();
        currClass.homework = elements.hwInput.value;
        updateDashboard();
        addActivity(`更新了 ${currClass.name} 的課堂功課`);
        saveDailyRecord(); // Auto-save for history
        saveState();
        alert('功課已儲存');
    };

    // --- Blackboard Input ---
    const blackboardContent = document.getElementById('blackboard-content');
    if (blackboardContent) {
        blackboardContent.oninput = (e) => {
            const currClass = getCurrentClass();
            if (!currClass) return;
            // Prevent <rt> contents from being included in the saved text
            const clone = e.target.cloneNode(true);
            clone.querySelectorAll('rt').forEach(rt => rt.remove());
            const text = clone.innerText;
            currClass.homework = text;
            saveState();
            saveDailyRecord();
        };
        blackboardContent.onblur = () => {
            renderCommunicationBook();
        };
    }

    // --- Blackboard Input ---

    // Communication Book Controls
    document.getElementById('btn-toggle-writing-mode').onclick = () => {
        state.commWritingMode = state.commWritingMode === 'horizontal' ? 'vertical' : 'horizontal';
        saveState();
        renderCommunicationBook();
    };

    document.getElementById('btn-toggle-zhuyin').onclick = () => {
        state.commShowZhuyin = !state.commShowZhuyin;
        if (state.commShowZhuyin) {
            state.commFont = 'huninn';
            const fontSel = document.getElementById('select-blackboard-font');
            if(fontSel) fontSel.value = 'huninn';
        }
        saveState();
        renderCommunicationBook();
    };

    document.getElementById('btn-toggle-comm-attendance').onclick = () => {
        state.commShowAttendance = !state.commShowAttendance;
        saveState();
        renderCommunicationBook();
    };

    // --- Blackboard Char Box Toggle ---
    let commShowCharBox = localStorage.getItem('sc_v3_comm_charbox') === 'true';
    const btnToggleCharBox = document.getElementById('btn-toggle-char-box');
    
    function updateCharBoxUI() {
        const board = document.getElementById('blackboard-content');
        if (!board) return;
        if (commShowCharBox) {
            board.classList.add('char-boxed');
            if (btnToggleCharBox) {
                btnToggleCharBox.style.background = 'var(--success)';
                btnToggleCharBox.style.color = 'white';
                btnToggleCharBox.style.border = 'none';
            }
        } else {
            board.classList.remove('char-boxed');
            if (btnToggleCharBox) {
                btnToggleCharBox.style.background = '';
                btnToggleCharBox.style.color = '';
                btnToggleCharBox.style.border = '';
            }
        }
    }

    if (btnToggleCharBox) {
        btnToggleCharBox.onclick = () => {
            commShowCharBox = !commShowCharBox;
            localStorage.setItem('sc_v3_comm_charbox', commShowCharBox);
            updateCharBoxUI();
        };
    }
    // Apply char-box on initial render
    setTimeout(updateCharBoxUI, 200);

    // --- Zhuyin Multi-reading (破音字) Dictionary ---
    const POLYPHONE_MAP = {
        '行': ['ㄒㄧㄥˊ', 'ㄏㄤˊ', 'ㄏㄤˋ', 'ㄏㄥˊ'],
        '長': ['ㄔㄤˊ', 'ㄓㄤˇ'],
        '樂': ['ㄌㄜˋ', 'ㄩㄝˋ', 'ㄧㄠˋ'],
        '了': ['ㄌㄜ˙', 'ㄌㄧㄠˇ'],
        '得': ['ㄉㄜˊ', 'ㄉㄜ˙', 'ㄉㄟˇ'],
        '地': ['ㄉㄧˋ', 'ㄉㄜ˙'],
        '的': ['ㄉㄜ˙', 'ㄉㄧˋ', 'ㄉㄧˊ'],
        '還': ['ㄏㄞˊ', 'ㄏㄨㄢˊ'],
        '都': ['ㄉㄡ', 'ㄉㄨ'],
        '為': ['ㄨㄟˋ', 'ㄨㄟˊ'],
        '著': ['ㄓㄜ˙', 'ㄓㄨㄛˊ', 'ㄓㄠ', 'ㄓㄠˊ'],
        '大': ['ㄉㄚˋ', 'ㄉㄞˋ'],
        '少': ['ㄕㄠˇ', 'ㄕㄠˋ'],
        '好': ['ㄏㄠˇ', 'ㄏㄠˋ'],
        '重': ['ㄓㄨㄥˋ', 'ㄔㄨㄥˊ'],
        '教': ['ㄐㄧㄠ', 'ㄐㄧㄠˋ'],
        '數': ['ㄕㄨˋ', 'ㄕㄨˇ', 'ㄕㄨㄛˋ'],
        '分': ['ㄈㄣ', 'ㄈㄣˋ'],
        '差': ['ㄔㄚ', 'ㄔㄚˋ', 'ㄔㄞ', 'ㄘ'],
        '種': ['ㄓㄨㄥˇ', 'ㄓㄨㄥˋ'],
        '發': ['ㄈㄚ', 'ㄈㄚˋ'],
        '間': ['ㄐㄧㄢ', 'ㄐㄧㄢˋ'],
        '相': ['ㄒㄧㄤ', 'ㄒㄧㄤˋ'],
        '度': ['ㄉㄨˋ', 'ㄉㄨㄛˋ'],
        '調': ['ㄉㄧㄠˋ', 'ㄊㄧㄠˊ'],
        '假': ['ㄐㄧㄚˇ', 'ㄐㄧㄚˋ'],
        '便': ['ㄅㄧㄢˋ', 'ㄆㄧㄢˊ'],
        '難': ['ㄋㄢˊ', 'ㄋㄢˋ'],
        '倒': ['ㄉㄠˇ', 'ㄉㄠˋ'],
        '量': ['ㄌㄧㄤˋ', 'ㄌㄧㄤˊ'],
        '率': ['ㄌㄩˋ', 'ㄕㄨㄞˋ'],
        '空': ['ㄎㄨㄥ', 'ㄎㄨㄥˋ'],
        '處': ['ㄔㄨˇ', 'ㄔㄨˋ'],
        '喝': ['ㄏㄜ', 'ㄏㄜˋ'],
        '識': ['ㄕˋ', 'ㄓˋ'],
        '傳': ['ㄔㄨㄢˊ', 'ㄓㄨㄢˋ'],
        '落': ['ㄌㄨㄛˋ', 'ㄌㄚˋ', 'ㄌㄠˋ'],
        '乾': ['ㄍㄢ', 'ㄑㄧㄢˊ'],
        '磨': ['ㄇㄛˊ', 'ㄇㄛˋ'],
        '背': ['ㄅㄟˋ', 'ㄅㄟ'],
        '彈': ['ㄉㄢˋ', 'ㄊㄢˊ'],
        '參': ['ㄘㄢ', 'ㄕㄣ', 'ㄙㄢ'],
        '強': ['ㄑㄧㄤˊ', 'ㄑㄧㄤˇ', 'ㄐㄧㄤˋ'],
        '會': ['ㄏㄨㄟˋ', 'ㄎㄨㄞˋ'],
        '切': ['ㄑㄧㄝ', 'ㄑㄧㄝˋ'],
        '幹': ['ㄍㄢˋ', 'ㄍㄢ'],
        '角': ['ㄐㄧㄠˇ', 'ㄐㄩㄝˊ'],
        '觀': ['ㄍㄨㄢ', 'ㄍㄨㄢˋ'],
        '要': ['ㄧㄠˋ', 'ㄧㄠ'],
        '說': ['ㄕㄨㄛ', 'ㄕㄨㄟˋ', 'ㄩㄝˋ'],
        '應': ['ㄧㄥ', 'ㄧㄥˋ'],
        '看': ['ㄎㄢˋ', 'ㄎㄢ'],
        '什': ['ㄕㄣˊ', 'ㄕˊ'],
        '和': ['ㄏㄜˊ', 'ㄏㄨㄛˋ', 'ㄏㄨˊ', 'ㄏㄜˋ'],
        '給': ['ㄍㄟˇ', 'ㄐㄧˇ'],
        '把': ['ㄅㄚˇ', 'ㄅㄚˋ'],
        '過': ['ㄍㄨㄛˋ', 'ㄍㄨㄛ˙'],
        '只': ['ㄓˇ', 'ㄓ'],
        '沒': ['ㄇㄟˊ', 'ㄇㄛˋ'],
        '幾': ['ㄐㄧˇ', 'ㄐㄧ'],
        '朝': ['ㄔㄠˊ', 'ㄓㄠ'],
        '更': ['ㄍㄥ', 'ㄍㄥˋ'],
        '可': ['ㄎㄜˇ', 'ㄎㄜˋ'],
        '正': ['ㄓㄥˋ', 'ㄓㄥ'],
        '期': ['ㄑㄧ', 'ㄐㄧ'],
        '答': ['ㄉㄚˊ', 'ㄉㄚ'],
        '當': ['ㄉㄤ', 'ㄉㄤˋ'],
        '不': ['ㄅㄨˋ', 'ㄅㄨˊ'],
        '省': ['ㄕㄥˇ', 'ㄒㄧㄥˇ'],
        '藏': ['ㄘㄤˊ', 'ㄗㄤˋ'],
        '奇': ['ㄑㄧˊ', 'ㄐㄧ'],
        '薄': ['ㄅㄠˊ', 'ㄅㄛˊ', 'ㄅㄛˋ'],
        '模': ['ㄇㄛˊ', 'ㄇㄨˊ'],
        '鮮': ['ㄒㄧㄢ', 'ㄒㄧㄢˇ'],
        '惡': ['ㄜˋ', 'ㄨˋ', 'ㄜˇ'],
        '累': ['ㄌㄟˋ', 'ㄌㄟˇ', 'ㄌㄟˊ'],
        '塞': ['ㄙㄜˋ', 'ㄙㄞ', 'ㄙㄞˋ'],
        '中': ['ㄓㄨㄥ', 'ㄓㄨㄥˋ'],
        '結': ['ㄐㄧㄝˊ', 'ㄐㄧㄝ'],
        '血': ['ㄒㄧㄝˇ', 'ㄒㄩㄝˋ'],
        '華': ['ㄏㄨㄚˊ', 'ㄏㄨㄚˋ'],
        '似': ['ㄙˋ', 'ㄕˋ'],
        '供': ['ㄍㄨㄥ', 'ㄍㄨㄥˋ'],
        '盛': ['ㄕㄥˋ', 'ㄔㄥˊ'],
        '擔': ['ㄉㄢ', 'ㄉㄢˋ'],
        '露': ['ㄌㄨˋ', 'ㄌㄡˋ'],
        '禁': ['ㄐㄧㄣˋ', 'ㄐㄧㄣ'],
        '興': ['ㄒㄧㄥ', 'ㄒㄧㄥˋ'],
        '解': ['ㄐㄧㄝˇ', 'ㄐㄧㄝˋ', 'ㄒㄧㄝˋ'],
        '任': ['ㄖㄣˋ', 'ㄖㄣˊ'],
        '石': ['ㄕˊ', 'ㄉㄢˋ'],
        '寧': ['ㄋㄧㄥˊ', 'ㄋㄧㄥˋ'],
        '沉': ['ㄔㄣˊ', 'ㄕㄣˇ'],
        '燒': ['ㄕㄠ', 'ㄕㄠˊ'],
        '降': ['ㄐㄧㄤˋ', 'ㄒㄧㄤˊ'],
        '散': ['ㄙㄢˋ', 'ㄙㄢˇ'],
        '夾': ['ㄐㄧㄚ', 'ㄐㄧㄚˊ', 'ㄐㄧㄚˇ'],
        '吐': ['ㄊㄨˇ', 'ㄊㄨˋ'],
        '幾': ['ㄐㄧˇ', 'ㄐㄧ'],
    };

    // Custom overrides stored per class/homework
    if (!state.zhuyinOverrides) state.zhuyinOverrides = {};

    function getZhuyinForChar(ch, charIndex) {
        const currClass = getCurrentClass();
        const classKey = currClass ? currClass.id : 'default';
        const overrideKey = `${classKey}_${charIndex}`;
        if (state.zhuyinOverrides[overrideKey]) {
            return state.zhuyinOverrides[overrideKey];
        }
        return ''; // Let the font handle default display
    }

    function showZhuyinPicker(rubyElem, ch, charIndex) {
        const readings = POLYPHONE_MAP[ch];
        if (!readings || readings.length < 2) return;

        // Remove existing picker
        const existing = document.getElementById('zhuyin-picker-popup');
        if (existing) existing.remove();

        const popup = document.createElement('div');
        popup.id = 'zhuyin-picker-popup';
        popup.style.cssText = `
            position: fixed; z-index: 10000;
            background: #1e293b; border: 2px solid var(--primary);
            border-radius: 12px; padding: 0.8rem;
            display: flex; flex-direction: column; gap: 0.4rem;
            box-shadow: 0 8px 30px rgba(0,0,0,0.5);
            min-width: 100px;
        `;

        // Title
        const title = document.createElement('div');
        title.textContent = `「${ch}」選擇注音`;
        title.style.cssText = 'color: var(--secondary); font-size: 0.85rem; font-weight: bold; text-align: center; margin-bottom: 0.3rem;';
        popup.appendChild(title);

        readings.forEach(reading => {
            const btn = document.createElement('button');
            btn.textContent = reading;
            btn.style.cssText = `
                background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2);
                padding: 0.5rem 0.8rem; border-radius: 8px; cursor: pointer;
                font-size: 1rem; font-family: 'Noto Sans TC', sans-serif;
                transition: all 0.2s;
            `;
            btn.onmouseover = () => btn.style.background = 'var(--primary)';
            btn.onmouseout = () => btn.style.background = 'rgba(255,255,255,0.1)';
            btn.onclick = () => {
                const currClass = getCurrentClass();
                const classKey = currClass ? currClass.id : 'default';
                const overrideKey = `${classKey}_${charIndex}`;
                state.zhuyinOverrides[overrideKey] = reading;
                localStorage.setItem('sc_v3_zhuyin_overrides', JSON.stringify(state.zhuyinOverrides));
                popup.remove();
                renderCommunicationBook();
            };
            popup.appendChild(btn);
        });

        // Clear option
        const clearBtn = document.createElement('button');
        clearBtn.textContent = '🔄 恢復預設';
        clearBtn.style.cssText = `
            background: rgba(239,68,68,0.2); color: #ef4444; border: 1px solid rgba(239,68,68,0.3);
            padding: 0.4rem 0.8rem; border-radius: 8px; cursor: pointer; font-size: 0.85rem; margin-top: 0.2rem;
        `;
        clearBtn.onclick = () => {
            const currClass = getCurrentClass();
            const classKey = currClass ? currClass.id : 'default';
            const overrideKey = `${classKey}_${charIndex}`;
            delete state.zhuyinOverrides[overrideKey];
            localStorage.setItem('sc_v3_zhuyin_overrides', JSON.stringify(state.zhuyinOverrides));
            popup.remove();
            renderCommunicationBook();
        };
        popup.appendChild(clearBtn);

        document.body.appendChild(popup);

        // Position near the clicked element
        const rect = rubyElem.getBoundingClientRect();
        popup.style.left = Math.min(rect.left, window.innerWidth - 150) + 'px';
        popup.style.top = (rect.bottom + 5) + 'px';

        // Close on outside click
        setTimeout(() => {
            const closeHandler = (e) => {
                if (!popup.contains(e.target)) {
                    popup.remove();
                    document.removeEventListener('click', closeHandler);
                }
            };
            document.addEventListener('click', closeHandler);
        }, 100);
    }

    // Load saved overrides
    state.zhuyinOverrides = JSON.parse(localStorage.getItem('sc_v3_zhuyin_overrides') || '{}');

    const btnCommAttZoomIn = document.getElementById('btn-comm-att-zoom-in');
    if (btnCommAttZoomIn) {
        btnCommAttZoomIn.onclick = () => {
            state.commCols = Math.max(2, (state.commCols || 4) - 1);
            saveState();
            renderCommAttendance();
        };
    }
    const btnCommAttZoomOut = document.getElementById('btn-comm-att-zoom-out');
    if (btnCommAttZoomOut) {
        btnCommAttZoomOut.onclick = () => {
            state.commCols = Math.min(10, (state.commCols || 4) + 1);
            saveState();
            renderCommAttendance();
        };
    }

    document.getElementById('select-blackboard-font').onchange = (e) => {
        state.commFont = e.target.value;
        saveState();
        renderCommunicationBook();
    };

    // Numbered list button
    const insertListBtn = document.getElementById('btn-insert-numbered-list');
    if (insertListBtn) {
        insertListBtn.onclick = () => {
            const currClass = getCurrentClass();
            if (!currClass) return;
            const listText = '1.\n2.\n3.\n4.\n5.';
            currClass.homework = (currClass.homework || '').trim()
                ? currClass.homework + '\n' + listText
                : listText;
            saveState();
            saveDailyRecord();
            renderCommunicationBook();
        };
    }

    const insertBulletBtn = document.getElementById('btn-insert-bullet-list');
    if (insertBulletBtn) {
        insertBulletBtn.onclick = () => {
            const currClass = getCurrentClass();
            if (!currClass) return;
            const listText = '• \n• \n• \n• \n• ';
            currClass.homework = (currClass.homework || '').trim()
                ? currClass.homework + '\n' + listText
                : listText;
            saveState();
            saveDailyRecord();
            renderCommunicationBook();
        };
    }

    const btnIncFont = document.getElementById('btn-increase-font');
    if (btnIncFont) {
        btnIncFont.onclick = () => {
            state.commFontSize = Math.min(4.0, state.commFontSize + 0.2);
            saveState();
            renderCommunicationBook();
        };
    }

    const btnDecFont = document.getElementById('btn-decrease-font');
    if (btnDecFont) {
        btnDecFont.onclick = () => {
            state.commFontSize = Math.max(1.0, state.commFontSize - 0.2);
            saveState();
            renderCommunicationBook();
        };
    }

    const saveLocalBtn = document.getElementById('btn-save-local');
    if (saveLocalBtn) {
        saveLocalBtn.onclick = () => {
            saveState();
            addActivity("手動本地存檔成功");
            alert("資料已成功儲存至瀏覽器！");
        };
    }

    // --- Blackboard Text Format & Canvas ---
    const btnTextBold = document.getElementById('btn-text-bold');
    if (btnTextBold) {
        btnTextBold.onmousedown = (e) => { 
            e.preventDefault(); 
            const board = document.getElementById('blackboard-content');
            if (!board) return;
            const sel = window.getSelection();
            if (!sel || sel.isCollapsed) return alert('請先在黑板上選取要變成粗體的文字。');
            const text = sel.toString();
            let cleanText = text.replace(/✱/g, '');
            document.execCommand('insertText', false, `✱${cleanText}✱`);
            const currClass = getCurrentClass();
            if (currClass) {
                currClass.homework = board.innerText;
                saveState();
                saveDailyRecord();
                renderCommunicationBook();
            }
        };
    }

    // Canvas Drawing Logic
    const commCanvas = document.getElementById('comm-draw-canvas');
    if (commCanvas) {
        const cCtx = commCanvas.getContext('2d');
        let isDrawing = false;
        let cMode = 'none'; 
        let lastX = 0, lastY = 0;
        
        function resizeCommCanvas() {
            commCanvas.width = commCanvas.offsetWidth;
            commCanvas.height = commCanvas.offsetHeight;
        }
        
        const setColorMode = (mode) => {
            cMode = mode;
            if (mode === 'none') {
                commCanvas.style.pointerEvents = 'none';
            } else {
                commCanvas.style.pointerEvents = 'auto';
                if(commCanvas.width === 0 || commCanvas.width === 300) resizeCommCanvas(); // ensure canvas size matches
            }
        };

        const btnPen = document.getElementById('btn-comm-draw-pen');
        const btnHighlighter = document.getElementById('btn-comm-draw-highlighter');
        const btnEraser = document.getElementById('btn-comm-draw-eraser');
        const btnClearAll = document.getElementById('btn-comm-draw-clear-all');

        if(btnPen) btnPen.onclick = () => { setColorMode(cMode === 'pen' ? 'none' : 'pen'); };
        if(btnHighlighter) btnHighlighter.onclick = () => { setColorMode(cMode === 'highlighter' ? 'none' : 'highlighter'); };
        if(btnEraser) btnEraser.onclick = () => { setColorMode(cMode === 'eraser' ? 'none' : 'eraser'); };
        if(btnClearAll) btnClearAll.onclick = () => {
            if(confirm('確定要擦除黑板上的所有畫筆嗎？')) {
                cCtx.clearRect(0, 0, commCanvas.width, commCanvas.height);
            }
        };
        
        // Listen to tab changes or window resize
        window.addEventListener('resize', resizeCommCanvas);
        // Observe container
        new ResizeObserver(() => {
            if(commCanvas.parentElement.offsetWidth > 0 && commCanvas.width !== commCanvas.parentElement.offsetWidth) resizeCommCanvas();
        }).observe(commCanvas.parentElement);

        commCanvas.onmousedown = (e) => {
            if (cMode === 'none') return;
            isDrawing = true;
            const rect = commCanvas.getBoundingClientRect();
            lastX = e.clientX - rect.left;
            lastY = e.clientY - rect.top;
        };
        
        window.addEventListener('mouseup', () => isDrawing = false);
        
        commCanvas.onmousemove = (e) => {
            if (!isDrawing || cMode === 'none') return;
            const rect = commCanvas.getBoundingClientRect();
            const currentX = e.clientX - rect.left;
            const currentY = e.clientY - rect.top;
            
            cCtx.beginPath();
            if (cMode === 'eraser') {
                cCtx.globalCompositeOperation = 'destination-out';
                cCtx.lineWidth = 30;
                cCtx.globalAlpha = 1.0;
            } else {
                cCtx.globalCompositeOperation = 'source-over';
                cCtx.lineWidth = cMode === 'highlighter' ? 25 : 4;
                cCtx.strokeStyle = document.getElementById('comm-draw-color').value;
                cCtx.globalAlpha = cMode === 'highlighter' ? 0.35 : 1.0;
            }
            cCtx.lineCap = 'round';
            cCtx.lineJoin = 'round';
            cCtx.moveTo(lastX, lastY);
            cCtx.lineTo(currentX, currentY);
            cCtx.stroke();
            
            lastX = currentX;
            lastY = currentY;
        };
    }

    // --- Export/Import ---
    document.getElementById('btn-export-data').onclick = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `智慧教室資料備份_${new Date().toLocaleDateString()}.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    // --- JSON Import ---
    const jsonImportInput = document.getElementById('json-import-file');
    if (jsonImportInput) {
        jsonImportInput.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (evt) => {
                try {
                    const imported = JSON.parse(evt.target.result);
                    if (!imported.classes || !Array.isArray(imported.classes)) {
                        throw new Error('JSON 格式不正確，缺少 classes 陣列');
                    }
                    if (confirm('⚠️ 匯入 JSON 將會覆蓋目前的所有班級資料。確定要繼續嗎？')) {
                        // Merge imported data into state
                        state.classes = imported.classes;
                        state.currentClassId = imported.currentClassId || state.classes[0].id;
                        if (imported.activities) state.activities = imported.activities;
                        if (imported.brandName) state.brandName = imported.brandName;
                        if (imported.theme) state.theme = imported.theme;
                        if (imported.arrivalTime) state.arrivalTime = imported.arrivalTime;
                        if (imported.customTag1 !== undefined) state.customTag1 = imported.customTag1;
                        if (imported.customTag2 !== undefined) state.customTag2 = imported.customTag2;
                        if (imported.customTag3 !== undefined) state.customTag3 = imported.customTag3;
                        if (imported.classBtn1) state.classBtn1 = imported.classBtn1;
                        if (imported.classBtn2) state.classBtn2 = imported.classBtn2;
                        if (imported.classBtn3) state.classBtn3 = imported.classBtn3;
                        if (imported.classBtn4 !== undefined) state.classBtn4 = imported.classBtn4;
                        if (imported.attBtn1) state.attBtn1 = imported.attBtn1;
                        if (imported.attBtn3) state.attBtn3 = imported.attBtn3;
                        if (imported.history) state.history = imported.history;
                        if (imported.customLinks) state.customLinks = imported.customLinks;
                        if (imported.courseAttPrefs) state.courseAttPrefs = imported.courseAttPrefs;
                        if (imported.scoreLockPassword !== undefined) state.scoreLockPassword = imported.scoreLockPassword;
                        if (imported.commWritingMode) state.commWritingMode = imported.commWritingMode;
                        if (imported.commFont) state.commFont = imported.commFont;
                        if (imported.commFontSize) state.commFontSize = imported.commFontSize;
                        if (imported.commShowZhuyin !== undefined) state.commShowZhuyin = imported.commShowZhuyin;
                        if (imported.commShowAttendance !== undefined) state.commShowAttendance = imported.commShowAttendance;
                        if (imported.sheetsId) state.sheetsId = imported.sheetsId;
                        
                        saveState();
                        renderClassSelect();
                        renderStudents();
                        renderGroups();
                        if (typeof renderAttendance === 'function') renderAttendance();
                        updateDashboard();
                        applyTheme();
                        addActivity(`已成功匯入 JSON 備份檔（含 ${state.classes.length} 個班級）`);
                        alert(`匯入成功！共還原 ${state.classes.length} 個班級資料。`);
                    }
                } catch (err) {
                    console.error(err);
                    alert('讀取 JSON 時發生錯誤：\n' + (err.message || '請確認檔案格式正確'));
                }
            };
            reader.readAsText(file);
            e.target.value = '';
        };
    }

    // --- Modal Closing ---
    document.querySelectorAll('.close, .btn-minimize').forEach(c => {
        c.onclick = () => document.getElementById(c.dataset.modal).style.display = 'none';
    });

    window.onclick = (e) => {
        if (e.target.classList.contains('modal')) e.target.style.display = 'none';
    };

    // --- Google Auth & Cloud Sync ---
    const CLIENT_ID = '83309907791-j9sqgjm9e7dfeuo20pmcttm91t8ce8e9.apps.googleusercontent.com';
    const SCOPES = 'https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets';

    let tokenClient;
    let accessToken = localStorage.getItem('smartclass_google_token') || null;

    const updateGoogleStatus = (isLoggedIn) => {
        const icon = document.getElementById('google-status-icon');
        const text = document.getElementById('google-status-text');
        const logoutBtn = document.getElementById('btn-header-google-logout');
        const btnLogin = document.getElementById('btn-google-login');
        
        if (isLoggedIn) {
            if(icon) { icon.setAttribute('data-lucide', 'cloud'); icon.style.color = 'var(--success)'; }
            if(text) { text.textContent = '雲端已連線'; text.style.color = 'var(--success)'; }
            if(logoutBtn) logoutBtn.style.display = 'block';
            if(btnLogin) {
                btnLogin.innerHTML = `<i data-lucide="check" style="margin-right:0.5rem;"></i> 已連結 Google 雲端`;
                btnLogin.style.background = 'var(--success)';
            }
        } else {
            if(icon) { icon.setAttribute('data-lucide', 'cloud-off'); icon.style.color = 'var(--text-muted)'; }
            if(text) { text.textContent = '未連結'; text.style.color = 'var(--text-muted)'; }
            if(logoutBtn) logoutBtn.style.display = 'none';
            if(btnLogin) {
                btnLogin.innerHTML = `<i data-lucide="log-in" style="margin-right:0.5rem;"></i> 連結 Google 帳號`;
                btnLogin.style.background = 'var(--primary)';
            }
        }
        lucide.createIcons();
    };

    // 若有已儲存的 token，驗證是否仍有效並恢復登入狀態
    if (accessToken) {
        fetch('https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + accessToken)
            .then(res => {
                if (res.ok) {
                    updateGoogleStatus(true);
                } else {
                    accessToken = null;
                    localStorage.removeItem('smartclass_google_token');
                }
            }).catch(() => {
                accessToken = null;
                localStorage.removeItem('smartclass_google_token');
            });
    }

    // Initialize the token client - try immediately, and also lazily on button click
    function initGoogleTokenClient() {
        if (tokenClient) return true; // already initialized
        if (window.google && window.google.accounts && window.google.accounts.oauth2) {
            tokenClient = google.accounts.oauth2.initTokenClient({
                client_id: CLIENT_ID,
                scope: SCOPES,
                callback: async (tokenResponse) => {
                    if(tokenResponse && tokenResponse.access_token) {
                        accessToken = tokenResponse.access_token;
                        localStorage.setItem('smartclass_google_token', accessToken);
                        updateGoogleStatus(true);
                        addActivity("✅ 已成功串接 Google 雲端硬碟");
                        // 自動從雲端載入備份
                        const loaded = await loadFromDriveAppData();
                        if (loaded) {
                            alert("Google 帳號連結成功！\n\n已自動從雲端還原您的班級資料。");
                        } else {
                            alert("Google 帳號連結成功！未來的「雲端存檔」將會自動上傳備份至您的雲端硬碟。\n\n在其他裝置登入同帳號即可還原資料。");
                        }
                    }
                },
            });
            return true;
        }
        return false; // GIS not ready yet
    }
    initGoogleTokenClient(); // try right now

    document.getElementById('btn-google-login').onclick = () => {
        if (window.location.protocol === 'file:') {
            alert("⚠️ 安全性限制：您目前是直接點擊兩下開啟網頁（file://）。\nGoogle 雲端同步功能必須在網路伺服器（如 GitHub Pages、Live Server）環境下才能運作。\n若要測試此功能，請使用 VScode 的 Live Server 或將檔案上傳至網路。");
            return;
        }
        
        if (!initGoogleTokenClient()) {
            alert("Google 登入服務尚未載入完畢，請稍候 2 秒後再試一次，或確認目前網路無阻擋。");
            // Auto-retry after 2 seconds
            setTimeout(() => {
                if (initGoogleTokenClient()) {
                    tokenClient.requestAccessToken({prompt: ''});
                } else {
                    console.error("Google API failed to load.");
                    alert("Google 服務載入失敗。若您在學校，可能被學術網路擋住，或請重新整理網頁。");
                }
            }, 2000);
            return;
        }
        tokenClient.requestAccessToken({prompt: ''});
    };

    document.getElementById('btn-header-google-logout').onclick = () => {
        if (accessToken) {
            google.accounts.oauth2.revoke(accessToken, () => {
                accessToken = null;
                localStorage.removeItem('smartclass_google_token');
                updateGoogleStatus(false);
                addActivity("✅ 已登出 Google 帳號");
                alert("已成功登出 Google 帳號！");
            });
        }
    };

    // --- Google Drive appDataFolder Sync Helpers ---
    async function findDriveBackupFile() {
        // Search for existing backup file in appDataFolder
        const res = await fetch('https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=name%3D%27smartclass_backup.json%27&fields=files(id,name,modifiedTime)', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.files && data.files.length > 0 ? data.files[0] : null;
    }

    async function uploadToDriveAppData() {
        const existingFile = await findDriveBackupFile();
        const dataStr = JSON.stringify(state);
        const blob = new Blob([dataStr], { type: 'application/json' });

        if (existingFile) {
            // Update existing file
            const res = await fetch(`https://www.googleapis.com/upload/drive/v3/files/${existingFile.id}?uploadType=media`, {
                method: 'PATCH',
                headers: {
                    'Authorization': 'Bearer ' + accessToken,
                    'Content-Type': 'application/json'
                },
                body: blob
            });
            return res;
        } else {
            // Create new file
            const metadata = {
                name: 'smartclass_backup.json',
                parents: ['appDataFolder'],
                mimeType: 'application/json'
            };
            const form = new FormData();
            form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
            form.append('file', blob);
            const res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
                method: 'POST',
                headers: { 'Authorization': 'Bearer ' + accessToken },
                body: form
            });
            return res;
        }
    }

    async function loadFromDriveAppData() {
        try {
            const existingFile = await findDriveBackupFile();
            if (!existingFile) return false;
            
            const res = await fetch(`https://www.googleapis.com/drive/v3/files/${existingFile.id}?alt=media`, {
                headers: { 'Authorization': 'Bearer ' + accessToken }
            });
            if (!res.ok) return false;
            
            const imported = await res.json();
            if (!imported.classes || !Array.isArray(imported.classes)) return false;
            
            // Merge cloud data into state
            state.classes = imported.classes;
            state.currentClassId = imported.currentClassId || state.classes[0]?.id;
            if (imported.activities) state.activities = imported.activities;
            if (imported.brandName) state.brandName = imported.brandName;
            if (imported.theme) state.theme = imported.theme;
            if (imported.arrivalTime) state.arrivalTime = imported.arrivalTime;
            if (imported.customTag1 !== undefined) state.customTag1 = imported.customTag1;
            if (imported.customTag2 !== undefined) state.customTag2 = imported.customTag2;
            if (imported.customTag3 !== undefined) state.customTag3 = imported.customTag3;
            if (imported.classBtn1) state.classBtn1 = imported.classBtn1;
            if (imported.classBtn2) state.classBtn2 = imported.classBtn2;
            if (imported.classBtn3) state.classBtn3 = imported.classBtn3;
            if (imported.classBtn4 !== undefined) state.classBtn4 = imported.classBtn4;
            if (imported.attBtn1) state.attBtn1 = imported.attBtn1;
            if (imported.attBtn3) state.attBtn3 = imported.attBtn3;
            if (imported.history) state.history = imported.history;
            if (imported.customLinks) state.customLinks = imported.customLinks;
            if (imported.courseAttPrefs) state.courseAttPrefs = imported.courseAttPrefs;
            if (imported.scoreLockPassword !== undefined) state.scoreLockPassword = imported.scoreLockPassword;
            if (imported.commWritingMode) state.commWritingMode = imported.commWritingMode;
            if (imported.commFont) state.commFont = imported.commFont;
            if (imported.commFontSize) state.commFontSize = imported.commFontSize;
            if (imported.commShowZhuyin !== undefined) state.commShowZhuyin = imported.commShowZhuyin;
            if (imported.commShowAttendance !== undefined) state.commShowAttendance = imported.commShowAttendance;
            if (imported.sheetsId) state.sheetsId = imported.sheetsId;
            
            saveState();
            renderClassSelect();
            renderStudents();
            renderGroups();
            if (typeof renderAttendance === 'function') renderAttendance();
            updateDashboard();
            applyTheme();
            return true;
        } catch(err) {
            console.error('loadFromDriveAppData error:', err);
            return false;
        }
    }

    document.getElementById('btn-end-class').onclick = async () => {
        if(!accessToken) {
            addActivity("下課囉！(目前僅儲存於本地瀏覽器)");
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.3 } });
            alert("下課囉！資料已安全儲存在您的瀏覽器中。\n\n若您希望將備份同步至 Google 雲端硬碟，請先在「設定」中連結 Google 帳號。");
            return;
        }

        const btn = document.getElementById('btn-end-class');
        btn.innerHTML = `<span>上傳中...</span>`;
        
        try {
            const response = await uploadToDriveAppData();
            
            if(response.ok) {
                addActivity(`✅ 課後存檔已同步至雲端硬碟！`);
                saveDailyRecord(); // Save to local history
                await syncToGoogleSheets(); // Sync to Google Sheets
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.4 } });
                alert(`太棒了！下課囉！\n\n您的班級資料已備份至雲端硬碟（appDataFolder），今日紀錄也同步到 Google 試算表了！\n\n在其他裝置登入同帳號即可還原資料。`);
            } else if (response.status === 401) {
                accessToken = null;
                localStorage.removeItem('smartclass_google_token');
                updateGoogleStatus(false);
                throw new Error('Google 授權已過期，請至設定重新連結 Google 帳號後再試一次。');
            } else {
                throw new Error('Upload request failed with status ' + response.status);
            }
        } catch(err) {
            console.error('Google Drive Upload Error:', err);
            alert("上傳雲端硬碟時發生錯誤，但資料已確保儲存於瀏覽器中。\n\n錯誤資訊：" + err.message);
        } finally {
            btn.innerHTML = `<i data-lucide="cloud"></i> <span>雲端存檔</span>`;
            lucide.createIcons();
        }
    };

    // --- Mobile Sidebar Setup ---
    const mobileMenuBtn = document.getElementById('btn-mobile-menu');
    const sidebar = document.querySelector('.sidebar');
    let overlay = document.querySelector('.mobile-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-overlay';
        document.body.appendChild(overlay);
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.onclick = () => {
            sidebar.classList.add('mobile-show');
            overlay.classList.add('show');
        };
        overlay.onclick = () => {
            sidebar.classList.remove('mobile-show');
            overlay.classList.remove('show');
        };
        document.querySelectorAll('.nav-links li').forEach(li => {
            li.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('mobile-show');
                    overlay.classList.remove('show');
                }
            });
        });
    }

    // --- Score Lock Logic ---
    function updateLockUI() {
        const btn1 = document.getElementById('btn-lock-scores1');
        const text1 = document.getElementById('text-lock-scores1');
        const btn2 = document.getElementById('btn-lock-scores2');
        const text2 = document.getElementById('text-lock-scores2');
        
        if (state.scoreLocked) {
            if(btn1) { btn1.innerHTML = '<i data-lucide="lock"></i> <span>鎖定中</span>'; btn1.style.background = 'var(--danger)'; btn1.style.color = 'white'; }
            if(btn2) { btn2.innerHTML = '<i data-lucide="lock"></i> <span>鎖定中</span>'; btn2.style.background = 'var(--danger)'; btn2.style.color = 'white'; }
        } else {
            if(btn1) { btn1.innerHTML = '<i data-lucide="unlock"></i> <span>未鎖定</span>'; btn1.style.background = ''; btn1.style.color = ''; }
            if(btn2) { btn2.innerHTML = '<i data-lucide="unlock"></i> <span>未鎖定</span>'; btn2.style.background = ''; btn2.style.color = ''; }
        }
        if(typeof lucide !== 'undefined') lucide.createIcons();
    }
    
    function toggleScoreLock() {
        if (state.scoreLocked) {
            if (state.scoreLockPassword) {
                document.getElementById('inp-unlock-password').value = '';
                document.getElementById('unlock-modal').style.display = 'flex';
            } else {
                state.scoreLocked = false;
                saveState();
                updateLockUI();
                addActivity(`分數已解除鎖定`);
            }
        } else {
            state.scoreLocked = true;
            saveState();
            updateLockUI();
            addActivity(`分數已鎖定`);
        }
    }
    
    if(document.getElementById('btn-lock-scores1')) document.getElementById('btn-lock-scores1').onclick = toggleScoreLock;
    if(document.getElementById('btn-lock-scores2')) document.getElementById('btn-lock-scores2').onclick = toggleScoreLock;
    
    const unlockModal = document.getElementById('unlock-modal');
    if(document.getElementById('btn-submit-unlock')) {
        document.getElementById('btn-submit-unlock').onclick = () => {
            const pwd = document.getElementById('inp-unlock-password').value;
            if (pwd === state.scoreLockPassword) {
                state.scoreLocked = false;
                saveState();
                updateLockUI();
                unlockModal.style.display = 'none';
                addActivity(`分數已解除鎖定`);
            } else {
                alert("密碼錯誤！");
            }
        };
    }
    if(document.getElementById('settings-lock-password')) {
        document.getElementById('settings-lock-password').value = state.scoreLockPassword;
    }
    if(document.getElementById('btn-apply-password')) {
        document.getElementById('btn-apply-password').onclick = () => {
            state.scoreLockPassword = document.getElementById('settings-lock-password').value;
            saveState();
            alert("鎖定密碼已更新！忘記密碼請從匯出資料JSON尋找。");
        };
    }

    // --- Final Initialization ---

    const globalDateSelect = document.getElementById('global-date-select');
    if (globalDateSelect) {
        const today = new Date();
        for (let i = -10; i <= 10; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            const opt = document.createElement('option');
            opt.value = d.toLocaleDateString('en-CA'); // YYYY-MM-DD local format
            
            const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
            const displayStr = `${d.getMonth() + 1}/${d.getDate()} (${weekdays[d.getDay()]})`;
            
            opt.textContent = i === 0 ? `今天 ${displayStr}` : displayStr;
            if (i === 0) opt.selected = true;
            globalDateSelect.appendChild(opt);
        }

        window.currentEditDate = globalDateSelect.value;
        globalDateSelect.onchange = (e) => {
            window.currentEditDate = e.target.value;
            loadDataForDate(window.currentEditDate);
        };
    }

    // --- Sidebar Toggle ---
    const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
    const mainSidebar = document.getElementById('main-sidebar');
    if (btnToggleSidebar && mainSidebar) {
        btnToggleSidebar.onclick = () => {
            mainSidebar.classList.toggle('collapsed');
            const txt = document.getElementById('sidebar-toggle-text');
            if (txt) {
                if (mainSidebar.classList.contains('collapsed')) {
                    txt.textContent = '展開';
                } else {
                    txt.textContent = '收起';
                }
            }
            if(typeof lucide !== 'undefined') lucide.createIcons();
        };
    }

    // --- Web Links Logic ---
    window.renderWeblinks = () => {
        const container = document.getElementById('weblinks-grid-container');
        if(!container) return;
        
        const builtin = `
            <a href="https://littleyi22.github.io/class-management-kit/" target="_blank" class="tool-card" style="text-decoration: none; color: inherit; display: block;">
                <div class="tool-icon" style="color: #3b82f6;"><i data-lucide="briefcase"></i></div>
                <h3>班級經營助手</h3>
                <p>實用班級經營工具</p>
            </a>
            <a href="https://littleyi22.github.io/PDF01/" target="_blank" class="tool-card" style="text-decoration: none; color: inherit; display: block;">
                <div class="tool-icon" style="color: #ef4444;"><i data-lucide="file-minus"></i></div>
                <h3>PDF 拆分合併</h3>
                <p>輕鬆處理 PDF 檔案</p>
            </a>
            <a href="https://littleyi22.github.io/exam-countdown-timer/" target="_blank" class="tool-card" style="text-decoration: none; color: inherit; display: block;">
                <div class="tool-icon" style="color: #f59e0b;"><i data-lucide="clock"></i></div>
                <h3>重要時刻倒數計時</h3>
                <p>掌握會考時程</p>
            </a>
            <a href="https://littleyi22.github.io/line-class/" target="_blank" class="tool-card" style="text-decoration: none; color: inherit; display: block;">
                <div class="tool-icon" style="color: #10b981;"><i data-lucide="message-circle"></i></div>
                <h3>班級事務通知</h3>
                <p>Line 小幫手</p>
            </a>
            <a href="https://littleyi22.github.io/classroom-screen/" target="_blank" class="tool-card" style="text-decoration: none; color: inherit; display: block;">
                <div class="tool-icon" style="color: #8b5cf6;"><i data-lucide="calendar"></i></div>
                <h3>段考時程表</h3>
                <p>段考時間管理</p>
            </a>
        `;

        let customHtml = '';
        state.customLinks.forEach((link, idx) => {
            customHtml += `
                    <div style="position: relative;">
                        <a href="${link.url}" target="_blank" class="tool-card" style="text-decoration: none; color: inherit; display: block; height: 100%;">
                            <div class="tool-icon" style="color: var(--primary);"><i data-lucide="globe"></i></div>
                            <h3>${link.title}</h3>
                            <p>${link.desc || '自訂連結'}</p>
                        </a>
                        <button class="btn-danger" style="position: absolute; top: 10px; right: 10px; padding: 0.2rem 0.5rem; font-size: 0.8rem; border-radius: 6px;" onclick="event.preventDefault(); window.delCustomLink(${idx});"><i data-lucide="trash-2" style="width: 14px; height: 14px;"></i></button>
                    </div>
            `;
        });
        
        container.innerHTML = builtin + customHtml;
        if(typeof lucide !== 'undefined') lucide.createIcons();
    };

    window.delCustomLink = (idx) => {
        if(confirm("確定要刪除這個自訂連結嗎？")) {
            state.customLinks.splice(idx, 1);
            saveState();
            renderWeblinks();
        }
    };

    const addLinkModal = document.getElementById('add-link-modal');
    if (document.getElementById('btn-add-custom-link')) {
        document.getElementById('btn-add-custom-link').onclick = () => {
            document.getElementById('inp-custom-link-title').value = '';
            document.getElementById('inp-custom-link-url').value = '';
            document.getElementById('inp-custom-link-desc').value = '';
            addLinkModal.style.display = 'flex';
        };
    }
    if (document.getElementById('btn-save-custom-link')) {
        document.getElementById('btn-save-custom-link').onclick = () => {
            const title = document.getElementById('inp-custom-link-title').value.trim();
            const url = document.getElementById('inp-custom-link-url').value.trim();
            const desc = document.getElementById('inp-custom-link-desc').value.trim();
            
            if (!title || !url) {
                alert("請填寫標題與網址！");
                return;
            }
            
            let finalUrl = url;
            if (!/^https?:\/\//i.test(finalUrl)) {
                finalUrl = 'http://' + finalUrl;
            }
            
            state.customLinks.push({ title, url: finalUrl, desc });
            saveState();
            addActivity("新增自訂連結：" + title);
            addLinkModal.style.display = 'none';
            renderWeblinks();
        };
    }

    // --- Course Attendance Logic ---
    window.getCourseAttSettings = () => {
        if(!state.courseAttPrefs) return [];
        return state.courseAttPrefs.split('\n').map(line => {
            const parts = line.split(',');
            if (parts.length >= 4) {
                return {
                    period: parts[0].trim(),
                    name: parts[1].trim(),
                    lateTime: parts[2].trim(),
                    resetMins: parseInt(parts[3].trim()) || 0
                };
            }
            return null;
        }).filter(x => x);
    };

    window.renderCourseAttendanceTab = () => {
        const select = document.getElementById('course-att-period-select');
        if (!select) return;
        
        const settings = getCourseAttSettings();
        const currentVal = select.value;
        select.innerHTML = '';
        
        settings.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s.period;
            opt.textContent = `第${s.period}節 - ${s.name} (遲到: ${s.lateTime})`;
            opt.dataset.latetime = s.lateTime;
            select.appendChild(opt);
        });
        
        if (currentVal && settings.find(s => s.period === currentVal)) {
            select.value = currentVal;
        } else if (settings.length > 0) {
            select.value = settings[0].period;
        }
        
        select.onchange = () => renderCourseAttendanceGrid();
        renderCourseAttendanceGrid();
    };

    window.renderCourseAttendanceGrid = () => {
        const currClass = getCurrentClass();
        const grid = document.getElementById('course-attendance-grid');
        const select = document.getElementById('course-att-period-select');
        if(!grid || !select || !currClass) return;
        
        const period = select.value;
        grid.innerHTML = '';
        
        if(!currClass.courseAtt) currClass.courseAtt = {};
        if(!currClass.courseAtt[period]) currClass.courseAtt[period] = {};
        
        const lateTime = select.options[select.selectedIndex]?.dataset.latetime || '00:00';
        
        currClass.students.forEach(s => {
            const card = document.createElement('div');
            card.className = 'student-card';
            
            const record = currClass.courseAtt[period][s.id];
            let arriveBadge = '';
            let btnStyle = '';
            let btnText = '簽到';
            
            if (record) {
                if (record.time > lateTime) {
                    arriveBadge = `<span class="badge" style="color:var(--warning); font-size:0.75rem">⏰遲到 (${record.time})</span>`;
                } else {
                    arriveBadge = `<span class="badge" style="color:var(--success); font-size:0.75rem">✅已到 (${record.time})</span>`;
                }
                btnStyle = 'background:var(--success); color:white; border:none;';
                btnText = '✔️已簽到';
            }
            
            card.innerHTML = `
                <div class="avatar" style="background:var(--secondary)">${s.name[0]}</div>
                <h4>${s.name}</h4>
                <div class="seat-no">座號: ${s.seatNo}</div>
                <div class="badges" style="min-height:20px; margin-top:0.3rem; display:flex; flex-wrap:wrap; justify-content:center; gap:2px;">
                    ${arriveBadge}
                </div>
                <div class="actions" style="margin-top:0.8rem;">
                    <button class="btn-secondary" style="width:100%; font-size:0.85rem; padding:0.5rem; ${btnStyle}" onclick="window.courseAttTog(${s.id}, '${period}', '${lateTime}')">${btnText}</button>
                </div>
            `;
            grid.appendChild(card);
        });
    };

    window.courseAttTog = (sId, period, lateTime) => {
        const currClass = getCurrentClass();
        if(!currClass.courseAtt) currClass.courseAtt = {};
        if(!currClass.courseAtt[period]) currClass.courseAtt[period] = {};
        
        const s = currClass.students.find(x => x.id === sId);
        if(!s) return;
        
        if (currClass.courseAtt[period][sId]) {
            delete currClass.courseAtt[period][sId];
            addActivity(`取消 ${s.name} 的課堂點名`);
        } else {
            const now = new Date();
            const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
            currClass.courseAtt[period][sId] = { time: timeStr };
            
            if (timeStr > lateTime) {
                addActivity(`${s.name} 第${period}節 課堂簽到 (⏰遲到 - ${timeStr})`);
                // 遲到也播放音效
                if (state.checkinSoundEnabled && typeof playSound === 'function') {
                    playSound('checkin-late');
                }
            } else {
                addActivity(`${s.name} 第${period}節 課堂簽到 (✅ ${timeStr})`);
                if (typeof confetti === 'function') {
                    const r = Math.random();
                    if (r < 0.33) {
                        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                    } else if (r < 0.66) {
                        confetti({ particleCount: 50, spread: 100, origin: { y: 0.6 }, shapes: ['star'], colors: ['#FFE400', '#FFBD00', '#E89400', '#FFCA6C', '#FDFFB8'] });
                    } else {
                        confetti({ particleCount: 150, spread: 60, origin: { y: 0.6 }, drift: 0 }); 
                    }
                    // 準時簽到音效：coin05 / powerup03 隨機
                    if (state.checkinSoundEnabled && typeof playSound === 'function') {
                        const snds = ['checkin-ontime-1', 'checkin-ontime-2'];
                        playSound(snds[Math.floor(Math.random() * snds.length)]);
                    }
                }
            }
        }
        saveState();
        renderCourseAttendanceGrid();
    };

    // Bind settings buttons
    window.renderCourseAttSettings = () => {
        const tbody = document.getElementById('course-att-tbody');
        if(!tbody) return;
        tbody.innerHTML = '';
        const prefs = typeof window.getCourseAttSettings === 'function' ? window.getCourseAttSettings() : [];
        if(prefs.length === 0) prefs.push({ period: '1', name: '', lateTime: '', resetMins: 45 });
        
        window.courseAttUiData = prefs;
        
        window.drawCourseAttSettings = () => {
            tbody.innerHTML = '';
            window.courseAttUiData.forEach((row, idx) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><input type="text" class="course-att-input-p custom-select" value="${row.period}" placeholder="例: 1" style="width: 50px;"></td>
                    <td><input type="text" class="course-att-input-n custom-select" value="${row.name}" placeholder="例: 國語" style="width: 100%;"></td>
                    <td><input type="time" class="course-att-input-l custom-select" value="${row.lateTime}" style="width: 100px;"></td>
                    <td><input type="number" class="course-att-input-r custom-select" value="${row.resetMins}" style="width: 60px;"></td>
                    <td><button class="btn-danger" style="padding: 0.2rem 0.5rem;" onclick="window.courseAttUiData.splice(${idx}, 1); window.drawCourseAttSettings()"><i data-lucide="trash-2" style="width:16px;height:16px;"></i></button></td>
                `;
                tbody.appendChild(tr);
            });
            if (typeof lucide !== 'undefined') lucide.createIcons();
        };
        window.drawCourseAttSettings();
    };

    if (document.getElementById('btn-add-course-att-row')) {
        document.getElementById('btn-add-course-att-row').onclick = () => {
            if(!window.courseAttUiData) window.courseAttUiData = [];
            let nextPeriod = '1';
            let nextReset = 45;
            let nextLate = '';
            const lastRow = window.courseAttUiData[window.courseAttUiData.length - 1];
            if(lastRow) {
                const num = parseInt(lastRow.period);
                if(!isNaN(num)) nextPeriod = (num + 1).toString();
                nextReset = lastRow.resetMins;
                nextLate = lastRow.lateTime;
            }
            window.courseAttUiData.push({ period: nextPeriod, name: '', lateTime: nextLate, resetMins: nextReset });
            window.drawCourseAttSettings();
        };
    }

    if(document.getElementById('btn-apply-course-att')) {
        document.getElementById('btn-apply-course-att').onclick = () => {
            const trs = document.querySelectorAll('#course-att-tbody tr');
            const lines = [];
            trs.forEach(tr => {
                const p = tr.querySelector('.course-att-input-p').value.trim();
                const n = tr.querySelector('.course-att-input-n').value.trim();
                const l = tr.querySelector('.course-att-input-l').value;
                const r = tr.querySelector('.course-att-input-r').value;
                if(p) lines.push(`${p},${n},${l},${r}`);
            });
            state.courseAttPrefs = lines.join('\n');
            saveState();
            alert("課堂點名批次設定已套用！");
            if (document.getElementById('course-attendance-tab') && document.getElementById('course-attendance-tab').classList.contains('active')) {
                renderCourseAttendanceTab();
            }
        };
    }
    
    // Auto render to populate existing values when modal opens
    document.getElementById('btn-settings-toggle').addEventListener('click', () => {
        if(typeof renderCourseAttSettings === 'function') renderCourseAttSettings();
    });

    renderClassSelect();
    if(window.currentEditDate) loadDataForDate(window.currentEditDate);
    renderStudents();
    renderActivities();
    updateDashboard();
    applyTheme();
    updateLinkPointsUI();
    updateLockUI();
    if (typeof updateCheckinSoundUI === 'function') updateCheckinSoundUI();
    lucide.createIcons();
});
