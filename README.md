# 🌾 FarmFusion: Full-Stack Smart Agriculture Ecosystem

**FarmFusion** is a modern, multilingual platform designed to empower farmers with data-driven insights. By combining **AI-driven crop recommendations**, **real-time weather risk analysis**, and **voice-enabled assistance**, the platform bridges the gap between complex agricultural science and everyday farming.

---

## 🚀 Key Features

* **🤖 Adiii AI Chatbot**: A multilingual voice assistant supporting Hindi, Marathi, Bengali, Tamil, and English, utilizing the **Web Speech API** for hands-free interaction.
* **🌾 Smart Crop Recommendation**: Advanced logic that analyzes soil NPK levels, pH, and environmental factors to suggest the most profitable crops.
* **📈 Yield Prediction**: Data visualization tools built with **Recharts** to forecast harvest totals based on historical and real-time environmental data.
* **⚠️ Weather Guard**: A risk-analysis engine that identifies specific threats like frost or high humidity and provides actionable alerts.
* **🧪 Soil Analysis Dashboard**: A specialized UI for monitoring chemical and physical soil properties, including an AI feature for instant nutrient assessment from photos.
* **🇮🇳 Government Schemes**: A centralized hub for farmers to discover and apply for Indian agricultural subsidies and insurance programs like PM-Kisan and PM-Fasal Bima Yojana.
* **📚 Educational Tutorials**: A "Digital Classroom" providing video and text-based resources to help farmers adopt modern agricultural techniques.

---

## 🛠️ The Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | **React 18 & TypeScript** | Core framework for building a scalable, type-safe, and component-based user interface. |
| **Build Tool** | **Vite** | Ensures rapid development cycles and highly optimized production builds. |
| **Database** | **Supabase (PostgreSQL)** | Handles secure data storage, user authentication, and Row Level Security (RLS). |
| **Styling** | **Tailwind CSS** | Powers the modern, responsive "Glassmorphism" design and custom agricultural theme. |
| **Animations** | **Framer Motion** | Implements smooth, scroll-triggered visual effects and floating UI elements. |
| **UI Components** | **Radix UI** | Provides accessible, high-quality primitives for complex interactive elements. |
| **Icons** | **Lucide React** | A comprehensive library of agricultural and system icons used throughout the platform. |

---

## 🏗️ Architecture & Logic

* **Custom Hooks**: The application uses modular hooks like `useAuth` for security, `useLanguage` for multilingual support, and `use-mobile` for responsive layouts.
* **Headless UI**: Built using **Radix UI** primitives to ensure the platform remains accessible to users with varying levels of digital literacy.
* **Real-time Feedback**: Integrated **Sonner** and **Toast** notification systems provide immediate alerts for weather changes or system updates.
* **Data Integrity**: TypeScript interfaces and strict schema definitions in **Supabase** ensure consistency across the full stack.

---

## 📦 Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/farmfusion.git
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Set up environment variables**:
    Create a `.env` file in the root directory and add your **Supabase** credentials:
    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
    ```
4.  **Run the development server**:
    ```bash
    npm run dev
    ```

---
