languages = {
        'en': {
            'title': 'Wall frid',
            'name': 'Wall frid',
            'description': 'No description.'
            },
        'zh': {
            'title': '墙体槽板',
            'name': '墙体槽板',
            'description': '暂无简介。'
            }
        }

path = '_i18n/{}/_posts/products/{}/{}'
series = 'Wall frid series'
category = 'Wall-frid-series'
file_prefix = '2015-02-15-wall{}.md'
pic_predix = 'wall'

template = """---
title: {}
name: {}
numbers: [E-{}]
layout: products
categories: [Products, {}]
images: ["/assets/{}.jpg"]
time: 2015-02-15
aside: true
---

{}

"""

for l in languages.keys():
    for i in range(10):
        with open(path.format(l, series, file_prefix.format(i)), 'w') as f:
            f.write(template.format(
                languages[l]['title'],
                languages[l]['name'],
                str(i+1).zfill(3),
                category,
                pic_predix + str(i),
                languages[l]['description']
                ))
        print("{} file {} done!".format(l, file_prefix.format(i)))
