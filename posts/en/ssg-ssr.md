---
title: "When to Use Static Generation v.s. Server-side Rendering"
date: "2020-01-02"
summary: "difference between the 2 modes of prerendering"
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

```jsx
import React from "react";

const CoolComponent = () => <div>I'm a cool component!!</div>;

export default CoolComponent;
```

```python

def abc(x):
    return x+1

class TestClass:

    def __init__(x,y):
        self.x = x
        sel.y = y

    def hey(self):
        return self.x + self.y

    def __str__(self):
        return str(self.x)


```

### styling part

```css
.h1 {
  font-size: 25px;
  line-height: 1rem;
}
p {
  color: purple;
}
```
