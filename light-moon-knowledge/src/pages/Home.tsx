import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ margin: 0, color: '#2c3e50' }}>灯月书语 · 首页</h1>
      <p style={{ color: '#555', marginBottom: 32 }}>欢迎来到灯月书语知识库应用。后续将在此接入文档上传、阅读与问答模块。</p>
      
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, color: '#34495e' }}>✨ 体验功能</h2>
        <Link 
          to="/animation" 
          style={{
            display: 'inline-block',
            padding: '12px 20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: 8,
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}
        >
          🌙 重新观看启动动画
        </Link>
      </div>

      <div>
        <h2 style={{ fontSize: 18, color: '#34495e' }}>🚀 即将推出</h2>
        <ul style={{ color: '#666', lineHeight: 1.6 }}>
          <li>📚 PDF/Word 文档上传与管理</li>
          <li>🔍 智能知识库问答 (RAG)</li>
          <li>📖 在线文档预览与阅读</li>
          <li>🏷️ 主题分类与标签管理</li>
          <li>💾 问答收藏与历史记录</li>
        </ul>
      </div>
    </div>
  )
}


