# Yojana Saarthi 📮

## 📋 Overview

This project aims to **revolutionize** the financial services offered by Indian post offices by leveraging demographic and economic data from the Indian census. Our platform provides **visual insights** and **predictive analytics** to tailor banking and insurance products to specific regional needs. This solution ensures that post offices can better serve their communities by offering the right financial services at the right time.

## 🔍 Problem Statement

Indian post offices offer a range of financial services, including banking and insurance. However, these services are often deployed uniformly, **without considering the unique demographic and economic factors** of different regions. This lack of customization leads to suboptimal service offerings and missed opportunities to meet the specific needs of the local population.

## 💡 Our Solution

Our web application leverages existing Indian census data to provide a **visual, data-driven platform** that helps post offices customize their financial services based on local demographic and economic conditions.

### ✨ Key Features

- **📊 Data Visualization**: Displays demographic and economic data on interactive maps and charts to highlight regional financial needs.
- **📈 Predictive Analytics**: Uses AI to forecast demand for specific financial products based on historical and current data.
- **🌐 Customizable Reports**: Generates region-specific reports to guide the deployment of targeted financial services.
- **🤖 AI-Based Chatbot**: Offers a conversational AI interface to assist users in understanding and navigating financial services based on their specific needs.
- **🔄 Integration**: Seamlessly integrates with existing postal systems to automate service recommendations.
- **🗂️ User-Friendly Interface**: Designed to be intuitive and accessible for users with varying levels of technical expertise.

## 🛠️ Tech Stack

- **🖥️ Frontend**: Next.js
- **⚙️ Backend**: FastAPI
- **🗄️ Database**: PostgreSQL
- **🧠 AI Model**: Ollama
- **📊 Data Management**: Code Gemma

## 🚀 How to Run

1. **📥 Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/YojanaSaarthi.git
   ```

2. **🔧 Set up the backend**:
   - Install FastAPI and dependencies:
     ```bash
     pip install fastapi[all] uvicorn
     ```
   - Run the backend server:
     ```bash
     uvicorn main:app --reload
     ```

3. **🎨 Set up the frontend**:
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the Next.js development server:
     ```bash
     npm run dev
     ```

4. **🗄️ Configure the database**:
   - Ensure PostgreSQL is installed and running.
   - Set up your database connection string in `.env` file.

5. **🧠 Run AI Models**:
   - Set up Ollama for machine learning models:
     ```bash
     ollama setup
     ```
   - Train and deploy models as specified in the `ollama` directory.

6. **🌐 Visit the Application**:
   - Open your browser and navigate to `http://localhost:3000` for the frontend and `http://localhost:8000` for the API documentation.

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
