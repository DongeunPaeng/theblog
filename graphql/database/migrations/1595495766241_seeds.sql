INSERT INTO roles(title)
VALUES
("admin"),
("blogger");

INSERT INTO permissions(action)
VALUES
("post"),
("manage-users");

INSERT INTO role_permissions (role_id, permission_id)
VALUES
(1, 1),
(1, 2),
(2, 1);

INSERT INTO users(role_id, email, first_name, last_name)
VALUES
(1, "dongeun.paeng@gmial.com", "Dongeun", "Paeng");

INSERT INTO blog_categories (label, description)
VALUES
("Tech", "얼음과 어디 이 하는 것돋고, 그리하였는가?"),
("Blog", "하, 청춘이 심장의 하는 속잎나고, 대고, 거선의 사막이다."),
("Tech", "얼열매를 곳으로 우리의 현저하게 돋고, 그리하였는가?"),
("Blog", "하, 청춘이 심장의 하는 속잎나고, 대고, 거선의 사막이다."),
("Tech", "얼음열매를 곳으로 우리의 현저하게 돋고, 그리하였는가?"),
("Blog", "하는, 청춘이 심장의 하는 속잎나고, 대고, 거선의 사막이다."),
("Tech", "얼음열매를 곳으로 우리의 현저하게 돋고, 그리하였는가?");

INSERT INTO blog_posts (author_id, title, text, description, keyword1, keyword2)
VALUES
(1, "제목 1", "하는 이다.", "description은 이것이다", "keyword1", "keyword2"),
(1, "제목 2는 이것다", "하는없으면,", "description은 이것이다", "keyword1", "keyword2"),
(1, "제목 3", "힘아 봄바람이다.", "description은 이것이다", "keyword1", "keyword2"),
(1, "제목 4", "힘차게불어 무엇다.", "description은 이것이다", "keyword1", "keyword2"),
(1, "제목 5", "힘차게 평람이다.", "description은 이것이다", "keyword1", "keyword2"),
(1, "제목 6", "힘차게 평화스람이다.", "description은 이것이다", "keyword1", "keyword2"),
(1, "제목 7", "힘차게 평화스 다.", "description은 이것이다", "keyword1", "keyword2"),
(1, "제목 8", "힘차게 평화이다.", "description은 이것이다", "keyword1", "keyword2"),
(1, "제목 9는 이것", "힘차이다.", "description은 이것이다", "keyword1", "keyword2");

INSERT INTO blog_post_comments (post_id, author_id, comment)
VALUES
(1, 1, "comments test!"),
(1, 1, "잘했다!");

INSERT INTO blog_post_categories (post_id, category_id)
VALUES
(1, 4),
(1, 5),
(2, 7),
(3, 4),
(3, 5),
(4, 6),
(5, 4),
(6, 1),
(6, 2),
(7, 4),
(8, 6),
(9, 2),
(9, 3);