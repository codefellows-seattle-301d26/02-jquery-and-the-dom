'use strict';

let articles = [];

// COMMENT: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// Constructor function to create article objects. Objects are by convention always capitalized. this refers to the current article we are constructing. rawDataObj refers to the array objects we are taking in to the constructor function.

function Article (rawDataObj) {
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}

// COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
// When using the .clone() method, you can modify the cloned elements or their contents before (re-)inserting them into the document. When used in conjunction with one of the insertion methods, .clone() is a convenient way to duplicate elements on a page. Consider the following HTML:

Article.prototype.toHtml = function() {
  let $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.attr('data-category', this.category);

  $('#articles').append($newArticle);

  $newArticle.addClass('temp');

  $('.temp h1').text(this.title);
  $('.temp a').text(this.author);
  $('.temp a').attr('href', this.authorUrl);
  $('.temp time').attr('datetime', this.publishedOn);
  $('.temp .article-body').append(`<p>${this.body}</p>`);

  $newArticle.removeClass('temp');

  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});
rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(ele){
  // $('#articles').append(ele.toHtml());
  ele.toHtml();
});
