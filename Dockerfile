FROM node:20

WORKDIR /app

# ביטול בדיקת SSL
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

COPY package*.json ./

# עדכון פקודת ההתקנה עם ניסיונות חוזרים וזמן המתנה ארוך יותר
RUN npm config set fetch-retry-maxtimeout 600000 && \
    npm config set fetch-retries 5 && \
    npm install

COPY prisma ./prisma/
RUN npx prisma generate

COPY . .

RUN npm run build

CMD ["npm", "start"]