## Introduction

This is the code of [my homepage](https://aabbtree77.github.io/). It is created with vanilla HTML, CSS, and Js, which is likely not the best way anymore in view of Tailwind, React, and TypeScript. The code also includes [the frontend part](https://github.com/aabbtree77/aabbtree77.github.io/tree/main/miniguestlog) for the guest logging. The backend is in [a separate github repo](https://github.com/aabbtree77/miniguestlog) hosted on [render.com](https://render.com/).

The page is a nonsymmetric layout that has a grid inside a grid, with a Mike Tyson popup window just for fun. Everything fits into a single viewport. **All of these are really bad ideas and I won't repeat them in the future.** Tables and any horizontal layout activity does not scale, the placement takes ages and is fragile on mobile devices.

Slide shows and snapping turned out to be buggy too, discarded them. Everything breaks as soon as one starts resizing a browser window, using multiple monitors with different resolutions, mobile phones...

The major lesson to learn is well put in the title of this report:

[How I learned to stop worrying and structure all writing as a list.](https://dynomight.net/lists/)

This might save one a lot of time. Fancy layouts remain an unsolved problem.

## Details for Personal Use (Myself)

First time, install [Go](https://go.dev/doc/install), followed by

```console
cd gocode
go mod init md2html
go get github.com/gomarkdown/markdown@latest
go build
cd ..
./gocode/md2html
```

Running "go build" inside the Go folder should be sufficient too.

To use .md conversion to .html locally on Ubuntu before uploading to github:

```console
./gocode/md2html
```

I tried Python-Markdown before, but it did not work that well with MathJax, would insert HTML emphasis markings in the places with subscripts. gomarkdown is better. I used ChatGPT at first and then iterated, this saved some time. ChatGPT did not have a clue that the gomarkdown parser cannot be run multiple times in the loop without [reinitialization](https://github.com/gomarkdown/markdown/issues/229) (Go would give useless cryptic runtime panic).

## Github

My github "workflow":

- Set up [tokens](http://www.compciv.org/recipes/devops/git-and-github-setup/) with .bashrc.

- Inside a newly created and cloned repo (locally):

  ```console
  git remote rm origin
  git remote add origin https://aabbtree77:$GITHUB_ACCESS_TOKEN@github.com/aabbtree77/aabbtree77.github.io.git
  git remote show origin
  ```

- Repo update routine:

  ```console
  git add .
  git commit -m "first commit"
  git push origin main
  ```

  Here "main" can sometimes become "master" depending on what "git remote show origin" indicates.

- A custom domain on github pages with the source branch "main" adds a file CNAME to remotes/origin/main, which results in the push failure with the message

  ```
  Updates were rejected because the remote contains work that you do not have locally.
  ```

  Run

  ```
  git config pull.rebase false
  git pull origin main
  ```

  One can set "git config pull.rebase true", it does not matter, what changes is only the commit history, not the result.

- Sometimes this is also useful: Rewind to a particular commmit in the **additional local copy** of the repo:

  ```console
  git log --pretty=format:"%h - %ad : %s"
  git reset --hard hash#
  ```

## References and Further Observations

- [How I learned to stop worrying and structure all writing as a list.](https://dynomight.net/lists/)

- [A and CNAME Records.](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

- [Tech White. How to Add a Custom Domain with GitHub Pages in 2024.](https://www.youtube.com/watch?v=k3Y3c5WlAfc)

- [Flex is troublesome](https://teamtreehouse.com/community/flexbasis-is-50-of-what). Isolate the problem and use ChatGTP to generate some parts of the code like a header with a content list with the right sizes in percentages and a background image. Backgrounds and scrollbars are also fragile on mobile. I do not use any fancy flex features anymore, just Tailwind `flex flex-col`. Mix stuff with grid and empty `<div></div>` whenever "basis" is needed. A flex container itself needs to be centered and scrollbar-free, which can be achieved by setting its parent to [100% width and height](https://stackoverflow.com/questions/12989931/body-height-100-displaying-vertical-scrollbar).

- [CSS](https://www.youtube.com/watch?v=7kVeCqQCxlk) [Grid.](https://robertcooper.me/post/grid-does-not-replace-flexbox)

- [The Best Of CSS by Theo - t3․gg.](https://www.youtube.com/watch?v=CQuTF-bkOgc&t=1595s)

- Android would produce tiny font bugs in a few places, [this line](https://stackoverflow.com/questions/25685265/how-to-set-equal-font-size-in-table-cells-for-mobile-device-html-pages) fixes them:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  ```
- [Font sizing with rem](https://snook.ca/archives/html_and_css/font-size-with-rem), [compounding.](https://stackoverflow.com/questions/5395544/compounded-relative-font-sizes-a-clean-way-to-adopt-the-font-size-of-the-child)

- [You need to fix your line-height.](https://www.kevinpowell.co/article/line-height/)

- [Is the Underlined Link Hurting Readability?](https://www.uxbooth.com/articles/is-the-underlined-link-hurting-readability/)

- [Is it possible to apply CSS to half of a character?](https://stackoverflow.com/questions/23569441/is-it-possible-to-apply-css-to-half-of-a-character)

- [Is Dark Mode Good For Your Eyes?](https://kevquirk.com/is-dark-mode-such-a-good-idea/)

- [How do you write a comment in Markdown?](https://stackoverflow.com/questions/4823468/comments-in-markdown) Answer: You don't.

- Markdown and LaTeX/MathJax is not a good idea.

- [Mermaid](https://mermaid-js.github.io/mermaid/#/) &#8801; automated node placement and nonintersecting lines, unlike [diagrams.net](https://www.diagrams.net/blog), but the automated text placement is horrid. Multi-line labels are displayed in the editor, but not in png. svg may even miss text entirely, bugs.

  On Ubuntu 22.04, install nodejs and npm/yarn via [volta](https://docs.volta.sh/guide/getting-started) (uninstall them by simply removing .volta, .npm, .yarn):

  ```bash
  curl https://get.volta.sh | bash
  volta install node
  volta install yarn
  git clone https://github.com/mermaid-js/mermaid-live-editor.git
  cd mermaid-live-editor
  yarn install
  yarn dev -- --open
  ```

  This will open the editor at http://localhost:3000/. The entire folder with node_modules is 437MB.

  **Mermaid saves time, but I always regret using it.**

- [projectstorm/react-diagrams](https://github.com/projectstorm/react-diagrams) is mildly interesting.

- [Shower?](https://github.com/shower/shower) A neat raw HTML/CSS/Js template to start growing, but it will be too slow just like LaTeX and Beamer.

- [Excalidraw?](https://excalidraw.com/) [Excalidraw Slides?](https://excalidraw-slides.netlify.app/#)

- [How to create a presentation in draw.io](https://community.tmpdir.org/t/how-to-create-a-presentation-in-draw-io/488). See also [the draw.io blog](https://drawio-app.com/blog/building-presentations-team-members-will-%F0%9F%A7%A1/). This could be the best way to diagram and create presentations.
