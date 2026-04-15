import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // השורה הזו קריטית כדי ש-Prisma תדע איפה ה-DB בזמן הפעלת המיגרציות
    url: process.env.DATABASE_URL,
  },
});