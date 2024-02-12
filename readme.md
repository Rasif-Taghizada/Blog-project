# JSON-Server ilə İşləyən Blog Proyekti

Bu README faylı, "blog_project" adlı blog proyektinin JSON-Server ilə təmin edilmiş versiyası üçün təsviri və təlimatları təqdim edir.

## Proyekt Strukturu

Proyektin fayl və qovluqlarının strukturu aşağıdakı kimidir:

```plaintext
📁blog_project/
├──📁assets/
│   ├──📁css/
│   │   ├──📝reset.css
│   │   ├──📝style.css
│   │   ├──📝main.css
│   │   ├──📝header.css
│   │   ├──📝login.css
│   │   ├──📝createblog.css
│   │   └──📝blog-about.css
│   ├──📁images/
│   │   ├──🖼️like.svg
│   │   ├──🖼️logout.svg
│   │   ├──🖼️Me.png
│   │   └──🖼️profile-template.jpg
│   ├──📁js/
│   │   ├──📝app.js
│   │   ├──📝blog-about.js
│   │   ├──📝createBlog.js
│   │   ├──📝findUser.js
│   │   ├──📝login.js
│   │   └──📝main.js
├──📁db/
│   └── data.json
├──📝blog-about.html
├──📝create_blog.html
├──📝index.html
├──📝login.html
├──📝register.html
├──📝package.json
├──📝readme.md
└──📁.git
```


## İnstallasiya və İstifadə

Proyektin əsas funksiyalarını işə salmaq üçün aşağıdakı addımları izləyin: 

1. **Tələblər**: Node.js və npm tələb olunur. Əgər indi yoxdursa, [Node.js və npm](https://nodejs.org/) saytından yükləyin.

2. **Paketlər**: Terminalda proyektin kök qovluğuna keçid edin və aşağıdakı komandanı daxil edin:

    ```bash
    npm install
    ```

3. **JSON-Server işlədilməsi**: Proyekti işə salmaq üçün terminalda aşağıdakı komandanı daxil edin:

    ```bash
    json-server --watch db/data.json --port 3001
    ```

    JSON-Server artıq hazırda [http://localhost:3001](http://localhost:3001) ünvanında işləyəcək.

4. **Tətbiqi işlədilməsi**: Proyekti işə salmaq üçün başqa bir terminalda aşağıdakı komandanı daxil edin:

    ```bash
    npm start
    ```

    Proyekt artıq hazırda [http://localhost:3000](http://localhost:3000) ünvanında işləyəcək.

## API Endpointləri

JSON-Server, aşağıdakı API endpointlərini təmin edir:

- GET /blogs 📄
- GET /blogs/:id 🔍
- POST /blogs ➕
- PUT /blogs/:id ✏️
- DELETE /blogs/:id 🗑️

Bu endpointləri istifadə edərək məqalələri əlavə etmək, oxumaq, redaktə etmək və silmək mümkündür.

## Statik Fayllar

Proyektdə istifadə edilən CSS və JavaScript faylları "assets" qovluğunda yerləşir. Bu faylları redaktə edərək proyekti öz gözləməyinizə uyğun tənzimləyə bilərsiniz.

## Qeydlər

Bu proyektin tənzimləməsi və əlavə funksiyalar üçün "package.json" faylını redaktə edə bilərsiniz.

Əlavə təfərrüatlı təlimatlar və proyekt haqqında ətraflı məlumat üçün "readme.md" faylına müraciət edin.

