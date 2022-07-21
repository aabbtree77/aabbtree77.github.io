import markdown
from markdown.extensions.toc import TocExtension

with open('template.html', 'r') as f:
    template=f.read()
    
md_list = ['front_card', 'projects', 'bookmarks']
with open('index.html', 'w') as fout:

    #1. Convert each md to html and inject into template
    for ind, item in enumerate(md_list):
        with open('main_' + item + '.md', 'r') as f:
            item_md_text = f.read()
            #html_text = markdown.markdown(md_text, extensions=['toc'])
            item_html_text = markdown.markdown(item_md_text, 
                extensions=[
                TocExtension(baselevel=1), 
                #'nl2br',
                'attr_list',
                'tables'])
        #format_value = {'src'+str(ind) : item_html_text}
        #format_value =  {'src'+str(ind) : item}
        #print(format_value)       
        #template = template.format(**format_value)
        template = template.replace('{src'+str(ind)+'}', item_html_text, 1)
        print('ind={0}, item={1}.\n'.format(ind, item))
    #2. Save the result    
    fout.write(template) 
