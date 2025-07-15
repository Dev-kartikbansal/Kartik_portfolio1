import json
from flask import Blueprint, render_template

main = Blueprint('main', __name__)


@main.route('/')
def index():
    return render_template('index.html')


@main.route('/about')
def about():
    return render_template('about.html')


@main.route('/projects')
def projects():
    return render_template('projects.html')


@main.route('/blog')
def blog():
    # Load blog posts from JSON
    with open('app/static/data/blog_posts.json') as f:
        posts = json.load(f)
    return render_template('blog.html', posts=posts)


@main.route('/contact')
def contact():
    return render_template('contact.html')


@main.route('/thankyou')
def thankyou():
    return render_template('thankyou.html')
