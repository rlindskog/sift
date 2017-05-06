import requests, sys, json


'''
input vars needed:
-persons name
'''

print('python script has run')


print("This is the name of the script: ", sys.argv[0])
print("Number of arguments: ", len(sys.argv))
print("The arguments are: " , str(sys.argv))

persons_name = 'David Remnick'


url = 'https://api.newsapi.aylien.com/api/v1/stories?language[]=en&published_at.start=NOW-50DAYS&published_at.end=NOW&categories.confident=true&cluster=false&cluster.algorithm=lingo&sort_by=published_at&sort_direction=desc&author.name=' + persons_name
headers = {'X-AYLIEN-NewsAPI-Application-ID': '912bdc99',
          'X-AYLIEN-NewsAPI-Application-Key': 'e76212dc1073fc8e7138c7dde55be57b'
          }

r = requests.get(url, headers=headers)
print(r.status_code)
print(r.headers['content-type'])
#'application/json; charset=utf8'
print(r.encoding)
#'utf-8'
print(r.text)
#u'{"type":"User"...'
#print(r.json() )

json.dumps()

'''data = '{
  "query": {
    "bool": {
      "must": [
        {
          "text": {
            "record.document": "SOME_JOURNAL"
          }
        },
        {
          "text": {
            "record.articleTitle": "farmers"
          }
        }
      ],
      "must_not": [],
      "should": []
    }
  },
  "from": 0,
  "size": 50,
  "sort": [],
  "facets": {}
}'
response = requests.post(url, data=data)'''