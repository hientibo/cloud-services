FROM python:3.12-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    curl \
    pkg-config \
    default-libmysqlclient-dev \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["sh", "-c", "python wait_for_db.py && python manage.py migrate && gunicorn --bind 0.0.0.0:8000 cloud_services.wsgi:application"]