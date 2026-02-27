---
layout: home
---

# 📚 我的内容仓库

{% assign grouped_posts = site.posts | group_by: "categories" %}

{% for group in grouped_posts %}
  ### 📂 {{ group.name | default: "未分类" }}
  <ul style="list-style: none; padding-left: 10px;">
    {% for post in group.items %}
      <li style="margin-bottom: 8px;">
        <span style="color: #666; font-size: 0.9em;">{{ post.date | date: "%Y-%m-%d" }}</span>
        <a href="{{ post.url }}" style="font-weight: bold; margin-left: 10px; text-decoration: none;">
          {{ post.title }}
        </a>
      </li>
    {% endfor %}
  </ul>
  <hr style="border: 0.5px solid #eee;">
{% endfor %}
