
/**
 * 访问计数器和实时时间显示组件
 * 使用localStorage实现访问计数功能
 * 使用setInterval实现实时时间显示
 */

// 初始化访问计数器
function initVisitorCounter() {
    // 尝试从localStorage获取访问次数
    let visitCount = localStorage.getItem('visitCount');
    
    // 如果是第一次访问，初始化计数器
    if (!visitCount) {
        visitCount = 1;
    } else {
        // 转换为数字并增加1
        visitCount = parseInt(visitCount) + 1;
    }
    
    // 保存访问次数到localStorage
    localStorage.setItem('visitCount', visitCount);
    
    // 更新页面上的计数器显示
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
        counterElement.textContent = visitCount;
    }
}

// 更新实时时间
function updateRealTimeClock() {
    const clockElement = document.getElementById('real-time-clock');
    if (!clockElement) return;
    
    const updateClock = () => {
        const now = new Date();
        
        // 格式化时间: 时:分:秒
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        // 格式化日期: 年-月-日 星期几
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const date = now.getDate().toString().padStart(2, '0');
        
        // 获取星期几
        const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const day = days[now.getDay()];
        
        // 更新时钟显示
        clockElement.innerHTML = `
            <div class="time">${hours}:${minutes}:${seconds}</div>
            <div class="date">${year}-${month}-${date} ${day}</div>
        `;
    };
    
    // 立即更新一次
    updateClock();
    
    // 每秒更新一次
    setInterval(updateClock, 1000);
}

// 网页加载完成后初始化组件
window.addEventListener('DOMContentLoaded', () => {
    // 初始化访问计数器
    initVisitorCounter();
    
    // 初始化实时时钟
    updateRealTimeClock();
});
