---
layout: home
---

# 欢迎来到徐鑫律师的的频道--公众号：鑫法言说


<img width="258" height="258" alt="image" src="https://github.com/user-attachments/assets/103ac583-5378-4159-9258-521ebaefe3f3" />

## 文章列表

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<img width="1014" height="219" alt="image" src="https://github.com/user-attachments/assets/b616269d-1942-4238-a9c7-3c322518ee3a" />
