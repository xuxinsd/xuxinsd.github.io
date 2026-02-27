---
layout: home
---

<style>
  .content-container {
    max-width: 1000px;  /* 从 800px 增加到 1000px，页面更宽阔 */
    margin: 0 auto;
    padding: 40px 20px; /* 增加上下留白，更有呼吸感 */
    
    /* 字体与行距优化 */
    font-size: 18px;    /* 增大基础字号 */
    line-height: 2.0;   /* 增大行间距到 2.0 倍，阅读不费劲 */
    color: #333;        /* 颜色深一些，对比度更高 */
    
    font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  }
  
  h1 { font-size: 2.5rem; margin-bottom: 30px; }
  h2 { font-size: 1.8rem; margin-top: 50px; }
  
  ul { list-style: none; padding-left: 0; }
  li { 
    margin-bottom: 20px; 
    padding-bottom: 10px; 
    border-bottom: 1px solid #f0f0f0; 
  }
  
  a { 
    text-decoration: none; 
    color: #0366d6; 
    font-weight: 500; 
    transition: 0.3s;
  }
  a:hover { color: #f60; }
  
  .date { 
    color: #888; 
    font-size: 0.9em; 
    margin-right: 15px; 
    font-family: Georgia, serif; 
  }
</style>

<div class="content-container">

</div>

# 📂 内容知识库

<div class="category-grid">
  {% for category in site.categories %}
    <div class="category-card">
      <h2 class="category-title">
        <a href="/category/{{ category[0] | slugify }}.html">📂 {{ category[0] }}</a>
      </h2>
      <p class="stats">共 {{ category[1].size }} 篇文章</p>
      <ul>
        {% for post in category[1] limit:3 %}
          <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endfor %}
      </ul>
      {% if category[1].size > 3 %}
        <a href="/category/{{ category[0] | slugify }}.html" style="font-size: 0.8rem;">查看该分类下全部文章 →</a>
      {% endif %}
    </div>
  {% endfor %}
</div>

