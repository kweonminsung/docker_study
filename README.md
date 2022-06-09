```
git clone git@github.com:kweonminsung/docker_study.git
```

### 프론트 서버 (React)

```
cd ./frontend

npm install

npm start
```

### 백 서버 (FastAPI)

```
cd ./backend

python -m venv venv

. venv/Scripts/activate

pip install --upgrade pip

pip install -r ./requirements.txt

uvicorn main:app --reload --port 3001
```
