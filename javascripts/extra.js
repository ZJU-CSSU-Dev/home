// 获取所有具有 .deadline 类的元素并初始化
const deadlineEls = document.querySelectorAll('.deadline');
const dotEls = document.querySelectorAll('.dot');

// 遍历每个截止日期元素并进行处理
deadlineEls.forEach((deadlineEl, index) => {
    // 解析截止日期（设为当天23:59:59）
    const deadlineDate = new Date(deadlineEl.dataset.deadline + 'T23:59:59');
    const currentDate = new Date();
    // 格式化为 "YYYY年MM月DD日" 并添加前缀
    const [year, month, day] = deadlineDate
        .toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        })
        .split('/'); // 输出 ["2024", "09", "22"]

    deadlineEl.textContent = `截止日期：${year}年${month}月${day}日`;

    // 判断是否过期并添加样式类
    if (currentDate > deadlineDate) {
        dotEls[index].classList.add('expired');
    }
});