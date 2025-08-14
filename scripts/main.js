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
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-calendar-alt"></i></div><div class="fi-text">农事日历</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-bug"></i></div><div class="fi-text">病虫害识别</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-user-md"></i></div><div class="fi-text">专家诊断</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-warehouse"></i></div><div class="fi-text">投入品管理</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-file-signature"></i></div><div class="fi-text">投入品申请</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-people-carry"></i></div><div class="fi-text">临时工申请</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-stamp"></i></div><div class="fi-text">农事审批</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-receipt"></i></div><div class="fi-text">我的领用</div></div>
                            <div class="feature-item"><div class="fi-icon"><i class="fas fa-bug"></i></div><div class="fi-text">病虫害识别</div></div>
                            <div class="feature-item" onclick="loadPage('fieldWorkstation')"><div class="fi-icon"><i class="fas fa-microchip"></i></div><div class="fi-text">田间工作站</div></div>
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
    
    salesChart: {
        title: '销售统计',
        subtitle: '销售数据分析',
        content: `
            <div class="mobile-page">
                <div class="mobile-header">
                    <h1>销售统计</h1>
                    <div class="subtitle">销售数据分析</div>
                </div>
                <div class="mobile-content">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-number">¥45,678</div>
                            <div class="stat-label">本月销售额</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">234</div>
                            <div class="stat-label">本月订单数</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">¥195</div>
                            <div class="stat-label">平均客单价</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">12.5%</div>
                            <div class="stat-label">环比增长</div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">销售趋势</div>
                        </div>
                        <div style="height: 200px; display: flex; align-items: center; justify-content: center; color: #666;">
                            <div style="text-align: center;">
                                <i class="fas fa-chart-line" style="font-size: 48px; margin-bottom: 10px; color: #ccc;"></i>
                                <div>销售趋势图表</div>
                                <div style="font-size: 12px; margin-top: 5px;">（演示用图表占位）</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">热销商品</div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-tshirt"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">时尚T恤</div>
                                <div class="list-item-subtitle">销量: 156件 | 销售额: ¥13,884</div>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-shoe-prints"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">运动鞋</div>
                                <div class="list-item-subtitle">销量: 89双 | 销售额: ¥26,611</div>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <div class="list-item-content">
                                <div class="list-item-title">智能手机</div>
                                <div class="list-item-subtitle">销量: 23台 | 销售额: ¥68,977</div>
                            </div>
                        </div>
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
    }
};

// 当前页面
let currentPage = 'home';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 加载首页
    loadPage('home');
    
    // 绑定导航事件
    bindNavigationEvents();
    
    // 绑定侧边栏切换事件
    bindSidebarToggle();
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
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        font-size: 14px;
        z-index: 3000;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        document.body.removeChild(toast);
    }, 2000);
} 