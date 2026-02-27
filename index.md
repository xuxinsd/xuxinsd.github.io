---
layout: home
---

# 📚 文章目录

{% for category in site.categories %}
  ### 📂 {{ category[0] }}
  <ul>
    {% for post in category[1] %}
      <li>
        {{ post.date | date: "%Y-%m-%d" }} - <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

