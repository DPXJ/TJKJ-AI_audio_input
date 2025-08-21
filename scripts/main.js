// 页面数据
const pageData = {
    home: {
        title: '工作台',
        subtitle: '首页',
        content: `
            <div class="mobile-page workbench-page">
                <div class="mobile-header">
                    <h1>工作台</h1>
                </div>
                <div class="mobile-content">
                    <!-- 组织卡片 -->
                    <div class="card org-card">
                        <div class="org-row">
                            <div class="org-name">
                                龙腾虎跃有限公司（壹）
                        </div>
                            <a class="org-switch" href="javascript:void(0)">切换组织 <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    
                    <!-- 统计概览 -->
                    <div class="card stats-card">
                        <div class="wb-stats-grid">
                            <div class="wb-stat-item">
                                <div class="wb-stat-number">2亩</div>
                                <div class="wb-stat-label">管理规模</div>
                            </div>
                            <div class="wb-stat-item">
                                <div class="wb-stat-number">1个</div>
                                <div class="wb-stat-label">管理项目</div>
                        </div>
                            <div class="wb-stat-item">
                                <div class="wb-stat-number">1/1个</div>
                                <div class="wb-stat-label">管理基地/地块</div>
                            </div>
                            <div class="wb-stat-item">
                                <div class="wb-stat-number">2亩</div>
                                <div class="wb-stat-label">当前播种</div>
                            </div>
                            <div class="wb-stat-item">
                                <div class="wb-stat-number">0种</div>
                                <div class="wb-stat-label">种养品种</div>
                            </div>
                            <div class="wb-stat-item">
                                <div class="wb-stat-number">0个</div>
                                <div class="wb-stat-label">物联网设备</div>
                        </div>
                            </div>
                            </div>

                    <!-- 当前生产主体 -->
                    <div class="card subject-card">
                        <div class="subject-row">
                            <div class="subject-title">当前生产主体</div>
                            <a class="subject-switch" href="javascript:void(0)">切换 <i class="fas fa-arrow-right"></i></a>
                            </div>
                        <div class="subject-desc">大厅水培植物 | 一号分区</div>
                        </div>

                    <!-- 数字大田功能入口 -->
                    <div class="card">
                        <div class="section-title">数字大田</div>
                        <div class="feature-grid">
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-seedling"></i></div><div class="fi-text">种植计划</div></div>
                            <div class="feature-item clickable" onclick="loadPage('farmCalendar')"><div class="fi-icon"><i class="fas fa-calendar-alt"></i></div><div class="fi-text">农事日历</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-bug"></i></div><div class="fi-text">病虫害识别</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-user-md"></i></div><div class="fi-text">专家诊断</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-warehouse"></i></div><div class="fi-text">投入品管理</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-file-signature"></i></div><div class="fi-text">投入品申请</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-people-carry"></i></div><div class="fi-text">临时工申请</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-stamp"></i></div><div class="fi-text">农事审批</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-receipt"></i></div><div class="fi-text">我的领用</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-bug"></i></div><div class="fi-text">病虫害识别</div></div>
                            <div class="feature-item clickable" onclick="loadPage('fieldWorkstation')"><div class="fi-icon"><i class="fas fa-microchip"></i></div><div class="fi-text">田间工作站</div></div>
                            <div class="feature-item disabled"><div class="fi-icon"><i class="fas fa-ellipsis-h"></i></div><div class="fi-text">更多</div></div>
                            </div>
                            </div>
                            </div>

                <!-- 底部导航 -->
                <div class="mobile-footer tabbar">
                    <div class="tab-item"><i class="fas fa-home"></i><span>首页</span></div>
                    <div class="tab-item active"><i class="fas fa-briefcase"></i><span>工作台</span></div>
                    <div class="tab-item"><i class="fas fa-comment-dots"></i><span>消息</span></div>
                    <div class="tab-item"><i class="fas fa-user"></i><span>我的</span></div>
                </div>
            </div>
        `
    },
    
    profile: {
        title: '个人资料',
        subtitle: '管理您的个人信息',
        content: `
            <div class="mobile-page">
                <div class="mobile-header">
                    <h1>个人资料</h1>
                    <div class="subtitle">管理您的个人信息</div>
                </div>
                <div class="mobile-content">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">基本信息</div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">头像</label>
                            <div style="text-align: center; padding: 20px;">
                                <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #667eea, #764ba2); display: inline-flex; align-items: center; justify-content: center; color: white; font-size: 32px;">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div style="margin-top: 10px;">
                                    <button class="btn btn-secondary">更换头像</button>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">姓名</label>
                            <input type="text" class="form-input" value="张三" placeholder="请输入姓名">
                        </div>
                        <div class="form-group">
                            <label class="form-label">手机号</label>
                            <input type="tel" class="form-input" value="138****8888" placeholder="请输入手机号">
                        </div>
                        <div class="form-group">
                            <label class="form-label">邮箱</label>
                            <input type="email" class="form-input" value="zhangsan@example.com" placeholder="请输入邮箱">
                        </div>
                        <div class="form-group">
                            <label class="form-label">职位</label>
                            <input type="text" class="form-input" value="产品经理" placeholder="请输入职位">
                        </div>
                        <button class="btn" style="width: 100%;">保存修改</button>
                    </div>
                </div>
            </div>
        `
    },
    
    settings: {
        title: '设置',
        subtitle: '系统设置与偏好',
        content: `
            <div class="mobile-page">
                <div class="mobile-header">
                    <h1>设置</h1>
                    <div class="subtitle">系统设置与偏好</div>
                </div>
                <div class="mobile-content">
                    <div class="card">
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-bell"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">消息通知</div>
                                <div class="list-item-subtitle">管理推送通知设置</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">隐私安全</div>
                                <div class="list-item-subtitle">账户安全设置</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-language"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">语言设置</div>
                                <div class="list-item-subtitle">简体中文</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-moon"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">深色模式</div>
                                <div class="list-item-subtitle">切换深色主题</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-question-circle"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">帮助中心</div>
                                <div class="list-item-subtitle">使用指南与常见问题</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-info-circle"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">关于我们</div>
                                <div class="list-item-subtitle">版本 1.0.0</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    farmCalendar: {
        title: '农事日历',
        subtitle: '农事活动管理',
        content: `
            <div class="mobile-page farmCalendar-page">
                <div class="mobile-header">
                    <button class="back-btn" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
                    <h1>农事日历</h1>
                    <div class="subtitle">农事活动管理</div>
                </div>
                <div class="mobile-content">
                    <!-- 日历导航 -->
                    <div class="calendar-nav">
                        <div class="calendar-header">
                            <i class="fas fa-chevron-left"></i>
                            <span>2024年1月</span>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div class="weekdays">
                            <div class="weekday">日</div>
                            <div class="weekday">一</div>
                            <div class="weekday">二</div>
                            <div class="weekday">三</div>
                            <div class="weekday">四</div>
                            <div class="weekday">五</div>
                            <div class="weekday">六</div>
                        </div>
                        <div class="date-row">
                            <div class="date-item">
                                <div class="date-number">31</div>
                                <div class="date-text">12月</div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">1</div>
                                <div class="date-text">元旦</div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">2</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">3</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">4</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">5</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">6</div>
                                <div class="date-text"></div>
                            </div>
                        </div>
                        <div class="date-row">
                            <div class="date-item">
                                <div class="date-number">7</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">8</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">9</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">10</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">11</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">12</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">13</div>
                                <div class="date-text"></div>
                            </div>
                        </div>
                        <div class="date-row">
                            <div class="date-item">
                                <div class="date-number">14</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">15</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item today">
                                <div class="date-number">16</div>
                                <div class="date-text">今天</div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">17</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">18</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">19</div>
                                <div class="date-text"></div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">20</div>
                                <div class="date-text"></div>
                            </div>
                        </div>
                        <div class="calendar-expand">
                            <i class="fas fa-chevron-down"></i> 展开更多
                        </div>
                    </div>
                    
                    <!-- 活动列表 -->
                    <div class="activities-section">
                        <h3>今日活动</h3>
                        <div class="activity-card" onclick="loadPage('farmActivityDetail')">
                            <div class="activity-header">
                                <span class="activity-tag spraying">打药</span>
                                <div class="activity-title">打药测试 1</div>
                                <i class="fas fa-ellipsis-v activity-menu"></i>
                            </div>
                            <div class="activity-details">
                                <div class="detail-item">
                                    <span class="detail-label">时间：</span>
                                    <span class="detail-value">09:00 - 11:00</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">地点：</span>
                                    <span class="detail-value">A区小麦田</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">负责人：</span>
                                    <span class="detail-value">张三</span>
                                </div>
                            </div>
                            <div class="activity-status">
                                <div class="status-stamp">已完成</div>
                            </div>
                        </div>
                        
                        <div class="activity-card">
                            <div class="activity-header">
                                <span class="activity-tag weeding">除草</span>
                                <div class="activity-title">除草作业</div>
                                <i class="fas fa-ellipsis-v activity-menu"></i>
                            </div>
                            <div class="activity-details">
                                <div class="detail-item">
                                    <span class="detail-label">时间：</span>
                                    <span class="detail-value">14:00 - 16:00</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">地点：</span>
                                    <span class="detail-value">B区玉米田</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">负责人：</span>
                                    <span class="detail-value">李四</span>
                                </div>
                            </div>
                            <div class="activity-status">
                                <div class="status-stamp">进行中</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 悬浮添加按钮 -->
                <div class="fab">
                    <i class="fas fa-plus"></i>
                </div>
            </div>
        `
    },
    
    plantingPlan: {
        title: '种植计划',
        subtitle: '管理种植计划',
        content: `
            <div class="mobile-page plantingPlan-page">
                <div class="mobile-header">
                    <button class="back-btn" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
                    <h1>种植计划</h1>
                    <div class="subtitle">管理种植计划</div>
                </div>
                <div class="mobile-content">
                    <!-- 主导航标签 -->
                    <div class="plan-tabs">
                        <div class="plan-tab">
                            <i class="fas fa-book"></i>
                            <span>指导方案库</span>
                        </div>
                        <div class="plan-tab active">
                            <i class="fas fa-file-alt"></i>
                            <span>我的方案</span>
                        </div>
                    </div>
                    
                    <!-- 子标签过滤器 -->
                    <div class="filter-tabs">
                        <div class="filter-tab">全部</div>
                        <div class="filter-tab">未开始</div>
                        <div class="filter-tab active">进行中</div>
                        <div class="filter-tab">已完成</div>
                    </div>
                    
                    <!-- 种植计划卡片 -->
                    <div class="plan-card">
                        <div class="plan-header">
                            <div class="plan-status">
                                <span class="status-badge">进行中</span>
                                <span class="plan-type">打药</span>
                            </div>
                        </div>
                        <div class="plan-details">
                            <div class="detail-row">
                                <span class="detail-label">项目：</span>
                                <span class="detail-value">大厅水培植物 | 一号分区</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">基地/地块：</span>
                                <span class="detail-value">大厅水培植物 | 一号分区 | 一号基地(水培区 | 一号地块)</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">作物及品种：</span>
                                <span class="detail-value">水仙花(1号)</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">种植周期：</span>
                                <span class="detail-value">水仙花(2025-08-12~2025-08-15)</span>
                            </div>
                        </div>
                        <div class="plan-expand">
                            <span>展开</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="plan-actions">
                            <button class="btn btn-danger">结束</button>
                            <button class="btn btn-primary">查看农事活动</button>
                        </div>
                    </div>
                </div>

                <!-- 悬浮添加按钮 -->
                <div class="fab">
                    <i class="fas fa-plus"></i>
                </div>
            </div>
        `
    },
    
    addFarmActivity: {
        title: '添加农事活动',
        subtitle: '创建新的农事活动',
        content: `
            <div class="mobile-page addFarmActivity-page">
                <div class="mobile-header">
                    <button class="back-btn" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
                    <h1>添加农事活动</h1>
                </div>
                <div class="mobile-content">
                    <!-- AI语音输入提示 -->
                    <div class="ai-voice-tip">
                        <div class="tip-content">
                            <i class="fas fa-microphone-alt"></i>
                            <span>点击下方AI按钮，语音输入表单信息</span>
                        </div>
                        <div class="tip-examples">
                            <span class="example-title">示例：</span>
                            <span class="example-text">"我要为大厅水培植物基地的水仙花安排打药活动，时间是明天上午9点到11点，负责人是王成龙"</span>
                        </div>
                    </div>
                    
                    <div class="form-container">
                        <!-- 种植计划 -->
                        <div class="form-group">
                            <label class="form-label required">种植计划:</label>
                            <div class="form-input-wrapper">
                                <input type="text" class="form-input" id="plantingPlan" placeholder="请选择">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        
                        <!-- 基地地块 -->
                        <div class="form-group">
                            <label class="form-label required">基地地块</label>
                            <input type="text" class="form-input" id="basePlot" placeholder="">
                        </div>
                        
                        <!-- 作物 -->
                        <div class="form-group">
                            <label class="form-label required">作物:</label>
                            <input type="text" class="form-input" id="crop" placeholder="">
                        </div>
                        
                        <!-- 农事类型 -->
                        <div class="form-group">
                            <label class="form-label required">农事类型:</label>
                            <div class="form-input-wrapper">
                                <input type="text" class="form-input" id="activityType" placeholder="请选择">
                                <button class="add-type-btn">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        
                        <!-- 活动名称 -->
                        <div class="form-group">
                            <label class="form-label required">活动名称:</label>
                            <input type="text" class="form-input" id="activityName" placeholder="请输入">
                        </div>
                        
                        <!-- 活动时间 -->
                        <div class="form-group">
                            <label class="form-label required">活动时间:</label>
                            <div class="time-input-group">
                                <input type="text" class="form-input" id="startTime" placeholder="开始时间">
                                <span class="time-separator">至</span>
                                <input type="text" class="form-input" id="endTime" placeholder="结束时间">
                            </div>
                        </div>
                        
                        <!-- 负责人 -->
                        <div class="form-group">
                            <label class="form-label required">负责人:</label>
                            <div class="form-input-wrapper">
                                <input type="text" class="form-input" id="personInCharge" placeholder="请选择">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        
                        <!-- 是否用工 -->
                        <div class="form-group">
                            <label class="form-label">是否用工:</label>
                            <div class="toggle-switch">
                                <input type="checkbox" id="useLabor" class="toggle-input">
                                <label for="useLabor" class="toggle-label"></label>
                            </div>
                        </div>
                        
                        <!-- 备注 -->
                        <div class="form-group">
                            <label class="form-label">备注:</label>
                            <textarea class="form-textarea" id="remarks" placeholder="请输入内容"></textarea>
                        </div>
                    </div>
                </div>
                
                <!-- AI语音输入按钮 -->
                <div class="ai-voice-button" onclick="startVoiceInput()">
                    <i class="fas fa-microphone-alt"></i>
                    <span class="ai-text">AI</span>
                </div>
                
                <!-- 底部确认按钮 -->
                <div class="mobile-footer">
                    <button class="btn btn-confirm">确定</button>
                </div>
                
                <!-- AI语音识别弹窗 -->
                <div class="ai-voice-modal" id="aiVoiceModal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3>AI语音识别</h3>
                            <button class="close-btn" onclick="closeVoiceModal()">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="voice-status" id="voiceStatus">
                                <div class="status-icon">
                                    <i class="fas fa-microphone-alt"></i>
                                </div>
                                <div class="status-text">点击开始录音</div>
                            </div>
                            <div class="voice-recording" id="voiceRecording" style="display: none;">
                                <div class="recording-animation">
                                    <div class="wave-container">
                                        <div class="wave"></div>
                                        <div class="wave"></div>
                                        <div class="wave"></div>
                                    </div>
                                </div>
                                <div class="recording-text">正在录音，请说话...</div>
                                <div class="recording-time" id="recordingTime">00:00</div>
                                
                                <!-- 实时回显文字 -->
                                <div class="realtime-text-container">
                                    <div class="realtime-text" id="realtimeText"></div>
                                </div>
                                
                                <!-- 录音控制按钮 -->
                                <div class="recording-controls">
                                    <button class="btn btn-pause" id="pauseBtn" onclick="pauseRecording()">
                                        <i class="fas fa-pause"></i>
                                        <span>暂停</span>
                                    </button>
                                    <button class="btn btn-continue" id="continueBtn" onclick="continueRecording()" style="display: none;">
                                        <i class="fas fa-play"></i>
                                        <span>继续</span>
                                    </button>
                                    <button class="btn btn-finish" id="finishBtn" onclick="finishRecording()">
                                        完成
                                    </button>
                                </div>
                            </div>
                            <div class="voice-result" id="voiceResult" style="display: none;">
                                <div class="result-text" id="resultText"></div>
                                <div class="result-actions">
                                    <button class="btn btn-secondary" onclick="reRecord()">重新录音</button>
                                    <button class="btn btn-primary" onclick="confirmResult()">确认使用</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AI智能解析过渡弹窗 -->
                <div class="ai-processing-modal" id="aiProcessingModal">
                    <div class="processing-content">
                        <div class="modal-header">
                            <h3>AI智能解析中</h3>
                            <button class="close-btn" onclick="hideAIProcessing()">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="processing-body">
                            <ul class="timeline" id="processingTimeline">
                                <li class="step"><span class="dot"></span><span class="label">语音转文字</span></li>
                                <li class="step"><span class="dot"></span><span class="label">意图理解</span></li>
                                <li class="step"><span class="dot"></span><span class="label">实体抽取</span></li>
                                <li class="step"><span class="dot"></span><span class="label">表单映射</span></li>
                                <li class="step"><span class="dot"></span><span class="label">完成</span></li>
                            </ul>
                            <div class="variables-card">
                                <div class="vc-title"><i class="fas fa-list"></i> AI识别到的变量</div>
                                <div class="variables-list" id="extractedVariables">
                                    <!-- 变量结果将由JS填充 -->
                                </div>
                            </div>
                            <div class="countdown-section">
                                <div class="countdown-text">即将自动填充表单</div>
                                <div class="countdown-timer" id="countdownTimer">3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    productList: {
        title: '商品列表',
        subtitle: '管理所有商品',
        content: `
            <div class="mobile-page">
                <div class="mobile-header">
                    <h1>商品列表</h1>
                    <div class="subtitle">管理所有商品</div>
                </div>
                <div class="mobile-content">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">商品管理</div>
                            <button class="btn" onclick="loadPage('product-add')">添加商品</button>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-tshirt"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">时尚T恤</div>
                                <div class="list-item-subtitle">库存: 156件 | 价格: ¥89</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-shoe-prints"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">运动鞋</div>
                                <div class="list-item-subtitle">库存: 89双 | 价格: ¥299</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">智能手机</div>
                                <div class="list-item-subtitle">库存: 23台 | 价格: ¥2999</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-laptop"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">笔记本电脑</div>
                                <div class="list-item-subtitle">库存: 12台 | 价格: ¥5999</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    productAdd: {
        title: '添加商品',
        subtitle: '创建新商品',
        content: `
            <div class="mobile-page">
                <div class="mobile-header">
                    <h1>添加商品</h1>
                    <div class="subtitle">创建新商品</div>
                </div>
                <div class="mobile-content">
                    <div class="card">
                        <div class="form-group">
                            <label class="form-label">商品图片</label>
                            <div style="text-align: center; padding: 20px; border: 2px dashed #ddd; border-radius: 8px;">
                                <i class="fas fa-camera" style="font-size: 32px; color: #ccc; margin-bottom: 10px;"></i>
                                <div style="color: #666;">点击上传商品图片</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">商品名称</label>
                            <input type="text" class="form-input" placeholder="请输入商品名称">
                        </div>
                        <div class="form-group">
                            <label class="form-label">商品分类</label>
                            <select class="form-input">
                                <option>请选择分类</option>
                                <option>服装</option>
                                <option>数码</option>
                                <option>家居</option>
                                <option>美妆</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">商品价格</label>
                            <input type="number" class="form-input" placeholder="请输入价格">
                        </div>
                        <div class="form-group">
                            <label class="form-label">库存数量</label>
                            <input type="number" class="form-input" placeholder="请输入库存数量">
                        </div>
                        <div class="form-group">
                            <label class="form-label">商品描述</label>
                            <textarea class="form-input" rows="4" placeholder="请输入商品描述"></textarea>
                        </div>
                        <button class="btn" style="width: 100%;">创建商品</button>
                    </div>
                </div>
            </div>
        `
    },
    
    orderList: {
        title: '订单列表',
        subtitle: '查看所有订单',
        content: `
            <div class="mobile-page">
                <div class="mobile-header">
                    <h1>订单列表</h1>
                    <div class="subtitle">查看所有订单</div>
                </div>
                <div class="mobile-content">
                    <div class="card">
                        <div class="list-item" onclick="loadPage('order-detail')">
                            <div class="list-item-icon">
                                <i class="fas fa-shopping-bag"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">订单 #20231201001</div>
                                <div class="list-item-subtitle">张三 | ¥299 | 待发货</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-shopping-bag"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">订单 #20231201002</div>
                                <div class="list-item-subtitle">李四 | ¥5999 | 已发货</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-shopping-bag"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">订单 #20231201003</div>
                                <div class="list-item-subtitle">王五 | ¥89 | 已完成</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-shopping-bag"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">订单 #20231201004</div>
                                <div class="list-item-subtitle">赵六 | ¥2999 | 待付款</div>
                            </div>
                            <div class="list-item-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    orderDetail: {
        title: '订单详情',
        subtitle: '订单 #20231201001',
        content: `
            <div class="mobile-page">
                <div class="mobile-header">
                    <h1>订单详情</h1>
                    <div class="subtitle">订单 #20231201001</div>
                </div>
                <div class="mobile-content">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">订单状态</div>
                        </div>
                        <div style="padding: 15px 0;">
                            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                                <div style="width: 20px; height: 20px; background: #28a745; border-radius: 50%; margin-right: 15px;"></div>
                                <div>
                                    <div style="font-weight: 500;">订单已确认</div>
                                    <div style="font-size: 12px; color: #666;">2023-12-01 10:30</div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                                <div style="width: 20px; height: 20px; background: #28a745; border-radius: 50%; margin-right: 15px;"></div>
                                <div>
                                    <div style="font-weight: 500;">付款成功</div>
                                    <div style="font-size: 12px; color: #666;">2023-12-01 10:35</div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center;">
                                <div style="width: 20px; height: 20px; background: #ffc107; border-radius: 50%; margin-right: 15px;"></div>
                                <div>
                                    <div style="font-weight: 500;">待发货</div>
                                    <div style="font-size: 12px; color: #666;">等待处理中</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">商品信息</div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-tshirt"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">时尚T恤</div>
                                <div class="list-item-subtitle">数量: 1件 | 价格: ¥299</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">收货信息</div>
                        </div>
                        <div style="padding: 15px 0;">
                            <div style="margin-bottom: 10px;">
                                <strong>收货人:</strong> 张三
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong>电话:</strong> 138****8888
                            </div>
                            <div>
                                <strong>地址:</strong> 北京市朝阳区某某街道某某小区1号楼101室
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">订单金额</div>
                        </div>
                        <div style="padding: 15px 0;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>商品金额:</span>
                                <span>¥299</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>运费:</span>
                                <span>¥0</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 18px; border-top: 1px solid #eee; padding-top: 10px;">
                                <span>总计:</span>
                                <span>¥299</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    aiServiceEffect: {
        title: '农事方案库',
        subtitle: '我的方案',
        content: `
            <div class="mobile-page aiServiceEffect-page">
                <div class="mobile-header">
                    <button class="back-btn" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
                    <h1>农事方案库</h1>
                    <div class="subtitle">我的方案</div>
                </div>
                <div class="mobile-content">
                    <!-- 主导航标签 -->
                    <div class="plan-tabs">
                        <div class="plan-tab">
                            <i class="fas fa-book"></i>
                            <span>农事方案库</span>
                        </div>
                        <div class="plan-tab active">
                            <i class="fas fa-file-alt"></i>
                            <span>我的方案</span>
                        </div>
                    </div>
                    
                    <!-- 方案卡片 -->
                    <div class="plan-card">
                        <div class="plan-header">
                            <div class="plan-title">水仙花 | 8月管理1号方案</div>
                        </div>
                        <div class="plan-details">
                            <div class="detail-row">
                                <span class="detail-label">作物种类:</span>
                                <span class="detail-value">水仙花</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">作物品种:</span>
                                <span class="detail-value">1号</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">种植面积:</span>
                                <span class="detail-value">1亩</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">指导专家:</span>
                                <span class="detail-value"></span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">所属单位:</span>
                                <span class="detail-value"></span>
                            </div>
                        </div>
                        <div class="plan-actions">
                            <button class="btn btn-primary">提交官方认证</button>
                        </div>
                    </div>
                    
                    <!-- 底部提示 -->
                    <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                        <i class="fas fa-robot" style="color: #0aa06e; margin-right: 5px;"></i>
                        没有更多了
                    </div>
                </div>

                <!-- 悬浮添加按钮 -->
                <div class="fab">
                    <i class="fas fa-plus"></i>
                </div>
            </div>
        `
    },
    
    farmServiceRecord: {
        title: '新建农事方案',
        subtitle: '基础信息',
        content: `
            <div class="mobile-page newFarmPlan-page">
                <div class="mobile-header">
                    <button class="back-btn" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
                    <h1>新建农事方案</h1>
                    <div class="header-actions">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-bullseye"></i>
                    </div>
                </div>
                
                <!-- 进度指示器 -->
                <div class="progress-indicator">
                    <div class="progress-step active">
                        <span class="step-number">1</span>
                        <span class="step-text">基础信息</span>
                    </div>
                    <div class="progress-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                    <div class="progress-step">
                        <span class="step-number">2</span>
                        <span class="step-text">方案计划</span>
                    </div>
                </div>
                
                <div class="mobile-content">
                    <div class="form-container">
                        <!-- 方案名称 -->
                        <div class="form-group">
                            <label class="form-label required">方案名称</label>
                            <input type="text" class="form-input" placeholder="请输入">
                        </div>
                        
                        <!-- 所在地域 -->
                        <div class="form-group">
                            <label class="form-label required">所在地域</label>
                            <div class="form-input-wrapper">
                                <input type="text" class="form-input" placeholder="请选择区域">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        
                        <!-- 种植作物 -->
                        <div class="form-group">
                            <label class="form-label required">种植作物</label>
                            <div class="form-input-wrapper">
                                <input type="text" class="form-input" placeholder="请选择">
                                <button class="add-crop-btn">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        
                        <!-- 作物品种 -->
                        <div class="form-group">
                            <label class="form-label required">作物品种</label>
                            <input type="text" class="form-input" placeholder="请输入">
                        </div>
                        
                        <!-- 种植周期 -->
                        <div class="form-group">
                            <label class="form-label required">种植周期</label>
                            <div class="time-input-group">
                                <input type="text" class="form-input" placeholder="开始时间">
                                <span class="time-separator">至</span>
                                <input type="text" class="form-input" placeholder="结束时间">
                            </div>
                        </div>
                        
                        <!-- 种植面积 -->
                        <div class="form-group">
                            <label class="form-label required">种植面积</label>
                            <input type="text" class="form-input" placeholder="请输入">
                        </div>
                        
                        <!-- 预计亩均产量 -->
                        <div class="form-group">
                            <label class="form-label required">预计亩均产量</label>
                            <div class="form-input-wrapper">
                                <input type="text" class="form-input" placeholder="请输入">
                                <span class="unit-text">kg</span>
                            </div>
                        </div>
                        
                        <!-- 预计亩均成本 -->
                        <div class="form-group">
                            <label class="form-label required">预计亩均成本</label>
                            <div class="form-input-wrapper">
                                <input type="text" class="form-input" placeholder="请输入">
                                <span class="unit-text">元</span>
                            </div>
                        </div>
                        
                        <!-- 预计亩均收入 -->
                        <div class="form-group">
                            <label class="form-label required">预计亩均收入</label>
                            <div class="form-input-wrapper">
                                <input type="text" class="form-input" placeholder="请输入">
                                <span class="unit-text">元</span>
                            </div>
                        </div>
                        
                        <!-- 指导专家 -->
                        <div class="form-group">
                            <label class="form-label required">指导专家</label>
                            <input type="text" class="form-input" placeholder="请输入">
                        </div>
                        
                        <!-- 所属单位 -->
                        <div class="form-group">
                            <label class="form-label required">所属单位</label>
                            <input type="text" class="form-input" placeholder="请输入">
                        </div>
                    </div>
                </div>
                
                <!-- 底部按钮 -->
                <div class="mobile-footer">
                    <button class="btn btn-next" onclick="loadPage('farmPlanStep2')">下一步</button>
                </div>
            </div>
        `
    },
    
    farmPlanStep2: {
        title: '新建农事方案',
        subtitle: '方案计划',
        content: `
            <div class="mobile-page newFarmPlan-page">
                <div class="mobile-header">
                    <button class="back-btn" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
                    <h1>新建农事方案</h1>
                    <div class="header-actions">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-bullseye"></i>
                    </div>
                </div>
                
                <!-- 进度指示器 -->
                <div class="progress-indicator">
                    <div class="progress-step completed">
                        <span class="step-number">1</span>
                        <span class="step-text">基础信息</span>
                    </div>
                    <div class="progress-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                    <div class="progress-step active">
                        <span class="step-number">2</span>
                        <span class="step-text">方案计划</span>
                    </div>
                </div>
                
                <div class="mobile-content">
                    <!-- 农事方案计划标题 -->
                    <div class="plan-section-header">
                        <h3>农事方案计划</h3>
                        <button class="add-plan-btn">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    
                    <!-- 方案计划卡片 -->
                    <div class="plan-card">
                        <div class="plan-card-header">
                            <div class="plan-date">
                                <i class="fas fa-clock"></i>
                                <span>当年08月18日~当年08月20日</span>
                            </div>
                            <div class="plan-options">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <div class="plan-card-content">
                            <div class="plan-detail-item">
                                <span class="detail-label">农事类型:</span>
                                <span class="detail-value">打药</span>
                            </div>
                            <div class="plan-detail-item">
                                <span class="detail-label">活动名称:</span>
                                <span class="detail-value">第一季度 | 打药作业活动</span>
                            </div>
                            <div class="plan-detail-item">
                                <span class="detail-label">作物:</span>
                                <span class="detail-value">冬小麦</span>
                            </div>
                            <div class="plan-detail-item">
                                <span class="detail-label">建议:</span>
                                <span class="detail-value">打药作业</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 底部按钮 -->
                <div class="mobile-footer">
                    <div class="footer-buttons">
                        <button class="btn btn-prev" onclick="loadPage('farmServiceRecord')">上一步</button>
                        <button class="btn btn-complete">完成</button>
                    </div>
                </div>
            </div>
        `
    },
    
    userAnalytics: {
        title: '用户分析',
        subtitle: '用户行为数据分析',
        content: `
            <div class="mobile-page">
                <div class="mobile-header">
                    <h1>用户分析</h1>
                    <div class="subtitle">用户行为数据分析</div>
                </div>
                <div class="mobile-content">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-number">1,234</div>
                            <div class="stat-label">总用户数</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">567</div>
                            <div class="stat-label">活跃用户</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">89.2%</div>
                            <div class="stat-label">用户留存率</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">4.5</div>
                            <div class="stat-label">平均使用时长(小时)</div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">用户增长</div>
                        </div>
                        <div style="height: 200px; display: flex; align-items: center; justify-content: center; color: #666;">
                            <div style="text-align: center;">
                                <i class="fas fa-chart-area" style="font-size: 48px; margin-bottom: 10px; color: #ccc;"></i>
                                <div>用户增长趋势图</div>
                                <div style="font-size: 12px; margin-top: 5px;">（演示用图表占位）</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">用户分布</div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">北京</div>
                                <div class="list-item-subtitle">用户数: 234人 (19%)</div>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">上海</div>
                                <div class="list-item-subtitle">用户数: 189人 (15%)</div>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">广州</div>
                                <div class="list-item-subtitle">用户数: 156人 (13%)</div>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">深圳</div>
                                <div class="list-item-subtitle">用户数: 145人 (12%)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    fieldWorkstation: {
        title: '田间工作站',
        subtitle: '投入品使用成效核查配置',
        content: `
            <div class="mobile-page fieldWorkstation-page">
                <div class="mobile-header">
                    <button class="back-btn" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
                    <h1>投入品使用成效核查配置</h1>
                </div>
                <div class="mobile-content">
                    <!-- 配置开关 -->
                    <div class="card">
                        <div class="config-row">
                            <span class="config-label">投入品使用成效核查配置开关</span>
                            <div class="config-switch active">
                                <span>已开启</span>
                                <div class="switch-toggle"></div>
                            </div>
                        </div>
                    </div>

                    <!-- 核查方式 -->
                    <div class="card">
                        <div class="section-title">投入品使用结果核查方式</div>
                        <div class="radio-group">
                            <div class="radio-item active">
                                <div class="radio-circle"></div>
                                <span>随机生成多点监测</span>
                            </div>
                            <div class="radio-item">
                                <div class="radio-circle"></div>
                                <span>田间摄像头拍照</span>
                            </div>
                        </div>
                        <div class="selected-method">
                            <i class="fas fa-circle"></i>
                            <span>随机生成多点监测</span>
                        </div>
                    </div>

                    <!-- 土壤肥力检测要求 -->
                    <div class="card">
                        <div class="section-title">
                            <i class="fas fa-circle" style="color: #0aa06e; font-size: 8px; margin-right: 8px;"></i>
                            土壤肥力检测要求
                            <button class="ai-btn" onclick="showAIDialog('soil')">
                                <i class="fas fa-robot"></i>
                                AI设定要求
                            </button>
                        </div>
                        
                        <div class="config-section">
                            <div class="config-text">施肥农事活动结束后,第 <input type="number" class="config-input" value="7"> 天,进行 土壤肥力检测</div>
                            
                            <div class="config-row">
                                <span class="config-label">土壤测肥任务开始时间:</span>
                                <div class="time-input">
                                    <span>选择时间</span>
                                    <i class="fas fa-clock"></i>
                                </div>
                            </div>
                            
                            <div class="config-row">
                                <span class="config-label">土壤测肥任务截止时限:</span>
                                <div class="time-input">
                                    <input type="number" class="config-input" value="0" style="width: 40px;">
                                    <span>小时</span>
                                </div>
                            </div>
                            
                            <div class="config-row">
                                <span class="config-label">生成土壤测肥点位数量</span>
                                <div class="time-input">
                                    <input type="number" class="config-input" style="width: 40px;">
                                    <span>个</span>
                                </div>
                            </div>
                            
                            <div class="config-row">
                                <span class="config-label">土壤测肥点位有效区域</span>
                                <div class="time-input">
                                    <input type="number" class="config-input" style="width: 40px;">
                                    <span>米(以内)</span>
                                </div>
                            </div>
                            
                            <div class="config-row">
                                <span class="config-label">肥力指标</span>
                                <button class="btn-custom">自定义指标+</button>
                            </div>
                            
                            <div class="indicator-list">
                                <div class="indicator-item">
                                    <span>氮</span>
                                    <div class="switch-toggle"></div>
                                </div>
                                <div class="indicator-item">
                                    <span>磷</span>
                                    <div class="switch-toggle"></div>
                                </div>
                                <div class="indicator-item">
                                    <span>钾</span>
                                    <div class="switch-toggle"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 作物长势拍照要求 -->
                    <div class="card">
                        <div class="section-title">
                            <i class="fas fa-circle" style="color: #0aa06e; font-size: 8px; margin-right: 8px;"></i>
                            作物长势拍照要求
                            <button class="ai-btn" onclick="showAIDialog('crop')">
                                <i class="fas fa-robot"></i>
                                AI设定要求
                            </button>
                        </div>
                        
                        <div class="config-section">
                            <div class="config-text">农事活动结束后,第 <input type="number" class="config-input" value="0"> 天,进行作物 长势拍照</div>
                            
                            <div class="config-row">
                                <span class="config-label">长势拍照任务开始时间:</span>
                                <div class="time-input">
                                    <span>07:00</span>
                                    <i class="fas fa-clock"></i>
                                </div>
                            </div>
                            
                            <div class="config-row">
                                <span class="config-label">长势拍照任务截止时限:</span>
                                <div class="time-input">
                                    <input type="number" class="config-input" value="1" style="width: 40px;">
                                    <span>小时</span>
                                </div>
                            </div>
                            
                            <div class="config-row">
                                <span class="config-label">生成拍照打卡点位数量</span>
                                <div class="time-input">
                                    <input type="number" class="config-input" value="2" style="width: 40px;">
                                    <span>个</span>
                                </div>
                            </div>
                            
                            <div class="config-row">
                                <span class="config-label">拍照打卡点位有效区域</span>
                                <div class="time-input">
                                    <input type="number" class="config-input" value="20" style="width: 40px;">
                                    <span>米(以内)</span>
                                </div>
                            </div>
                            
                            <div class="config-row">
                                <span class="config-label">每个点位拍照数量</span>
                                <div class="time-input">
                                    <input type="number" class="config-input" value="1" style="width: 40px;">
                                    <span>张(含)以上</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 底部按钮 -->
                <div class="mobile-footer action-footer">
                    <button class="btn btn-secondary">取消</button>
                    <button class="btn">确定</button>
                </div>

                <!-- AI设定弹窗 -->
                <div class="ai-dialog" id="aiDialog">
                    <div class="ai-dialog-content">
                        <div class="ai-dialog-header">
                            <h3><i class="fas fa-robot"></i> AI智能设定</h3>
                            <button class="ai-close" onclick="hideAIDialog()">×</button>
                        </div>
                        <div class="ai-dialog-body">
                            <div class="ai-section">
                                <h4>基础信息</h4>
                                <div class="ai-form-group">
                                    <label>作物类型:</label>
                                    <input type="text" id="cropType" value="小麦" disabled class="disabled-input">
                                </div>
                                <div class="ai-form-group">
                                    <label>地理坐标:</label>
                                    <input type="text" id="location" value="商丘市 柘城县 牛城乡 大运村" disabled class="disabled-input">
                                </div>
                                <div class="ai-form-group">
                                    <label>种植方案:</label>
                                    <select id="plantingPlan">
                                        <option value="standard">标准种植</option>
                                        <option value="intensive">密集种植</option>
                                        <option value="organic">有机种植</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ai-section">
                                <h4>AI分析结果</h4>
                                <div class="ai-analysis" id="aiAnalysis">
                                    <div class="ai-loading">
                                        <i class="fas fa-spinner fa-spin"></i>
                                        正在分析...
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ai-dialog-footer">
                            <button class="btn btn-secondary" onclick="hideAIDialog()">取消</button>
                            <button class="btn" onclick="applyAISettings()">应用设定</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    farmCalendar: {
        title: '农事日历',
        subtitle: '农事活动管理',
        content: `
            <div class="mobile-page farmCalendar-page">
                <div class="mobile-header">
                    <button class="back-btn" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
                    <h1>农事日历</h1>
                </div>
                <div class="mobile-content">
                    <!-- 日历导航 -->
                    <div class="calendar-nav">
                        <div class="calendar-header">
                            <i class="fas fa-chevron-left"></i>
                            <span>2025/08</span>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        
                        <!-- 星期标题 -->
                        <div class="weekdays">
                            <div class="weekday">日</div>
                            <div class="weekday">一</div>
                            <div class="weekday">二</div>
                            <div class="weekday">三</div>
                            <div class="weekday">四</div>
                            <div class="weekday">五</div>
                            <div class="weekday">六</div>
                        </div>
                        
                        <!-- 日期显示 -->
                        <div class="date-row">
                            <div class="date-item">
                                <div class="date-number">10</div>
                                <div class="date-text">十七</div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">11</div>
                                <div class="date-text">十八</div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">12</div>
                                <div class="date-text">十九</div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">13</div>
                                <div class="date-text">二十</div>
                            </div>
                            <div class="date-item today">
                                <div class="date-number">14</div>
                                <div class="date-text">今日</div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">15</div>
                                <div class="date-text">廿二</div>
                            </div>
                            <div class="date-item">
                                <div class="date-number">16</div>
                                <div class="date-text">廿三</div>
                            </div>
                        </div>
                        
                        <div class="calendar-expand">
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>

                    <!-- 农事活动列表 -->
                    <div class="activities-section">
                        <h3>农事活动</h3>
                        
                        <!-- 活动卡片1 -->
                        <div class="activity-card">
                            <div class="activity-header">
                                <div class="activity-tag spraying">打药</div>
                                <div class="activity-title">打药</div>
                                <div class="activity-menu">
                                    <i class="fas fa-ellipsis-v"></i>
                                </div>
                            </div>
                            <div class="activity-details">
                                <div class="detail-item">
                                    <span class="detail-label">种植计划:</span>
                                    <span class="detail-value">打药</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">作物/品种:</span>
                                    <span class="detail-value">水仙花(1号)</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">基地/地块:</span>
                                    <span class="detail-value">大厅水培植物|一号分区|一号基地 (水培区|一号地块)</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">农事时间:</span>
                                    <span class="detail-value">2025-08-12~2025-08-12</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">负责人:</span>
                                    <span class="detail-value">王成龙</span>
                                </div>
                            </div>
                            <div class="activity-status completed">
                                <div class="status-stamp">已完成</div>
                            </div>
                        </div>

                        <!-- 活动卡片2 -->
                        <div class="activity-card" onclick="loadPage('farmActivityDetail')">
                            <div class="activity-header">
                                <div class="activity-tag spraying">打药</div>
                                <div class="activity-title">打药测试1</div>
                                <div class="activity-menu">
                                    <i class="fas fa-ellipsis-v"></i>
                                </div>
                            </div>
                            <div class="activity-details">
                                <div class="detail-item">
                                    <span class="detail-label">种植计划:</span>
                                    <span class="detail-value">打药</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">作物/品种:</span>
                                    <span class="detail-value">水仙花(1号)</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">基地/地块:</span>
                                    <span class="detail-value">大厅水培植物|一号分区|一号基地 (水培区|一号地块)</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">农事时间:</span>
                                    <span class="detail-value">2025-08-13~2025-08-13</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">负责人:</span>
                                    <span class="detail-value">王成龙</span>
                                </div>
                                <div class="detail-item">
                                    <div class="after-photo-entry">
                                        <i class="fas fa-camera"></i>
                                        <span>服务后拍照</span>
                                    </div>
                                </div>
                            </div>
                            <div class="activity-status completed">
                                <div class="status-stamp">已完成</div>
                            </div>
                        </div>

                        <!-- 活动卡片3 -->
                        <div class="activity-card">
                            <div class="activity-header">
                                <div class="activity-tag weeding">除草</div>
                                <div class="activity-title">除草</div>
                                <div class="activity-menu">
                                    <i class="fas fa-ellipsis-v"></i>
                                </div>
                            </div>
                            <div class="activity-details">
                                <div class="detail-item">
                                    <span class="detail-label">种植计划:</span>
                                    <span class="detail-value">打药</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">作物/品种:</span>
                                    <span class="detail-value">水仙花(1号)</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">基地/地块:</span>
                                    <span class="detail-value">大厅水培植物|一号分区|一号基地 (水培区|一号地块)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 浮动添加按钮 -->
                <div class="fab">
                    <i class="fas fa-plus"></i>
                </div>
            </div>
        `
    },

    farmActivityDetail: {
        title: '农事活动详情',
        subtitle: '打药测试1',
        content: `
            <div class="mobile-page farmActivityDetail-page">
                <div class="mobile-header">
                    <button class="back-btn" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
                    <h1>农事活动详情</h1>
                </div>
                <div class="mobile-content">
                    <!-- 活动摘要卡片（截图样式） -->
                    <div class="activity-summary">
                        <div class="summary-top">
                            <span class="activity-tag spraying">打药</span>
                            <span style="color:#666;">2025-08-13~2025-08-13</span>
                        </div>
                        <div class="summary-title">打药测试1</div>
                        <div class="summary-list">
                            <div class="detail-item"><span class="detail-label">基地/地块：</span><span class="detail-value">大厅水培植物 | 一号分区 | 一号基地(水培区 | 一号地块)</span></div>
                            <div class="detail-item"><span class="detail-label">种植计划：</span><span class="detail-value">打药</span></div>
                            <div class="detail-item"><span class="detail-label">负责人：</span><span class="detail-value">王成龙</span></div>
                            <div class="detail-item"><span class="detail-label">备注：</span><span class="detail-value"></span></div>
                        </div>
                    </div>
                    <!-- 农事照片 -->
                    <div class="detail-section">
                        <div class="section-header">
                            <i class="fas fa-mountain"></i>
                            <h3>农事照片</h3>
                        </div>
                        <div class="photo-upload">
                            <div class="photo-item">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjNEZBRjUwIi8+CjxwYXRoIGQ9Ik0yMCAyMEg0MFY0MEgyMFYyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" alt="农事照片">
                                <div class="photo-remove">
                                    <i class="fas fa-times"></i>
                                </div>
                            </div>
                            <div class="photo-add">
                                <i class="fas fa-plus"></i>
                            </div>
                        </div>
                    </div>

                    <!-- 上传农事视频 -->
                    <div class="detail-section">
                        <div class="section-header">
                            <i class="fas fa-play"></i>
                            <h3>上传农事视频</h3>
                        </div>
                        <div class="video-upload">
                            <div class="video-item">
                                <div class="video-thumbnail">
                                    <i class="fas fa-play"></i>
                                    <span class="video-duration">00:02</span>
                                </div>
                                <div class="video-remove">
                                    <i class="fas fa-times"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 投入品使用成效监管 -->
                    <div class="detail-section">
                        <div class="section-header">
                            <i class="fas fa-chart-line"></i>
                            <h3>投入品使用成效监管: 人工拍照</h3>
                        </div>
                        <div class="monitoring-items">
                            <div class="monitoring-item">
                                <div class="monitoring-content">
                                    <span>现场工作人员已完成农事活动前的拍照任务</span>
                                    <button class="btn btn-small">查看</button>
                                </div>
                            </div>
                            <div class="monitoring-item">
                                <div class="monitoring-content">
                                    <span>现场工作人员<span class="highlight">超时未完成</span>农事活动后的拍照任务</span>
                                    <button class="btn btn-small">查看</button>
                                </div>
                            </div>
                            <div class="monitoring-item ai-service-item" onclick="loadPage('aiServiceEffect')">
                                <div class="monitoring-content">
                                    <div class="ai-service-content">
                                        <i class="fas fa-brain ai-service-icon"></i>
                                        <span>经AI技术对比分析,整体效果提升: <span class="effect-highlight">90%</span></span>
                                        <div class="ai-service-entry">
                                            <span class="ai-entry-text">查看AI服务成效</span>
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 农事活动描述 -->
                    <div class="detail-section">
                        <div class="section-header">
                            <h3>农事活动描述</h3>
                        </div>
                        <div class="activity-description">
                            <span>测试1</span>
                        </div>
                    </div>
                </div>
                <div class="mobile-footer">
                    <button class="btn" style="width:100%;">保存</button>
                </div>
            </div>
        `
    }
};
let currentPage = 'home';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 加载首页
    loadPage('home');
    
    // 绑定导航事件
    bindNavigationEvents();
    
    // 绑定侧边栏切换事件
    bindSidebarToggle();
    
    // 初始化语音识别
    initSpeechRecognition();
});

// 绑定导航事件
function bindNavigationEvents() {
    // 主菜单项点击事件
    document.querySelectorAll('.nav-item.main-item').forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            
            // 如果有子菜单，切换展开状态
            const subMenu = this.nextElementSibling;
            if (subMenu && subMenu.classList.contains('sub-menu')) {
                this.classList.toggle('expanded');
                subMenu.classList.toggle('expanded');
            } else {
                // 没有子菜单，直接加载页面
                loadPage(page);
            }
        });
    });
    
    // 子菜单项点击事件
    document.querySelectorAll('.nav-item.sub-item').forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });
}

// 绑定侧边栏切换事件
function bindSidebarToggle() {
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        
        // 更新按钮图标
        const icon = this.querySelector('i');
        if (sidebar.classList.contains('collapsed')) {
            icon.className = 'fas fa-chevron-right';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
}

// 加载页面
function loadPage(pageName) {
    const phoneContent = document.getElementById('phoneContent');
    const pageInfo = pageData[pageName];
    
    if (pageInfo) {
        if (!window.__pageStack) window.__pageStack = [];
        if (window.currentPage) {
            window.__pageStack.push(window.currentPage);
        }
        // 更新页面内容
        phoneContent.innerHTML = pageInfo.content;
        
        // 更新当前页面
        currentPage = pageName;
        
        // 更新导航状态
        updateNavigationState(pageName);
        
        // 滚动到顶部
        phoneContent.scrollTop = 0;
    }
}

// 更新导航状态
function updateNavigationState(pageName) {
    // 清除所有活动状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 设置当前页面的活动状态
    const activeItem = document.querySelector(`[data-page="${pageName}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
        
        // 如果是子菜单项，展开父菜单
        if (activeItem.classList.contains('sub-item')) {
            const parentSection = activeItem.closest('.nav-section');
            const mainItem = parentSection.querySelector('.main-item');
            const subMenu = parentSection.querySelector('.sub-menu');
            
            if (mainItem && subMenu) {
                mainItem.classList.add('expanded');
                subMenu.classList.add('expanded');
            }
        }
    }
}

// 全局页面加载函数（供HTML中的onclick调用）
window.loadPage = loadPage; 
window.goBack = function() {
    const phoneContent = document.getElementById('phoneContent');
    if (!window.__pageStack || window.__pageStack.length === 0) {
        // 栈为空，退回到首页
        currentPage = 'home';
        phoneContent.innerHTML = pageData.home.content;
        updateNavigationState('home');
        return;
    }
    const prev = window.__pageStack.pop();
    currentPage = prev;
    phoneContent.innerHTML = pageData[prev].content;
    updateNavigationState(prev);
};

// AI设定相关变量
let currentAIType = '';
let aiAnalysisTimeout = null;

// 显示AI设定弹窗
window.showAIDialog = function(type) {
    currentAIType = type;
    const dialog = document.getElementById('aiDialog');
    if (dialog) {
        dialog.classList.add('show');
        // 模拟AI分析过程
        startAIAnalysis();
    }
};

// 隐藏AI设定弹窗
window.hideAIDialog = function() {
    const dialog = document.getElementById('aiDialog');
    if (dialog) {
        dialog.classList.remove('show');
    }
    if (aiAnalysisTimeout) {
        clearTimeout(aiAnalysisTimeout);
    }
};

// 开始AI分析
function startAIAnalysis() {
    const analysisDiv = document.getElementById('aiAnalysis');
    if (!analysisDiv) return;
    
    // 显示加载状态
    analysisDiv.innerHTML = `
        <div class="ai-loading">
            <i class="fas fa-spinner fa-spin"></i>
            正在分析...
        </div>
    `;
    
    // 模拟AI分析延迟
    aiAnalysisTimeout = setTimeout(() => {
        const cropType = document.getElementById('cropType').value;
        const location = document.getElementById('location').value;
        const plantingPlan = document.getElementById('plantingPlan').value;
        
        // 根据AI类型生成不同的分析结果
        if (currentAIType === 'soil') {
            showSoilAnalysis(cropType, location, plantingPlan);
        } else if (currentAIType === 'crop') {
            showCropAnalysis(cropType, location, plantingPlan);
        }
    }, 2000);
}

// 显示土壤分析结果
function showSoilAnalysis(cropType, location, plantingPlan) {
    const analysisDiv = document.getElementById('aiAnalysis');
    const analysisData = getSoilAnalysisData(cropType, location, plantingPlan);
    
    analysisDiv.innerHTML = `
        <div class="ai-result">
            <div class="ai-result-item ai-suggestion">
                <strong>AI建议:</strong> ${analysisData.suggestion}
            </div>
            <div class="ai-result-item">
                <strong>检测时间:</strong> 施肥后第${analysisData.detectionDay}天
            </div>
            <div class="ai-result-item">
                <strong>检测点位:</strong> ${analysisData.points}个
            </div>
            <div class="ai-result-item">
                <strong>有效区域:</strong> ${analysisData.area}米
            </div>
            <div class="ai-result-item">
                <strong>关键指标:</strong> ${analysisData.indicators.join(', ')}
            </div>
        </div>
    `;
}

// 显示作物分析结果
function showCropAnalysis(cropType, location, plantingPlan) {
    const analysisDiv = document.getElementById('aiAnalysis');
    const analysisData = getCropAnalysisData(cropType, location, plantingPlan);
    
    analysisDiv.innerHTML = `
        <div class="ai-result">
            <div class="ai-result-item ai-suggestion">
                <strong>AI建议:</strong> ${analysisData.suggestion}
            </div>
            <div class="ai-result-item">
                <strong>拍照时间:</strong> 农事活动后第${analysisData.photoDay}天
            </div>
            <div class="ai-result-item">
                <strong>拍照点位:</strong> ${analysisData.points}个
            </div>
            <div class="ai-result-item">
                <strong>有效区域:</strong> ${analysisData.area}米
            </div>
            <div class="ai-result-item">
                <strong>拍照数量:</strong> ${analysisData.photoCount}张/点位
            </div>
        </div>
    `;
}

// 获取土壤分析数据
function getSoilAnalysisData(cropType, location, plantingPlan) {
    // 根据作物类型名称获取对应的英文key
    const cropTypeMap = {
        '小麦': 'wheat',
        '玉米': 'corn',
        '水稻': 'rice',
        '大豆': 'soybean'
    };
    
    const cropKey = cropTypeMap[cropType] || 'wheat';
    
    const data = {
        wheat: {
            detectionDay: 7,
            points: 5,
            area: 50,
            indicators: ['氮', '磷', '钾', 'pH值'],
            suggestion: '小麦生长期需要重点关注氮肥含量，建议增加氮元素检测频率'
        },
        corn: {
            detectionDay: 5,
            points: 6,
            area: 60,
            indicators: ['氮', '磷', '钾', '有机质'],
            suggestion: '玉米对磷肥需求较高，建议重点监测磷元素变化'
        },
        rice: {
            detectionDay: 3,
            points: 4,
            area: 40,
            indicators: ['氮', '钾', 'pH值', '盐分'],
            suggestion: '水稻种植需要控制土壤pH值，建议定期监测酸碱度'
        },
        soybean: {
            detectionDay: 6,
            points: 5,
            area: 45,
            indicators: ['氮', '磷', '钾', '微量元素'],
            suggestion: '大豆固氮能力强，可适当减少氮肥检测频率'
        }
    };
    
    return data[cropKey];
}

// 获取作物分析数据
function getCropAnalysisData(cropType, location, plantingPlan) {
    // 根据作物类型名称获取对应的英文key
    const cropTypeMap = {
        '小麦': 'wheat',
        '玉米': 'corn',
        '水稻': 'rice',
        '大豆': 'soybean'
    };
    
    const cropKey = cropTypeMap[cropType] || 'wheat';
    
    const data = {
        wheat: {
            photoDay: 3,
            points: 3,
            area: 30,
            photoCount: 2,
            suggestion: '小麦分蘖期是关键观察期，建议增加拍照频率'
        },
        corn: {
            photoDay: 5,
            points: 4,
            area: 40,
            photoCount: 3,
            suggestion: '玉米抽雄期需要重点观察，建议多角度拍照'
        },
        rice: {
            photoDay: 2,
            points: 3,
            area: 25,
            photoCount: 2,
            suggestion: '水稻分蘖期生长迅速，建议每日观察记录'
        },
        soybean: {
            photoDay: 4,
            points: 3,
            area: 35,
            photoCount: 2,
            suggestion: '大豆开花期是关键期，建议增加观察密度'
        }
    };
    
    return data[cropKey];
}

// 应用AI设定
window.applyAISettings = function() {
    const cropType = document.getElementById('cropType').value;
    const analysisData = currentAIType === 'soil' ? 
        getSoilAnalysisData(cropType) : 
        getCropAnalysisData(cropType);
    
    // 根据AI类型填充不同的表单
    if (currentAIType === 'soil') {
        // 填充土壤检测表单
        const inputs = document.querySelectorAll('.fieldWorkstation-page input[type="number"]');
        if (inputs.length >= 4) {
            inputs[0].value = analysisData.detectionDay; // 检测天数
            inputs[2].value = analysisData.points; // 点位数量
            inputs[3].value = analysisData.area; // 有效区域
        }
    } else if (currentAIType === 'crop') {
        // 填充作物拍照表单
        const inputs = document.querySelectorAll('.fieldWorkstation-page input[type="number"]');
        if (inputs.length >= 6) {
            inputs[4].value = analysisData.photoDay; // 拍照天数
            inputs[6].value = analysisData.points; // 点位数量
            inputs[7].value = analysisData.area; // 有效区域
            inputs[8].value = analysisData.photoCount; // 拍照数量
        }
    }
    
    // 隐藏弹窗
    hideAIDialog();
    
    // 显示成功提示
    showToast('AI设定已应用');
};

// 显示提示信息
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: absolute;
        top: 16px;
        left: 16px;
        background: rgba(0, 0, 0, 0.85);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 3000;
        box-shadow: 0 6px 18px rgba(0,0,0,0.25);
    `;

    // 将提示添加到手机屏幕内部，确保不越界
    const phoneScreen = document.querySelector('.phone-screen') || document.getElementById('phoneContent') || document.body;
    phoneScreen.appendChild(toast);

    setTimeout(() => {
        if (toast.parentElement) {
            toast.parentElement.removeChild(toast);
        }
    }, 2000);
}



// 分享记录
window.shareRecord = function() {
    showToast('农事服务记录分享功能');
};

// 导出报告
window.exportRecord = function() {
    showToast('农事服务报告导出功能');
}; 

// AI语音识别相关变量
let recognition = null;
let isRecording = false;
let isPaused = false;
let recordingTimer = null;
let recordingStartTime = null;
let realtimeTextTimer = null;
let currentText = '';
let inactivityCheckTimer = null; // 30秒未输入检测
let lastRealtimeUpdateTs = 0;
let mockTexts = [
    "我要为大厅水培植物基地",
    "我要为大厅水培植物基地的水仙花",
    "我要为大厅水培植物基地的水仙花安排打药活动",
    "我要为大厅水培植物基地的水仙花安排打药活动，时间是明天上午9点",
    "我要为大厅水培植物基地的水仙花安排打药活动，时间是明天上午9点到11点",
    "我要为大厅水培植物基地的水仙花安排打药活动，时间是明天上午9点到11点，负责人是王成龙"
];
let textIndex = 0;

// 初始化语音识别（模拟版本）
function initSpeechRecognition() {
    console.log('语音识别功能已初始化（模拟模式）');
}

// 开始语音输入
window.startVoiceInput = function() {
    const modal = document.getElementById('aiVoiceModal');
    if (modal) {
        modal.classList.add('show');
        initSpeechRecognition();
        // 确保初始状态正确显示
        setTimeout(() => {
            showInitialState();
        }, 100);
    }
};

// 关闭语音弹窗
window.closeVoiceModal = function() {
    const modal = document.getElementById('aiVoiceModal');
    if (modal) {
        modal.classList.remove('show');
        if (isRecording) {
            isRecording = false;
            isPaused = false;
            stopRecordingTimer();
            stopRealtimeText();
            stopInactivityTimer();
        }
    }
};

// 开始录音（模拟版本）
window.startRecording = function() {
    console.log('开始录音（模拟模式）');
    isRecording = true;
    isPaused = false;
    textIndex = 0;
    currentText = '';
    recordingStartTime = Date.now();
    startRecordingTimer();
    startRealtimeText();
    startInactivityTimer();
    lastRealtimeUpdateTs = Date.now();
    showRecordingState();
};

// 重新录音（模拟版本）
window.reRecord = function() {
    showInitialState();
    // 清理状态
    isRecording = false;
    isPaused = false;
    stopRecordingTimer();
    stopRealtimeText();
    stopInactivityTimer();
    // 模拟重新录音
    setTimeout(() => {
        startRecording();
    }, 500);
};

// 确认使用结果
window.confirmResult = function() {
    const resultText = document.getElementById('resultText').textContent;
    if (resultText) {
        // 展示AI处理过渡
        closeVoiceModal();
        showAIProcessing(resultText);
    }
};

// 完成录音并进入下一步（模拟）
window.finishRecording = function() {
    // 若还在录音，先停下
    if (isRecording) {
        isRecording = false;
        stopRecordingTimer();
        stopRealtimeText();
    }
    const finalText = document.getElementById('realtimeText')?.textContent || '';
    const transcript = finalText || '我要为大厅水培植物基地的水仙花安排打药活动，时间是明天上午9点到11点，负责人是王成龙';
    showResultState(transcript);
};

// 展示AI处理过渡
function showAIProcessing(transcript) {
    const modal = document.getElementById('aiProcessingModal');
    const timeline = document.getElementById('processingTimeline').querySelectorAll('.step');
    const varList = document.getElementById('extractedVariables');
    
    if (!modal || !timeline || !varList) return;
    
    // 清理状态
    modal.classList.add('show');
    timeline.forEach(s => s.classList.remove('active'));
    varList.innerHTML = '';
    
    const parsed = parseVoiceToFormData(transcript);
    const steps = [
        () => timeline[0].classList.add('active'),
        () => timeline[1].classList.add('active'),
        () => {
            timeline[2].classList.add('active');
            // 渲染变量
            const mapping = {
                plantingPlan: '种植计划',
                basePlot: '基地地块',
                crop: '作物',
                activityType: '农事类型',
                activityName: '活动名称',
                startTime: '开始时间',
                endTime: '结束时间',
                personInCharge: '负责人',
                remarks: '备注'
            };
            Object.keys(parsed).forEach(key => {
                const value = parsed[key];
                if (!value) return;
                const item = document.createElement('div');
                item.className = 'var-item';
                item.innerHTML = `<span class="var-name">${mapping[key] || key}</span><span class="var-value">${value}</span>`;
                varList.appendChild(item);
            });
        },
        () => timeline[3].classList.add('active'),
        () => {
            timeline[4].classList.add('active');
            // 开始3秒倒计时
            startCountdown(() => {
                parseAndFillForm(transcript);
                hideAIProcessing();
                showToast('表单已自动填充完成！');
            });
        }
    ];
    
    // 依次推进步骤
    let idx = 0;
    const advance = () => {
        if (idx >= steps.length) return;
        steps[idx++]();
        if (idx < steps.length) setTimeout(advance, 600);
    };
    advance();
}

function hideAIProcessing() {
    const modal = document.getElementById('aiProcessingModal');
    if (modal) modal.classList.remove('show');
}

// 倒计时功能
function startCountdown(callback) {
    let count = 3;
    const timerElement = document.getElementById('countdownTimer');
    
    const countdown = setInterval(() => {
        count--;
        if (timerElement) {
            timerElement.textContent = count;
        }
        
        if (count <= 0) {
            clearInterval(countdown);
            if (callback) callback();
        }
    }, 1000);
}

// 显示初始状态
function showInitialState() {
    const statusElement = document.getElementById('voiceStatus');
    const recordingElement = document.getElementById('voiceRecording');
    const resultElement = document.getElementById('voiceResult');
    
    if (statusElement) statusElement.style.display = 'block';
    if (recordingElement) recordingElement.style.display = 'none';
    if (resultElement) resultElement.style.display = 'none';
    
    // 添加点击事件
    if (statusElement) {
        statusElement.onclick = function() {
            startRecording();
        };
    }
}

// 显示录音状态
function showRecordingState() {
    const statusElement = document.getElementById('voiceStatus');
    const recordingElement = document.getElementById('voiceRecording');
    const resultElement = document.getElementById('voiceResult');
    
    if (statusElement) statusElement.style.display = 'none';
    if (recordingElement) recordingElement.style.display = 'block';
    if (resultElement) resultElement.style.display = 'none';
}

// 显示结果状态
function showResultState(transcript) {
    const statusElement = document.getElementById('voiceStatus');
    const recordingElement = document.getElementById('voiceRecording');
    const resultElement = document.getElementById('voiceResult');
    const resultTextElement = document.getElementById('resultText');
    
    if (statusElement) statusElement.style.display = 'none';
    if (recordingElement) recordingElement.style.display = 'none';
    if (resultElement) resultElement.style.display = 'block';
    
    if (resultTextElement) resultTextElement.textContent = transcript;
}

// 显示错误状态
function showErrorState(error) {
    let errorMessage = '语音识别失败';
    switch(error) {
        case 'no-speech':
            errorMessage = '没有检测到语音，请重试';
            break;
        case 'audio-capture':
            errorMessage = '无法访问麦克风，请检查权限';
            break;
        case 'not-allowed':
            errorMessage = '麦克风权限被拒绝';
            break;
        case 'network':
            errorMessage = '网络连接错误';
            break;
    }
    
    showToast(errorMessage);
    showInitialState();
}

// 开始录音计时器
function startRecordingTimer() {
    recordingStartTime = Date.now();
    recordingTimer = setInterval(updateRecordingTime, 1000);
}

// 停止录音计时器
function stopRecordingTimer() {
    if (recordingTimer) {
        clearInterval(recordingTimer);
        recordingTimer = null;
    }
}

// 更新录音时间显示
function updateRecordingTime() {
    if (recordingStartTime) {
        const elapsed = Math.floor((Date.now() - recordingStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('recordingTime').textContent = timeString;
    }
}

// AI解析语音并填充表单
function parseAndFillForm(transcript) {
    // 模拟AI解析过程
    const parsedData = parseVoiceToFormData(transcript);
    
    // 填充表单字段
    Object.keys(parsedData).forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if (element && parsedData[fieldId]) {
            element.value = parsedData[fieldId];
            element.classList.add('ai-filled');
            
            // 移除动画类
            setTimeout(() => {
                element.classList.remove('ai-filled');
            }, 500);
        }
    });
}

// 语音解析为表单数据
function parseVoiceToFormData(transcript) {
    const data = {};
    
    // 解析基地地块
    const basePlotMatch = transcript.match(/(大厅水培植物|基地|地块)/g);
    if (basePlotMatch) {
        data.basePlot = '大厅水培植物 | 一号分区 | 一号基地(水培区 | 一号地块)';
    }
    
    // 解析作物
    const cropMatch = transcript.match(/(水仙花|小麦|玉米|水稻|大豆)/);
    if (cropMatch) {
        data.crop = cropMatch[0];
    }
    
    // 解析农事类型
    const activityTypeMatch = transcript.match(/(打药|施肥|浇水|除草|播种|收获)/);
    if (activityTypeMatch) {
        data.activityType = activityTypeMatch[0];
    }
    
    // 解析活动名称
    if (activityTypeMatch) {
        data.activityName = `${activityTypeMatch[0]}活动`;
    }
    
    // 解析时间
    const timeMatch = transcript.match(/(明天|今天|后天)?\s*(上午|下午|晚上)?\s*(\d{1,2})[点时:：](\d{0,2})?\s*(到|至)\s*(\d{1,2})[点时:：](\d{0,2})?/);
    if (timeMatch) {
        const startHour = timeMatch[3];
        const startMinute = timeMatch[4] || '00';
        const endHour = timeMatch[6];
        const endMinute = timeMatch[7] || '00';
        
        // 处理上午下午
        let startTime = `${startHour.padStart(2, '0')}:${startMinute}`;
        let endTime = `${endHour.padStart(2, '0')}:${endMinute}`;
        
        if (timeMatch[2] === '下午' || timeMatch[2] === '晚上') {
            startTime = `${parseInt(startHour) + 12}:${startMinute}`;
            endTime = `${parseInt(endHour) + 12}:${endMinute}`;
        }
        
        data.startTime = startTime;
        data.endTime = endTime;
    }
    
    // 解析负责人
    const personMatch = transcript.match(/(王成龙|张三|李四|王五)/);
    if (personMatch) {
        data.personInCharge = personMatch[0];
    }
    
    // 解析种植计划
    if (data.crop && data.activityType) {
        data.plantingPlan = `${data.crop}${data.activityType}计划`;
    }
    
    // 解析备注
    const remarksMatch = transcript.match(/(备注|说明|注意|要求)[：:]\s*(.+)/);
    if (remarksMatch) {
        data.remarks = remarksMatch[2];
    }
    
    return data;
}

// 页面加载完成后初始化语音识别
document.addEventListener('DOMContentLoaded', function() {
    // 原有的初始化代码...
    
    // 初始化语音识别
    initSpeechRecognition();
});

// 暂停录音
window.pauseRecording = function() {
    if (isRecording && !isPaused) {
        isPaused = true;
        stopRealtimeText();
        stopInactivityTimer();
        document.getElementById('pauseBtn').style.display = 'none';
        document.getElementById('continueBtn').style.display = 'flex';
        document.querySelector('.recording-text').textContent = '录音已暂停';
    }
};

// 继续录音
window.continueRecording = function() {
    if (isRecording && isPaused) {
        isPaused = false;
        startRealtimeText();
        startInactivityTimer();
        lastRealtimeUpdateTs = Date.now();
        document.getElementById('pauseBtn').style.display = 'flex';
        document.getElementById('continueBtn').style.display = 'none';
        document.querySelector('.recording-text').textContent = '正在录音，请说话...';
    }
};

// 开始实时回显文字
function startRealtimeText() {
    if (realtimeTextTimer) {
        clearInterval(realtimeTextTimer);
    }
    
    realtimeTextTimer = setInterval(() => {
        if (isRecording && !isPaused && textIndex < mockTexts.length) {
            currentText = mockTexts[textIndex];
            const realtimeTextElement = document.getElementById('realtimeText');
            if (realtimeTextElement) {
                realtimeTextElement.textContent = currentText;
                realtimeTextElement.classList.add('typing');
            }
            textIndex++;
            lastRealtimeUpdateTs = Date.now();
        }
    }, 1000); // 每秒更新一次文字
}

// 停止实时回显文字
function stopRealtimeText() {
    if (realtimeTextTimer) {
        clearInterval(realtimeTextTimer);
        realtimeTextTimer = null;
    }
    
    const realtimeTextElement = document.getElementById('realtimeText');
    if (realtimeTextElement) {
        realtimeTextElement.classList.remove('typing');
    }
}

// 未录入超时检测（30秒）
function startInactivityTimer() {
    stopInactivityTimer();
    inactivityCheckTimer = setInterval(() => {
        if (!isRecording || isPaused) return;
        const now = Date.now();
        if (now - lastRealtimeUpdateTs >= 30000) { // 30秒无更新
            isRecording = false;
            stopRecordingTimer();
            stopRealtimeText();
            stopInactivityTimer();
            const realtimeTextElement = document.getElementById('realtimeText');
            if (realtimeTextElement && realtimeTextElement.textContent.trim() === '') {
                // 完全没有内容
                showToast('长时间未录入，已停止录入');
            } else {
                // 有部分内容，仍提示停止
                showToast('长时间未录入，已停止录入');
            }
            showInitialState();
        }
    }, 1000);
}

function stopInactivityTimer() {
    if (inactivityCheckTimer) {
        clearInterval(inactivityCheckTimer);
        inactivityCheckTimer = null;
    }
}