# 🌾 FarmFusion: Full-Stack Smart Agriculture Ecosystem

**FarmFusion** is a modern, multilingual platform designed to empower farmers with data-driven insights. By combining **AI-driven crop recommendations**, **real-time weather risk analysis**, and **voice-enabled assistance**, FarmFusion bridges the gap between complex agricultural science and everyday farming.

---

## 🚀 Key Features

* **🤖 Adiii AI Chatbot**: A multilingual voice assistant supporting Hindi, Marathi, Bengali, Tamil, and English using the **Web Speech API**.
* **🌾 Smart Crop Recommendation**: Advanced logic that analyzes soil NPK levels, pH, and environmental factors to suggest the most profitable crops.
* **📈 Yield Prediction**: Data visualization tools built with **Recharts** to predict harvest totals based on historical and real-time data.
* **⚠️ Weather Guard**: A risk-analysis engine that identifies threats like frost or high humidity and provides actionable alerts.
* **🧪 Soil Analysis Dashboard**: A specialized UI for monitoring chemical and physical soil properties to optimize fertilizer use.
* **🇮🇳 Government Schemes**: A centralized hub for farmers to discover and apply for Indian agricultural subsidies and insurance.

---

## 🛠️ The Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | **React 18 & TypeScript** | Core framework for a scalable, type-safe user interface. |
| **Build Tool** | **Vite** | Ensures lightning-fast development and optimized production builds. |
| **Database** | **Supabase (PostgreSQL)** | Handles secure data storage, user profiles, and Row Level Security (RLS). |
| **Styling** | **Tailwind CSS** | Powers the modern, responsive "Glassmorphism" design. |
| **Animations** | **Framer Motion** | Implements smooth scroll-triggered and floating UI effects. |
| **UI Components** | **Radix UI** | Provides accessible, high-quality primitives like Dialogs and Selects. |
| **Icons** | **Lucide React** | A comprehensive library of agricultural and system icons. |

---

## 🏗️ Architecture & Logic

* **Custom Hooks**: The app uses modular hooks like `useAuth` for security, `useLanguage` for multilingual support, and `use-mobile` for responsive layouts.
* **Headless UI**: Built using **Radix UI** primitives to ensure the platform is accessible to users with varying levels of digital literacy.
* **Real-time Feedback**: Integrated **Sonner** and **Toast** notification systems to provide immediate alerts for weather changes or system updates.

---

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/farmfusion.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   Create a `.env` file with your **Supabase** credentials.
4. **Run the development server**:
   ```bash
   npm run dev
   ```

---
