import requests

# Replace 'your_website_url_here' with the URL you want to test.
url = 'https://dev.doofy.io/'

for i in range(100):
    response = requests.get(url)
    print(f'Request #{i+1}: Status Code = {response.status_code}')
