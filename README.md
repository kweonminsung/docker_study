## 프론트 서버

```
cd ./frontend

npm install

npm start
```

## 백 서버

```
cd ./backend

python -m venv venv

. venv/Scripts/activate

pip install -r ./requirements.txt

uvicorn main:app --reload --port 3001
```
