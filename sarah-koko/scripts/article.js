'use strict';

let articles = [];

// COMMENT: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// it is an object constructor, the name is capitalized because of convention.  'This' refers to the object. 'rawDataObj represents the information we are putting into the constructor.  in this case it will be the object literal held at each index of the rawData array.

function Article (rawDataObj) {
  this.title= rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
  console.log('whats happening: ', articles);
}

Article.prototype.toHtml = function() {
  // COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
  // Cloning allows us to grab all the decedents of the parent element.
  let $newArticle = $('article.template').clone().removeClass('template').addClass('new-article');
  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.attr('data-category', this.category);
  $newArticle.find('h1').html(this.title);
  $newArticle.find('address a').html(this.author).attr('href', this.authorUrl).attr('target', this.authorUrl);
  $newArticle.find('article.new-article h1').html(this.title);
  $newArticle.find('section.article-body').html(this.body);
  $newArticle.find('time').html(this.publishedOn);
  $newArticle.find('h1').html(this.title);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
})

articles.forEach(function(ele) {
  $('#articles').append(ele.toHtml());
})