languages = {
        'en': {
            'title': 'Acrylic photo frame',
            'name': 'Acrylic photo frame',
            'description': 'No description.'
            },
        'zh': {
            'title': '压克力展架系列',
            'name': '压克力展架',
            'description': '暂无简介。'
            }
        }

path = '_i18n/{}/_posts/products/{}/{}'
series = 'Acrylic photo frame'
category = 'Acrylic-photo-frame'
file_prefix = '2015-02-15-acrylic{}.md'
pic_prefix = 'acrylic'
num = 10
prefix = 'G'

template = """---
title: {}
name: {}
numbers: [{}-{}]
layout: products
categories: [Products, {}]
images: ["/assets/{}.jpg"]
time: 2015-02-15
aside: true
---

{}

"""

for l in languages.keys():
    for i in range(num):
        with open(path.format(l, series, file_prefix.format(i)), 'w') as f:
            f.write(template.format(
                languages[l]['title'],
                languages[l]['name'],
                prefix,
                str(i+1).zfill(3),
                category,
                pic_prefix + str(i),
                languages[l]['description']
                ))
        print("{} file {} done!".format(l, file_prefix.format(i)))
