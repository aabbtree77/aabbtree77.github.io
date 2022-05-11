import markdown
from markdown.extensions.toc import TocExtension

with open('out.md', 'r') as f:
    md_text = f.read()
    #html_text = markdown.markdown(md_text, extensions=['toc'])
    html_text = markdown.markdown(md_text, extensions=[TocExtension(baselevel=1), 'nl2br'])

with open('index2.html', 'w') as f:
    f.write(html_text)
