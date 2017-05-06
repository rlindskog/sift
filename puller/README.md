## API Puller

Folder which includes the API pullers for the various news sources.

## Usage

Each API puller should subclass APIPuller and implement the method `.get_articles_for_author(fullname)` for querying articles for a given author.  That method should then return a list of dicts of the relevant information, for example:

```
 {'author': u'David Remnick',
  'pub_date': u'2017-03-19T02:53:06Z',
  'publication': u'The New Yorker',
  'title': u'Remembering Chuck Berry, Who Died at Ninety',
  'url': u'http://www.newyorker.com/culture/culture-desk/remembering-chuck-berry-who-died-at-ninety?mbid=rss'}
```

## Authentication

Any private credentials you don't want committed should be in `config.py` in the `credentials` dict, under a key named after the APIPuller class, e.g.:

```
credentials = {
    'AylienPuller': {
        'ID': '<some ID string',
        'key': '<some api key>',
    }
}
```
for the `AylienPuller` class.
