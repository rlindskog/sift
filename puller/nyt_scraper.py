import scrapy
from scrapy.crawler import CrawlerProcess
from sys import argv

class BlogSpider(scrapy.Spider):
    url = argv[1]
    if not url:
        raise ValueError('No url given')
    print(url)
 	

 
    name = 'blogspider'
    start_urls = [url]

    def parse(self, response):
        for line in response.css('.story-body-text').extract():
        	
            print(line)

if __name__ == "__main__":
	process = CrawlerProcess({
	    'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)'
	})

	
	process.crawl(BlogSpider)
	process.start() # the script will block here until the crawling is finished
