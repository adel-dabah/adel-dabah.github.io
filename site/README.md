# adel-dabah.github.io

Personal academic website for **Adel Dabah**, Research Scientist at Forschungszentrum Jülich (JSC).

🌐 **Live site:** [adel-dabah.github.io](https://adel-dabah.github.io)

---

## 🗂 Repository Structure

```
adel-dabah.github.io/
│
├── index.html              ← Home page (shell only — no content here)
│
├── css/
│   └── style.css           ← All styles (edit only to change design)
│
├── js/
│   ├── data.js             ← ✏️  ALL CONTENT LIVES HERE — edit this
│   └── render.js           ← Rendering engine (do not edit)
│
├── blog/
│   ├── index.html          ← Blog listing page
│   └── posts/
│       ├── hpc-mimo-bottleneck.html   ← Sample post
│       └── template.html             ← Copy this for new posts
│
└── README.md
```

---

## ✏️ How to Edit Content

**All site content** (profile, stats, publications, experience, blog previews, contact links) is defined in **`js/data.js`**. Open that file — everything is clearly labeled with comments.

| Task | What to change |
|---|---|
| Update name / bio / email | `PROFILE` object in `js/data.js` |
| Add a publication | Add an object to `PUBLICATIONS.items` |
| Add a timeline entry | Add an object to `EXPERIENCE.items` |
| Hide a whole section | Set `enabled: false` on that section |
| Reorder sections | Edit `SECTIONS_ORDER` array |
| Add a contact link | Add an object to `CONTACT.items` |
| Add a blog preview | Add an object to `BLOG.items` |

---

## 📝 How to Add a Blog Post

1. **Copy** `blog/posts/hpc-mimo-bottleneck.html` and rename it (e.g., `my-new-post.html`)
2. **Edit** the new file — change the `<title>`, `<h1>`, date, topic, and body content
3. **Add an entry** to the `BLOG.items` array in `js/data.js`:
   ```js
   {
     date:    "March 2026",
     topic:   "HPC",
     color:   "blue",
     title:   "My New Post Title",
     excerpt: "A short description shown on the home page.",
     url:     "blog/posts/my-new-post.html",
   },
   ```
4. **Add the same entry** to `blog/index.html` inside the `<!-- ADD BLOG POSTS HERE -->` block

---

## 🚀 Deploying to GitHub Pages

1. Create a GitHub repository named exactly: **`adel-dabah.github.io`**
2. Push all files:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/adel-dabah/adel-dabah.github.io.git
   git push -u origin main
   ```
3. Go to **Settings → Pages → Source → Deploy from branch → main / (root)**
4. Your site is live at **https://adel-dabah.github.io** within a few minutes

---

## 🔄 Updating the Site

```bash
# After editing data.js, blog posts, or anything else:
git add .
git commit -m "Update publications / add blog post / etc."
git push
```

GitHub Pages auto-deploys on every push to `main`.

---

## 🛠 Local Preview

No build tools required — just open `index.html` in a browser.  
For the blog post links to work locally, serve with any static server:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Then open [http://localhost:8080](http://localhost:8080)
