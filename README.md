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
<img width="1481" height="840" alt="Screenshot 2025-07-30 at 14 16 00" src="https://github.com/user-attachments/assets/593b5ee3-8f9d-4851-97ad-6bc3e107a664" />

<img width="1505" height="890" alt="Screenshot 2025-07-30 at 14 17 07" src="https://github.com/user-attachments/assets/9fd14d3c-a5e7-49f9-90a4-19d022d55a21" />

<img width="1463" height="872" alt="Screenshot 2025-07-30 at 14 18 06" src="https://github.com/user-attachments/assets/9a06cf46-85b8-4e3d-a5e5-424dcaa4450a" />

<img width="1472" height="893" alt="Screenshot 2025-07-30 at 14 18 16" src="https://github.com/user-attachments/assets/697d4e83-4d61-4d57-8409-2fd15e34aac5" />

<img width="1485" height="889" alt="Screenshot 2025-07-30 at 14 18 34" src="https://github.com/user-attachments/assets/5ad5189d-181b-48a2-92e8-26134b72e274" />

<img width="1504" height="887" alt="Screenshot 2025-07-30 at 14 18 46" src="https://github.com/user-attachments/assets/ac398462-ffec-40e5-8aed-305a91c7fc92" />

<img width="1485" height="890" alt="Screenshot 2025-07-30 at 14 25 34" src="https://github.com/user-attachments/assets/5f08963a-fce3-4005-9f77-d75e5fb5a67e" />

<img width="1504" height="877" alt="Screenshot 2025-07-30 at 14 28 48" src="https://github.com/user-attachments/assets/f2112061-c459-4302-b2b2-c869945f255d" />


---

## 📄 License

MIT © 2025 [Your Name]
