# Arissa — Portfolio


## Files
- `index.html` — page structure and copy (hero, about, contact)
- `style.css` — colors, type, grid, grain texture
- `script.js` — your project list (title, tag, image, color, size, link)
- `assets/` — put your images here

## Make it yours
1. Drop your artwork into `assets/` (jpg/png/webp).
2. Open `script.js` and edit the `projects` array — swap `image` / `category` paths,
   titles, tags, and links for each piece. `size` controls the tile
   shape: `"wide"`, `"tall"`, `"narrow"`, or leave blank.
3. Open `index.html` and edit the hero text, about copy, email, and
   social links.
4. Colors live at the top of `style.css` under `:root` if you want to
   swap the riso palette.

## Put it on GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
Then in the repo: **Settings → Pages → Source → Deploy from branch →
main / (root)**. Your site will be live at
`https://<your-username>.github.io/<repo-name>/` a minute or two later.
