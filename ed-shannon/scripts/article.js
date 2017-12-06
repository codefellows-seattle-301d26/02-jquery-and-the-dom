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
  articles.push(this);
}

// COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
// When using the .clone() method, you can modify the cloned elements or their contents before (re-)inserting them into the document. When used in conjunction with one of the insertion methods, .clone() is a convenient way to duplicate elements on a page. Consider the following HTML:
/* TODO: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance.
  We need to fill in:
    1. author name,
    2. author url,
    3. article title,
    4. article body, and
    5. publication date. */

Article.prototype.toHtml = function() {
  let $newArticle = $('article.template').clone();
  /* TODO: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.attr('data-category', this.category);

  $('.draft h1').text(this.title);
  $('.draft a').text(this.author);
  $('.draft a').attr('href', this.authorUrl);
  $('.draft time').attr('datetime', this.publishedOn);
  $('.draft .article-body').apppend(`<p>${this.body}</p>`);

  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// TODO: Refactor these for loops using the .forEach() array method.
rawData.forEach(function(ele) {
  articles.push(new Article(ele))
});
// for(let i = 0; i < rawData.length; i++) {
//   articles.push(new Article(rawData[i]));
// }
//
articles.forEach(function(ele){
  $('#articles').append(ele.toHtml())
});
// for(let i = 0; i < articles.length; i++) {
//   $('#articles').append(articles[i].toHtml());
// }
