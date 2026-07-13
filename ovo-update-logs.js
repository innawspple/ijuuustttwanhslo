/*
 * 文件：ovo-update-logs.js
 * 内容：更新日志数据源。向 window.OVO_UPDATE_LOGS 写入版本日期和更新条目，供更新日志页面渲染。
 * 查找提示：只改更新日志文案/版本记录时看这里。
 */

window.OVO_UPDATE_LOGS = [
  {
    date: '2026.07.13',
    version: 'V 1.0.11',
    items: [
      '优化 APK 安装与覆盖更新流程。',
      '新增 APK 端保活设置与版本更新检测。',
      '桌面拖动图标到最右侧时，可自动扩展新的桌面页。',
      '气泡大小设置移到聊天页右下角的主题面板。',
      '聊天记录切换整合到聊天页右下角面板。',
      '新增聊天记录搜索，支持文本与表情包检索。',
      '新增更新日志查看页面。'
    ]
  }
];

window.OVO_UPDATE_LOGS_EMPTY_STATE = {
  title: '暂无更新日志',
  subtitle: 'No Updates Yet',
  description: '暂无版本记录，小羊巡逻中。',
  helper: '有新内容时，会在这里第一时间出现。'
};
