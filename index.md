---
layout: home
---

<style>
  .category-card {
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    background-color: #f6f8fa;
    transition: transform 0.2s;
  }
  .category-card:hover { transform: translateY(-5px); box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
  .category-title { font-size: 1.5rem; color: #0366d6; margin-top: 0; }
  .stats { color: #586069; font-size: 0.9rem; }
</style>

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

