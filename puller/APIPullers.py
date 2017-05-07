from abc import ABCMeta, abstractmethod
import requests
import json

import config


class APIPuller(object):
    __metaclass__ = ABCMeta

    def post_to_articles(self, article_data):
        requests.post(
            config.hostname + config.article_path,
            data=article_data,
        )

    def populate_author(self, author_full_name):
        vals = self.get_articles_for_author(author_full_name)
        for val in vals:
            self.post_to_articles(val)

    @abstractmethod
    def get_articles_for_author(self, author_full_name):
        pass


class AylienPuller(APIPuller):
    def __init__(self):
        pass

    def get_articles_for_author(self, author_full_name):
        # need to get authors, url, publication, pub_date, title, misc
        url = '''https://api.newsapi.aylien.com/api/v1/stories?language[]=en&published_at.start=NOW-50DAYS&published_at.end=NOW&categories.confident=true&cluster=false&cluster.algorithm=lingo&sort_by=published_at&sort_direction=desc&author.name=''' + author_full_name
        api_id = config.credentials["AylienPuller"]["ID"]
        api_key = config.credentials["AylienPuller"]["key"]
        headers = {
            'X-AYLIEN-NewsAPI-Application-ID': api_id,
            'X-AYLIEN-NewsAPI-Application-Key': api_key,
        }
        text_response = requests.get(url, headers=headers).text
        dict_response = json.loads(text_response)
        article_data = [{
            'publication': story['source']['title'],
            'author': story['author']['name'],
            'url': story['links']['permalink'],
            'pub_date': story['published_at'],
            'title': story['title'],
        } for story in dict_response['stories']]
        return article_data


class NYTimesPuller(APIPuller):

    def _headline_to_title(self, headline_dict):
        """Helper for turning headline dict into a single title, by
rendering it as headline.main : headline.kicker
        """
        main = headline_dict['main']
        kicker = headline_dict.get('content_kicker')
        if kicker is None:
            return main
        return u'{0} : {1}'.format(main, kicker)

    def _byline_to_author(self, byline_dict):
        """Helper for turning byline dict into a single author:
'By JOHN DOE' to 'John Doe' -- yes, this is really lossy with respect
to capitalization.
        """
        original_field = byline_dict['original']
        stripped = original_field[3:]
        # Turn the name into lower case terms
        terms = stripped.lower().split()
        # rejoin them into first-letter-capitalized form
        return u' '.join([x.capitalize() for x in terms])

    def get_articles_for_author(self, author_full_name):
        url = '''https://api.nytimes.com/svc/search/v2/articlesearch.json'''
        payload = {
            'api_key': config.credentials["NYTimesPuller"]["api_key"],
            'q': author_full_name,
        }
        res = requests.get(url, params=payload)
        res_dict = json.loads(res.text)
        stories = res_dict['response']['docs']
        needed_keys = ['byline', 'source', 'web_url', 'pub_date',
                       'headline']
        usable_articles = []
        # Remove the ones that are missing at least one of the
        # needed_keys
        for story in stories:
            usable = True
            for needed_key in needed_keys:
                if story[needed_key] is None:
                    usable = False
            if usable:
                usable_articles.append(story)
        article_data = [{
            'publication': story['source'],
            # NY Times renders author as byline.original =
            # "By <CAPITALIZED AUTHOR NAME>" (thanks guys...)
            'author': self._byline_to_author(story['byline']),
            'url': story['web_url'],
            'pub_date': story['pub_date'],
            'title': self._headline_to_title(story['headline']),
        } for story in usable_articles]
        return article_data
