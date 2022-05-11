import markdown
from markdown.extensions.toc import TocExtension

with open('template.html', 'r') as f:
    template=f.read()

with open('main.md', 'r') as f:
    md_text = f.read()
    #html_text = markdown.markdown(md_text, extensions=['toc'])
    html_text = markdown.markdown(md_text, 
        extensions=[
            TocExtension(baselevel=1), 
            #'nl2br',
            'attr_list',
            'tables'])

with open('index.html', 'w') as f:
    src = template.format(src=html_text)
    f.write(src)
