# Mysql

DBSM로 표 형태로 데이터를 확인할 수 있다.

데이터베이스에는 CRUD (Create, Read, Update, Delete) 기능을 사용할 수 있음.

| id  | title   | description | created    |
| --- | ------- | ----------- | ---------- |
| 1   | MySQL   | ...         | 2023.08.03 |
| 2   | Oracle  | ...         | 2023.08.03 |
| 3   | MongoDB | ...         | 2023.08.03 |

**column** : id, title, description, created  
**row** : 1 MySQL ... 2023.08.03

데이터를 생성을 해야 해당 데이터를 읽을 수 있어서 만드는 방법부터 알아보자.

데이터베이스 / 테이블 로 나뉘는데, NoSQL에서의 모델과 스키마와 같다.

```bash
mysql> CREATE DATABASE name;
```

데이터를 담아 둘 데이터베이스를 생성해주며, 데이터베이스들을 확인하는 방법은 다음과 같다.

```bash
mysql> SHOW DATABASES;

+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| name               |
+--------------------+
```

데이터들이 입력될 스키마를 생성해준다.

```bash
mysql> CREATE TABLE name_table(
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NULL,
    created DATETIME NOT NULL,
    PRIMARY KEY(id)
);
```

```bash
mysql> SHOW TABLES;

+----------------+
| Tables_in_test |
+----------------+
| name_table     |
+----------------+
```

입력을 받을 준비는 완료했으니 이제 데이터를 추가한다.

## CREATE

```bash
mysql> USE name;
mysql> INSERT INTO name_table(title, description, created) VALUES('Title', '본문', NOW());
```

## READ

- Table 확인

```bash
mysql> DESC name_table;

+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int          | NO   | PRI | NULL    | auto_increment |
| title       | varchar(100) | NO   |     | NULL    |                |
| description | text         | YES  |     | NULL    |                |
| created     | datetime     | NO   |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
```

- 데이터 확인

```bash
mysql> SELECT * FROM name_table;

+----+-------+--------------+---------------------+
| id | title | description  | created             |
+----+-------+--------------+---------------------+
|  1 | Title |      본문     | 2023-08-03 14:25:33 |
+----+-------+--------------+---------------------+
```

- 특정 열만 읽기

```bash
mysql> SELECT id, title, created FROM name_table;

+----+--------+---------------------+
| id | title  | created             |
+----+--------+---------------------+
|  1 | MySQL  | 2023-08-03 14:25:33 |
|  2 | ORACLE | 2023-08-03 14:40:25 |
+----+--------+---------------------+
```

- 특정 값만 읽기

```bash
mysql> SELECT id, title, created FROM name_table WHERE title='MySQL';

+----+-------+---------------------+
| id | title | created             |
+----+-------+---------------------+
|  1 | MySQL | 2023-08-03 14:25:33 |
+----+-------+---------------------+
```

- 정렬 읽기

```bash
+----+-------+--------------+---------------------+
| id | title | description  | created             |
+----+-------+--------------+---------------------+
|  1 | Title |      본문     | 2023-08-03 14:25:33 |
+----+-------+--------------+---------------------+
mysql> SELECT id, title, created FROM name_table ORDER BY id DESC;

+----+--------+---------------------+
| id | title  | created             |
+----+--------+---------------------+
|  2 | ORACLE | 2023-08-03 14:40:25 |
|  1 | MySQL  | 2023-08-03 14:25:33 |
+----+--------+---------------------+
```

- 최대 읽을 개수 설정

```bash
mysql> SELECT id, title, created FROM name_table ORDER BY id DESC LIMIT 1;

+----+--------+---------------------+
| id | title  | created             |
+----+--------+---------------------+
|  2 | ORACLE | 2023-08-03 14:40:25 |
+----+--------+---------------------+
```

- 테이블 분리

```bash
mysql> SELECT * FROM author;

+----+--------+---------------------------+
| id | name   | profile                   |
+----+--------+---------------------------+
|  1 | egoing | developer                 |
|  2 | duru   | database administrator    |
|  3 | taeho  | data scientist, developer |
+----+--------+---------------------------+

mysql> SELECT * FROM topic;

+----+------------+-------------------+---------------------+-----------+
| id | title      | description       | created             | author_id |
+----+------------+-------------------+---------------------+-----------+
|  1 | MySQL      | MySQL is...       | 2018-01-01 12:10:11 |         1 |
|  2 | Oracle     | Oracle is ...     | 2018-01-03 13:01:10 |         1 |
|  3 | SQL Server | SQL Server is ... | 2018-01-20 11:01:10 |         2 |
|  4 | PostgreSQL | PostgreSQL is ... | 2018-01-23 01:03:03 |         3 |
|  5 | MongoDB    | MongoDB is ...    | 2018-01-30 12:31:03 |         1 |
+----+------------+-------------------+---------------------+-----------+

mysql> SELECT topic.id AS topic_id, title, description, created, name, profile FROM topic LEFT JOIN author ON topic.author_id = author.id;

+----------+------------+-------------------+---------------------+--------+---------------------------+
| TOPIC_ID | title      | description       | created             | name   | profile                   |
+----------+------------+-------------------+---------------------+--------+---------------------------+
|        1 | MySQL      | MySQL is...       | 2018-01-01 12:10:11 | egoing | developer                 |
|        2 | Oracle     | Oracle is ...     | 2018-01-03 13:01:10 | egoing | developer                 |
|        3 | SQL Server | SQL Server is ... | 2018-01-20 11:01:10 | duru   | database administrator    |
|        4 | PostgreSQL | PostgreSQL is ... | 2018-01-23 01:03:03 | taeho  | data scientist, developer |
|        5 | MongoDB    | MongoDB is ...    | 2018-01-30 12:31:03 | egoing | developer                 |
+----------+------------+-------------------+---------------------+--------+---------------------------+
```

## Update

- 업데이트

**WHERE문을 작성하지 않으면 모든 데이터베이스의 값이 변하니 주의**

```bash
mysql> UPDATE name_table SET title='SQL' WHERE id=2;
mysql> SELECT * FROM name_table;

+----+-------+--------------+---------------------+
| id | title | description  | created             |
+----+-------+--------------+---------------------+
|  1 | Title |      본문     | 2023-08-03 14:25:33 |
|  2 | SQL   |      본문     | 2023-08-03 14:25:33 |
+----+-------+--------------+---------------------+
```

## DELETE

- 삭제

```bash
mysql> DELETE FROM name_table WHERE id=2;
mysql> SELECT * FROM name_table;

+----+-------+--------------+---------------------+
| id | title | description  | created             |
+----+-------+--------------+---------------------+
|  1 | Title |      본문     | 2023-08-03 14:25:33 |
+----+-------+--------------+---------------------+
```
