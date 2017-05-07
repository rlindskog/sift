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
