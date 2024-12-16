## Bun and Tailwind CSS

- Install and init Bun:

  ```bash
  curl -fsSL https://bun.sh/install | bash
  bun --version
  cd aabbtree77.github.io
  bun init
  ```

- Leave empty default prompts in `bun init`, followed by

  ```bash
  bun add -d tailwindcss postcss autoprefixer
  bun tailwindcss init
  ```

- Edit tailwind.config.js to specify your content files:

  ```javascript
  module.exports = {
    content: ["./*.html"], // Specify your HTML or other template files here
    theme: {
      extend: {
        fontFamily: {
          code: ['"Source Code Pro"', "monospace"],
        },
      },
    },
    plugins: [],
  };
  ```

- If \*.html files are inside src, use

  ```javascript
  content: ["./*.html", "./src/**/*.html"],
  ```

- Create a new file named input.css:

  ```css
  /*
  * {
      outline: 1px solid red;
    }
  */

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- Tailwind CSS work flow:

  ```bash
  bun tailwindcss build -i input.css -o output.css --minify
  ```

  `output.css` needs to be linked inside index.html:

  ```html
  <link href="./output.css" rel="stylesheet" />
  ```

- To automatically rebuild the CSS on changes:

  ```bash
  bun tailwindcss build input.css -o output.css --minify --watch
  ```

## Multiple Google Fonts

- Select and group multiple fonts from the Google API and get the joint `<link href="" rel="">` link to include inside `<head>`.

- Adjust 'fontFamily`inside`tailwind.config.js`, e.g.

  ```javascript
  fontFamily: {
    code: ['"Source Code Pro"', 'monospace'],
    sans: ['Roboto', 'sans-serif'],
    heading: ['"Playfair Display"', 'serif'],
  },
  ```

- Inside the HTML Tailwind CSS classes become `font-code`, `font-sans`, `font-heading`, e.g.

  ```html
  <h1 class="font-heading"></h1>
  ```

- An average Google font takes 20-30KB.  

## Git

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

## Indent/Dedent

- VS Code: Select lines, ctrl+] or ctrl+[.

- gedit: Preferences -> Editor -> Tab Stops. Select lines, shift+tab or tab.
