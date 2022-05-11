from markdownify import markdownify

with open('index.html', 'r') as f:
    html_text = f.read()
    md_text = markdownify(html_text)

with open('out.md', 'w') as f:
    f.write(md_text)
