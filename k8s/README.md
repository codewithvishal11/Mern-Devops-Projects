# 🚀 MERN DevOps Project (Docker + Kubernetes + CI/CD)

## 📌 Project Overview

This project demonstrates deployment of a full-stack **MERN (MongoDB, Express, React, Node.js)** application using **Docker, Kubernetes, Jenkins CI/CD**, and **AWS EC2**.

The goal was to build a **production-like DevOps pipeline** with containerization, orchestration, and automated deployment.

---

## 🏗️ Architecture

```
GitHub → Jenkins (CI/CD) → Docker → Kubernetes (kind) → AWS EC2
```

### Tech Stack:

* **Frontend**: React + Vite
* **Backend**: Node.js + Express
* **Database**: MongoDB
* **Containerization**: Docker
* **Orchestration**: Kubernetes (kind)
* **CI/CD**: Jenkins + GitHub Webhook
* **Cloud**: AWS EC2

---

## 📂 Project Structure

```
.
├── CoosLibraryFrontend/
├── CoosLibraryBackend/
├── k8s/
│   ├── backend-deployment.yml
│   ├── frontend-deployment.yml
│   ├── mongo-deployment.yml
│   ├── backend-service.yml
│   ├── frontend-service.yml
│   ├── mongo-service.yml
│   └── ingress.yml
├── kind-config.yaml
└── Jenkinsfile
```

---

## 🐳 Docker Setup

### Build Images

```bash
docker build -t <your-dockerhub>/frontend ./CoosLibraryFrontend
docker build -t <your-dockerhub>/backend ./CoosLibraryBackend
```

### Push to DockerHub

```bash
docker push <your-dockerhub>/frontend
docker push <your-dockerhub>/backend
```

---

## ☸️ Kubernetes Deployment

### Create Cluster

```bash
kind create cluster --config kind-config.yaml
```

### Create Namespace

```bash
kubectl create namespace mern
```

### Apply Resources

```bash
kubectl apply -f k8s/ -n mern
```

---

## 🌐 Access Application

### Using NodePort

```text
Frontend → http://<EC2-IP>:30009
Backend  → http://<EC2-IP>:30010
```

---

## 🌍 Ingress + Domain

* Configured **NGINX Ingress Controller**
* Connected **DuckDNS domain**
* Routing:

```text
/      → Frontend
/api   → Backend
```

---

## ⚙️ CI/CD Pipeline (Jenkins)

### Pipeline Steps:

1. Clone GitHub Repository
2. Build Docker Images
3. Push Images to DockerHub
4. Deploy to Kubernetes
5. Restart Deployments

---

## 🔥 Problems Faced & Solutions

| Issue                    | Solution                      |
| ------------------------ | ----------------------------- |
| ImagePullBackOff         | Fixed DockerHub image push    |
| CrashLoopBackOff         | Fixed Docker CMD & entry file |
| MongoDB connection error | Used Kubernetes service DNS   |
| NodePort not accessible  | Used kind port mapping        |
| Disk full issue          | Docker prune & cleanup        |

---

## 🔐 Environment Variables

```env
MONGO_URI=mongodb://mongo:27017/ebookdb
PORT=5000
JWT_KEY=your_secret
```

---

## 🚀 Future Improvements

* ✅ HTTPS with Let's Encrypt
* ✅ Auto-scaling (HPA)
* ✅ Monitoring (Prometheus + Grafana)
* ✅ Move to AWS EKS

---

## 👨‍💻 Author

**Vishal Singh**

* DevOps Learner 🚀
* Passionate about Cloud & Automation

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and support!

---
