# Demo website made with React

---
## Live preview of website availabe at link
<a href="https://designo-edition.netlify.app/">designo-edition.netlify.app</a>

---
![plot](./src/assets/readme/Screenshot%20from%202023-07-25%2023-25-50.png)
---
---
![plot](./src/assets/readme/Screenshot%20from%202023-07-25%2023-26-25.png)
---
# Available scripts
```bash
npm run dev
```
### Also available to build with Docker


build image

```bash
docker build -t react-app:1 .
```

deploy container from image

```bash
docker run --rm -p 5173:5173 -d  -v $(pwd)/src:/app/src:ro react-app:1
```

change first port in case it is occupied