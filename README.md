# 🍴 Food Cards Fetching App

A simple web application that fetches meal data from **TheMealDB API** based on a selected country and displays it in a responsive grid of food cards (image + title).  

---

## 🚀 Demo  
👉 Live Demo: https://s-r-daniel-324.github.io/Food_Explorer_fetch_API/ 

---

## 📌 Features
- 🔎 Search meals by country (e.g., Canadian, Indian, Chinese).  
- 📸 Displays food image + title in card format.  
- 📱 Fully responsive grid layout (mobile, tablet, desktop).  
- ♻️ Clears old results before showing new ones.  
- ⌨️ Bonus: Press `Enter` in the input box to trigger search.  

---

## 🛠️ Technologies Used
- **HTML5**  
- **CSS3 (Flexbox + Grid)**  
- **JavaScript (Fetch API, DOM manipulation)**  
- **TheMealDB API** → [https://www.themealdb.com/api.php](https://www.themealdb.com/api.php)  

---

## 📂 Project Structure
---

## ⚡ How It Works
1. Enter a country name in the input box (e.g., "Canadian").  
2. Click the **Search** button (or press **Enter**).  
3. The app fetches data from:
https://www.themealdb.com/api/json/v1/1/filter.php?a={country}

Example:
https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

4. Results are displayed as cards containing **image + food title**.  
5. If no meals are found, an error message appears.  


