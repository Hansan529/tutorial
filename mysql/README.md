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
