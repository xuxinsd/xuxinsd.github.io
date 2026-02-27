---
layout: home
---

# 📚 我的数字花园

{% for category in site.categories %}
  ## 📂 {{ category[0] }}
  <ul>
    {% for post in category[1] %}
      <li>
        <span style="color: #999; font-family: monospace;">{{ post.date | date: "%Y-%m-%d" }}</span>
        <a href="{{ post.url }}" style="font-weight: 500; margin-left: 10px;">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

