# ---- Base Image ----
FROM node:18-alpine

# ---- App Directory ----
WORKDIR /app

# ---- Only package files copy (cache use) ----
COPY package*.json ./

# ---- Fast install ----
RUN npm install --prefer-offline --no-audit

# ---- बाकी code copy ----
COPY . .

# ---- Port ----
EXPOSE 5000

# ---- Run ----
CMD ["node", "index.js"]
