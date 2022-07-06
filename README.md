# ReactFrontEnd
――What kind of application is it?
--Operating environment (Java version)
--Procedure for booting (preparing database and booting Spring Boot)
# どのようなアプリケーションか？

学生のデータ（名前、生年月日、メール）を入れられて、作成、参照、更新、削除　（CRUD）という　機能ができる　シンプルな　アプリ　でございます。

# 動作する環境（Javaのバージョン）
Oracale OpenJDK version 18.0.1

# 起動するための手順（データベースの準備やSpring Bootの起動）
ーapplication.properties ていう　フォルダ　に postgre をつかって　データベース　と　コネクト　します。
ーstudent ていう　フォルダ　に　student の　class を　開発します。
ーstudent repository には　すべての　学生のデータを　セレクトします。
ーstudent controller API から　リクエストの処理,student service から　機能　を使います。
ーstudent service には　CRUD　の　機能　をかきます。
