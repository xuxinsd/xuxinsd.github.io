---
layout: default
---

<header>
  <h1>笔耕不辍</h1>
  <p>分类存档 · 深度思考 · 法律与生活</p>
</header>

<div class="main-content">

# 📚 文章归档

{% for category in site.categories %}
  ## 📂 {{ category[0] }}
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
