---
layout: home
---

<style>
  .content-container {
    max-width: 800px;  /* 限制最大宽度，让眼睛看文字不累 */
    margin: 0 auto;    /* 居中对齐 */
    padding: 20px;     /* 四周留白 */
    line-height: 1.8;  /* 增加行间距，更有阅读感 */
    font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  }
  ul { list-style: none; padding-left: 0; }
  li { margin-bottom: 15px; border-bottom: 1px dashed #eee; padding-bottom: 10px; }
  a { text-decoration: none; color: #007bff; font-weight: 500; }
  a:hover { color: #0056b3; text-decoration: underline; }
  .date { color: #999; font-family: monospace; margin-right: 10px; }
  .category-title { border-left: 5px solid #333; padding-left: 15px; margin-top: 40px; }
</style>

<div class="content-container">

# 📚 我的数字花园

{% for category in site.categories %}
  <h2 class="category-title">📂 {{ category[0] }}</h2>
  <ul>
    {% for post in category[1] %}
      <li>
        <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

</div>

