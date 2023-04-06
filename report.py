import csv as csv_module
import requests

API_URL = 'http://localhost:3000'

def fetch_articles():
    response = requests.get(f'{API_URL}/articles')
    return response.json()

def count_articles_per_category(articles):
    count = {}
    for article in articles:
        category = article['category']
        if category in count:
            count[category] += 1
        else:
            count[category] = 1
    return count

def count_articles_per_author(articles):
    count = {}
    for article in articles:
        author = article['author']
        if author in count:
            count[author] += 1
        else:
            count[author] = 1
    return count

def calculate_average_words_per_article(articles):
    word_count = 0
    for article in articles:
        word_count += len(article['content'].split())
    return word_count / len(articles)

def generate_report():
    articles = fetch_articles()
    categories = count_articles_per_category(articles)
    authors = count_articles_per_author(articles)
    avg_words = calculate_average_words_per_article(articles)

    with open('report.csv', mode='w', newline='') as report_file:
        writer = csv_module.writer(report_file)
        writer.writerow(['Category', 'Article count'])
        for category, count in categories.items():
            writer.writerow([category, count])

        writer.writerow([])

        writer.writerow(['Author', 'Article count'])
        for author, count in authors.items():
            writer.writerow([author, count])

        writer.writerow([])

        writer.writerow(['Average words per article'])
        writer.writerow([avg_words])

    print('Report generated successfully!')

if __name__ == '__main__':
    generate_report()