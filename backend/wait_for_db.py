# wait_for_db.py
import time
import sys
import pymysql

db_host = 'db'
db_port = 3306
db_user = 'integris'
db_password = '1ntegris'
db_name = 'cloud_servicesdb'

max_retries = 10
retry_interval = 5  # secondes

for i in range(max_retries):
    try:
        conn = pymysql.connect(
            host=db_host,
            port=db_port,
            user=db_user,
            password=db_password,
            database=db_name
        )
        conn.close()
        sys.exit(0)
    except pymysql.Error:
        print(f"Waiting for database... Attempt {i + 1}/{max_retries}")
        time.sleep(retry_interval)
sys.exit(1)