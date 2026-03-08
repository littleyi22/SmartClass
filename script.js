/**
 * SmartClass v.2 - JavaScript Logic
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
        user: null,
        timer: { seconds: 0, active: false, interval: null }
    };

    if (!state.currentClassId || !state.classes.find(c => c.id === state.currentClassId)) {
        state.currentClassId = state.classes[0].id;
    }

    const getCurrentClass = () => state.classes.find(c => c.id === state.currentClassId);

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

    // --- Core Functions ---
    const saveState = () => {
        localStorage.setItem('sc_v3_classes', JSON.stringify(state.classes));
        localStorage.setItem('sc_v3_curr_class', state.currentClassId);
        localStorage.setItem('sc_v3_activities', JSON.stringify(state.activities));
        localStorage.setItem('sc_v3_brand', state.brandName);
        localStorage.setItem('sc_v3_theme', state.theme);
        updateDashboard();
    };

    const addActivity = (msg) => {
        const currClass = getCurrentClass();
        if(!currClass) return;
        if (!currClass.activities) currClass.activities = [];
        const time = new Date().toLocaleTimeString('zh-TW', { hour12: false });
        currClass.activities.unshift({ time, msg });
        if (currClass.activities.length > 50) currClass.activities.pop();
        renderActivities();
        saveState();
    };

    // --- UI Elements ---
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
        brandInput: document.getElementById('settings-brand-name')
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
        });
    });

    const renderClassSelect = () => {
        elements.classSelect.innerHTML = '';
        state.classes.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.id;
            opt.textContent = c.name;
            if (c.id === state.currentClassId) opt.selected = true;
            elements.classSelect.appendChild(opt);
        });
    };

    elements.classSelect.onchange = (e) => {
        state.currentClassId = e.target.value;
        addActivity(`切換班級：${getCurrentClass().name}`);
        renderStudents();
        renderGroups();
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

    // --- Clock & Timer ---
    const updateClock = () => {
        const now = new Date();
        elements.curDate.textContent = now.toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
        elements.curTime.textContent = now.toLocaleTimeString('zh-TW', { hour12: false });
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

    function renderGroups() {
        const currClass = getCurrentClass();
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
            let html = `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:0.5rem;">
                <h4 style="color:var(--secondary); margin:0;">第 ${idx + 1} 組 (共${group.length}人) <span style="color:var(--warning); margin-left:1rem;">總分: ${groupScore}</span></h4>
                <div style="display:flex; gap:0.5rem;">
                    <button class="btn-secondary" onclick="window.modGroupS(${idx}, 1)" style="padding:0.2rem 0.5rem; background:var(--success); color:white; border:none; border-radius:4px; font-size:0.8rem; cursor:pointer;">+小組分</button>
                    <button class="btn-secondary" onclick="window.modGroupS(${idx}, -1)" style="padding:0.2rem 0.5rem; background:var(--danger); color:white; border:none; border-radius:4px; font-size:0.8rem; cursor:pointer;">-小組分</button>
                </div>
            </div>`;
            group.forEach(sRef => {
                const s = currClass.students.find(x => x.id === sRef.id) || sRef;
                html += `<div class="group-member group-member-drag" draggable="true" style="margin-bottom:0.4rem; padding:0.4rem; background:rgba(0,0,0,0.2); border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
                    <div style="font-size:0.95rem;">${s.seatNo}. ${s.name} (<span style="color:var(--success); font-weight:bold;">${s.score}</span>)</div>
                    <div style="display:flex; gap:0.3rem;">
                        <button onclick="window.modS(${s.id}, 1)" style="padding:2px 6px; background:var(--success); color:white; border:none; border-radius:4px; font-size:0.8rem; cursor:pointer;">+</button>
                        <button onclick="window.modS(${s.id}, -1)" style="padding:2px 6px; background:var(--danger); color:white; border:none; border-radius:4px; font-size:0.8rem; cursor:pointer;">-</button>
                    </div>
                </div>`;
            });
            gDiv.innerHTML = html;
            container.appendChild(gDiv);
        });
        lucide.createIcons();
    }

    // --- Student Logic ---
    const renderStudents = (filter = '') => {
        const currClass = getCurrentClass();
        elements.studentGrid.innerHTML = '';
        const list = currClass.students.filter(s => s.name.includes(filter) || s.seatNo.toString().includes(filter));
        
        list.forEach(s => {
            const card = document.createElement('div');
            card.className = 'student-card';
            card.innerHTML = `
                <div class="avatar">${s.name[0]}</div>
                <h4>${s.name}</h4>
                <div class="seat-no">座號: ${s.seatNo}</div>
                <div class="badges" style="min-height:24px; margin-top:0.5rem">
                    ${s.missingHW ? '<span class="badge hw" style="color:var(--danger); font-size:0.8rem">⚠ 未交</span>' : ''}
                    ${s.goodBehavior ? '<span class="badge" style="color:var(--success); font-size:0.8rem">★ 優良</span>' : ''}
                </div>
                <div class="score-line" style="display:flex; justify-content:space-between; align-items:center; margin:1rem 0; background:rgba(0,0,0,0.1); padding:0.5rem; border-radius:12px;">
                    <button class="btn-secondary" style="padding:0.3rem 0.6rem; border:none; background:var(--danger); color:white" onclick="window.modS(${s.id},-1)">-</button>
                    <strong style="font-size:1.4rem">${s.score}</strong>
                    <button class="btn-secondary" style="padding:0.3rem 0.6rem; border:none; background:var(--success); color:white" onclick="window.modS(${s.id},1)">+</button>
                </div>
                <div class="actions" style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-bottom:0.5rem;">
                    <button class="btn-secondary" style="font-size:0.85rem; padding:0.5rem" onclick="window.togS(${s.id},'missingHW')">HW</button>
                    <button class="btn-secondary" style="font-size:0.85rem; padding:0.5rem" onclick="window.togS(${s.id},'goodBehavior')">加星</button>
                </div>
                <input type="text" class="custom-select" placeholder="備註..." value="${s.note || ''}" style="margin-top:0.5rem; width:100%; border:none; background:rgba(255,255,255,0.05); color:white; font-size:0.85rem; padding:0.4rem; border-radius:6px;" onchange="window.saveNote(${s.id}, this.value)">
            `;
            elements.studentGrid.appendChild(card);
        });
        if(document.getElementById('groups-tab').classList.contains('active')) renderGroups();
    };

    window.modS = (id, val) => {
        const currClass = getCurrentClass();
        const s = currClass.students.find(x => x.id === id);
        if (s) {
            s.score += val;
            if (val > 0) confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
            addActivity(`${s.name} 個人分數 ${val > 0 ? '+' : ''}${val}`);
            
            if (currClass.groups) {
                const gIdx = currClass.groups.findIndex(g => g.find(x => x.id === id));
                if (gIdx !== -1) {
                    if (!currClass.groupScores) currClass.groupScores = [];
                    currClass.groupScores[gIdx] = (currClass.groupScores[gIdx] || 0) + val;
                    addActivity(`第 ${gIdx+1} 組 連帶加 ${val > 0 ? '+' : ''}${val} 分`);
                }
            }
            
            renderStudents();
            saveState();
        }
    };

    window.togS = (id, field) => {
        const currClass = getCurrentClass();
        const s = currClass.students.find(x => x.id === id);
        if (s) {
            s[field] = !s[field];
            renderStudents();
            saveState();
        }
    };

    window.saveNote = (id, val) => {
        const currClass = getCurrentClass();
        const s = currClass.students.find(x => x.id === id);
        if (s) {
            s.note = val;
            saveState();
        }
    };

    document.getElementById('student-search-input').oninput = (e) => renderStudents(e.target.value);
    
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
        if(confirm("確定要將全班分數歸零嗎？")) {
            getCurrentClass().students.forEach(s => s.score = 0);
            addActivity("已重置全班分數");
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
                confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
                
                // Keep references for "Pick Again"
                document.getElementById('btn-pick-again').style.display = 'block';
                document.getElementById('btn-pick-again').onclick = () => {
                    runPickerAnimation(candidates, labelPrefix, formatWinnerObj, onWin);
                };
                
                if(onWin) onWin(winnerObj);
            }
        }, 100);
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

    // Dummy Manual grouping logic
    document.getElementById('btn-manual-grouping').onclick = () => {
        alert("手動微調提示：請在分組產生後，用滑鼠隨意調整位置 (此為視覺參考)");
    };

    window.modGroupS = (gIdx, val) => {
        const currClass = getCurrentClass();
        if(!currClass.groupScores) currClass.groupScores = new Array(currClass.groups ? currClass.groups.length : 10).fill(0);
        currClass.groupScores[gIdx] = (currClass.groupScores[gIdx] || 0) + val;
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
        peer = new Peer(classroomId);
        
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
                    const vol = Math.min(100, Math.max(0, average * 1.5));
                    
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

    function initWhiteboard() {
        const c = document.getElementById('whiteboard-canvas');
        if(!c) return;
        const ctx = c.getContext('2d');
        
        // 取得畫布當下實際被撐開的大小，並以此設定真實解析度
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
        // Basic touch
        c.ontouchstart = e => { e.preventDefault(); startPos(e); };
        c.ontouchend = e => { e.preventDefault(); endPos(); };
        c.ontouchmove = e => { e.preventDefault(); draw(e); };

        document.getElementById('color-black').onclick = () => color='black';
        document.getElementById('color-red').onclick = () => color='red';
        document.getElementById('color-blue').onclick = () => color='blue';
        const eraserBtn = document.getElementById('color-eraser');
        if(eraserBtn) eraserBtn.onclick = () => color='white';
        document.getElementById('btn-clear-board').onclick = () => ctx.clearRect(0,0,c.width,c.height);
    }

    // 7. Dice
    const diceModal = document.getElementById('dice-modal');
    const diceDisplay = document.getElementById('dice-display');
    const btnDice = document.getElementById('btn-roll-dice');
    const faces = ['⚀','⚁','⚂','⚃','⚄','⚅'];

    document.getElementById('tool-dice').onclick = () => diceModal.style.display = 'flex';
    btnDice.onclick = () => {
        let count = 0;
        btnDice.disabled = true;
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
        settingsModal.style.display = 'flex';
    };

    elements.themeBtns.forEach(btn => {
        btn.onclick = () => {
            state.theme = btn.dataset.theme;
            applyTheme();
            saveState();
        };
    });

    const applyTheme = () => {
        elements.body.className = `theme-${state.theme}`;
    };

    document.getElementById('btn-apply-brand').onclick = () => {
        state.brandName = elements.brandInput.value || "SmartClass";
        elements.brandName.textContent = state.brandName;
        saveState();
        alert("標題已更新！");
    };

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
        saveState();
        alert('功課已儲存');
    };

    // --- Dashboard Stats ---
    const updateDashboard = () => {
        const currClass = getCurrentClass();
        document.getElementById('stat-total-students').textContent = currClass.students.length;
        document.getElementById('stat-good-behavior').textContent = currClass.students.filter(s => s.goodBehavior).length;
        document.getElementById('stat-missing-hw').textContent = currClass.students.filter(s => s.missingHW).length;
        
        elements.brandName.textContent = state.brandName;
        
        if(elements.hwInput) elements.hwInput.value = currClass.homework || '';
        if(elements.progInput1) elements.progInput1.value = currClass.teachingProgress || '';
        if(elements.progInput2) elements.progInput2.value = currClass.teachingProgress || '';
        
        renderActivities();
    };

    const renderActivities = () => {
        if (!elements.activityList) return;
        const currClass = getCurrentClass();
        const acts = currClass.activities || [];
        elements.activityList.innerHTML = acts.length ? 
            acts.map(a => `<div style="padding:0.5rem 0; border-bottom:1px solid rgba(255,255,255,0.05); display:flex; justify-content:space-between;"><span>${a.msg}</span><small style="color:var(--text-muted)">${a.time}</small></div>`).join('') :
            '<div class="empty-state">尚無活動紀錄</div>';
    };

    const saveLocalBtn = document.getElementById('btn-save-local');
    if (saveLocalBtn) {
        saveLocalBtn.onclick = () => {
            saveState();
            addActivity("手動本地存檔成功");
            alert("資料已成功儲存至瀏覽器！");
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

    // --- Modal Closing ---
    document.querySelectorAll('.close').forEach(c => {
        c.onclick = () => document.getElementById(c.dataset.modal).style.display = 'none';
    });

    window.onclick = (e) => {
        if (e.target.classList.contains('modal')) e.target.style.display = 'none';
    };

    // --- Google Auth & Cloud Sync ---
    const CLIENT_ID = '83309907791-j9sqgjm9e7dfeuo20pmcttm91t8ce8e9.apps.googleusercontent.com';
    const SCOPES = 'https://www.googleapis.com/auth/drive.file';

    let tokenClient;
    let accessToken = null;

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

    // Initialize the token client
    if (window.google && window.google.accounts) {
        tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: CLIENT_ID,
            scope: SCOPES,
            callback: (tokenResponse) => {
                if(tokenResponse && tokenResponse.access_token) {
                    accessToken = tokenResponse.access_token;
                    updateGoogleStatus(true);
                    addActivity("✅ 已成功串接 Google 雲端硬碟");
                    alert("Google 帳號連結成功！未來的「下課存檔」將會自動上傳備份至您的雲端硬碟。");
                }
            },
        });
    }

    document.getElementById('btn-google-login').onclick = () => {
        if(tokenClient) {
            tokenClient.requestAccessToken({prompt: 'consent'});
        } else {
            alert("Google 登入服務尚未載入完畢，請重新整理網頁後再試一次。");
        }
    };

    document.getElementById('btn-header-google-logout').onclick = () => {
        if (accessToken) {
            google.accounts.oauth2.revoke(accessToken, () => {
                accessToken = null;
                updateGoogleStatus(false);
                addActivity("✅ 已登出 Google 帳號");
                alert("已成功登出 Google 帳號！");
            });
        }
    };

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
            const fileMetadata = {
                name: `智慧教室資料備份_${new Date().toLocaleDateString()}.json`,
                mimeType: 'application/json'
            };
            
            const dataStr = JSON.stringify(state);
            const file = new Blob([dataStr], { type: 'application/json' });
            
            const form = new FormData();
            form.append('metadata', new Blob([JSON.stringify(fileMetadata)], { type: 'application/json' }));
            form.append('file', file);
            
            const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: form
            });
            
            if(response.ok) {
                const resData = await response.json();
                addActivity(`✅ 課後存檔已同步至雲端硬碟！`);
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.4 } });
                alert(`太棒了！下課囉！\n\n您今天的全班資料變動已經自動上傳一份獨立的 JSON 備份檔至您的 Google 雲端硬碟了！`);
            } else {
                throw new Error('Upload request failed with status ' + response.status);
            }
        } catch(err) {
            console.error('Google Drive Upload Error:', err);
            alert("上傳雲端硬碟時發生錯誤，但資料已確保儲存於瀏覽器中。\n\n錯誤資訊：" + err.message);
        } finally {
            btn.innerHTML = `<i data-lucide="log-out"></i> <span>下課存檔</span>`;
            lucide.createIcons();
        }
    };

    // --- Initialize ---
    renderClassSelect();
    renderStudents();
    renderActivities();
    updateDashboard();
    applyTheme();
    lucide.createIcons();
});
