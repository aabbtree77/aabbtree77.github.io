# Tools

This web page uses the following tools (the list will grow):

- w3.css to style its elements and make it all somewhat responsive, px-free. 

- quintessential-css-cube by zachstronaut to compactify a presentation of images.

- monospace mostly, but also Petit Formal Script Google Font just for fun.

- Python-Markdown which allows to style Markdown with CSS classes, but it is better to write HTML in Markdown for such cases unless styling is very simple. See also [https://github.com/Erkaman/erkaman.github.io](https://github.com/Erkaman/erkaman.github.io) where Python-Markdown is used as a minimal blogging engine to organize articles. 

- [Table generator](https://www.tablesgenerator.com/markdown_tables).

- [Mermaid](https://mermaid-js.github.io/mermaid/#/) to draw diagrams.

- MathJax.

- When in doubt, use plain HTML, Markdown allows it, purity sucks. 

- [How I learned to stop worrying and structure all writing as a list](https://dynomight.net/lists/).

# Local Machine

Python3:

```console
pip install markdown
pip install markdownify
```

Write some thoughts in main.md and then compile Markdown to HTML:

```python
python3 convert.py
```

which will output index.html. There are also files md2html.py and html2md.py which might be useful sometimes. 

# Github
 
My github "work flow":

- Set up [tokens](http://www.compciv.org/recipes/devops/git-and-github-setup/) with .bashrc.

- Inside a newly created and cloned repo (locally):

    ```console
    git remote rm origin
    git remote add origin https://aabbtree77:$GITHUB_ACCESS_TOKEN@github.com/aabbtree77/new_repo_name.git
    git remote show origin
    ```

- Repo update routine:

    ```console
    git add .
    git commit -m "first commit"
    git push origin main
    ```

Here "main" can sometimes become "master" depending on what "git remote show origin" indicates.

- Rewind to a particular commmit in the **additional local copy** of the repo:

    ```console
    git log --pretty=format:"%h - %ad : %s"
    git reset --hard hash#
    ```


# Some Further Comments

I also add a bit of LaTeX here and there, but I do not recommend pushing HTML or HTML+LaTeX as LaTeX:

[https://math.meta.stackexchange.com/questions/3514/using-the-align-environment](https://math.meta.stackexchange.com/questions/3514/using-the-align-environment).

The escapes get weirder and weirder, positioning is a mess, the css interference:

[https://stackoverflow.com/questions/36928369/html-css-table-misaligned-columns](https://stackoverflow.com/questions/36928369/html-css-table-misaligned-columns)

The table can be semi-there!
