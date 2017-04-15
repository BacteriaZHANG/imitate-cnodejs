import { Injectable } from '@angular/core';

export class Article {
    constructor(
        public id: number,
        public replyCount: number,
        public visitCount: number,
        public lastTime: number,
        public hours: string,
        public location:string,
        public kind: string,
        public topicTitle: string,
        public img: string
    ) {}
}

let ARTICLES = [
    new Article(1, 47, 5848, 18, '小时前','put_top', '置顶', '饿了么大前端 Node.js 进阶教程', 'user.png'),
    new Article(2, 41, 13821, 2, '天前','put_top', '置顶', 'Node.js 2016 回顾以及2017展望', 'user2.png'),
    new Article(3, 431, 41099, 5, '天前','put_top', '置顶', '分享我用cnode社区api做微信小应用的入门过程', 'user1.jpg'),
    new Article(4, 48, 13821, 11, '分钟前','topic-list-tap', '问答', '关于前后端分离api安全问题', 'user5.png'),
    new Article(5, 7, 124, 1, '分钟前','topic-list-tap', '问答', '关于Apache Camel，求高人指点 T T', 'user4.png'),
    new Article(6, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(7, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(8, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(9, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(10, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(11, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(12, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(13, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(14, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(15, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(16, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(17, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(18, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(19, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(20, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(21, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(22, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(23, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(24, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(25, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(26, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(27, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(28, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(29, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(30, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(31, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(32, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(33, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(34, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(35, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(36, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(37, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(38, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(39, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg'),
    new Article(40, 0, 0, 0, '小时前','topic-list-tap', '问答', '文章题目', 'user1.jpg')
];

let articlesPromise = Promise.resolve(ARTICLES);

@Injectable()
export class ArticlesService {
    getArticles() { return articlesPromise; }

    getArticle(id: number) {
        return articlesPromise
            .then(articles => articles.find(article => article.id === +id));
    }
}