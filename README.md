# 🚀 MERN DevOps Project (CI/CD + Kubernetes + AWS)

## 📌 Project Overview

This project demonstrates a complete **end-to-end DevOps pipeline** for deploying a MERN (MongoDB, Express, React, Node.js) application using modern tools and best practices.

The application is containerized using Docker, deployed on Kubernetes, and automated through Jenkins CI/CD pipelines. It also includes auto-scaling, domain-based routing, and HTTPS configuration.

---

## 🏗️ Architecture

User → Domain → Ingress → Service → Pod → Database (MongoDB)

---

## ⚙️ Tech Stack

### 🔧 DevOps Tools

* Docker
* Kubernetes (K8s)
* Jenkins (CI/CD)
* Git & GitHub

### ☁️ Cloud

* AWS EC2

### 🌐 Web & Backend

* React.js
* Node.js
* Express.js

### 🗄️ Database

* MongoDB

---

## 🚀 Features

* ✅ Containerized application using Docker
* ✅ Kubernetes deployment with services and namespaces
* ✅ Jenkins CI/CD pipeline automation
* ✅ Horizontal Pod Autoscaler (HPA)
* ✅ Domain integration using DuckDNS
* ✅ HTTPS enabled using Certbot
* ✅ Real-time debugging and production issue handling

---

## 📂 Project Structure

```
.
├── CoosLibraryBackend/
├── CoosLibraryFrontend/
├── k8s/
│   ├── namespace.yml
│   ├── backend-deployment.yml
│   ├── backend-service.yml
│   ├── frontend-deployment.yml
│   ├── frontend-service.yml
│   ├── mongo-deployment.yml
│   ├── mongo-service.yml
│   ├── backend-hpa.yml
│   └── ingress.yml
├── Jenkinsfile
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/codewithvishal11/Mern-Devops-Projects.git
cd Mern-Devops-Projects
```

---

### 2️⃣ Kubernetes Deployment

```
kubectl apply -f k8s/
```

---

### 3️⃣ Check Resources

```
kubectl get all -n mern
```

---

### 4️⃣ Access Application

* NodePort / Ingress / Domain
* Example:

```
http://<EC2-PUBLIC-IP>:PORT
```

---

## 🔄 CI/CD Pipeline

* Code pushed to GitHub
* Jenkins triggers pipeline
* Docker image build & push
* Kubernetes deployment updated automatically

---

## 📈 Auto Scaling (HPA)

```
kubectl get hpa -n mern
```

---

## 🔐 HTTPS Setup

* Domain: DuckDNS
* SSL: Certbot
* Secure access via HTTPS

---

## 🧠 Learning Outcomes

* Hands-on DevOps pipeline implementation
* Kubernetes deployment and debugging
* CI/CD automation using Jenkins
* Cloud deployment on AWS
* Scaling and production-level problem solving

---

## 👨‍💻 Author

**Vishal Singh**
📧 [vishal930548@gmail.com](mailto:vishal930548@gmail.com)
🔗 GitHub: https://github.com/codewithvishal11

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

