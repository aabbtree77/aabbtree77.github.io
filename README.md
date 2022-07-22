# Tools

This web page uses the following tools (the list will grow):

- ~~w3.css to style its elements and make it all somewhat responsive, px-free.~~ It is a useful css library, but there is totally no need for multi-column setups in my case and any external css eventually leads to messing with !important and making trivial things hard. Instead, adopted
  this ineffable setup of [Harrison Totty](https://github.com/HarrisonTotty/harrisontotty.github.io), sans Jekyll.

- quintessential-css-cube by [zachstronaut](https://github.com/zachstronaut/quintessential-css-cube) to compactify images.

- ~~Petit Formal Script Google Font just for fun.~~ Removed the latter, pretty does not mean eligible. I now prefer a monospaced sans serif font whose size is set in such a way that the difference between "l" and "I" or "O" and "0" is clear and one can actually see the distinctness of the font. My choice is Source Code Pro by Paul D. Hunt, its letter "i" is such a joy.

- Python-Markdown, see also [https://github.com/Erkaman/erkaman.github.io](https://github.com/Erkaman/erkaman.github.io). This allows to avoid Jekyll or any other blog engine.
  One can also style Markdown with Python-Markdown extensions, but it is better to use plain HTML for the special cases.

- [Table generator](https://www.tablesgenerator.com/markdown_tables).

- [Mermaid](https://mermaid-js.github.io/mermaid/#/) to draw diagrams, e.g. see my MQTT github repo.

- ~~MathJax~~. It is nice for basic things, problems arise when you try to insert equations into tables and rotate them. For the arrows I just use UTF-8.

- When in doubt, use plain HTML, Markdown allows it. 

- [How I learned to stop worrying and structure all writing as a list](https://dynomight.net/lists/).

# Local Machine

Python3:

```console
pip install markdown
pip install markdownify
```

Write something in Markdown files, three so far, followed by

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

I do not intend using HTML+LaTeX as LaTeX:

[https://math.meta.stackexchange.com/questions/3514/using-the-align-environment](https://math.meta.stackexchange.com/questions/3514/using-the-align-environment).

Special escapes, positioning is a mess, style interference:

[https://stackoverflow.com/questions/36928369/html-css-table-misaligned-columns](https://stackoverflow.com/questions/36928369/html-css-table-misaligned-columns)

The table can be semi-there! KISS.
