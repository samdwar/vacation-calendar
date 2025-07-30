# 🌴 Vacation Calendar

A visually interactive calendar that displays public holidays for selected countries with weekly highlighting:

- ✅ Highlights weeks with holidays:
  - Light Green: 1 holiday
  - Dark Green: More than 1 holiday
- 🗓️ Switch between **Monthly** and **Quarterly** views
- 🌍 Supports multiple countries (IN, US, GB, FR)
- 📅 Displays calendar for any year
- ⚙️ Built with React + Tailwind CSS
- 🔗 Uses https://calendarific.com/

---

## ✨ Features

| Feature                        | Description                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| 📆 **Monthly View**           | Shows each month with weekly highlighting based on holiday count           |
| 📖 **Quarterly View**         | 3-month grid per quarter with weekly row highlights                        |
| 🌍 **Multi-country Support**  | India, USA, UK, France (more can be added)                                 |
| 🎯 **Holiday Logic**          | Weekly highlighting based on number of holidays in that week               |
| 🎨 **Color Logic**            | - Light green: 1 holiday <br> - Dark green: >1 holiday                      |

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/samdwar/vacation-calendar.git
cd vacation-calendar
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Dev Server

```bash
npm run dev
```

App will be available at [http://localhost:5173](http://localhost:5173)

---

## 🛠 Tech Stack

- **Frontend:** React
- **Styling:** Tailwind CSS
- **Data Source:** (https://calendarific.com/)

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── Calendar.jsx         # Main calendar wrapper
│   ├── MonthView.jsx        # Monthly layout logic
│   ├── QuarterView.jsx      # Quarterly layout logic
│   ├── Day.jsx              # Single day UI box
│   └── utils.js             # Shared utility functions
│
├── App.jsx                  # App layout + dropdowns
└── main.jsx                 # Entry point
```

---

## 🌐 Supported Countries

This project uses https://calendarific.com/ to fetch real-time public holiday data.

Supported countries include:
- 🇮🇳 India (`IN`)
- 🇺🇸 USA (`US`)
- 🇬🇧 United Kingdom (`GB`)
- 🇫🇷 France (`FR`)

## 📸 Screenshots



---

## 📄 License

MIT © 2025 [Your Name]
